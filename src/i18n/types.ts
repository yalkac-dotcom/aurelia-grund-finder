export type Language = "de" | "en" | "it" | "es" | "tr";

export interface Translations {
  nav: {
    home: string;
    about: string;
    services: string;
    taxBenefits: string;
    investors: string;
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
  about: {
    heroTitle: string;
    companyTitle: string;
    companyP1: string;
    companyP2: string;
    philosophyTitle: string;
    philosophyP1: string;
    philosophyP2: string;
    experienceTitle: string;
    experienceP1: string;
    experienceP2: string;
    experienceP3: string;
  };
  services: {
    heroTitle: string;
    introTitle: string;
    introSubtitle: string;
    introText: string;
    holdTitle: string;
    holdItems: string[];
    renovateTitle: string;
    renovateItems: string[];
    comparisonTitle: string;
    comparisonHeaders: string[];
    comparisonRows: string[][];
    experienceTitle: string;
    experienceText: string;
  };
  investor: {
    disclaimerTitle: string;
    disclaimerText: string;
    acceptButton: string;
    declineButton: string;
    heroTitle: string;
    heroSubtitle: string;
    whyTitle: string;
    whyP1: string;
    whyP2: string;
    whyDisclaimer: string;
    cooperationTitle: string;
    cooperationModels: { title: string; text: string }[];
    cooperationDisclaimer: string;
    transparencyTitle: string;
    transparencyText: string;
    formTitle: string;
    formSubtitle: string;
    sendInquiry: string;
    messageLabel: string;
    messagePlaceholder: string;
    liabilityNotice: string;
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
}

export const languageNames: Record<Language, string> = {
  de: "Deutsch",
  en: "English",
  it: "Italiano",
  es: "Español",
  tr: "Türkçe",
};

export const languageCodes: Language[] = ["de", "en", "it", "es", "tr"];
