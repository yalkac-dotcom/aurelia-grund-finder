import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import heroImg from "@/assets/hero-building.jpg";
import ankaufImg from "@/assets/ankauf-strategie.jpg";
import portfolioImg from "@/assets/portfolio.jpg";
import { Building2, TrendingUp, Shield, ArrowRight, CheckCircle } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const Index = () => {
  const { t } = useLanguage();

  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-[75vh] min-h-[540px] flex items-center">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Immobilie Fassade" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-primary/65" />
        </div>
        <div className="relative container">
          <div className="max-w-2xl">
            <div className="w-12 h-0.5 bg-accent mb-6" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
              {t.hero.slogan}
            </h1>
            <p className="text-primary-foreground/80 text-lg md:text-xl leading-relaxed mb-8">
              {t.hero.subtitle}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/kontakt"
                className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 text-sm font-medium tracking-wide rounded hover:opacity-90 transition-opacity"
              >
                {t.hero.cta}
                <ArrowRight size={16} />
              </Link>
              <Link
                to="/ueber-uns"
                className="inline-flex items-center gap-2 border border-primary-foreground/40 text-primary-foreground px-6 py-3 text-sm font-medium tracking-wide rounded hover:bg-primary-foreground/10 transition-colors"
              >
                {t.hero.ctaSecondary}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Bulletpoints */}
      <section className="py-20">
        <div className="container max-w-4xl">
          <SectionHeading title={t.index.bulletTitle} align="center" />
          <ul className="grid sm:grid-cols-2 gap-6 mt-8">
            {t.index.bullets.map((bp) => (
              <li key={bp} className="flex items-start gap-3">
                <CheckCircle className="text-accent shrink-0 mt-0.5" size={20} />
                <span className="text-muted-foreground leading-relaxed">{bp}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Three pillars */}
      <section className="py-20 bg-secondary">
        <div className="container">
          <SectionHeading title={t.index.approachTitle} align="center" />
          <div className="grid md:grid-cols-3 gap-8 mt-4">
            {[Building2, Shield, TrendingUp].map((Icon, i) => (
              <div key={t.index.pillars[i].title} className="bg-card p-8 border border-border">
                <Icon className="text-accent mb-4" size={28} />
                <h3 className="text-lg font-bold text-foreground mb-2">{t.index.pillars[i].title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{t.index.pillars[i].text}</p>
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
              <img src={ankaufImg} alt={t.index.strategyTitle} className="w-full h-80 object-cover rounded" />
            </div>
            <div>
              <SectionHeading title={t.index.strategyTitle} subtitle={t.index.strategySubtitle} />
              <Link
                to="/leistungen"
                className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:underline"
              >
                {t.index.ourServices}
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio teaser */}
      <section className="relative py-24">
        <div className="absolute inset-0">
          <img src={portfolioImg} alt={t.index.locationTitle} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-primary/70" />
        </div>
        <div className="relative container text-center">
          <div className="max-w-2xl mx-auto">
            <div className="w-12 h-0.5 bg-accent mb-6 mx-auto" />
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">{t.index.locationTitle}</h2>
            <p className="text-primary-foreground/80 text-lg leading-relaxed mb-8">
              {t.index.locationText}
            </p>
            <Link
              to="/kontakt"
              className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 text-sm font-medium tracking-wide rounded hover:opacity-90 transition-opacity"
            >
              {t.index.contactCta}
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
