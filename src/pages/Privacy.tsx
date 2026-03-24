import Layout from "@/components/Layout";
import Reveal from "@/components/Reveal";
import OptimizedImg from "@/components/OptimizedImg";
import heroImg from "@/assets/hero-building.jpg";
import { ExternalLink } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const dsgvoBaseUrl = "https://dsgvo-gesetz.de/art-";

const Privacy = () => {
  const { t } = useLanguage();
  const p = t.privacy;

  return (
    <Layout>
      <section className="relative h-[30vh] min-h-[220px] flex items-end">
        <div className="absolute inset-0">
          <OptimizedImg src={heroImg} alt={p.title} className="w-full h-full object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F1113]/70 via-[#0F1113]/25 to-transparent" />
        </div>
        <div className="relative container pb-8 md:pb-10">
          <Reveal>
            <h1 className="text-[1.6rem] md:text-[2rem] font-heading font-semibold text-white leading-[1.1]">
              {p.title}
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="py-10 md:py-14">
        <div className="container max-w-3xl">
          <div className="divide-y divide-border/60">
            <Reveal>
              <div className="pb-5">
                <h2 className="text-[0.9rem] font-heading font-semibold text-foreground mb-1.5">{p.controllerTitle}</h2>
                <p className="text-muted-foreground text-[0.8rem] leading-[1.75] whitespace-pre-line">{p.controllerText}</p>
                <p className="text-muted-foreground text-[0.8rem] leading-[1.75] mt-1">{p.controllerCeo}</p>
              </div>
            </Reveal>

            <Reveal delay={0.05}>
              <div className="py-5">
                <h2 className="text-[0.9rem] font-heading font-semibold text-foreground mb-1.5">{p.generalTitle}</h2>
                <p className="text-muted-foreground text-[0.8rem] leading-[1.75]">
                  {p.generalText}{" "}
                  <a href="https://dsgvo-gesetz.de/" target="_blank" rel="noopener noreferrer" className="text-accent inline-flex items-center gap-1">
                    {p.generalDsgvoLabel} <ExternalLink size={10} />
                  </a>{" / "}
                  <a href="https://www.gesetze-im-internet.de/bdsg_2018/" target="_blank" rel="noopener noreferrer" className="text-accent inline-flex items-center gap-1">
                    {p.generalBdsgLabel} <ExternalLink size={10} />
                  </a>.
                </p>
                <p className="text-[0.68rem] text-muted-foreground/70 mt-1">{p.generalLinkHint}</p>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="py-5">
                <h2 className="text-[0.9rem] font-heading font-semibold text-foreground mb-1.5">{p.legalTitle}</h2>
                <ul className="list-disc pl-5 space-y-1 text-muted-foreground text-[0.8rem] leading-[1.75]">
                  {p.legalBases.map((base, i) => (
                    <li key={i}>
                      <a href={`${dsgvoBaseUrl}6-dsgvo/`} target="_blank" rel="noopener noreferrer" className="text-accent inline-flex items-center gap-1">
                        <strong>{base.label}</strong> <ExternalLink size={10} />
                      </a>{" "}– {base.desc}
                    </li>
                  ))}
                </ul>
                <p className="text-[0.68rem] text-muted-foreground/70 mt-1">{p.legalLinkHint}</p>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="py-5">
                <h2 className="text-[0.9rem] font-heading font-semibold text-foreground mb-1.5">{p.serverLogsTitle}</h2>
                <p className="text-muted-foreground text-[0.8rem] leading-[1.75]">{p.serverLogsText}</p>
                <ul className="list-disc pl-5 space-y-0.5 mt-1 text-muted-foreground text-[0.8rem]">
                  {p.serverLogsItems.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                <p className="text-muted-foreground text-[0.8rem] leading-[1.75] mt-1">{p.serverLogsLegal}</p>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="py-5">
                <h2 className="text-[0.9rem] font-heading font-semibold text-foreground mb-1.5">{p.contactFormTitle}</h2>
                <p className="text-muted-foreground text-[0.8rem] leading-[1.75]">{p.contactFormText}</p>
                <p className="text-muted-foreground text-[0.8rem] leading-[1.75] mt-1">{p.contactFormLegal}</p>
              </div>
            </Reveal>

            <Reveal delay={0.25}>
              <div className="py-5">
                <h2 className="text-[0.9rem] font-heading font-semibold text-foreground mb-1.5">{p.googleMapsTitle}</h2>
                <p className="text-muted-foreground text-[0.8rem] leading-[1.75]">{p.googleMapsText}</p>
                <p className="text-muted-foreground text-[0.8rem] leading-[1.75] mt-1">{p.googleMapsLegal}</p>
                <p className="text-[0.68rem] text-muted-foreground/70 mt-1">{p.googleMapsLinkHint}</p>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="py-5">
                <h2 className="text-[0.9rem] font-heading font-semibold text-foreground mb-1.5">{p.retentionTitle}</h2>
                <p className="text-muted-foreground text-[0.8rem] leading-[1.75]">{p.retentionText}</p>
              </div>
            </Reveal>

            <Reveal delay={0.35}>
              <div className="py-5">
                <h2 className="text-[0.9rem] font-heading font-semibold text-foreground mb-1.5">{p.rightsTitle}</h2>
                <p className="text-muted-foreground text-[0.8rem] leading-[1.75]">{p.rightsIntro}</p>
                <ul className="list-disc pl-5 space-y-1 mt-1 text-muted-foreground text-[0.8rem]">
                  {p.rightsItems.map((r) => (
                    <li key={r.art}>
                      <a href={`${dsgvoBaseUrl}${r.art}-dsgvo/`} target="_blank" rel="noopener noreferrer" className="text-accent inline-flex items-center gap-1">
                        {r.label} ({r.desc}) <ExternalLink size={10} />
                      </a>
                    </li>
                  ))}
                </ul>
                <p className="text-muted-foreground text-[0.8rem] leading-[1.75] mt-1">
                  {p.rightsSupervisory}
                </p>
                <p className="text-[0.68rem] text-muted-foreground/70 mt-1">{p.rightsSupervisoryLinkHint}</p>
              </div>
            </Reveal>

            <Reveal delay={0.4}>
              <div className="py-5">
                <h2 className="text-[0.9rem] font-heading font-semibold text-foreground mb-1.5">{p.contactPrivacyTitle}</h2>
                <p className="text-muted-foreground text-[0.8rem] leading-[1.75] whitespace-pre-line">{p.contactPrivacyText}</p>
              </div>
            </Reveal>

            <Reveal delay={0.45}>
              <div className="pt-5">
                <p className="text-[0.72rem] text-muted-foreground italic leading-relaxed">{p.externalLinksDisclaimer}</p>
                <p className="text-[0.72rem] text-muted-foreground mt-3 pt-3 border-t border-border/60">{p.lastUpdated}</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Privacy;
