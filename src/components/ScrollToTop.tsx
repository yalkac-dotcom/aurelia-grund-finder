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
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label={t.common.scrollTopAria}
      className={`fixed bottom-20 right-3 md:bottom-8 md:right-8 z-40 w-8 h-8 md:w-11 md:h-11 flex items-center justify-center rounded-full border border-white/15 md:border-transparent bg-[#16181A]/70 md:bg-primary text-white/70 md:text-primary-foreground backdrop-blur-md md:backdrop-blur-none shadow-none md:shadow-[0_4px_16px_-3px_rgba(0,0,0,0.25)] transition-all duration-300 active:scale-[0.93] hover:bg-accent hover:text-white hover:shadow-[0_6px_24px_-4px_rgba(0,0,0,0.3)] ${
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <ChevronUp size={14} strokeWidth={1.5} className="md:w-5 md:h-5 md:[stroke-width:2]" />
    </button>
  );
};

export default ScrollToTop;
