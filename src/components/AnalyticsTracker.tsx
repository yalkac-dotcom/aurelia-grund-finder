import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { initGA, trackPageView } from "@/lib/analytics";
import { initClarity } from "@/lib/clarity";
import GaDiagPanel from "./GaDiagPanel";

const AnalyticsTracker = () => {
  const location = useLocation();

  useEffect(() => {
    const onConsentChange = () => {
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

  return <GaDiagPanel />;
};

export default AnalyticsTracker;
