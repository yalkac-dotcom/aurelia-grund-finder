import Layout from "@/components/Layout";
import Reveal from "@/components/Reveal";
import PageHero from "@/components/sections/PageHero";
import SectionHeader from "@/components/sections/SectionHeader";
import AreaCard from "@/components/sections/AreaCard";
import ProofCard from "@/components/sections/ProofCard";
import ProcessStep from "@/components/sections/ProcessStep";
import FaqBlock from "@/components/sections/FaqBlock";
import FinalCta from "@/components/sections/FinalCta";
import { heroSets } from "@/assets/heroImages";
import { useLanguage } from "@/i18n/LanguageContext";
import {
  Building2,
  Briefcase,
  FileSignature,
  MessageSquare,
  MessagesSquare,
  Compass,
  ShieldCheck,
  Handshake,
} from "lucide-react";

const formIcons = [Building2, Briefcase, FileSignature, MessageSquare];
const principleIcons = [MessagesSquare, Compass, ShieldCheck, Handshake];

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
            <div className="grid gap-6 md:gap-7 sm:grid-cols-2 lg:grid-cols-4">
              {p.forms.map((f, i) => {
                const Icon = formIcons[i % formIcons.length];
                return (
                  <Reveal key={i} delay={i * 0.06}>
                    <AreaCard icon={Icon} title={f.title} text={f.desc} />
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* GRUNDLAGEN (Navy + Proof Points) */}
        <section className="section-premium section-navy text-white">
          <div className="container-premium">
            <SectionHeader title={p.principlesTitle} intro={p.principlesText} tone="dark" />
            <Reveal delay={0.1}>
              <div className="grid gap-5 md:gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {p.principles.map((pr, i) => (
                  <ProofCard
                    key={i}
                    icon={principleIcons[i % principleIcons.length]}
                    index={i}
                    title={pr.title}
                    text={pr.text}
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
          style={{ background: "linear-gradient(180deg, hsl(30 12% 97.5%) 0%, hsl(30 10% 96%) 100%)" }}
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
          style={{ background: "linear-gradient(180deg, hsl(30 10% 96%) 0%, hsl(30 12% 97.5%) 100%)" }}
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
