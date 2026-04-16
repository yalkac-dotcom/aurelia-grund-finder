import { Link } from "react-router-dom";
import { useEffect } from "react";
import Layout from "@/components/Layout";
import Reveal from "@/components/Reveal";
import OptimizedImg from "@/components/OptimizedImg";
import HeroScrollIndicator from "@/components/HeroScrollIndicator";
import { heroSets } from "@/assets/heroImages";
import { ArrowRight, Search, Layers, Handshake, Compass, ShieldCheck, Eye, Briefcase, Anchor } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { servicesPageContent } from "@/i18n/pages/servicesPage";

const sectionIcons = [Search, Layers, Handshake, Compass];
const valueIcons = [ShieldCheck, Eye, Briefcase, Anchor];

const Services = () => {
  const { language } = useLanguage();
  const t = servicesPageContent[language];

  useEffect(() => {
    document.title = t.documentTitle;
  }, [t.documentTitle]);

  return (
    <Layout>
      {/* HERO */}
      <section id="hero" className="relative flex h-[62svh] min-h-[420px] items-center md:h-[70vh] md:min-h-[480px]">
        <div className="absolute inset-0 overflow-hidden">
          <OptimizedImg
            src={heroSets.services.src}
            srcSet={heroSets.services.srcSet}
            sizes={heroSets.services.sizes}
            alt={t.heroAlt}
            className="hero-media h-full w-full object-cover object-center"
            priority
          />
          <div className="hero-overlay-base absolute inset-0" />
          <div className="hero-overlay-protect absolute inset-0" />
        </div>

        <div className="page-frame-hero relative pt-16 pb-10 md:pt-20 md:pb-14">
          <div className="hero-copy-shell">
            <Reveal>
              <p className="hero-kicker">{t.heroKicker}</p>
              <h1 className="hero-title">{t.heroTitle}</h1>
              <p className="hero-description">{t.heroText}</p>
            </Reveal>
          </div>
          <HeroScrollIndicator />
        </div>
      </section>

      <div className="page-shell">
        {/* INTRO */}
        <section className="section-premium bg-gradient-warm">
          <div className="container-premium">
            <Reveal>
              <div className="mx-auto max-w-3xl text-center">
                <div className="mx-auto mb-4 h-[2px] w-10 rounded-full bg-teal-600/50" />
                <h2 className="mb-4 text-[1.4rem] font-heading font-semibold leading-[1.18] text-foreground text-balance md:text-[1.9rem]">
                  {t.introTitle}
                </h2>
                <p className="mx-auto max-w-2xl text-[0.95rem] leading-[1.85] text-muted-foreground">
                  {t.introText}
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* LEISTUNGEN */}
        <section
          className="section-premium"
          style={{ background: "linear-gradient(180deg, hsl(30 12% 97.5%) 0%, hsl(30 10% 96%) 100%)" }}
        >
          <div className="container-premium">
            <div className="grid gap-6 sm:grid-cols-2">
              {t.sections.map((s, i) => {
                const Icon = sectionIcons[i] ?? Search;
                return (
                  <Reveal key={s.title} delay={i * 0.08}>
                    <div className="glass-card rounded-2xl p-8 h-full">
                      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-teal-50 text-teal-700">
                        <Icon size={20} />
                      </div>
                      <p className="mb-2 text-[0.72rem] font-sans font-semibold uppercase tracking-[0.15em] text-teal-700">
                        {t.stepLabel} {i + 1}
                      </p>
                      <h3 className="mb-3 text-[1.05rem] font-heading font-semibold text-foreground">
                        {s.title}
                      </h3>
                      <p className="text-[0.9rem] leading-[1.8] text-muted-foreground">{s.text}</p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* HALTUNG / VALUES */}
        <section className="section-premium section-navy text-white">
          <div className="container-premium">
            <Reveal>
              <div className="text-center mb-12">
                <div className="mx-auto mb-4 h-[2px] w-10 rounded-full bg-teal-400/50" />
                <h2 className="mb-3 text-[1.4rem] font-heading font-semibold leading-[1.18] text-white text-balance md:text-[1.9rem]">
                  {t.valuesTitle}
                </h2>
              </div>
            </Reveal>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {t.values.map((item, i) => {
                const Icon = valueIcons[i] ?? ShieldCheck;
                return (
                  <Reveal key={item.title} delay={i * 0.08}>
                    <div className="glass-card-dark rounded-2xl p-7 h-full">
                      <Icon className="mb-4 text-teal-400" size={26} />
                      <h3 className="mb-2 text-[1rem] font-heading font-semibold text-white">
                        {item.title}
                      </h3>
                      <p className="text-[0.86rem] leading-[1.75] text-white/70">{item.text}</p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* CLOSING */}
        <section className="section-premium bg-gradient-warm">
          <div className="container-premium">
            <Reveal>
              <div className="mx-auto max-w-3xl text-center">
                <div className="mx-auto mb-4 h-[2px] w-10 rounded-full bg-teal-600/50" />
                <h2 className="mb-5 text-[1.4rem] font-heading font-semibold leading-[1.18] text-foreground text-balance md:text-[1.9rem]">
                  {t.closingTitle}
                </h2>
                <p className="text-[0.95rem] leading-[1.85] text-muted-foreground">{t.closingText}</p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* CTA */}
        <section
          className="relative section-premium overflow-hidden text-white"
          style={{ background: "linear-gradient(170deg, #0e6e91 0%, #0889b3 40%, #06acd5 100%)" }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(255,255,255,0.08)_0%,transparent_70%)] pointer-events-none" />
          <div className="container-premium relative text-center">
            <Reveal>
              <h2 className="mb-5 text-[1.7rem] md:text-[1.95rem] font-heading font-bold text-white">
                {t.ctaTitle}
              </h2>
              <p className="mx-auto mb-10 max-w-2xl text-[0.95rem] leading-[1.8] text-white/85">
                {t.ctaText}
              </p>
              <Link
                to="/kontakt"
                className="inline-flex items-center gap-2.5 rounded-sm bg-white px-8 py-4 text-[0.72rem] font-semibold uppercase tracking-[0.15em] text-teal-800 shadow-lg transition-all duration-300 hover:bg-white/90 hover:shadow-xl"
              >
                {t.ctaButton}
                <ArrowRight size={13} />
              </Link>
            </Reveal>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Services;
