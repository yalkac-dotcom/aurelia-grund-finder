import { Link } from "react-router-dom";
import logoImg from "@/assets/aurelia-logo.png";
import { useLanguage } from "@/i18n/LanguageContext";
import { languageCodes } from "@/i18n/types";

const COOKIE_KEY = "aurelia-cookie-consent";

const Footer = () => {
  const { t, language, setLanguage } = useLanguage();

  const navItems = [
    { label: t.nav.home, path: "/" },
    { label: t.nav.about, path: "/ueber-uns" },
    { label: t.nav.services, path: "/leistungen" },
    { label: t.nav.investors, path: "/investoren" },
    { label: t.nav.glossar, path: "/investoren-glossar" },
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
          <div>
            <h4 className="text-[10px] md:text-xs font-sans uppercase tracking-[0.2em] text-white/70 md:text-white mb-2.5 md:mb-3">
              {t.footer.information}
            </h4>
            <div className="text-[11px] md:text-xs leading-[1.7]">
              <p className="text-white/90 md:text-white font-medium">Aurelia Grundbesitz GmbH</p>
              <a href="mailto:info@aurelia-grundbesitz.de" className="text-white/80 block hover:text-accent transition-colors duration-200 mt-0.5">
                info@aurelia-grundbesitz.de
              </a>
            </div>
            <ul className="mt-4 space-y-1.5">
              <li>
                <Link
                  to="/impressum"
                  className="text-white/80 text-[11px] md:text-xs hover:text-accent transition-colors duration-200 inline-block"
                >
                  {t.footer.imprint}
                </Link>
              </li>
              <li>
                <Link
                  to="/datenschutz"
                  className="text-white/80 text-[11px] md:text-xs hover:text-accent transition-colors duration-200 inline-block"
                >
                  {t.footer.privacy}
                </Link>
              </li>
              <li>
                <button
                  type="button"
                  onClick={openCookieSettings}
                  className="text-white/80 text-[11px] md:text-xs hover:text-accent transition-colors duration-200 text-left"
                >
                  {t.footer.cookieSettings}
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 md:border-white/20 mt-4 md:mt-5 pt-3 md:pt-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-1.5 md:gap-2">
            <p className="text-white/60 text-[10px] md:text-xs order-2 md:order-1">
              © {new Date().getFullYear()} Aurelia Grundbesitz GmbH. {t.footer.rights}
            </p>

            <div className="flex items-center gap-2.5 order-1 md:order-2">
              {languageCodes.map((code, i) => (
                <span key={code} className="inline-flex items-center">
                  <button
                    onClick={() => setLanguage(code)}
                    className={`text-[10px] md:text-xs transition-colors duration-200 ${
                      code === language
                        ? "text-accent font-medium"
                        : "text-white/60 hover:text-accent"
                    }`}
                  >
                    {code.toUpperCase()}
                  </button>
                  {i < languageCodes.length - 1 && (
                    <span className="text-white/20 ml-2.5">|</span>
                  )}
                </span>
              ))}
            </div>
          </div>

          <p className="text-white/40 text-[9px] md:text-xs mt-2.5 md:mt-3 text-center leading-relaxed max-w-2xl mx-auto">
            {t.footer.disclaimer}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
