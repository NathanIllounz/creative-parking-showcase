import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { code } = await req.json();
    const adminCode = Deno.env.get("ADMIN_CSV_CODE");

    if (!adminCode || code !== adminCode) {
      return new Response(JSON.stringify({ error: "Invalid admin code" }), {
        status: 403,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const supabase = createClient(Deno.env.get("SUPABASE_URL")!, Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!);

    const { data, error } = await supabase
      .from("contact_submissions")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) throw error;

    // Build CSV
    const headers = ["Date", "Name", "Email", "Phone", "Message"];
    const rows = (data || []).map((row) => [
      new Date(row.created_at).toLocaleString("en-GB", { timeZone: "Asia/Jerusalem" }),
      `"${(row.name || "").replace(/"/g, '""')}"`,
      `"${(row.email || "").replace(/"/g, '""')}"`,
      `"${(row.phone || "").replace(/"/g, '""')}"`,
      `"${(row.message || "").replace(/"/g, '""')}"`,
    ]);

    const csv = [headers.join(","), ...rows.map((r) => r.join(","))].join("\n");

    return new Response(csv, {
      status: 200,
      headers: {
        ...corsHeaders,
        "Content-Type": "text/csv; charset=utf-8",
        "Content-Disposition": 'attachment; filename="contact_submissions.csv"',
      },
    });
  } catch (error) {
    console.error("Export error:", error);
    return new Response(JSON.stringify({ error: "Export failed" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
