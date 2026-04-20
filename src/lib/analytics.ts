// Lightweight, consent-aware analytics helper (GA4 only).
// Loads gtag.js dynamically only after the user grants analytics consent.

const GA_MEASUREMENT_ID = "G-GEJRNFNMBX";
const ANALYTICS_KEY = "aurelia-analytics-consent";

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
    __ga4Loaded?: boolean;
  }
}

export const hasAnalyticsConsent = (): boolean => {
  try {
    return localStorage.getItem(ANALYTICS_KEY) === "true";
  } catch {
    return false;
  }
};

export const initGA = () => {
  if (typeof window === "undefined") return;
  if (window.__ga4Loaded) return;
  if (!hasAnalyticsConsent()) return;

  window.__ga4Loaded = true;
  window.dataLayer = window.dataLayer || [];
  // IMPORTANT: gtag MUST push the native `arguments` object, not a spread array.
  // gtag.js inspects arguments.length / arguments[0] — pushing a real array
  // breaks command parsing and no `g/collect` hit is sent.
  window.gtag = function gtag() {
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer.push(arguments);
  };

  window.gtag("js", new Date());
  window.gtag("config", GA_MEASUREMENT_ID, {
    anonymize_ip: true,
    send_page_view: false, // we send manually so SPA route changes are tracked
  });

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script);

  // Send the initial page_view immediately after init so consent-on-first-load
  // (or consent given mid-session) results in a real-time hit without waiting
  // for the next route change.
  window.gtag("event", "page_view", {
    page_path: window.location.pathname + window.location.search,
    page_title: document.title,
    page_location: window.location.href,
  });
};

export const trackPageView = (path: string, title?: string) => {
  if (!hasAnalyticsConsent() || typeof window === "undefined" || !window.gtag) return;
  window.gtag("event", "page_view", {
    page_path: path,
    page_title: title ?? document.title,
    page_location: window.location.href,
  });
};

export const trackEvent = (
  name: string,
  params: Record<string, unknown> = {},
) => {
  if (!hasAnalyticsConsent() || typeof window === "undefined" || !window.gtag) return;
  window.gtag("event", name, params);
};
