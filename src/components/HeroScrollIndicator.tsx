import { useLanguage } from "@/i18n/LanguageContext";

const HeroScrollIndicator = () => {
  const { t } = useLanguage();

  const scrollDown = () => {
    window.scrollBy({ top: window.innerHeight * 0.85, behavior: "smooth" });
  };

  return (
    <div className="absolute bottom-5 md:bottom-8 left-0 right-0 z-10 flex justify-center">
      <button
        onClick={scrollDown}
        aria-label={t.common.scrollDownAria}
        className="group"
        type="button"
      >
        <div className="w-[22px] h-[36px] md:w-[28px] md:h-[44px] rounded-full border-[1.5px] md:border-2 border-white/40 md:border-white/50 flex items-start justify-center pt-[7px] md:pt-[9px] transition-all duration-300 group-hover:border-white/80 group-active:scale-[0.95]">
          <div className="w-[3px] h-[8px] md:w-[3.5px] md:h-[10px] rounded-full bg-white/50 md:bg-white/60 animate-scroll-dot" />
        </div>
      </button>
    </div>
  );
};

export default HeroScrollIndicator;
