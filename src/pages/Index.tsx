import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import Reveal from "@/components/Reveal";
import { ArrowRight, LifeBuoy, Users, KeyRound, ShieldCheck, Handshake, Gavel, FileCheck } from "lucide-react";
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
  const proofIcons = [ShieldCheck, Handshake, FileCheck, Gavel];

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
                    <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-md bg-primary text-[hsl(45_70%_60%)] ring-1 ring-[hsl(45_60%_50%_/_0.25)]">
                      <Icon size={20} strokeWidth={1.6} />
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
                <div className="mx-auto mb-4 h-[2px] w-10 rounded-full bg-teal-400/50" />
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
                <div className="grid gap-4 md:gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8">
                  {t.home.proofPoints.map((point, i) => {
                    const Icon = proofIcons[i % proofIcons.length];
                    return (
                      <div key={i} className="glass-card-dark rounded-xl p-6 text-left h-full">
                        <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-md bg-teal-500/20 text-teal-200">
                          <Icon size={18} />
                        </div>
                        <h4 className="mb-1.5 text-[0.92rem] font-heading font-semibold text-white">
                          {point.title}
                        </h4>
                        <p className="text-[0.82rem] leading-[1.7] text-white/65">{point.text}</p>
                      </div>
                    );
                  })}
                </div>
              </Reveal>
            )}

            <Reveal delay={0.15}>
              <div className="glass-card-dark rounded-2xl p-8 md:p-10">
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
                <div className="mx-auto mb-4 h-[2px] w-10 rounded-full bg-teal-600/50" />
                <h2 className="mb-3 text-[1.4rem] font-heading font-semibold leading-[1.18] text-foreground text-balance md:text-[1.9rem]">
                  {t.home.stepsTitle}
                </h2>
              </div>
            </Reveal>

            <div className="grid gap-8 md:gap-12 sm:grid-cols-3">
              {t.home.steps.map((item, i) => (
                <Reveal key={i} delay={i * 0.08}>
                  <div className="relative">
                    <div className="glass-card rounded-2xl p-8 text-center h-full">
                      <div className="icon-badge mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-lg">
                        <span className="text-[1.3rem] font-heading font-bold text-teal-700">{i + 1}</span>
                      </div>
                      <h3 className="mb-2 text-[1rem] font-heading font-semibold text-foreground">{item.title}</h3>
                      <p className="text-[0.86rem] leading-[1.75] text-muted-foreground">{item.desc}</p>
                    </div>
                    {i < 2 && (
                      <div className="hidden sm:flex absolute top-1/2 -right-6 md:-right-8 w-6 h-6 -translate-y-1/2 items-center justify-center">
                        <ArrowRight className="text-teal-600/40" size={22} />
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
                  className="inline-flex items-center gap-2 text-[0.85rem] font-semibold text-teal-700 hover:text-teal-800 transition-colors"
                >
                  {t.home.stepsLink}
                  <ArrowRight size={15} />
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
                  <div className="mx-auto mb-4 h-[2px] w-10 rounded-full bg-teal-600/50" />
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
                    <div className="glass-card rounded-2xl p-7 h-full">
                      <h3 className="mb-3 text-[0.98rem] font-heading font-semibold text-foreground leading-snug">
                        „{item.q}“
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
                  <div className="mx-auto mb-4 h-[2px] w-10 rounded-full bg-teal-600/50" />
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
                <Accordion type="single" collapsible className="rounded-2xl bg-white/70 backdrop-blur-sm px-5 md:px-7 shadow-sm">
                  {t.home.faqItems.map((item, i) => (
                    <AccordionItem key={i} value={`item-${i}`} className="border-b border-border/50 last:border-0">
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
          className="relative section-premium text-white overflow-hidden"
          style={{ background: "linear-gradient(170deg, #0e6e91 0%, #0889b3 40%, #06acd5 100%)" }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(255,255,255,0.08)_0%,transparent_70%)] pointer-events-none" />
          <div className="container-premium relative text-center">
            <Reveal>
              <h2 className="mb-6 text-[1.85rem] font-heading font-bold text-white">{t.home.finalCtaTitle}</h2>
              <p className="mx-auto mb-10 max-w-2xl text-[0.95rem] leading-[1.8] text-white/80">
                {t.home.finalCtaText}
              </p>
              <Link
                to="/kontakt"
                className="inline-flex items-center gap-2.5 rounded-sm bg-white px-8 py-4 text-[0.72rem] font-semibold uppercase tracking-[0.15em] text-teal-800 shadow-lg transition-all duration-300 hover:bg-white/90 hover:shadow-xl"
              >
                {t.home.finalCtaButton}
                <ArrowRight size={13} />
              </Link>
            </Reveal>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default HomePage;
