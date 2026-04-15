import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import Layout from "@/components/Layout";

const panelBase =
  "bg-card rounded-[1.5rem] shadow-[0_10px_50px_-10px_hsl(212_55%_20%/0.07),0_4px_16px_-6px_hsl(212_55%_20%/0.04)] border border-border/8";

const NotFound = () => {
  const location = useLocation();
  const { t } = useLanguage();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <Layout>
      <section className="py-20 md:py-32">
        <div className="container max-w-xl">
          <div className={`${panelBase} px-8 py-16 md:px-16 md:py-20 text-center`}>
            <h1 className="mb-4 text-4xl font-heading font-bold text-foreground">404</h1>
            <p className="mb-6 text-[1.05rem] text-muted-foreground">{t.notFound.text}</p>
            <Link to="/" className="text-accent hover:text-accent/80 transition-colors text-[0.9rem] underline underline-offset-4">
              {t.notFound.link}
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;
