// Interne Benachrichtigung für alle Formulare – vollständiger Inhalt.
// Enthält alle Formularangaben (Kontakt, Objektdaten, Freitext) an office@, Reply-To = Interessent.
// NIE enthalten: Dokumente, Dateinamen oder Download-Links – nur Anzahl + Link in den
// geschützten Verwaltungsbereich (Anmeldung erforderlich).

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const GATEWAY_URL = "https://connector-gateway.lovable.dev/resend";
const FROM_EMAIL = Deno.env.get("RESEND_FROM_EMAIL") ?? "office@aureliaestates.de";
const FROM_NAME = "Aurelia Grundbesitz GmbH";
const NOTIFY_TO = "office@aureliaestates.de";
const ADMIN_URL = "https://aureliaestates.de/verwaltung";
const SUPABASE_URL = Deno.env.get("SUPABASE_URL");
const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
const DOCUMENT_BUCKET = "turkey-property-documents";

const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
const PATH_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}\/[^/]{1,200}$/i;

interface Submission {
  id: string; form_type: string | null; created_at: string; message: string;
  property_type: string | null; subject: string | null; country: string | null; callback_requested: boolean | null;
  salutation: string | null; first_name: string | null; last_name: string | null; email: string | null; phone: string | null;
}
const EMAIL_RE = /^[^\s@<>",;]{1,64}@[^\s@<>",;]{1,190}\.[a-z]{2,}$/i;

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), { status, headers: { ...corsHeaders, "Content-Type": "application/json" } });
const serviceHeaders = (extra: Record<string, string> = {}) => ({
  apikey: SUPABASE_SERVICE_ROLE_KEY!, Authorization: `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`, "Content-Type": "application/json", ...extra,
});

async function getRecentSubmission(id: unknown): Promise<Submission | null> {
  if (typeof id !== "string" || !UUID_RE.test(id) || !SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) return null;
  const since = new Date(Date.now() - 15 * 60 * 1000).toISOString();
  const res = await fetch(
    `${SUPABASE_URL}/rest/v1/contact_submissions?id=eq.${id}&created_at=gte.${encodeURIComponent(since)}&select=id,form_type,created_at,message,property_type,subject,country,callback_requested,salutation,first_name,last_name,email,phone`,
    { headers: serviceHeaders() },
  );
  if (!res.ok) return null;
  const rows = await res.json();
  return Array.isArray(rows) && rows[0] ? rows[0] : null;
}

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

async function countFiles(submissionId: string): Promise<number> {
  const res = await fetch(`${SUPABASE_URL}/rest/v1/submission_files?submission_id=eq.${submissionId}&select=id`, { headers: serviceHeaders() });
  const rows = res.ok ? await res.json() : [];
  return Array.isArray(rows) ? rows.length : 0;
}

// Liest nur Zeilen „Bezeichnung: Wert“ aus dem strukturierten Kopfteil (vor der ersten Leerzeile).
function readFields(message: string): Map<string, string> {
  const map = new Map<string, string>();
  for (const line of message.split("\n")) {
    if (!line.trim()) break;
    const i = line.indexOf(":");
    if (i > 0) map.set(line.slice(0, i).trim(), line.slice(i + 1).trim());
  }
  return map;
}
const clean = (v: string | null | undefined, max = 80) => {
  const s = (v ?? "").replace(/[\r\n\t]+/g, " ").replace(/\s+/g, " ").trim();
  return s ? (s.length > max ? `${s.slice(0, max - 1)}…` : s) : "–";
};
const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const berlin = (iso: string) =>
  new Intl.DateTimeFormat("de-DE", { dateStyle: "medium", timeStyle: "short", timeZone: "Europe/Berlin" }).format(new Date(iso)) + " Uhr";

type Notice = { subject: string; heading: string; rows: [string, string][] };

function buildNotice(s: Submission, files: number): Notice {
  const f = readFields(s.message);
  const get = (k: string) => clean(f.get(k));
  const price = f.get("Preisvorstellung")?.trim() ? "angegeben" : "nicht angegeben";
  const docs = files ? `${files} (geschützt gespeichert)` : "keine";
  const received: [string, string] = ["Eingang", berlin(s.created_at)];
  const isPropertyForm = f.has("Immobilienart");

  if (s.form_type === "germany_property" || (s.form_type === "turkey_property" && isPropertyForm)) {
    const tr = s.form_type === "turkey_property";
    const type = get("Immobilienart");
    const place = tr ? get("Provinz / Stadt") : get("Ort / PLZ");
    const rows: [string, string][] = [received, ["Immobilienart", type]];
    if (tr) rows.push(["Provinz / Stadt", place], ["Bezirk / Stadtteil", get("Bezirk / Stadtteil")]);
    else rows.push(["Ort / PLZ", place]);
    rows.push(["Fläche", get("Fläche")]);
    if (!tr) rows.push(["Einheiten", get("Einheiten")]);
    rows.push(["Zimmer", get("Zimmer")]);
    if (!tr) rows.push(["Zustand", get("Zustand")]);
    rows.push(["Baujahr", get("Baujahr")], ["Vermietet", get("Vermietet")]);
    if (tr) rows.push(["Tapu vorhanden", get("Tapu vorhanden")]);
    rows.push(["Preisvorstellung", price], ["Dokumente", docs]);
    return {
      subject: `${tr ? "Neues Immobilienangebot Türkei" : "Neues Immobilienangebot"}: ${type}, ${place}`,
      heading: tr ? "Neues Immobilienangebot – Türkei" : "Neues Immobilienangebot – Deutschland",
      rows,
    };
  }

  if (s.form_type === "buyer_interest") {
    const stock = (s.subject ?? "").includes("Unser Bestand");
    const types = get("Immobilienarten"), budget = get("Kaufpreisrahmen");
    const rows: [string, string][] = [received];
    if (!stock) rows.push(["Märkte", get("Märkte")]);
    rows.push(["Immobilienarten", types], ["Kaufpreisrahmen", budget]);
    if (!stock) rows.push(["Nutzung", get("Nutzung")]);
    return {
      subject: stock ? `Neues Kaufinteresse (Bestand): ${types}, ${budget}` : `Neues Kaufinteresse: ${get("Märkte")}, ${budget}`,
      heading: stock ? "Neues Kaufinteresse – Aurelia-Bestand (über „Unser Bestand“)" : "Neues Kaufinteresse – Aurelia-Bestand",
      rows,
    };
  }

  // Allgemeines Kontaktformular (auch mit Standort Türkei)
  const callback = s.callback_requested === true;
  return {
    subject: callback ? "Neue Kontaktanfrage: Rückruf gewünscht" : "Neue Kontaktanfrage",
    heading: "Neue Kontaktanfrage",
    rows: [received, ["Immobilienart", clean(s.property_type)], ["Standort-Land", clean(s.country)], ["Rückruf gewünscht", callback ? "Ja" : "Nein"]],
  };
}

function render(n: Notice, link: string) {
  const footer = "Kontaktdaten, Nachricht und Dokumente sind aus Datenschutzgründen nur im geschützten Verwaltungsbereich einsehbar.";
  const text = [
    "AURELIA GRUNDBESITZ – Interne Benachrichtigung", "", n.heading, "",
    ...n.rows.map(([k, v]) => `${k}: ${v}`), "",
    `Anfrage im Verwaltungsbereich öffnen (Anmeldung erforderlich): ${link}`, "", footer,
  ].join("\n");
  const rowsHtml = n.rows.map(([k, v]) =>
    `<tr><td style="padding:8px 16px 8px 0;color:#5b6478;font-size:14px;white-space:nowrap;vertical-align:top;">${esc(k)}</td><td style="padding:8px 0;color:#1a2238;font-size:14px;font-weight:600;">${esc(v)}</td></tr>`).join("");
  const html = `<!doctype html><html lang="de"><head><meta charset="utf-8"></head><body style="margin:0;background:#ffffff;font-family:Arial,Helvetica,sans-serif;color:#1a2238;">
<div style="max-width:560px;margin:0 auto;padding:32px 24px;">
<p style="margin:0 0 4px;font-size:11px;letter-spacing:2px;text-transform:uppercase;color:#1a2b4c;font-weight:700;">Aurelia Grundbesitz · Interne Benachrichtigung</p>
<h1 style="margin:0 0 24px;font-size:22px;line-height:1.3;color:#1a2b4c;font-family:Georgia,serif;font-weight:600;">${esc(n.heading)}</h1>
<table role="presentation" style="border-collapse:collapse;width:100%;border-top:2px solid #1a2b4c;">${rowsHtml}</table>
<p style="margin:28px 0 8px;"><a href="${esc(link)}" style="display:inline-block;background:#1a2b4c;color:#ffffff;text-decoration:none;padding:12px 22px;border-radius:2px;font-size:14px;font-weight:600;">Anfrage im Verwaltungsbereich öffnen</a></p>
<p style="margin:0 0 24px;font-size:12px;color:#5b6478;">Anmeldung erforderlich.</p>
<p style="margin:0;font-size:12px;line-height:1.6;color:#5b6478;">${esc(footer)}</p>
</div></body></html>`;
  return { text, html };
}

async function send(n: Notice, link: string) {
  const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
  const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
  if (!LOVABLE_API_KEY || !RESEND_API_KEY) throw new Error("Email credentials missing");
  const { text, html } = render(n, link);
  const res = await fetch(`${GATEWAY_URL}/emails`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: `Bearer ${LOVABLE_API_KEY}`, "X-Connection-Api-Key": RESEND_API_KEY },
    body: JSON.stringify({ from: `${FROM_NAME} <${FROM_EMAIL}>`, to: [NOTIFY_TO], subject: n.subject.slice(0, 180), text, html }),
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok || typeof data?.id !== "string") {
    console.error(JSON.stringify({ event: "email_rejected", providerStatus: res.status }));
    throw new Error(`Resend error [${res.status}]`);
  }
  console.log(JSON.stringify({ event: "email_accepted", mailType: "internal_key_facts", resendId: data.id }));
  return { accepted: true as const, id: data.id as string };
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });
  try {
    const body = await req.json().catch(() => null) as { submission_id?: unknown; files?: unknown } | null;
    const submission = await getRecentSubmission(body?.submission_id);
    if (!submission) return json({ error: "Invalid submission" }, 400);
    await linkFilesToSubmission(submission.id, body?.files);
    const notice = buildNotice(submission, await countFiles(submission.id));
    const internalMailResult = await send(notice, `${ADMIN_URL}?anfrage=${submission.id}`);
    return json({ success: true, internalMailResult, customerConfirmationResult: { accepted: false, skipped: true }, confirmationSent: false });
  } catch (error) {
    console.error("send-inquiry-notice failed:", error instanceof Error ? error.message : "unknown");
    return json({ success: false, error: "Notification failed" }, 500);
  }
});
