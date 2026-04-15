import Layout from "@/components/Layout";
import Reveal from "@/components/Reveal";
import OptimizedImg from "@/components/OptimizedImg";
import { heroSets } from "@/assets/heroImages";
import { ExternalLink } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const panelBase =
  "bg-card rounded-[1.5rem] shadow-[0_10px_50px_-10px_hsl(212_55%_20%/0.07),0_4px_16px_-6px_hsl(212_55%_20%/0.04)] border border-border/8";

const panelPadding = "px-8 py-10 md:px-16 md:py-16";

const dsgvoBaseUrl = "https://dsgvo-gesetz.de/art-";

const Privacy = () => {
  const { t } = useLanguage();
  const p = t.privacy;

  return (
    <Layout>
      <section className="relative h-[30vh] min-h-[220px] flex items-end">
        <div className="absolute inset-0">
          <OptimizedImg src={heroSets.building.src} srcSet={heroSets.building.srcSet} sizes={heroSets.building.sizes} alt={p.title} className="w-full h-full object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B1929]/70 via-[#0B1929]/25 to-transparent" />
        </div>
        <div className="relative container pb-8 md:pb-10">
          <Reveal>
            <h1 className="text-[1.6rem] md:text-[2rem] font-heading font-semibold text-white leading-[1.1]">
              {p.title}
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="py-10 md:py-16">
        <div className="container max-w-3xl">
          <Reveal>
            <div className={`${panelBase} ${panelPadding}`}>
              <div className="divide-y divide-border/30">
                <div className="pb-6">
                  <h2 className="text-[0.95rem] font-heading font-semibold text-foreground mb-2">{p.controllerTitle}</h2>
                  <p className="text-muted-foreground text-[0.93rem] leading-[1.85] whitespace-pre-line">{p.controllerText}</p>
                  <p className="text-muted-foreground text-[0.93rem] leading-[1.85] mt-1">{p.controllerCeo}</p>
                </div>

                <div className="py-6">
                  <h2 className="text-[0.95rem] font-heading font-semibold text-foreground mb-2">{p.generalTitle}</h2>
                  <p className="text-muted-foreground text-[0.93rem] leading-[1.85]">
                    {p.generalText}{" "}
                    <a href="https://dsgvo-gesetz.de/" target="_blank" rel="noopener noreferrer" className="text-accent inline-flex items-center gap-1">
                      {p.generalDsgvoLabel} <ExternalLink size={10} />
                    </a>{" / "}
                    <a href="https://www.gesetze-im-internet.de/bdsg_2018/" target="_blank" rel="noopener noreferrer" className="text-accent inline-flex items-center gap-1">
                      {p.generalBdsgLabel} <ExternalLink size={10} />
                    </a>.
                  </p>
                  <p className="text-xs text-muted-foreground/60 mt-2">{p.generalLinkHint}</p>
                </div>

                <div className="py-6">
                  <h2 className="text-[0.95rem] font-heading font-semibold text-foreground mb-2">{p.legalTitle}</h2>
                  <ul className="list-disc pl-5 space-y-1.5 text-muted-foreground text-[0.93rem] leading-[1.85]">
                    {p.legalBases.map((base, i) => (
                      <li key={i}>
                        <a href={`${dsgvoBaseUrl}6-dsgvo/`} target="_blank" rel="noopener noreferrer" className="text-accent inline-flex items-center gap-1">
                          <strong>{base.label}</strong> <ExternalLink size={10} />
                        </a>{" "}– {base.desc}
                      </li>
                    ))}
                  </ul>
                  <p className="text-xs text-muted-foreground/60 mt-2">{p.legalLinkHint}</p>
                </div>

                <div className="py-6">
                  <h2 className="text-[0.95rem] font-heading font-semibold text-foreground mb-2">{p.serverLogsTitle}</h2>
                  <p className="text-muted-foreground text-[0.93rem] leading-[1.85]">{p.serverLogsText}</p>
                  <ul className="list-disc pl-5 space-y-0.5 mt-2 text-muted-foreground text-[0.93rem]">
                    {p.serverLogsItems.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                  <p className="text-muted-foreground text-[0.93rem] leading-[1.85] mt-2">{p.serverLogsLegal}</p>
                </div>

                <div className="py-6">
                  <h2 className="text-[0.95rem] font-heading font-semibold text-foreground mb-2">{p.contactFormTitle}</h2>
                  <p className="text-muted-foreground text-[0.93rem] leading-[1.85]">{p.contactFormText}</p>
                  <p className="text-muted-foreground text-[0.93rem] leading-[1.85] mt-2">{p.contactFormLegal}</p>
                </div>

                <div className="py-6">
                  <h2 className="text-[0.95rem] font-heading font-semibold text-foreground mb-2">{p.googleMapsTitle}</h2>
                  <p className="text-muted-foreground text-[0.93rem] leading-[1.85]">{p.googleMapsText}</p>
                  <p className="text-muted-foreground text-[0.93rem] leading-[1.85] mt-2">{p.googleMapsLegal}</p>
                  <p className="text-xs text-muted-foreground/60 mt-2">{p.googleMapsLinkHint}</p>
                </div>

                <div className="py-6">
                  <h2 className="text-[0.95rem] font-heading font-semibold text-foreground mb-2">{p.retentionTitle}</h2>
                  <p className="text-muted-foreground text-[0.93rem] leading-[1.85]">{p.retentionText}</p>
                </div>

                <div className="py-6">
                  <h2 className="text-[0.95rem] font-heading font-semibold text-foreground mb-2">{p.rightsTitle}</h2>
                  <p className="text-muted-foreground text-[0.93rem] leading-[1.85]">{p.rightsIntro}</p>
                  <ul className="list-disc pl-5 space-y-1.5 mt-2 text-muted-foreground text-[0.93rem]">
                    {p.rightsItems.map((r) => (
                      <li key={r.art}>
                        <a href={`${dsgvoBaseUrl}${r.art}-dsgvo/`} target="_blank" rel="noopener noreferrer" className="text-accent inline-flex items-center gap-1">
                          {r.label} ({r.desc}) <ExternalLink size={10} />
                        </a>
                      </li>
                    ))}
                  </ul>
                  <p className="text-muted-foreground text-[0.93rem] leading-[1.85] mt-2">{p.rightsSupervisory}</p>
                  <p className="text-xs text-muted-foreground/60 mt-2">{p.rightsSupervisoryLinkHint}</p>
                </div>

                <div className="py-6">
                  <h2 className="text-[0.95rem] font-heading font-semibold text-foreground mb-2">{p.contactPrivacyTitle}</h2>
                  <p className="text-muted-foreground text-[0.93rem] leading-[1.85] whitespace-pre-line">{p.contactPrivacyText}</p>
                </div>

                <div className="pt-6">
                  <p className="text-xs text-muted-foreground/60 italic leading-relaxed">{p.externalLinksDisclaimer}</p>
                  <p className="text-xs text-muted-foreground/60 mt-3 pt-3 border-t border-border/20">{p.lastUpdated}</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
};

export default Privacy;
