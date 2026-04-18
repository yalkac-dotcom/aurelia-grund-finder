import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import Reveal from "@/components/Reveal";
import { ChevronDown, ArrowRight } from "lucide-react";

const faqs = [
  {
    q: "Wie schnell erfolgt die Abwicklung?",
    a: "Nach Vertragsabschluss erfolgt die Abwicklung gemäß vertraglicher Vereinbarung. Genaue Zeitrahmen werden individuell festgelegt und sind abhängig von der jeweiligen Situation. Eine typische Abwicklung dauert mehrere Wochen bis Monate.",
  },
  {
    q: "Ist der Prozess diskret?",
    a: "Ja, Aurelia behandelt alle Informationen vertraulich und professionell. Wir besprechen Details nur mit den beteiligten Parteien.",
  },
  {
    q: "Kann ich meine Immobilie behalten?",
    a: "Beim diskreten Ankauf geht die Immobilie auf Aurelia über. Wenn Sie alternative Lösungen suchen, sprechen Sie uns gerne an — wir prüfen den jeweiligen Einzelfall.",
  },
  {
    q: "Welche Gebühren fallen an?",
    a: "Alle Gebühren werden transparent kommuniziert. Es gibt keine versteckten Kosten. Details werden in der Vereinbarung schriftlich festgehalten.",
  },
  {
    q: "Wie bewertet Aurelia eine Immobilie?",
    a: "Wir verwenden objektive Marktstandards und berücksichtigen Lage, Zustand, Markttrends und vergleichbare Objekte. Die Bewertung erfolgt nachvollziehbar und wird Ihnen erläutert.",
  },
  {
    q: "Was passiert mit der Immobilie nach dem Ankauf?",
    a: "Aurelia entscheidet je nach Marktsituation über Renovierung, Verkauf, Vermietung oder langfristige Bestandsverwaltung — immer mit Blick auf wirtschaftlich sinnvolle Verwertung.",
  },
  {
    q: "Sind die Geschäftspartnerschaften eine Finanzanlage?",
    a: "Nein. Geschäftspartnerschaften mit Aurelia sind keine Finanzanlage und kein reguliertes Finanzprodukt. Es handelt sich um individuelle, projektbezogene Vereinbarungen mit erheblichen Risiken (bis hin zu Kapitalverlust). Details siehe Geschäftspartner-Seite.",
  },
];

const FAQ = () => {
  const [open, setOpen] = useState<number | null>(null);

  useEffect(() => {
    document.title = "FAQ – Aurelia Grundbesitz GmbH";
  }, []);

  return (
    <Layout>
      {/* HERO – schlank, ruhig */}
      <section className="bg-gradient-warm border-b border-border/40">
        <div className="container-premium py-16 md:py-20 text-center">
          <Reveal>
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-accent mb-3">
              Häufige Fragen
            </p>
            <h1 className="font-heading font-semibold text-primary text-[1.85rem] md:text-[2.4rem] leading-tight tracking-tight mb-4">
              FAQ
            </h1>
            <p className="mx-auto max-w-xl text-[0.95rem] leading-[1.75] text-muted-foreground">
              Antworten auf die wichtigsten Fragen.
            </p>
          </Reveal>
        </div>
      </section>

      <div className="page-shell">
        {/* FAQ-LISTE */}
        <section className="section-premium bg-gradient-warm">
          <div className="container-premium">
            <div className="mx-auto max-w-3xl space-y-4">
              {faqs.map((item, i) => {
                const isOpen = open === i;
                return (
                  <Reveal key={i} delay={i * 0.04}>
                    <button
                      onClick={() => setOpen(isOpen ? null : i)}
                      className="w-full glass-card rounded-2xl p-6 md:p-8 text-left transition-all duration-300 hover:shadow-md"
                      aria-expanded={isOpen}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <h3 className="text-[0.95rem] md:text-[1rem] font-heading font-semibold text-foreground">
                          {item.q}
                        </h3>
                        <ChevronDown
                          size={20}
                          className={`text-teal-600 transition-transform duration-300 shrink-0 mt-0.5 ${isOpen ? "rotate-180" : ""}`}
                        />
                      </div>
                      {isOpen && (
                        <div className="mt-4 pt-4 border-t border-teal-100/60">
                          <p className="text-[0.88rem] leading-[1.8] text-muted-foreground">
                            {item.a}
                          </p>
                        </div>
                      )}
                    </button>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative section-premium text-white overflow-hidden" style={{ background: "linear-gradient(170deg, hsl(var(--primary)) 0%, hsl(var(--highlight)) 100%)" }}>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(255,255,255,0.08)_0%,transparent_70%)] pointer-events-none" />
          <div className="container-premium relative text-center">
            <Reveal>
              <h2 className="mb-6 text-[1.85rem] font-heading font-bold text-white">Noch offene Fragen?</h2>
              <p className="mx-auto mb-10 max-w-2xl text-[0.95rem] leading-[1.8] text-white/80">
                Sprechen Sie uns an — die erste Beratung ist kostenlos und unverbindlich.
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

export default FAQ;
