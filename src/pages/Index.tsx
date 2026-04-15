import { useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import Reveal from "@/components/Reveal";
import HomeHero from "@/components/home/HomeHero";
import { useLanguage } from "@/i18n/LanguageContext";
import { ArrowRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Index = () => {
  const { t } = useLanguage();

  useEffect(() => {
    if (window.location.hash) {
      const el = document.querySelector(window.location.hash);
      if (el) setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 150);
    }
  }, []);

  return (
    <Layout>
      {/* 1. HERO */}
      <HomeHero />

      {/* 2. EINORDNUNG */}
      <section className="py-14 md:py-20">
        <div className="container max-w-3xl">
          <Reveal>
            <h2 className="text-[1.3rem] md:text-[1.7rem] font-heading font-semibold text-foreground leading-[1.2] mb-5 text-balance">
              {t.landing.positioningTitle}
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-muted-foreground text-[0.93rem] leading-[1.85] max-w-2xl">
              {t.landing.positioningText}
            </p>
          </Reveal>
        </div>
      </section>

      {/* 3. WANN AURELIA RELEVANT IST */}
      <section className="py-14 md:py-20 bg-secondary/40">
        <div className="container max-w-5xl">
          <Reveal>
            <p className="text-accent font-sans text-xs font-medium tracking-[0.18em] uppercase mb-6">
              {t.landing.relevanceLabel}
            </p>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-5 md:gap-6">
            {t.landing.relevanceCards.map((card, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="group bg-card rounded-2xl border border-border/40 p-7 md:p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5">
                  <h3 className="text-[1rem] md:text-[1.08rem] font-heading font-semibold text-foreground mb-2.5">
                    {card.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-[1.75]">
                    {card.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. LEISTUNGEN */}
      <section className="py-14 md:py-20">
        <div className="container max-w-5xl">
          <Reveal>
            <div className="section-shell-accent mb-8">
              <p className="text-accent font-sans text-xs font-medium tracking-[0.18em] uppercase mb-2">
                {t.landing.servicesModuleLabel}
              </p>
              <h2 className="text-[1.2rem] md:text-[1.5rem] font-heading font-semibold text-foreground leading-[1.2] max-w-xl text-balance">
                {t.landing.servicesModuleTitle}
              </h2>
            </div>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-5 md:gap-6">
            {t.landing.servicesModules.map((mod, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div className="border-l-2 border-[hsl(var(--gold)/0.4)] pl-5 py-1">
                  <h3 className="text-[0.95rem] font-heading font-semibold text-foreground mb-1.5">
                    {mod.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-[1.75]">
                    {mod.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5. ARBEITSWEISE */}
      <section id="arbeitsweise" className="py-14 md:py-20 bg-secondary/40">
        <div className="container max-w-5xl">
          <Reveal>
            <div className="section-shell-accent mb-3">
              <p className="text-accent font-sans text-xs font-medium tracking-[0.18em] uppercase mb-2">
                {t.landing.processLabel}
              </p>
              <h2 className="text-[1.2rem] md:text-[1.5rem] font-heading font-semibold text-foreground leading-[1.2] max-w-xl text-balance">
                {t.landing.processTitle}
              </h2>
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <p className="text-muted-foreground text-sm leading-[1.7] mt-3 mb-8 max-w-xl">
              {t.landing.processSubtitle}
            </p>
          </Reveal>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {t.landing.processSteps.map((step, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="relative">
                  <p className="text-[1.5rem] font-heading font-semibold text-[hsl(var(--gold))] mb-1.5">
                    {step.num}
                  </p>
                  {i < t.landing.processSteps.length - 1 && (
                    <div className="hidden md:block absolute top-4 left-full w-full h-px bg-border/40 -translate-x-4" />
                  )}
                  <h3 className="text-sm font-heading font-semibold text-foreground mb-1">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-xs leading-[1.7]">
                    {step.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 6. WARUM AURELIA */}
      <section className="py-14 md:py-20">
        <div className="container max-w-4xl">
          <Reveal>
            <div className="section-shell-accent mb-8">
              <p className="text-accent font-sans text-xs font-medium tracking-[0.18em] uppercase mb-2">
                {t.landing.whyLabel}
              </p>
              <h2 className="text-[1.2rem] md:text-[1.5rem] font-heading font-semibold text-foreground leading-[1.2] max-w-xl text-balance">
                {t.landing.whyTitle}
              </h2>
            </div>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-x-10 gap-y-6">
            {t.landing.whyPoints.map((point, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div className="flex items-start gap-3">
                  <div className="w-1 h-6 bg-[hsl(var(--gold)/0.5)] rounded-full shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-[0.95rem] font-heading font-semibold text-foreground mb-1">
                      {point.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-[1.75]">
                      {point.text}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 7. EINWANDBEHANDLUNG */}
      <section className="py-14 md:py-20 bg-secondary/40">
        <div className="container max-w-4xl">
          <Reveal>
            <div className="section-shell-accent mb-8">
              <p className="text-accent font-sans text-xs font-medium tracking-[0.18em] uppercase mb-2">
                {t.landing.objectionsLabel}
              </p>
              <h2 className="text-[1.2rem] md:text-[1.5rem] font-heading font-semibold text-foreground leading-[1.2] max-w-xl text-balance">
                {t.landing.objectionsTitle}
              </h2>
            </div>
          </Reveal>
          <div className="grid gap-5">
            {t.landing.objections.map((obj, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="bg-card rounded-2xl border border-border/40 p-6 md:p-8">
                  <p className="text-[1rem] font-heading font-semibold text-foreground mb-2.5 italic">
                    „{obj.q}"
                  </p>
                  <p className="text-muted-foreground text-sm leading-[1.75]">
                    {obj.a}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 8. CTA */}
      <section className="py-14 md:py-20">
        <div className="container max-w-3xl text-center">
          <Reveal>
            <div className="section-divider mx-auto mb-6" />
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-[1.3rem] md:text-[1.6rem] font-heading font-semibold text-foreground leading-[1.2] mb-4 text-balance">
              {t.landing.ctaTitle}
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-muted-foreground text-[0.9rem] leading-[1.75] mb-6 max-w-xl mx-auto">
              {t.landing.ctaText}
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <Link
              to="/kontakt"
              className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-7 py-3 text-xs font-medium tracking-[0.15em] uppercase hover:bg-accent/85 transition-colors duration-300 rounded-sm"
            >
              {t.landing.ctaButton}
              <ArrowRight size={13} />
            </Link>
            <p className="text-muted-foreground/70 text-xs mt-3">
              {t.common.initialAssessmentNote}
            </p>
          </Reveal>
        </div>
      </section>

      {/* 9. FAQ */}
      <section className="py-14 md:py-20 bg-secondary/40">
        <div className="container max-w-3xl">
          <Reveal>
            <div className="section-shell-accent mb-8">
              <p className="text-accent font-sans text-xs font-medium tracking-[0.18em] uppercase mb-2">
                {t.landing.homeFaqLabel}
              </p>
              <h2 className="text-[1.2rem] md:text-[1.5rem] font-heading font-semibold text-foreground leading-[1.2] max-w-xl text-balance">
                {t.landing.homeFaqTitle}
              </h2>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <Accordion type="single" collapsible className="space-y-2">
              {t.landing.homeFaqItems.map((item, i) => (
                <AccordionItem
                  key={i}
                  value={`faq-${i}`}
                  className="bg-card rounded-xl border border-border/40 px-6 overflow-hidden"
                >
                  <AccordionTrigger className="text-sm font-heading font-semibold text-foreground py-4 hover:no-underline text-left">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-sm leading-[1.75] pb-4">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
