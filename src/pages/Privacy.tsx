import Layout from "@/components/Layout";
import heroImg from "@/assets/hero-building.jpg";
import { ExternalLink } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const dsgvoBaseUrl = "https://dsgvo-gesetz.de/art-";

const Privacy = () => {
  const { t } = useLanguage();
  const p = t.privacy;

  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-28">
        <div className="absolute inset-0">
          <img src={heroImg} alt={p.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-primary/70" />
        </div>
        <div className="relative container text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground">{p.title}</h1>
          <div className="w-16 h-0.5 bg-accent mx-auto mt-6" />
        </div>
      </section>

      <section className="py-24">
        <div className="container max-w-3xl prose-sm">
          <div className="space-y-10 text-muted-foreground text-sm leading-relaxed">

            {/* 1 Controller */}
            <div>
              <h2 className="text-xl font-bold text-foreground mb-3">{p.controllerTitle}</h2>
              <p className="whitespace-pre-line">{p.controllerText}</p>
              <p className="mt-2">{p.controllerCeo}</p>
            </div>

            {/* 2 General */}
            <div>
              <h2 className="text-xl font-bold text-foreground mb-3">{p.generalTitle}</h2>
              <p>
                {p.generalText}{" "}
                <a href="https://dsgvo-gesetz.de/" target="_blank" rel="noopener noreferrer" className="text-accent underline inline-flex items-center gap-1">
                  {p.generalDsgvoLabel} <ExternalLink size={12} />
                </a>{" "}
                {" / "}
                <a href="https://www.gesetze-im-internet.de/bdsg_2018/" target="_blank" rel="noopener noreferrer" className="text-accent underline inline-flex items-center gap-1">
                  {p.generalBdsgLabel} <ExternalLink size={12} />
                </a>.
              </p>
              <p className="text-[11px] text-muted-foreground/60 mt-1">{p.generalLinkHint}</p>
            </div>

            {/* 3 Legal bases */}
            <div>
              <h2 className="text-xl font-bold text-foreground mb-3">{p.legalTitle}</h2>
              <ul className="list-disc pl-5 space-y-2 mt-2">
                {p.legalBases.map((base, i) => (
                  <li key={i}>
                    <a href={`${dsgvoBaseUrl}6-dsgvo/`} target="_blank" rel="noopener noreferrer" className="text-accent underline inline-flex items-center gap-1">
                      <strong>{base.label}</strong> <ExternalLink size={12} />
                    </a>{" "}– {base.desc}
                  </li>
                ))}
              </ul>
              <p className="text-[11px] text-muted-foreground/60 mt-1">{p.legalLinkHint}</p>
            </div>

            {/* 4 Server logs */}
            <div>
              <h2 className="text-xl font-bold text-foreground mb-3">{p.serverLogsTitle}</h2>
              <p>{p.serverLogsText}</p>
              <ul className="list-disc pl-5 space-y-1 mt-2">
                {p.serverLogsItems.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              <p className="mt-2">{p.serverLogsLegal}</p>
            </div>

            {/* 5 Contact form */}
            <div>
              <h2 className="text-xl font-bold text-foreground mb-3">{p.contactFormTitle}</h2>
              <p>{p.contactFormText}</p>
              <p className="mt-2">{p.contactFormLegal}</p>
            </div>

            {/* 6 Google Maps */}
            <div>
              <h2 className="text-xl font-bold text-foreground mb-3">{p.googleMapsTitle}</h2>
              <p>
                {p.googleMapsText}
              </p>
              <p className="mt-2">{p.googleMapsLegal}</p>
              <p className="text-[11px] text-muted-foreground/60 mt-1">{p.googleMapsLinkHint}</p>
            </div>

            {/* 7 Retention */}
            <div>
              <h2 className="text-xl font-bold text-foreground mb-3">{p.retentionTitle}</h2>
              <p>{p.retentionText}</p>
            </div>

            {/* 8 Rights */}
            <div>
              <h2 className="text-xl font-bold text-foreground mb-3">{p.rightsTitle}</h2>
              <p>{p.rightsIntro}</p>
              <ul className="list-disc pl-5 space-y-2 mt-2">
                {p.rightsItems.map((r) => (
                  <li key={r.art}>
                    <a
                      href={`${dsgvoBaseUrl}${r.art}-dsgvo/`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent underline inline-flex items-center gap-1"
                    >
                      {r.label} ({r.desc}) <ExternalLink size={12} />
                    </a>
                    <span className="block text-[11px] text-muted-foreground/60">↗ dsgvo-gesetz.de/art-{r.art}-dsgvo</span>
                  </li>
                ))}
              </ul>
              <p className="mt-2">
                {p.rightsSupervisory.split("Datenschutz-Aufsichtsbehörde").length > 1 ? (
                  <>
                    {p.rightsSupervisory.split(/Datenschutz-Aufsichtsbehörde|data protection supervisory authority|autorità di controllo|autoridad de control|veri koruma denetim makamı/i)[0]}
                    <a href="https://www.bfdi.bund.de/" target="_blank" rel="noopener noreferrer" className="text-accent underline inline-flex items-center gap-1">
                      Datenschutz-Aufsichtsbehörde <ExternalLink size={12} />
                    </a>
                    {p.rightsSupervisory.split(/Datenschutz-Aufsichtsbehörde/i)[1]}
                  </>
                ) : (
                  p.rightsSupervisory
                )}
              </p>
              <p className="text-[11px] text-muted-foreground/60 mt-1">{p.rightsSupervisoryLinkHint}</p>
            </div>

            {/* 9 Contact privacy */}
            <div>
              <h2 className="text-xl font-bold text-foreground mb-3">{p.contactPrivacyTitle}</h2>
              <p className="whitespace-pre-line">{p.contactPrivacyText}</p>
            </div>

            {/* External links disclaimer */}
            <div className="bg-secondary p-6 border border-border rounded mt-6">
              <p className="text-xs text-muted-foreground leading-relaxed">
                {p.externalLinksDisclaimer}
              </p>
            </div>

            <p className="text-xs text-muted-foreground pt-4 border-t border-border">
              {p.lastUpdated}
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Privacy;
