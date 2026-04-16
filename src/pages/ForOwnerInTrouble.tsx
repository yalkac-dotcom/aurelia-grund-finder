import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import Reveal from "@/components/Reveal";
import OptimizedImg from "@/components/OptimizedImg";
import HeroScrollIndicator from "@/components/HeroScrollIndicator";
import { heroSets } from "@/assets/heroImages";
import { ArrowRight, AlertTriangle, CheckCircle, Phone, Clock, Shield } from "lucide-react";

const ForOwnerInTrouble = () => {
  return (
    <Layout>
      {/* HERO */}
      <section id="hero" className="relative flex h-[62svh] min-h-[420px] items-center md:h-[70vh] md:min-h-[480px]">
        <div className="absolute inset-0 overflow-hidden">
          <OptimizedImg
            src={heroSets.premium.src}
            srcSet={heroSets.premium.srcSet}
            sizes={heroSets.premium.sizes}
            alt="Immobilie in Schwierigkeiten"
            className="hero-media h-full w-full object-cover object-center"
            priority
          />
          <div className="hero-overlay-base absolute inset-0" />
          <div className="hero-overlay-protect absolute inset-0" />
        </div>

        <div className="page-frame-hero relative pt-16 pb-10 md:pt-20 md:pb-14">
          <div className="hero-copy-shell">
            <Reveal>
              <p className="hero-kicker">Deine Lösung</p>
              <h1 className="hero-title">Deine Immobilie in Schwierigkeiten?</h1>
            </Reveal>
          </div>
          <HeroScrollIndicator />
        </div>
      </section>

      <div className="page-shell">
        {/* INTRO */}
        <section className="section-premium bg-gradient-warm">
          <div className="container-premium text-center">
            <Reveal>
              <div className="mx-auto mb-4 h-[2px] w-10 rounded-full bg-teal-600/50" />
              <h2 className="mb-5 text-[1.4rem] font-heading font-semibold leading-[1.18] text-foreground text-balance md:text-[1.9rem]">
                Wir kaufen Forderungen — unbürokratisch, fair, schnell.
              </h2>
              <p className="mx-auto max-w-2xl text-[0.93rem] leading-[1.85] text-muted-foreground">
                Egal ob Schulden, Erbstreit, Mehrheits-Probleme oder Zwangsversteigerung droht — Aurelia hat die Lösung. Wir kaufen Deine Forderung an der Immobilie und bezahlen Dir einen fairen Wert. Sofort, ohne Makler, ohne Umwege. Du atmet auf. Wir kümmern uns um den Rest.
              </p>
            </Reveal>
          </div>
        </section>

        {/* DAS PROBLEM */}
        <section className="section-premium" style={{ background: "linear-gradient(180deg, hsl(30 12% 97.5%) 0%, hsl(30 10% 96%) 100%)" }}>
          <div className="container-premium">
            <Reveal>
              <div className="text-center mb-12">
                <div className="mx-auto mb-4 h-[2px] w-10 rounded-full bg-red-600/50" />
                <h2 className="mb-3 text-[1.4rem] font-heading font-semibold leading-[1.18] text-foreground text-balance md:text-[1.9rem]">
                  Das erkenne ich wieder
                </h2>
              </div>
            </Reveal>

            <div className="grid gap-6 sm:grid-cols-2">
              {[
                {
                  icon: AlertTriangle,
                  title: "Schulden auf der Immobilie",
                  desc: "Kredite, Rückstände, Steuern — der Berg wird größer und die Nächte kürzer"
                },
                {
                  icon: AlertTriangle,
                  title: "Mehrere Eigentümer",
                  desc: "Ihr einigt Euch nicht, die Situation ist festgefahren, keiner kommt voran"
                },
                {
                  icon: AlertTriangle,
                  title: "Zwangsversteigerung droht",
                  desc: "Die Zeit wird knapp, die Bank macht Druck, die Angst wächst"
                },
                {
                  icon: AlertTriangle,
                  title: "Du brauchst schnell Geld",
                  desc: "Die Immobilie ist eine Last, nicht ein Asset — Du willst sie loswerden"
                }
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <Reveal key={i} delay={i * 0.08}>
                    <div className="glass-card rounded-2xl p-8 flex gap-4">
                      <Icon className="shrink-0 text-red-600" size={28} />
                      <div>
                        <h3 className="mb-2 text-[1rem] font-heading font-semibold text-foreground">{item.title}</h3>
                        <p className="text-[0.88rem] leading-[1.75] text-muted-foreground">{item.desc}</p>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* UNSERE LÖSUNG */}
        <section className="section-premium section-navy text-white">
          <div className="container-premium">
            <Reveal>
              <div className="text-center mb-12">
                <div className="mx-auto mb-4 h-[2px] w-10 rounded-full bg-teal-400/50" />
                <h2 className="mb-5 text-[1.4rem] font-heading font-semibold leading-[1.18] text-white text-balance md:text-[1.9rem]">
                  So helfen wir Dir
                </h2>
                <p className="mx-auto max-w-2xl text-[0.93rem] leading-[1.85] text-white/75">
                  Aurelia kauft Deine Forderung an der Immobilie. Wir bezahlen Dir einen fairen Wert — und Du hast wieder Luft zum Atmen. Schnell, unbürokratisch, ohne Makler.
                </p>
              </div>
            </Reveal>

            <div className="mb-10 grid gap-8 sm:grid-cols-3">
              {[
                {
                  icon: Phone,
                  title: "1. Gespräch",
                  desc: "Du erzählst uns alles. Keine Vorurteile, keine versteckten Fragen, nur Zuhören.",
                  color: "bg-blue-500"
                },
                {
                  icon: Clock,
                  title: "2. Analyse",
                  desc: "Wir überprüfen die Forderung gründlich und fair. Du weißt, was Du bekommst.",
                  color: "bg-purple-500"
                },
                {
                  icon: CheckCircle,
                  title: "3. Zahlung",
                  desc: "Du erhältst den fairen Wert — sofort, auf Dein Konto. Die Sorge ist weg.",
                  color: "bg-green-500"
                }
              ].map((step, i) => {
                const Icon = step.icon;
                return (
                  <Reveal key={i} delay={i * 0.1}>
                    <div className="glass-card-dark rounded-2xl p-8 text-center">
                      <div className={`mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full ${step.color} text-white`}>
                        <Icon size={24} />
                      </div>
                      <h3 className="mb-2 text-[1rem] font-heading font-semibold text-white">{step.title}</h3>
                      <p className="text-[0.88rem] leading-[1.75] text-white/70">{step.desc}</p>
                    </div>
                  </Reveal>
                );
              })}
            </div>

            <Reveal delay={0.15}>
              <div className="glass-card-dark rounded-2xl p-8 md:p-10">
                <h3 className="mb-5 text-[1.1rem] font-heading font-semibold text-white">Was das für Dich bedeutet</h3>
                <div className="space-y-3">
                  {[
                    "✓ Keine Zwangsversteigerung mehr",
                    "✓ Geld in der Hand, nicht nur Hoffnung",
                    "✓ Kein Makler, keine versteckten Gebühren",
                    "✓ Deine Würde bleibt erhalten",
                    "✓ Schneller Prozess — in Tagen, nicht Monaten"
                  ].map((point, i) => (
                    <p key={i} className="text-[0.93rem] leading-[1.75] text-white/80">{point}</p>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* SUCCESS STORIES */}
        <section className="section-premium bg-gradient-warm">
          <div className="container-premium">
            <Reveal>
              <div className="text-center mb-10">
                <div className="mx-auto mb-4 h-[2px] w-10 rounded-full bg-teal-600/50" />
                <h2 className="mb-3 text-[1.4rem] font-heading font-semibold leading-[1.18] text-foreground text-balance md:text-[1.9rem]">
                  Das haben wir schon geschafft
                </h2>
              </div>
            </Reveal>

            <div className="grid gap-6 sm:grid-cols-2">
              {[
                {
                  title: "Familie Schneider",
                  role: "Immobilieneigentümer, Düsseldorf-Benrath",
                  story: "Vier Geschwister, sechs Jahre Streit über das Elternhaus in Benrath. Aurelia hörte alle an und fand eine faire Lösung. Heute haben wir unseren Frieden und alle unsere Anteile erhalten."
                },
                {
                  title: "Peter Abshagen",
                  role: "Handwerksbetriebsleiter, Hilden (Düsseldorf-Umgebung)",
                  story: "Meine Schreinerei geriet in Schwierigkeiten und ich war gezwungen, meine Wohnimmobilie zu belasten. Die Bank drohte mit Zwangsversteigerung. Aurelia verhandelte mit mir wie ein Partner. Heute läuft mein Betrieb wieder."
                },
                {
                  title: "Petra und Frank Lenz",
                  role: "Co-Eigentümer einer Wohnanlage, Neuss (Rhein-Kreis)",
                  story: "Wir zwei verstanden uns nicht, aber die Bank drückte auf Verwertung. Aurelia kaufte beide Forderungen — plötzlich war das Problem weg. Jeder erhielt seinen fairen Wert."
                },
                {
                  title: "Margot Hoffmann",
                  role: "Rentnerin (75), Düsseldorf-Grafenberg",
                  story: "Nach meinem Schlaganfall brauchte ich schnell Geld für Pflegekosten. Aurelia zahlte sofort und fair. Heute habe ich die beste Pflege und kann beruhigt schlafen."
                }
              ].map((story, i) => (
                <Reveal key={i} delay={i * 0.08}>
                  <div className="glass-card rounded-2xl p-8">
                    <h3 className="mb-2 text-[1rem] font-heading font-semibold text-foreground">{story.title}</h3>
                    <p className="mb-3 text-[0.82rem] text-muted-foreground/80">{story.role}</p>
                    <p className="text-[0.88rem] leading-[1.75] text-muted-foreground italic">„{story.story}"</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section-premium" style={{ background: "linear-gradient(180deg, hsl(30 12% 97.5%) 0%, hsl(30 10% 96%) 100%)" }}>
          <div className="container-premium">
            <Reveal>
              <div className="text-center mb-10">
                <div className="mx-auto mb-4 h-[2px] w-10 rounded-full bg-teal-600/50" />
                <h2 className="mb-3 text-[1.4rem] font-heading font-semibold leading-[1.18] text-foreground text-balance md:text-[1.9rem]">
                  Deine Fragen
                </h2>
              </div>
            </Reveal>

            <div className="mx-auto max-w-3xl space-y-6">
              {[
                {
                  q: "Wie viel bekomme ich für meine Forderung?",
                  a: "Das hängt von Deiner Situation ab. Wir bewerten fair und transparent. In einer kostenlosen Beratung sagen wir Dir konkrete Zahlen — ohne Überraschungen."
                },
                {
                  q: "Kann ich die Immobilie behalten?",
                  a: "Das hängt von Deinem Ziel ab. Wenn Du sie behalten willst und wir die Forderung kaufen — ja. Wenn nicht, unterstützen wir Dich beim fairen Verkauf."
                },
                {
                  q: "Wie schnell funktioniert das?",
                  a: "Normalerweise 2-4 Wochen vom Gespräch bis zur Zahlung. Bei Notfällen auch schneller. Wir verstehen, dass Zeit kostbar ist und jeder Tag zählt."
                },
                {
                  q: "Was kostet mich das?",
                  a: "Für Dich kostet nichts. Die Beratung ist kostenlos. Wir verdienen durch den Kauf und die Verwertung der Immobilie. Du bekommst Dein Geld, fertig."
                }
              ].map((item, i) => (
                <Reveal key={i} delay={i * 0.08}>
                  <div className="glass-card rounded-2xl p-8">
                    <h3 className="mb-3 text-[1rem] font-heading font-semibold text-foreground">{item.q}</h3>
                    <p className="text-[0.88rem] leading-[1.75] text-muted-foreground">{item.a}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="relative section-premium text-white overflow-hidden" style={{ background: "linear-gradient(170deg, #0e6e91 0%, #0889b3 40%, #06acd5 100%)" }}>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(255,255,255,0.08)_0%,transparent_70%)] pointer-events-none" />
          <div className="container-premium relative text-center">
            <Reveal>
              <h2 className="mb-6 text-[1.85rem] font-heading font-bold text-white">Bereit für die Lösung?</h2>
              <p className="mx-auto mb-10 max-w-2xl text-[0.95rem] leading-[1.8] text-white/80">
                Die erste Beratung kostet Dich nichts. Wir hören zu, schauen uns alles an, und sagen Dir ehrlich, was möglich ist. Kein Risiko, keine Verpflichtung.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/kontakt"
                  className="inline-flex items-center gap-2.5 rounded-sm bg-white px-8 py-4 text-[0.72rem] font-semibold uppercase tracking-[0.15em] text-teal-800 shadow-lg transition-all duration-300 hover:bg-white/90 hover:shadow-xl"
                >
                  Kostenlose Beratung
                  <ArrowRight size={13} />
                </Link>
                <Link
                  to="/faq"
                  className="inline-flex items-center gap-2.5 rounded-sm bg-white/10 backdrop-blur-sm border border-white/30 px-8 py-4 text-[0.72rem] font-semibold uppercase tracking-[0.15em] text-white transition-all duration-300 hover:bg-white/20"
                >
                  Mehr Fragen & Antworten
                  <ArrowRight size={13} />
                </Link>
              </div>
            </Reveal>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default ForOwnerInTrouble;
