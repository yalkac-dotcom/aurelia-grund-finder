import { Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";
import { pageExtras } from "@/i18n/pageExtras";

const MobileContactBar = () => {
  const { language } = useLanguage();
  const labels = pageExtras[language].shared;

  return (
    <div className="fixed inset-x-0 bottom-0 z-[60] flex min-h-14 md:hidden">
      <a
        href="tel:+4921169583033"
        className="flex min-h-14 flex-1 items-center justify-center gap-2 border-r border-primary-foreground/20 bg-primary px-3 pb-[env(safe-area-inset-bottom)] text-center text-[12px] font-semibold uppercase tracking-[0.08em] text-primary-foreground"
      >
        <Phone size={15} strokeWidth={1.75} aria-hidden="true" />
        {labels.call}
      </a>
      <Link
        to={`/immobilie-anbieten?lang=${language}`}
        className="flex min-h-14 flex-1 items-center justify-center bg-accent px-3 pb-[env(safe-area-inset-bottom)] text-center text-[12px] font-semibold uppercase tracking-[0.08em] text-accent-foreground"
      >
        {labels.offerProperty}
      </Link>
    </div>
  );
};

export default MobileContactBar;