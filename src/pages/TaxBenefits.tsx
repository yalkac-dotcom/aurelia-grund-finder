import { useState } from "react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import portfolioImg from "@/assets/portfolio.jpg";
import { Landmark, Leaf, Banknote, BadgePercent, BookOpen, ChevronRight } from "lucide-react";

const topics = [
  {
    id: "afa",
    category: "Steuern",
    icon: BadgePercent,
    title: "AfA & Erhaltungsaufwand",
    shortDesc: "Laufende Steuerersparnis bei Vermietung",
    links: [
      { label: "Bundesfinanzministerium", url: "https://www.bundesfinanzministerium.de" },
      { label: "Finanzamt (Elster)", url: "https://www.elster.de" },
    ],
    content: {
      intro:
        "Die Absetzung für Abnutzung (AfA) und der Erhaltungsaufwand sind zentrale steuerliche Instrumente für Immobilieneigentümer, die ihre Steuerlast nachhaltig senken möchten.",
      sections: [
        {
          heading: "Lineare AfA",
          text: "Vermieter können die Anschaffungs- und Herstellungskosten eines Gebäudes über die Nutzungsdauer linear abschreiben. Für Gebäude, die nach 2023 fertiggestellt werden, beträgt der AfA-Satz 3 % p. a. über ca. 33 Jahre. Für ältere Bestandsgebäude gilt in der Regel ein Satz von 2 % über 50 Jahre. Die AfA mindert das zu versteuernde Einkommen und führt so zu einer jährlichen Steuerentlastung – ohne tatsächlichen Liquiditätsabfluss.",
        },
        {
          heading: "Sonder-AfA nach § 7b EStG",
          text: "Für neu geschaffenen Mietwohnraum kann unter bestimmten Voraussetzungen eine zusätzliche Sonderabschreibung von 5 % p. a. in den ersten vier Jahren geltend gemacht werden. Voraussetzung: Die Baukosten dürfen 5.200 €/m² Wohnfläche nicht übersteigen, und die Wohnung muss mindestens 10 Jahre vermietet werden.",
        },
        {
          heading: "Erhaltungsaufwand",
          text: "Aufwendungen für Reparaturen, Instandhaltung und kleinere Modernisierungen (z. B. neuer Bodenbelag, Malerarbeiten, Heizungswartung) können als Erhaltungsaufwand sofort in voller Höhe als Werbungskosten abgezogen werden. Alternativ ist eine Verteilung auf bis zu fünf Jahre möglich (§ 82b EStDV), was bei größeren Maßnahmen steuerlich vorteilhaft sein kann.",
        },
        {
          heading: "Abgrenzung zum Herstellungsaufwand",
          text: "Wichtig: Werden durch Baumaßnahmen wesentliche Verbesserungen vorgenommen oder der Nutzungszweck geändert, handelt es sich um Herstellungsaufwand, der nur über die AfA abgeschrieben werden kann. Die Abgrenzung ist im Einzelfall komplex und sollte mit einem Steuerberater geklärt werden.",
        },
      ],
    },
  },
  {
    id: "energetisch",
    category: "Steuern",
    icon: Leaf,
    title: "Steuerermäßigungen bei energetischen Maßnahmen",
    shortDesc: "Zusätzliche Entlastung",
    content: {
      intro:
        "Seit 2020 können Eigentümer, die ihr selbstgenutztes Wohngebäude energetisch sanieren, erhebliche Steuerermäßigungen nach § 35c EStG in Anspruch nehmen.",
      sections: [
        {
          heading: "Förderfähige Maßnahmen",
          text: "Dazu zählen u. a. Wärmedämmung von Wänden, Dachflächen und Geschossdecken, Erneuerung von Fenstern und Außentüren, Erneuerung oder Einbau einer Lüftungsanlage, Erneuerung der Heizungsanlage sowie der Einbau digitaler Systeme zur Verbrauchsoptimierung.",
        },
        {
          heading: "Höhe der Steuerermäßigung",
          text: "Insgesamt können bis zu 20 % der Aufwendungen (max. 40.000 € je Objekt) über drei Jahre verteilt direkt von der Steuerschuld abgezogen werden: Im 1. und 2. Jahr jeweils 7 % (max. 14.000 €), im 3. Jahr 6 % (max. 12.000 €).",
        },
        {
          heading: "Voraussetzungen",
          text: "Das Gebäude muss bei Beginn der Maßnahme mindestens 10 Jahre alt sein. Die Arbeiten müssen von einem Fachunternehmen ausgeführt werden, und es ist eine Bescheinigung nach amtlichem Muster erforderlich. Eine Kombination mit anderen Förderprogrammen (z. B. KfW oder BAFA) für dieselbe Maßnahme ist nicht möglich.",
        },
      ],
    },
  },
  {
    id: "kfw",
    category: "Förderung",
    icon: Landmark,
    title: "KfW – Kredite & Zuschüsse",
    shortDesc: "Niedrigere Finanzierungskosten",
    content: {
      intro:
        "Die KfW (Kreditanstalt für Wiederaufbau) bietet zinsgünstige Kredite und Zuschüsse für energieeffizientes Bauen und Sanieren. Die Programme sind ein zentraler Baustein der staatlichen Förderung im Immobilienbereich.",
      sections: [
        {
          heading: "KfW-Programm 261/262 – Bundesförderung für effiziente Gebäude (BEG)",
          text: "Für die Sanierung zum Effizienzhaus oder den Neubau eines Effizienzhauses stehen zinsgünstige Kredite bis zu 150.000 € je Wohneinheit zur Verfügung. Je nach erreichtem Effizienzhaus-Standard wird zusätzlich ein Tilgungszuschuss von 5–25 % gewährt.",
        },
        {
          heading: "KfW-Programm 124 – Wohneigentumsprogramm",
          text: "Für den Kauf oder Bau von selbstgenutztem Wohneigentum können Kredite bis zu 100.000 € mit besonders günstigen Zinssätzen beantragt werden.",
        },
        {
          heading: "KfW-Programm 300 – Klimafreundlicher Neubau",
          text: "Seit 2023 fördert die KfW den Neubau klimafreundlicher Wohngebäude mit zinsgünstigen Krediten bis 150.000 € je Wohneinheit. Voraussetzung ist die Einhaltung bestimmter CO₂-Grenzwerte und Energieeffizienzstandards.",
        },
        {
          heading: "Antragstellung",
          text: "KfW-Kredite werden über die Hausbank beantragt – der Antrag muss vor Beginn der Maßnahme gestellt werden. Die Kombination mehrerer Programme ist unter bestimmten Bedingungen möglich.",
        },
      ],
    },
  },
  {
    id: "bafa",
    category: "Förderung",
    icon: Banknote,
    title: "BAFA – Zuschüsse",
    shortDesc: "Direkte Reduzierung der Investitionskosten",
    content: {
      intro:
        "Das Bundesamt für Wirtschaft und Ausfuhrkontrolle (BAFA) fördert Einzelmaßnahmen zur energetischen Sanierung mit direkten Zuschüssen – ohne Kreditverpflichtung.",
      sections: [
        {
          heading: "Förderfähige Einzelmaßnahmen",
          text: "Gefördert werden u. a. Heizungsoptimierung und -austausch (z. B. Wärmepumpe, Biomasseheizung), Gebäudedämmung (Fassade, Dach, Kellerdecke), Fenster- und Türentausch sowie Lüftungsanlagen mit Wärmerückgewinnung.",
        },
        {
          heading: "Förderhöhe",
          text: "Die Zuschüsse betragen je nach Maßnahme 15–70 % der förderfähigen Kosten. Besonders attraktiv: Beim Austausch alter Öl- oder Gasheizungen gegen Wärmepumpen können Zuschüsse von bis zu 70 % erreicht werden (Grundförderung + Klimageschwindigkeitsbonus + Einkommensbonus).",
        },
        {
          heading: "iSFP-Bonus",
          text: "Wer einen individuellen Sanierungsfahrplan (iSFP) erstellen lässt, erhält einen zusätzlichen Bonus von 5 Prozentpunkten auf die Förderung der darin empfohlenen Maßnahmen.",
        },
        {
          heading: "Antragstellung",
          text: "Der Antrag wird online beim BAFA gestellt – ebenfalls vor Beginn der Maßnahme. Ein Energieberater muss eingebunden werden, dessen Kosten ebenfalls zu 50 % gefördert werden.",
        },
      ],
    },
  },
];

const glossary = [
  { term: "AfA", definition: "Absetzung für Abnutzung – die steuerliche Abschreibung von Anschaffungs- und Herstellungskosten eines Gebäudes über dessen Nutzungsdauer." },
  { term: "BAFA", definition: "Bundesamt für Wirtschaft und Ausfuhrkontrolle – zuständig für direkte Zuschüsse bei energetischen Einzelmaßnahmen." },
  { term: "BEG", definition: "Bundesförderung für effiziente Gebäude – das übergreifende Förderprogramm für energieeffizientes Bauen und Sanieren in Deutschland." },
  { term: "Effizienzhaus", definition: "Ein energetischer Standard der KfW, der angibt, wie viel Energie ein Gebäude im Vergleich zu einem Referenzgebäude verbraucht (z. B. Effizienzhaus 55 = 55 % des Referenzwerts)." },
  { term: "Erhaltungsaufwand", definition: "Ausgaben für Reparaturen und Instandhaltung, die das Gebäude in einem ordnungsgemäßen Zustand erhalten. Steuerlich sofort als Werbungskosten abziehbar." },
  { term: "Herstellungsaufwand", definition: "Ausgaben, die zu einer wesentlichen Verbesserung oder Erweiterung des Gebäudes führen. Müssen über die AfA abgeschrieben werden." },
  { term: "iSFP", definition: "Individueller Sanierungsfahrplan – ein Dokument, das den energetischen Ist-Zustand eines Gebäudes analysiert und eine schrittweise Sanierungsstrategie empfiehlt." },
  { term: "KfW", definition: "Kreditanstalt für Wiederaufbau – staatliche Förderbank, die zinsgünstige Kredite und Tilgungszuschüsse für Bau- und Sanierungsvorhaben vergibt." },
  { term: "Sonder-AfA", definition: "Zusätzliche Abschreibungsmöglichkeit nach § 7b EStG für neu geschaffenen Mietwohnraum unter bestimmten Voraussetzungen." },
  { term: "Tilgungszuschuss", definition: "Ein Teil des KfW-Kredits, der nicht zurückgezahlt werden muss – abhängig vom erreichten Effizienzhaus-Standard." },
  { term: "Werbungskosten", definition: "Ausgaben, die im Zusammenhang mit der Erzielung von Einkünften stehen (z. B. Vermietung). Sie mindern das zu versteuernde Einkommen." },
];

const TaxBenefits = () => {
  const [activeTopic, setActiveTopic] = useState<string | null>(null);

  return (
    <Layout>
      {/* Page Hero */}
      <section className="relative py-28">
        <div className="absolute inset-0">
          <img src={portfolioImg} alt="Standort" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-primary/70" />
        </div>
        <div className="relative container">
          <div className="w-12 h-0.5 bg-accent mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground">Steuervorteile & Förderungen</h1>
        </div>
      </section>

      {/* Intro */}
      <section className="py-24">
        <div className="container max-w-4xl">
          <SectionHeading
            title="Vorteile für Investoren"
            subtitle="Immobilieninvestments bieten in Deutschland zahlreiche steuerliche und förderungstechnische Vorteile, die bei strategischer Planung erhebliche Renditevorteile ermöglichen."
          />
        </div>
      </section>

      {/* Topic Cards */}
      <section className="py-20 bg-secondary">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8">
            {topics.map((t) => {
              const isActive = activeTopic === t.id;
              return (
                <button
                  key={t.id}
                  onClick={() => setActiveTopic(isActive ? null : t.id)}
                  className={`text-left bg-card p-8 border transition-all group ${
                    isActive
                      ? "border-accent shadow-lg"
                      : "border-border hover:border-accent/50"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 mb-4">
                      <t.icon className="text-accent" size={24} />
                      <span className="text-xs font-medium uppercase tracking-widest text-accent">
                        {t.category}
                      </span>
                    </div>
                    <ChevronRight
                      className={`text-accent transition-transform ${isActive ? "rotate-90" : "group-hover:translate-x-1"}`}
                      size={18}
                    />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{t.title}</h3>
                  <p className="text-muted-foreground text-sm">{t.shortDesc}</p>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Detail Section */}
      {activeTopic && (
        <section className="py-24 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="container max-w-4xl">
            {topics
              .filter((t) => t.id === activeTopic)
              .map((t) => (
                <div key={t.id}>
                  <div className="flex items-center gap-3 mb-6">
                    <t.icon className="text-accent" size={28} />
                    <SectionHeading title={t.title} />
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-12 text-lg">
                    {t.content.intro}
                  </p>
                  <div className="space-y-10">
                    {t.content.sections.map((s) => (
                      <div key={s.heading} className="border-l-2 border-accent pl-6">
                        <h4 className="text-base font-bold text-foreground mb-2">{s.heading}</h4>
                        <p className="text-muted-foreground text-sm leading-relaxed">{s.text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
          </div>
        </section>
      )}

      {/* Overview Table */}
      <section className="py-24 bg-secondary">
        <div className="container max-w-4xl">
          <SectionHeading title="Übersicht" />
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-accent">
                  <th className="text-left py-3 pr-4 font-medium text-foreground">Bereich</th>
                  <th className="text-left py-3 pr-4 font-medium text-foreground">Instrument</th>
                  <th className="text-left py-3 font-medium text-foreground">Nutzen für Investoren</th>
                </tr>
              </thead>
              <tbody>
                {topics.map((t) => (
                  <tr
                    key={t.id}
                    className="border-b border-border cursor-pointer hover:bg-accent/5 transition-colors"
                    onClick={() => setActiveTopic(t.id)}
                  >
                    <td className="py-3 pr-4 text-muted-foreground">{t.category}</td>
                    <td className="py-3 pr-4 text-foreground font-medium">{t.title}</td>
                    <td className="py-3 text-muted-foreground">{t.shortDesc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Glossar */}
      <section className="py-24">
        <div className="container max-w-4xl">
          <div className="flex items-center gap-3 mb-12">
            <BookOpen className="text-accent" size={28} />
            <SectionHeading title="Glossar" subtitle="Wichtige Begriffe rund um Steuervorteile und Förderungen im Immobilienbereich." />
          </div>
          <div className="space-y-0">
            {glossary.map((g, i) => (
              <div
                key={g.term}
                className={`grid grid-cols-[140px_1fr] md:grid-cols-[180px_1fr] gap-4 py-4 ${
                  i < glossary.length - 1 ? "border-b border-border" : ""
                }`}
              >
                <dt className="font-bold text-foreground text-sm">{g.term}</dt>
                <dd className="text-muted-foreground text-sm leading-relaxed">{g.definition}</dd>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="pb-24">
        <div className="container max-w-4xl">
          <p className="text-xs text-muted-foreground italic leading-relaxed bg-secondary p-6 border border-border rounded">
            Steuerliche Auswirkungen hängen stark vom Einzelfall ab. Die hier dargestellten Informationen
            ersetzen keine individuelle Beratung durch einen Steuerberater. Eine qualifizierte steuerliche
            Beratung ist vor jeder Investitionsentscheidung unerlässlich.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default TaxBenefits;
