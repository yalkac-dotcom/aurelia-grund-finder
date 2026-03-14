import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import heroImg from "@/assets/hero-kfw.jpg";
import { Landmark, ExternalLink, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const sections = [
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
];

const links = [
  { label: "KfW-Förderbank", url: "https://www.kfw.de" },
  { label: "KfW-Produktfinder", url: "https://www.kfw.de/inlandsfoerderung/Privatpersonen/" },
];

const KfwPage = () => (
  <Layout>
    <section className="relative py-28">
      <div className="absolute inset-0">
        <img src={heroImg} alt="KfW Förderbank" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-primary/70" />
      </div>
      <div className="relative container">
        <div className="w-12 h-0.5 bg-accent mb-6" />
        <div className="flex items-center gap-3 mb-4">
          <Landmark className="text-accent" size={32} />
          <span className="text-xs font-medium uppercase tracking-widest text-accent">Förderung</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground">KfW – Kredite & Zuschüsse</h1>
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
        <SectionHeading title="Niedrigere Finanzierungskosten" />
        <p className="text-muted-foreground leading-relaxed mb-12 text-lg">
          Die KfW (Kreditanstalt für Wiederaufbau) bietet zinsgünstige Kredite und Zuschüsse für energieeffizientes Bauen und Sanieren. Die Programme sind ein zentraler Baustein der staatlichen Förderung im Immobilienbereich.
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

export default KfwPage;
