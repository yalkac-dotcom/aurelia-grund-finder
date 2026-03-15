import { Link } from "react-router-dom";
import logoImg from "@/assets/logo-aurelia.png";
import { useLanguage } from "@/i18n/LanguageContext";
import { languageCodes, languageNames } from "@/i18n/types";

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
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-16">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <Link to="/" className="inline-block mb-4">
              <img src={logoImg} alt="Aurelia Grundbesitz GmbH" className="h-[6.5rem] w-auto object-contain brightness-0 invert" />
            </Link>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              {t.footer.brandLine}
            </p>
          </div>

          <div>
            <h4 className="font-medium text-sm uppercase tracking-widest text-accent mb-4">{t.footer.navigation}</h4>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link to={item.path} className="text-primary-foreground/70 text-sm hover:text-accent transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-sm uppercase tracking-widest text-accent mb-4">{t.footer.contact}</h4>
            <address className="not-italic text-primary-foreground/70 text-sm leading-relaxed space-y-1">
              <p>Aurelia Grundbesitz GmbH</p>
              <p>Grevenbroicher Weg 2</p>
              <p>40547 Düsseldorf, Germany</p>
            </address>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-primary-foreground/50 text-xs">
              © {new Date().getFullYear()} Aurelia Grundbesitz GmbH. {t.footer.rights}
            </p>
            <div className="flex items-center gap-4">
              <Link to="/impressum" className="text-primary-foreground/50 text-xs hover:text-accent transition-colors">{t.footer.imprint}</Link>
              <Link to="/datenschutz" className="text-primary-foreground/50 text-xs hover:text-accent transition-colors">{t.footer.privacy}</Link>
            </div>
          </div>

          {/* Footer language switcher */}
          <div className="flex items-center justify-center gap-3 mt-4">
            {languageCodes.map((code, i) => (
              <span key={code}>
                <button
                  onClick={() => setLanguage(code)}
                  className={`text-xs transition-colors ${
                    code === language ? "text-accent font-medium" : "text-primary-foreground/40 hover:text-accent"
                  }`}
                >
                  {code.toUpperCase()}
                </button>
                {i < languageCodes.length - 1 && <span className="text-primary-foreground/20 ml-3">|</span>}
              </span>
            ))}
          </div>

          <p className="text-primary-foreground/40 text-[10px] mt-4 text-center leading-relaxed">
            {t.footer.disclaimer}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
