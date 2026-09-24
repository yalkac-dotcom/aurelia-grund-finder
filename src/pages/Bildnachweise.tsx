import Layout from "@/components/Layout";
import Reveal from "@/components/Reveal";
import { useLanguage } from "@/i18n/LanguageContext";
import { pageExtras } from "@/i18n/pageExtras";
import { usePageSeo } from "@/hooks/usePageSeo";
import { pageSeo } from "@/i18n/pageSeo";
import AiImageDisclosure from "@/components/AiImageDisclosure";
import headerImg from "@/assets/bildnachweise-header.webp";

const panelBase =
  "bg-card rounded-[1.5rem] shadow-[0_10px_50px_-10px_hsl(212_55%_20%/0.07),0_4px_16px_-6px_hsl(212_55%_20%/0.04)] border border-border/8";

const panelPadding = "px-6 py-7 md:px-12 md:py-10";

const Bildnachweise = () => {
  const { t, language } = useLanguage();
  usePageSeo(pageSeo[language].bildnachweise.title, pageSeo[language].bildnachweise.description);
  const copy = pageExtras[language].imageCredits;

  return (
    <Layout>
      <section className="relative h-[32vh] min-h-[220px] md:h-[38vh] md:min-h-[300px]">
        <img src={headerImg} alt={t.footer.imageCredits} className="absolute inset-0 w-full h-full object-cover" />
        <AiImageDisclosure type="illustrative" />
        <h1 className="sr-only">{t.footer.imageCredits}</h1>
      </section>

      <section className="py-6 md:py-10">
        <div className="container max-w-3xl">
          <Reveal>
            <div className={`${panelBase} ${panelPadding}`}>
              <p className="text-muted-foreground text-[0.93rem] leading-[1.85] mb-4">
                {copy.first}
              </p>
              <p className="text-muted-foreground text-[0.93rem] leading-[1.85] mb-8">
                {copy.second}
              </p>
              <p className="text-muted-foreground text-[0.93rem] leading-[1.85] mb-8">
                {copy.aiDisclosure}
              </p>
              <p className="text-muted-foreground text-[0.93rem] leading-[1.85] mb-8">
                {copy.aiCredits}
              </p>
              <p className="text-muted-foreground text-[0.93rem] leading-[1.85] mb-8">
                {copy.stockCredit}
              </p>

              <div className="border-t border-border/20 pt-6">
                <h2 className="text-[0.93rem] font-heading font-semibold text-foreground mb-2">{copy.contact}</h2>
                <p className="text-muted-foreground text-[0.93rem] leading-[1.85]">
                  Aurelia Grundbesitz GmbH<br />
                  <a href="mailto:office@aureliaestates.de" className="text-accent hover:underline">office@aureliaestates.de</a>
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
