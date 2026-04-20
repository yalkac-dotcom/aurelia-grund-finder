import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { initGA, trackPageView } from "@/lib/analytics";
import { initClarity } from "@/lib/clarity";

const AnalyticsTracker = () => {
  const location = useLocation();

  useEffect(() => {
    const onConsentChange = () => {
      initGA();
      initClarity();
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
