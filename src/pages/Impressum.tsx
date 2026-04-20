import Layout from "@/components/Layout";
import Reveal from "@/components/Reveal";
import OptimizedImg from "@/components/OptimizedImg";
import { heroSets } from "@/assets/heroImages";
import { useLanguage } from "@/i18n/LanguageContext";

const panelBase =
  "bg-card rounded-[1.5rem] shadow-[0_10px_50px_-10px_hsl(212_55%_20%/0.07),0_4px_16px_-6px_hsl(212_55%_20%/0.04)] border border-border/8";

const panelPadding = "px-6 py-7 md:px-12 md:py-10";

const Impressum = () => {
  const { t, language } = useLanguage();
  const imp = t.impressum;

  return (
    <Layout>
      <section className="relative h-[30vh] min-h-[220px] flex items-end">
        <div className="absolute inset-0">
          <OptimizedImg src={heroSets.building.src} srcSet={heroSets.building.srcSet} sizes={heroSets.building.sizes} alt={imp.title} className="w-full h-full object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-[hsl(218 46% 14%)]/70 via-[hsl(218 46% 14%)]/25 to-transparent" />
        </div>
        <div className="relative container pb-8 md:pb-10">
          <Reveal>
            <h1 className="text-[1.6rem] md:text-[2rem] font-heading font-semibold text-white leading-[1.1]">
              {imp.title}
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="py-6 md:py-10">
        <div className="container max-w-3xl">
          <Reveal>
            <div className={`${panelBase} ${panelPadding}`}>
              <div className="divide-y divide-border/30">
                {/* Company info */}
                <div className="pb-6">
                  <h2 className="text-[0.95rem] font-heading font-semibold text-foreground mb-2">{imp.tmbTitle}</h2>
                  <p className="text-muted-foreground text-[0.93rem] leading-[1.85]">
                    Aurelia Grundbesitz GmbH<br />
                    Grevenbroicher Weg 2<br />
                    40547 Düsseldorf, {t.common.country}
                  </p>
                </div>
                <div className="py-6">
                  <h3 className="text-[0.93rem] font-heading font-semibold text-foreground mb-1.5">{imp.representedByTitle}</h3>
                  <p className="text-muted-foreground text-[0.93rem] leading-[1.85]">{imp.representedByText}</p>
                </div>
                <div className="py-6">
                  <h3 className="text-[0.93rem] font-heading font-semibold text-foreground mb-1.5">{imp.contactTitle}</h3>
                  <p className="text-muted-foreground text-[0.93rem] leading-[1.85]">
                    Telefon: <a href="tel:+4921169583033" className="text-highlight hover:text-accent transition-colors">+49 211 69583033</a><br />
                    E-Mail: <a href="mailto:office@aureliaestates.de" className="text-highlight hover:text-accent transition-colors">office@aureliaestates.de</a>
                  </p>
                </div>
                <div className="py-6">
                  <h3 className="text-[0.93rem] font-heading font-semibold text-foreground mb-1.5">{imp.registerTitle}</h3>
                  <p className="text-muted-foreground text-[0.93rem] leading-[1.85] whitespace-pre-line">{imp.registerText}</p>
                </div>

                {/* Additional Legal */}
                <div className="pt-6">
                  <h2 className="text-[0.95rem] font-heading font-semibold text-foreground mb-6">{imp.additionalLegalTitle}</h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-[0.93rem] font-heading font-semibold text-foreground mb-1.5">{imp.disputeTitle}</h3>
                      <p className="text-muted-foreground text-[0.93rem] leading-[1.85]">{imp.disputeText}</p>
                    </div>
                    <div>
                      <h3 className="text-[0.93rem] font-heading font-semibold text-foreground mb-1.5">{imp.liabilityContentTitle}</h3>
                      <p className="text-muted-foreground text-[0.93rem] leading-[1.85]">{imp.liabilityContentText}</p>
                    </div>
                    <div>
                      <h3 className="text-[0.93rem] font-heading font-semibold text-foreground mb-1.5">{imp.liabilityLinksTitle}</h3>
                      <p className="text-muted-foreground text-[0.93rem] leading-[1.85]">{imp.liabilityLinksText}</p>
                    </div>
                    <div>
                      <h3 className="text-[0.93rem] font-heading font-semibold text-foreground mb-1.5">{imp.copyrightTitle}</h3>
                      <p className="text-muted-foreground text-[0.93rem] leading-[1.85]">{imp.copyrightText}</p>
                    </div>
                  </div>
                </div>

                {/* Binding language note */}
                {language !== "de" && imp.bindingLanguageNote && (
                  <div className="pt-6">
                    <p className="text-muted-foreground text-[0.93rem] leading-[1.85] italic">{imp.bindingLanguageNote}</p>
                  </div>
                )}
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
};

export default Impressum;
