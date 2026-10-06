import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/sections/SectionHeader";
import { aureliaCard, aureliaGoldCard, aureliaGoldRule } from "@/lib/cardStyle";
import { homeMaster } from "@/i18n/homeMaster";

/** Deutsche Informationsbereiche vor dem Angebots-Fragebogen (bestehende Texte aus homeMaster.de). */
const OfferDeInfoSections = () => {
  const m = homeMaster.de;
  return (
    <>
      <section className="section-premium bg-secondary/45">
        <div className="container-premium grid gap-6 md:grid-cols-2 md:gap-8">
          <Reveal>
            <div className={`h-full p-5 md:p-6 ${aureliaCard}`}>
              <h2 className="font-heading text-[1.35rem] font-semibold leading-snug text-primary">{m.specialTitle}</h2>
              <div className="mt-4 space-y-3 text-[0.92rem] leading-[1.8] text-muted-foreground">
                {m.specialParagraphs.map((p) => <p key={p}>{p}</p>)}
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.06}>
            <div className={`h-full p-5 md:p-6 ${aureliaCard}`}>
              <h2 className="font-heading text-[1.35rem] font-semibold leading-snug text-primary">{m.foreclosureTitle}</h2>
              <div className="mt-4 space-y-3 whitespace-pre-line text-[0.92rem] leading-[1.8] text-muted-foreground">
                {m.foreclosureParagraphs.map((p) => <p key={p}>{p}</p>)}
              </div>
            </div>
          </Reveal>
        </div>
      </section>
      <section className="section-premium">
        <div className="container-premium">
          <SectionHeader title={m.residenceTitle} intro={m.residenceIntro} />
          <div className="grid gap-6 md:grid-cols-2 md:gap-8">
            {[
              { t: m.residenceCards[0].title, d: m.residenceCards[0].text, to: "/immobilie-anbieten?land=deutschland" },
              { t: m.residenceCards[1].title, d: m.residenceCards[1].text, to: "/immobilie-anbieten?land=tuerkei" },
            ].map((c, i) => (
              <Reveal key={c.t} delay={i * 0.06}>
                <div className={aureliaGoldCard}>
                  <h3 className="font-heading text-[1.08rem] font-semibold leading-snug text-primary">{c.t}</h3>
                  <div className={`mt-4 ${aureliaGoldRule}`} aria-hidden="true" />
                  <p className="mt-4 text-[0.9rem] leading-[1.8] text-muted-foreground">{c.d}</p>
                  <Link to={c.to} className="mt-auto pt-5 inline-flex self-start min-h-[44px] items-center gap-2 text-[0.75rem] font-semibold uppercase tracking-[0.12em] text-primary hover:text-primary/80">
                    {m.residenceCta} <ArrowRight size={13} className="text-accent" />
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.12}>
            <p className="mx-auto mt-12 max-w-3xl border-t border-accent/25 pt-6 text-center text-[0.82rem] italic leading-[1.7] text-muted-foreground">{m.residenceNote}</p>
          </Reveal>
        </div>
      </section>
    </>
  );
};

export default OfferDeInfoSections;
