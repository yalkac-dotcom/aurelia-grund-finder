import { useState, useEffect } from "react";
import { useLanguage } from "@/i18n/LanguageContext";

const COOKIE_KEY = "aurelia-cookie-consent";
const ANALYTICS_KEY = "aurelia-analytics-consent";

export type ConsentState = "pending" | "accepted" | "rejected";

export const getConsentState = (): ConsentState => {
  try {
    const v = localStorage.getItem(COOKIE_KEY);
    if (v === "accepted" || v === "rejected") return v;
  } catch {}
  return "pending";
};

export const hasAnalyticsConsent = (): boolean => {
  try {
    return localStorage.getItem(ANALYTICS_KEY) === "true";
  } catch {
    return false;
  }
};

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);
  const [analyticsOptIn, setAnalyticsOptIn] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    if (getConsentState() === "pending") setVisible(true);

    const handleOpen = () => {
      setAnalyticsOptIn(hasAnalyticsConsent());
      setVisible(true);
    };
    window.addEventListener("open-cookie-consent", handleOpen);
    return () => window.removeEventListener("open-cookie-consent", handleOpen);
  }, []);

  const persist = (choice: "accepted" | "rejected", analytics: boolean) => {
    try {
      localStorage.setItem(COOKIE_KEY, choice);
      localStorage.setItem(ANALYTICS_KEY, analytics ? "true" : "false");
    } catch {}
    setVisible(false);
    window.dispatchEvent(new Event("consent-change"));
  };

  if (!visible) return null;

  const labelAcceptAll = t.common.cookieAcceptAll ?? "Alle akzeptieren";
  const labelRejectAll = t.common.cookieNecessaryOnly ?? "Nur notwendige";
  const labelSave = t.common.cookieSaveSelection ?? "Auswahl speichern";
  const labelAnalytics = t.common.cookieAnalyticsLabel ?? "Analytisches Tracking zulassen";
  const labelAnalyticsHint =
    t.common.cookieAnalyticsHint ??
    "Hilft uns, die Website anonym zu verbessern. Wird erst nach Ihrer Zustimmung geladen.";

  return (
    <div className="fixed inset-0 z-[9999] flex items-end justify-center" role="dialog" aria-modal="true" aria-labelledby="cookie-consent-title">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]" onClick={(e) => e.stopPropagation()} />

      <div className="relative w-full max-w-xl mx-4 mb-6 bg-background border border-border/40 shadow-[0_16px_48px_-12px_rgba(0,0,0,0.25)] rounded-sm p-6 sm:p-7">
        <p id="cookie-consent-title" className="text-foreground text-[0.88rem] font-heading font-semibold mb-1.5">
          {t.common.cookieTitle}
        </p>
        <p className="text-muted-foreground text-[0.78rem] leading-[1.75] mb-4">
          {t.common.cookieText}
        </p>

        {/* Granular opt-in */}
        <label className="flex items-start gap-3 mb-5 cursor-pointer rounded-sm border border-border/40 p-3 hover:bg-muted/30 transition-colors">
          <input
            type="checkbox"
            checked={analyticsOptIn}
            onChange={(e) => setAnalyticsOptIn(e.target.checked)}
            className="mt-0.5 h-4 w-4 accent-teal-700"
            aria-describedby="analytics-hint"
          />
          <span className="flex-1">
            <span className="block text-foreground text-[0.82rem] font-semibold">{labelAnalytics}</span>
            <span id="analytics-hint" className="block text-muted-foreground text-[0.74rem] leading-[1.6] mt-0.5">
              {labelAnalyticsHint}
            </span>
          </span>
        </label>

        <div className="cookie-actions flex flex-col sm:flex-row gap-2">
          <button
            type="button"
            onClick={() => persist("accepted", true)}
            className="cookie-btn-primary"
          >
            {labelAcceptAll}
          </button>
          <button
            type="button"
            onClick={() => persist(analyticsOptIn ? "accepted" : "rejected", analyticsOptIn)}
            className="cookie-btn-secondary"
          >
            {labelSave}
          </button>
          <button
            type="button"
            onClick={() => persist("rejected", false)}
            className="cookie-btn-secondary"
          >
            {labelRejectAll}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
