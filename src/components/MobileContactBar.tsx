import { Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";
import { pageExtras } from "@/i18n/pageExtras";
import { whatsappHref, WhatsAppIcon } from "./WhatsAppContact";

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
      <a
        href={whatsappHref(language)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className="flex min-h-14 w-14 shrink-0 items-center justify-center border-r border-primary-foreground/20 bg-primary pb-[env(safe-area-inset-bottom)] text-primary-foreground"
      >
        <WhatsAppIcon size={20} />
      </a>
      <Link
        to={`/immobilie-anbieten?lang=${language}`}
        className="flex min-h-14 flex-[1.25] items-center justify-center whitespace-nowrap bg-accent px-2 pb-[env(safe-area-inset-bottom)] text-center text-[12px] font-semibold uppercase tracking-[0.08em] text-accent-foreground"
      >
        {labels.offerProperty}
      </Link>
    </div>
  );
};

export default MobileContactBar;