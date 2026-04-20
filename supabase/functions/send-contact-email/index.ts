const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

const GATEWAY_URL = "https://connector-gateway.lovable.dev/resend";

// Verifizierte Domain in Resend? Dann hier auf 'office@aureliaestates.de' umstellen.
// Solange Domain noch nicht verifiziert ist, nutzen wir Resend's Test-Absender.
const FROM_EMAIL = Deno.env.get("RESEND_FROM_EMAIL") ?? "onboarding@resend.dev";
const FROM_NAME = "Aurelia Grundbesitz GmbH";
const REPLY_TO = "office@aureliaestates.de";
// Solange Resend-Domain noch nicht verifiziert ist, gehen alle Mails an die verifizierte Test-Adresse.
// Nach Domain-Verifizierung: NOTIFY_TO auf "office@aureliaestates.de" zurücksetzen und Bestätigungs-Block reaktivieren.
const NOTIFY_TO = "y.alkac@googlemail.com";
const SANDBOX_MODE = true;
const SANDBOX_TEST_RECIPIENT = "y.alkac@googlemail.com";

interface ContactPayload {
  name: string;
  email: string;
  phone?: string | null;
  property_type?: string | null;
  message: string;
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && email.length <= 254;
}

async function sendEmail(payload: {
  to: string[];
  subject: string;
  html: string;
  text: string;
  reply_to?: string;
}) {
  const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
  const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
  if (!LOVABLE_API_KEY) throw new Error("LOVABLE_API_KEY missing");
  if (!RESEND_API_KEY) throw new Error("RESEND_API_KEY missing");

  const res = await fetch(`${GATEWAY_URL}/emails`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${LOVABLE_API_KEY}`,
      "X-Connection-Api-Key": RESEND_API_KEY,
    },
    body: JSON.stringify({
      from: `${FROM_NAME} <${FROM_EMAIL}>`,
      to: payload.to,
      subject: payload.subject,
      html: payload.html,
      text: payload.text,
      reply_to: payload.reply_to,
    }),
  });

  const data = await res.json();
  if (!res.ok) {
    throw new Error(`Resend error [${res.status}]: ${JSON.stringify(data)}`);
  }
  return data;
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const body = (await req.json()) as ContactPayload;

    // Validation
    if (!body?.name || typeof body.name !== "string" || body.name.length > 200) {
      return new Response(JSON.stringify({ error: "Invalid name" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }
    if (!body?.email || !isValidEmail(body.email)) {
      return new Response(JSON.stringify({ error: "Invalid email" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }
    if (!body?.message || typeof body.message !== "string" || body.message.length > 5000) {
      return new Response(JSON.stringify({ error: "Invalid message" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const name = escapeHtml(body.name);
    const email = escapeHtml(body.email);
    const phone = body.phone ? escapeHtml(body.phone) : "";
    const propertyType = body.property_type ? escapeHtml(body.property_type) : "";
    const message = escapeHtml(body.message).replace(/\n/g, "<br/>");

    // 1) Bestätigung an Absender (Deutsch, seriös)
    const confirmationHtml = `
<!doctype html>
<html lang="de"><head><meta charset="utf-8"></head>
<body style="margin:0;padding:0;background:#ffffff;font-family:Georgia,'Times New Roman',serif;color:#1a2238;">
  <div style="max-width:560px;margin:0 auto;padding:40px 28px;">
    <p style="font-size:15px;line-height:1.7;margin:0 0 18px;">Guten Tag,</p>
    <p style="font-size:15px;line-height:1.7;margin:0 0 18px;">vielen Dank für Ihre Anfrage und Ihr Vertrauen.</p>
    <p style="font-size:15px;line-height:1.7;margin:0 0 18px;">
      Ihre Nachricht ist bei uns eingegangen und wird vertraulich bearbeitet.
      Wir melden uns schnellstmöglich bei Ihnen zurück.
    </p>
    <p style="font-size:15px;line-height:1.7;margin:28px 0 0;">Mit freundlichen Grüßen<br/>Aurelia Grundbesitz GmbH</p>
    <hr style="border:none;border-top:1px solid #e5e7eb;margin:32px 0 16px;"/>
    <p style="font-size:12px;line-height:1.6;color:#6b7280;margin:0;">
      Aurelia Grundbesitz GmbH · Grevenbroicher Weg 2 · 40547 Düsseldorf<br/>
      office@aureliaestates.de
    </p>
  </div>
</body></html>`.trim();

    const confirmationText = `Guten Tag,

vielen Dank für Ihre Anfrage und Ihr Vertrauen.

Ihre Nachricht ist bei uns eingegangen und wird vertraulich bearbeitet. Wir melden uns schnellstmöglich bei Ihnen zurück.

Mit freundlichen Grüßen
Aurelia Grundbesitz GmbH

—
Aurelia Grundbesitz GmbH · Grevenbroicher Weg 2 · 40547 Düsseldorf
office@aureliaestates.de`;

    // 2) Benachrichtigung an office@
    const notifyHtml = `
<!doctype html>
<html lang="de"><head><meta charset="utf-8"></head>
<body style="margin:0;padding:0;background:#ffffff;font-family:Arial,sans-serif;color:#1a2238;">
  <div style="max-width:600px;margin:0 auto;padding:32px 24px;">
    <h2 style="font-size:18px;margin:0 0 18px;">Neue Kontaktanfrage</h2>
    <table style="width:100%;border-collapse:collapse;font-size:14px;">
      <tr><td style="padding:6px 0;color:#6b7280;width:140px;">Name</td><td style="padding:6px 0;">${name}</td></tr>
      <tr><td style="padding:6px 0;color:#6b7280;">E-Mail</td><td style="padding:6px 0;"><a href="mailto:${email}">${email}</a></td></tr>
      ${phone ? `<tr><td style="padding:6px 0;color:#6b7280;">Telefon</td><td style="padding:6px 0;">${phone}</td></tr>` : ""}
      ${propertyType ? `<tr><td style="padding:6px 0;color:#6b7280;">Thema</td><td style="padding:6px 0;">${propertyType}</td></tr>` : ""}
    </table>
    <hr style="border:none;border-top:1px solid #e5e7eb;margin:20px 0;"/>
    <p style="font-size:13px;color:#6b7280;margin:0 0 6px;">Nachricht:</p>
    <div style="font-size:14px;line-height:1.7;">${message}</div>
  </div>
</body></html>`.trim();

    const notifyText = `Neue Kontaktanfrage

Name: ${body.name}
E-Mail: ${body.email}
${body.phone ? `Telefon: ${body.phone}\n` : ""}${body.property_type ? `Thema: ${body.property_type}\n` : ""}
Nachricht:
${body.message}`;

    // Erst Benachrichtigung an office@ senden — dies ist kritisch
    await sendEmail({
      to: [NOTIFY_TO],
      subject: `Neue Kontaktanfrage von ${body.name}`,
      html: notifyHtml,
      text: notifyText,
      reply_to: body.email,
    });

    // Bestätigung an Absender — im Sandbox-Modus nur, wenn Absender = Test-Adresse,
    // sonst lehnt Resend die Mail mit 403 ab. Fehler hier blockieren nie den Erfolg.
    const canSendConfirmation =
      !SANDBOX_MODE || body.email.toLowerCase() === SANDBOX_TEST_RECIPIENT.toLowerCase();
    if (canSendConfirmation) {
      try {
        await sendEmail({
          to: [body.email],
          subject: "Vielen Dank für Ihre Anfrage",
          html: confirmationHtml,
          text: confirmationText,
          reply_to: REPLY_TO,
        });
      } catch (e) {
        console.error("Confirmation email failed (non-blocking):", e);
      }
    } else {
      console.log("Skipping confirmation email in sandbox mode for:", body.email);
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("send-contact-email error:", error);
    const msg = error instanceof Error ? error.message : "Unknown error";
    return new Response(JSON.stringify({ success: false, error: msg }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
