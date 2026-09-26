import { Link } from "react-router-dom";
import { useEffect } from "react";
import Layout from "@/components/Layout";
import Reveal from "@/components/Reveal";
import OptimizedImg from "@/components/OptimizedImg";
import HeroScrollIndicator from "@/components/HeroScrollIndicator";
import { heroSets } from "@/assets/heroImages";
import portfolioHero640 from "@/assets/hero-portfolio-640w.webp";
import portfolioHero1024 from "@/assets/hero-portfolio-1024w.webp";
import portfolioHero1440 from "@/assets/hero-portfolio-1440w.webp";
import { ArrowRight, MapPin, Building2, TreePine, Store } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { pageExtras } from "@/i18n/pageExtras";
import { usePageSeo } from "@/hooks/usePageSeo";
import { pageSeo } from "@/i18n/pageSeo";

const Portfolio = () => {
  const { language } = useLanguage();
  const copy = pageExtras[language].portfolio;

  // DE-only header image (real photo, Pexels 32992049). All other languages
  // keep the previous hero image.
  const isGerman = language === "de";
  const portfolioHeroSet = {
    src: portfolioHero1440,
    srcSet: `${portfolioHero640} 640w, ${portfolioHero1024} 1024w, ${portfolioHero1440} 1440w`,
    sizes: "(max-width: 640px) 100vw, (max-width: 1440px) 75vw, 1920px",
  };
  const heroSet = portfolioHeroSet;

  usePageSeo(copy.seoTitle, pageSeo[language].portfolio.description);

  return (
    <Layout>
      {/* HERO */}
      <section id="hero" className="relative flex min-h-[420px] items-center md:h-[70vh] md:min-h-[480px]">
        <div className="absolute inset-0 overflow-hidden">
          <OptimizedImg
            src={heroSet.src}
            srcSet={heroSet.srcSet}
            sizes={heroSet.sizes}
            alt={copy.heroAlt}
            className="hero-media h-full w-full object-cover object-center"
            priority
          />
          <div className="hero-overlay-base absolute inset-0" />
          <div className="hero-overlay-protect absolute inset-0" />
        </div>

        <div className="page-frame-hero relative pt-16 pb-10 md:pt-20 md:pb-14">
          <div className="hero-copy-shell">
            <Reveal>
              <p className="hero-kicker">{copy.heroKicker}</p>
              <h1 className="hero-title">{isGerman ? "Ausgewählte Immobilien aus unserem Bestand" : copy.heroTitle}</h1>
              <p className="hero-description">{copy.heroDescription}</p>
            </Reveal>
          </div>
          <HeroScrollIndicator />
        </div>
      </section>

      <div className="page-shell">
        {/* INTRO */}
        <section className="section-premium bg-gradient-warm">
          <div className="container-premium text-center">
            <Reveal>
              <div className="mx-auto mb-4 h-[2px] w-10 rounded-full bg-teal-600/50" />
              <h2 className="mb-5 text-[1.4rem] font-heading font-semibold leading-[1.18] text-foreground text-balance md:text-[1.9rem]">
                {isGerman ? "Ausgewählte Immobilien aus unserem Bestand" : copy.introTitle}
              </h2>
              <p className="mx-auto max-w-3xl text-[0.93rem] leading-[1.85] text-muted-foreground">
                {isGerman ? "Hier zeigen wir ausgewählte Immobilien, die Aurelia selbst erworben hat und direkt zum Verkauf anbietet. Nicht jedes Bestandsobjekt wird öffentlich dargestellt." : copy.introText}
              </p>
            </Reveal>
          </div>
        </section>

        {/* KATEGORIEN */}
        <section className="section-premium" style={{ background: "linear-gradient(180deg, hsl(var(--background)) 0%, hsl(var(--secondary)) 100%)" }}>
          <div className="container-premium">
            <Reveal>
              <div className="text-center mb-12">
                <div className="mx-auto mb-4 h-[2px] w-10 rounded-full bg-teal-600/50" />
                <h2 className="mb-3 text-[1.4rem] font-heading font-semibold leading-[1.18] text-foreground text-balance md:text-[1.9rem]">
                  {copy.categoriesTitle}
                </h2>
                <p className="mx-auto max-w-2xl text-[0.93rem] leading-[1.85] text-muted-foreground">
                  {copy.categoriesIntro}
                </p>
              </div>
            </Reveal>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {copy.categories.map((item, i) => {
                const icons = [Building2, Building2, TreePine, Store];
                const images = ["/images/portfolio-apartments-header.jpg", "/images/portfolio-houses-header.jpg", "/images/portfolio-land-header.jpg", "/images/portfolio-commercial-header.jpg"];
                const CategoryIcon = icons[i] ?? Building2;
                return (
                  <Reveal key={i} delay={i * 0.08}>
                    <div className="glass-card overflow-hidden h-full" style={{ borderRadius: 12 }}>
                      <div className="relative h-[180px] overflow-hidden rounded-t-lg">
                        <OptimizedImg
                          src={images[i]}
                          alt={item.alt}
                          fallbackLabel={item.title}
                          className="block h-full w-full object-cover"
                        />
                        
                      </div>
                      <div className="p-7">
                        <CategoryIcon className="mb-4 text-teal-600" size={28} />
                        <h3 className="mb-2 text-[1rem] font-heading font-semibold text-foreground">{item.title}</h3>
                        <p className="text-[0.86rem] leading-[1.75] text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* REGION */}
        <section className="section-premium section-navy text-white">
          <div className="container-premium">
            <Reveal>
              <div className="text-center max-w-2xl mx-auto">
                <MapPin className="mx-auto mb-4 text-teal-400" size={32} />
                <h2 className="mb-4 text-[1.4rem] font-heading font-semibold leading-[1.18] text-white text-balance md:text-[1.7rem]">
                  {copy.regionTitle}
                </h2>
                <p className="text-[0.93rem] leading-[1.85] text-white/75">
                  {copy.regionText}
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* CTA */}
        <section className="relative section-premium text-white overflow-hidden" style={{ background: "linear-gradient(170deg, hsl(var(--primary)) 0%, hsl(var(--highlight)) 100%)" }}>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(255,255,255,0.08)_0%,transparent_70%)] pointer-events-none" />
          <div className="container-premium relative text-center">
            <Reveal>
              <h2 className="mb-6 text-[1.85rem] font-heading font-bold text-white">{isGerman ? "Kein passendes Objekt dabei?" : copy.ctaTitle}</h2>
              <p className="mx-auto mb-10 max-w-2xl text-[0.95rem] leading-[1.8] text-white/80">
                {isGerman ? "Hinterlegen Sie einfach Ihr Kaufinteresse. Wenn wir ein passendes Objekt im eigenen Bestand haben oder später erwerden, melden wir uns bei Ihnen." : copy.ctaText}
              </p>
              <Link
                to={isGerman ? "/fuer-kaeufer#kaufinteresse" : "/kontakt"}
                className="inline-flex items-center gap-2.5 rounded-sm bg-white px-8 py-4 text-[0.72rem] font-semibold uppercase tracking-[0.15em] text-teal-800 shadow-lg transition-all duration-300 hover:bg-white/90 hover:shadow-xl"
              >
                {isGerman ? "Kaufinteresse hinterlegen" : copy.ctaButton}
                <ArrowRight size={13} />
              </Link>
            </Reveal>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Portfolio;
