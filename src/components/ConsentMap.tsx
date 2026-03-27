import { useState, useEffect } from "react";
import { getConsentState } from "./CookieConsent";
import { useLanguage } from "@/i18n/LanguageContext";
import { MapPin } from "lucide-react";

const MAP_CONSENT_KEY = "aurelia-map-consent";

interface ConsentMapProps {
  src: string;
  title: string;
  height?: number;
}

const ConsentMap = ({ src, title, height = 280 }: ConsentMapProps) => {
  const [cookieConsent, setCookieConsent] = useState(getConsentState());
  const [mapConsent, setMapConsent] = useState(() => {
    try {
      return localStorage.getItem(MAP_CONSENT_KEY) === "true";
    } catch {
      return false;
    }
  });
  const { t } = useLanguage();

  useEffect(() => {
    const handler = () => setCookieConsent(getConsentState());
    window.addEventListener("consent-change", handler);
    return () => window.removeEventListener("consent-change", handler);
  }, []);

  // Show map only if global cookies accepted AND map consent given
  const showMap = cookieConsent === "accepted" && mapConsent;

  if (!showMap) {
    return (
      <div
        className="border border-border/40 bg-secondary/50 flex flex-col items-center justify-center gap-3 text-center px-6"
        style={{ height }}
      >
        <MapPin className="text-accent" size={20} />
        <p className="text-muted-foreground text-sm leading-[1.7] max-w-sm">
          {t.common.mapConsentText}
        </p>
        <button
          onClick={() => {
            localStorage.setItem(MAP_CONSENT_KEY, "true");
            setMapConsent(true);
          }}
          className="bg-accent text-white px-4 py-2 text-xs font-medium tracking-[0.1em] uppercase hover:bg-accent/85 transition-colors"
        >
          {t.common.mapConsentBtn}
        </button>
      </div>
    );
  }

  return (
    <iframe
      title={title}
      src={src}
      width="100%"
      height={height}
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
  );
};

export default ConsentMap;
