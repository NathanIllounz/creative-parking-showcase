import { useState } from "react";
import { Lock, Download, Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

function toUtf16LeBomBytes(text: string) {
  const bytes = new Uint8Array(2 + text.length * 2);
  // UTF-16LE BOM
  bytes[0] = 0xff;
  bytes[1] = 0xfe;
  for (let i = 0; i < text.length; i++) {
    const codeUnit = text.charCodeAt(i);
    bytes[2 + i * 2] = codeUnit & 0xff;
    bytes[2 + i * 2 + 1] = (codeUnit >> 8) & 0xff;
  }
  return bytes;
}

const CsvExport = () => {
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleDownload = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!code.trim()) return;
    setLoading(true);

    try {
      // NOTE: Since we are bypassing Edge Functions and Auth, 
      // this password check happens in the browser bundle.
      // Additionally, the Supabase table must have a public SELECT policy.
      const ADMIN_CODE = "floraI12345!";

      if (code.trim() !== ADMIN_CODE) {
        throw new Error("Invalid admin code");
      }

      // Fetch directly from the table bypassing Edge Functions
      const { data, error } = await supabase
        .from("contact_submissions")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Supabase Select Error:", error);
        throw error;
      }

      const headers = ["Date", "Name", "Email", "Phone", "Message"];
      const rows = (data || []).map((row) => [
        new Date(row.created_at).toLocaleString("en-GB", { timeZone: "Asia/Jerusalem" }),
        `"${(row.name || "").replace(/"/g, '""')}"`,
        `"${(row.email || "").replace(/"/g, '""')}"`,
        `"${(row.phone || "").replace(/"/g, '""')}"`,
        `"${(row.message || "").replace(/"/g, '""')}"`,
      ]);

      const csvText = [headers.join(","), ...rows.map((r) => r.join(","))].join("\n");

      if (!csvText) throw new Error("Empty CSV generated");

      // Excel on Windows often mis-detects UTF-8; UTF-16LE w/ BOM is more reliable for Hebrew.
      const blob = new Blob([toUtf16LeBomBytes(csvText)], { type: "text/csv;charset=utf-16le;" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "contact_submissions.csv";
      a.click();
      URL.revokeObjectURL(url);

      toast({ title: "Success", description: "CSV downloaded successfully." });
    } catch (err: any) {
      console.error("CsvExport Fetch/Process Error:", err);
      toast({
        title: "Access Denied",
        description: err.message === "Invalid admin code" ? "Invalid admin code" : "Export failed. Check console.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-20 min-h-screen bg-background flex items-center justify-center">
      <div className="w-full max-w-md mx-auto p-8">
        <div className="bg-card rounded-lg border border-border p-8 text-center space-y-6">
          <div className="w-14 h-14 gradient-orange rounded-full flex items-center justify-center mx-auto">
            <Lock size={24} className="text-primary-foreground" />
          </div>
          <div>
            <h1 className="font-display text-2xl font-bold text-foreground">Admin Export</h1>
            <p className="text-muted-foreground text-sm mt-1">Enter admin code to download contact submissions</p>
          </div>
          <form onSubmit={handleDownload} className="space-y-4">
            <Input
              type="password"
              placeholder="Enter admin code"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              required
              disabled={loading}
            />
            <Button type="submit" className="w-full gradient-orange text-primary-foreground" disabled={loading}>
              {loading ? (
                <><Loader2 size={16} className="animate-spin" /> Verifying...</>
              ) : (
                <><Download size={16} /> Download CSV</>
              )}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CsvExport;
