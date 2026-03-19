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
    { label: t.nav.taxBenefits, path: "/steuervorteile" },
    { label: t.nav.investors, path: "/investoren" },
    { label: t.nav.contact, path: "/kontakt" },
  ];

  return (
    <footer className="bg-[#0F1113] text-[#B0B0B0]">
      <div className="container py-20 md:py-24">
        <div className="grid md:grid-cols-3 gap-16">
          <div>
            <Link to="/" className="inline-block mb-5">
              <img src={logoImg} alt="Aurelia Grundbesitz GmbH" className="h-12 w-auto object-contain brightness-0 invert" />
            </Link>
            <p className="text-[#8A8A8A] text-[13px] leading-relaxed max-w-xs">
              {t.footer.brandLine}
            </p>
          </div>

          <div>
            <h4 className="text-[11px] font-sans uppercase tracking-widest text-[#F5F5F5] mb-5">{t.footer.navigation}</h4>
            <ul className="space-y-2.5">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link to={item.path} className="text-[#B0B0B0] text-[13px] hover:text-accent transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] font-sans uppercase tracking-widest text-[#F5F5F5] mb-5">{t.footer.contact}</h4>
            <address className="not-italic text-[#B0B0B0] text-[13px] leading-relaxed space-y-1">
              <p>Aurelia Grundbesitz GmbH</p>
              <p>Grevenbroicher Weg 2</p>
              <p>40547 Düsseldorf, Germany</p>
            </address>
          </div>
        </div>

        <div className="border-t border-white/[0.12] mt-16 pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-[#8A8A8A] text-[11px]">
              © {new Date().getFullYear()} Aurelia Grundbesitz GmbH. {t.footer.rights}
            </p>
            <div className="flex items-center gap-5">
              <Link to="/impressum" className="text-[#8A8A8A] text-[11px] hover:text-accent transition-colors">{t.footer.imprint}</Link>
              <Link to="/datenschutz" className="text-[#8A8A8A] text-[11px] hover:text-accent transition-colors">{t.footer.privacy}</Link>
            </div>
          </div>

          <div className="flex items-center justify-center gap-3 mt-5">
            {languageCodes.map((code, i) => (
              <span key={code}>
                <button
                  onClick={() => setLanguage(code)}
                  className={`text-[11px] transition-colors ${
                    code === language ? "text-accent font-medium" : "text-[#8A8A8A] hover:text-accent"
                  }`}
                >
                  {code.toUpperCase()}
                </button>
                {i < languageCodes.length - 1 && <span className="text-white/[0.12] ml-3">|</span>}
              </span>
            ))}
          </div>

          <p className="text-[#8A8A8A] text-[10px] mt-5 text-center leading-relaxed max-w-3xl mx-auto">
            {t.footer.disclaimer}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
