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
const SUPABASE_URL = Deno.env.get("SUPABASE_URL");
const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
const TURKEY_DOCUMENT_BUCKET = "turkey-property-documents";

interface ContactPayload {
  name: string;
  email: string;
  phone?: string | null;
  property_type?: string | null;
  message: string;
  language?: string | null;
  preferred_language?: string | null;
  files?: { name: string; path: string; size: number; type: string }[];
}

type Locale = "de" | "en" | "nl" | "it" | "es" | "tr";

const LOCALES: Locale[] = ["de", "en", "nl", "it", "es", "tr"];

const LANGUAGE_NAMES_DE: Record<Locale, string> = {
  de: "Deutsch",
  en: "Englisch",
  nl: "Niederländisch",
  it: "Italienisch",
  es: "Spanisch",
  tr: "Türkisch",
};

// Erkennt sowohl Locale-Codes ("de", "de-DE") als auch Klartext-Namen
// aus dem Formularfeld "bevorzugte Sprache" ("Türkçe", "Nederlands", ...).
const LANGUAGE_ALIASES: Record<string, Locale> = {
  deutsch: "de", german: "de", duits: "de", tedesco: "de", alemán: "de", aleman: "de", almanca: "de",
  english: "en", englisch: "en", engels: "en", inglese: "en", inglés: "en", ingles: "en", ingilizce: "en", "i̇ngilizce": "en",
  nederlands: "nl", niederländisch: "nl", niederlaendisch: "nl", dutch: "nl", olandese: "nl", neerlandés: "nl", neerlandes: "nl", felemenkçe: "nl",
  italiano: "it", italienisch: "it", italian: "it", italiaans: "it", italiano_es: "it", italyanca: "it",
  español: "es", espanol: "es", spanisch: "es", spanish: "es", spaans: "es", spagnolo: "es", "i̇spanyolca": "es", ispanyolca: "es",
  türkçe: "tr", turkce: "tr", türkisch: "tr", turkish: "tr", turks: "tr", turco: "tr",
};

function resolveLocale(value?: string | null): Locale {
  if (!value || typeof value !== "string") return "de";
  const raw = value.trim().toLowerCase();
  if (!raw) return "de";
  const base = raw.split(/[-_]/)[0];
  if ((LOCALES as string[]).includes(base)) return base as Locale;
  return LANGUAGE_ALIASES[raw] ?? "de";
}

interface ConfirmationTemplate {
  subject: string;
  greeting: string;
  paragraphs: string[];
  closing: string;
  country: string;
  phoneLabel: string;
  emailLabel: string;
}

const CONFIRMATIONS: Record<Locale, ConfirmationTemplate> = {
  de: {
    subject: "Vielen Dank für Ihre Anfrage – Aurelia Grundbesitz GmbH",
    greeting: "Sehr geehrte Damen und Herren,",
    paragraphs: [
      "vielen Dank für Ihre Anfrage und Ihr Interesse an der Aurelia Grundbesitz GmbH.",
      "Wir haben Ihre Nachricht erhalten und werden Ihre Angaben prüfen. Wir werden uns schnellstmöglich persönlich mit Ihnen in Verbindung setzen.",
      "Sollten Sie uns zwischenzeitlich noch weitere Informationen oder Unterlagen zukommen lassen wollen, können Sie jederzeit auf diese E-Mail antworten.",
    ],
    closing: "Mit freundlichen Grüßen",
    country: "",
    phoneLabel: "Telefon",
    emailLabel: "E-Mail",
  },
  tr: {
    subject: "Talebinizi aldık – Aurelia Grundbesitz GmbH",
    greeting: "Sayın Yetkili,",
    paragraphs: [
      "talebiniz ve Aurelia Grundbesitz GmbH'ye gösterdiğiniz ilgi için teşekkür ederiz.",
      "Mesajınız tarafımıza ulaşmıştır. Bilgilerinizi inceleyerek en kısa sürede sizinle kişisel olarak iletişime geçeceğiz.",
      "Bu süre içerisinde ek bilgi veya belge göndermek isterseniz bu e-postayı doğrudan yanıtlayabilirsiniz.",
    ],
    closing: "Saygılarımızla",
    country: "Almanya",
    phoneLabel: "Telefon",
    emailLabel: "E-posta",
  },
  en: {
    subject: "Thank you for your enquiry – Aurelia Grundbesitz GmbH",
    greeting: "Dear Sir or Madam,",
    paragraphs: [
      "thank you for your enquiry and your interest in Aurelia Grundbesitz GmbH.",
      "We have received your message and will review the information you provided. We will contact you personally as soon as possible.",
      "If you would like to send us any additional information or documents in the meantime, you can simply reply to this email.",
    ],
    closing: "Kind regards",
    country: "Germany",
    phoneLabel: "Phone",
    emailLabel: "Email",
  },
  nl: {
    subject: "Bedankt voor uw aanvraag – Aurelia Grundbesitz GmbH",
    greeting: "Geachte heer/mevrouw,",
    paragraphs: [
      "hartelijk dank voor uw aanvraag en uw interesse in Aurelia Grundbesitz GmbH.",
      "Wij hebben uw bericht ontvangen en zullen de door u verstrekte gegevens beoordelen. Wij nemen zo spoedig mogelijk persoonlijk contact met u op.",
      "Wilt u in de tussentijd aanvullende informatie of documenten toesturen, dan kunt u eenvoudig op deze e-mail antwoorden.",
    ],
    closing: "Met vriendelijke groet",
    country: "Duitsland",
    phoneLabel: "Telefoon",
    emailLabel: "E-mail",
  },
  it: {
    subject: "Grazie per la sua richiesta – Aurelia Grundbesitz GmbH",
    greeting: "Gentili Signore e Signori,",
    paragraphs: [
      "la ringraziamo per la sua richiesta e per l'interesse dimostrato verso Aurelia Grundbesitz GmbH.",
      "Abbiamo ricevuto il suo messaggio ed esamineremo le informazioni trasmesse. La contatteremo personalmente nel più breve tempo possibile.",
      "Se nel frattempo desidera inviarci ulteriori informazioni o documenti, può semplicemente rispondere a questa e-mail.",
    ],
    closing: "Cordiali saluti",
    country: "Germania",
    phoneLabel: "Telefono",
    emailLabel: "E-mail",
  },
  es: {
    subject: "Gracias por su consulta – Aurelia Grundbesitz GmbH",
    greeting: "Estimados señores y señoras:",
    paragraphs: [
      "le agradecemos su consulta y su interés en Aurelia Grundbesitz GmbH.",
      "Hemos recibido su mensaje y revisaremos la información facilitada. Nos pondremos en contacto con usted personalmente lo antes posible.",
      "Si mientras tanto desea enviarnos información o documentación adicional, puede responder directamente a este correo electrónico.",
    ],
    closing: "Atentamente",
    country: "Alemania",
    phoneLabel: "Teléfono",
    emailLabel: "Correo electrónico",
  },
};

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

async function createSignedDocumentLinks(files: ContactPayload["files"]): Promise<string[]> {
  if (!files || files.length === 0 || !SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) return [];

  const links: string[] = [];
  for (const file of files.slice(0, 10)) {
    if (!file?.path || typeof file.path !== "string" || file.path.includes("..")) continue;
    const res = await fetch(
      `${SUPABASE_URL}/storage/v1/object/sign/${TURKEY_DOCUMENT_BUCKET}/${encodeURI(file.path)}`,
      {
        method: "POST",
        headers: {
          apikey: SUPABASE_SERVICE_ROLE_KEY,
          Authorization: `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ expiresIn: 60 * 60 * 24 * 7 }),
      },
    );
    if (!res.ok) continue;
    const data = await res.json();
    if (typeof data?.signedURL === "string") {
      links.push(`${file.name}: ${SUPABASE_URL}/storage/v1${data.signedURL}`);
    }
  }
  return links;
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

    const documentLinks = await createSignedDocumentLinks(body.files);
    const documentLinksText = documentLinks.length > 0 ? `\n\nDokumente (Links gültig 7 Tage):\n${documentLinks.join("\n")}` : "";
    const documentLinksHtml = documentLinks.length > 0
      ? `<hr style="border:none;border-top:1px solid #e5e7eb;margin:20px 0;"/><p style="font-size:13px;color:#6b7280;margin:0 0 6px;">Dokumente (Links gültig 7 Tage):</p><ul style="font-size:14px;line-height:1.7;padding-left:18px;">${documentLinks.map((link) => {
          const [fileName, url] = link.split(": ");
          return `<li><a href="${escapeHtml(url ?? "")}">${escapeHtml(fileName ?? "Dokument")}</a></li>`;
        }).join("")}</ul>`
      : "";

    const name = escapeHtml(body.name);
    const email = escapeHtml(body.email);
    const phone = body.phone ? escapeHtml(body.phone) : "";
    const propertyType = body.property_type ? escapeHtml(body.property_type) : "";
    const message = escapeHtml(body.message).replace(/\n/g, "<br/>");

    // 1) Bestätigung an Absender — in der Sprache des Interessenten
    const locale = resolveLocale(body.preferred_language ?? body.language);
    const tpl = CONFIRMATIONS[locale];

    const paragraphsHtml = tpl.paragraphs
      .map((p) => `<p style="font-size:15px;line-height:1.7;margin:0 0 18px;">${escapeHtml(p)}</p>`)
      .join("");

    const confirmationHtml = `
<!doctype html>
<html lang="${locale}"><head><meta charset="utf-8"></head>
<body style="margin:0;padding:0;background:#ffffff;font-family:Georgia,'Times New Roman',serif;color:#1a2238;">
  <div style="max-width:560px;margin:0 auto;padding:40px 28px;">
    <p style="font-size:15px;line-height:1.7;margin:0 0 18px;">${escapeHtml(tpl.greeting)}</p>
    ${paragraphsHtml}
    <p style="font-size:15px;line-height:1.7;margin:28px 0 0;">${escapeHtml(tpl.closing)}<br/>Aurelia Grundbesitz GmbH</p>
    <hr style="border:none;border-top:1px solid #e5e7eb;margin:32px 0 16px;"/>
    <p style="font-size:12px;line-height:1.6;color:#6b7280;margin:0;">
      Aurelia Grundbesitz GmbH<br/>
      Grevenbroicher Weg 2<br/>
      40547 Düsseldorf${tpl.country ? `<br/>${escapeHtml(tpl.country)}` : ""}<br/><br/>
      ${escapeHtml(tpl.phoneLabel)}: +49 211 69583033<br/>
      ${escapeHtml(tpl.emailLabel)}: office@aureliaestates.de<br/>
      Web: www.aureliaestates.de
    </p>
  </div>
</body></html>`.trim();

    const confirmationText = `${tpl.greeting}

${tpl.paragraphs.join("\n\n")}

${tpl.closing}

Aurelia Grundbesitz GmbH
Grevenbroicher Weg 2
40547 Düsseldorf${tpl.country ? `\n${tpl.country}` : ""}

${tpl.phoneLabel}: +49 211 69583033
${tpl.emailLabel}: office@aureliaestates.de
Web: www.aureliaestates.de`;

    const languageName = LANGUAGE_NAMES_DE[locale];

    // 2) Benachrichtigung an office@
    const notifyHtml = `
<!doctype html>
<html lang="de"><head><meta charset="utf-8"></head>
<body style="margin:0;padding:0;background:#ffffff;font-family:Arial,sans-serif;color:#1a2238;">
  <div style="max-width:600px;margin:0 auto;padding:32px 24px;">
    <h2 style="font-size:18px;margin:0 0 18px;">Neue Kontaktanfrage</h2>
    <table style="width:100%;border-collapse:collapse;font-size:14px;">
      <tr><td style="padding:6px 0;color:#6b7280;width:180px;">Name</td><td style="padding:6px 0;">${name}</td></tr>
      <tr><td style="padding:6px 0;color:#6b7280;">E-Mail</td><td style="padding:6px 0;"><a href="mailto:${email}">${email}</a></td></tr>
      ${phone ? `<tr><td style="padding:6px 0;color:#6b7280;">Telefon</td><td style="padding:6px 0;">${phone}</td></tr>` : ""}
      ${propertyType ? `<tr><td style="padding:6px 0;color:#6b7280;">Thema</td><td style="padding:6px 0;">${propertyType}</td></tr>` : ""}
      <tr><td style="padding:6px 0;color:#6b7280;">Sprache des Interessenten</td><td style="padding:6px 0;"><strong>${escapeHtml(languageName)}</strong></td></tr>
    </table>
    <hr style="border:none;border-top:1px solid #e5e7eb;margin:20px 0;"/>
    <p style="font-size:13px;color:#6b7280;margin:0 0 6px;">Nachricht:</p>
    <div style="font-size:14px;line-height:1.7;">${message}</div>
    ${documentLinksHtml}
  </div>
</body></html>`.trim();

    const notifyText = `Neue Kontaktanfrage

Name: ${body.name}
E-Mail: ${body.email}
${body.phone ? `Telefon: ${body.phone}\n` : ""}${body.property_type ? `Thema: ${body.property_type}\n` : ""}Sprache des Interessenten: ${languageName}

Nachricht:
${body.message}${documentLinksText}`;

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
          subject: tpl.subject,
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
