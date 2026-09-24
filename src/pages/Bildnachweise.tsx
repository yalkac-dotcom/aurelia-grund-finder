import Layout from "@/components/Layout";
import Reveal from "@/components/Reveal";
import { useLanguage } from "@/i18n/LanguageContext";
import { pageExtras } from "@/i18n/pageExtras";
import { usePageSeo } from "@/hooks/usePageSeo";
import { pageSeo } from "@/i18n/pageSeo";
import AiImageDisclosure from "@/components/AiImageDisclosure";
import headerImg from "@/assets/bildnachweise-header.webp";
...
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
