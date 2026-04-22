import { Link } from "react-router-dom";
import { useEffect } from "react";
import Layout from "@/components/Layout";
import Reveal from "@/components/Reveal";
import { editorial } from "@/assets/editorial";
import { ArrowRight, Phone, Compass, Target } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const About = () => {
  const { t } = useLanguage();
  const a = t.aboutV2;

  useEffect(() => {
    document.title = `${a.hero.title} – Aurelia Grundbesitz GmbH`;
  }, [a.hero.title]);

  // Editorial text section (used for the existing narrative blocks)
  const TextBlock = ({
    headline,
    children,
    tone = "light",
    image,
    imageAlt,
  }: {
    headline: string;
    children: React.ReactNode;
    tone?: "light" | "muted";
    image?: string;
    imageAlt?: string;
  }) => (
    <section className={`py-20 md:py-28 ${tone === "muted" ? "bg-secondary/40" : "bg-background"}`}>
      <div className="container-premium">
        <Reveal>
          <div className="max-w-2xl mx-auto">
            {image && (
              <div className="mb-8 overflow-hidden rounded-sm border border-border/40">
                <img
                  src={image}
                  alt={imageAlt ?? ""}
                  loading="lazy"
                  className="block w-full h-auto aspect-[21/9] object-cover"
                />
              </div>
            )}
            <div className="mb-4 h-px w-8 bg-accent" aria-hidden="true" />
            <h2 className="mb-6 font-heading font-semibold text-primary text-[1.4rem] md:text-[1.875rem] leading-[1.25] tracking-tight">
              {headline}
            </h2>
            <div className="space-y-5 text-[15px] md:text-[16px] leading-[1.85] text-foreground/80">
              {children}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );

  // Icons removed for editorial calm — values are purely typographic now.

  // Visual motifs for the 3 typology cards (project-internal, license-clean editorial photography)
  const caseImages = [
    { src: editorial.notaryQuiet, alt: a.cases?.items?.[0]?.title ?? "" },
    { src: editorial.caseReviewDesk, alt: a.cases?.items?.[1]?.title ?? "" },
    { src: editorial.townhouseClassical, alt: a.cases?.items?.[2]?.title ?? "" },
  ];

  return (
    <Layout>
      {/* HERO – ruhig, ohne CTA-Stack */}
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
        </div>
      </section>

      {/* SEKTION 1 – Qualitative Kennzahlen-Leiste (Navy, Gold-Akzente) */}
      {a.metricsBar && (
        <section className="bg-primary py-8 md:py-10 border-t border-accent/20">
          <div className="container-premium">
            <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/10">
              {a.metricsBar.items.map((item, idx) => (
                <Reveal key={idx} delay={idx * 0.05}>
                  <div className="text-center px-4 py-6 md:py-2">
                    <p className="font-heading font-medium text-accent text-[0.95rem] md:text-[1.05rem] leading-tight tracking-wide">
                      {item.value}
                    </p>
                    <div className="mx-auto my-3 h-px w-5 bg-accent/50" aria-hidden="true" />
                    <p className="text-[11px] md:text-[12px] leading-[1.6] text-white/65 uppercase tracking-[0.12em]">
                      {item.label}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <div className="page-shell">
        {/* Bestehend – Warum Aurelia bei festgefahrenen Lagen relevant ist */}
        <TextBlock
          headline={a.companyProfile.headline}
          tone="light"
          image={editorial.settledHome}
          imageAlt="Gepflegtes klassisches Stadthaus im warmen Abendlicht – sinnbildlich für eine geordnete, getragene Lösung nach festgefahrener Lage"
        >
          <p>{a.companyProfile.body}</p>
        </TextBlock>

        {/* Bestehend – Wofür Aurelia steht */}
        <TextBlock headline={a.profile.headline} tone="muted">
          <p>{a.profile.body1}</p>
          <p>{a.profile.body2}</p>
        </TextBlock>

        {/* SEKTION 2 – Das Team hinter Aurelia (zweispaltig) */}
        {a.team && (
          <section className="py-20 md:py-28 bg-background">
            <div className="container-premium">
              <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-center">
                <Reveal>
                  <div>
                    <div className="mb-4 h-px w-8 bg-accent" aria-hidden="true" />
                    <h2 className="mb-6 font-heading font-semibold text-primary text-[1.4rem] md:text-[1.875rem] leading-[1.25] tracking-tight">
                      {a.team.headline}
                    </h2>
                    <p className="text-[15px] md:text-[16px] leading-[1.85] text-foreground/80">
                      {a.team.body}
                    </p>
                  </div>
                </Reveal>
                <Reveal delay={0.1}>
                  <div className="overflow-hidden rounded-sm border border-border/40">
                    <img
                      src={editorial.cooperationMeeting}
                      alt={a.team.imageAlt}
                      loading="lazy"
                      className="block w-full h-auto aspect-[4/3] object-cover"
                    />
                  </div>
                </Reveal>
              </div>
            </div>
          </section>
        )}

        {/* SEKTION 3 – Vision & Mission (typografisch ruhig, dezente Mini-Icons auf Navy) */}
        {a.visionMission && (
          <section className="py-20 md:py-28 bg-primary">
            <div className="container-premium">
              <div className="grid md:grid-cols-2 gap-10 md:gap-16 max-w-5xl mx-auto">
                {[
                  { icon: Compass, title: a.visionMission.visionTitle, text: a.visionMission.visionText },
                  { icon: Target, title: a.visionMission.missionTitle, text: a.visionMission.missionText },
                ].map((card, idx) => {
                  const Icon = card.icon;
                  return (
                    <Reveal key={idx} delay={idx * 0.08}>
                      <div className="h-full">
                        <div className="mb-5 flex items-center gap-3">
                          <Icon size={14} strokeWidth={1.5} className="text-accent/80" />
                          <div className="h-px w-8 bg-accent/60" aria-hidden="true" />
                        </div>
                        <h3 className="mb-5 font-heading font-semibold text-accent text-[1.2rem] md:text-[1.35rem] leading-tight">
                          {card.title}
                        </h3>
                        <p className="text-[14px] md:text-[15px] leading-[1.85] text-white/80">
                          {card.text}
                        </p>
                      </div>
                    </Reveal>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        {/* SEKTION 4 – Unsere Werte (rein typografisch, editorial) */}
        {a.values && (
          <section className="py-20 md:py-28 bg-secondary/40">
            <div className="container-premium">
              <Reveal>
                <div className="text-center mb-14 md:mb-16">
                  <div className="mx-auto mb-4 h-px w-8 bg-accent" aria-hidden="true" />
                  <h2 className="font-heading font-semibold text-primary text-[1.4rem] md:text-[1.875rem] leading-[1.25] tracking-tight">
                    {a.values.headline}
                  </h2>
                </div>
              </Reveal>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 md:gap-x-16 gap-y-10 md:gap-y-12 max-w-4xl mx-auto">
                {a.values.items.map((item, idx) => (
                  <Reveal key={idx} delay={idx * 0.05}>
                    <div className="border-l border-accent/40 pl-6">
                      <p className="mb-2 text-[10px] md:text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
                        {String(idx + 1).padStart(2, "0")}
                      </p>
                      <h3 className="mb-3 font-heading font-semibold text-primary text-[1.05rem] md:text-[1.2rem] leading-tight">
                        {item.title}
                      </h3>
                      <p className="text-[14px] md:text-[15px] leading-[1.8] text-foreground/75">
                        {item.text}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Bestehend – In welchen Situationen wir tätig werden */}
        <TextBlock headline={a.situations.headline} tone="light">
          <p>{a.situations.body1}</p>
          <p>{a.situations.body2}</p>
        </TextBlock>

        {/* SEKTION 5 – Fall-Typologien (3 Karten mit Bild) */}
        {a.cases && (
          <section className="py-20 md:py-28 bg-secondary/40">
            <div className="container-premium">
              <Reveal>
                <div className="text-center mb-12 md:mb-14 max-w-2xl mx-auto">
                  <div className="mx-auto mb-4 h-px w-8 bg-accent" aria-hidden="true" />
                  <h2 className="font-heading font-semibold text-primary text-[1.4rem] md:text-[1.875rem] leading-[1.25] tracking-tight">
                    {a.cases.headline}
                  </h2>
                </div>
              </Reveal>
              <div className="grid md:grid-cols-3 gap-6 md:gap-7 max-w-6xl mx-auto">
                {a.cases.items.map((item, idx) => {
                  const img = caseImages[idx] ?? caseImages[0];
                  return (
                    <Reveal key={idx} delay={idx * 0.06}>
                      <article className="h-full bg-background border border-border/40 rounded-sm overflow-hidden flex flex-col">
                        <div className="overflow-hidden">
                          <img
                            src={img.src}
                            alt={img.alt}
                            loading="lazy"
                            className="block w-full h-auto aspect-[4/3] object-cover"
                          />
                        </div>
                        <div className="p-6 md:p-7 flex flex-col flex-1">
                          <span
                            className="self-start mb-4 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] rounded-sm"
                            style={{
                              backgroundColor: "hsl(var(--highlight) / 0.9)",
                              color: "hsl(var(--primary-foreground))",
                            }}
                          >
                            {item.label}
                          </span>
                          <h3 className="mb-3 font-heading font-semibold text-primary text-[1.05rem] md:text-[1.15rem] leading-tight">
                            {item.title}
                          </h3>
                          <p className="text-[13px] md:text-[14px] leading-[1.75] text-foreground/80">
                            {item.text}
                          </p>
                        </div>
                      </article>
                    </Reveal>
                  );
                })}
              </div>
              <p className="mt-10 text-center text-[12px] md:text-[13px] italic text-muted-foreground">
                {a.cases.note}
              </p>
            </div>
          </section>
        )}

        {/* Bestehend – Wie wir Fälle prüfen */}
        <TextBlock headline={a.review.headline} tone="light">
          <p>{a.review.body1}</p>
          <p>{a.review.body2}</p>
        </TextBlock>

        {/* Abschluss-CTA */}
        <section style={{ backgroundColor: "hsl(var(--highlight))" }} className="px-0">
          <div className="container-premium" style={{ paddingTop: 80, paddingBottom: 80 }}>
            <Reveal>
              <div className="max-w-2xl mx-auto text-center">
                <div className="mx-auto mb-4 h-px w-8 bg-accent" aria-hidden="true" />
                <h2 className="mb-6 font-heading font-semibold text-white text-[1.4rem] md:text-[1.875rem] leading-[1.25] tracking-tight">
                  {a.closing.headline}
                </h2>
                <p className="mb-5 text-[15px] md:text-[16px] leading-[1.8] text-white/90">
                  {a.closing.body}
                </p>
                <p className="mb-9 text-[14px] md:text-[15px] leading-[1.75] text-white/75 italic">
                  {a.closing.note}
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
                  <Link
                    to="/kontakt"
                    className="inline-flex items-center gap-2 rounded-sm bg-white px-7 py-3.5 text-[12px] font-semibold uppercase tracking-[0.12em] text-primary transition-colors duration-300 hover:bg-white/95"
                  >
                    {a.closing.cta}
                    <ArrowRight size={13} className="text-accent" />
                  </Link>
                  <a
                    href="tel:+4921169583033"
                    className="inline-flex items-center gap-2 rounded-sm px-7 py-3.5 text-[12px] font-semibold uppercase tracking-[0.12em] text-white transition-colors duration-300 border border-white/40 hover:border-white/70"
                  >
                    <Phone size={14} strokeWidth={1.75} />
                    +49 211 69583033
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
          <div className="h-px w-full bg-accent" aria-hidden="true" />
        </section>
      </div>
    </Layout>
  );
};

export default About;
