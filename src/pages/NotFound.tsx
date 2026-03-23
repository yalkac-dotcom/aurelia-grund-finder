import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useLanguage } from "@/i18n/LanguageContext";

const NotFound = () => {
  const location = useLocation();
  const { t } = useLanguage();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-heading font-bold text-foreground">404</h1>
        <p className="mb-6 text-[1.05rem] text-muted-foreground">{t.notFound.text}</p>
        <Link to="/" className="text-accent hover:text-accent/80 transition-colors text-[0.9rem] underline underline-offset-4">
          {t.notFound.link}
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
