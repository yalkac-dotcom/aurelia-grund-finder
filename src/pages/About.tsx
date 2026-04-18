import { Link } from "react-router-dom";
import { useEffect } from "react";
import Layout from "@/components/Layout";
import Reveal from "@/components/Reveal";
import OptimizedImg from "@/components/OptimizedImg";
import HeroScrollIndicator from "@/components/HeroScrollIndicator";
import { heroSets } from "@/assets/heroImages";
import {
  ArrowRight,
  Home as HomeIcon,
  EyeOff,
  Clock,
  Phone,
} from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const About = () => {
  const { t } = useLanguage();
  const a = t.aboutV2;

  useEffect(() => {
    document.title = `${a.hero.title} – Aurelia Grundbesitz GmbH`;
  }, [a.hero.title]);

  const approachIcons = [HomeIcon, EyeOff, Clock];

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
            </Reveal>
          </div>
          <HeroScrollIndicator />
        </div>
      </section>

      <div className="page-shell">
        {/* INTRO – ruhiger Fließtext direkt nach Hero */}
        <section className="py-16 md:py-20 bg-background">
          <div className="container-premium">
            <Reveal>
              <div className="max-w-3xl mx-auto">
                <p className="text-[16px] md:text-[17px] leading-[1.8] text-foreground/85">
                  {a.hero.body}
                </p>
                <p className="mt-6 text-[16px] md:text-[17px] leading-[1.8] text-foreground/85">
                  {a.intro.body}
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* WOFÜR AURELIA STEHT */}
        <section className="py-16 md:py-20 bg-secondary/40">
          <div className="container-premium">
            <Reveal>
              <div className="max-w-3xl mx-auto">
                <div className="mb-3 h-[2px] w-10 bg-accent" aria-hidden="true" />
                <h2 className="mb-5 font-heading font-bold text-primary text-[1.625rem] md:text-[2.25rem] leading-[1.2]">
                  {a.profile.headline}
                </h2>
                <p className="text-[15px] md:text-[16px] leading-[1.8] text-foreground/85">
                  {a.profile.body1}
                </p>
                <p className="mt-5 text-[15px] md:text-[16px] leading-[1.8] text-foreground/85">
                  {a.profile.body2}
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* UNSER ANSATZ – 3 Kacheln */}
        <section className="py-16 md:py-20 bg-background">
          <div className="container-premium">
            <Reveal>
              <div className="text-center mb-10">
                <div className="mx-auto mb-3 h-[2px] w-10 bg-accent" aria-hidden="true" />
                <h2 className="font-heading font-bold text-primary text-[1.625rem] md:text-[2.25rem] leading-[1.2]">
                  {a.approach.headline}
                </h2>
              </div>
            </Reveal>
            <div className="grid gap-6 md:gap-8 md:grid-cols-3">
              {a.approach.items.map((item, i) => {
                const Icon = approachIcons[i] ?? HomeIcon;
                return (
                  <Reveal key={i} delay={i * 0.08}>
                    <div className="glass-card h-full p-7 md:p-8 text-left">
                      <Icon
                        size={32}
                        strokeWidth={1.5}
                        className="mb-5"
                        style={{ color: "hsl(var(--highlight))" }}
                        aria-hidden="true"
                      />
                      <h3 className="mb-2 text-[1.125rem] md:text-[1.25rem] font-heading font-semibold text-primary">
                        {item.title}
                      </h3>
                      <p className="text-[15px] md:text-[16px] leading-[1.7] text-foreground/80">
                        {item.text}
                      </p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* SITUATIONEN */}
        <section className="py-16 md:py-20 bg-secondary/40">
          <div className="container-premium">
            <Reveal>
              <div className="max-w-3xl mx-auto">
                <div className="mb-3 h-[2px] w-10 bg-accent" aria-hidden="true" />
                <h2 className="mb-5 font-heading font-bold text-primary text-[1.625rem] md:text-[2.25rem] leading-[1.2]">
                  {a.situations.headline}
                </h2>
                <p className="text-[15px] md:text-[16px] leading-[1.8] text-foreground/85">
                  {a.situations.body1}
                </p>
                <p className="mt-5 text-[15px] md:text-[16px] leading-[1.8] text-foreground/85">
                  {a.situations.body2}
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* PRÜFPROZESS */}
        <section className="py-16 md:py-20 bg-background">
          <div className="container-premium">
            <Reveal>
              <div className="max-w-3xl mx-auto">
                <div className="mb-3 h-[2px] w-10 bg-accent" aria-hidden="true" />
                <h2 className="mb-5 font-heading font-bold text-primary text-[1.625rem] md:text-[2.25rem] leading-[1.2]">
                  {a.review.headline}
                </h2>
                <p className="text-[15px] md:text-[16px] leading-[1.8] text-foreground/85">
                  {a.review.body1}
                </p>
                <p className="mt-5 text-[15px] md:text-[16px] leading-[1.8] text-foreground/85">
                  {a.review.body2}
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* PRAXISBEISPIELE */}
        <section className="py-16 md:py-20 bg-secondary/40">
          <div className="container-premium">
            <Reveal>
              <div className="text-center mb-10">
                <div className="mx-auto mb-3 h-[2px] w-10 bg-accent" aria-hidden="true" />
                <h2 className="font-heading font-bold text-primary text-[1.625rem] md:text-[2.25rem] leading-[1.2]">
                  {a.cases.headline}
                </h2>
              </div>
            </Reveal>

            <div className="grid gap-6 md:gap-7 md:grid-cols-3">
              {a.cases.items.map((c, i) => (
                <Reveal key={i} delay={i * 0.08}>
                  <article
                    className="h-full flex flex-col"
                    style={{
                      backgroundColor: "#F7F6F2",
                      border: "1px solid #C9A84C",
                      borderRadius: 8,
                      padding: 32,
                    }}
                  >
                    <p
                      className="mb-3"
                      style={{
                        fontSize: 11,
                        fontWeight: 600,
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        color: "hsl(var(--highlight))",
                      }}
                    >
                      {c.label}
                    </p>
                    <h3 className="mb-3 text-[1.125rem] font-heading font-semibold text-primary leading-[1.25]">
                      {c.title}
                    </h3>
                    <p className="text-[15px] leading-[1.7] text-foreground/80 mb-5">
                      {c.text}
                    </p>
                    <div className="my-1" style={{ borderTop: "1px solid #E0DDD8" }} />
                    <ul className="mt-4 space-y-1.5 text-[14px] leading-[1.65] text-foreground/85">
                      {c.results.map((r, j) => (
                        <li key={j} className="flex items-start gap-2">
                          <span aria-hidden="true" style={{ color: "hsl(var(--accent))" }}>
                            ✓
                          </span>
                          <span>{r}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                </Reveal>
              ))}
            </div>

            <p className="mt-8 text-center text-[12px] text-muted-foreground">
              {a.cases.note}
            </p>
          </div>
        </section>

        {/* SCHLUSS-CTA (Navy) */}
        <section style={{ backgroundColor: "hsl(var(--primary))" }} className="px-0">
          <div className="container-premium" style={{ paddingTop: 64, paddingBottom: 64 }}>
            <Reveal>
              <div className="max-w-2xl mx-auto text-center">
                <div className="mx-auto mb-3 h-[2px] w-10 bg-accent" aria-hidden="true" />
                <h2 className="mb-4 font-heading font-bold text-white text-[1.625rem] md:text-[2.25rem] leading-[1.2]">
                  {a.closing.headline}
                </h2>
                <p className="mb-5 text-[15px] md:text-[16px] leading-[1.75] text-white/85">
                  {a.closing.body}
                </p>
                <p className="mb-8 text-[15px] md:text-[16px] leading-[1.75] text-white/75 italic">
                  {a.closing.note}
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
