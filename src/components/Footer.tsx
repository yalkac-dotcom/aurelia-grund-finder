import { Link } from "react-router-dom";
import logoImg from "@/assets/aurelia-logo.png";
import { useLanguage } from "@/i18n/LanguageContext";

const COOKIE_KEY = "aurelia-cookie-consent";

const Footer = () => {
  const { t } = useLanguage();

  const openCookieSettings = () => {
    localStorage.removeItem(COOKIE_KEY);
    window.dispatchEvent(new Event("consent-change"));
    window.dispatchEvent(new Event("open-cookie-consent"));
  };

  const copyright = t.footer.copyright.replace("{year}", String(new Date().getFullYear()));

  return (
    <footer className="relative z-40 footer-premium border-t border-white/[0.06]">
      <div className="container py-10 md:py-14">
        <div className="grid gap-10 md:gap-16 lg:gap-20 md:grid-cols-3">
          {/* Col 1 — Brand */}
          <div className="flex flex-col">
            <Link to="/" className="inline-block mb-4">
              <img
                src={logoImg}
                alt="Aurelia Grundbesitz GmbH"
                className="h-[3.45rem] md:h-[4.2rem] w-auto object-contain brightness-0 invert"
              />
            </Link>
            <p className="text-white/85 text-[11px] md:text-xs leading-[1.7] max-w-xs mb-3">
              {t.footer.brandLine}
            </p>
            <p className="text-white/50 text-[10px] md:text-xs tracking-wide">
              {t.footer.subline}
            </p>
          </div>

          {/* Col 2 — Navigation */}
          <div>
            <h4 className="text-[10px] md:text-xs font-sans uppercase tracking-[0.2em] text-white/60 mb-4">
              {t.footer.navigation}
            </h4>
            <ul className="space-y-2">
              {t.footer.navItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-white/70 text-[11px] md:text-xs hover:text-accent transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Informationen + Legal */}
          <div>
            <h4 className="text-[10px] md:text-xs font-sans uppercase tracking-[0.2em] text-white/60 mb-4">
              {t.footer.information}
            </h4>
            <div className="flex flex-col items-start gap-1.5 text-[11px] md:text-xs leading-[1.7] mb-5">
              <p className="text-white/85 font-medium">Aurelia Grundbesitz GmbH</p>
              <p className="text-white/65">Grevenbroicher Weg 2</p>
              <p className="text-white/65">40547 Düsseldorf</p>
              <a
                href="tel:+4921169583033"
                className="text-white/65 hover:text-accent transition-colors duration-200"
              >
                {t.footer.phoneLabel}: +49 211 69583033
              </a>
              <a
                href="mailto:info@aureliaestates.de"
                className="text-white/65 hover:text-accent transition-colors duration-200"
              >
                {t.footer.emailLabel}: info@aureliaestates.de
              </a>
            </div>

            <p className="text-[9px] md:text-[10px] font-sans uppercase tracking-[0.15em] text-white/40 mb-3">
              {t.footer.legalSectionLabel}
            </p>
            <ul className="space-y-2">
              {t.footer.legalItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-white/65 text-[11px] md:text-xs hover:text-accent transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li className="pt-1">
                <button
                  type="button"
                  onClick={openCookieSettings}
                  className="text-white/45 text-[11px] md:text-xs hover:text-accent transition-colors duration-200 text-left"
                >
                  {t.footer.cookieSettings}
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/[0.06] mt-10 pt-6 md:pt-7">
          <p className="text-white/45 text-[10px] md:text-xs text-center tracking-wide">
            {copyright}
          </p>
          <p className="text-white/25 text-[9px] md:text-[10px] mt-3 text-center leading-relaxed max-w-2xl mx-auto">
            {t.footer.kwgDisclaimer}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
