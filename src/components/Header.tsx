import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logoImg from "@/assets/logo-aurelia.png";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLanguage } from "@/i18n/LanguageContext";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const { t } = useLanguage();

  const navItems = [
    { label: t.nav.home, path: "/" },
    { label: t.nav.about, path: "/ueber-uns" },
    { label: t.nav.services, path: "/leistungen" },
    { label: t.nav.taxBenefits, path: "/steuervorteile" },
    { label: t.nav.contact, path: "/kontakt" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border/60">
      <div className="container flex items-center justify-between h-14 md:h-[72px]">
        <Link to="/" className="flex items-center">
          <img src={logoImg} alt="Aurelia Grundbesitz GmbH" className="h-8 md:h-11 w-auto object-contain" />
        </Link>

        <div className="hidden md:flex items-baseline gap-7">
          <nav className="flex items-baseline gap-7">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-[12px] tracking-wide transition-colors hover:text-accent leading-none ${
                  location.pathname === item.path
                    ? "text-foreground font-medium"
                    : "text-muted-foreground"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="self-center w-px h-4 bg-border/60" />
          <LanguageSwitcher />
        </div>

        <div className="md:hidden flex items-center gap-3">
          <LanguageSwitcher />
          <div className="w-px h-4 bg-border/40" />
          <button
            className="p-1.5 text-foreground/70"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={t.common.navigationOpenAria}
          >
            {mobileOpen ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <nav className="md:hidden bg-background border-t border-border/40">
          <div className="py-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMobileOpen(false)}
                className={`block px-6 py-3 text-[11px] tracking-[0.12em] uppercase transition-colors ${
                  location.pathname === item.path
                    ? "text-foreground font-medium"
                    : "text-muted-foreground"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className="border-t border-border/30 px-6 py-3 flex items-center gap-3">
            <Link
              to="/impressum"
              onClick={() => setMobileOpen(false)}
              className="text-muted-foreground/60 text-[10px] tracking-wide"
            >
              {t.footer.imprint}
            </Link>
            <Link
              to="/datenschutz"
              onClick={() => setMobileOpen(false)}
              className="text-muted-foreground/60 text-[10px] tracking-wide"
            >
              {t.footer.privacy}
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
