import { Check } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const TrustBar = () => {
  const { t } = useLanguage();
  const items = t.trustBar.items;

  return (
    <section
      aria-label="Trust"
      className="w-full"
      style={{ backgroundColor: "#4A7FA5" }}
    >
      <div className="container mx-auto flex min-h-[44px] flex-wrap items-center justify-center gap-x-3 gap-y-1.5 py-2.5 text-center md:min-h-[48px] md:py-0">
        {items.map((label, i) => (
          <div key={i} className="flex items-center gap-2">
            {i > 0 && (
              <span className="hidden md:inline" style={{ color: "rgba(255,255,255,0.4)" }}>
                ·
              </span>
            )}
            <span className="inline-flex items-center gap-1.5 text-[12px] font-medium uppercase tracking-[0.1em] text-white">
              <Check size={13} strokeWidth={2.25} style={{ color: "#C9A84C" }} />
              {label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrustBar;
