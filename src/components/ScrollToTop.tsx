import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ChevronUp } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);
  const { pathname } = useLocation();
  const { t } = useLanguage();

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label={t.common.scrollTopAria}
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
      className={`scroll-top-btn ${
        visible ? "is-visible" : "is-hidden"
      }`}
    >
      <ChevronUp size={18} strokeWidth={2} aria-hidden="true" />
      <span className="sr-only">{t.common.scrollTopAria}</span>
    </button>
  );
};

export default ScrollToTop;
