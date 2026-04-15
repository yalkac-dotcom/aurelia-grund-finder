import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logoImg from "@/assets/aurelia-logo.png";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLanguage } from "@/i18n/LanguageContext";

interface NavItem {
  label: string;
  path: string;
  hash?: string;
}

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { t } = useLanguage();

  const navItems: NavItem[] = [
    { label: t.nav.home, path: "/" },
    { label: t.nav.services, path: "/leistungen" },
    { label: t.nav.workApproach, path: "/arbeitsweise" },
    { label: t.nav.about, path: "/ueber-uns" },
    { label: t.nav.contact, path: "/kontakt" },
  ];

  const handleHashNav = (item: NavItem) => {
    setMobileOpen(false);
    if (location.pathname === "/") {
      document.getElementById(item.hash!)?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/");
      setTimeout(() => {
        document.getElementById(item.hash!)?.scrollIntoView({ behavior: "smooth" });
      }, 300);
    }
  };

  const isActive = (item: NavItem) => {
    if (item.hash) return false;
    return location.pathname === item.path;
  };

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border/60">
      <div className="container flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="flex items-center">
          <img src={logoImg} alt="Aurelia Grundbesitz GmbH" className="h-[2.6rem] md:h-[3.2rem] w-auto object-contain" />
        </Link>

        <div className="hidden md:flex items-baseline gap-7">
          <nav className="flex items-baseline gap-7">
            {navItems.map((item) =>
              item.hash ? (
                <button
                  key={item.label}
                  onClick={() => handleHashNav(item)}
                  className="text-[12px] tracking-wide transition-colors hover:text-accent leading-none text-muted-foreground min-h-0 min-w-0"
                >
                  {item.label}
                </button>
              ) : (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-[12px] tracking-wide transition-colors hover:text-accent leading-none ${
                    isActive(item) ? "text-foreground font-medium" : "text-muted-foreground"
                  }`}
                >
                  {item.label}
                </Link>
              )
            )}
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
          <div className="pt-4 pb-2 px-6">
            {navItems.map((item) =>
              item.hash ? (
                <button
                  key={item.label}
                  onClick={() => handleHashNav(item)}
                  className="block py-2.5 text-[11px] tracking-[0.13em] uppercase transition-colors text-muted-foreground w-full text-left min-h-0 min-w-0"
                >
                  {item.label}
                </button>
              ) : (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileOpen(false)}
                  className={`block py-2.5 text-[11px] tracking-[0.13em] uppercase transition-colors ${
                    isActive(item) ? "text-foreground font-medium" : "text-muted-foreground"
                  }`}
                >
                  {item.label}
                </Link>
              )
            )}
          </div>
          <div className="border-t border-border/20 mx-6 mt-1 pt-3 pb-4 flex items-center gap-4">
            <Link
              to="/impressum"
              onClick={() => setMobileOpen(false)}
              className="text-muted-foreground/50 text-[10px] tracking-[0.08em]"
            >
              {t.footer.imprint}
            </Link>
            <Link
              to="/datenschutz"
              onClick={() => setMobileOpen(false)}
              className="text-muted-foreground/50 text-[10px] tracking-[0.08em]"
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
