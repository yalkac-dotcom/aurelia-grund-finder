import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { languageNames, type Language } from "@/i18n/types";

// Only show languages that are fully synced with the current DE master
const enabledLanguages: Language[] = ["de", "en", "nl", "it", "es", "tr"];

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

  // Don't render the switcher if only one language is enabled
  if (enabledLanguages.length <= 1) return null;

  return (
    <div ref={ref} className="relative flex items-center">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors text-[12px] tracking-wide"
        aria-label={t.common.languageAria}
      >
        <span className="uppercase font-medium">{language}</span>
        <ChevronDown size={14} className={`transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-2 bg-card border border-border shadow-lg rounded min-w-[160px] z-50">
          {enabledLanguages.map((code) => (
            <button
              key={code}
              onClick={() => {
                setLanguage(code);
                setOpen(false);
              }}
              className={`flex items-center gap-2 w-full text-left px-4 py-2.5 text-[12px] tracking-wide transition-colors hover:bg-secondary ${
                code === language
                  ? "text-foreground font-medium bg-secondary"
                  : "text-muted-foreground"
              }`}
            >
              <span className="uppercase w-5">{code}</span>
              <span className="text-muted-foreground">—</span>
              {languageNames[code]}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
