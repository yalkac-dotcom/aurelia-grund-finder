import { Link } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-[#0F1A2E] border-t border-white/10">
      <div className="container py-8 md:py-10 text-center">
        <p className="text-white/90 text-xs md:text-sm font-heading font-medium tracking-wide mb-0.5">
          Aurelia Grundbesitz GmbH
        </p>
        <p className="text-white/50 text-[11px] md:text-xs tracking-wide mb-4">
          Düsseldorf
        </p>
        <div className="flex items-center justify-center gap-1.5 text-[11px] md:text-xs">
          <Link
            to="/kontakt"
            className="text-white/60 hover:text-accent transition-colors duration-200"
          >
            {t.nav.contact}
          </Link>
          <span className="text-white/25">·</span>
          <Link
            to="/impressum"
            className="text-white/60 hover:text-accent transition-colors duration-200"
          >
            {t.footer.imprint}
          </Link>
          <span className="text-white/25">·</span>
          <Link
            to="/datenschutz"
            className="text-white/60 hover:text-accent transition-colors duration-200"
          >
            {t.footer.privacy}
          </Link>
        </div>
        <p className="text-white/30 text-[10px] md:text-[11px] mt-4">
          © {new Date().getFullYear()} Aurelia Grundbesitz GmbH
        </p>
      </div>
    </footer>
  );
};

export default Footer;
