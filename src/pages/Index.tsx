import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import Reveal from "@/components/Reveal";
import { ArrowRight, LifeBuoy, Users, KeyRound, Lock, Scale, Compass, CheckCircle2 } from "lucide-react";
import HeroScrollIndicator from "@/components/HeroScrollIndicator";
import { heroSets } from "@/assets/heroImages";
import OptimizedImg from "@/components/OptimizedImg";
import { useLanguage } from "@/i18n/LanguageContext";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const HomePage = () => {
  const { t } = useLanguage();
  const areaIcons = [LifeBuoy, Users, KeyRound];
  const areaLinks = ["/fuer-eigentumer-in-not", "/kontakt", "/fuer-kaeufer"];
  // Vier Versprechen: Diskretion, Substanz, Langfristigkeit, Klarheit
  const proofIcons = [Lock, Scale, Compass, CheckCircle2];

  return (
    <Layout>
      {/* HERO */}
      <section id="hero" className="relative flex h-[62svh] min-h-[420px] items-center md:h-[70vh] md:min-h-[480px]">
        <div className="absolute inset-0 overflow-hidden">
          <OptimizedImg
            src={heroSets.premium.src}
            srcSet={heroSets.premium.srcSet}
            sizes={heroSets.premium.sizes}
            alt="Ruhige Wohnstraße mit gepflegtem Mehrfamilienhaus bei Tageslicht – sinnbildlich für diskrete Immobilienlösungen in besonderen Situationen"
            className="hero-media h-full w-full object-cover object-[62%_center] md:object-center"
            priority
          />
          <div className="hero-overlay-base absolute inset-0" />
          <div className="hero-overlay-protect absolute inset-0" />
          {/* Stronger readability layer for hero copy */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        </div>

        <div className="page-frame-hero relative pt-16 pb-10 md:pt-20 md:pb-14">
          <div className="hero-copy-shell max-w-2xl">
            <Reveal>
              <p className="hero-kicker">{t.home.heroKicker}</p>
              <h1 className="hero-title">{t.home.heroTitle}</h1>
              <p className="hero-description max-w-xl">{t.home.heroDescription}</p>
              <div className="mt-7 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:gap-4">
                <Link
                  to="/kontakt"
                  className="inline-flex items-center gap-2 rounded-sm bg-white px-7 py-3.5 text-[0.72rem] font-semibold uppercase tracking-[0.15em] text-primary shadow-lg ring-1 ring-[hsl(45_70%_55%_/_0.4)] transition-all duration-300 hover:bg-white/95 hover:ring-[hsl(45_80%_60%)]"
                >
                  {t.home.heroPrimaryCta ?? t.home.finalCtaButton}
                  <ArrowRight size={13} className="text-[hsl(45_70%_45%)]" />
                </Link>
                <a
                  href="#ablauf"
                  className="inline-flex items-center gap-2 rounded-sm border border-white/35 bg-white/5 px-6 py-3.5 text-[0.72rem] font-semibold uppercase tracking-[0.15em] text-white backdrop-blur-sm transition-all duration-300 hover:border-white/55 hover:bg-white/10"
                >
                  {t.home.heroSecondaryCta ?? "Wie wir vorgehen"}
                </a>
              </div>
              {t.home.heroTrustLine && (
                <p className="mt-4 text-[0.78rem] text-white/75">{t.home.heroTrustLine}</p>
              )}
            </Reveal>
          </div>
          <HeroScrollIndicator />
        </div>
      </section>

      <div className="page-shell">
        {/* DIE 3 BEREICHE */}
        <section className="section-premium bg-gradient-warm">
          <div className="container-premium">
            <Reveal>
              <div className="text-center mb-12">
                <div className="mx-auto mb-4 h-px w-12 bg-[hsl(45_60%_50%_/_0.55)]" />
                <h2 className="mb-3 text-[1.4rem] font-heading font-semibold leading-[1.18] text-foreground text-balance md:text-[1.9rem]">
                  {t.home.areasTitle}
                </h2>
                <p className="mx-auto max-w-lg text-[0.93rem] leading-[1.85] text-muted-foreground">
                  {t.home.areasIntro}
                </p>
              </div>
            </Reveal>

            <div className="grid gap-6 md:gap-7 sm:grid-cols-3">
              {t.home.areas.map((path, i) => {
                const Icon = areaIcons[i];
                return (
                  <Link key={i} to={areaLinks[i]} className="glass-card card-hover block p-8 text-left transition-all duration-300 h-full">
                    <div className="icon-tile mb-6">
                      <Icon size={20} aria-hidden="true" />
                    </div>
                    <h3 className="mb-2.5 text-[1.05rem] font-heading font-semibold text-foreground">
                      {path.title}
                    </h3>
                    <p className="mb-5 text-[0.88rem] leading-[1.7] text-muted-foreground">
                      {path.desc}
                    </p>
                    <span className="inline-flex items-center gap-1.5 text-[0.78rem] font-semibold uppercase tracking-[0.12em] text-primary">
                      {path.cta} <ArrowRight size={13} className="text-[hsl(45_70%_45%)]" />
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* TRUST */}
        <section className="section-premium section-navy text-white">
          <div className="container-premium">
            <Reveal>
              <div className="text-center mb-10">
                <div className="mx-auto mb-4 h-px w-12 bg-[hsl(45_70%_60%_/_0.6)]" />
                <h2 className="mb-5 text-[1.4rem] font-heading font-semibold leading-[1.18] text-white text-balance md:text-[1.9rem]">
                  {t.home.trustTitle}
                </h2>
                <p className="mx-auto max-w-2xl text-[0.93rem] leading-[1.85] text-white/75">
                  {t.home.trustText}
                </p>
              </div>
            </Reveal>

            {t.home.proofPoints && t.home.proofPoints.length > 0 && (
              <Reveal delay={0.1}>
                <div className="grid gap-5 md:gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-8">
                  {t.home.proofPoints.map((point, i) => {
                    const Icon = proofIcons[i % proofIcons.length];
                    return (
                      <article
                        key={i}
                        className="proof-card group h-full"
                        aria-labelledby={`proof-${i}-title`}
                      >
                        {/* Bildebene (Navy) mit Icon + Goldlinie */}
                        <div className="proof-card__visual">
                          <span className="proof-card__icon" aria-hidden="true">
                            <Icon size={22} />
                          </span>
                          <span className="proof-card__numeral" aria-hidden="true">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                        </div>
                        {/* Inhaltsebene (weiß, Navy-Typo) */}
                        <div className="proof-card__body">
                          <h4
                            id={`proof-${i}-title`}
                            className="text-[0.95rem] font-heading font-semibold text-primary leading-snug"
                          >
                            {point.title}
                          </h4>
                          <p className="mt-1.5 text-[0.82rem] leading-[1.7] text-muted-foreground">
                            {point.text}
                          </p>
                        </div>
                      </article>
                    );
                  })}
                </div>
              </Reveal>
            )}

            <Reveal delay={0.15}>
              <div className="glass-card-dark p-8 md:p-10 border-l-2 border-l-[hsl(45_70%_55%_/_0.6)]">
                <h3 className="mb-3 text-[1.1rem] font-heading font-semibold text-white">
                  {t.home.trustClaimTitle}
                </h3>
                <p className="text-[0.93rem] leading-[1.85] text-white/70">
                  {t.home.trustClaimText}
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* 3-SCHRITT-TEASER */}
        <section
          id="ablauf"
          className="section-premium scroll-mt-24"
          style={{ background: "linear-gradient(180deg, hsl(30 12% 97.5%) 0%, hsl(30 10% 96%) 100%)" }}
        >
          <div className="container-premium">
            <Reveal>
              <div className="text-center mb-12">
                <div className="mx-auto mb-4 h-px w-12 bg-[hsl(45_60%_50%_/_0.55)]" />
                <h2 className="mb-3 text-[1.4rem] font-heading font-semibold leading-[1.18] text-foreground text-balance md:text-[1.9rem]">
                  {t.home.stepsTitle}
                </h2>
              </div>
            </Reveal>

            <div className="grid gap-6 md:gap-10 sm:grid-cols-3">
              {t.home.steps.map((item, i) => (
                <Reveal key={i} delay={i * 0.08}>
                  <div className="relative">
                    <div className="glass-card p-8 text-left h-full">
                      <div className="icon-tile mb-5">
                        <span className="text-[0.92rem] font-heading font-semibold leading-none">{i + 1}</span>
                      </div>
                      <h3 className="mb-2 text-[1rem] font-heading font-semibold text-foreground">{item.title}</h3>
                      <p className="text-[0.86rem] leading-[1.75] text-muted-foreground">{item.desc}</p>
                    </div>
                    {i < 2 && (
                      <div className="hidden sm:flex absolute top-1/2 -right-5 md:-right-7 w-5 h-5 -translate-y-1/2 items-center justify-center">
                        <ArrowRight className="text-[hsl(45_60%_50%_/_0.55)]" size={18} aria-hidden="true" />
                      </div>
                    )}
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.3}>
              <p className="mt-8 mx-auto max-w-2xl text-center text-[0.78rem] leading-[1.7] text-muted-foreground/80 italic">
                {t.home.stepsNote}
              </p>
            </Reveal>

            <Reveal delay={0.35}>
              <div className="mt-6 text-center">
                <Link
                  to="/wie-es-funktioniert"
                  className="inline-flex items-center gap-2 text-[0.78rem] font-semibold uppercase tracking-[0.12em] text-primary hover:text-primary/80 transition-colors"
                >
                  {t.home.stepsLink}
                  <ArrowRight size={13} className="text-[hsl(45_70%_45%)]" />
                </Link>
              </div>
            </Reveal>
          </div>
        </section>

        {/* EINWANDBEHANDLUNG */}
        {t.home.objections && t.home.objections.length > 0 && (
          <section className="section-premium bg-gradient-warm">
            <div className="container-premium">
              <Reveal>
                <div className="text-center mb-10 max-w-2xl mx-auto">
                  <div className="mx-auto mb-4 h-px w-12 bg-[hsl(45_60%_50%_/_0.55)]" />
                  <h2 className="mb-3 text-[1.4rem] font-heading font-semibold leading-[1.18] text-foreground text-balance md:text-[1.9rem]">
                    {t.home.objectionsTitle}
                  </h2>
                  {t.home.objectionsIntro && (
                    <p className="text-[0.93rem] leading-[1.85] text-muted-foreground">
                      {t.home.objectionsIntro}
                    </p>
                  )}
                </div>
              </Reveal>
              <div className="grid gap-5 md:gap-6 md:grid-cols-3 max-w-5xl mx-auto">
                {t.home.objections.map((item, i) => (
                  <Reveal key={i} delay={i * 0.08}>
                    <div className="glass-card p-7 h-full border-l-2 border-l-[hsl(45_60%_50%_/_0.4)]">
                      <h3 className="mb-3 text-[0.98rem] font-heading font-semibold text-foreground leading-snug">
                        „{item.q}"
                      </h3>
                      <p className="text-[0.86rem] leading-[1.8] text-muted-foreground">{item.a}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* FAQ */}
        {t.home.faqItems && t.home.faqItems.length > 0 && (
          <section
            className="section-premium"
            style={{ background: "linear-gradient(180deg, hsl(30 10% 96%) 0%, hsl(30 12% 97.5%) 100%)" }}
          >
            <div className="container-premium max-w-3xl">
              <Reveal>
                <div className="text-center mb-8">
                  <div className="mx-auto mb-4 h-px w-12 bg-[hsl(45_60%_50%_/_0.55)]" />
                  <h2 className="mb-3 text-[1.4rem] font-heading font-semibold leading-[1.18] text-foreground text-balance md:text-[1.9rem]">
                    {t.home.faqTitle}
                  </h2>
                  {t.home.faqIntro && (
                    <p className="text-[0.93rem] leading-[1.85] text-muted-foreground">
                      {t.home.faqIntro}
                    </p>
                  )}
                </div>
              </Reveal>
              <Reveal delay={0.1}>
                <Accordion type="single" collapsible className="rounded-md bg-white/85 backdrop-blur-sm px-5 md:px-7 ring-1 ring-border/40 shadow-[0_2px_8px_-4px_hsl(212_40%_15%_/_0.06)]">
                  {t.home.faqItems.map((item, i) => (
                    <AccordionItem key={i} value={`item-${i}`} className="border-b border-border/40 last:border-0">
                      <AccordionTrigger className="text-left text-[0.95rem] font-heading font-semibold text-foreground hover:no-underline py-5">
                        {item.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-[0.88rem] leading-[1.85] text-muted-foreground pb-5">
                        {item.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </Reveal>
            </div>
          </section>
        )}


        <section
          className="relative section-premium text-white overflow-hidden section-navy"
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,hsl(45_60%_55%_/_0.06)_0%,transparent_70%)] pointer-events-none" />
          <div className="container-premium relative text-center">
            <Reveal>
              <div className="mx-auto mb-6 h-px w-12 bg-[hsl(45_70%_60%_/_0.6)]" />
              <h2 className="mb-6 text-[1.6rem] md:text-[1.85rem] font-heading font-semibold text-white">{t.home.finalCtaTitle}</h2>
              <p className="mx-auto mb-10 max-w-2xl text-[0.95rem] leading-[1.8] text-white/75">
                {t.home.finalCtaText}
              </p>
              <Link
                to="/kontakt"
                className="inline-flex items-center gap-2.5 rounded-sm bg-white px-8 py-4 text-[0.72rem] font-semibold uppercase tracking-[0.15em] text-primary shadow-lg ring-1 ring-[hsl(45_70%_55%_/_0.4)] transition-all duration-300 hover:bg-white/95 hover:ring-[hsl(45_80%_60%)]"
              >
                {t.home.finalCtaButton}
                <ArrowRight size={13} className="text-[hsl(45_70%_45%)]" />
              </Link>
            </Reveal>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default HomePage;
