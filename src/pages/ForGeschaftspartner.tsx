import Layout from "@/components/Layout";
import Reveal from "@/components/Reveal";
import { aureliaCard } from "@/lib/cardStyle";
import PageHero from "@/components/sections/PageHero";
import SectionHeader from "@/components/sections/SectionHeader";

import ProcessStep from "@/components/sections/ProcessStep";
import FinalCta from "@/components/sections/FinalCta";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { heroSets } from "@/assets/heroImages";
import { icons3d } from "@/assets/icons3d";
import { useLanguage } from "@/i18n/LanguageContext";
import { pageExtras } from "@/i18n/pageExtras";
import { usePageSeo } from "@/hooks/usePageSeo";
import { pageSeo } from "@/i18n/pageSeo";

// Steps (5) — einzige Icon-Akzente auf der Seite (zentrale Prozessschritte)
const stepIcons = [icons3d.dialogueLight, icons3d.compassLight, icons3d.scaleLight, icons3d.contract, icons3d.handshakeLight];

const ForGeschaftspartner = () => {
  const { t, language } = useLanguage();
  usePageSeo(pageSeo[language].partners.title, pageSeo[language].partners.description);
  const p = t.partners;
  const extras = pageExtras[language];

  return (
    <Layout>
      <PageHero
        image={heroSets.geschaeftspartner}
        imageAlt={p.heroImageAlt}
        kicker={p.heroKicker}
        title={p.heroTitle}
        description={p.heroDescription}
        primaryCta={{ label: p.heroPrimaryCta, to: "/kontakt" }}
        secondaryCta={{ label: p.heroSecondaryCta, href: "#ablauf" }}
        trustLine={p.heroTrustLine}
        imagePosition="50% 48%"
        fullImage
        overlayGradient="linear-gradient(to right, hsl(var(--primary) / 0.72) 0%, hsl(var(--primary) / 0.45) 30%, hsl(var(--primary) / 0.08) 55%, transparent 70%)"
        size="compact"
      />

      <div className="page-shell">
        <section className="section-premium bg-gradient-warm !pt-0 md:!pt-0">
          <div className="container-premium">
            <SectionHeader title={p.formsTitle} intro={p.formsIntro} disableOffset />
            <div className={`grid gap-6 md:gap-8 sm:grid-cols-2 ${p.forms.length === 5 ? "lg:grid-cols-6" : "lg:grid-cols-4"}`}>
              {p.forms.map((f, i) => (
                <Reveal key={i} delay={i * 0.06} className={p.forms.length === 5 ? (i < 3 ? "lg:col-span-2" : "lg:col-span-3") + (i === 4 ? " sm:col-span-2 lg:col-span-3" : "") : undefined}>
                  <div className={`h-full p-6 md:p-7 ${aureliaCard}`}>
                    <h3 className="text-[0.98rem] font-heading font-semibold text-primary leading-snug">
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
              <div className={`grid gap-8 md:gap-10 sm:grid-cols-2 ${p.principles.length === 3 ? "lg:grid-cols-3" : "lg:grid-cols-4"}`}>
                {p.principles.map((pr, i) => (
                  <div key={i} className="border-l border-accent/50 pl-5">
                    <h3 className="text-[0.98rem] font-heading font-semibold text-white leading-snug">
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
              {p.b2bCta && (
                <div className="mt-6 flex justify-center">
                  <Link to="/kontakt#kontaktformular" className="btn-primary">
                    {p.b2bCta}
                    <ArrowRight size={13} className="ml-2 text-accent" />
                  </Link>
                </div>
              )}
            </Reveal>
          </div>
        </section>

        {/* Hinweis auf zentrale FAQ */}
        <section className="bg-gradient-warm">
          <div className="container-premium py-10 md:py-12 text-center">
            <p className="text-[0.9rem] leading-[1.7] text-muted-foreground">
              <Link to="/faq" className="text-primary underline-offset-4 hover:underline">{extras.shared.faqPrompt}</Link>
            </p>
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
