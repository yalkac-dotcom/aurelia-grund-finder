import { createContext, useContext, useState, useCallback, ReactNode, useEffect, useRef } from "react";
import { Language, Translations } from "./types";
import { STORAGE_KEY, resolveInitialLanguage } from "./languageDetection";
import de from "./de";
import en from "./en";
import nl from "./nl";
import it from "./it";
import es from "./es";
import tr from "./tr";
import fr from "./fr";
import { contentRestructure } from "./contentRestructure";
import { journeyEnhancements } from "./journeyEnhancements";
import { turkeyJourney } from "./turkeyJourney";

const deepMerge = <T extends Record<string, unknown>>(base: T, ...overrides: Record<string, unknown>[]): T => {
  const result: Record<string, unknown> = { ...base };
  for (const override of overrides) {
    for (const [key, value] of Object.entries(override)) {
      const current = result[key];
      result[key] = value && typeof value === "object" && !Array.isArray(value) && current && typeof current === "object" && !Array.isArray(current)
        ? deepMerge(current as Record<string, unknown>, value as Record<string, unknown>)
        : value;
    }
  }
  return result as T;
};

const baseTranslations: Record<Language, Translations> = { de, en, nl, it, es, tr, fr };
const translationsMap = Object.fromEntries(
  Object.entries(baseTranslations).map(([language, translation]) => [
    language,
    deepMerge(translation as unknown as Record<string, unknown>, contentRestructure[language as Language] as Record<string, unknown>, journeyEnhancements[language as Language] as Record<string, unknown>, turkeyJourney[language as Language] as Record<string, unknown>),
  ]),
) as unknown as Record<Language, Translations>;

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType>({
  language: "de",
  setLanguage: () => {},
  t: de,
});

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const initial = useRef(resolveInitialLanguage()).current;
  const [language, setLang] = useState<Language>(initial.language);
  const explicitChoice = useRef(initial.explicit);

  const setLanguage = useCallback((lang: Language) => {
    explicitChoice.current = true;
    setLang(lang);
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {}
    document.documentElement.lang = lang;
    // Fire analytics event (no-op if no consent / not loaded)
    try {
      if (typeof window !== "undefined" && typeof window.gtag === "function") {
        window.gtag("event", "language_change", { language: lang });
      }
    } catch {}
  }, []);

  // First visit only: coarse country detection (no stored manual choice, no explicit URL language)
  useEffect(() => {
    if (explicitChoice.current) return;
    const controller = new AbortController();
    let cancelled = false;
    (async () => {
      const country = await fetchCountry(controller.signal);
      if (cancelled || explicitChoice.current) return;
      const detected = languageForCountry(country) ?? "en";
      setLang((current) => (current === detected ? current : detected));
    })();
    return () => {
      cancelled = true;
      controller.abort();
    };
  }, []);

  // Sync OG/Twitter meta tags with current language
  useEffect(() => {
    document.documentElement.lang = language;
    const currentT = translationsMap[language];
    const title = document.querySelector("title");
    const seoTitle = `${currentT.home.heroTitle} | Aurelia Grundbesitz`;
    if (title) title.textContent = seoTitle;

    const ogTitle = document.querySelector('meta[property="og:title"]');
    const twTitle = document.querySelector('meta[name="twitter:title"]');
    const ogDesc = document.querySelector('meta[property="og:description"]');
    const twDesc = document.querySelector('meta[name="twitter:description"]');
    const metaDesc = document.querySelector('meta[name="description"]');

    const descText = currentT.home.heroDescription;

    ogTitle?.setAttribute("content", seoTitle);
    twTitle?.setAttribute("content", seoTitle);
    ogDesc?.setAttribute("content", descText);
    twDesc?.setAttribute("content", descText);
    metaDesc?.setAttribute("content", descText);

    const localeMap: Record<Language, string> = { de: "de_DE", en: "en_US", nl: "nl_NL", it: "it_IT", es: "es_ES", tr: "tr_TR", fr: "fr_FR" };
    const ogLocale = document.querySelector('meta[property="og:locale"]');
    ogLocale?.setAttribute("content", localeMap[language]);
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: translationsMap[language] }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
