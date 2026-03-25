import { createContext, useContext, useState, useCallback, ReactNode, useEffect } from "react";
import { Language, Translations } from "./types";
import de from "./de";
import en from "./en";
import it from "./it";
import es from "./es";
import tr from "./tr";

const translationsMap: Record<Language, Translations> = { de, en, it, es, tr };

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
  const [language, setLang] = useState<Language>(() => {
    const stored = localStorage.getItem("aurelia-lang") as Language | null;
    return stored && translationsMap[stored] ? stored : "de";
  });

  const setLanguage = useCallback((lang: Language) => {
    setLang(lang);
    localStorage.setItem("aurelia-lang", lang);
    document.documentElement.lang = lang;
  }, []);

  // Sync OG/Twitter meta tags with current language
  useEffect(() => {
    document.documentElement.lang = language;
    const currentT = translationsMap[language];
    const title = document.querySelector("title");
    if (title) title.textContent = currentT.hero.slogan;

    const ogTitle = document.querySelector('meta[property="og:title"]');
    const twTitle = document.querySelector('meta[name="twitter:title"]');
    const ogDesc = document.querySelector('meta[property="og:description"]');
    const twDesc = document.querySelector('meta[name="twitter:description"]');
    const metaDesc = document.querySelector('meta[name="description"]');

    const titleText = `${currentT.hero.slogan} | Aurelia Grundbesitz`;
    const descText = currentT.landing.heroSubtitle;

    ogTitle?.setAttribute("content", titleText);
    twTitle?.setAttribute("content", titleText);
    ogDesc?.setAttribute("content", descText);
    twDesc?.setAttribute("content", descText);
    metaDesc?.setAttribute("content", descText);

    const localeMap: Record<Language, string> = { de: "de_DE", en: "en_US", it: "it_IT", es: "es_ES", tr: "tr_TR" };
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
