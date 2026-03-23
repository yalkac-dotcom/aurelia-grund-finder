import { useState, useRef, useEffect } from "react";
import { Globe } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { languageNames, languageCodes, Language } from "@/i18n/types";

const LanguageSwitcher = () => {
  const { language, setLanguage, t } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors text-sm"
        aria-label={t.common.languageAria}
      >
        <Globe size={18} />
        <span className="uppercase font-medium tracking-wide">{language}</span>
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-2 bg-card border border-border shadow-lg rounded min-w-[160px] z-50">
          {languageCodes.map((code) => (
            <button
              key={code}
              onClick={() => {
                setLanguage(code);
                setOpen(false);
              }}
              className={`block w-full text-left px-4 py-2.5 text-sm transition-colors hover:bg-secondary ${
                code === language
                  ? "text-foreground font-medium bg-secondary"
                  : "text-muted-foreground"
              }`}
            >
              {languageNames[code]}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
