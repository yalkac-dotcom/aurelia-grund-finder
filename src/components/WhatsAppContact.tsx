import type { Language } from "@/i18n/types";

// Plain direct link only — no external WhatsApp scripts or widgets are loaded.
export const WHATSAPP_NUMBER = "491633359152"; // +49 163 3359152

const MESSAGES: Record<string, string> = {
  de: "Guten Tag, ich bin über die Aurelia-Website auf Sie aufmerksam geworden und möchte gerne Kontakt aufnehmen.",
  tr: "Merhaba, Aurelia web sitesi üzerinden size ulaşıyorum ve iletişime geçmek istiyorum.",
  en: "Hello, I found you through the Aurelia website and would like to get in touch.",
  nl: "Goedendag, ik ben via de website van Aurelia bij u terechtgekomen en neem graag contact met u op.",
  it: "Buongiorno, vi ho trovato tramite il sito web di Aurelia e desidero mettermi in contatto con voi.",
  es: "Buenos días, les he encontrado a través de la página web de Aurelia y me gustaría ponerme en contacto con ustedes.",
  fr: "Bonjour, j'ai découvert Aurelia via son site internet et je souhaiterais prendre contact avec vous.",
};

export const whatsappHref = (language: Language | string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(MESSAGES[language] ?? MESSAGES.de)}`;

export const WhatsAppIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.7.63.71.23 1.36.19 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35zM12.05 21.5h-.01a9.4 9.4 0 0 1-4.8-1.31l-.34-.2-3.57.93.95-3.48-.22-.36a9.4 9.4 0 0 1-1.44-5.02c0-5.2 4.24-9.43 9.44-9.43 2.52 0 4.89.98 6.67 2.77a9.37 9.37 0 0 1 2.76 6.67c0 5.2-4.24 9.43-9.44 9.43zm8.03-17.46A11.28 11.28 0 0 0 12.05.7C5.8.7.7 5.8.7 12.05c0 2 .52 3.95 1.52 5.67L.6 23.4l5.82-1.53a11.3 11.3 0 0 0 5.43 1.38h.01c6.25 0 11.35-5.1 11.35-11.35 0-3.03-1.18-5.88-3.33-8.02z" />
  </svg>
);

export const DesktopWhatsAppButton = ({ language }: { language: Language }) => (
  <a
    href={whatsappHref(language)}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="WhatsApp"
    title="WhatsApp"
    className="fixed bottom-[5.5rem] right-8 z-40 hidden h-11 w-11 items-center justify-center rounded-full border border-accent/40 bg-primary text-primary-foreground shadow-md transition-colors hover:text-accent md:flex"
  >
    <WhatsAppIcon size={20} />
  </a>
);
