/**
 * Privacy page copy. Inline markup inside strings:
 *  [label](KEY)  -> external link (KEY resolved via PRIVACY_URLS)
 *  {mail} / {tel} -> company e-mail / phone link
 *  \n            -> line break
 */
export type PrivacyNode = string | { ul: string[] } | { box: string[] };
export interface PrivacySection { title: string; body: PrivacyNode[] }
export interface PrivacyPart { heading: string; intro?: string; sections: PrivacySection[]; lang: string }
export interface PrivacyCopy {
  h1: string;
  subtitle: string;
  updated: string;
  jumpGdpr: string;
  jumpKvkk: string;
  navLabel: string;
  gdpr: PrivacyPart;
  kvkk: PrivacyPart;
  disclaimer: string;
}

export const PRIVACY_URLS: Record<string, string> = {
  EURLEX: "https://eur-lex.europa.eu/legal-content/DE/TXT/?uri=CELEX:32016R0679",
  BDSG: "https://www.gesetze-im-internet.de/bdsg_2018/",
  LDI: "https://www.ldi.nrw.de/",
  KVKK: "https://www.kvkk.gov.tr/",
  KVKKLAW: "https://www.kvkk.gov.tr/Icerik/6649/Personal-Data-Protection-Law",
  KVKKAYD: "https://www.kvkk.gov.tr/Icerik/2033/Aydinlatma-Yukumlulugu-",
  KVKKYD: "https://www.kvkk.gov.tr/Icerik/2053/Yurtdisina-Aktarim",
};

export const COMPANY_ADDRESS = "Aurelia Grundbesitz GmbH\nGrevenbroicher Weg 2\n40547 Düsseldorf";
