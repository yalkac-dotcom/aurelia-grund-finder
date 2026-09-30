import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { usePageSeo } from "@/hooks/usePageSeo";
import { useLanguage } from "@/i18n/LanguageContext";
import { shortTermSaleCopy } from "@/i18n/shortTermSale";

const ShortTermSale = () => {
  const { language } = useLanguage();
  const c = shortTermSaleCopy[language];
  usePageSeo(c.seoTitle, c.seoDescription);

  return (
    <Layout>
      <main className="bg-gradient-warm pt-10 md:pt-12">
        <section className="container-premium pb-10 text-center md:pb-12">
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-accent">{c.kicker}</p>
          <h1 className="mt-4 font-heading text-4xl font-semibold text-primary [overflow-wrap:anywhere] md:text-5xl">{c.title}</h1>
          <p className="mx-auto mt-5 max-w-3xl text-[0.98rem] leading-[1.85] text-muted-foreground">{c.intro}</p>
        </section>

        <section className="container-premium pb-10 md:pb-12">
          <div className="mx-auto grid max-w-5xl gap-5 md:grid-cols-3">
            {c.points.map((p) => (
              <div key={p.title} className="border-l-2 border-accent bg-card px-6 py-6">
                <h2 className="font-heading text-xl font-semibold text-primary">{p.title}</h2>
                <p className="mt-2 text-[0.94rem] leading-[1.8] text-muted-foreground">{p.text}</p>
              </div>
            ))}
          </div>
          <p className="mx-auto mt-6 max-w-5xl text-sm leading-6 text-muted-foreground">{c.note}</p>
        </section>

        <section className="container-premium pb-12 text-center md:pb-16">
          <h2 className="font-heading text-2xl font-semibold text-primary md:text-3xl">{c.ctaTitle}</h2>
          <p className="mx-auto mt-3 max-w-2xl text-[0.96rem] leading-[1.8] text-muted-foreground">{c.ctaText}</p>
          <Button asChild size="lg" className="mt-6 min-h-12 h-auto whitespace-normal rounded-sm px-8 py-3 uppercase tracking-[0.12em]">
            <Link to="/immobilie-anbieten">{c.ctaButton}</Link>
          </Button>
        </section>
      </main>
    </Layout>
  );
};

export default ShortTermSale;
