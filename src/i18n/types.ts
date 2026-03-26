export type Language = "de" | "en" | "it" | "es" | "tr" | "nl";

export interface Translations {
  nav: {
    home: string;
    about: string;
    services: string;
    taxBenefits: string;
    investors: string;
    glossar: string;
    contact: string;
  };
  footer: {
    navigation: string;
    contact: string;
    rights: string;
    imprint: string;
    privacy: string;
    disclaimer: string;
    brandLine: string;
    subline: string;
    
  };
  hero: {
    slogan: string;
    subtitle: string;
    cta: string;
    ctaSecondary: string;
  };
  common: {
    learnMore: string;
    sendMessage: string;
    back: string;
    required: string;
    privacyCheckbox: string;
    yes: string;
    no: string;
    requiredFields: string;
    pleaseSelect: string;
    salutationOptions: string[];
    callbackRequest: string;
    personalContact: string;
    ourTeam: string;
    teamDescription: string;
    availability: string;
    monFri: string;
    saturday: string;
    sunday: string;
    byAppointment: string;
    closed: string;
    emailOutsideHours: string;
    ourLocation: string;
    address: string;
    country: string;
    languageAria: string;
    navigationOpenAria: string;
    scrollDownAria: string;
    scrollTopAria: string;
    heroMeta: string;
    initialAssessmentNote: string;
    cookieText: string;
    cookieAccept: string;
    cookieReject: string;
    mapConsentText: string;
    mapConsentBtn: string;
  };
  index: {
    bulletTitle: string;
    bullets: string[];
    approachTitle: string;
    pillars: { title: string; text: string }[];
    strategyTitle: string;
    strategySubtitle: string;
    ourServices: string;
    locationTitle: string;
    locationText: string;
    contactCta: string;
  };
  landing: {
    heroLabel: string;
    heroSubtitle: string;
    heroCta: string;
    heroCtaSecondary: string;
    trustLine: string;
    problemLabel: string;
    problemTitle: string;
    problemPoints: { title: string; text: string }[];
    solutionLabel: string;
    solutionTitle: string;
    solutionPoints: { title: string; text: string }[];
    trustLabel: string;
    trustTitle: string;
    trustPoints: { value: string; label: string }[];
    aboutLabel: string;
    aboutTitle: string;
    aboutText: string;
    aboutText2: string;
    servicesLabel: string;
    servicesTitle: string;
    serviceCards: { title: string; text: string }[];
    valuesLabel: string;
    valuesTitle: string;
    valuePoints: { title: string; text: string }[];
    projectsLabel: string;
    projectsTitle: string;
    projectsText: string;
    stats: { value: string; label: string }[];
    ctaLabel: string;
    ctaTitle: string;
    ctaText: string;
    ctaButton: string;
    trustStatsLabel: string;
    trustStatsItems: { value: string; label: string }[];
    heroMetaLine: string;
    referencesLabel: string;
    referencesTitle: string;
    referenceProjects: { location: string; year: string; type: string; before: string; after: string; result: string }[];
    refBeforeLabel: string;
    refAfterLabel: string;
    refResultLabel: string;
  };
  about: {
    heroTitle: string;
    companyLabel: string;
    companyTitle: string;
    companyP1: string;
    companyP2: string;
    philosophyLabel: string;
    philosophyTitle: string;
    philosophyP1: string;
    philosophyP2: string;
    experienceLabel: string;
    experienceTitle: string;
    experienceP1: string;
    experienceP2: string;
    experienceP3: string;
  };
  services: {
    heroTitle: string;
    introLabel: string;
    introTitle: string;
    introSubtitle: string;
    introText: string;
    holdTitle: string;
    holdItems: string[];
    renovateTitle: string;
    renovateItems: string[];
    comparisonLabel: string;
    comparisonTitle: string;
    comparisonHeaders: string[];
    comparisonRows: string[][];
    experienceLabel: string;
    experienceTitle: string;
    experienceText: string;
  };
  contact: {
    title: string;
    subtitle: string;
    introText: string;
    salutation: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    subject: string;
    message: string;
    send: string;
    successTitle: string;
    successText: string;
    subjectOptions: string[];
    company: string;
    messagePlaceholder: string;
    formLabel: string;
    formTitle: string;
    phonePending: string;
    privacyNote: string;
  };
  tax: {
    heroTitle: string;
    introTitle: string;
    introSubtitle: string;
    categoryTax: string;
    categoryFunding: string;
    categoryKnowledge: string;
    overviewTitle: string;
    overviewHeaders: string[];
    areaColumn: string;
    instrumentColumn: string;
    benefitColumn: string;
    glossarTitle: string;
    glossarDesc: string;
    disclaimer: string;
    externalLinksDisclaimer: string;
    backToOverview: string;
    furtherLinks: string;
    taxDisclaimer: string;
    // AfA
    afaTitle: string;
    afaShortDesc: string;
    afaSectionTitle: string;
    afaIntro: string;
    afaSections: { heading: string; text: string }[];
    // Energetisch
    energetischTitle: string;
    energetischShortDesc: string;
    energetischSectionTitle: string;
    energetischIntro: string;
    energetischSections: { heading: string; text: string }[];
    // KfW
    kfwTitle: string;
    kfwShortDesc: string;
    kfwSectionTitle: string;
    kfwIntro: string;
    kfwSections: { heading: string; text: string }[];
    // BAFA
    bafaTitle: string;
    bafaShortDesc: string;
    bafaSectionTitle: string;
    bafaIntro: string;
    bafaSections: { heading: string; text: string }[];
    // Glossar
    glossarSectionTitle: string;
    glossarSectionSubtitle: string;
    glossarItems: { term: string; definition: string }[];
  };
  privacy: {
    title: string;
    controllerTitle: string;
    controllerText: string;
    controllerCeo: string;
    generalTitle: string;
    generalText: string;
    generalDsgvoLabel: string;
    generalBdsgLabel: string;
    generalLinkHint: string;
    legalTitle: string;
    legalBases: { label: string; desc: string }[];
    legalLinkHint: string;
    serverLogsTitle: string;
    serverLogsText: string;
    serverLogsItems: string[];
    serverLogsLegal: string;
    contactFormTitle: string;
    contactFormText: string;
    contactFormLegal: string;
    googleMapsTitle: string;
    googleMapsText: string;
    googleMapsLegal: string;
    googleMapsLinkHint: string;
    retentionTitle: string;
    retentionText: string;
    rightsTitle: string;
    rightsIntro: string;
    rightsItems: { label: string; art: string; desc: string }[];
    rightsSupervisory: string;
    rightsSupervisoryLinkHint: string;
    contactPrivacyTitle: string;
    contactPrivacyText: string;
    externalLinksDisclaimer: string;
    lastUpdated: string;
  };
  notFound: {
    title: string;
    text: string;
    link: string;
  };
  impressum: {
    title: string;
    tmbTitle: string;
    representedByTitle: string;
    representedByText: string;
    contactTitle: string;
    contactText: string;
    registerTitle: string;
    registerText: string;
    disclaimerTitle: string;
    disclaimerText: string;
    copyrightTitle: string;
    copyrightText: string;
  };
  investors: {
    seoTitle: string;
    seoDesc: string;
    gate: {
      title: string;
      intro: string;
      body1: string;
      body2: string;
      body3: string;
      checkbox: string;
      acceptBtn: string;
      declineBtn: string;
    };
    heroBadge: string;
    heroTitle: string;
    heroDesc: string;
    heroBtn: string;
    heroMicro: string;
    audienceBadge: string;
    audienceTitle: string;
    audienceDesc: string;
    processBadge: string;
    processTitle: string;
    processItems: { title: string; desc: string }[];
    completedBadge: string;
    completedTitle: string;
    completedDesc: string;
    caseStudy: {
      title: string;
      intro: string;
      data: { label: string; value: string }[];
      resultText: string;
      note: string;
    };
    pipelineBadge: string;
    pipelineTitle: string;
    pipelineDesc: string;
    pipelineProject: {
      title: string;
      text: string;
      extra: string;
      micro: string;
    };
    glossaryBadge: string;
    glossaryLinkText: string;
    glossaryTitle: string;
    glossaryDisclaimer: string;
    glossaryLetters: string[];
    glossaryEntries: Record<string, { term: string; desc: string }[]>;
    faqBadge: string;
    faqTitle: string;
    faqIntro: string;
    faqItems: { q: string; a: string }[];
    disclaimerBadge: string;
    disclaimerTitle: string;
    disclaimerDesc: string;
    contactBadge: string;
    contactTitle: string;
    contactDesc: string;
    contactBtn: string;
    contactMicro: string;
    formSubjectOption: string;
    formPrivacyNote: string;
  };
}

export const languageNames: Record<Language, string> = {
  de: "Deutsch",
  en: "English",
  it: "Italiano",
  es: "Español",
  tr: "Türkçe",
  nl: "Nederlands",
};

export const languageCodes: Language[] = ["de", "en", "nl", "it", "es", "tr"];
