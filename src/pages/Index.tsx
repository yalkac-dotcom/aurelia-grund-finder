import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import heroImg from "@/assets/hero-building.jpg";
import renovationImg from "@/assets/renovation.jpg";
import portfolioImg from "@/assets/portfolio.jpg";
import { Building2, TrendingUp, Shield, ArrowRight } from "lucide-react";

const Index = () => (
  <Layout>
    {/* Hero */}
    <section className="relative h-[70vh] min-h-[500px] flex items-center">
      <div className="absolute inset-0">
        <img src={heroImg} alt="Immobilie Fassade" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-primary/60" />
      </div>
      <div className="relative container">
        <div className="max-w-2xl">
          <div className="w-12 h-0.5 bg-accent mb-6" />
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
            Werte schaffen aus besonderen Situationen
          </h1>
          <p className="text-primary-foreground/80 text-lg md:text-xl leading-relaxed mb-8">
            Immobilieninvestments aus Zwangsversteigerungen, Nachlässen und Insolvenzen – mit Erfahrung, Sorgfalt und Weitblick.
          </p>
          <Link
            to="/ueber-uns"
            className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 text-sm font-medium tracking-wide hover:opacity-90 transition-opacity"
          >
            Mehr erfahren
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>

    {/* Intro */}
    <section className="py-24">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <SectionHeading
            title="Aurelia Grundbesitz GmbH"
            subtitle="Seit 2023 verfolgt Aurelia Grundbesitz einen klaren, langfristigen Ansatz: Wertschöpfung durch intelligente Ankaufsstrategien, solide Strukturierung und hochwertige Entwicklung."
            align="center"
          />
        </div>
      </div>
    </section>

    {/* Three pillars */}
    <section className="py-20 bg-secondary">
      <div className="container">
        <SectionHeading title="Unser Ansatz" align="center" />
        <div className="grid md:grid-cols-3 gap-8 mt-4">
          {[
            {
              icon: Building2,
              title: "Besondere Objekte",
              text: "Wohn- und Mischobjekte aus Zwangsversteigerungen, Nachlässen und Insolvenzen.",
            },
            {
              icon: Shield,
              title: "Bestand & Vermietung",
              text: "Langfristiger Bestandsaufbau mit professioneller Bewirtschaftung und stabilen Mieteinnahmen.",
            },
            {
              icon: TrendingUp,
              title: "Sanierung & Verkauf",
              text: "Umfassende Renovierung und werthaltige Veräußerung mit klarem Entwicklungskonzept.",
            },
          ].map((item) => (
            <div key={item.title} className="bg-card p-8 border border-border">
              <item.icon className="text-accent mb-4" size={28} />
              <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Image + Text split */}
    <section className="py-24">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <img src={renovationImg} alt="Sanierte Wohnung" className="w-full h-80 object-cover" />
          </div>
          <div>
            <SectionHeading
              title="Intelligente Ankaufsstrategien"
              subtitle="Wir konzentrieren uns auf Immobilien, die unter Zeitdruck oder in komplexen Konstellationen veräußert werden. Mit einem klaren Blick für Potenziale entwickeln wir passende Konzepte."
            />
            <Link
              to="/leistungen"
              className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:underline"
            >
              Unsere Leistungen
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </section>

    {/* Portfolio teaser */}
    <section className="relative py-24">
      <div className="absolute inset-0">
        <img src={portfolioImg} alt="Wohngebiet" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-primary/70" />
      </div>
      <div className="relative container text-center">
        <div className="max-w-2xl mx-auto">
          <div className="w-12 h-0.5 bg-accent mb-6 mx-auto" />
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Standortfokus Deutschland
          </h2>
          <p className="text-primary-foreground/80 text-lg leading-relaxed mb-8">
            Wir investieren an wertstabilen Standorten in ganz Deutschland – mit besonderem Augenmerk auf Lagen mit nachhaltigem Entwicklungspotenzial.
          </p>
          <Link
            to="/kontakt"
            className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 text-sm font-medium tracking-wide hover:opacity-90 transition-opacity"
          >
            Kontakt aufnehmen
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  </Layout>
);

export default Index;
