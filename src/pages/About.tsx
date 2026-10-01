import { Link } from "react-router-dom";
import { useEffect } from "react";
import Layout from "@/components/Layout";
import Reveal from "@/components/Reveal";
import { editorial } from "@/assets/editorial";
import { ArrowRight, Building2, Check, CircleCheck, Eye, Handshake, Network, Scale, ShieldCheck, Sprout, Target, Users } from "lucide-react";
import aboutMenschenAsset from "@/assets/about-menschen-haende.jpeg.asset.json";
import portraitAsset from "@/assets/yasar-alkac-portraet.png.asset.json";
import { getUnserAnsatz } from "@/i18n/aboutUnserAnsatz";
import { useLanguage } from "@/i18n/LanguageContext";
import { Button } from "@/components/ui/button";
import { usePageSeo } from "@/hooks/usePageSeo";
import AiImageDisclosure from "@/components/AiImageDisclosure";
import { aureliaCard } from "@/lib/cardStyle";
import { aureliaInfoCard, aureliaEditorialFrame, aureliaGoldRule } from "@/lib/cardStyle";
import InfoCorner from "@/components/sections/InfoCorner";
import { MapPin } from "lucide-react";
import AureliaKompakt from "@/components/sections/AureliaKompakt";

// Einheitliches Spacing- & Typografie-System für "Über uns"
const SEC = "section-premium !py-10 md:!py-14 lg:!py-16";
const RULE = "mb-3 h-px w-9 bg-accent";
const H2 = "font-heading text-[1.4rem] font-semibold leading-[1.2] text-primary md:text-[1.75rem]";
const H3 = "font-heading text-[0.95rem] font-semibold leading-snug text-primary";
const BODY = "text-[14px] leading-[1.7] text-foreground/80 md:text-[15px]";
const SMALL = "text-[13px] leading-[1.6] text-foreground/75";

const About = () => {
  const { t, language } = useLanguage();
  const a = t.aboutV2;

  usePageSeo(a.seoTitle, a.seoDescription);

  const valueIcons = [Handshake, ShieldCheck, Scale, Sprout];
  const ansatz = getUnserAnsatz(language);
  const ansatzIcons = [Building2, Users, CircleCheck, Network];

  return (
    <Layout>
      <section id="hero" className="relative flex min-h-[535px] items-center bg-primary md:h-[87vh] md:min-h-[615px]">
        <div className="absolute inset-0 overflow-hidden bg-primary">
          <img
            src={editorial.aboutHeroOffice}
            alt={a.hero.imageAlt}
            loading="eager"
            width={1600}
            height={1008}
            className="img-tone hero-media h-full w-full object-cover object-[66%_center] md:object-center"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to right, hsl(var(--primary) / 0.88) 0%, hsl(var(--primary) / 0.78) 35%, hsl(var(--primary) / 0.45) 65%, hsl(var(--primary) / 0.30) 100%)",
            }}
          />
          <AiImageDisclosure type="illustrative" />
        </div>

        <div className="page-frame-hero relative py-20 md:pb-0 md:pt-20">
          <div className="hero-copy-shell max-w-2xl">
            <Reveal disableOffset>
              <p className="hero-kicker">{a.hero.kicker}</p>
              <h1 className="hero-title !text-accent">{a.hero.title}</h1>
              {a.hero.subtitle.trim() && <p className="mt-4 font-heading text-[1.05rem] font-semibold leading-relaxed text-accent md:text-[1.2rem]">{a.hero.subtitle}</p>}
              <div className="mt-5 max-w-xl space-y-3 text-[13px] leading-[1.7] text-primary-foreground/85 md:text-[14px]">
                {a.hero.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <div className="page-shell">
        <section className={`${SEC} bg-gradient-warm`} aria-label={a.hero.kicker}>
          <div className="container-premium">
            <div className="grid auto-rows-fr gap-3 sm:grid-cols-2 lg:grid-cols-3 md:gap-4">
              {a.trustTiles.map((item, index) => (
                <Reveal key={item.title} delay={index * 0.04}>
                  <article className="relative h-full overflow-hidden rounded-sm bg-primary px-5 py-5 shadow-sm md:px-6 md:py-6">
                    <div className="absolute inset-x-0 top-0 h-px bg-accent/70" aria-hidden="true" />
                    <p className="font-heading text-[0.95rem] font-semibold leading-snug text-accent">{item.title}</p>
                    <p className="mt-2 text-[12px] leading-[1.65] text-primary-foreground/80">{item.text}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {a.markets && (
          <section className={`${SEC} bg-background !pb-0`}>
            <div className="container-premium">
              <Reveal className={`max-w-3xl ${aureliaInfoCard} md:!px-10 md:!py-9`}>
                <InfoCorner />
                <div className="flex items-center gap-3">
                  <MapPin size={20} strokeWidth={1.6} className="shrink-0 text-accent" aria-hidden="true" />
                  <h2 className={H2}>{a.markets.title}</h2>
                </div>
                <div className={`mt-4 ${aureliaGoldRule}`} aria-hidden="true" />
                <p className={`mt-4 ${BODY}`}>{a.markets.text}</p>
              </Reveal>
            </div>
          </section>
        )}

        <section className={`${SEC} bg-background`}>
          <div className="container-premium">
          <Reveal className={`max-w-4xl ${aureliaEditorialFrame}`}>
            <h2 className={`${H2} md:!text-[2rem]`}>{a.standing.headline}</h2>
            <div className={`mt-4 ${aureliaGoldRule}`} aria-hidden="true" />
            <div className={`mt-6 max-w-[46rem] space-y-4 ${BODY}`}>
              {a.standing.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
          </Reveal>
          <div className="mt-8 grid gap-3 md:mt-10 md:grid-cols-2 md:gap-4 xl:grid-cols-3">
            {a.standing.values.map((value, index) => {
              const Icon = valueIcons[index] ?? Eye;
              return (
                <Reveal key={value.title} delay={index * 0.05}>
                  <article className={`h-full p-5 ${aureliaCard}`}>
                    <div className="flex items-center gap-2.5">
                      <Icon size={18} strokeWidth={1.6} className="shrink-0 text-accent" aria-hidden="true" />
                      <h3 className={H3}>{value.title}</h3>
                    </div>
                    <p className={`mt-2 ${SMALL}`}>{value.text}</p>
                  </article>
                </Reveal>
              );
            })}
          </div>
          </div>
        </section>

        <section className={`${SEC} bg-secondary/45`}>
          <div className="container-premium">
          <Reveal className="max-w-[46rem] border-l-2 border-accent pl-5 md:pl-7">
            <h2 className={H2}>{a.approach.headline}</h2>
            <div className={`mt-3 space-y-2.5 ${BODY}`}>
              {a.approach.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
          </Reveal>
          </div>
        </section>

        <section className="bg-background py-8 md:py-10 lg:py-12" aria-labelledby="unser-ansatz-title">
          <div className="container-premium">
          <div className={`mx-auto grid max-w-[980px] items-center gap-6 md:gap-8 lg:gap-10 ${language === "de" ? "md:grid-cols-[minmax(0,7fr)_minmax(0,5fr)]" : "md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]"}`}>
            <Reveal className={language === "de" ? "order-2" : undefined}>
              {language === "de" ? (
                <div className="relative md:pl-7 lg:pl-9">
                  <span aria-hidden="true" className="absolute left-0 top-1/2 hidden h-14 w-px -translate-y-1/2 bg-accent/25 md:block" />
                  <figure className="mx-auto w-full max-w-[21rem]">
                    <div className="w-full max-w-[260px]">
                      <div className="rounded-[3px] border border-accent/30 bg-secondary/40 p-1.5">
                        <img src={portraitAsset.url} alt="Yasar Alkac, Geschäftsführung Aurelia Grundbesitz GmbH" loading="lazy" width={1086} height={1448} className="block h-auto w-full object-contain" />
                      </div>
                    </div>
                    <figcaption className="mt-2 px-1.5">
                      <p className="font-heading text-[1rem] font-semibold leading-snug text-primary">Yasar Alkac</p>
                      <p className="mt-0.5 text-[9.5px] font-semibold uppercase tracking-[0.08em] text-highlight">Geschäftsführung · Aurelia Grundbesitz GmbH</p>
                      <p className="mt-2 text-[12.5px] leading-[1.65] text-foreground/70">„Seit rund 30 Jahren unternehmerisch tätig, verfügt Yasar Alkac über umfassende Erfahrung in der Entwicklung und Führung von Unternehmen. Bei Aurelia verantwortet er insbesondere die Prüfung ausgewählter Immobilien und die wesentlichen Ankaufsentscheidungen.“</p>
                    </figcaption>
                  </figure>
                </div>
              ) : (
              <figure className="relative mx-auto w-full max-w-[520px] md:max-w-none">
                <div className="overflow-hidden rounded-[3px]">
                  <img src={aboutMenschenAsset.url} alt={ansatz.imageAlt} loading="lazy" className="img-tone aspect-[16/9] w-full object-cover md:aspect-[5/4]" />
                </div>
                <span aria-hidden="true" className="absolute -bottom-3 left-4 h-px w-16 bg-accent md:-bottom-4" />
              </figure>
              )}
            </Reveal>
            <Reveal delay={0.08} className={language === "de" ? "order-1" : undefined}>
              <div className={language === "de" ? "" : "md:border-l md:border-accent/30 md:pl-8 lg:pl-10"}>
                <div className={RULE} aria-hidden="true" />
                <h2 id="unser-ansatz-title" className="font-heading text-[1.3rem] font-semibold leading-[1.2] text-primary md:text-[1.55rem]">{ansatz.headline}</h2>
                <div className="mt-3 max-w-[34rem] space-y-2 text-[14px] leading-[1.65] text-foreground/80">
                  {ansatz.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                </div>
                <div className="mt-5 grid auto-rows-fr gap-2 sm:grid-cols-2">
                  {ansatz.cards.map((card, index) => {
                    const Icon = ansatzIcons[index] ?? Target;
                    return (
                      <article key={card.title} className="h-full rounded-[3px] border border-accent/20 bg-[hsl(var(--secondary)/0.35)] px-3.5 py-2.5">
                        <div className="flex items-center gap-2">
                          <Icon size={13} strokeWidth={1.5} className="shrink-0 text-accent" aria-hidden="true" />
                          <h3 className="font-heading text-[0.9rem] font-semibold leading-snug text-primary">{card.title}</h3>
                        </div>
                        <p className="mt-1 text-[12.5px] leading-[1.55] text-foreground/65">{card.text}</p>
                      </article>
                    );
                  })}
                </div>
              </div>
            </Reveal>
          </div>
          </div>
        </section>

        <section className={`${SEC} bg-background !pt-0`}>
          <div className="container-premium">
          <Reveal className="mx-auto max-w-3xl text-center">
            <div className={`mx-auto ${RULE}`} aria-hidden="true" />
            <h2 className={H2}>{a.situations.headline}</h2>
          </Reveal>
          <div className="mx-auto mt-6 grid max-w-5xl gap-x-10 gap-y-1 md:mt-8 md:grid-cols-2">
            {a.situations.items.map((item, index) => (
              <Reveal key={item} delay={(index % 2) * 0.04}>
                <div className="flex items-start gap-3 py-2">
                  <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-sm bg-highlight text-highlight-foreground"><Check size={13} aria-hidden="true" /></span>
                  <p className={BODY}>{item}</p>
                </div>
              </Reveal>
            ))}
          </div>
          </div>
        </section>

        <section className={`${SEC} bg-highlight`}>
          <div className="container-premium">
          <Reveal className="mx-auto max-w-3xl text-center">
            <div className={`mx-auto ${RULE}`} aria-hidden="true" />
            <h2 className={`${H2} !text-highlight-foreground`}>{a.closing.headline}</h2>
            <p className="mx-auto mt-3 max-w-2xl text-[14px] leading-[1.7] text-highlight-foreground/85 md:text-[15px]">{a.closing.body}</p>
            <div className="mt-6 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
              <Button asChild size="lg" className="rounded-sm border border-accent/70 bg-primary px-7 text-[12px] font-semibold uppercase tracking-[0.1em] text-primary-foreground hover:bg-primary/90">
                <Link to="/immobilie-anbieten">{a.closing.primary}<ArrowRight size={14} className="text-accent" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-sm border-highlight-foreground/50 bg-transparent px-7 text-[12px] font-semibold uppercase tracking-[0.1em] text-highlight-foreground hover:bg-highlight-foreground hover:text-highlight">
                <Link to={"/fuer-kaeufer#kaufinteresse"}>{a.closing.secondary}</Link>
              </Button>
            </div>
          </Reveal>
          </div>
        </section>
        {language === "de" && <AureliaKompakt />}
      </div>
    </Layout>
  );
};

export default About;
