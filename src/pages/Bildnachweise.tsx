import Layout from "@/components/Layout";
import Reveal from "@/components/Reveal";
import OptimizedImg from "@/components/OptimizedImg";
import { heroSets } from "@/assets/heroImages";
import { useLanguage } from "@/i18n/LanguageContext";

const panelBase =
  "bg-card rounded-[1.5rem] shadow-[0_10px_50px_-10px_hsl(212_55%_20%/0.07),0_4px_16px_-6px_hsl(212_55%_20%/0.04)] border border-border/8";

const panelPadding = "px-6 py-7 md:px-12 md:py-10";

const Bildnachweise = () => {
  const { t } = useLanguage();

  return (
    <Layout>
      <section className="relative h-[30vh] min-h-[220px] flex items-end">
        <div className="absolute inset-0">
          <OptimizedImg src={heroSets.building.src} srcSet={heroSets.building.srcSet} sizes={heroSets.building.sizes} alt="Bildnachweise" className="w-full h-full object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B1929]/70 via-[#0B1929]/25 to-transparent" />
        </div>
        <div className="relative container pb-8 md:pb-10">
          <Reveal>
            <h1 className="text-[1.6rem] md:text-[2rem] font-heading font-semibold text-white leading-[1.1]">
              {t.footer.imageCredits}
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="py-6 md:py-10">
        <div className="container max-w-3xl">
          <Reveal>
            <div className={`${panelBase} ${panelPadding}`}>
              <p className="text-muted-foreground text-[0.93rem] leading-[1.85] mb-4">
                Sämtliche auf dieser Website verwendeten Bilder sind KI-generiert und lizenzfrei. Sie wurden eigens für die Aurelia Grundbesitz GmbH erstellt und dienen ausschließlich der Illustration.
              </p>
              <p className="text-muted-foreground text-[0.93rem] leading-[1.85] mb-8">
                Es werden keine Bilder von Drittanbietern mit kostenpflichtiger oder unklarer Lizenzlage verwendet. Sollten dennoch Rechte Dritter betroffen sein, bitten wir um umgehende Kontaktaufnahme.
              </p>

              <div className="border-t border-border/20 pt-6">
                <h2 className="text-[0.93rem] font-heading font-semibold text-foreground mb-2">Kontakt bei Rückfragen</h2>
                <p className="text-muted-foreground text-[0.93rem] leading-[1.85]">
                  Aurelia Grundbesitz GmbH<br />
                  <a href="mailto:info@aurelia-grundbesitz.de" className="text-accent hover:underline">info@aurelia-grundbesitz.de</a>
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
};

export default Bildnachweise;
