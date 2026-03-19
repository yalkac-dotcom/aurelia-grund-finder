import Layout from "@/components/Layout";
import Reveal from "@/components/Reveal";
import heroImg from "@/assets/hero-building.jpg";
import { ExternalLink } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const dsgvoBaseUrl = "https://dsgvo-gesetz.de/art-";

const Privacy = () => {
  const { t } = useLanguage();
  const p = t.privacy;

  return (
    <Layout>
      <section className="relative h-[45vh] min-h-[320px] flex items-end">
        <div className="absolute inset-0">
          <img src={heroImg} alt={p.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F1113]/70 via-[#0F1113]/25 to-transparent" />
        </div>
        <div className="relative container pb-16 md:pb-24">
          <Reveal>
            <h1 className="text-[2.25rem] md:text-[3rem] font-heading font-semibold text-white leading-[1.1]">
              {p.title}
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="py-28 md:py-36">
        <div className="container max-w-3xl">
          <div className="divide-y divide-border/60">
            {/* 1 Controller */}
            <Reveal>
              <div className="pb-10">
                <h2 className="text-[1.1rem] font-heading font-semibold text-foreground mb-4">{p.controllerTitle}</h2>
                <p className="text-muted-foreground text-[0.9rem] leading-[1.85] whitespace-pre-line">{p.controllerText}</p>
                <p className="text-muted-foreground text-[0.9rem] leading-[1.85] mt-2">{p.controllerCeo}</p>
              </div>
            </Reveal>

            {/* 2 General */}
            <Reveal delay={0.05}>
              <div className="py-10">
                <h2 className="text-[1.1rem] font-heading font-semibold text-foreground mb-4">{p.generalTitle}</h2>
                <p className="text-muted-foreground text-[0.9rem] leading-[1.85]">
                  {p.generalText}{" "}
                  <a href="https://dsgvo-gesetz.de/" target="_blank" rel="noopener noreferrer" className="text-accent inline-flex items-center gap-1">
                    {p.generalDsgvoLabel} <ExternalLink size={11} />
                  </a>{" / "}
                  <a href="https://www.gesetze-im-internet.de/bdsg_2018/" target="_blank" rel="noopener noreferrer" className="text-accent inline-flex items-center gap-1">
                    {p.generalBdsgLabel} <ExternalLink size={11} />
                  </a>.
                </p>
                <p className="text-[0.75rem] text-muted-foreground/60 mt-2">{p.generalLinkHint}</p>
              </div>
            </Reveal>

            {/* 3 Legal bases */}
            <Reveal delay={0.1}>
              <div className="py-10">
                <h2 className="text-[1.1rem] font-heading font-semibold text-foreground mb-4">{p.legalTitle}</h2>
                <ul className="list-disc pl-5 space-y-2 text-muted-foreground text-[0.9rem] leading-[1.85]">
                  {p.legalBases.map((base, i) => (
                    <li key={i}>
                      <a href={`${dsgvoBaseUrl}6-dsgvo/`} target="_blank" rel="noopener noreferrer" className="text-accent inline-flex items-center gap-1">
                        <strong>{base.label}</strong> <ExternalLink size={11} />
                      </a>{" "}– {base.desc}
                    </li>
                  ))}
                </ul>
                <p className="text-[0.75rem] text-muted-foreground/60 mt-2">{p.legalLinkHint}</p>
              </div>
            </Reveal>

            {/* 4 Server logs */}
            <Reveal delay={0.15}>
              <div className="py-10">
                <h2 className="text-[1.1rem] font-heading font-semibold text-foreground mb-4">{p.serverLogsTitle}</h2>
                <p className="text-muted-foreground text-[0.9rem] leading-[1.85]">{p.serverLogsText}</p>
                <ul className="list-disc pl-5 space-y-1 mt-3 text-muted-foreground text-[0.9rem]">
                  {p.serverLogsItems.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                <p className="text-muted-foreground text-[0.9rem] leading-[1.85] mt-3">{p.serverLogsLegal}</p>
              </div>
            </Reveal>

            {/* 5 Contact form */}
            <Reveal delay={0.2}>
              <div className="py-10">
                <h2 className="text-[1.1rem] font-heading font-semibold text-foreground mb-4">{p.contactFormTitle}</h2>
                <p className="text-muted-foreground text-[0.9rem] leading-[1.85]">{p.contactFormText}</p>
                <p className="text-muted-foreground text-[0.9rem] leading-[1.85] mt-3">{p.contactFormLegal}</p>
              </div>
            </Reveal>

            {/* 6 Google Maps */}
            <Reveal delay={0.25}>
              <div className="py-10">
                <h2 className="text-[1.1rem] font-heading font-semibold text-foreground mb-4">{p.googleMapsTitle}</h2>
                <p className="text-muted-foreground text-[0.9rem] leading-[1.85]">{p.googleMapsText}</p>
                <p className="text-muted-foreground text-[0.9rem] leading-[1.85] mt-3">{p.googleMapsLegal}</p>
                <p className="text-[0.75rem] text-muted-foreground/60 mt-2">{p.googleMapsLinkHint}</p>
              </div>
            </Reveal>

            {/* 7 Retention */}
            <Reveal delay={0.3}>
              <div className="py-10">
                <h2 className="text-[1.1rem] font-heading font-semibold text-foreground mb-4">{p.retentionTitle}</h2>
                <p className="text-muted-foreground text-[0.9rem] leading-[1.85]">{p.retentionText}</p>
              </div>
            </Reveal>

            {/* 8 Rights */}
            <Reveal delay={0.35}>
              <div className="py-10">
                <h2 className="text-[1.1rem] font-heading font-semibold text-foreground mb-4">{p.rightsTitle}</h2>
                <p className="text-muted-foreground text-[0.9rem] leading-[1.85]">{p.rightsIntro}</p>
                <ul className="list-disc pl-5 space-y-2 mt-3 text-muted-foreground text-[0.9rem]">
                  {p.rightsItems.map((r) => (
                    <li key={r.art}>
                      <a href={`${dsgvoBaseUrl}${r.art}-dsgvo/`} target="_blank" rel="noopener noreferrer" className="text-accent inline-flex items-center gap-1">
                        {r.label} ({r.desc}) <ExternalLink size={11} />
                      </a>
                    </li>
                  ))}
                </ul>
                <p className="text-muted-foreground text-[0.9rem] leading-[1.85] mt-3">
                  {p.rightsSupervisory.split("Datenschutz-Aufsichtsbehörde").length > 1 ? (
                    <>
                      {p.rightsSupervisory.split(/Datenschutz-Aufsichtsbehörde|data protection supervisory authority|autorità di controllo|autoridad de control|veri koruma denetim makamı/i)[0]}
                      <a href="https://www.bfdi.bund.de/" target="_blank" rel="noopener noreferrer" className="text-accent inline-flex items-center gap-1">
                        Datenschutz-Aufsichtsbehörde <ExternalLink size={11} />
                      </a>
                      {p.rightsSupervisory.split(/Datenschutz-Aufsichtsbehörde/i)[1]}
                    </>
                  ) : (
                    p.rightsSupervisory
                  )}
                </p>
              </div>
            </Reveal>

            {/* 9 Contact privacy */}
            <Reveal delay={0.4}>
              <div className="py-10">
                <h2 className="text-[1.1rem] font-heading font-semibold text-foreground mb-4">{p.contactPrivacyTitle}</h2>
                <p className="text-muted-foreground text-[0.9rem] leading-[1.85] whitespace-pre-line">{p.contactPrivacyText}</p>
              </div>
            </Reveal>

            {/* External links disclaimer */}
            <Reveal delay={0.45}>
              <div className="pt-10">
                <p className="text-[0.8rem] text-muted-foreground italic leading-relaxed">{p.externalLinksDisclaimer}</p>
                <p className="text-[0.8rem] text-muted-foreground mt-6 pt-6 border-t border-border/60">{p.lastUpdated}</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Privacy;
