import { useEffect } from "react";
import Layout from "@/components/Layout";
import Reveal from "@/components/Reveal";
import HeroScrollIndicator from "@/components/HeroScrollIndicator";
import SectionHeader from "@/components/sections/SectionHeader";
import EditorialPoint from "@/components/sections/EditorialPoint";
import FinalCta from "@/components/sections/FinalCta";
import FaqHint from "@/components/sections/FaqHint";
import OptimizedImg from "@/components/OptimizedImg";
import { editorial } from "@/assets/editorial";
import { useLanguage } from "@/i18n/LanguageContext";

const About = () => {
  const { t } = useLanguage();
  const a = t.aboutV2;

  useEffect(() => {
    document.title = `${a.hero.title} – Aurelia Grundbesitz GmbH`;
  }, [a.hero.title]);

  return (
    <Layout>
      {/* ─────────────────────────────────────────────────────────────
          HERO — ruhig, ohne CTA-Stack
          ─────────────────────────────────────────────────────────── */}
      <section
        id="hero"
        className="relative flex h-[58svh] min-h-[400px] items-center md:h-[64vh] md:min-h-[460px] bg-primary"
      >
        <div className="absolute inset-0 overflow-hidden bg-primary">
          <img
            src={editorial.notaryQuiet}
            alt={a.hero.title}
            loading="eager"
            className="hero-media h-full w-full object-cover object-center"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to right, hsl(var(--primary) / 0.92) 0%, hsl(var(--primary) / 0.82) 35%, hsl(var(--primary) / 0.50) 65%, hsl(var(--primary) / 0.32) 100%)",
            }}
          />
        </div>

        <div className="page-frame-hero relative pt-16 pb-10 md:pt-20 md:pb-14">
          <div className="hero-copy-shell">
            <Reveal>
              <p className="hero-kicker">{a.hero.kicker}</p>
              <h1 className="hero-title">{a.hero.title}</h1>
              <p className="hero-description">{a.hero.subtitle}</p>
              <p className="mt-5 max-w-2xl text-[15px] md:text-[16px] leading-[1.8] text-white/85">
                {a.hero.body}
              </p>
            </Reveal>
          </div>
          <HeroScrollIndicator />
        </div>
      </section>

      <div className="page-shell">
        {/* ═══════════════════════════════════════════════════════════
            1) UNTERNEHMENSPROFIL — editorialer Split (Bild + Text)
            ─────────────────────────────────────────────────────────── */}
        <section className="surface-paper section-y-lux">
          <div className="container-premium">
            <div className="grid gap-12 md:gap-16 lg:gap-20 md:grid-cols-12 items-center">
              <Reveal>
                <div className="md:col-span-5">
                  <div className="overflow-hidden">
                    <OptimizedImg
                      src={editorial.caseReviewDesk}
                      alt="Ruhiger Arbeitsplatz mit geordneten Unterlagen"
                      className="block w-full h-auto object-cover"
                      style={{ aspectRatio: "4 / 5" }}
                    />
                  </div>
                </div>
              </Reveal>
              <Reveal delay={0.1}>
                <div className="md:col-span-7">
                  <p className="eyebrow mb-5">Profil</p>
                  <h2 className="font-heading font-medium text-primary leading-[1.15] tracking-[-0.01em] text-balance text-[1.7rem] md:text-[2.25rem] lg:text-[2.45rem]">
                    {a.companyProfile.headline}
                  </h2>
                  <p className="mt-6 text-[0.96rem] md:text-[1rem] leading-[1.9] text-muted-foreground">
                    {a.companyProfile.body}
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════
            2) METRICS-LEISTE — qualitative Kennzahlen auf Navy
            ─────────────────────────────────────────────────────────── */}
        {a.metricsBar && (
          <section className="surface-ink py-14 md:py-16 hairline-on-dark-t">
            <div className="container-premium">
              <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/10">
                {a.metricsBar.items.map((item, idx) => (
                  <Reveal key={idx} delay={idx * 0.05}>
                    <div className="text-center px-4 py-6 md:py-2">
                      <p className="font-heading font-medium text-accent text-[1rem] md:text-[1.1rem] leading-tight tracking-wide">
                        {item.value}
                      </p>
                      <div className="mx-auto my-3 h-px w-5 bg-accent/50" aria-hidden="true" />
                      <p className="text-[11px] md:text-[12px] leading-[1.6] text-white/65 uppercase tracking-[0.14em]">
                        {item.label}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ═══════════════════════════════════════════════════════════
            3) WOFÜR AURELIA STEHT — editorialer Text-Block auf Cream
            ─────────────────────────────────────────────────────────── */}
        <section className="surface-cream section-y-base">
          <div className="container-premium">
            <Reveal>
              <div className="max-w-3xl">
                <p className="eyebrow mb-5">Haltung</p>
                <h2 className="font-heading font-medium text-primary leading-[1.15] tracking-[-0.01em] text-balance text-[1.7rem] md:text-[2.25rem]">
                  {a.profile.headline}
                </h2>
                <div className="mt-6 space-y-5 text-[0.96rem] md:text-[1rem] leading-[1.9] text-muted-foreground">
                  <p>{a.profile.body1}</p>
                  <p>{a.profile.body2}</p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════
            4) TEAM — editorialer Split (Text + Bild)
            ─────────────────────────────────────────────────────────── */}
        {a.team && (
          <section className="surface-paper section-y-base">
            <div className="container-premium">
              <div className="grid gap-12 md:gap-16 lg:gap-20 md:grid-cols-12 items-center">
                <Reveal>
                  <div className="md:col-span-6">
                    <p className="eyebrow mb-5">Team</p>
                    <h2 className="font-heading font-medium text-primary leading-[1.15] tracking-[-0.01em] text-balance text-[1.7rem] md:text-[2.25rem]">
                      {a.team.headline}
                    </h2>
                    <p className="mt-6 text-[0.96rem] md:text-[1rem] leading-[1.9] text-muted-foreground">
                      {a.team.body}
                    </p>
                  </div>
                </Reveal>
                <Reveal delay={0.1}>
                  <div className="md:col-span-6">
                    <div className="overflow-hidden">
                      <OptimizedImg
                        src={editorial.cooperationMeeting}
                        alt={a.team.imageAlt}
                        className="block w-full h-auto object-cover"
                        style={{ aspectRatio: "4 / 3" }}
                      />
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>
          </section>
        )}

        {/* ═══════════════════════════════════════════════════════════
            5) VISION & MISSION — Navy-Editorial mit zwei EditorialPoints
            ─────────────────────────────────────────────────────────── */}
        {a.visionMission && (
          <section className="surface-ink section-y-base">
            <div className="container-premium">
              <div className="grid gap-y-12 gap-x-16 md:grid-cols-2 max-w-5xl mx-auto">
                <Reveal>
                  <EditorialPoint
                    index={0}
                    title={a.visionMission.visionTitle}
                    text={a.visionMission.visionText}
                    tone="dark"
                    label="Vision"
                  />
                </Reveal>
                <Reveal delay={0.1}>
                  <EditorialPoint
                    index={1}
                    title={a.visionMission.missionTitle}
                    text={a.visionMission.missionText}
                    tone="dark"
                    label="Mission"
                  />
                </Reveal>
              </div>
            </div>
          </section>
        )}

        {/* ═══════════════════════════════════════════════════════════
            6) WERTE — EditorialPoint-Liste auf Stone
            ─────────────────────────────────────────────────────────── */}
        {a.values && (
          <section className="bg-gradient-stone-cream section-y-base">
            <div className="container-premium">
              <SectionHeader
                eyebrow="Werte"
                title={a.values.headline}
              />
              <div className="grid gap-y-10 gap-x-12 md:grid-cols-2 max-w-4xl mx-auto">
                {a.values.items.map((item, idx) => (
                  <Reveal key={idx} delay={idx * 0.05}>
                    <EditorialPoint
                      index={idx}
                      title={item.title}
                      text={item.text}
                    />
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ═══════════════════════════════════════════════════════════
            7) SITUATIONEN — editorialer Text-Block auf Cream
            ─────────────────────────────────────────────────────────── */}
        <section className="surface-cream section-y-base">
          <div className="container-premium">
            <Reveal>
              <div className="max-w-3xl">
                <p className="eyebrow mb-5">Anlässe</p>
                <h2 className="font-heading font-medium text-primary leading-[1.15] tracking-[-0.01em] text-balance text-[1.7rem] md:text-[2.25rem]">
                  {a.situations.headline}
                </h2>
                <div className="mt-6 space-y-5 text-[0.96rem] md:text-[1rem] leading-[1.9] text-muted-foreground">
                  <p>{a.situations.body1}</p>
                  <p>{a.situations.body2}</p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════
            8) FALL-TYPOLOGIEN — EditorialPoint-Liste statt Karten
            ─────────────────────────────────────────────────────────── */}
        {a.cases && (
          <section className="surface-paper section-y-base">
            <div className="container-premium">
              <SectionHeader
                eyebrow="Fall-Typologien"
                title={a.cases.headline}
              />
              <div className="grid gap-y-10 gap-x-12 md:grid-cols-3 max-w-5xl mx-auto">
                {a.cases.items.map((item, idx) => (
                  <Reveal key={idx} delay={idx * 0.06}>
                    <EditorialPoint
                      index={idx}
                      title={item.title}
                      text={item.text}
                      label={item.label}
                    />
                  </Reveal>
                ))}
              </div>
              <Reveal delay={0.3}>
                <p className="mt-12 mx-auto max-w-2xl text-center text-[0.85rem] leading-[1.85] text-muted-foreground italic">
                  {a.cases.note}
                </p>
              </Reveal>
            </div>
          </section>
        )}

        {/* ═══════════════════════════════════════════════════════════
            9) PRÜFUNG — editorialer Text-Block auf Stone
            ─────────────────────────────────────────────────────────── */}
        <section className="surface-stone section-y-base">
          <div className="container-premium">
            <Reveal>
              <div className="max-w-3xl">
                <p className="eyebrow mb-5">Methodik</p>
                <h2 className="font-heading font-medium text-primary leading-[1.15] tracking-[-0.01em] text-balance text-[1.7rem] md:text-[2.25rem]">
                  {a.review.headline}
                </h2>
                <div className="mt-6 space-y-5 text-[0.96rem] md:text-[1rem] leading-[1.9] text-muted-foreground">
                  <p>{a.review.body1}</p>
                  <p>{a.review.body2}</p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* 10) FAQ-Hinweis */}
        <FaqHint />

        {/* 11) Final CTA — editorial Split */}
        <FinalCta
          variant="split"
          eyebrow="Nächster Schritt"
          title={a.closing.headline}
          text={a.closing.body}
          buttonLabel={a.closing.cta}
          buttonTo="/kontakt"
        />
      </div>
    </Layout>
  );
};

export default About;
