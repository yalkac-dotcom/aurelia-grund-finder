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

const panelBase =
  "bg-card rounded-[1.5rem] shadow-[0_10px_50px_-10px_hsl(212_55%_20%/0.07),0_4px_16px_-6px_hsl(212_55%_20%/0.04)] border border-border/8";

const panelPadding = "px-6 py-7 md:px-12 md:py-10";

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
      <section className="py-6 md:py-10">
        <div className="container max-w-4xl">
          <Reveal>
            <div className={`${panelBase} ${panelPadding}`}>
              <h2 className="text-[1.3rem] md:text-[1.7rem] font-heading font-semibold text-foreground leading-[1.2] mb-5 text-balance">
                {t.landing.positioningTitle}
              </h2>
              <p className="text-muted-foreground text-[0.93rem] leading-[1.85] max-w-2xl">
                {t.landing.positioningText}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 3. DREI EINSTIEGSPFADE */}
      <section className="py-6 md:py-10 bg-secondary/30">
        <div className="container max-w-5xl">
          <Reveal>
            <p className="text-accent font-sans text-xs font-medium tracking-[0.18em] uppercase mb-8">
              {t.landing.relevanceLabel}
            </p>
          </Reveal>
          <div className="grid sm:grid-cols-3 gap-6 md:gap-8">
            {t.landing.relevanceCards.map((card, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="group bg-card rounded-[1.25rem] p-8 md:p-10 shadow-[0_8px_40px_-8px_hsl(212_55%_20%/0.06),0_2px_10px_-4px_hsl(212_55%_20%/0.03)] border border-border/8 hover:shadow-[0_16px_56px_-10px_hsl(212_55%_20%/0.10),0_4px_16px_-6px_hsl(212_55%_20%/0.05)] transition-all duration-500 hover:-translate-y-1 cursor-default h-full">
                  <div className="w-10 h-[2px] bg-accent/40 rounded-full mb-7" />
                  <h3 className="text-[1.05rem] md:text-[1.12rem] font-heading font-semibold text-foreground mb-3">
                    {card.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-[1.8]">
                    {card.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. SO KÖNNEN WIR UNTERSTÜTZEN */}
      <section className="py-6 md:py-10">
        <div className="container max-w-5xl">
          <Reveal>
            <div className={`${panelBase} ${panelPadding}`}>
              <div className="section-shell-accent mb-6">
                <p className="text-accent font-sans text-xs font-medium tracking-[0.18em] uppercase mb-2">
                  {t.landing.servicesModuleLabel}
                </p>
                <h2 className="text-[1.2rem] md:text-[1.5rem] font-heading font-semibold text-foreground leading-[1.2] max-w-xl text-balance">
                  {t.landing.servicesModuleTitle}
                </h2>
              </div>
              <div className="grid sm:grid-cols-2 gap-5 md:gap-7">
                {t.landing.servicesModules.map((mod, i) => (
                  <Reveal key={i} delay={i * 0.08}>
                    <div className="bg-secondary/40 rounded-[1.1rem] p-8 md:p-10 border-l-[3px] border-l-accent/30 hover:bg-secondary/60 transition-colors duration-400 h-full">
                      <h3 className="text-[0.98rem] md:text-[1.05rem] font-heading font-semibold text-foreground mb-2.5">
                        {mod.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-[1.8]">
                        {mod.text}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 5. UNTERNEHMERISCHER ANSATZ */}
      <section className="py-6 md:py-10 bg-secondary/30">
        <div className="container max-w-4xl">
          <Reveal>
            <div className={`${panelBase} ${panelPadding}`}>
              <div className="section-shell-accent mb-5">
                <p className="text-accent font-sans text-xs font-medium tracking-[0.18em] uppercase mb-2">
                  {t.landing.entrepreneurLabel}
                </p>
                <h2 className="text-[1.2rem] md:text-[1.5rem] font-heading font-semibold text-foreground leading-[1.2] max-w-xl text-balance">
                  {t.landing.entrepreneurTitle}
                </h2>
              </div>
              <p className="text-muted-foreground text-[0.93rem] leading-[1.85] mb-4 max-w-2xl">
                {t.landing.entrepreneurText}
              </p>
              <p className="text-muted-foreground text-[0.93rem] leading-[1.85] max-w-2xl">
                {t.landing.entrepreneurText2}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 6. BESONDERE SITUATIONEN */}
      <section className="py-6 md:py-10">
        <div className="container max-w-4xl">
          <Reveal>
            <div className={`${panelBase} ${panelPadding}`}>
              <div className="section-shell-accent mb-6">
                <p className="text-accent font-sans text-xs font-medium tracking-[0.18em] uppercase mb-2">
                  {t.landing.situationsLabel}
                </p>
                <h2 className="text-[1.2rem] md:text-[1.5rem] font-heading font-semibold text-foreground leading-[1.2] max-w-xl text-balance">
                  {t.landing.situationsTitle}
                </h2>
              </div>
              <div className="grid sm:grid-cols-2 gap-x-10 gap-y-4">
                {t.landing.situationsList.map((item, i) => (
                  <Reveal key={i} delay={i * 0.06}>
                    <div className="flex items-start gap-3 py-2">
                      <div className="w-1 h-5 bg-accent/40 rounded-full shrink-0 mt-0.5" />
                      <p className="text-foreground text-[0.93rem] leading-[1.6]">
                        {item}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 7. ARBEITSWEISE */}
      <section id="arbeitsweise" className="py-6 md:py-10 bg-secondary/30 scroll-mt-20">
        <div className="container max-w-5xl">
          <Reveal>
            <div className={`${panelBase} ${panelPadding}`}>
              <div className="section-shell-accent mb-4">
                <p className="text-accent font-sans text-xs font-medium tracking-[0.18em] uppercase mb-2">
                  {t.landing.processLabel}
                </p>
                <h2 className="text-[1.2rem] md:text-[1.5rem] font-heading font-semibold text-foreground leading-[1.2] max-w-xl text-balance">
                  {t.landing.processTitle}
                </h2>
              </div>
              <p className="text-muted-foreground text-sm leading-[1.7] mt-3 mb-6 max-w-xl">
                {t.landing.processSubtitle}
              </p>
              <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
                {t.landing.processSteps.map((step, i) => (
                  <Reveal key={i} delay={i * 0.1}>
                    <div className="relative">
                      <p className="text-[1.5rem] font-heading font-semibold text-accent mb-2">
                        {step.num}
                      </p>
                      {i < t.landing.processSteps.length - 1 && (
                        <div className="hidden md:block absolute top-4 left-full w-full h-px bg-border/40 -translate-x-4" />
                      )}
                      <h3 className="text-sm font-heading font-semibold text-foreground mb-1.5">
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
          </Reveal>
        </div>
      </section>

      {/* 8. WARUM AURELIA */}
      <section className="py-6 md:py-10">
        <div className="container max-w-4xl">
          <Reveal>
            <div className={`${panelBase} ${panelPadding}`}>
              <div className="section-shell-accent mb-6">
                <p className="text-accent font-sans text-xs font-medium tracking-[0.18em] uppercase mb-2">
                  {t.landing.whyLabel}
                </p>
                <h2 className="text-[1.2rem] md:text-[1.5rem] font-heading font-semibold text-foreground leading-[1.2] max-w-xl text-balance">
                  {t.landing.whyTitle}
                </h2>
              </div>
              <div className="grid sm:grid-cols-2 gap-x-10 gap-y-7">
                {t.landing.whyPoints.map((point, i) => (
                  <Reveal key={i} delay={i * 0.08}>
                    <div className="flex items-start gap-3">
                      <div className="w-1 h-6 bg-accent/40 rounded-full shrink-0 mt-0.5" />
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
          </Reveal>
        </div>
      </section>

      {/* 9. EINWANDBEHANDLUNG */}
      <section className="py-6 md:py-10 bg-secondary/30">
        <div className="container max-w-4xl">
          <Reveal>
            <div className={`${panelBase} ${panelPadding}`}>
              <div className="section-shell-accent mb-6">
                <p className="text-accent font-sans text-xs font-medium tracking-[0.18em] uppercase mb-2">
                  {t.landing.objectionsLabel}
                </p>
                <h2 className="text-[1.2rem] md:text-[1.5rem] font-heading font-semibold text-foreground leading-[1.2] max-w-xl text-balance">
                  {t.landing.objectionsTitle}
                </h2>
              </div>
              <div className="grid gap-5">
                {t.landing.objections.map((obj, i) => (
                  <Reveal key={i} delay={i * 0.1}>
                    <div className="bg-secondary/40 rounded-[1.1rem] p-8 md:p-10">
                      <p className="text-[1rem] font-heading font-semibold text-foreground mb-3 italic">
                        „{obj.q}"
                      </p>
                      <p className="text-muted-foreground text-sm leading-[1.8]">
                        {obj.a}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 10. CTA */}
      <section className="py-6 md:py-10">
        <div className="container max-w-3xl">
          <Reveal>
            <div className={`${panelBase} ${panelPadding} text-center`}>
              <div className="section-divider mx-auto mb-7" />
              <h2 className="text-[1.3rem] md:text-[1.6rem] font-heading font-semibold text-foreground leading-[1.2] mb-4 text-balance">
                {t.landing.ctaTitle}
              </h2>
              <p className="text-muted-foreground text-[0.9rem] leading-[1.75] mb-7 max-w-xl mx-auto">
                {t.landing.ctaText}
              </p>
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
            </div>
          </Reveal>
        </div>
      </section>

      {/* 11. FAQ */}
      <section className="py-6 md:py-10 bg-secondary/30">
        <div className="container max-w-3xl">
          <Reveal>
            <div className={`${panelBase} ${panelPadding}`}>
              <div className="section-shell-accent mb-6">
                <p className="text-accent font-sans text-xs font-medium tracking-[0.18em] uppercase mb-2">
                  {t.landing.homeFaqLabel}
                </p>
                <h2 className="text-[1.2rem] md:text-[1.5rem] font-heading font-semibold text-foreground leading-[1.2] max-w-xl text-balance">
                  {t.landing.homeFaqTitle}
                </h2>
              </div>
              <Accordion type="single" collapsible className="space-y-3">
                {t.landing.homeFaqItems.map((item, i) => (
                  <AccordionItem
                    key={i}
                    value={`faq-${i}`}
                    className="bg-secondary/40 rounded-[1.1rem] border-none px-7 overflow-hidden"
                  >
                    <AccordionTrigger className="text-sm font-heading font-semibold text-foreground py-5 hover:no-underline text-left">
                      {item.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-sm leading-[1.8] pb-5">
                      {item.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
