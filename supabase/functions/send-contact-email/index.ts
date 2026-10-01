// Datensparsamer Benachrichtigungsversand für alle Formulare.
// Vollständige Anfragen bleiben ausschließlich in Lovable Cloud (Verwaltungsbereich).
// An Resend geht nur eine neutrale interne Benachrichtigung an office@aureliaestates.de –
// ohne Namen, E-Mail-Adressen, Telefonnummern, Inhalte, Dateinamen, Links oder Anfrage-IDs.
// Es werden keine Bestätigungs-E-Mails an Interessenten versendet.

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const GATEWAY_URL = "https://connector-gateway.lovable.dev/resend";
const FROM_EMAIL = Deno.env.get("RESEND_FROM_EMAIL") ?? "office@aureliaestates.de";
const FROM_NAME = "Aurelia Grundbesitz GmbH";
const NOTIFY_TO = "office@aureliaestates.de";
const SUPABASE_URL = Deno.env.get("SUPABASE_URL");
const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
const DOCUMENT_BUCKET = "turkey-property-documents";

const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
const PATH_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}\/[^/]{1,200}$/i;

const SUBJECTS: Record<string, string> = {
  general_contact: "Neue Kontaktanfrage",
  germany_property: "Neues Immobilienangebot",
  turkey_property: "Neue Immobilienanfrage – Türkei",
  buyer_interest: "Neues Kaufinteresse",
};

const NEUTRAL_TEXT =
  "Eine neue Anfrage ist eingegangen. Bitte melden Sie sich im geschützten Verwaltungsbereich an, um die Anfrage zu bearbeiten.";

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), { status, headers: { ...corsHeaders, "Content-Type": "application/json" } });

function serviceHeaders(extra: Record<string, string> = {}) {
  return { apikey: SUPABASE_SERVICE_ROLE_KEY!, Authorization: `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`, "Content-Type": "application/json", ...extra };
}

// Nur frisch angelegte Anfragen (max. 15 Minuten) – schützt vor Missbrauch fremder IDs.
async function getRecentSubmission(id: unknown): Promise<{ id: string; form_type: string | null } | null> {
  if (typeof id !== "string" || !UUID_RE.test(id) || !SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) return null;
  const since = new Date(Date.now() - 15 * 60 * 1000).toISOString();
  const res = await fetch(
    `${SUPABASE_URL}/rest/v1/contact_submissions?id=eq.${id}&created_at=gte.${encodeURIComponent(since)}&select=id,form_type`,
    { headers: serviceHeaders() },
  );
  if (!res.ok) return null;
  const rows = await res.json();
  return Array.isArray(rows) && rows[0] ? rows[0] : null;
}

// Ordnet hochgeladene Dateien der Anfrage zu (nur existierende Objekte im privaten Speicher).
async function linkFilesToSubmission(submissionId: string, files: unknown) {
  if (!Array.isArray(files)) return;
  for (const file of files.slice(0, 10)) {
    const path = (file as { path?: unknown })?.path;
    if (typeof path !== "string" || !PATH_RE.test(path)) continue;
    const [folder, objectName] = path.split("/");
    const list = await fetch(`${SUPABASE_URL}/storage/v1/object/list/${DOCUMENT_BUCKET}`, {
      method: "POST", headers: serviceHeaders(), body: JSON.stringify({ prefix: folder, limit: 5 }),
    });
    const objects = list.ok ? await list.json() : [];
    if (!Array.isArray(objects) || !objects.some((o: { name?: string }) => o?.name === objectName)) continue;
    await fetch(`${SUPABASE_URL}/rest/v1/submission_files?on_conflict=object_path`, {
      method: "POST", headers: serviceHeaders({ Prefer: "resolution=ignore-duplicates,return=minimal" }),
      body: JSON.stringify({ submission_id: submissionId, object_path: path, file_name: objectName }),
    });
  }
}

async function sendNeutralNotice(subject: string) {
  const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
  const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
  if (!LOVABLE_API_KEY || !RESEND_API_KEY) throw new Error("Email credentials missing");
  const res = await fetch(`${GATEWAY_URL}/emails`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: `Bearer ${LOVABLE_API_KEY}`, "X-Connection-Api-Key": RESEND_API_KEY },
    body: JSON.stringify({
      from: `${FROM_NAME} <${FROM_EMAIL}>`,
      to: [NOTIFY_TO],
      subject,
      text: NEUTRAL_TEXT,
      html: `<!doctype html><html lang="de"><head><meta charset="utf-8"></head><body style="font-family:Arial,sans-serif;color:#1a2238;"><p style="font-size:15px;line-height:1.7;">${NEUTRAL_TEXT}</p></body></html>`,
    }),
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok || typeof data?.id !== "string") {
    console.error(JSON.stringify({ event: "email_rejected", providerStatus: res.status, providerError: data }));
    throw new Error(`Resend error [${res.status}]`);
  }
  console.log(JSON.stringify({ event: "email_accepted", mailType: "internal_neutral", resendId: data.id }));
  return { accepted: true as const, id: data.id as string };
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });
  try {
    const body = await req.json().catch(() => null) as { submission_id?: unknown; files?: unknown } | null;
    const submission = await getRecentSubmission(body?.submission_id);
    if (!submission) return json({ error: "Invalid submission" }, 400);

    await linkFilesToSubmission(submission.id, body?.files);
    const subject = SUBJECTS[submission.form_type ?? ""] ?? "Neue Anfrage";
    const internalMailResult = await sendNeutralNotice(subject);

    return json({
      success: true,
      internalMailResult,
      customerConfirmationResult: { accepted: false, skipped: true },
      confirmationSent: false,
    });
  } catch (error) {
    console.error("send-contact-email failed:", error instanceof Error ? error.message : "unknown");
    return json({ success: false, error: "Notification failed" }, 500);
  }
});
