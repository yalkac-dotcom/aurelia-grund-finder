import Header from "./Header";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";
import TrustBar from "./home/TrustBar";
import CookieConsent from "./CookieConsent";
import MobileContactBar from "./MobileContactBar";
import { useLanguage } from "@/i18n/LanguageContext";
import { useCanonicalUrl } from "@/hooks/useCanonicalUrl";
import { useLocation } from "react-router-dom";

const MOBILE_CONTACT_ROUTES = new Set([
  "/",
  "/fuer-eigentumer-in-not",
  "/immobilien-tuerkei",
  "/wie-es-funktioniert",
  "/ueber-uns",
  "/leistungen",
  "/faq",
]);

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { t } = useLanguage();
  const location = useLocation();
  const showMobileContactBar = MOBILE_CONTACT_ROUTES.has(location.pathname);
  useCanonicalUrl();
  return (
    <div className={`min-h-screen flex flex-col ${showMobileContactBar ? "pb-[calc(3.5rem+env(safe-area-inset-bottom))] md:pb-0" : ""}`}>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[10000] focus:rounded-sm focus:bg-teal-700 focus:px-4 focus:py-2 focus:text-[0.78rem] focus:font-semibold focus:uppercase focus:tracking-[0.12em] focus:text-white focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-white"
      >
        {t.common.skipToContent}
      </a>
      <Header />
      <TrustBar />
      <main id="main-content" tabIndex={-1} className="flex-1">{children}</main>
      <Footer />
      <ScrollToTop />
      <CookieConsent />
      {showMobileContactBar && <MobileContactBar />}
    </div>
  );
};

export default Layout;
