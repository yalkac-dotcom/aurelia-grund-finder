import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import Reveal from "@/components/Reveal";
import OptimizedImg from "@/components/OptimizedImg";
import HeroScrollIndicator from "@/components/HeroScrollIndicator";
import { heroSets } from "@/assets/heroImages";
import { ArrowRight, TrendingUp, Zap, PiggyBank, BarChart3, Users } from "lucide-react";

const ForInvestors = () => {
  return (
    <Layout>
      {/* HERO */}
      <section id="hero" className="relative flex h-[62svh] min-h-[420px] items-center md:h-[70vh] md:min-h-[480px]">
        <div className="absolute inset-0 overflow-hidden">
          <OptimizedImg
            src={heroSets.investors.src}
            srcSet={heroSets.investors.srcSet}
            sizes={heroSets.investors.sizes}
            alt="Investmentimmobilie"
            className="hero-media h-full w-full object-cover object-center"
            priority
          />
          <div className="hero-overlay-base absolute inset-0" />
          <div className="hero-overlay-protect absolute inset-0" />
        </div>

        <div className="page-frame-hero relative pt-16 pb-10 md:pt-20 md:pb-14">
          <div className="hero-copy-shell">
            <Reveal>
              <p className="hero-kicker">Geschäftsbereich Kapitalanlage</p>
              <h1 className="hero-title">Strukturierte Investmentopportunitäten</h1>
            </Reveal>
          </div>
          <HeroScrollIndicator />
        </div>
      </section>

      <div className="page-shell">
        {/* INTRO */}
        <section className="section-premium bg-gradient-warm">
          <div className="container-premium">
            <Reveal>
              <div className="mx-auto mb-4 h-[2px] w-10 rounded-full bg-teal-600/50" />
              <h2 className="mb-5 text-[1.4rem] font-heading font-semibold leading-[1.18] text-foreground text-balance md:text-[1.9rem]">
                Rentable Beteiligungen mit Transparenz
              </h2>
              <p className="mx-auto max-w-3xl text-[0.93rem] leading-[1.85] text-muted-foreground">
                Der Forderungsankauf ist Aurelis Kernstrategie für Vermögensaufbau. Investoren partizipieren an strukturierten Beteiligungen mit nachvollziehbaren Renditeperspektiven, basierend auf über 30 Jahren Branchenerfahrung.
              </p>
            </Reveal>
          </div>
        </section>

        {/* THE MODEL */}
        <section className="section-premium" style={{ background: "linear-gradient(180deg, hsl(30 12% 97.5%) 0%, hsl(30 10% 96%) 100%)" }}>
          <div className="container-premium">
            <Reveal>
              <div className="text-center mb-12">
                <div className="mx-auto mb-4 h-[2px] w-10 rounded-full bg-teal-600/50" />
                <h2 className="mb-3 text-[1.4rem] font-heading font-semibold leading-[1.18] text-foreground text-balance md:text-[1.9rem]">
                  Das Aurelia-Geschäftsmodell
                </h2>
              </div>
            </Reveal>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-10">
              <Reveal delay={0}>
                <div className="glass-card rounded-2xl p-8 text-center">
                  <div className="icon-badge mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-lg">
                    <span className="text-[1.3rem] font-heading font-bold text-teal-700">1</span>
                  </div>
                  <h3 className="mb-2 text-[1rem] font-heading font-semibold text-foreground">Identifikation</h3>
                  <p className="text-[0.86rem] leading-[1.75] text-muted-foreground">Aurelia identifiziert Immobilien mit Forderungssicherheiten — typischerweise in Notsituationen von Eigentümern.</p>
                </div>
              </Reveal>

              <Reveal delay={0.08}>
                <div className="glass-card rounded-2xl p-8 text-center">
                  <div className="icon-badge mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-lg">
                    <span className="text-[1.3rem] font-heading font-bold text-teal-700">2</span>
                  </div>
                  <h3 className="mb-2 text-[1rem] font-heading font-semibold text-foreground">Ankauf</h3>
                  <p className="text-[0.86rem] leading-[1.75] text-muted-foreground">Wir erwerben die Forderung zu fairen Bedingungen — typischerweise unter üblichen Marktwerten.</p>
                </div>
              </Reveal>

              <Reveal delay={0.16}>
                <div className="glass-card rounded-2xl p-8 text-center">
                  <div className="icon-badge mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-lg">
                    <span className="text-[1.3rem] font-heading font-bold text-teal-700">3</span>
                  </div>
                  <h3 className="mb-2 text-[1rem] font-heading font-semibold text-foreground">Kapitalisierung</h3>
                  <p className="text-[0.86rem] leading-[1.75] text-muted-foreground">Investoren stellen Kapital bereit oder beteiligen sich an Forderungen. Sie partizipieren an Gewinnen und Wertsteigerung.</p>
                </div>
              </Reveal>

              <Reveal delay={0.24}>
                <div className="glass-card rounded-2xl p-8 text-center">
                  <div className="icon-badge mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-lg">
                    <span className="text-[1.3rem] font-heading font-bold text-teal-700">4</span>
                  </div>
                  <h3 className="mb-2 text-[1rem] font-heading font-semibold text-foreground">Verwertung</h3>
                  <p className="text-[0.86rem] leading-[1.75] text-muted-foreground">Renovation, Vermietung oder Verkauf — je nach Strategie. Gewinne entstehen durch Wertsteigerung und Ertragsgeneration.</p>
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.3}>
              <div className="glass-card rounded-2xl p-8 md:p-10 text-center">
                <p className="mb-2 text-[0.9rem] font-heading font-semibold text-foreground">Zielrendite:</p>
                <p className="mb-1 text-[2.5rem] font-heading font-bold text-teal-700">15–25% p.a.</p>
                <p className="text-[0.85rem] text-muted-foreground">(abhängig von Projekttyp und Beteiligungsform)</p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* WHY SAFE */}
        <section className="section-premium section-navy text-white">
          <div className="container-premium">
            <Reveal>
              <div className="text-center mb-12">
                <div className="mx-auto mb-4 h-[2px] w-10 rounded-full bg-teal-400/50" />
                <h2 className="mb-3 text-[1.4rem] font-heading font-semibold leading-[1.18] text-white text-balance md:text-[1.9rem]">
                  Robustheit des Modells
                </h2>
              </div>
            </Reveal>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Reale Assets",
                  desc: "Immobilien sind Sachvermögen — nicht spekulative Finanzinstrumente. Reale Wertschöpfung."
                },
                {
                  title: "30 Jahre Expertise",
                  desc: "Geschäftsführung mit bewährter Branchenerfahrung. Etablierte Netzwerke und Risikomanagement."
                },
                {
                  title: "Kosteneffizienz",
                  desc: "Durch Forderungsankauf erwerben wir Immobilien unter Marktwert — struktureller Vorteil."
                },
                {
                  title: "Transparenz",
                  desc: "Alle Zahlen und Kalkulationen werden offengelegt. Keine versteckten Risiken oder Provisionen."
                },
                {
                  title: "Diversifikation",
                  desc: "Investoren beteiligen sich typischerweise an mehreren Projekten — Risikominderung durch Portfolio-Ansatz."
                },
                {
                  title: "Langfristige Bestandsstrategie",
                  desc: "Nicht «Buy & Flip», sondern «Buy, Renovate, Hold & Collect» — nachhaltiger Vermögensaufbau."
                }
              ].map((item, i) => (
                <Reveal key={i} delay={i * 0.08}>
                  <div className="glass-card-dark rounded-2xl p-8">
                    <h3 className="mb-3 text-[1rem] font-heading font-semibold text-white">{item.title}</h3>
                    <p className="text-[0.86rem] leading-[1.75] text-white/70">{item.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* INVESTMENT OPTIONS */}
        <section className="section-premium bg-gradient-warm">
          <div className="container-premium">
            <Reveal>
              <div className="text-center mb-12">
                <div className="mx-auto mb-4 h-[2px] w-10 rounded-full bg-teal-600/50" />
                <h2 className="mb-3 text-[1.4rem] font-heading font-semibold leading-[1.18] text-foreground text-balance md:text-[1.9rem]">
                  Verfügbare Beteiligungsmodelle
                </h2>
              </div>
            </Reveal>

            <div className="grid gap-6 sm:grid-cols-2">
              {[
                {
                  title: "Projektbeteiligung",
                  desc: "Beteiligung an einzelnen Projekten — vom Forderungsankauf bis zur finalen Verwertung.",
                  features: ["Mindestanlage: €10.000", "Projektlaufzeit: 1–2 Jahre", "Zielrendite: 15–25%", "Transparent & risikoverteilt"],
                  color: "border-blue-200"
                },
                {
                  title: "Portfolio-Partnership",
                  desc: "Langfristige Beteiligung an Aurelis Geschäftstätigkeit — kontinuierliche Gewinne.",
                  features: ["Mindestanlage: €50.000", "Langfristig (3+ Jahre)", "Zielrendite: 12–20%", "Monatliche/jährliche Ausschüttungen"],
                  color: "border-purple-200"
                },
                {
                  title: "Forderungs-Ko-Ankauf",
                  desc: "Direkter Erwerb von Immobilienforderungen zusammen mit Aurelia.",
                  features: ["Mindestanlage: €20.000", "Laufzeit: 6–18 Monate", "Zielrendite: 18–30%", "Hohe Partizipation"],
                  color: "border-green-200"
                },
                {
                  title: "Buy-and-Hold Portfolio",
                  desc: "Kauf von fertigen Immobilien zum Halten und Vermieten — klassisches Modell.",
                  features: ["Mindestanlage: €40.000", "Buy & Hold Strategie", "Zielrendite: 5–8% p.a.", "Passive Mieteinnahmen"],
                  color: "border-orange-200"
                }
              ].map((option, i) => (
                <Reveal key={i} delay={i * 0.08}>
                  <div className={`glass-card rounded-2xl p-8 border-l-4 ${option.color}`}>
                    <h3 className="mb-3 text-[1.05rem] font-heading font-semibold text-foreground">{option.title}</h3>
                    <p className="mb-5 text-[0.88rem] leading-[1.75] text-muted-foreground">{option.desc}</p>
                    <ul className="space-y-2">
                      {option.features.map((feature, j) => (
                        <li key={j} className="flex items-start gap-2 text-[0.85rem] text-muted-foreground">
                          <span className="mt-0.5 text-teal-600">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* SUCCESS STORIES */}
        <section className="section-premium" style={{ background: "linear-gradient(180deg, hsl(30 12% 97.5%) 0%, hsl(30 10% 96%) 100%)" }}>
          <div className="container-premium">
            <Reveal>
              <div className="text-center mb-10">
                <div className="mx-auto mb-4 h-[2px] w-10 rounded-full bg-teal-600/50" />
                <h2 className="mb-3 text-[1.4rem] font-heading font-semibold leading-[1.18] text-foreground text-balance md:text-[1.9rem]">
                  Beispiele aus unserer Investoren-Base
                </h2>
              </div>
            </Reveal>

            <div className="grid gap-6 sm:grid-cols-2">
              {[
                {
                  title: "Starter-Investment",
                  story: "€50.000 Projektbeteiligung. Nach 18 Monaten angemessene Rendite erzielt. Investor beteiligt sich seitdem an mehreren parallel laufenden Projekten."
                },
                {
                  title: "Aufbau über Jahre",
                  story: "€20.000 Startkapital, über mehrere Jahre verschiedene Forderungs-Ko-Anküfe durchgeführt. Heute: Solides Investment-Portfolio aufgebaut."
                },
                {
                  title: "Portfolio-Partner",
                  story: "Langfristige Partnership seit mehreren Jahren. Regelmäßige monatliche Ausschüttungen, nachvollziehbare Prozesse. Kontinuierliche Wertsteigerung."
                },
                {
                  title: "Buy-and-Hold-Investor",
                  story: "Mehrere Immobilien erworben, vermietet, passive Mieteinnahmen erwirtschaftet — plus Wertsteigerung. Echte Altersvorsorge."
                }
              ].map((story, i) => (
                <Reveal key={i} delay={i * 0.08}>
                  <div className="glass-card rounded-2xl p-8">
                    <h3 className="mb-3 text-[1rem] font-heading font-semibold text-foreground">{story.title}</h3>
                    <p className="text-[0.88rem] leading-[1.75] text-muted-foreground">{story.story}</p>
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
              <h2 className="mb-6 text-[1.85rem] font-heading font-bold text-white">Investitionsberatung anfragen</h2>
              <p className="mx-auto mb-10 max-w-2xl text-[0.95rem] leading-[1.8] text-white/80">
                Gerne stellen wir unsere Investment-Strategien vor und erarbeiten ein maßgeschneidertes Modell für Ihre Anforderungen und Rendite-Erwartungen.
              </p>
              <Link
                to="/kontakt"
                className="inline-flex items-center gap-2.5 rounded-sm bg-white px-8 py-4 text-[0.72rem] font-semibold uppercase tracking-[0.15em] text-teal-800 shadow-lg transition-all duration-300 hover:bg-white/90 hover:shadow-xl"
              >
                Beratungstermin buchen
                <ArrowRight size={13} />
              </Link>
            </Reveal>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default ForInvestors;