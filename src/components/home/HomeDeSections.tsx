import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/sections/SectionHeader";
import { aureliaEditorialFrame, aureliaGoldCard, aureliaGoldRule } from "@/lib/cardStyle";
import { aureliaCard } from "@/lib/cardStyle";
import type { HomeMasterCopy } from "@/i18n/homeMaster";

/** Startseiten-Bereiche nach deutschem Master-Konzept (alle 7 Sprachen). */
const HomeDeSections = ({ m }: { m: HomeMasterCopy }) => (
  <>
    {/* UNTERNEHMENSGESCHICHTE */}
    <section className="section-premium bg-background">
      <div className="container-premium">
        <Reveal className={`mx-auto max-w-4xl ${aureliaEditorialFrame}`}>
          <h2 className="font-heading text-[1.7rem] font-semibold leading-tight text-primary md:text-[2.2rem]">{m.whoTitle}</h2>
          <div className={`mt-4 ${aureliaGoldRule}`} aria-hidden="true" />
          <div className="mt-7 space-y-5 text-[15px] leading-[1.85] text-foreground/80">
            {m.whoParagraphs.map((p) => <p key={p}>{p}</p>)}
            <p className="mt-2 border-t border-accent/25 pt-6 font-heading text-[1.08rem] italic leading-[1.7] text-primary md:text-[1.15rem]">{m.whoClosing}</p>
          </div>
        </Reveal>
      </div>
    </section>

    {/* BESONDERE SITUATIONEN + ZWANGSVERSTEIGERUNG */}
    <section className="section-premium bg-secondary/45">
      <div className="container-premium grid gap-8 md:grid-cols-2 md:gap-10">
        <Reveal>
          <div className={`h-full p-6 md:p-8 ${aureliaCard}`}>
            <h2 className="font-heading text-[1.35rem] font-semibold leading-snug text-primary">{m.specialTitle}</h2>
            <div className="mt-4 space-y-3 text-[0.92rem] leading-[1.8] text-muted-foreground">
              {m.specialParagraphs.map((p) => <p key={p}>{p}</p>)}
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.06}>
          <div id="zwangsversteigerung" className={`h-full scroll-mt-24 p-6 md:p-8 ${aureliaCard}`}>
            <h2 className="font-heading text-[1.35rem] font-semibold leading-snug text-primary">{m.foreclosureTitle}</h2>
            <div className="mt-4 space-y-3 text-[0.92rem] leading-[1.8] text-muted-foreground">
              {m.foreclosureParagraphs.map((p) => <p key={p}>{p}</p>)}
            </div>
          </div>
        </Reveal>
      </div>
    </section>

    {/* WOHNSITZ ≠ STANDORT */}
    <section className="section-premium bg-background">
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

export default HomeDeSections;
