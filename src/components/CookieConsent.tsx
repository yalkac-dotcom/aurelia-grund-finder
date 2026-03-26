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
  }, []);

  const handle = (choice: "accepted" | "rejected") => {
    localStorage.setItem(COOKIE_KEY, choice);
    setVisible(false);
    window.dispatchEvent(new Event("consent-change"));
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[9999] bg-background border-t border-border/60 shadow-lg">
      <div className="container max-w-4xl py-4 flex flex-col sm:flex-row items-start sm:items-center gap-3">
        <p className="text-muted-foreground text-xs leading-[1.7] flex-1">
          {t.common.cookieText}
        </p>
        <div className="flex gap-2 shrink-0">
          <button
            onClick={() => handle("accepted")}
            className="bg-accent text-white px-4 py-2 text-xs font-medium tracking-[0.1em] uppercase hover:bg-accent/85 transition-colors"
          >
            {t.common.cookieAccept}
          </button>
          <button
            onClick={() => handle("rejected")}
            className="border border-border/60 text-muted-foreground px-4 py-2 text-xs font-medium tracking-[0.1em] uppercase hover:text-foreground hover:border-border transition-colors"
          >
            {t.common.cookieReject}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
