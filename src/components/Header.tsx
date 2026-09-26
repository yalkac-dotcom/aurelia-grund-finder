import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { prefetchHandlers } from "@/lib/heroPrefetch";
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
  const { t, language } = useLanguage();
  const isDe = language === "de";
  const [ctaOpen, setCtaOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll-Lock when mobile menu is open
  useEffect(() => {
    if (!mobileOpen) return;
    const { body, documentElement } = document;
    const prevBodyOverflow = body.style.overflow;
    const prevHtmlOverflow = documentElement.style.overflow;
    body.style.overflow = "hidden";
    documentElement.style.overflow = "hidden";
    return () => {
      body.style.overflow = prevBodyOverflow;
      documentElement.style.overflow = prevHtmlOverflow;
    };
  }, [mobileOpen]);

  // Close menu on route change
  useEffect(() => {
    setMobileOpen(false);
    setCtaOpen(false);
  }, [location.pathname]);

  const navItems: NavItem[] = isDe ? [
    { label: "Startseite", path: "/" },
    { label: "Immobilie anbieten", path: "/immobilie-anbieten" },
    { label: "Für Kaufinteressenten", path: "/fuer-kaeufer" },
    { label: "Unser Bestand", path: "/portfolio" },
    { label: "Türkei", path: "/immobilien-tuerkei" },
    { label: "Geschäftspartner", path: "/fuer-geschaeftspartner" },
    { label: "Wie wir arbeiten", path: "/wie-es-funktioniert" },
    { label: "Über uns", path: "/ueber-uns" },
    { label: "FAQ", path: "/faq" },
    { label: "Kontakt", path: "/kontakt" },
  ] : [
    { label: t.nav.home, path: "/" },
    { label: t.nav.ownerInTrouble, path: "/fuer-eigentuemer" },
    { label: t.nav.buyers, path: "/fuer-kaeufer" },
    { label: t.nav.turkeyProperties, path: "/immobilien-tuerkei" },
    { label: t.nav.partners, path: "/fuer-geschaeftspartner" },
    { label: t.nav.howItWorks, path: "/wie-es-funktioniert" },
    { label: t.nav.about, path: "/ueber-uns" },
    { label: t.nav.faq, path: "/faq" },
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

  const headerClass = scrolled
    ? "fixed inset-x-0 top-0 z-[1000] bg-white shadow-[0_2px_12px_rgba(0,0,0,0.08)] transition-all duration-300"
    : "fixed inset-x-0 top-0 z-[1000] bg-background/95 backdrop-blur-sm border-b border-border/40 transition-all duration-300";

  return (
    <header className={headerClass}>
      <div className="mx-auto flex h-16 w-full max-w-[1600px] items-center justify-between px-6 md:h-20 xl:px-8">
        <Link to="/" {...prefetchHandlers("/")} className="flex shrink-0 items-center">
          <img
            src={logoImg}
            alt="Aurelia Grundbesitz GmbH"
            className="h-[2.6rem] md:h-[3.2rem] w-auto object-contain"
            style={{ minWidth: 120 }}
          />
        </Link>

        <div className="ml-8 hidden min-w-0 flex-1 items-center gap-5 min-[1360px]:flex 2xl:ml-12 2xl:gap-7">
          <nav className="flex min-w-0 flex-1 items-center justify-between gap-2.5 2xl:gap-5">
            {navItems.map((item) =>
              item.hash ? (
                <button
                  key={item.label}
                  onClick={() => handleHashNav(item)}
                  className="min-h-0 min-w-0 whitespace-nowrap text-[12px] leading-none tracking-wide text-primary/75 transition-colors duration-300 hover:text-accent 2xl:text-sm"
                >
                  {item.label}
                </button>
              ) : (
                <Link
                  key={item.path}
                  to={item.path}
                  {...prefetchHandlers(item.path)}
                  className={`whitespace-nowrap text-[12px] leading-none tracking-wide transition-colors duration-300 hover:text-accent 2xl:text-sm ${
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
          <div className="flex shrink-0 items-center border-l border-border/60 pl-5">
            <LanguageSwitcher />
          </div>
          {isDe ? (
            <div className="relative shrink-0" onMouseLeave={() => setCtaOpen(false)}>
              <button
                type="button"
                onClick={() => setCtaOpen((v) => !v)}
                aria-expanded={ctaOpen}
                aria-haspopup="menu"
                className="inline-flex items-center whitespace-nowrap px-5 py-2.5 text-[11px] font-semibold tracking-[0.12em] uppercase btn-gradient rounded-sm transition-all duration-300"
              >
                Anfrage
              </button>
              {ctaOpen && (
                <div role="menu" className="absolute right-0 top-full z-50 pt-2">
                  <div className="w-60 overflow-hidden rounded-sm border border-border bg-background shadow-lg">
                    <Link role="menuitem" to="/immobilie-anbieten" className="block px-4 py-3 text-[13px] text-primary hover:bg-secondary">Immobilie anbieten</Link>
                    <Link role="menuitem" to="/fuer-kaeufer#kaufinteresse" className="block border-t border-border/60 px-4 py-3 text-[13px] text-primary hover:bg-secondary">Kaufinteresse hinterlegen</Link>
                  </div>
                </div>
              )}
            </div>
          ) : (
          <Link
            to="/kontakt#kontaktformular"
            className="inline-flex shrink-0 items-center whitespace-nowrap px-5 py-2.5 text-[11px] font-semibold tracking-[0.12em] uppercase btn-gradient rounded-sm transition-all duration-300"
          >
            {t.nav.ctaConfidential}
          </Link>
          )}
        </div>

        <div className="flex items-center gap-3 min-[1360px]:hidden">
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

      {mobileOpen && typeof document !== "undefined" &&
        createPortal(
          <div className="fixed inset-0 z-[9999] min-[1360px]:hidden">
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-black/60"
              onClick={() => setMobileOpen(false)}
              aria-hidden="true"
            />
            {/* Panel */}
            <nav
              className="absolute inset-0 bg-primary text-white flex flex-col overflow-y-auto overscroll-contain"
              style={{ height: "100dvh" }}
            >
              <div className="flex items-center justify-end px-6 h-16 shrink-0">
                <button
                  className="p-1.5 text-white"
                  onClick={() => setMobileOpen(false)}
                  aria-label={t.common.navigationOpenAria}
                >
                  <X size={20} />
                </button>
              </div>
              <div className="pt-2 pb-2 px-6">
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
                      {...prefetchHandlers(item.path)}
                      onClick={() => setMobileOpen(false)}
                      className={`block py-2.5 text-[11px] tracking-[0.13em] uppercase transition-colors hover:text-accent ${
                        isActive(item) ? "text-accent font-medium" : "text-white/80"
                      }`}
                    >
                      {item.label}
                    </Link>
                  )
                )}
                {isDe ? (
                  <div className="mt-2 grid gap-2">
                    <Link to="/immobilie-anbieten" onClick={() => setMobileOpen(false)} className="block py-3 text-center text-[11px] tracking-[0.13em] uppercase font-semibold bg-accent text-primary rounded-sm">Immobilie anbieten</Link>
                    <Link to="/fuer-kaeufer#kaufinteresse" onClick={() => setMobileOpen(false)} className="block py-3 text-center text-[11px] tracking-[0.13em] uppercase font-semibold bg-accent text-primary rounded-sm">Kaufinteresse hinterlegen</Link>
                  </div>
                ) : (
                <Link
                  to="/kontakt#kontaktformular"
                  onClick={() => setMobileOpen(false)}
                  className="block py-3 mt-2 text-center text-[11px] tracking-[0.13em] uppercase font-semibold bg-accent text-primary rounded-sm"
                >
                  {t.nav.ctaConfidential}
                </Link>
                )}
              </div>
              <div className="border-t border-white/10 mx-6 mt-1 pt-3 pb-6 flex items-center gap-4">
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
          </div>,
          document.body
        )}
    </header>
  );
};

export default Header;
