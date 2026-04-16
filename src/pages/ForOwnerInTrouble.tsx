import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import Reveal from "@/components/Reveal";
import OptimizedImg from "@/components/OptimizedImg";
import HeroScrollIndicator from "@/components/HeroScrollIndicator";
import { heroSets } from "@/assets/heroImages";
import { ArrowRight, Building2, Wallet, Users, CalendarClock, CheckCircle } from "lucide-react";

const ForOwnerInTrouble = () => {
  return (
    <Layout>
      {/* HERO */}
      <section id="hero" className="relative flex h-[62svh] min-h-[420px] items-center md:h-[70vh] md:min-h-[480px]">
        <div className="absolute inset-0 overflow-hidden">
          <OptimizedImg
            src={heroSets.building.src}
            srcSet={heroSets.building.srcSet}
            sizes={heroSets.building.sizes}
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
              <p className="hero-kicker">Für Eigentümer in Schwierigkeiten</p>
              <h1 className="hero-title">Lösungen für Eigentümer in Schwierigkeiten</h1>
              <p className="hero-description">Aurelia kauft Ihre Forderung diskret und fair.</p>
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
                Wir helfen in schwierigen Zeiten
              </h2>
              <p className="mx-auto max-w-2xl text-[0.93rem] leading-[1.85] text-muted-foreground">
                Wenn Sie als Eigentümer mit Schuldenproblemen, Erbkonflikten oder anderen Belastungen kämpfen, kann Aurelia eine Lösung bieten. Wir kaufen Ihre Forderung an — mit fairer Bewertung nach Marktstandards.
              </p>
            </Reveal>
          </div>
        </section>

        {/* SITUATIONEN */}
        <section className="section-premium" style={{ background: "linear-gradient(180deg, hsl(30 12% 97.5%) 0%, hsl(30 10% 96%) 100%)" }}>
          <div className="container-premium">
            <Reveal>
              <div className="text-center mb-12">
                <div className="mx-auto mb-4 h-[2px] w-10 rounded-full bg-amber-600/50" />
                <h2 className="mb-3 text-[1.4rem] font-heading font-semibold leading-[1.18] text-foreground text-balance md:text-[1.9rem]">
                  Situationen, in denen wir helfen können
                </h2>
              </div>
            </Reveal>

            <div className="grid gap-6 sm:grid-cols-2">
              {[
                { title: "Komplexe Immobiliensituationen", desc: "Wenn die Verwaltung einer Immobilie zu belastend wird.", Icon: Building2 },
                { title: "Finanzielle Herausforderungen", desc: "Wenn Schulden oder Belastungen entstanden sind.", Icon: Wallet },
                { title: "Mehrheits- oder Erbkonflikte", desc: "Wenn sich Co-Eigentümer nicht einigen können.", Icon: Users },
                { title: "Längerfristige Belastungen", desc: "Wenn eine strukturierte Lösung notwendig ist.", Icon: CalendarClock },
              ].map((item, i) => (
                <Reveal key={i} delay={i * 0.08}>
                  <div className="glass-card rounded-2xl p-8 flex gap-4">
                    <item.Icon className="shrink-0 text-teal-700" size={26} />
                    <div>
                      <h3 className="mb-2 text-[1rem] font-heading font-semibold text-foreground">{item.title}</h3>
                      <p className="text-[0.88rem] leading-[1.75] text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
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
                  Wie Aurelia helfen kann
                </h2>
                <p className="mx-auto max-w-3xl text-[0.93rem] leading-[1.85] text-white/75">
                  Aurelia kauft Ihre Forderung an. Das bedeutet: Wir werden Gläubiger und zahlen Ihnen einen fairen Preis nach Vereinbarung. Sie erhalten Kapital, Aurelia wird Eigentümer der Immobilie. Danach liegt die Verwertung in unserer Hand — wir renovieren, vermieten oder verkaufen die Immobilie, je nachdem, was wirtschaftlich sinnvoll ist.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="glass-card-dark rounded-2xl p-8 md:p-10 max-w-3xl mx-auto">
                <h3 className="mb-5 text-[1.1rem] font-heading font-semibold text-white">Vorteile für Sie</h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    "Strukturierte Lösung nach Vereinbarung",
                    "Faire Marktbewertung",
                    "Rechtliche Begleitung",
                    "Diskrete Behandlung",
                    "Professionelle Abwicklung",
                  ].map((point, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <CheckCircle size={16} className="mt-0.5 shrink-0 text-teal-400" />
                      <p className="text-[0.9rem] leading-[1.7] text-white/85">{point}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* PROZESS */}
        <section className="section-premium bg-gradient-warm">
          <div className="container-premium">
            <Reveal>
              <div className="text-center mb-12">
                <div className="mx-auto mb-4 h-[2px] w-10 rounded-full bg-teal-600/50" />
                <h2 className="mb-3 text-[1.4rem] font-heading font-semibold leading-[1.18] text-foreground text-balance md:text-[1.9rem]">
                  Der Prozess in 5 Schritten
                </h2>
              </div>
            </Reveal>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
              {[
                { step: "1", title: "Erstkontakt", desc: "Sie kontaktieren Aurelia oder nehmen unsere Beratung an." },
                { step: "2", title: "Situationsanalyse", desc: "Wir analysieren Ihre Immobilie und Ihre Situation." },
                { step: "3", title: "Bewertung & Angebot", desc: "Schriftliches Angebot nach Marktstandards." },
                { step: "4", title: "Vereinbarung", desc: "Bei Zustimmung unterzeichnen wir einen verbindlichen Vertrag." },
                { step: "5", title: "Abwicklung", desc: "Professionelle Verwertung nach Vertragsabschluss." },
              ].map((item, i) => (
                <Reveal key={i} delay={i * 0.06}>
                  <div className="glass-card rounded-2xl p-6 text-center h-full">
                    <div className="icon-badge mx-auto mb-4 flex h-11 w-11 items-center justify-center rounded-lg">
                      <span className="text-[1.15rem] font-heading font-bold text-teal-700">{item.step}</span>
                    </div>
                    <h3 className="mb-2 text-[0.95rem] font-heading font-semibold text-foreground">{item.title}</h3>
                    <p className="text-[0.82rem] leading-[1.7] text-muted-foreground">{item.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.3}>
              <p className="mt-8 mx-auto max-w-2xl text-center text-[0.78rem] leading-[1.7] text-muted-foreground/80 italic">
                Alle Zeitrahmen sind Richtwerte und hängen von Ihrer individuellen Situation ab. Eine typische Abwicklung dauert mehrere Wochen bis Monate.
              </p>
            </Reveal>
          </div>
        </section>

        {/* TESTIMONIALS — anonymisiert */}
        <section className="section-premium" style={{ background: "linear-gradient(180deg, hsl(30 12% 97.5%) 0%, hsl(30 10% 96%) 100%)" }}>
          <div className="container-premium">
            <Reveal>
              <div className="text-center mb-10">
                <div className="mx-auto mb-4 h-[2px] w-10 rounded-full bg-teal-600/50" />
                <h2 className="mb-3 text-[1.4rem] font-heading font-semibold leading-[1.18] text-foreground text-balance md:text-[1.9rem]">
                  Stimmen aus der Praxis
                </h2>
              </div>
            </Reveal>

            <div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
              {[
                {
                  role: "Kundin aus der Region Düsseldorf",
                  story: "Der Prozess war unkomplizierter als ich erwartet hatte. Aurelia hat alles transparent gemacht.",
                },
                {
                  role: "Geschäftsführer eines Unternehmens",
                  story: "In einer schwierigen Situation war die strukturierte Lösung genau das, was wir brauchten.",
                },
                {
                  role: "Co-Eigentümer (anonym)",
                  story: "Nach Jahren des Streits konnten wir endlich einen Weg finden, der für alle fair war.",
                },
              ].map((s, i) => (
                <Reveal key={i} delay={i * 0.08}>
                  <div className="glass-card rounded-2xl p-7 h-full">
                    <p className="mb-4 text-[0.9rem] italic leading-[1.8] text-foreground">„{s.story}"</p>
                    <p className="text-[0.8rem] text-muted-foreground/80">{s.role}</p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.3}>
              <p className="mt-8 mx-auto max-w-2xl text-center text-[0.78rem] leading-[1.7] text-muted-foreground/80 italic">
                Vollständige Referenzen sind auf Anfrage und unter Beachtung des Datenschutzes verfügbar.
              </p>
            </Reveal>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="relative section-premium text-white overflow-hidden" style={{ background: "linear-gradient(170deg, #0e6e91 0%, #0889b3 40%, #06acd5 100%)" }}>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(255,255,255,0.08)_0%,transparent_70%)] pointer-events-none" />
          <div className="container-premium relative text-center">
            <Reveal>
              <h2 className="mb-6 text-[1.85rem] font-heading font-bold text-white">Lassen Sie uns Ihre Situation besprechen</h2>
              <p className="mx-auto mb-10 max-w-2xl text-[0.95rem] leading-[1.8] text-white/80">
                Kostenlose und unverbindliche Beratung. Wir hören zu und sagen Ihnen ehrlich, was möglich ist.
              </p>
              <Link
                to="/kontakt"
                className="inline-flex items-center gap-2.5 rounded-sm bg-white px-8 py-4 text-[0.72rem] font-semibold uppercase tracking-[0.15em] text-teal-800 shadow-lg transition-all duration-300 hover:bg-white/90 hover:shadow-xl"
              >
                Termin vereinbaren
                <ArrowRight size={13} />
              </Link>
            </Reveal>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default ForOwnerInTrouble;
