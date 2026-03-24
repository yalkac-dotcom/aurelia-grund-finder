import { Link } from "react-router-dom";
import logoImg from "@/assets/logo-aurelia.png";
import { useLanguage } from "@/i18n/LanguageContext";
import { languageCodes } from "@/i18n/types";

const Footer = () => {
  const { t, language, setLanguage } = useLanguage();

  const navItems = [
    { label: t.nav.home, path: "/" },
    { label: t.nav.about, path: "/ueber-uns" },
    { label: t.nav.services, path: "/leistungen" },
    { label: t.nav.investors, path: "/investoren" },
    { label: t.nav.contact, path: "/kontakt" },
  ];

  return (
    <footer className="bg-[#16181A]">
      <div className="container py-16 md:py-20">
        <div className="grid md:grid-cols-[1.4fr_0.8fr_1fr] gap-12 md:gap-10">
          {/* Left — Logo + Claim */}
          <div>
            <Link to="/" className="inline-block mb-5">
              <img
                src={logoImg}
                alt="Aurelia Grundbesitz GmbH"
                className="h-9 w-auto object-contain brightness-0 invert"
              />
            </Link>
            <p className="text-[#E5E5E5] text-[13px] leading-[1.8] max-w-xs mb-3">
              {t.footer.brandLine}
            </p>
            <p className="text-[#9A9A9A] text-[11px] tracking-wide">
              {t.footer.subline}
            </p>
          </div>

          {/* Center — Navigation */}
          <div>
            <h4 className="text-[10px] font-sans uppercase tracking-[0.2em] text-[#F5F5F5] mb-5">
              {t.footer.navigation}
            </h4>
            <ul className="space-y-2.5">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-[#B8B8B8] text-[12px] hover:text-[#C6A16E] transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Right — Contact */}
          <div>
            <h4 className="text-[10px] font-sans uppercase tracking-[0.2em] text-[#F5F5F5] mb-5">
              {t.footer.contact}
            </h4>
            <address className="not-italic text-[#B8B8B8] text-[12px] leading-[1.9] space-y-0.5">
              <p className="text-[#F5F5F5] font-medium">Aurelia Grundbesitz GmbH</p>
              <p>Grevenbroicher Weg 2</p>
              <p>40547 Düsseldorf</p>
              <p>{t.common.country}</p>
            </address>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/[0.10] mt-14 pt-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3">
            <p className="text-[#9A9A9A] text-[10px] order-2 md:order-1">
              © {new Date().getFullYear()} Aurelia Grundbesitz GmbH. {t.footer.rights}
            </p>

            <div className="flex items-center gap-3 order-1 md:order-2">
              {languageCodes.map((code, i) => (
                <span key={code} className="inline-flex items-center">
                  <button
                    onClick={() => setLanguage(code)}
                    className={`text-[10px] transition-colors duration-200 ${
                      code === language
                        ? "text-[#C6A16E] font-medium"
                        : "text-[#9A9A9A] hover:text-[#C6A16E]"
                    }`}
                  >
                    {code.toUpperCase()}
                  </button>
                  {i < languageCodes.length - 1 && (
                    <span className="text-white/[0.10] ml-3">|</span>
                  )}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-4 order-3">
              <Link
                to="/impressum"
                className="text-[#9A9A9A] text-[10px] hover:text-[#C6A16E] transition-colors duration-200"
              >
                {t.footer.imprint}
              </Link>
              <Link
                to="/datenschutz"
                className="text-[#9A9A9A] text-[10px] hover:text-[#C6A16E] transition-colors duration-200"
              >
                {t.footer.privacy}
              </Link>
            </div>
          </div>

          <p className="text-[#8A8A8A] text-[9px] mt-5 text-center leading-relaxed max-w-2xl mx-auto">
            {t.footer.disclaimer}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
