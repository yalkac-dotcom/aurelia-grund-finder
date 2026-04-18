import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);
  const [direction, setDirection] = useState<"down" | "up">("down");
  const { pathname } = useLocation();
  const { t } = useLanguage();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const viewportHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const remainingScroll = documentHeight - (scrollTop + viewportHeight);

      setVisible(scrollTop > 400);
      setDirection(remainingScroll > viewportHeight * 0.35 ? "down" : "up");
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  const handleClick = () => {
    if (direction === "down") {
      window.scrollBy({ top: window.innerHeight * 0.9, behavior: "smooth" });
      return;
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const ariaLabel = direction === "down" ? t.common.scrollDownAria : t.common.scrollTopAria;
  const Icon = direction === "down" ? ChevronDown : ChevronUp;

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label={ariaLabel}
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
      className={`scroll-top-btn ${visible ? "is-visible" : "is-hidden"}`}
    >
      <Icon size={18} strokeWidth={2} aria-hidden="true" />
      <span className="sr-only">{ariaLabel}</span>
    </button>
  );
};

export default ScrollToTop;
