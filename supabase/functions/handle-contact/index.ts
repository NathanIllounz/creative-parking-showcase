import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import { MongoClient } from "https://deno.land/x/mongo@v0.33.0/mod.ts";

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
    const { name, email, phone, message } = await req.json();

    // Validate inputs
    if (!name || typeof name !== "string" || name.trim().length === 0 || name.length > 200) {
      return new Response(
        JSON.stringify({ error: "Invalid name" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }
    if (!email || typeof email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 255) {
      return new Response(
        JSON.stringify({ error: "Invalid email" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }
    if (phone && (typeof phone !== "string" || phone.length > 30)) {
      return new Response(
        JSON.stringify({ error: "Invalid phone" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }
    if (!message || typeof message !== "string" || message.trim().length === 0 || message.length > 5000) {
      return new Response(
        JSON.stringify({ error: "Invalid message" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    const now = new Date();

    // 1. Save to Supabase database
    const { error: dbError } = await supabase.from("contact_submissions").insert({
      name: name.trim(),
      email: email.trim(),
      phone: phone?.trim() || null,
      message: message.trim(),
    });

    if (dbError) {
      console.error("DB insert error:", dbError);
      throw new Error(`Database error: ${dbError.message}`);
    }

    // 2. Save to MongoDB Atlas
    const mongoUri = Deno.env.get("MONGODB_URI");
    const mongoDbName = Deno.env.get("MONGODB_DB_NAME") || "creative_parking";

    if (mongoUri) {
      try {
        const client = new MongoClient();
        await client.connect(mongoUri);
        const db = client.database(mongoDbName);
        const collection = db.collection("contact_submissions");

        await collection.insertOne({
          name: name.trim(),
          email: email.trim(),
          phone: phone?.trim() || null,
          message: message.trim(),
          created_at: now,
        });

        client.close();
        console.log("✅ Saved to MongoDB Atlas");
      } catch (mongoError) {
        console.error("MongoDB error:", mongoError);
        // Don't fail the whole request if MongoDB fails
      }
    } else {
      console.warn("MONGODB_URI not configured, skipping MongoDB insert");
    }

    return new Response(
      JSON.stringify({ success: true, message: "Contact submission received" }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error processing contact submission:", error);
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    return new Response(
      JSON.stringify({ success: false, error: errorMessage }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
