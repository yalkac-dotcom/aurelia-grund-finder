import { CheckCircle } from "lucide-react";

import { heroSets } from "@/assets/heroImages";
import OptimizedImg from "@/components/OptimizedImg";
import { useLanguage } from "@/i18n/LanguageContext";

const HomeHero = () => {
  const { t } = useLanguage();

  const handleScrollToProcess = (e: React.MouseEvent) => {
    e.preventDefault();
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
        {/* Teal gradient accent overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-teal-900/20 via-transparent to-transparent" />
      </div>

      <div className="page-frame-hero relative pt-16 pb-10 md:pt-20 md:pb-14">
        <div className="hero-copy-shell">
          <p className="hero-kicker">{t.landing.trustLine}</p>

          <h1 className="hero-title">{t.hero.slogan}</h1>

          <p className="hero-description">{t.landing.heroSubtitle}</p>

          <div className="hero-actions">
            <div className="hero-cta-row animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <a href="/kontakt" className="btn-gradient inline-flex items-center justify-content min-h-[44px] px-6 py-3 text-[0.72rem] font-semibold uppercase tracking-[0.13em] rounded-sm shadow-lg">
                {t.landing.heroCta}
              </a>
              <a
                href="#arbeitsweise"
                className="btn-secondary glass-card-dark inline-flex items-center justify-center min-h-[44px] px-5 py-3 text-[0.72rem] font-semibold uppercase tracking-[0.13em]"
                onClick={handleScrollToProcess}
              >
                {t.landing.heroCtaSecondary}
              </a>
            </div>

            <p className="hero-trust animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              <CheckCircle size={13} className="mt-0.5 shrink-0 text-teal-400 opacity-90 md:mt-0" />
              <span>{t.common.initialAssessmentNote}</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
