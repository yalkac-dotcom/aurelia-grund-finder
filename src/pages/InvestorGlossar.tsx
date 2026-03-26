import Layout from "@/components/Layout";
import Reveal from "@/components/Reveal";
import { useLanguage } from "@/i18n/LanguageContext";
import { BookOpen, ArrowLeft, ChevronsUp } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState, useRef, useCallback } from "react";

const LETTER_BAR_ID = "glossar-letter-bar";

const InvestorGlossar = () => {
  const { t } = useLanguage();
  const inv = t.investors;
  const letters = inv.glossaryLetters;
  const entries = inv.glossaryEntries;
  const [activeLetter, setActiveLetter] = useState<string>("");
  const [showJump, setShowJump] = useState(false);
  const sectionRefs = useRef<Map<string, HTMLDivElement>>(new Map());

  useEffect(() => {
    document.title = inv.glossaryTitle + " – Aurelia Grundbesitz GmbH";
    const desc = document.querySelector('meta[name="description"]');
    desc?.setAttribute("content", inv.glossaryDisclaimer);
  }, [inv]);

  // Track which letter section is currently visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible.length > 0) {
          const id = visible[0].target.id;
          const letter = id.replace("glossar-", "");
          setActiveLetter(letter);
        }
      },
      { rootMargin: "-120px 0px -60% 0px", threshold: 0 }
    );

    sectionRefs.current.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [letters]);

  // Show floating button after scrolling past letter bar
  useEffect(() => {
    const handleScroll = () => {
      const bar = document.getElementById(LETTER_BAR_ID);
      if (bar) {
        const rect = bar.getBoundingClientRect();
        setShowJump(rect.bottom < 0);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const refCallback = useCallback(
    (letter: string) => (el: HTMLDivElement | null) => {
      if (el) sectionRefs.current.set(letter, el);
    },
    []
  );

  const scrollToBar = () => {
    const bar = document.getElementById(LETTER_BAR_ID);
    bar?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

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

          {/* Sticky Letter bar */}
          <div
            id={LETTER_BAR_ID}
            className="sticky top-20 md:top-28 z-30 bg-background/95 backdrop-blur-sm py-3 -mx-1 px-1 border-b border-border/30 mb-8 scroll-mt-20"
          >
            <div className="flex flex-wrap gap-1 md:gap-1.5 overflow-x-auto md:overflow-x-visible scrollbar-hide">
              {letters.map((l) => (
                <a
                  key={l}
                  href={`#glossar-${l}`}
                  className={`shrink-0 w-7 h-7 md:w-8 md:h-8 flex items-center justify-center text-xs font-medium border transition-colors duration-200 ${
                    activeLetter === l
                      ? "border-accent bg-accent/10 text-accent"
                      : "border-border/40 text-muted-foreground hover:text-accent hover:border-accent/40"
                  }`}
                >
                  {l}
                </a>
              ))}
            </div>
          </div>

          {/* Terms */}
          <div className="space-y-8">
            {letters.map((letter) => {
              const items = entries[letter];
              if (!items) return null;
              return (
                <div
                  key={letter}
                  id={`glossar-${letter}`}
                  className="scroll-mt-[8.5rem] md:scroll-mt-[10rem]"
                  ref={refCallback(letter)}
                >
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
              );
            })}
          </div>
        </div>
      </section>

      {/* Floating jump-to-bar button */}
      {showJump && (
        <button
          onClick={scrollToBar}
          aria-label="Buchstaben wählen"
          className="fixed bottom-20 right-14 md:bottom-8 md:right-8 z-40 w-10 h-10 md:w-11 md:h-11 flex items-center justify-center bg-accent/90 text-white border border-accent/60 backdrop-blur-sm shadow-lg hover:bg-accent transition-all duration-300 animate-in fade-in"
        >
          <ChevronsUp size={16} strokeWidth={1.5} />
        </button>
      )}
    </Layout>
  );
};

export default InvestorGlossar;
