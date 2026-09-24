import Layout from "@/components/Layout";
import Reveal from "@/components/Reveal";
import OptimizedImg from "@/components/OptimizedImg";
import { heroSets } from "@/assets/heroImages";
import { ExternalLink } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { usePageSeo } from "@/hooks/usePageSeo";
import { pageSeo } from "@/i18n/pageSeo";
import AiImageDisclosure from "@/components/AiImageDisclosure";
import datenschutzHeader from "@/assets/datenschutz-header.jpg";

const panelBase =
  "bg-card rounded-[1.5rem] shadow-[0_10px_50px_-10px_hsl(212_55%_20%/0.07),0_4px_16px_-6px_hsl(212_55%_20%/0.04)] border border-border/8";

const panelPadding = "px-6 py-7 md:px-12 md:py-10";

const dsgvoBaseUrl = "https://dsgvo-gesetz.de/art-";

const Privacy = () => {
  const { t, language } = useLanguage();
  usePageSeo(pageSeo[language].privacy.title, pageSeo[language].privacy.description);
  const p = t.privacy;

  const isDe = language === "de";

  return (
    <Layout>
      {true ? (
        <section className="relative w-full overflow-hidden h-[240px] md:h-[380px]" style={{ background: "rgb(10,32,58)" }}>
          <img
            src={datenschutzHeader}
            alt="Data Protection – DSGVO"
            width={1920}
            height={720}
            className="absolute inset-0 h-full w-full object-cover object-[68%_center] md:object-center"
          />
          {isDe && <span
            aria-hidden="true"
            style={{ color: "#F1DBA5" }}
            className="absolute font-heading font-semibold leading-none select-none text-[1.2rem] md:text-[1.9rem] [text-shadow:0_1px_6px_rgba(6,20,38,0.85),0_0_2px_rgba(6,20,38,0.9)] left-[8%] top-[62%] md:left-[19%] md:top-[68%]"
          >
            DSGVO
          </span>}
          <h1 className="sr-only">{p.title}</h1>
        </section>
      ) : (
        <section className="relative h-[30vh] min-h-[220px] flex items-end">
          <div className="absolute inset-0">
            <OptimizedImg src={heroSets.building.src} srcSet={heroSets.building.srcSet} sizes={heroSets.building.sizes} alt={p.title} className="w-full h-full object-cover" priority />
            <div className="absolute inset-0 bg-gradient-to-t from-[hsl(218 46% 14%)]/70 via-[hsl(218 46% 14%)]/25 to-transparent" />
            <AiImageDisclosure type="illustrative" />
          </div>
          <div className="relative container pb-8 md:pb-10">
            <Reveal>
              <h1 className="text-[1.6rem] md:text-[2rem] font-heading font-semibold text-white leading-[1.1]">
                {p.title}
              </h1>
            </Reveal>
          </div>
        </section>
      )}

      <section className="py-6 md:py-10">
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
                  <h2 className="text-[0.95rem] font-heading font-semibold text-foreground mb-2">{p.consentTitle}</h2>
                  <p className="text-muted-foreground text-[0.93rem] leading-[1.85]">{p.consentText}</p>
                  <ul className="list-disc pl-5 space-y-1.5 mt-2 text-muted-foreground text-[0.93rem] leading-[1.85]">
                    {p.consentItems.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                  <p className="text-muted-foreground text-[0.93rem] leading-[1.85] mt-2">{p.consentNote}</p>
                </div>

                <div className="py-6">
                  <h2 className="text-[0.95rem] font-heading font-semibold text-foreground mb-2">{p.analyticsTitle}</h2>
                  <p className="text-muted-foreground text-[0.93rem] leading-[1.85]">{p.analyticsText}</p>
                  <ul className="list-disc pl-5 space-y-0.5 mt-2 text-muted-foreground text-[0.93rem]">
                    {p.analyticsItems.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                  <p className="text-muted-foreground text-[0.93rem] leading-[1.85] mt-2">{p.analyticsAnon}</p>
                  <p className="text-muted-foreground text-[0.93rem] leading-[1.85] mt-2">{p.analyticsLegal}</p>
                  <p className="text-muted-foreground text-[0.93rem] leading-[1.85] mt-2">{p.analyticsProvider}</p>
                  <p className="text-muted-foreground text-[0.93rem] leading-[1.85] mt-2">{p.analyticsTransfer}</p>
                  <p className="mt-2">
                    <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-accent inline-flex items-center gap-1 text-[0.93rem]">
                      {p.analyticsLinkLabel} <ExternalLink size={10} />
                    </a>
                  </p>
                </div>

                <div className="py-6">
                  <h2 className="text-[0.95rem] font-heading font-semibold text-foreground mb-2">{p.clarityTitle}</h2>
                  <p className="text-muted-foreground text-[0.93rem] leading-[1.85]">{p.clarityText}</p>
                  <ul className="list-disc pl-5 space-y-0.5 mt-2 text-muted-foreground text-[0.93rem]">
                    {p.clarityItems.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                  <p className="text-muted-foreground text-[0.93rem] leading-[1.85] mt-2">{p.clarityLegal}</p>
                  <p className="text-muted-foreground text-[0.93rem] leading-[1.85] mt-2">{p.clarityProvider}</p>
                  <p className="text-muted-foreground text-[0.93rem] leading-[1.85] mt-2">{p.clarityTransfer}</p>
                  <p className="mt-2">
                    <a href="https://privacy.microsoft.com/privacystatement" target="_blank" rel="noopener noreferrer" className="text-accent inline-flex items-center gap-1 text-[0.93rem]">
                      {p.clarityLinkLabel} <ExternalLink size={10} />
                    </a>
                  </p>
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
                  <p className="mt-2">
                    <a href="https://www.bfdi.bund.de/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs text-accent">
                      {p.rightsSupervisoryLinkHint} <ExternalLink size={10} />
                    </a>
                  </p>
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
