import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logoImg from "@/assets/aurelia-logo.png";
import { useLanguage } from "@/i18n/LanguageContext";
import LanguageSwitcher from "@/components/LanguageSwitcher";

interface NavItem {
  label: string;
  path: string;
  hash?: string;
}

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { t } = useLanguage();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems: NavItem[] = [
    { label: t.nav.home, path: "/" },
    { label: t.nav.ownerInTrouble, path: "/fuer-eigentumer-in-not" },
    { label: t.nav.buyers, path: "/fuer-kaeufer" },
    { label: t.nav.partners, path: "/fuer-geschaeftspartner" },
    { label: t.nav.howItWorks, path: "/wie-es-funktioniert" },
    { label: t.nav.about, path: "/ueber-uns" },
    { label: t.nav.faq, path: "/faq" },
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

  const headerClass = scrolled
    ? "sticky top-0 z-50 bg-white shadow-[0_2px_12px_rgba(0,0,0,0.08)] transition-all duration-300"
    : "sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border/40 transition-all duration-300";

  return (
    <header className={headerClass}>
      <div className="container flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="flex items-center">
          <img
            src={logoImg}
            alt="Aurelia Grundbesitz GmbH"
            className="h-[2.6rem] md:h-[3.2rem] w-auto object-contain"
            style={{ minWidth: 120 }}
          />
        </Link>

        <div className="hidden md:flex items-baseline gap-9">
          <nav className="flex items-baseline gap-9">
            {navItems.map((item) =>
              item.hash ? (
                <button
                  key={item.label}
                  onClick={() => handleHashNav(item)}
                  className="text-[12px] tracking-wide text-primary/75 hover:text-accent transition-colors duration-300 leading-none min-h-0 min-w-0"
                >
                  {item.label}
                </button>
              ) : (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-[12px] tracking-wide transition-colors duration-300 leading-none hover:text-accent ${
                    isActive(item)
                      ? "text-primary font-medium border-b-2 border-accent pb-0.5"
                      : "text-primary/75"
                  }`}
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>
          <div className="ml-3 pl-5 border-l border-border/60">
            <LanguageSwitcher />
          </div>
          <Link
            to="/kontakt"
            className="ml-2 inline-flex items-center px-5 py-2.5 text-[11px] font-semibold tracking-[0.12em] uppercase btn-gradient rounded-sm transition-all duration-300"
          >
            {t.nav.ctaConfidential}
          </Link>
        </div>

        <div className="md:hidden flex items-center gap-3">
          <LanguageSwitcher />
          <button
            className="p-1.5 text-primary"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={t.common.navigationOpenAria}
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <nav className="md:hidden bg-primary text-white">
          <div className="pt-4 pb-2 px-6">
            {navItems.map((item) =>
              item.hash ? (
                <button
                  key={item.label}
                  onClick={() => handleHashNav(item)}
                  className="block py-2.5 text-[11px] tracking-[0.13em] uppercase transition-colors text-white/80 hover:text-accent w-full text-left min-h-0 min-w-0"
                >
                  {item.label}
                </button>
              ) : (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileOpen(false)}
                  className={`block py-2.5 text-[11px] tracking-[0.13em] uppercase transition-colors hover:text-accent ${
                    isActive(item) ? "text-accent font-medium" : "text-white/80"
                  }`}
                >
                  {item.label}
                </Link>
              )
            )}
            <Link
              to="/kontakt"
              onClick={() => setMobileOpen(false)}
              className="block py-3 mt-2 text-center text-[11px] tracking-[0.13em] uppercase font-semibold bg-accent text-primary rounded-sm"
            >
              {t.nav.ctaConfidential}
            </Link>
          </div>
          <div className="border-t border-white/10 mx-6 mt-1 pt-3 pb-4 flex items-center gap-4">
            <Link
              to="/impressum"
              onClick={() => setMobileOpen(false)}
              className="text-white/55 text-[10px] tracking-[0.08em]"
            >
              {t.footer.imprint}
            </Link>
            <Link
              to="/datenschutz"
              onClick={() => setMobileOpen(false)}
              className="text-white/55 text-[10px] tracking-[0.08em]"
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
