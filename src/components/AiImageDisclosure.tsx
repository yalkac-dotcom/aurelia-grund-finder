import { forwardRef } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import type { Language } from "@/i18n/types";

export type AiDisclosureType = "standard" | "illustrative";

const labels: Record<Language, Record<AiDisclosureType, string>> = {
  de: { standard: "KI-Visualisierung", illustrative: "KI-Visualisierung · Symbolbild" },
  en: { standard: "AI Visual", illustrative: "AI Visual · Illustrative" },
  nl: { standard: "AI-visualisatie", illustrative: "AI-visualisatie · Illustratief" },
  it: { standard: "Visual IA", illustrative: "Visual IA · Illustrativa" },
  es: { standard: "Visual IA", illustrative: "Visual IA · Ilustrativa" },
  fr: { standard: "Visuel IA", illustrative: "Visuel IA · Illustratif" },
  tr: { standard: "Yapay Zeka", illustrative: "Yapay Zeka · Temsili" },
};

const AiImageDisclosure = forwardRef<HTMLSpanElement, { type?: AiDisclosureType }>(({ type = "standard" }, ref) => {
  const { language } = useLanguage();

  return (
    <span ref={ref} className="ai-image-disclosure" aria-label={labels[language][type]} data-ai-disclosure={type}>
      {labels[language][type]}
    </span>
  );
});

AiImageDisclosure.displayName = "AiImageDisclosure";

export default AiImageDisclosure;