import Layout from "@/components/Layout";
import Reveal from "@/components/Reveal";
import OptimizedImg from "@/components/OptimizedImg";
import { heroSets } from "@/assets/heroImages";
import { useLanguage } from "@/i18n/LanguageContext";

const Impressum = () => {
  const { t } = useLanguage();
  const imp = t.impressum;

  return (
    <Layout>
      <section className="relative h-[30vh] min-h-[220px] flex items-end">
        <div className="absolute inset-0">
          <OptimizedImg src={heroSets.building.src} srcSet={heroSets.building.srcSet} sizes={heroSets.building.sizes} alt={imp.title} className="w-full h-full object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F1113]/70 via-[#0F1113]/25 to-transparent" />
        </div>
        <div className="relative container pb-8 md:pb-10">
          <Reveal>
            <h1 className="text-[1.6rem] md:text-[2rem] font-heading font-semibold text-white leading-[1.1]">
              {imp.title}
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="py-10 md:py-14">
        <div className="container max-w-3xl">
          <div className="divide-y divide-border/60">
            <Reveal>
              <div className="pb-5">
                <h2 className="text-[0.9rem] font-heading font-semibold text-foreground mb-1.5">{imp.tmbTitle}</h2>
                <p className="text-muted-foreground text-sm leading-[1.75]">
                  Aurelia Grundbesitz GmbH<br />
                  Grevenbroicher Weg 2<br />
                  40547 Düsseldorf, {t.common.country}
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.05}>
              <div className="py-5">
                <h3 className="text-sm font-heading font-semibold text-foreground mb-1">{imp.representedByTitle}</h3>
                <p className="text-muted-foreground text-sm leading-[1.75]">{imp.representedByText}</p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="py-5">
                <h3 className="text-sm font-heading font-semibold text-foreground mb-1">{imp.contactTitle}</h3>
                <p className="text-muted-foreground text-sm leading-[1.75] whitespace-pre-line">{imp.contactText}</p>
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="py-5">
                <h3 className="text-sm font-heading font-semibold text-foreground mb-1">{imp.registerTitle}</h3>
                <p className="text-muted-foreground text-sm leading-[1.75] whitespace-pre-line">{imp.registerText}</p>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="py-5">
                <h3 className="text-sm font-heading font-semibold text-foreground mb-1">{imp.disclaimerTitle}</h3>
                <p className="text-muted-foreground text-sm leading-[1.75]">{imp.disclaimerText}</p>
              </div>
            </Reveal>
            <Reveal delay={0.25}>
              <div className="pt-5">
                <h3 className="text-sm font-heading font-semibold text-foreground mb-1">{imp.copyrightTitle}</h3>
                <p className="text-muted-foreground text-sm leading-[1.75]">{imp.copyrightText}</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Impressum;
