import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle } from "lucide-react";

import { heroSets } from "@/assets/heroImages";
import OptimizedImg from "@/components/OptimizedImg";
import { useLanguage } from "@/i18n/LanguageContext";

const HomeHero = () => {
  const { t } = useLanguage();

  const handleScrollToProcess = () => {
    const el = document.getElementById("arbeitsweise");
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section id="hero" className="relative flex h-[62svh] min-h-[420px] items-center md:h-[70vh] md:min-h-[480px]">
      <div className="absolute inset-0 overflow-hidden">
        <OptimizedImg
          src={heroSets.premium.src}
          srcSet={heroSets.premium.srcSet}
          sizes={heroSets.premium.sizes}
          alt="Gepflegtes Mehrfamilienhaus in einer ruhigen Wohnstraße"
          className="hero-media h-full w-full object-cover object-[62%_center] md:object-center"
          priority
        />
        <div className="hero-overlay-base absolute inset-0" />
        <div className="hero-overlay-protect absolute inset-0" />
      </div>

      <div className="page-frame-hero relative pt-16 pb-10 md:pt-20 md:pb-14">
        <div className="hero-copy-shell">
          <p className="hero-kicker">{t.landing.trustLine}</p>

          <h1 className="hero-title">{t.hero.slogan}</h1>

          <p className="hero-description">{t.landing.heroSubtitle}</p>

          <div className="hero-actions">
            <div className="hero-cta-row animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <a href="/kontakt" className="btn-primary">
                {t.landing.heroCta}
              </a>
              <a href="#arbeitsweise" className="btn-secondary" onClick={handleScrollToProcess}>
                {t.landing.heroCtaSecondary}
              </a>
            </div>

            <p className="hero-trust animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              <CheckCircle size={13} className="mt-0.5 shrink-0 text-accent opacity-80 md:mt-0" />
              <span>{t.common.initialAssessmentNote}</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
