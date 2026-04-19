import { useState, useEffect } from "react";
import Layout from "@/components/Layout";
import Reveal from "@/components/Reveal";
import FinalCta from "@/components/sections/FinalCta";
import { ChevronDown } from "lucide-react";

interface FaqItem {
  q: string;
  a: string;
}

interface FaqGroup {
  eyebrow: string;
  title: string;
  intro?: string;
  items: FaqItem[];
}

/**
 * Zentrale FAQ-Seite — gruppiert nach Zielgruppe / Thema.
 * Editorialer Aufbau mit Surface-Layern und ruhigen Hairline-Akkordeons.
 */
const groups: FaqGroup[] = [
  {
    eyebrow: "Eigentümer in besonderen Lagen",
    title: "Verkauf, Zwangsversteigerung, Erbe",
    intro:
      "Antworten für Eigentümer, deren Situation komplex, zeitkritisch oder festgefahren ist.",
    items: [
      {
        q: "Geht ein Verkauf auch im laufenden Zwangsversteigerungsverfahren noch?",
        a: "In vielen Fällen ja — solange der Versteigerungstermin nicht abgeschlossen ist. Ein freihändiger Verkauf kann auch in dieser Phase noch eine bessere Lösung sein als die Verwertung. Wir prüfen das kurzfristig und sagen Ihnen ehrlich, ob es realistisch ist.",
      },
      {
        q: "Wie schnell können Sie reagieren?",
        a: "Eine erste Einschätzung erhalten Sie in der Regel innerhalb weniger Tage. In dringenden Fällen schneller.",
      },
      {
        q: "Was passiert mit Mietern, falls die Immobilie vermietet ist?",
        a: "Bestehende Mietverhältnisse werden respektiert. Wir treten nach dem Kauf in die Vermieterrolle ein — an den Verträgen ändert sich nichts.",
      },
      {
        q: "Kann ich meine Immobilie behalten?",
        a: "Beim diskreten Ankauf geht die Immobilie auf Aurelia über. Wenn Sie alternative Lösungen suchen, sprechen Sie uns gerne an — wir prüfen den jeweiligen Einzelfall.",
      },
    ],
  },
  {
    eyebrow: "Käufer und Interessenten",
    title: "Ankauf, Bewertung, Abwicklung",
    intro:
      "Wie Aurelia kauft, bewertet und nach dem Ankauf weiterarbeitet.",
    items: [
      {
        q: "Was bedeutet „Ankauf auf eigene Rechnung“?",
        a: "Wir kaufen die Immobilie selbst — nicht im Auftrag Dritter. Es gibt keine Maklerprovision, keine Finanzierungsvorbehalte und keine Käuferkette, die noch entscheiden muss.",
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
        q: "Wie schnell erfolgt die Abwicklung?",
        a: "Nach Vertragsabschluss erfolgt die Abwicklung gemäß vertraglicher Vereinbarung. Genaue Zeitrahmen werden individuell festgelegt und sind abhängig von der jeweiligen Situation. Eine typische Abwicklung dauert mehrere Wochen bis Monate.",
      },
    ],
  },
  {
    eyebrow: "Geschäftspartner",
    title: "Zusammenarbeit und rechtlicher Rahmen",
    intro:
      "Hinweise zu Kooperationsformen und zur Einordnung außerhalb regulierter Finanzprodukte.",
    items: [
      {
        q: "Sind die Geschäftspartnerschaften eine Finanzanlage?",
        a: "Nein. Geschäftspartnerschaften mit Aurelia sind keine Finanzanlage und kein reguliertes Finanzprodukt. Es handelt sich um individuelle, projektbezogene Vereinbarungen mit erheblichen Risiken (bis hin zu Kapitalverlust). Details siehe Geschäftspartner-Seite.",
      },
      {
        q: "Welche Gebühren fallen an?",
        a: "Alle Gebühren werden transparent kommuniziert. Es gibt keine versteckten Kosten. Details werden in der Vereinbarung schriftlich festgehalten.",
      },
    ],
  },
  {
    eyebrow: "Allgemein",
    title: "Diskretion, Ablauf, Erstkontakt",
    items: [
      {
        q: "Ist der Prozess diskret?",
        a: "Ja. Aurelia behandelt alle Informationen vertraulich und professionell. Wir besprechen Details nur mit den beteiligten Parteien.",
      },
      {
        q: "Was passiert nach meiner ersten Anfrage?",
        a: "Sie erhalten eine erste Rückmeldung, ob und in welcher Form eine vertiefte Prüfung sinnvoll ist. Wenn die Ausgangslage grundsätzlich passt, besprechen wir die nächsten Schritte strukturiert und vertraulich.",
      },
      {
        q: "Ist die Ersteinschätzung unverbindlich?",
        a: "Ja. Die Ersteinschätzung dient dazu, die Situation realistisch einzuordnen. Sie gehen damit keine Verpflichtung ein.",
      },
    ],
  },
];

const FAQ = () => {
  // Globaler Index über alle Gruppen hinweg, damit immer nur eine Frage offen ist.
  const [open, setOpen] = useState<string | null>(null);

  useEffect(() => {
    document.title = "FAQ – Aurelia Grundbesitz GmbH";
  }, []);

  return (
    <Layout>
      {/* ─────────────────────────────────────────────────────────────
          HERO — schlank, editorial, ohne Bild
          ─────────────────────────────────────────────────────────── */}
      <section className="surface-paper section-y-base hairline-b">
        <div className="container-premium">
          <Reveal>
            <div className="max-w-3xl mx-auto text-center">
              <p className="eyebrow eyebrow--center justify-center mb-5">
                Häufige Fragen
              </p>
              <h1 className="font-heading font-medium text-primary leading-[1.12] tracking-[-0.01em] text-balance text-[1.85rem] md:text-[2.55rem] lg:text-[2.85rem]">
                Antworten auf die wichtigsten Fragen.
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-[0.96rem] md:text-[1rem] leading-[1.85] text-muted-foreground">
                Was Eigentümer, Käufer und Geschäftspartner uns am häufigsten
                fragen — gegliedert nach Zielgruppe.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <div className="page-shell">
        {/* ═══════════════════════════════════════════════════════════
            FAQ-GRUPPEN — abwechselnde Surface-Layer
            ─────────────────────────────────────────────────────────── */}
        {groups.map((group, gi) => {
          const surface =
            gi % 2 === 0 ? "surface-cream" : "bg-gradient-stone-cream";
          return (
            <section key={gi} className={`${surface} section-y-base`}>
              <div className="container-premium">
                <div className="grid gap-10 md:gap-16 lg:gap-20 md:grid-cols-12 items-start">
                  {/* Linke Spalte — Eyebrow + Headline */}
                  <Reveal>
                    <div className="md:col-span-5 md:sticky md:top-28">
                      <p className="eyebrow mb-5">{group.eyebrow}</p>
                      <h2 className="font-heading font-medium text-primary leading-[1.15] tracking-[-0.01em] text-balance text-[1.5rem] md:text-[1.95rem]">
                        {group.title}
                      </h2>
                      {group.intro && (
                        <p className="mt-5 max-w-md text-[0.95rem] leading-[1.85] text-muted-foreground">
                          {group.intro}
                        </p>
                      )}
                    </div>
                  </Reveal>

                  {/* Rechte Spalte — Hairline-Akkordeon */}
                  <div className="md:col-span-7">
                    <div className="hairline-t">
                      {group.items.map((item, ii) => {
                        const id = `${gi}-${ii}`;
                        const isOpen = open === id;
                        return (
                          <Reveal key={id} delay={ii * 0.04}>
                            <div className="hairline-b">
                              <button
                                type="button"
                                onClick={() => setOpen(isOpen ? null : id)}
                                className="w-full py-5 md:py-6 text-left flex items-start justify-between gap-6 transition-colors duration-300 hover:text-accent group"
                                aria-expanded={isOpen}
                              >
                                <h3 className="text-[0.98rem] md:text-[1.02rem] font-heading font-medium text-primary leading-snug tracking-[-0.005em] group-hover:text-accent transition-colors">
                                  {item.q}
                                </h3>
                                <ChevronDown
                                  size={18}
                                  strokeWidth={1.5}
                                  className={`text-accent shrink-0 mt-1 transition-transform duration-300 ${
                                    isOpen ? "rotate-180" : ""
                                  }`}
                                  aria-hidden="true"
                                />
                              </button>
                              {isOpen && (
                                <div className="pb-6 md:pb-7 pr-10">
                                  <p className="text-[0.92rem] md:text-[0.95rem] leading-[1.9] text-muted-foreground">
                                    {item.a}
                                  </p>
                                </div>
                              )}
                            </div>
                          </Reveal>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </section>
          );
        })}

        {/* ═══════════════════════════════════════════════════════════
            FINAL CTA — editorial Split
            ─────────────────────────────────────────────────────────── */}
        <FinalCta
          variant="split"
          eyebrow="Noch offene Fragen?"
          title="Sprechen Sie uns vertraulich an."
          text="Wenn Sie Ihre Frage hier nicht beantwortet finden, beantworten wir sie gern persönlich — diskret, ohne Verpflichtung und mit ehrlicher Einordnung."
          buttonLabel="Vertraulich anfragen"
          buttonTo="/kontakt"
        />
      </div>
    </Layout>
  );
};

export default FAQ;
