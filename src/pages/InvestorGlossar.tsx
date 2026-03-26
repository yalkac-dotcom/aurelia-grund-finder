import Layout from "@/components/Layout";
import Reveal from "@/components/Reveal";
import { useLanguage } from "@/i18n/LanguageContext";
import { BookOpen, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const InvestorGlossar = () => {
  const { t } = useLanguage();
  const inv = t.investors;
  const letters = inv.glossaryLetters;
  const entries = inv.glossaryEntries;

  useEffect(() => {
    document.title = inv.glossaryTitle + " – Aurelia Grundbesitz GmbH";
    const desc = document.querySelector('meta[name="description"]');
    desc?.setAttribute("content", inv.glossaryDisclaimer);
  }, [inv]);

  return (
    <Layout>
      {/* Hero */}
      <section className="py-14 md:py-20 bg-secondary/50">
        <div className="container max-w-4xl">
          <Reveal>
            <div className="flex items-center gap-3 mb-3">
              <BookOpen className="text-accent" size={16} />
              <span className="text-accent font-sans text-xs font-medium tracking-[0.18em] uppercase">
                {inv.glossaryBadge}
              </span>
            </div>
            <h1 className="text-[1.5rem] md:text-[2.15rem] font-heading font-semibold text-foreground leading-[1.15] mb-4 max-w-lg text-balance">
              {inv.glossaryTitle}
            </h1>
          </Reveal>
        </div>
      </section>

      {/* Back link */}
      <section className="py-4">
        <div className="container max-w-4xl">
          <Link
            to="/investoren"
            className="inline-flex items-center gap-2 text-sm text-accent hover:text-accent/80 transition-colors"
          >
            <ArrowLeft size={13} />
            {t.nav.investors}
          </Link>
        </div>
      </section>

      {/* Glossary content */}
      <section className="py-10 md:py-14">
        <div className="container max-w-4xl">
          {/* Disclaimer */}
          <Reveal>
            <div className="border-l-2 border-accent/30 pl-4 mb-8">
              <p className="text-muted-foreground/80 text-xs leading-[1.7] max-w-xl">
                {inv.glossaryDisclaimer}
              </p>
            </div>
          </Reveal>

          {/* Letter bar */}
          <Reveal delay={0.05}>
            <div className="flex flex-wrap gap-1.5 mb-8">
              {letters.map((l) => (
                <a
                  key={l}
                  href={`#glossar-${l}`}
                  className="w-7 h-7 flex items-center justify-center text-xs font-medium border border-border/40 text-muted-foreground hover:text-accent hover:border-accent/40 transition-colors"
                >
                  {l}
                </a>
              ))}
            </div>
          </Reveal>

          {/* Terms */}
          <div className="space-y-8">
            {letters.map((letter) => {
              const items = entries[letter];
              if (!items) return null;
              return (
                <Reveal key={letter} delay={0.05}>
                  <div id={`glossar-${letter}`} className="scroll-mt-28">
                    <h3 className="text-base font-heading font-semibold text-accent mb-3">
                      {letter}
                    </h3>
                    <div className="space-y-2.5">
                      {items.map((item) => (
                        <div
                          key={item.term}
                          className="border-b border-border/30 pb-2.5"
                        >
                          <p className="text-sm font-medium text-foreground">
                            {item.term}
                          </p>
                          <p className="text-muted-foreground text-sm leading-[1.75]">
                            {item.desc}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default InvestorGlossar;
