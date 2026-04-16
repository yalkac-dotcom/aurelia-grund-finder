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
              <h1 className="hero-title">Immobilien. Forderungen. Vermögensaufbau.</h1>
              <div className="hero-description">
                <p className="mb-3">Aurelia bietet maßgeschneiderte Lösungen:</p>
                <ul className="space-y-1.5">
                  <li>● Hilfe für Eigentümer in Schwierigkeiten</li>
                  <li>● Faire Immobilien für Käufer</li>
                  <li>● Sichere Investitionen für Vermögensaufbau</li>
                </ul>
              </div>
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
                  Unsere Geschäftsbereiche
                </h2>
                <p className="mx-auto max-w-lg text-[0.93rem] leading-[1.85] text-muted-foreground">
                  Unabhängig von Ihrer Ausgangssituation verfügen wir über spezialisierte Lösungen für Ihre Anforderungen.
                </p>
              </div>
            </Reveal>

            <div className="grid gap-6 sm:grid-cols-3">
              {[
                {
                  icon: Shield,
                  title: "Eigentümer in Schwierigkeiten",
                  desc: "Forderungsankauf und Schuldenerledigung",
                  link: "/fuer-eigentumer-in-not",
                  color: "bg-red-500"
                },
                {
                  icon: TrendingUp,
                  title: "Käufer",
                  desc: "Immobilienerwerb zu transparenten Konditionen",
                  link: "/fuer-kaeufer",
                  color: "bg-green-500"
                },
                {
                  icon: Check,
                  title: "Investoren",
                  desc: "Vermögensaufbau durch strukturierte Beteiligungen",
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
                        Weitere Informationen <ArrowRight size={14} />
                      </span>
                    </Link>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* WHO WE ARE - Trust Building */}
        <section className="section-premium section-navy text-white">
          <div className="container-premium">
            <Reveal>
              <div className="text-center mb-10">
                <div className="mx-auto mb-4 h-[2px] w-10 rounded-full bg-teal-400/50" />
                <h2 className="mb-5 text-[1.4rem] font-heading font-semibold leading-[1.18] text-white text-balance md:text-[1.9rem]">
                  Über Aurelia Grundbesitz
                </h2>
                <p className="mx-auto max-w-2xl text-[0.93rem] leading-[1.85] text-white/75">
                  Aurelia Grundbesitz ist ein Immobilienunternehmen mit über 30 Jahren Erfahrung in der Branche. Wir spezialisieren uns auf den Ankauf von Immobilienforderungen, den Erwerb schwieriger Objekte und deren wirtschaftliche Verwertung. Unser Geschäftsmodell basiert auf Transparenz, fairer Preisgestaltung und langfristigem Vermögensaufbau für alle Beteiligten.
                </p>
              </div>
            </Reveal>

            <div className="mb-10 grid gap-6 sm:grid-cols-3">
              {[
                { 
                  icon: "🎯",
                  label: "Branchenerfahrung", 
                  desc: "Über 30 Jahre fundiertes Know-how in der Immobilienwirtschaft" 
                },
                { 
                  icon: "🤝",
                  label: "Verlässliche Partnerschaft", 
                  desc: "Langfristige Geschäftsbeziehungen mit hunderten zufriedenen Partnern" 
                },
                { 
                  icon: "✅",
                  label: "Nachgewiesene Erfolgsbilanz", 
                  desc: "Realistische Renditeergebnisse und stabile Geschäftsabläufe" 
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
                  Unser Anspruch
                </h3>
                <p className="mb-4 text-[0.93rem] leading-[1.85] text-white/70">
                  Transparente Kommunikation. Ethisches Handeln. Nachhaltige Wertschöpfung. Aurelia verzichtet auf intransparente Intermediäre und undurchschaubare Prozesse. Alle Geschäfte werden zu fairen Bedingungen und auf Basis objektiver Marktwerte abgewickelt. Wir handeln im Interesse aller Stakeholder und mit Fokus auf langfristige Geschäftsbeziehungen.
                </p>
                <p className="text-[0.88rem] font-semibold text-teal-400">
                  ✓ Hilfe und Geschäftserfolg vereinigt
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
                  Unsere Arbeitsweise
                </h2>
                <p className="mx-auto max-w-lg text-[0.93rem] leading-[1.85] text-muted-foreground">
                  Unabhängig vom Geschäftsbereich folgen wir einem transparenten und strukturierten Prozess.
                </p>
              </div>
            </Reveal>

            <div className="grid gap-8 sm:grid-cols-3">
              {[
                {
                  step: "1",
                  title: "Kostenfreie Erstberatung",
                  desc: "Wir analysieren Ihre Situation sachlich und geben ehrliche Einschätzungen ohne versteckte Erwartungen."
                },
                {
                  step: "2",
                  title: "Faire Verhandlung",
                  desc: "Unser Angebot basiert auf marktüblichen Bewertungen und transparenten Konditionen ohne Umwege."
                },
                {
                  step: "3",
                  title: "Zügige Abwicklung",
                  desc: "Klare vertragliche Regelungen und schnelle Bearbeitung — Abschluss typischerweise innerhalb von Wochen."
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
                  Detaillierte Prozessübersicht
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
                  Referenzen & Fallstudien
                </h2>
              </div>
            </Reveal>

            <div className="grid gap-6 sm:grid-cols-3">
              {[
                {
                  quote: "Nach dem Tod meines Mannes stand ich vor einer belasteten Immobilie und Schulden. Aurelia hat mir schnell und fair geholfen. Innerhalb von 3 Wochen war alles erledigt.",
                  author: "Anita Rösler",
                  role: "Immobilieneigentümerin, Düsseldorf-Oberkassel"
                },
                {
                  quote: "Ich suchte lange nach einer bezahlbaren Immobilie. Bei Aurelia fand ich ein Einfamilienhaus in Ratingen — 35% unter dem Marktwert. Keine versteckten Kosten, keine Makler.",
                  author: "Stefan Möller",
                  role: "Softwareentwickler, Düsseldorf"
                },
                {
                  quote: "Die Beteiligung bei Aurelia überzeugt mich durch Transparenz: echte Zahlen, real Assets, professionelle Abwicklung. Nach 18 Monaten hatte ich meine erwartete Rendite.",
                  author: "Reinhard Hoffmann",
                  role: "Unternehmer & Kapitalanleger, Meerbusch (Düsseldorf-Umgebung)"
                }
              ].map((story, i) => (
                <Reveal key={i} delay={i * 0.08}>
                  <div className="glass-card rounded-2xl p-8">
                    <p className="mb-6 text-[0.93rem] italic leading-[1.85] text-foreground">
                      „{story.quote}"
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
              <h2 className="mb-6 text-[1.85rem] font-heading font-bold text-white">Kontaktieren Sie uns unverbindlich.</h2>
              <p className="mx-auto mb-10 max-w-2xl text-[0.95rem] leading-[1.8] text-white/80">
                Gerne stellen wir uns Ihren Anforderungen vor und erläutern, wie Aurelia Grundbesitz Ihre Ziele unterstützen kann. Die erste Beratung ist kostenlos und unverbindlich.
              </p>
              <Link
                to="/kontakt"
                className="inline-flex items-center gap-2.5 rounded-sm bg-white px-8 py-4 text-[0.72rem] font-semibold uppercase tracking-[0.15em] text-teal-800 shadow-lg transition-all duration-300 hover:bg-white/90 hover:shadow-xl"
              >
                Beratungstermin vereinbaren
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
