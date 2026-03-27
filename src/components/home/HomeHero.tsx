import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle } from "lucide-react";

import HeroScrollIndicator from "@/components/HeroScrollIndicator";
import OptimizedImg from "@/components/OptimizedImg";
import heroImg from "@/assets/hero-premium.jpg";
import { useLanguage } from "@/i18n/LanguageContext";

const HomeHero = () => {
  const { t } = useLanguage();

  const handleScrollToNext = () => {
    const hero = document.getElementById("hero");
    const next = hero?.nextElementSibling as HTMLElement | null;
    next?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section id="hero" className="relative flex h-[82svh] min-h-[520px] items-center md:h-[88vh] md:min-h-[600px]">
      <div className="absolute inset-0 overflow-hidden">
        <OptimizedImg
          src={heroImg}
          alt="Helle, hochwertige Architekturfassade von Aurelia Grundbesitz"
          className="hero-media h-full w-full object-cover object-[62%_center] md:object-center"
          priority
        />
        <div className="hero-overlay-base absolute inset-0" />
        <div className="hero-overlay-protect absolute inset-0" />
        <div className="hero-overlay-warm absolute inset-0" />
      </div>

      <div className="relative container pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="hero-copy-shell">
          <p className="hero-kicker">{t.landing.trustLine}</p>

          <h1 className="hero-title">{t.hero.slogan}</h1>

          <p className="hero-description">{t.landing.heroSubtitle}</p>

          <div className="hero-actions animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <Link to="/kontakt" className="hero-primary-button inline-flex items-center justify-center gap-2">
              {t.landing.heroCta}
              <ArrowRight size={14} />
            </Link>

            <button
              onClick={handleScrollToNext}
              className="hero-secondary-button inline-flex items-center justify-center gap-2"
            >
              {t.landing.heroCtaSecondary}
            </button>
          </div>

          <p className="hero-meta-line animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <CheckCircle size={14} className="mt-0.5 shrink-0 text-accent md:mt-0" />
            <span>{t.landing.heroMetaLine}</span>
          </p>
        </div>

        <HeroScrollIndicator />
      </div>
    </section>
  );
};

export default HomeHero;