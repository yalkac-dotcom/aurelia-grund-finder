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
  };
  common: {
    learnMore: string;
    sendMessage: string;
    back: string;
    required: string;
    privacyCheckbox: string;
    yes: string;
    no: string;
  };
  investor: {
    disclaimerTitle: string;
    disclaimerText: string;
    acceptButton: string;
    declineButton: string;
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
  };
  privacy: {
    title: string;
    // Full privacy content will be added in Step 2
  };
  impressum: {
    title: string;
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
