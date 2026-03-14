import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import portfolioImg from "@/assets/portfolio.jpg";
import { Landmark, Leaf, Banknote, BadgePercent } from "lucide-react";

const benefits = [
  {
    icon: BadgePercent,
    area: "Steuern",
    instrument: "AfA & Erhaltungsaufwand",
    benefit: "Laufende Steuerersparnis bei Vermietung",
  },
  {
    icon: Leaf,
    area: "Steuern",
    instrument: "Steuerermäßigungen bei energetischen Maßnahmen",
    benefit: "Zusätzliche Entlastung",
  },
  {
    icon: Landmark,
    area: "Förderung",
    instrument: "KfW – Kredite + Zuschuss",
    benefit: "Niedrigere Finanzierungskosten",
  },
  {
    icon: Banknote,
    area: "Förderung",
    instrument: "BAFA – Zuschüsse",
    benefit: "Direkte Reduzierung der Investitionskosten",
  },
];

const TaxBenefits = () => (
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

    {/* Benefits grid */}
    <section className="py-20 bg-secondary">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-8">
          {benefits.map((b) => (
            <div key={b.instrument} className="bg-card p-8 border border-border">
              <div className="flex items-center gap-3 mb-4">
                <b.icon className="text-accent" size={24} />
                <span className="text-xs font-medium uppercase tracking-widest text-accent">{b.area}</span>
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{b.instrument}</h3>
              <p className="text-muted-foreground text-sm">{b.benefit}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Table */}
    <section className="py-24">
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
              {benefits.map((b) => (
                <tr key={b.instrument} className="border-b border-border">
                  <td className="py-3 pr-4 text-muted-foreground">{b.area}</td>
                  <td className="py-3 pr-4 text-foreground">{b.instrument}</td>
                  <td className="py-3 text-muted-foreground">{b.benefit}</td>
                </tr>
              ))}
            </tbody>
          </table>
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

export default TaxBenefits;
