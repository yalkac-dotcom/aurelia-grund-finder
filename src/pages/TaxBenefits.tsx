import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import heroImg from "@/assets/hero-steuervorteile.jpg";
import { Landmark, Leaf, Banknote, BadgePercent, BookOpen, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const topics = [
  {
    id: "afa",
    category: "Steuern",
    icon: BadgePercent,
    title: "AfA & Erhaltungsaufwand",
    shortDesc: "Laufende Steuerersparnis bei Vermietung",
    path: "/steuervorteile/afa",
  },
  {
    id: "energetisch",
    category: "Steuern",
    icon: Leaf,
    title: "Steuerermäßigungen bei energetischen Maßnahmen",
    shortDesc: "Zusätzliche Entlastung",
    path: "/steuervorteile/energetisch",
  },
  {
    id: "kfw",
    category: "Förderung",
    icon: Landmark,
    title: "KfW – Kredite & Zuschüsse",
    shortDesc: "Niedrigere Finanzierungskosten",
    path: "/steuervorteile/kfw",
  },
  {
    id: "bafa",
    category: "Förderung",
    icon: Banknote,
    title: "BAFA – Zuschüsse",
    shortDesc: "Direkte Reduzierung der Investitionskosten",
    path: "/steuervorteile/bafa",
  },
];

const TaxBenefits = () => {
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
            {topics.map((t) => (
              <Link
                key={t.id}
                to={t.path}
                className="text-left bg-card p-8 border border-border hover:border-accent/50 transition-all group"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3 mb-4">
                    <t.icon className="text-accent" size={24} />
                    <span className="text-xs font-medium uppercase tracking-widest text-accent">
                      {t.category}
                    </span>
                  </div>
                  <ChevronRight
                    className="text-accent transition-transform group-hover:translate-x-1"
                    size={18}
                  />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{t.title}</h3>
                <p className="text-muted-foreground text-sm">{t.shortDesc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

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
                  <tr key={t.id} className="border-b border-border">
                    <td className="py-3 pr-4 text-muted-foreground">{t.category}</td>
                    <td className="py-3 pr-4">
                      <Link to={t.path} className="text-foreground font-medium hover:text-accent transition-colors">
                        {t.title}
                      </Link>
                    </td>
                    <td className="py-3 text-muted-foreground">{t.shortDesc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Glossar Link */}
      <section className="py-24">
        <div className="container max-w-4xl">
          <Link
            to="/steuervorteile/glossar"
            className="flex items-center justify-between bg-card p-8 border border-border hover:border-accent/50 transition-all group"
          >
            <div className="flex items-center gap-4">
              <BookOpen className="text-accent" size={28} />
              <div>
                <h3 className="text-lg font-bold text-foreground">Glossar</h3>
                <p className="text-muted-foreground text-sm">Wichtige Begriffe rund um Steuervorteile und Förderungen im Immobilienbereich.</p>
              </div>
            </div>
            <ChevronRight className="text-accent transition-transform group-hover:translate-x-1" size={18} />
          </Link>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="pb-24">
        <div className="container max-w-4xl space-y-4">
          <p className="text-xs text-muted-foreground italic leading-relaxed bg-secondary p-6 border border-border rounded">
            Steuerliche Auswirkungen hängen stark vom Einzelfall ab. Die hier dargestellten Informationen
            ersetzen keine individuelle Beratung durch einen Steuerberater. Eine qualifizierte steuerliche
            Beratung ist vor jeder Investitionsentscheidung unerlässlich.
          </p>
          <p className="text-xs text-muted-foreground italic leading-relaxed bg-secondary p-6 border border-border rounded">
            <strong className="text-foreground">Haftungsausschluss für externe Links:</strong> Diese Website enthält Verknüpfungen zu Websites Dritter (externe Links). Diese Websites unterliegen der Haftung der jeweiligen Betreiber. Bei der erstmaligen Verknüpfung wurden die fremden Inhalte daraufhin überprüft, ob etwaige Rechtsverstöße bestehen. Zu dem Zeitpunkt waren keine Rechtsverstöße ersichtlich. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden derartige externe Links unverzüglich entfernt.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default TaxBenefits;
