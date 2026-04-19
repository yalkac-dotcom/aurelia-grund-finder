import Layout from "@/components/Layout";
import Reveal from "@/components/Reveal";
import PageHero from "@/components/sections/PageHero";
import SectionHeader from "@/components/sections/SectionHeader";

import ProcessStep from "@/components/sections/ProcessStep";
import FaqBlock from "@/components/sections/FaqBlock";
import FinalCta from "@/components/sections/FinalCta";
import { heroSets } from "@/assets/heroImages";
import { icons3d } from "@/assets/icons3d";
import { useLanguage } from "@/i18n/LanguageContext";

// Steps (5) — einzige Icon-Akzente auf der Seite (zentrale Prozessschritte)
const stepIcons = [icons3d.dialogueLight, icons3d.compassLight, icons3d.scaleLight, icons3d.contract, icons3d.handshakeLight];

const ForGeschaftspartner = () => {
  const { t } = useLanguage();
  const p = t.partners;

  return (
    <Layout>
      <PageHero
        image={heroSets.investors}
        imageAlt={p.heroImageAlt}
        kicker={p.heroKicker}
        title={p.heroTitle}
        description={p.heroDescription}
        primaryCta={{ label: p.heroPrimaryCta, to: "/kontakt" }}
        secondaryCta={{ label: p.heroSecondaryCta, href: "#ablauf" }}
        trustLine={p.heroTrustLine}
      />

      <div className="page-shell">
        {/* DEZENTER RECHTLICHER HINWEIS */}
        <section className="border-b border-border/40 bg-muted/30">
          <div className="container-premium py-4">
            <p className="mx-auto max-w-3xl text-[0.78rem] leading-[1.7] text-muted-foreground text-center">
              <span className="font-medium text-foreground/80">{p.legalNoticeLabel}:</span> {p.legalNoticeText}
            </p>
          </div>
        </section>

        {/* KOOPERATIONSFORMEN */}
        <section className="section-premium bg-gradient-warm">
          <div className="container-premium">
            <SectionHeader title={p.formsTitle} intro={p.formsIntro} />
            <div className="grid gap-8 md:gap-10 sm:grid-cols-2 lg:grid-cols-4">
              {p.forms.map((f, i) => (
                <Reveal key={i} delay={i * 0.06}>
                  <div className="border-l border-accent/40 pl-5">
                    <div className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-accent">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <h3 className="mt-2.5 text-[0.98rem] font-heading font-semibold text-primary leading-snug">
                      {f.title}
                    </h3>
                    <p className="mt-2 text-[0.85rem] leading-[1.75] text-muted-foreground">{f.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* GRUNDLAGEN (Navy) */}
        <section className="section-premium section-navy text-white">
          <div className="container-premium">
            <SectionHeader title={p.principlesTitle} intro={p.principlesText} tone="dark" />
            <Reveal delay={0.1}>
              <div className="grid gap-8 md:gap-10 sm:grid-cols-2 lg:grid-cols-4">
                {p.principles.map((pr, i) => (
                  <div key={i} className="border-l border-accent/50 pl-5">
                    <div className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-accent">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <h3 className="mt-2.5 text-[0.98rem] font-heading font-semibold text-white leading-snug">
                      {pr.title}
                    </h3>
                    <p className="mt-2 text-[0.85rem] leading-[1.75] text-white/75">{pr.text}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* ABLAUF */}
        <section
          id="ablauf"
          className="section-premium scroll-mt-24"
          style={{ background: "linear-gradient(180deg, hsl(var(--background)) 0%, hsl(var(--secondary)) 100%)" }}
        >
          <div className="container-premium">
            <SectionHeader title={p.stepsTitle} />
            <div className="grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-5">
              {p.steps.map((s, i) => (
                <ProcessStep
                  key={i}
                  index={i}
                  total={p.steps.length}
                  title={s.title}
                  desc={s.desc}
                  iconImage={stepIcons[i % stepIcons.length]}
                  iconAlt={s.title}
                />
              ))}
            </div>
            <Reveal delay={0.3}>
              <p className="mt-8 mx-auto max-w-2xl text-center text-[0.78rem] leading-[1.7] text-muted-foreground/80 italic">
                {p.stepsNote}
              </p>
            </Reveal>
          </div>
        </section>

        {/* FAQ */}
        <section
          className="section-premium"
          style={{ background: "linear-gradient(180deg, hsl(var(--secondary)) 0%, hsl(var(--background)) 100%)" }}
        >
          <div className="container-premium max-w-3xl">
            <SectionHeader title={p.faqTitle} intro={p.faqIntro} />
            <FaqBlock items={p.faqItems} />
          </div>
        </section>

        <FinalCta
          title={p.finalCtaTitle}
          text={p.finalCtaText}
          buttonLabel={p.finalCtaButton}
          buttonTo="/kontakt"
        />
      </div>
    </Layout>
  );
};

export default ForGeschaftspartner;
