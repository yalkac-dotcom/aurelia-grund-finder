import { Layout } from "@/components/Layout";
import { useLanguage } from "@/i18n/LanguageContext";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "@/components/Reveal";

const FAQ = () => {
  const { t } = useLanguage();

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-background to-teal-50/30">
        {/* Hero Section */}
        <section className="section-premium bg-gradient-warm">
          <div className="container-premium">
            <Reveal>
              <div className="text-center max-w-3xl mx-auto">
                <span className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-wider uppercase bg-teal-100 text-teal-800 rounded-full">
                  {t.contact.faqLabel}
                </span>
                <h1 className="text-4xl md:text-5xl font-light mb-6 text-navy-900">
                  {t.contact.faqTitle}
                </h1>
                <p className="text-lg text-foreground/70">
                  {t.contact.faqSubtitle}
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="section-premium">
          <div className="container-premium max-w-4xl">
            <Reveal delay={0.1}>
              <Accordion type="single" collapsible className="space-y-4">
                {t.contact.faqItems.map((item, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="glass-card border-teal-100/50 rounded-2xl px-6 overflow-hidden"
                  >
                    <AccordionTrigger className="text-left hover:no-underline hover:text-teal-700 transition-colors py-6">
                      <span className="text-base md:text-lg font-medium pr-4">
                        {item.q}
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="text-foreground/70 pb-6 pt-2">
                      <div className="prose prose-teal max-w-none">
                        {item.a}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </Reveal>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-premium bg-gradient-to-br from-teal-600 via-teal-700 to-teal-800 text-white">
          <div className="container-premium">
            <Reveal delay={0.2}>
              <div className="text-center max-w-2xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-light mb-6">
                  Noch Fragen?
                </h2>
                <p className="text-lg mb-8 text-white/90">
                  Unser Team steht Ihnen gerne zur Verfügung.
                </p>
                <a
                  href="/kontakt"
                  className="inline-flex items-center px-8 py-4 bg-white text-teal-700 font-semibold rounded-lg hover:bg-teal-50 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  {t.nav.contact}
                </a>
              </div>
            </Reveal>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default FAQ;
