import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import Reveal from "@/components/Reveal";
import { ArrowRight, Check, Shield, TrendingUp } from "lucide-react";
import HeroScrollIndicator from "@/components/HeroScrollIndicator";
import { heroSets } from "@/assets/heroImages";
import OptimizedImg from "@/components/OptimizedImg";

const HomePage = () => {
  return (
    <Layout>
      {/* HERO - Die 3 Wege */}
      <section id="hero" className="relative flex h-[62svh] min-h-[420px] items-center md:h-[70vh] md:min-h-[480px]">
        <div className="absolute inset-0 overflow-hidden">
          <OptimizedImg
            src={heroSets.premium.src}
            srcSet={heroSets.premium.srcSet}
            sizes={heroSets.premium.sizes}
            alt="Gepflegtes Mehrfamilienhaus in einer ruhigen Wohnstraße"
            className="hero-media h-full w-full object-cover object-[62%_center] md:object-center"
            priority
          />
          <div className="hero-overlay-base absolute inset-0" />
          <div className="hero-overlay-protect absolute inset-0" />
        </div>

        <div className="page-frame-hero relative pt-16 pb-10 md:pt-20 md:pb-14">
          <div className="hero-copy-shell">
            <Reveal>
              <p className="hero-kicker">Aurelia Grundbesitz</p>
              <h1 className="hero-title">Immobilien. Forderungen. Chancen.</h1>
              <p className="hero-description">
                Du sitzt fest mit Deiner Immobilie? Du willst günstig kaufen? Du willst mit uns gewinnen? Wir haben eine Lösung für Dich.
              </p>
            </Reveal>
          </div>
          <HeroScrollIndicator />
        </div>
      </section>

      <div className="page-shell">
        {/* DIE 3 WEGE - Clear Pathways */}
        <section className="section-premium bg-gradient-warm">
          <div className="container-premium">
            <Reveal>
              <div className="text-center mb-12">
                <div className="mx-auto mb-4 h-[2px] w-10 rounded-full bg-teal-600/50" />
                <h2 className="mb-3 text-[1.4rem] font-heading font-semibold leading-[1.18] text-foreground text-balance md:text-[1.9rem]">
                  Dein Weg zu Aurelia
                </h2>
                <p className="mx-auto max-w-lg text-[0.93rem] leading-[1.85] text-muted-foreground">
                  Ob Du Hilfe brauchst, sparen willst oder investieren möchtest — wir haben den richtigen Weg für Dich.
                </p>
              </div>
            </Reveal>

            <div className="grid gap-6 sm:grid-cols-3">
              {[
                {
                  icon: Shield,
                  title: "Ich brauche HILFE",
                  desc: "Meine Immobilie ist in Schwierigkeiten",
                  link: "/fuer-eigentumer-in-not",
                  color: "bg-red-500"
                },
                {
                  icon: TrendingUp,
                  title: "Ich will KAUFEN",
                  desc: "Immobilien zu fairen Preisen",
                  link: "/fuer-kaeufer",
                  color: "bg-green-500"
                },
                {
                  icon: Check,
                  title: "Ich will INVESTIEREN",
                  desc: "Mit Aurelia profitieren",
                  link: "/fuer-investoren",
                  color: "bg-yellow-500"
                }
              ].map((path, i) => {
                const Icon = path.icon;
                return (
                  <Reveal key={i} delay={i * 0.08}>
                    <Link to={path.link} className="glass-card card-hover block rounded-2xl p-8 text-center transition-all duration-300">
                      <div className={`mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full ${path.color} text-white`}>
                        <Icon size={24} />
                      </div>
                      <h3 className="mb-2 text-[1.05rem] font-heading font-semibold text-foreground">
                        {path.title}
                      </h3>
                      <p className="mb-4 text-[0.88rem] leading-[1.7] text-muted-foreground">
                        {path.desc}
                      </p>
                      <span className="inline-flex items-center gap-1.5 text-[0.8rem] font-semibold text-teal-700">
                        Mehr erfahren <ArrowRight size={14} />
                      </span>
                    </Link>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* WHO WE ARE - Trust Building mit GF Erfahrung */}
        <section className="section-premium section-navy text-white">
          <div className="container-premium">
            <Reveal>
              <div className="text-center mb-10">
                <div className="mx-auto mb-4 h-[2px] w-10 rounded-full bg-teal-400/50" />
                <h2 className="mb-5 text-[1.4rem] font-heading font-semibold leading-[1.18] text-white text-balance md:text-[1.9rem]">
                  Wer ist Aurelia?
                </h2>
                <p className="mx-auto max-w-2xl text-[0.93rem] leading-[1.85] text-white/75">
                  Aurelia ist ein Immobilien-Unternehmen mit tiefem Branchenwissen. Unsere Geschäftsführung bringt über 30 Jahre Erfahrung in der Immobilienbranche mit. Wir kaufen Forderungen an Immobilien, helfen Menschen in Schwierigkeiten, verkaufen Objekte zu fairen Preisen und ermöglichen Investoren, langfristiges Vermögen aufzubauen. Unser Ziel: Menschen helfen — und dabei nachhaltige Geschäfte machen.
                </p>
              </div>
            </Reveal>

            <div className="mb-10 grid gap-6 sm:grid-cols-3">
              {[
                { 
                  icon: "🎯",
                  label: "Jahrzehnte Erfahrung", 
                  desc: "Über 30 Jahre Know-how in der Immobilienbranche" 
                },
                { 
                  icon: "🤝",
                  label: "Vertrauensvolle Partnerschaften", 
                  desc: "Hunderte zufriedene Kunden und Investoren" 
                },
                { 
                  icon: "✅",
                  label: "Nachgewiesener Erfolg", 
                  desc: "Langfristige Beziehungen und echte Ergebnisse" 
                }
              ].map((stat, i) => (
                <Reveal key={i} delay={i * 0.08}>
                  <div className="glass-card-dark rounded-2xl p-8 text-center">
                    <p className="mb-3 text-[2.5rem]">{stat.icon}</p>
                    <p className="text-[0.9rem] font-semibold text-white">{stat.label}</p>
                    <p className="text-[0.8rem] text-white/50">{stat.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.15}>
              <div className="glass-card-dark rounded-2xl p-8 md:p-10">
                <h3 className="mb-3 text-[1.1rem] font-heading font-semibold text-white">
                  Unser Versprechen
                </h3>
                <p className="mb-4 text-[0.93rem] leading-[1.85] text-white/70">
                  Transparenz. Gerechtigkeit. Erfolg. Wir verstecken uns nicht hinter Makler-Umwegen oder undurchsichtigen Prozessen. Du bekommst den echten Wert. Wir machen faire Geschäfte — weil wir langfristig denken.
                </p>
                <p className="text-[0.88rem] font-semibold text-teal-400">
                  ✓ Echte Hilfe + Echte Gewinne
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* HOW IT WORKS - Process Clarity */}
        <section
          className="section-premium"
          style={{ background: "linear-gradient(180deg, hsl(30 12% 97.5%) 0%, hsl(30 10% 96%) 100%)" }}
        >
          <div className="container-premium">
            <Reveal>
              <div className="text-center mb-12">
                <div className="mx-auto mb-4 h-[2px] w-10 rounded-full bg-teal-600/50" />
                <h2 className="mb-3 text-[1.4rem] font-heading font-semibold leading-[1.18] text-foreground text-balance md:text-[1.9rem]">
                  Wie es funktioniert
                </h2>
                <p className="mx-auto max-w-lg text-[0.93rem] leading-[1.85] text-muted-foreground">
                  Egal welcher Weg — wir haben einen klaren, transparenten Prozess.
                </p>
              </div>
            </Reveal>

            <div className="grid gap-8 sm:grid-cols-3">
              {[
                {
                  step: "1",
                  title: "Kostenlose Beratung",
                  desc: "Du erzählst uns Deine Situation. Wir hören zu, analysieren fair und beraten Dich ehrlich."
                },
                {
                  step: "2",
                  title: "Faire Verhandlung",
                  desc: "Wir machen Dir ein transparentes Angebot — basierend auf echten Marktpreisen, ohne Umwege."
                },
                {
                  step: "3",
                  title: "Schneller Abschluss",
                  desc: "Klare Paperwork, schnelle Bearbeitung — in Tagen, nicht Monaten. Du weißt immer wo Du stehst."
                }
              ].map((item, i) => (
                <Reveal key={i} delay={i * 0.08}>
                  <div className="relative">
                    <div className="glass-card rounded-2xl p-8 text-center">
                      <div className="icon-badge mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-lg">
                        <span className="text-[1.3rem] font-heading font-bold text-teal-700">{item.step}</span>
                      </div>
                      <h3 className="mb-2 text-[1rem] font-heading font-semibold text-foreground">{item.title}</h3>
                      <p className="text-[0.86rem] leading-[1.75] text-muted-foreground">{item.desc}</p>
                    </div>
                    {i < 2 && (
                      <div className="hidden sm:block absolute top-1/2 -right-3 w-6 h-6 -translate-y-1/2">
                        <ArrowRight className="text-teal-600/30" size={24} />
                      </div>
                    )}
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.3}>
              <div className="mt-10 text-center">
                <Link
                  to="/arbeitsweise"
                  className="inline-flex items-center gap-2 text-[0.85rem] font-semibold text-teal-700 hover:text-teal-800 transition-colors"
                >
                  Alle 3 Wege verstehen
                  <ArrowRight size={15} />
                </Link>
              </div>
            </Reveal>
          </div>
        </section>

        {/* SUCCESS STORIES - Social Proof */}
        <section className="section-premium bg-gradient-warm">
          <div className="container-premium">
            <Reveal>
              <div className="text-center mb-10">
                <div className="mx-auto mb-4 h-[2px] w-10 rounded-full bg-teal-600/50" />
                <h2 className="mb-3 text-[1.4rem] font-heading font-semibold leading-[1.18] text-foreground text-balance md:text-[1.9rem]">
                  Das sagen unsere Partner
                </h2>
              </div>
            </Reveal>

            <div className="grid gap-6 sm:grid-cols-3">
              {[
                {
                  quote: "Aurelia hat mir geholfen, aus einer unmöglichen Situation herauszukommen. Schnell, fair, unbürokratisch.",
                  author: "Maria K.",
                  role: "Immobilien-Eigentümerin"
                },
                {
                  quote: "Ich habe meine Traumimmobilie zu einem fairen Preis gekauft. Keine versteckten Kosten, keine Überraschungen.",
                  author: "Thomas M.",
                  role: "Immobilien-Käufer"
                },
                {
                  quote: "Mit Aurelia zu investieren war die beste Entscheidung. Transparente Prozesse, nachvollziehbare Gewinne.",
                  author: "Andreas B.",
                  role: "Investor"
                }
              ].map((story, i) => (
                <Reveal key={i} delay={i * 0.08}>
                  <div className="glass-card rounded-2xl p-8">
                    <p className="mb-6 text-[0.93rem] italic leading-[1.85] text-foreground">
                      &ldquo;{story.quote}&rdquo;
                    </p>
                    <div>
                      <p className="text-[0.9rem] font-heading font-semibold text-foreground">{story.author}</p>
                      <p className="text-[0.8rem] text-muted-foreground">{story.role}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section
          className="relative section-premium text-white overflow-hidden"
          style={{ background: "linear-gradient(170deg, #0e6e91 0%, #0889b3 40%, #06acd5 100%)" }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(255,255,255,0.08)_0%,transparent_70%)] pointer-events-none" />
          <div className="container-premium relative text-center">
            <Reveal>
              <h2 className="mb-6 text-[1.85rem] font-heading font-bold text-white">Ready? Lass uns starten.</h2>
              <p className="mx-auto mb-10 max-w-2xl text-[0.95rem] leading-[1.8] text-white/80">
                Egal wie komplex Deine Situation ist — wir haben eine Lösung. Die erste Beratung ist kostenlos, keine Verpflichtung, keine versteckten Agenden.
              </p>
              <Link
                to="/kontakt"
                className="inline-flex items-center gap-2.5 rounded-sm bg-white px-8 py-4 text-[0.72rem] font-semibold uppercase tracking-[0.15em] text-teal-800 shadow-lg transition-all duration-300 hover:bg-white/90 hover:shadow-xl"
              >
                Kostenlose Beratung buchen
                <ArrowRight size={13} />
              </Link>
            </Reveal>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default HomePage;
