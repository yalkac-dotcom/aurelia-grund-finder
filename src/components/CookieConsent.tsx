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
      {/* Backdrop – blocks interaction, only when visible */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]" onClick={(e) => e.stopPropagation()} />

      {/* Dialog */}
      <div className="relative w-full max-w-xl mx-4 mb-6 bg-background border border-border/40 shadow-[0_16px_48px_-12px_rgba(0,0,0,0.25)] rounded-sm p-6 sm:p-7">
        <p className="text-foreground text-[0.88rem] font-heading font-semibold mb-1.5">
          {t.common.cookieTitle}
        </p>
        <p className="text-muted-foreground text-[0.78rem] leading-[1.75] mb-5">
          {t.common.cookieText}
        </p>
        <div className="cookie-actions">
          <button
            onClick={() => handle("accepted")}
            className="cookie-btn-primary"
          >
            {t.common.cookieAcceptAll}
          </button>
          <button
            onClick={() => handle("rejected")}
            className="cookie-btn-secondary"
          >
            {t.common.cookieNecessaryOnly}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
