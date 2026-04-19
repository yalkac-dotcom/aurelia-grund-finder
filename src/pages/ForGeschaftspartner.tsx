import Layout from "@/components/Layout";
import Reveal from "@/components/Reveal";
import PageHero from "@/components/sections/PageHero";
import SectionHeader from "@/components/sections/SectionHeader";
import EditorialPoint from "@/components/sections/EditorialPoint";
import FinalCta from "@/components/sections/FinalCta";
import FaqHint from "@/components/sections/FaqHint";
import { heroSets } from "@/assets/heroImages";
import { useLanguage } from "@/i18n/LanguageContext";

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
        {/* DEZENTER RECHTLICHER HINWEIS — ruhige Hairline-Leiste */}
        <section className="surface-stone hairline-b">
          <div className="container-premium py-5">
            <p className="mx-auto max-w-3xl text-[0.78rem] leading-[1.75] text-muted-foreground text-center">
              <span className="font-medium text-foreground/80">{p.legalNoticeLabel}:</span>{" "}
              {p.legalNoticeText}
            </p>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════
            1) KOOPERATIONSFORMEN — EditorialPoint-Liste auf Paper
            ─────────────────────────────────────────────────────────── */}
        <section className="surface-paper section-y-lux">
          <div className="container-premium">
            <SectionHeader
              eyebrow="Formen der Zusammenarbeit"
              title={p.formsTitle}
              intro={p.formsIntro}
            />
            <div className="grid gap-y-10 gap-x-10 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
              {p.forms.map((f, i) => (
                <Reveal key={i} delay={i * 0.06}>
                  <EditorialPoint
                    index={i}
                    title={f.title}
                    text={f.desc}
                  />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════
            2) GRUNDLAGEN — Navy-Editorial mit asymmetrischer Spalte
            ─────────────────────────────────────────────────────────── */}
        <section className="surface-ink section-y-base">
          <div className="container-premium">
            <div className="grid gap-12 md:gap-16 md:grid-cols-12 items-start">
              <Reveal>
                <div className="md:col-span-5">
                  <p className="eyebrow eyebrow--dark mb-5">Unsere Grundlagen</p>
                  <h2 className="font-heading font-medium text-white leading-[1.12] tracking-[-0.01em] text-balance text-[1.7rem] md:text-[2.25rem] lg:text-[2.45rem]">
                    {p.principlesTitle}
                  </h2>
                  <p className="mt-6 max-w-md text-[0.95rem] leading-[1.85] text-white/70">
                    {p.principlesText}
                  </p>
                </div>
              </Reveal>

              <div className="md:col-span-7 grid gap-y-10 gap-x-10 sm:grid-cols-2">
                {p.principles.map((pr, i) => (
                  <Reveal key={i} delay={0.1 + i * 0.06}>
                    <EditorialPoint
                      index={i}
                      title={pr.title}
                      text={pr.text}
                      tone="dark"
                    />
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════
            3) ABLAUF — Stone-Layer, EditorialPoint-Liste
            ─────────────────────────────────────────────────────────── */}
        <section
          id="ablauf"
          className="bg-gradient-stone-cream section-y-base scroll-mt-24"
        >
          <div className="container-premium">
            <SectionHeader
              eyebrow="So entsteht eine Zusammenarbeit"
              title={p.stepsTitle}
            />
            <div className="grid gap-y-10 gap-x-10 sm:grid-cols-2 lg:grid-cols-5 max-w-6xl mx-auto">
              {p.steps.map((s, i) => (
                <Reveal key={i} delay={i * 0.06}>
                  <EditorialPoint
                    index={i}
                    title={s.title}
                    text={s.desc}
                  />
                </Reveal>
              ))}
            </div>
            <Reveal delay={0.3}>
              <p className="mt-12 mx-auto max-w-2xl text-center text-[0.85rem] leading-[1.85] text-muted-foreground italic">
                {p.stepsNote}
              </p>
            </Reveal>
          </div>
        </section>

        {/* 4) FAQ-Hinweis */}
        <FaqHint />

        {/* 5) Final CTA — editorial Split */}
        <FinalCta
          variant="split"
          eyebrow="Nächster Schritt"
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
