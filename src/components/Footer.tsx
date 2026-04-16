import { Link } from "react-router-dom";
import logoImg from "@/assets/aurelia-logo.png";
import { useLanguage } from "@/i18n/LanguageContext";

const COOKIE_KEY = "aurelia-cookie-consent";

const Footer = () => {
  const { t } = useLanguage();

  const navItems = [
    { label: t.nav.home, path: "/" },
    { label: t.nav.services, path: "/leistungen" },
    { label: t.nav.workApproach, path: "/arbeitsweise" },
    { label: t.nav.about, path: "/ueber-uns" },
    { label: t.nav.contact, path: "/kontakt" },
  ];

  const openCookieSettings = () => {
    localStorage.removeItem(COOKIE_KEY);
    window.dispatchEvent(new Event("consent-change"));
    window.dispatchEvent(new Event("open-cookie-consent"));
  };

  return (
    <footer className="relative z-40 footer-premium border-t border-white/[0.06]">
      <div className="container py-8 md:py-14">
        <div className="grid md:grid-cols-[1.4fr_0.8fr_1fr] gap-6 md:gap-8 items-start">
          {/* Left — Logo + Claim */}
          <div className="flex flex-col">
            <Link to="/" className="inline-block mb-3 md:mb-4">
              <img
                src={logoImg}
                alt="Aurelia Grundbesitz GmbH"
                className="h-[3.45rem] md:h-[4.6rem] w-auto object-contain brightness-0 invert"
              />
            </Link>
            <p className="text-white/85 text-[11px] md:text-xs leading-[1.7] max-w-xs mb-1.5">
              {t.footer.brandLine}
            </p>
            <p className="text-white/50 text-[10px] md:text-xs tracking-wide">
              {t.footer.subline}
            </p>
          </div>

          {/* Center — Navigation */}
          <div>
            <h4 className="text-[10px] md:text-xs font-sans uppercase tracking-[0.2em] text-white/60 mb-3 md:mb-4">
              {t.footer.navigation}
            </h4>
            <ul className="space-y-1.5 md:space-y-2">
              {navItems.map((item) => (
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

          {/* Right — Informationen */}
          <div className="flex flex-col items-start justify-start">
            <h4 className="text-[10px] md:text-xs font-sans uppercase tracking-[0.2em] text-white/60 mb-3 md:mb-4">
              {t.footer.information}
            </h4>

            <div className="flex flex-col items-start gap-1.5 text-[11px] md:text-xs leading-[1.7]">
              <p className="text-white/85 font-medium">Aurelia Grundbesitz GmbH</p>
              <a
                href="mailto:info@aureliaestates.de"
                className="min-h-0 text-white/65 hover:text-accent transition-colors duration-200"
              >
                info@aureliaestates.de
              </a>
            </div>

            <div className="mt-6 pt-5 border-t border-white/[0.06]">
              <p className="text-[9px] md:text-[10px] font-sans uppercase tracking-[0.15em] text-white/40 mb-3">Rechtliches</p>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/impressum"
                    className="text-white/65 text-[11px] md:text-xs hover:text-accent transition-colors duration-200"
                  >
                    {t.footer.imprint}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/datenschutz"
                    className="text-white/65 text-[11px] md:text-xs hover:text-accent transition-colors duration-200"
                  >
                    {t.footer.privacy}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/bildnachweise"
                    className="text-white/65 text-[11px] md:text-xs hover:text-accent transition-colors duration-200"
                  >
                    {t.footer.imageCredits}
                  </Link>
                </li>
                <li className="pt-2">
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
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/[0.06] mt-8 md:mt-10 pt-6 md:pt-7">
          <p className="text-white/45 text-[10px] md:text-xs text-center tracking-wide">
            © {new Date().getFullYear()} Aurelia Grundbesitz GmbH. {t.footer.rights}
          </p>
          <p className="text-white/25 text-[9px] md:text-[10px] mt-3 text-center leading-relaxed max-w-2xl mx-auto">
            {t.footer.disclaimer}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
