import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import heroImg from "@/assets/hero-energetisch.jpg";
import { Leaf, ExternalLink, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const sections = [
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
];

const links = [
  { label: "Bundesfinanzministerium", url: "https://www.bundesfinanzministerium.de" },
  { label: "BMWi – Energieeffizienz", url: "https://www.energiewechsel.de" },
];

const EnergetischPage = () => (
  <Layout>
    <section className="relative py-28">
      <div className="absolute inset-0">
        <img src={heroImg} alt="Energetische Maßnahmen" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-primary/70" />
      </div>
      <div className="relative container">
        <div className="w-12 h-0.5 bg-accent mb-6" />
        <div className="flex items-center gap-3 mb-4">
          <Leaf className="text-accent" size={32} />
          <span className="text-xs font-medium uppercase tracking-widest text-accent">Steuern</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground">Steuerermäßigungen bei energetischen Maßnahmen</h1>
      </div>
    </section>

    <section className="py-6">
      <div className="container max-w-4xl">
        <Link to="/steuervorteile" className="inline-flex items-center gap-2 text-sm text-accent hover:text-accent/80 transition-colors">
          <ArrowLeft size={16} />
          Zurück zur Übersicht
        </Link>
      </div>
    </section>

    <section className="py-16">
      <div className="container max-w-4xl">
        <SectionHeading title="Zusätzliche Entlastung" />
        <p className="text-muted-foreground leading-relaxed mb-12 text-lg">
          Seit 2020 können Eigentümer, die ihr selbstgenutztes Wohngebäude energetisch sanieren, erhebliche Steuerermäßigungen nach § 35c EStG in Anspruch nehmen.
        </p>
        <div className="space-y-10">
          {sections.map((s) => (
            <div key={s.heading} className="border-l-2 border-accent pl-6">
              <h3 className="text-base font-bold text-foreground mb-2">{s.heading}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-16 bg-secondary">
      <div className="container max-w-4xl">
        <h3 className="text-sm font-bold text-foreground mb-4">Weiterführende Links</h3>
        <div className="flex flex-wrap gap-4 mb-6">
          {links.map((link) => (
            <a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-accent hover:text-accent/80 underline underline-offset-4 transition-colors">
              <ExternalLink size={14} />
              {link.label}
            </a>
          ))}
        </div>
        <p className="text-xs text-muted-foreground italic leading-relaxed">
          Haftungsausschluss: Die vorstehenden Links führen zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber verantwortlich. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
        </p>
      </div>
    </section>

    <section className="pb-16">
      <div className="container max-w-4xl">
        <p className="text-xs text-muted-foreground italic leading-relaxed bg-secondary p-6 border border-border rounded mt-16">
          Steuerliche Auswirkungen hängen stark vom Einzelfall ab. Die hier dargestellten Informationen ersetzen keine individuelle Beratung durch einen Steuerberater. Eine qualifizierte steuerliche Beratung ist vor jeder Investitionsentscheidung unerlässlich.
        </p>
      </div>
    </section>
  </Layout>
);

export default EnergetischPage;
