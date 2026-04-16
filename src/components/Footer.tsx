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
    <footer className="relative z-40 bg-[#0F1A2E] border-t border-white/10">
      <div className="container py-6 md:py-12">
        <div className="grid md:grid-cols-[1.4fr_0.8fr_1fr] gap-5 md:gap-6 items-start">
          {/* Left — Logo + Claim */}
          <div className="flex flex-col">
            <Link to="/" className="inline-block mb-2.5 md:mb-3">
              <img
                src={logoImg}
                alt="Aurelia Grundbesitz GmbH"
                className="h-[3.45rem] md:h-[4.6rem] w-auto object-contain brightness-0 invert"
              />
            </Link>
            <p className="text-white/90 text-[11px] md:text-xs leading-[1.65] md:leading-[1.7] max-w-xs mb-1">
              {t.footer.brandLine}
            </p>
            <p className="text-white/60 text-[10px] md:text-xs tracking-wide">
              {t.footer.subline}
            </p>
          </div>

          {/* Center — Navigation */}
          <div>
            <h4 className="text-[10px] md:text-xs font-sans uppercase tracking-[0.2em] text-white/70 md:text-white mb-2.5 md:mb-3">
              {t.footer.navigation}
            </h4>
            <ul className="space-y-1 md:space-y-1.5">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-white/80 text-[11px] md:text-xs hover:text-accent transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Right — Informationen */}
          <div className="flex flex-col items-start justify-start">
            <h4 className="text-[10px] md:text-xs font-sans uppercase tracking-[0.2em] text-white/70 md:text-white mb-2.5 md:mb-3">
              {t.footer.information}
            </h4>

            <div className="flex flex-col items-start gap-1 text-[11px] md:text-xs leading-[1.7]">
              <p className="text-white/90 md:text-white font-medium">Aurelia Grundbesitz GmbH</p>
              <a
                href="mailto:info@aureliaestates.de"
                className="min-h-0 text-white/80 hover:text-accent transition-colors duration-200"
              >
                info@aureliaestates.de
              </a>
            </div>

            <div className="mt-6 flex flex-col items-start gap-3">
              <Link
                to="/impressum"
                className="min-h-0 text-white/80 text-[11px] md:text-xs hover:text-accent transition-colors duration-200"
              >
                {t.footer.imprint}
              </Link>
              <Link
                to="/datenschutz"
                className="min-h-0 text-white/80 text-[11px] md:text-xs hover:text-accent transition-colors duration-200"
              >
                {t.footer.privacy}
              </Link>
              <Link
                to="/bildnachweise"
                className="min-h-0 text-white/80 text-[11px] md:text-xs hover:text-accent transition-colors duration-200"
              >
                {t.footer.imageCredits}
              </Link>
              <button
                type="button"
                onClick={openCookieSettings}
                className="min-h-0 text-white/80 text-[11px] md:text-xs hover:text-accent transition-colors duration-200 text-left"
              >
                {t.footer.cookieSettings}
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 md:border-white/20 mt-4 md:mt-5 pt-3 md:pt-4">
          <p className="text-white/60 text-[10px] md:text-xs text-center">
            © {new Date().getFullYear()} Aurelia Grundbesitz GmbH. {t.footer.rights}
          </p>
          <p className="text-white/40 text-[9px] md:text-[10px] mt-2.5 text-center leading-relaxed max-w-2xl mx-auto">
            {t.footer.disclaimer}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
