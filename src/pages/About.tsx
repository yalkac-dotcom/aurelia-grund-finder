import { Link } from "react-router-dom";
import { useEffect } from "react";
import Layout from "@/components/Layout";
import Reveal from "@/components/Reveal";
import { editorial } from "@/assets/editorial";
import { ArrowRight, Check, Eye, Handshake, Scale, ShieldCheck, Sprout } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { Button } from "@/components/ui/button";

const About = () => {
  const { t } = useLanguage();
  const a = t.aboutV2;

  useEffect(() => {
    document.title = a.seoTitle;
    const description = document.querySelector('meta[name="description"]');
    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogDescription = document.querySelector('meta[property="og:description"]');
    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    const twitterDescription = document.querySelector('meta[name="twitter:description"]');
    description?.setAttribute("content", a.seoDescription);
    ogTitle?.setAttribute("content", a.seoTitle);
    ogDescription?.setAttribute("content", a.seoDescription);
    twitterTitle?.setAttribute("content", a.seoTitle);
    twitterDescription?.setAttribute("content", a.seoDescription);
  }, [a.seoDescription, a.seoTitle]);

  const valueIcons = [Handshake, ShieldCheck, Scale, Sprout];

  return (
    <Layout>
      <section id="hero" className="relative flex min-h-[680px] items-center bg-primary md:min-h-[660px]">
        <div className="absolute inset-0 overflow-hidden bg-primary">
          <img
            src={editorial.aboutHeroOffice}
            alt={a.hero.imageAlt}
            loading="eager"
            width={1600}
            height={1008}
            className="h-full w-full object-cover object-[63%_center] md:object-center"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to right, hsl(var(--primary) / 0.94) 0%, hsl(var(--primary) / 0.84) 36%, hsl(var(--primary) / 0.48) 67%, hsl(var(--primary) / 0.22) 100%)",
            }}
          />
        </div>

        <div className="page-frame-hero relative py-24 md:py-28">
          <div className="hero-copy-shell max-w-[680px]">
            <Reveal disableOffset>
              <p className="hero-kicker">{a.hero.kicker}</p>
              <h1 className="hero-title">{a.hero.title}</h1>
              <p className="mt-4 font-heading text-[1.15rem] font-semibold leading-relaxed text-accent md:text-[1.35rem]">{a.hero.subtitle}</p>
              <div className="mt-6 max-w-2xl space-y-4 text-[14px] leading-[1.8] text-primary-foreground/85 md:text-[15px]">
                {a.hero.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-primary py-8 md:py-10" aria-label={a.hero.kicker}>
        <div className="container-premium grid gap-px overflow-hidden rounded-sm bg-primary-foreground/10 sm:grid-cols-2 xl:grid-cols-4">
          {a.trustTiles.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.04}>
              <article className="h-full bg-primary px-6 py-6 md:px-7">
                <p className="font-heading text-[1rem] font-semibold leading-snug text-accent">{item.title}</p>
                <p className="mt-3 text-[12px] leading-[1.7] text-primary-foreground/70">{item.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-background py-20 md:py-28">
        <div className="container-premium">
          <Reveal className="max-w-3xl">
            <div className="mb-5 h-px w-9 bg-accent" aria-hidden="true" />
            <h2 className="font-heading text-[1.7rem] font-semibold leading-tight text-primary md:text-[2.2rem]">{a.standing.headline}</h2>
            <div className="mt-6 space-y-4 text-[15px] leading-[1.85] text-foreground/80 md:text-[16px]">
              {a.standing.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
          </Reveal>
          <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {a.standing.values.map((value, index) => {
              const Icon = valueIcons[index] ?? Eye;
              return (
                <Reveal key={value.title} delay={index * 0.05}>
                  <article className="h-full rounded-sm border border-border/70 bg-card p-6 md:p-7">
                    <div className="icon-tile icon-tile-light mb-5"><Icon size={20} aria-hidden="true" /></div>
                    <h3 className="font-heading text-[1.08rem] font-semibold text-primary">{value.title}</h3>
                    <p className="mt-3 text-[14px] leading-[1.75] text-foreground/75">{value.text}</p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-secondary/45 py-20 md:py-28">
        <div className="container-premium grid items-center gap-10 md:grid-cols-2 md:gap-14 lg:gap-20">
          <Reveal>
            <div className="mb-5 h-px w-9 bg-accent" aria-hidden="true" />
            <h2 className="font-heading text-[1.7rem] font-semibold leading-tight text-primary md:text-[2.2rem]">{a.approach.headline}</h2>
            <div className="mt-6 space-y-4 text-[15px] leading-[1.85] text-foreground/80 md:text-[16px]">
              {a.approach.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="overflow-hidden rounded-sm">
              <img src={editorial.aboutApproachArchitecture} alt={a.approach.imageAlt} loading="lazy" width={1408} height={1056} className="aspect-[4/3] h-auto w-full object-cover" />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-background py-20 md:py-28">
        <div className="container-premium">
          <Reveal className="mx-auto max-w-3xl text-center">
            <div className="mx-auto mb-5 h-px w-9 bg-accent" aria-hidden="true" />
            <h2 className="font-heading text-[1.7rem] font-semibold leading-tight text-primary md:text-[2.2rem]">{a.situations.headline}</h2>
          </Reveal>
          <div className="mx-auto mt-12 grid max-w-5xl gap-x-12 gap-y-3 md:grid-cols-2">
            {a.situations.items.map((item, index) => (
              <Reveal key={item} delay={(index % 2) * 0.04}>
                <div className="flex min-h-16 items-start gap-4 py-3">
                  <span className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-sm bg-highlight text-highlight-foreground"><Check size={16} aria-hidden="true" /></span>
                  <p className="pt-1 text-[14px] leading-[1.7] text-foreground/80 md:text-[15px]">{item}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-highlight py-20 md:py-24">
        <div className="container-premium">
          <Reveal className="mx-auto max-w-3xl text-center">
            <div className="mx-auto mb-5 h-px w-9 bg-accent" aria-hidden="true" />
            <h2 className="font-heading text-[1.7rem] font-semibold leading-tight text-highlight-foreground md:text-[2.2rem]">{a.closing.headline}</h2>
            <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-[1.8] text-highlight-foreground/85 md:text-[16px]">{a.closing.body}</p>
            <div className="mt-9 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
              <Button asChild size="lg" className="rounded-sm border border-accent/70 bg-primary px-7 text-[12px] font-semibold uppercase tracking-[0.1em] text-primary-foreground hover:bg-primary/90">
                <Link to="/kontakt#kontaktformular">{a.closing.primary}<ArrowRight size={14} className="text-accent" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-sm border-highlight-foreground/50 bg-transparent px-7 text-[12px] font-semibold uppercase tracking-[0.1em] text-highlight-foreground hover:bg-highlight-foreground hover:text-highlight">
                <Link to="/kontakt">{a.closing.secondary}</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
};

export default About;
