import Header from "./Header";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";
// import CookieConsent from "./CookieConsent";
import { useLanguage } from "@/i18n/LanguageContext";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { t } = useLanguage();
  return (
    <div className="min-h-screen flex flex-col">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[10000] focus:rounded-sm focus:bg-teal-700 focus:px-4 focus:py-2 focus:text-[0.78rem] focus:font-semibold focus:uppercase focus:tracking-[0.12em] focus:text-white focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-white"
      >
        {t.common.skipToContent ?? "Zum Inhalt springen"}
      </a>
      <Header />
      <main id="main-content" tabIndex={-1} className="flex-1">{children}</main>
      <Footer />
      <ScrollToTop />
      <CookieConsent />
    </div>
  );
};

export default Layout;
