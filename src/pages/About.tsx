import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import ceoImg from "@/assets/about-ceo.jpg";
import heroImg from "@/assets/hero-building.jpg";
import { useLanguage } from "@/i18n/LanguageContext";

const About = () => {
  const { t } = useLanguage();

  return (
    <Layout>
      {/* Page Hero */}
      <section className="relative py-28">
        <div className="absolute inset-0">
          <img src={heroImg} alt={t.about.heroTitle} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-primary/70" />
        </div>
        <div className="relative container">
          <div className="w-12 h-0.5 bg-accent mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground">{t.about.heroTitle}</h1>
        </div>
      </section>

      {/* Company */}
      <section className="py-24">
        <div className="container max-w-4xl">
          <SectionHeading title={t.about.companyTitle} />
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>{t.about.companyP1}</p>
            <p>{t.about.companyP2}</p>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-20 bg-secondary">
        <div className="container max-w-4xl">
          <SectionHeading title={t.about.philosophyTitle} />
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>{t.about.philosophyP1}</p>
            <p>{t.about.philosophyP2}</p>
          </div>
        </div>
      </section>

      {/* Team & Erfahrung */}
      <section className="py-24">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-16 items-center max-w-5xl mx-auto">
            <div>
              <img src={ceoImg} alt={t.about.experienceTitle} className="w-full h-96 object-cover" />
            </div>
            <div>
              <SectionHeading title={t.about.experienceTitle} />
              <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
                <p>{t.about.experienceP1}</p>
                <p>{t.about.experienceP2}</p>
                <p>{t.about.experienceP3}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
