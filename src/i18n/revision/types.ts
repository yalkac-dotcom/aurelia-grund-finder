type TD = { title: string; desc: string };
type TT = { title: string; text: string };
type Link = { label: string; path: string };

export type RevisionCopy = {
  footer: { brandLine: string; subline: string; navItems: Link[]; legalItems: Link[] };
  contact: { subtitle: string; introText: string; hereForYou: string; moduleIntro2: string; moduleCta2: string; moduleCta3: string };
  partners: {
    heroTitle: string; heroDescription: string; heroPrimaryCta: string; heroSecondaryCta: string; heroTrustLine: string;
    formsTitle: string; formsIntro: string; forms: TD[];
    principlesTitle: string; principlesText: string; principles: TT[];
    stepsTitle: string; steps: TD[]; stepsNote: string; b2bCta: string;
    finalCtaTitle: string; finalCtaText: string; finalCtaButton: string;
  };
  howItWorks: {
    heroTitle: string; heroDescription: string; heroPrimaryCta: string; heroSecondaryCta: string; heroTrustLine: string;
    introTitle: string; introText: string;
    processGroupsTitle: string; processGroups: { title: string; steps: string[] }[];
    holdTitle: string; holdIntro: string; holdSteps: TD[]; holdNote: string;
    principlesTitle: string; principles: TT[];
    finalCtaTitle: string; finalCtaText: string; finalCtaButton: string;
  };
  aboutV2: {
    seoDescription: string;
    hero: { kicker: string; title: string; subtitle: string; body: string[] };
    trustTiles: TT[];
    markets: TT;
    standing: { headline: string; body: string[]; values: TT[] };
    approach: { headline: string; body: string[] };
    situations: { headline: string; items: string[] };
    closing: { headline: string; body: string; primary: string; secondary: string };
  };
  faqPage: { kicker: string; title: string; intro: string; items: { q: string; a: string }[]; ctaTitle: string; ctaText: string };
};
