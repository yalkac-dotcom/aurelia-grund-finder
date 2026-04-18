import { Link } from "react-router-dom";
import { useEffect } from "react";
import Layout from "@/components/Layout";
import Reveal from "@/components/Reveal";
import OptimizedImg from "@/components/OptimizedImg";
import HeroScrollIndicator from "@/components/HeroScrollIndicator";
import { heroSets } from "@/assets/heroImages";
import { ArrowRight, Phone } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const About = () => {
  const { t } = useLanguage();
  const a = t.aboutV2;

  useEffect(() => {
    document.title = `${a.hero.title} – Aurelia Grundbesitz GmbH`;
  }, [a.hero.title]);

  // Reusable section block: alternating background, headline + subheadline + body + CTA
  const Block = ({
    headline,
    subheadline,
    body,
    cta,
    ctaTo = "/kontakt",
    tone = "light",
  }: {
    headline: string;
    subheadline: string;
    body: string;
    cta: string;
    ctaTo?: string;
    tone?: "light" | "muted";
  }) => (
    <section
      className={`py-16 md:py-20 ${tone === "muted" ? "bg-secondary/40" : "bg-background"}`}
    >
      <div className="container-premium">
        <Reveal>
          <div className="max-w-3xl mx-auto text-center">
            <div className="mx-auto mb-3 h-[2px] w-10 bg-accent" aria-hidden="true" />
            <h2 className="font-heading font-bold text-primary text-[1.625rem] md:text-[2.25rem] leading-[1.2] mb-3">
              {headline}
            </h2>
            <p
              className="text-[15px] md:text-[16px] uppercase tracking-[0.08em] mb-6"
              style={{ color: "hsl(var(--accent))", fontWeight: 600 }}
            >
              {subheadline}
            </p>
            <p className="text-[15px] md:text-[16px] leading-[1.75] text-foreground/85 mb-7">
              {body}
            </p>
            <Link
              to={ctaTo}
              className="inline-flex items-center gap-2 rounded-sm bg-primary px-7 py-3.5 text-[13px] font-semibold uppercase tracking-[0.1em] text-white transition-colors duration-300 hover:bg-primary/90"
            >
              {cta}
              <ArrowRight size={13} className="text-accent" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );

  return (
    <Layout>
      {/* HERO */}
      <section
        id="hero"
        className="relative flex h-[62svh] min-h-[420px] items-center md:h-[70vh] md:min-h-[480px] bg-primary"
      >
        <div className="absolute inset-0 overflow-hidden bg-primary">
          <OptimizedImg
            src={heroSets.about.src}
            srcSet={heroSets.about.srcSet}
            sizes={heroSets.about.sizes}
            alt={a.hero.title}
            className="hero-media h-full w-full object-cover object-center"
            priority
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to right, hsl(var(--primary) / 0.88) 0%, hsl(var(--primary) / 0.78) 35%, hsl(var(--primary) / 0.45) 65%, hsl(var(--primary) / 0.30) 100%)",
            }}
          />
        </div>

        <div className="page-frame-hero relative pt-16 pb-10 md:pt-20 md:pb-14">
          <div className="hero-copy-shell">
            <Reveal>
              <p className="hero-kicker">{a.hero.kicker}</p>
              <h1 className="hero-title">{a.hero.title}</h1>
              <p className="hero-description">{a.hero.subtitle}</p>
              <p className="mt-5 max-w-2xl text-[15px] md:text-[16px] leading-[1.7] text-white/85">
                {a.hero.body}
              </p>
              <div className="mt-7">
                <Link
                  to="/kontakt"
                  className="inline-flex items-center gap-2 rounded-sm bg-white px-7 py-3.5 text-[13px] font-semibold uppercase tracking-[0.1em] text-primary transition-colors duration-300 hover:bg-white/95"
                >
                  {a.hero.cta}
                  <ArrowRight size={13} className="text-accent" />
                </Link>
              </div>
            </Reveal>
          </div>
          <HeroScrollIndicator />
        </div>
      </section>

      <div className="page-shell">
        {/* SECTION 2 – Intro */}
        <Block
          headline={a.intro.headline}
          subheadline={a.intro.subheadline}
          body={a.intro.body}
          cta={a.intro.cta}
          tone="light"
        />

        {/* SECTION 3 – Unternehmensprofil */}
        <Block
          headline={a.profile.headline}
          subheadline={a.profile.subheadline}
          body={a.profile.body}
          cta={a.profile.cta}
          ctaTo="/so-arbeiten-wir"
          tone="muted"
        />

        {/* SECTION 4 – Prinzipien */}
        <Block
          headline={a.principles.headline}
          subheadline={a.principles.subheadline}
          body={a.principles.body}
          cta={a.principles.cta}
          tone="light"
        />

        {/* SECTION 5 – Einsatzlagen */}
        <Block
          headline={a.situations.headline}
          subheadline={a.situations.subheadline}
          body={a.situations.body}
          cta={a.situations.cta}
          ctaTo="/fuer-eigentumer-in-not"
          tone="muted"
        />

        {/* SECTION 6 – Prüfprozess */}
        <Block
          headline={a.review.headline}
          subheadline={a.review.subheadline}
          body={a.review.body}
          cta={a.review.cta}
          tone="light"
        />

        {/* SECTION 7 – Ablauf */}
        <Block
          headline={a.process.headline}
          subheadline={a.process.subheadline}
          body={a.process.body}
          cta={a.process.cta}
          tone="muted"
        />

        {/* SECTION 8 – Vertrauensblock */}
        <Block
          headline={a.trust.headline}
          subheadline={a.trust.subheadline}
          body={a.trust.body}
          cta={a.trust.cta}
          tone="light"
        />

        {/* SECTION 9 – Schluss-CTA (Navy) */}
        <section style={{ backgroundColor: "hsl(var(--primary))" }} className="px-0">
          <div className="container-premium" style={{ paddingTop: 64, paddingBottom: 64 }}>
            <Reveal>
              <div className="max-w-2xl mx-auto text-center">
                <div className="mx-auto mb-3 h-[2px] w-10 bg-accent" aria-hidden="true" />
                <h2 className="mb-3 font-heading font-bold text-white text-[1.625rem] md:text-[2.25rem] leading-[1.2]">
                  {a.closing.headline}
                </h2>
                <p
                  className="mb-6 text-[15px] md:text-[16px] uppercase tracking-[0.08em]"
                  style={{ color: "hsl(var(--accent))", fontWeight: 600 }}
                >
                  {a.closing.subheadline}
                </p>
                <p className="mb-8 text-[15px] md:text-[16px] leading-[1.75] text-white/85">
                  {a.closing.body}
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
                  <Link
                    to="/kontakt"
                    className="inline-flex items-center gap-2 rounded-sm bg-white px-7 py-3.5 text-[13px] font-semibold uppercase tracking-[0.1em] text-primary transition-colors duration-300 hover:bg-white/95"
                  >
                    {a.closing.cta}
                    <ArrowRight size={13} className="text-accent" />
                  </Link>
                  <a
                    href="tel:+4921169583033"
                    className="inline-flex items-center gap-2 rounded-sm px-7 py-3.5 text-[13px] font-semibold uppercase tracking-[0.1em] text-white transition-colors duration-300"
                    style={{ backgroundColor: "hsl(var(--highlight))" }}
                  >
                    <Phone size={14} strokeWidth={1.75} />
                    +49 211 69583033
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default About;
