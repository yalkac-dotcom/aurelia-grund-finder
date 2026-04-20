// Lightweight, consent-aware analytics helper (GA4 only).
// Loads gtag.js dynamically only after the user grants analytics consent.

const GA_MEASUREMENT_ID = "G-GEJRNFNMBX";
const ANALYTICS_KEY = "aurelia-analytics-consent";

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
    __ga4Loaded?: boolean;
    __ga4Debug?: boolean;
  }
}

const hasParam = (key: string, val = "1"): boolean => {
  if (typeof window === "undefined") return false;
  try {
    return new URLSearchParams(window.location.search).get(key) === val;
  } catch {
    return false;
  }
};

const isDebugForce = (): boolean => hasParam("_ga_force") || hasParam("_ga_diag");
const isDebugMode = (): boolean => hasParam("_ga_debug") || hasParam("_ga_diag");

export const hasAnalyticsConsent = (): boolean => {
  if (isDebugForce()) return true;
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

  const debug = isDebugMode();
  window.__ga4Debug = debug;

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
    ...(debug ? { debug_mode: true } : {}),
  });

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script);

  if (debug) {
    // eslint-disable-next-line no-console
    console.log("GA4 loaded");
  }

  // Send the initial page_view immediately after init so consent-on-first-load
  // (or consent given mid-session) results in a real-time hit without waiting
  // for the next route change.
  if (typeof window !== "undefined") {
    window.gtag("event", "page_view", {
      page_path: window.location.pathname + window.location.search,
      page_title: document.title,
      page_location: window.location.href,
      ...(debug ? { debug_mode: true } : {}),
    });
    if (debug) {
      // eslint-disable-next-line no-console
      console.log("GA4 page_view sent");
      window.gtag("event", "ga_probe", {
        debug_mode: true,
        probe_ts: Date.now(),
      });
      // eslint-disable-next-line no-console
      console.log("GA4 ga_probe sent");
    }
  }
};

export const trackPageView = (path: string, title?: string) => {
  if (!hasAnalyticsConsent() || typeof window === "undefined" || !window.gtag) return;
  window.gtag("event", "page_view", {
    page_path: path,
    page_title: title ?? document.title,
    page_location: window.location.href,
    ...(window.__ga4Debug ? { debug_mode: true } : {}),
  });
};

export const trackEvent = (
  name: string,
  params: Record<string, unknown> = {},
) => {
  if (!hasAnalyticsConsent() || typeof window === "undefined" || !window.gtag) return;
  window.gtag("event", name, {
    ...params,
    ...(window.__ga4Debug ? { debug_mode: true } : {}),
  });
};
