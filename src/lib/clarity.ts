// Consent-aware Microsoft Clarity loader.
// Only loaded after the user grants analytics consent via the existing cookie banner.

const CLARITY_PROJECT_ID = "wel2ge09me";
const ANALYTICS_KEY = "aurelia-analytics-consent";

declare global {
  interface Window {
    clarity?: (...args: unknown[]) => void;
    __clarityLoaded?: boolean;
  }
}

const hasAnalyticsConsent = (): boolean => {
  try {
    return localStorage.getItem(ANALYTICS_KEY) === "true";
  } catch {
    return false;
  }
};

export const initClarity = () => {
  if (typeof window === "undefined") return;
  if (window.__clarityLoaded) {
    // Re-granted consent within the same session: signal consent again.
    if (hasAnalyticsConsent()) window.clarity?.("consent", true);
    return;
  }
  if (!hasAnalyticsConsent()) return;

  window.__clarityLoaded = true;

  // Official Microsoft Clarity snippet (inlined, consent-gated).
  (function (c: any, l: Document, a: string, r: string, i: string) {
    c[a] =
      c[a] ||
      function () {
        // eslint-disable-next-line prefer-rest-params
        (c[a].q = c[a].q || []).push(arguments);
      };
    const t = l.createElement(r) as HTMLScriptElement;
    t.async = true;
    t.src = "https://www.clarity.ms/tag/" + i;
    const y = l.getElementsByTagName(r)[0];
    y.parentNode?.insertBefore(t, y);
  })(window, document, "clarity", "script", CLARITY_PROJECT_ID);

  // Microsoft Clarity Consent API v2: signal the granted consent explicitly.
  window.clarity?.("consent", true);
};

/**
 * Immediate revocation: tells Clarity that consent was withdrawn (Consent API v2)
 * and stops any further consent-dependent collection in the current session.
 */
export const revokeClarity = () => {
  if (typeof window === "undefined" || typeof window.clarity !== "function") return;
  try {
    window.clarity("consent", false);
    window.clarity("stop");
  } catch {
    // ignore – nothing further to collect
  }
};
