import Layout from "@/components/Layout";
import Reveal from "@/components/Reveal";
import OptimizedImg from "@/components/OptimizedImg";
import heroImg from "@/assets/hero-building.jpg";
import { useLanguage } from "@/i18n/LanguageContext";

const Impressum = () => {
  const { t } = useLanguage();
  const imp = t.impressum;

  return (
    <Layout>
      <section className="relative h-[45vh] min-h-[320px] flex items-end">
        <div className="absolute inset-0">
          <OptimizedImg src={heroImg} alt={imp.title} className="w-full h-full object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F1113]/70 via-[#0F1113]/25 to-transparent" />
        </div>
        <div className="relative container pb-16 md:pb-24">
          <Reveal>
            <h1 className="text-[2.25rem] md:text-[3rem] font-heading font-semibold text-white leading-[1.1]">
              {imp.title}
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="py-28 md:py-36">
        <div className="container max-w-3xl">
          <div className="divide-y divide-border/60">
            <Reveal>
              <div className="pb-10">
                <h2 className="text-[1.1rem] font-heading font-semibold text-foreground mb-4">{imp.tmbTitle}</h2>
                <p className="text-muted-foreground text-[0.9rem] leading-[1.85]">
                  Aurelia Grundbesitz GmbH<br />
                  Grevenbroicher Weg 2<br />
                  40547 Düsseldorf, Germany
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.05}>
              <div className="py-10">
                <h3 className="text-[1.05rem] font-heading font-semibold text-foreground mb-3">{imp.representedByTitle}</h3>
                <p className="text-muted-foreground text-[0.9rem] leading-[1.85]">{imp.representedByText}</p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="py-10">
                <h3 className="text-[1.05rem] font-heading font-semibold text-foreground mb-3">{imp.contactTitle}</h3>
                <p className="text-muted-foreground text-[0.9rem] leading-[1.85] whitespace-pre-line">{imp.contactText}</p>
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="py-10">
                <h3 className="text-[1.05rem] font-heading font-semibold text-foreground mb-3">{imp.registerTitle}</h3>
                <p className="text-muted-foreground text-[0.9rem] leading-[1.85] whitespace-pre-line">{imp.registerText}</p>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="py-10">
                <h3 className="text-[1.05rem] font-heading font-semibold text-foreground mb-3">{imp.disclaimerTitle}</h3>
                <p className="text-muted-foreground text-[0.9rem] leading-[1.85]">{imp.disclaimerText}</p>
              </div>
            </Reveal>
            <Reveal delay={0.25}>
              <div className="pt-10">
                <h3 className="text-[1.05rem] font-heading font-semibold text-foreground mb-3">{imp.copyrightTitle}</h3>
                <p className="text-muted-foreground text-[0.9rem] leading-[1.85]">{imp.copyrightText}</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Impressum;
