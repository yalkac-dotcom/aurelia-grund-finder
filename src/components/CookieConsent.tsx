import { useState, useEffect } from "react";
import { useLanguage } from "@/i18n/LanguageContext";

const COOKIE_KEY = "aurelia-cookie-consent";

export type ConsentState = "pending" | "accepted" | "rejected";

export const getConsentState = (): ConsentState => {
  try {
    const v = localStorage.getItem(COOKIE_KEY);
    if (v === "accepted" || v === "rejected") return v;
  } catch {}
  return "pending";
};

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    if (getConsentState() === "pending") setVisible(true);

    const handleOpen = () => setVisible(true);
    window.addEventListener("open-cookie-consent", handleOpen);
    return () => window.removeEventListener("open-cookie-consent", handleOpen);
  }, []);

  const handle = (choice: "accepted" | "rejected") => {
    localStorage.setItem(COOKIE_KEY, choice);
    setVisible(false);
    window.dispatchEvent(new Event("consent-change"));
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-end justify-center">
      {/* Backdrop – blocks interaction */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]" />

      {/* Dialog */}
      <div className="relative w-full max-w-2xl mx-4 mb-6 bg-background border border-border/60 shadow-2xl p-6 sm:p-8">
        <p className="text-foreground text-sm font-heading font-semibold mb-2">
          Cookie-Einstellungen
        </p>
        <p className="text-muted-foreground text-xs leading-[1.75] mb-5">
          {t.common.cookieText}
        </p>
        <div className="flex flex-col sm:flex-row gap-2.5">
          <button
            onClick={() => handle("accepted")}
            className="bg-accent text-white px-5 py-2.5 text-xs font-medium tracking-[0.1em] uppercase hover:bg-accent/85 transition-colors flex-1 sm:flex-none"
          >
            {t.common.cookieAcceptAll}
          </button>
          <button
            onClick={() => handle("rejected")}
            className="bg-accent/10 text-foreground border border-accent/30 px-5 py-2.5 text-xs font-medium tracking-[0.1em] uppercase hover:bg-accent/20 transition-colors flex-1 sm:flex-none"
          >
            {t.common.cookieNecessaryOnly}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
