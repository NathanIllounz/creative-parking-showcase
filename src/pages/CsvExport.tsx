import { useState } from "react";
import { Lock, Download, Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const CsvExport = () => {
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleDownload = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!code.trim()) return;
    setLoading(true);

    try {
      const { data, error } = await supabase.functions.invoke("export-csv", {
        body: { code: code.trim() },
      });

      if (error) throw error;

      // data is already the CSV text
      const blob = new Blob([data], { type: "text/csv;charset=utf-8;" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "contact_submissions.csv";
      a.click();
      URL.revokeObjectURL(url);

      toast({ title: "Success", description: "CSV downloaded successfully." });
    } catch (err: any) {
      console.error(err);
      toast({
        title: "Access Denied",
        description: "Invalid admin code or export failed.",
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
