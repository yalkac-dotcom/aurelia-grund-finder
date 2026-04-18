import { Link } from "react-router-dom";
import { useEffect } from "react";
import Layout from "@/components/Layout";
import Reveal from "@/components/Reveal";
import OptimizedImg from "@/components/OptimizedImg";
import HeroScrollIndicator from "@/components/HeroScrollIndicator";
import { heroSets } from "@/assets/heroImages";
import { editorial } from "@/assets/editorial";
import { ArrowRight, Phone } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const About = () => {
  const { t } = useLanguage();
  const a = t.aboutV2;

  useEffect(() => {
    document.title = `${a.hero.title} – Aurelia Grundbesitz GmbH`;
  }, [a.hero.title]);

  // Editorial text section: optional thin image strip above headline, thin gold rule, restrained typography
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

  return (
    <Layout>
      {/* HERO – ruhig, ohne CTA-Stack */}
      <section
        id="hero"
        className="relative flex h-[58svh] min-h-[400px] items-center md:h-[64vh] md:min-h-[460px] bg-primary"
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
        {/* 1 – Unternehmensprofil */}
        <TextBlock
          headline={a.companyProfile.headline}
          tone="light"
          image={editorial.facadeDetail}
          imageAlt=""
        >
          <p>{a.companyProfile.body}</p>
        </TextBlock>

        {/* 2 – Wofür Aurelia steht */}
        <TextBlock
          headline={a.profile.headline}
          tone="muted"
          image={editorial.interiorCalm}
          imageAlt=""
        >
          <p>{a.profile.body1}</p>
          <p>{a.profile.body2}</p>
        </TextBlock>

        {/* 3 – In welchen Situationen wir tätig werden */}
        <TextBlock
          headline={a.situations.headline}
          tone="light"
          image={editorial.notaryQuiet}
          imageAlt=""
        >
          <p>{a.situations.body1}</p>
          <p>{a.situations.body2}</p>
        </TextBlock>

        {/* 4 – Wie wir Fälle prüfen */}
        <TextBlock
          headline={a.review.headline}
          tone="muted"
          image={editorial.cooperationMeeting}
          imageAlt=""
        >
          <p>{a.review.body1}</p>
          <p>{a.review.body2}</p>
        </TextBlock>

        {/* 5 – Abschluss-CTA (Steel Blue, ruhig) mit goldener Trennlinie zum Navy-Footer */}
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
          {/* Goldene Trennlinie zum Navy-Footer */}
          <div className="h-px w-full bg-accent" aria-hidden="true" />
        </section>
      </div>
    </Layout>
  );
};

export default About;
