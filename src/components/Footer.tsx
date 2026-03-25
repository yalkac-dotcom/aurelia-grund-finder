import { Link } from "react-router-dom";
import logoImg from "@/assets/logo-aurelia.png";
import { useLanguage } from "@/i18n/LanguageContext";
import { languageCodes } from "@/i18n/types";
import { Shield } from "lucide-react";

const Footer = () => {
  const { t, language, setLanguage } = useLanguage();

  const navItems = [
    { label: t.nav.home, path: "/" },
    { label: t.nav.about, path: "/ueber-uns" },
    { label: t.nav.services, path: "/leistungen" },
    { label: t.nav.contact, path: "/kontakt" },
  ];

  return (
    <footer className="bg-[#16181A] border-t border-white/10">
      <div className="container py-10 md:py-12">
        <div className="grid md:grid-cols-[1.4fr_0.8fr_1fr] gap-8 md:gap-6">
          {/* Left — Logo + Claim */}
          <div>
            <Link to="/" className="inline-block mb-3">
              <img
                src={logoImg}
                alt="Aurelia Grundbesitz GmbH"
                className="h-7 w-auto object-contain brightness-0 invert"
              />
            </Link>
            <p className="text-white text-xs leading-[1.7] max-w-xs mb-1.5">
              {t.footer.brandLine}
            </p>
            <p className="text-white/85 text-xs tracking-wide">
              {t.footer.subline}
            </p>
          </div>

          {/* Center — Navigation */}
          <div>
            <h4 className="text-xs font-sans uppercase tracking-[0.2em] text-white mb-3">
              {t.footer.navigation}
            </h4>
            <ul className="space-y-1.5">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-white/90 text-xs hover:text-accent transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Right — Contact */}
          <div>
            <h4 className="text-xs font-sans uppercase tracking-[0.2em] text-white mb-3">
              {t.footer.contact}
            </h4>
            <address className="not-italic text-white/90 text-xs leading-[1.75] space-y-0.5">
              <p className="text-white font-medium">Aurelia Grundbesitz GmbH</p>
              <p>Grevenbroicher Weg 2</p>
              <p>40547 Düsseldorf</p>
              <p>{t.common.country}</p>
            </address>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/30 mt-5 pt-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-2.5">
            <p className="text-white/80 text-xs order-2 md:order-1">
              © {new Date().getFullYear()} Aurelia Grundbesitz GmbH. {t.footer.rights}
            </p>

            <div className="flex items-center gap-2.5 order-1 md:order-2">
              {languageCodes.map((code, i) => (
                <span key={code} className="inline-flex items-center">
                  <button
                    onClick={() => setLanguage(code)}
                    className={`text-xs transition-colors duration-200 ${
                      code === language
                        ? "text-accent font-medium"
                        : "text-white/80 hover:text-accent"
                    }`}
                  >
                    {code.toUpperCase()}
                  </button>
                  {i < languageCodes.length - 1 && (
                    <span className="text-white/25 ml-2.5">|</span>
                  )}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-3.5 order-3">
              <Link
                to="/impressum"
                className="text-white/80 text-xs hover:text-accent transition-colors duration-200"
              >
                {t.footer.imprint}
              </Link>
              <Link
                to="/datenschutz"
                className="text-white/80 text-xs hover:text-accent transition-colors duration-200"
              >
                {t.footer.privacy}
              </Link>
            </div>
          </div>

          <p className="text-white/75 text-xs mt-3 text-center leading-relaxed max-w-2xl mx-auto">
            {t.footer.disclaimer}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;