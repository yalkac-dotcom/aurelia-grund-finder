import Layout from "@/components/Layout";
import Reveal from "@/components/Reveal";
import PageHero from "@/components/sections/PageHero";
import SectionHeader from "@/components/sections/SectionHeader";
import ProofCard from "@/components/sections/ProofCard";
import ProcessStep from "@/components/sections/ProcessStep";
import FaqBlock from "@/components/sections/FaqBlock";
import FinalCta from "@/components/sections/FinalCta";
import { heroSets } from "@/assets/heroImages";
import { icons3d } from "@/assets/icons3d";
import { editorial } from "@/assets/editorial";
import { cardImages } from "@/assets/cards";
import { useLanguage } from "@/i18n/LanguageContext";

// Forms (4) — Einzelobjekt, Portfolio, Off-Market-Vertrag, Strategischer Dialog
const formImages = cardImages.partnerForms;
// Principles (Navy) — bleiben als 3D-Light-Icons (Navy-Sektion)
const principleIcons = [icons3d.dialogueLight, icons3d.horizonLight, icons3d.shieldLight, icons3d.handshakeLight];
// Steps (5) — geteiltes Bildset
const stepImages = cardImages.steps;

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
            <Reveal>
              <div className="mb-12 md:mb-16 overflow-hidden rounded-sm border-l-2 border-l-[hsl(45_70%_55%_/_0.5)]">
                <img
                  src={editorial.cooperationMeeting}
                  alt="Ruhiger Besprechungsraum mit langem Holztisch und Tageslicht – sinnbildlich für partnerschaftlichen Dialog und Kooperation"
                  loading="lazy"
                  width={1600}
                  height={520}
                  className="h-56 md:h-72 w-full object-cover"
                />
              </div>
            </Reveal>
            <SectionHeader title={p.formsTitle} intro={p.formsIntro} />
            <div className="grid gap-6 md:gap-7 sm:grid-cols-2 lg:grid-cols-4">
              {p.forms.map((f, i) => (
                <Reveal key={i} delay={i * 0.06}>
                  <ProofCard
                    image={formImages[i % formImages.length]}
                    imageAlt={f.title}
                    index={i}
                    title={f.title}
                    text={f.desc}
                    compact
                  />
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
              <div className="grid gap-5 md:gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {p.principles.map((pr, i) => (
                  <ProofCard
                    key={i}
                    iconImage={principleIcons[i % principleIcons.length]}
                    iconAlt={pr.title}
                    index={i}
                    title={pr.title}
                    text={pr.text}
                    compact
                  />
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
                  image={stepImages[i % stepImages.length]}
                  imageAlt={s.title}
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
