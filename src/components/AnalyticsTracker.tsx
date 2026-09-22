import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { hasAnalyticsConsent, initGA, revokeGA, trackPageView } from "@/lib/analytics";
import { initClarity, revokeClarity } from "@/lib/clarity";

const AnalyticsTracker = () => {
  const location = useLocation();

  useEffect(() => {
    const onConsentChange = () => {
      if (!hasAnalyticsConsent()) {
        // Immediate withdrawal: stop GA and signal the revocation to Clarity.
        revokeGA();
        revokeClarity();
        return;
      }
      initGA();
      initClarity();
      // Ensure a page_view fires immediately after consent is granted,
      // even if the route hasn't changed.
      trackPageView(window.location.pathname + window.location.search);
    };
    window.addEventListener("consent-change", onConsentChange);
    initGA();
    initClarity();
    return () => window.removeEventListener("consent-change", onConsentChange);
  }, []);

  useEffect(() => {
    trackPageView(location.pathname + location.search);
  }, [location.pathname, location.search]);

  return null;
};

export default AnalyticsTracker;
