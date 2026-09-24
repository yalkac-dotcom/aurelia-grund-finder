import Layout from "@/components/Layout";
import Reveal from "@/components/Reveal";
import { useLanguage } from "@/i18n/LanguageContext";
import { pageExtras } from "@/i18n/pageExtras";
import { usePageSeo } from "@/hooks/usePageSeo";
import { pageSeo } from "@/i18n/pageSeo";
import AiImageDisclosure from "@/components/AiImageDisclosure";
import headerImg from "@/assets/bildnachweise-header-clean.webp";

const headingByLang: Record<string, string> = {
  de: "Bildnachweise",
  tr: "Görsel Kaynakları",
  en: "Image Credits",
  nl: "Beeldverantwoording",
  it: "Crediti fotografici",
  es: "Créditos de imagen",
  fr: "Crédits photo",
};

const panelBase =
  "bg-card rounded-[1.5rem] shadow-[0_10px_50px_-10px_hsl(212_55%_20%/0.07),0_4px_16px_-6px_hsl(212_55%_20%/0.04)] border border-border/8";

const panelPadding = "px-6 py-7 md:px-12 md:py-10";

const Bildnachweise = () => {
  const { t, language } = useLanguage();
  usePageSeo(pageSeo[language].bildnachweise.title, pageSeo[language].bildnachweise.description);
  const copy = pageExtras[language].imageCredits;

  return (
    <Layout>
      <section className="relative bg-[hsl(218_45%_10%)] overflow-hidden">
        <img src={headerImg} alt="" className="w-full h-auto" />
        <div className="absolute inset-0 flex items-center pl-[3%] pr-[38%] pb-[6%]">
          <h1
            className="uppercase leading-none tracking-[0.03em] md:tracking-[0.08em] text-[clamp(0.8rem,3.4vw,4.5rem)] md:text-[clamp(1.1rem,4.4vw,4.5rem)] bg-gradient-to-b from-[hsl(42_70%_78%)] via-[hsl(40_58%_62%)] to-[hsl(36_50%_46%)] bg-clip-text text-transparent"
            style={{ fontFamily: "'Playfair Display', serif", fontWeight: 400 }}
          >
            {headingByLang[language] ?? t.footer.imageCredits}
          </h1>
        </div>
        <AiImageDisclosure type="illustrative" />
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
