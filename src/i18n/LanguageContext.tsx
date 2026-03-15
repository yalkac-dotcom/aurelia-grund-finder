import { createContext, useContext, useState, useCallback, ReactNode } from "react";
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

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: translationsMap[language] }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
