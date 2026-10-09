import { Fragment, type ReactNode } from "react";
import Layout from "@/components/Layout";
import Reveal from "@/components/Reveal";
import { ExternalLink } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { usePageSeo } from "@/hooks/usePageSeo";
import { pageSeo } from "@/i18n/pageSeo";
import { privacyCopy, PRIVACY_URLS } from "@/i18n/privacy";
import type { PrivacyNode, PrivacyPart } from "@/i18n/privacy/types";
import datenschutzHeader from "@/assets/datenschutz-header.jpg";

const panelBase =
  "bg-card rounded-[1.5rem] shadow-[0_10px_50px_-10px_hsl(212_55%_20%/0.07),0_4px_16px_-6px_hsl(212_55%_20%/0.04)] border border-border/8";
const panelPadding = "px-6 py-7 md:px-12 md:py-10";
const txt = "text-muted-foreground text-[0.93rem] leading-[1.85]";

/** Renders inline markup: [label](KEY), {mail}, {tel}, \n */
const renderInline = (s: string): ReactNode[] => {
  const out: ReactNode[] = [];
  const re = /\[([^\]]+)\]\(([A-Z0-9_]+)\)|\{mail\}|\{tel\}|\n/g;
  let last = 0;
  let m: RegExpExecArray | null;
  let k = 0;
  while ((m = re.exec(s))) {
    if (m.index > last) out.push(s.slice(last, m.index));
    const tok = m[0];
    if (tok === "\n") out.push(<br key={k++} />);
    else if (tok === "{mail}")
      out.push(<a key={k++} href="mailto:office@aureliaestates.de" className="text-accent hover:underline">office@aureliaestates.de</a>);
    else if (tok === "{tel}")
      out.push(<a key={k++} href="tel:+4921169583033" className="text-accent hover:underline">+49 211 69583033</a>);
    else
      out.push(
        <a key={k++} href={PRIVACY_URLS[m[2]]} target="_blank" rel="noopener noreferrer" className="text-accent inline-flex items-center gap-1 hover:underline">
          {m[1]} <ExternalLink size={10} aria-hidden="true" />
        </a>,
      );
    last = m.index + tok.length;
  }
  if (last < s.length) out.push(s.slice(last));
  return out;
};

const Node = ({ n }: { n: PrivacyNode }) => {
  if (typeof n === "string") return <p>{renderInline(n)}</p>;
  if ("ul" in n)
    return (
      <ul className="list-disc pl-5 space-y-1">
        {n.ul.map((it, i) => <li key={i}>{renderInline(it)}</li>)}
      </ul>
    );
  return (
    <div className="rounded-sm border border-accent/50 bg-secondary/40 p-4 md:p-5 space-y-2">
      {n.box.map((it, i) => <p key={i}>{renderInline(it)}</p>)}
    </div>
  );
};

const Part = ({ id, part, className = "" }: { id: string; part: PrivacyPart; className?: string }) => (
  <div id={id} lang={part.lang} className={`scroll-mt-24 md:scroll-mt-28 ${className}`}>
    <div className={`${panelBase} ${panelPadding}`}>
      <h2 className="font-heading font-bold text-primary text-[1.3rem] md:text-[1.55rem] leading-[1.3]">
        {part.heading.split("\n").map((l, i) => <Fragment key={i}>{i > 0 && <br />}{l}</Fragment>)}
      </h2>
      <div className="mt-2 mb-4 h-[2px] w-10" style={{ background: "hsl(var(--accent))" }} />
      {part.intro && <p className={`${txt} mb-4`}>{renderInline(part.intro)}</p>}
      <div className="divide-y divide-border/30">
        {part.sections.map((s, i) => (
          <div key={s.title} className={i === 0 ? "pb-6" : "py-6"}>
            <h3 className="text-[0.95rem] font-heading font-semibold text-foreground mb-2">{s.title}</h3>
            <div className={`${txt} space-y-2`}>
              {s.body.map((n, j) => <Node key={j} n={n} />)}
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const jumpCls =
  "inline-flex min-h-[44px] items-center justify-center rounded-sm border border-accent/60 bg-primary px-6 text-[0.8rem] font-semibold uppercase tracking-[0.12em] text-primary-foreground hover:bg-primary/90";

const Privacy = () => {
  const { language } = useLanguage();
  usePageSeo(pageSeo[language].privacy.title, pageSeo[language].privacy.description);
  const c = privacyCopy[language] ?? privacyCopy.de;
  const isDe = language === "de";
  const isTr = language === "tr";

  const gdprPart = <Part key="g" id="dsgvo" part={c.gdpr} />;
  const kvkkPart = <Part key="k" id="kvkk" part={c.kvkk} />;
  // Turkish page leads with KVKK; all others lead with the GDPR section.
  const parts = isTr ? [kvkkPart, gdprPart] : [gdprPart, kvkkPart];
  const jumps = isTr
    ? [["#kvkk", c.jumpKvkk], ["#dsgvo", c.jumpGdpr]]
    : [["#dsgvo", c.jumpGdpr], ["#kvkk", c.jumpKvkk]];

  return (
    <Layout>
      <section className="relative w-full overflow-hidden h-[240px] md:h-[380px]" style={{ background: "rgb(10,32,58)" }}>
        <img
          src={datenschutzHeader}
          alt={c.h1}
          width={1920}
          height={720}
          className="absolute inset-0 h-full w-full object-cover object-[68%_center] md:object-center"
        />
        {isDe && (
          <span
            aria-hidden="true"
            style={{ color: "#F1DBA5" }}
            className="absolute font-heading font-semibold leading-none select-none text-[1.2rem] md:text-[1.9rem] [text-shadow:0_1px_6px_rgba(6,20,38,0.85),0_0_2px_rgba(6,20,38,0.9)] left-[8%] top-[62%] md:left-[19%] md:top-[68%]"
          >
            DSGVO
          </span>
        )}
      </section>

      <section className="py-6 md:py-10">
        <div className="container max-w-3xl">
          <Reveal>
            <header className="text-center mb-6 md:mb-8">
              <div className="mx-auto mb-3 h-[2px] w-10" style={{ background: "hsl(var(--accent))" }} />
              <h1 className="font-heading font-bold text-primary leading-[1.2] text-balance text-[1.6rem] md:text-[2.1rem]">{c.h1}</h1>
              <p className="mx-auto mt-3 max-w-2xl text-muted-foreground text-[0.93rem] leading-[1.7]">{c.subtitle}</p>
              <p className="mt-2 text-xs text-muted-foreground/70">{c.updated}</p>
              <nav aria-label={c.navLabel} className="mt-5 flex flex-col sm:flex-row justify-center gap-3">
                {jumps.map(([href, label]) => <a key={href} href={href} className={jumpCls}>{label}</a>)}
              </nav>
            </header>
          </Reveal>

          <div className="space-y-8 md:space-y-10">{parts}</div>

          <p className="mt-6 text-xs text-muted-foreground/60 italic leading-relaxed">{c.disclaimer}</p>
        </div>
      </section>
    </Layout>
  );
};

export default Privacy;
