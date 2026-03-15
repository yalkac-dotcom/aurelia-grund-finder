import Layout from "@/components/Layout";
import heroImg from "@/assets/hero-building.jpg";
import { useLanguage } from "@/i18n/LanguageContext";

const Impressum = () => {
  const { t } = useLanguage();
  const imp = t.impressum;

  return (
    <Layout>
      <section className="relative py-28">
        <div className="absolute inset-0">
          <img src={heroImg} alt={imp.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-primary/70" />
        </div>
        <div className="relative container text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground">{imp.title}</h1>
          <div className="w-16 h-0.5 bg-accent mx-auto mt-6" />
        </div>
      </section>

      <section className="py-24">
        <div className="container max-w-3xl">
          <div className="space-y-8 text-muted-foreground text-sm leading-relaxed">
            <div>
              <h2 className="text-xl font-bold text-foreground mb-3">{imp.tmbTitle}</h2>
              <p>
                Aurelia Grundbesitz GmbH<br />
                Grevenbroicher Weg 2<br />
                40547 Düsseldorf, Germany
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-foreground mb-2">{imp.representedByTitle}</h3>
              <p>{imp.representedByText}</p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-foreground mb-2">{imp.contactTitle}</h3>
              <p className="whitespace-pre-line">{imp.contactText}</p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-foreground mb-2">{imp.registerTitle}</h3>
              <p className="whitespace-pre-line">{imp.registerText}</p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-foreground mb-2">{imp.disclaimerTitle}</h3>
              <p>{imp.disclaimerText}</p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-foreground mb-2">{imp.copyrightTitle}</h3>
              <p>{imp.copyrightText}</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Impressum;
