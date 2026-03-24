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
      <section className="relative h-[35vh] min-h-[250px] flex items-end">
        <div className="absolute inset-0">
          <OptimizedImg src={heroImg} alt={imp.title} className="w-full h-full object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F1113]/70 via-[#0F1113]/25 to-transparent" />
        </div>
        <div className="relative container pb-10 md:pb-14">
          <Reveal>
            <h1 className="text-[1.85rem] md:text-[2.25rem] font-heading font-semibold text-white leading-[1.1]">
              {imp.title}
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="container max-w-2xl">
          <div className="divide-y divide-border/60">
            <Reveal>
              <div className="pb-6">
                <h2 className="text-[0.95rem] font-heading font-semibold text-foreground mb-2">{imp.tmbTitle}</h2>
                <p className="text-muted-foreground text-[0.83rem] leading-[1.8]">
                  Aurelia Grundbesitz GmbH<br />
                  Grevenbroicher Weg 2<br />
                  40547 Düsseldorf, {t.common.country}
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.05}>
              <div className="py-6">
                <h3 className="text-[0.9rem] font-heading font-semibold text-foreground mb-1.5">{imp.representedByTitle}</h3>
                <p className="text-muted-foreground text-[0.83rem] leading-[1.8]">{imp.representedByText}</p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="py-6">
                <h3 className="text-[0.9rem] font-heading font-semibold text-foreground mb-1.5">{imp.contactTitle}</h3>
                <p className="text-muted-foreground text-[0.83rem] leading-[1.8] whitespace-pre-line">{imp.contactText}</p>
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="py-6">
                <h3 className="text-[0.9rem] font-heading font-semibold text-foreground mb-1.5">{imp.registerTitle}</h3>
                <p className="text-muted-foreground text-[0.83rem] leading-[1.8] whitespace-pre-line">{imp.registerText}</p>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="py-6">
                <h3 className="text-[0.9rem] font-heading font-semibold text-foreground mb-1.5">{imp.disclaimerTitle}</h3>
                <p className="text-muted-foreground text-[0.83rem] leading-[1.8]">{imp.disclaimerText}</p>
              </div>
            </Reveal>
            <Reveal delay={0.25}>
              <div className="pt-6">
                <h3 className="text-[0.9rem] font-heading font-semibold text-foreground mb-1.5">{imp.copyrightTitle}</h3>
                <p className="text-muted-foreground text-[0.83rem] leading-[1.8]">{imp.copyrightText}</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Impressum;
