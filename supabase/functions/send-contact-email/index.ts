const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

const GATEWAY_URL = "https://connector-gateway.lovable.dev/resend";

// Produktiver Versand über die verifizierte Domain aureliaestates.de.
const FROM_EMAIL = Deno.env.get("RESEND_FROM_EMAIL") ?? "formular@aureliaestates.de";
const FROM_NAME = "Aurelia Website";
const CUSTOMER_FROM_NAME = "Aurelia Grundbesitz GmbH";
const REPLY_TO = "office@aureliaestates.de";
const NOTIFY_TO = "office@aureliaestates.de";
const SUPABASE_URL = Deno.env.get("SUPABASE_URL");
const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
const TURKEY_DOCUMENT_BUCKET = "turkey-property-documents";

interface ContactPayload {
  name: string;
  email: string;
  phone?: string | null;
  property_type?: string | null;
  subject?: string | null;
  message: string;
  language?: string | null;
  preferred_language?: string | null;
  form_type?: "general_contact" | "germany_property" | "turkey_property" | null;
  files?: { name: string; path: string; size: number; type: string }[];
  privacy_consent?: boolean;
}

type Locale = "de" | "en" | "nl" | "it" | "es" | "tr" | "fr";

const LOCALES: Locale[] = ["de", "en", "nl", "it", "es", "tr", "fr"];

const LANGUAGE_NAMES_DE: Record<Locale, string> = {
  de: "Deutsch",
  en: "Englisch",
  nl: "Niederländisch",
  it: "Italienisch",
  es: "Spanisch",
  tr: "Türkisch",
  fr: "Französisch",
};

// Erkennt sowohl Locale-Codes ("de", "de-DE") als auch Klartext-Namen
// aus dem Formularfeld "bevorzugte Sprache" ("Türkçe", "Nederlands", ...).
const LANGUAGE_ALIASES: Record<string, Locale> = {
  deutsch: "de", german: "de", duits: "de", tedesco: "de", alemán: "de", aleman: "de", almanca: "de",
  english: "en", englisch: "en", engels: "en", inglese: "en", inglés: "en", ingles: "en", ingilizce: "en", "i̇ngilizce": "en",
  nederlands: "nl", niederländisch: "nl", niederlaendisch: "nl", dutch: "nl", olandese: "nl", neerlandés: "nl", neerlandes: "nl", felemenkçe: "nl",
  italiano: "it", italienisch: "it", italian: "it", italiaans: "it", italyanca: "it",
  español: "es", espanol: "es", spanisch: "es", spanish: "es", spaans: "es", spagnolo: "es", "i̇spanyolca": "es", ispanyolca: "es",
  türkçe: "tr", turkce: "tr", türkisch: "tr", turkish: "tr", turks: "tr", turco: "tr",
  français: "fr", francais: "fr", französisch: "fr", franzoesisch: "fr", french: "fr", frans: "fr", francese: "fr", francés: "fr", frances: "fr", fransızca: "fr", fransizca: "fr",
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
  fr: {
    subject: "Merci pour votre demande – Aurelia Grundbesitz GmbH",
    greeting: "Madame, Monsieur,",
    paragraphs: [
      "nous vous remercions pour votre demande et pour l'intérêt que vous portez à Aurelia Grundbesitz GmbH.",
      "Nous avons bien reçu votre message. Nous allons examiner les informations transmises et vous contacter personnellement dans les meilleurs délais.",
      "Si vous souhaitez nous transmettre entre-temps des informations ou des documents complémentaires, vous pouvez simplement répondre à cet e-mail.",
    ],
    closing: "Cordialement,",
    country: "Allemagne",
    phoneLabel: "Téléphone",
    emailLabel: "E-mail",
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

const ALLOWED_FILE_TYPES = new Set(["application/pdf", "image/jpeg", "image/png", "application/octet-stream"]);
const ALLOWED_FILE_EXTENSIONS = new Set(["pdf", "jpg", "jpeg", "png"]);

function hasValidFiles(files: ContactPayload["files"]): boolean {
  if (!files) return true;
  if (!Array.isArray(files) || files.length > 10) return false;
  return files.every((file) => {
    const extension = file?.name?.split(".").pop()?.toLowerCase() ?? "";
    return typeof file?.name === "string" && file.name.length <= 180 &&
      typeof file?.path === "string" && file.path.length <= 500 && !file.path.includes("..") &&
      typeof file?.size === "number" && file.size > 0 && file.size <= 10 * 1024 * 1024 &&
      typeof file?.type === "string" && ALLOWED_FILE_TYPES.has(file.type) && ALLOWED_FILE_EXTENSIONS.has(extension);
  });
}

async function postEmail(payload: {
  from: string;
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
    body: JSON.stringify(payload),
  });

  const data = await res.json().catch(() => ({}));
  return { ok: res.ok, status: res.status, data };
}

// Produktiver Versand über die verifizierte Domain aureliaestates.de.
async function sendEmail(payload: {
  to: string[];
  subject: string;
  html: string;
  text: string;
  reply_to?: string;
}, mailType: "internal" | "customer_confirmation") {
  const primary = await postEmail({
    from: `${mailType === "internal" ? FROM_NAME : CUSTOMER_FROM_NAME} <${FROM_EMAIL}>`,

    ...payload,
  });
  const messageId = typeof primary.data?.id === "string" ? primary.data.id : null;
  if (primary.ok && messageId) {
    console.log(JSON.stringify({
      event: "email_accepted",
      mailType,
      recipient: payload.to,
      resendId: messageId,
      providerStatus: primary.status,
    }));
    return { accepted: true as const, id: messageId, providerStatus: primary.status };
  }

  console.error(
    JSON.stringify({
      event: "email_rejected",
      mailType,
      recipient: payload.to,
      providerStatus: primary.status,
      providerError: primary.data,
    }),
  );
  throw new Error(`Resend error [${primary.status}]: ${JSON.stringify(primary.data)}`);
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
    if (
      (body.form_type === "general_contact" || body.form_type === "germany_property" || body.form_type === "turkey_property") &&
      (!body.phone || typeof body.phone !== "string" || body.phone.trim().length === 0 || body.phone.length > 50)
    ) {
      return new Response(JSON.stringify({ error: "Invalid phone" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }
    if (body.privacy_consent !== true) {
      return new Response(JSON.stringify({ error: "Privacy consent required" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }
    if (
      body.form_type === "general_contact" &&
      (!body.subject || typeof body.subject !== "string" || body.subject.trim().length === 0 || body.subject.length > 120)
    ) {
      return new Response(JSON.stringify({ error: "Invalid subject" }), {
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
    if (!hasValidFiles(body.files)) {
      return new Response(JSON.stringify({ error: "Invalid files" }), {
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
    const subjectLine = body.subject ? escapeHtml(body.subject) : "";
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
    const isTurkeyEnquiry = body.form_type === "turkey_property" ||
      (body.property_type ?? "").toLocaleLowerCase("de").includes("türkei");
    const isGermanyPropertyEnquiry = body.form_type === "germany_property";
    const notifyHeadline = isTurkeyEnquiry ? "Neue Türkei-Immobilienanfrage" : isGermanyPropertyEnquiry ? "Neue Deutschland-Immobilienanfrage" : "Neue Kontaktanfrage";
    const notifySubject = isTurkeyEnquiry
      ? `Neue Türkei-Immobilienanfrage von ${body.name}`
      : isGermanyPropertyEnquiry
      ? `Neue Deutschland-Immobilienanfrage von ${body.name}`
      : `Neue Anfrage von ${body.name} – Aurelia Grundbesitz`;
    const receivedAt = new Intl.DateTimeFormat("de-DE", {
      dateStyle: "medium",
      timeStyle: "short",
      timeZone: "Europe/Berlin",
    }).format(new Date());


    // 2) Benachrichtigung an office@
    const notifyHtml = `
<!doctype html>
<html lang="de"><head><meta charset="utf-8"></head>
<body style="margin:0;padding:0;background:#ffffff;font-family:Arial,sans-serif;color:#1a2238;">
  <div style="max-width:600px;margin:0 auto;padding:32px 24px;">
    <h2 style="font-size:18px;margin:0 0 18px;">${notifyHeadline}</h2>
    <table style="width:100%;border-collapse:collapse;font-size:14px;">
      <tr><td style="padding:6px 0;color:#6b7280;width:180px;">Name</td><td style="padding:6px 0;">${name}</td></tr>
      <tr><td style="padding:6px 0;color:#6b7280;">E-Mail</td><td style="padding:6px 0;"><a href="mailto:${email}">${email}</a></td></tr>
      ${phone ? `<tr><td style="padding:6px 0;color:#6b7280;">Telefon</td><td style="padding:6px 0;">${phone}</td></tr>` : ""}
      ${subjectLine ? `<tr><td style="padding:6px 0;color:#6b7280;">Anliegen</td><td style="padding:6px 0;"><strong>${subjectLine}</strong></td></tr>` : ""}
      ${propertyType ? `<tr><td style="padding:6px 0;color:#6b7280;">Thema</td><td style="padding:6px 0;">${propertyType}</td></tr>` : ""}
      <tr><td style="padding:6px 0;color:#6b7280;">Sprache des Interessenten</td><td style="padding:6px 0;"><strong>${escapeHtml(languageName)}</strong></td></tr>
      <tr><td style="padding:6px 0;color:#6b7280;">Eingang</td><td style="padding:6px 0;">${escapeHtml(receivedAt)} Uhr</td></tr>
    </table>
    <hr style="border:none;border-top:1px solid #e5e7eb;margin:20px 0;"/>
    <p style="font-size:13px;color:#6b7280;margin:0 0 6px;">Nachricht:</p>
    <div style="font-size:14px;line-height:1.7;">${message}</div>
    ${documentLinksHtml}
  </div>
</body></html>`.trim();

    const notifyText = `${notifyHeadline}

Name: ${body.name}
E-Mail: ${body.email}
${body.phone ? `Telefon: ${body.phone}\n` : ""}${body.subject ? `Anliegen: ${body.subject}\n` : ""}${body.property_type ? `Thema: ${body.property_type}\n` : ""}Sprache des Interessenten: ${languageName}
Eingang: ${receivedAt} Uhr

Nachricht:
${body.message}${documentLinksText}`;

    // Beide E-Mails sind getrennte Versandvorgänge mit eigenem Ergebnis.
    // Sicherheitsnetz: die interne Mail geht ausschließlich an office@,
    // die Bestätigung ausschließlich an die Adresse aus dem Formular.
    const internalRecipients = [NOTIFY_TO];
    const customerRecipients = [body.email.trim()];
    if (internalRecipients.some((r) => r.toLowerCase() !== NOTIFY_TO)) {
      throw new Error("Internal recipient guard violated");
    }
    if (customerRecipients.length !== 1 || !isValidEmail(customerRecipients[0])) {
      throw new Error("Customer recipient guard violated");
    }

    const internalMailResult = await sendEmail({
      to: internalRecipients,
      subject: notifySubject,
      html: notifyHtml,
      text: notifyText,
      reply_to: body.email,
    }, "internal");

    let customerConfirmationResult:
      | { accepted: true; id: string; providerStatus: number }
      | { accepted: false; error: string };
    try {
      if (
        documentLinks.some((link) => confirmationHtml.includes(link) || confirmationText.includes(link)) ||
        confirmationHtml.includes("storage/v1") ||
        confirmationText.includes("storage/v1")
      ) {
        throw new Error("Confirmation content guard violated: internal data detected");
      }
      customerConfirmationResult = await sendEmail({
        to: customerRecipients,
        subject: tpl.subject,
        html: confirmationHtml,
        text: confirmationText,
        reply_to: REPLY_TO,
      }, "customer_confirmation");
    } catch (e) {
      const confirmationError = e instanceof Error ? e.message : "Unknown confirmation error";
      console.error(JSON.stringify({
        event: "customer_confirmation_failed",
        recipient: body.email,
        locale,
        error: confirmationError,
      }));
      customerConfirmationResult = { accepted: false, error: confirmationError };
    }

    return new Response(JSON.stringify({
      success: true,
      internalMailResult,
      customerConfirmationResult,
      confirmationSent: customerConfirmationResult.accepted,
      locale,
    }), {
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
