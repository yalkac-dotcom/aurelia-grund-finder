import { useState, useEffect } from "react";
import { getConsentState } from "./CookieConsent";
import { useLanguage } from "@/i18n/LanguageContext";
import { MapPin } from "lucide-react";

interface ConsentMapProps {
  src: string;
  title: string;
  height?: number;
}

const ConsentMap = ({ src, title, height = 280 }: ConsentMapProps) => {
  const [consent, setConsent] = useState(getConsentState());
  const { t } = useLanguage();

  useEffect(() => {
    const handler = () => setConsent(getConsentState());
    window.addEventListener("consent-change", handler);
    return () => window.removeEventListener("consent-change", handler);
  }, []);

  if (consent !== "accepted") {
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
            localStorage.setItem("aurelia-cookie-consent", "accepted");
            setConsent("accepted");
            window.dispatchEvent(new Event("consent-change"));
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
