// One-time setup: invites the company mailbox as first admin. Refuses once any admin exists.
import { createClient } from "npm:@supabase/supabase-js@2";
import { corsHeaders } from "npm:@supabase/supabase-js@2/cors";

const ADMIN_EMAIL = "office@aureliaestates.de";
const REDIRECT = "https://id-preview--704a5e06-307e-4578-9342-8b45b9fe4f58.lovable.app/verwaltung/passwort";

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });
  const json = (b: unknown, status = 200) => new Response(JSON.stringify(b), { status, headers: { ...corsHeaders, "Content-Type": "application/json" } });
  const admin = createClient(Deno.env.get("SUPABASE_URL")!, Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!);
  const { count } = await admin.from("user_roles").select("id", { count: "exact", head: true }).eq("role", "admin");
  if ((count ?? 0) > 0) return json({ error: "already initialised" }, 403);
  const { data, error } = await admin.auth.admin.inviteUserByEmail(ADMIN_EMAIL, { redirectTo: REDIRECT });
  if (error || !data.user) return json({ error: "invite failed" }, 500);
  const { error: roleError } = await admin.from("user_roles").insert({ user_id: data.user.id, role: "admin" });
  if (roleError) return json({ error: "role failed" }, 500);
  return json({ success: true });
});
