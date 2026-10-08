import type { Language } from "@/i18n/types";

// Sichtbare Zeichenbegrenzung für Freitextfelder. Eingaben werden NIE
// stillschweigend gekürzt: kein maxLength-Attribut, sondern Zähler + Fehlermeldung,
// Absenden wird blockiert. Die Speichergrenze der Datenbank (message ≤ 5000
// Zeichen inkl. automatisch vorangestellter Formularangaben) prüft fitsStorage().

export const STORAGE_LIMIT = 5000;
export const fitsStorage = (message: string) => message.length <= STORAGE_LIMIT;

type L = { count: (n: number, max: number) => string; tooLong: (max: number) => string; totalTooLong: string };
const copy: Record<string, L> = {
  de: { count: (n, m) => `${n.toLocaleString("de-DE")} / ${m.toLocaleString("de-DE")} Zeichen`, tooLong: (m) => `Der Text ist zu lang. Bitte kürzen Sie ihn auf höchstens ${m.toLocaleString("de-DE")} Zeichen.`, totalTooLong: "Ihre Angaben sind insgesamt zu lang. Bitte kürzen Sie den Freitext oder andere Felder." },
  tr: { count: (n, m) => `${n} / ${m} karakter`, tooLong: (m) => `Metin çok uzun. Lütfen en fazla ${m} karaktere kısaltın.`, totalTooLong: "Bilgileriniz toplamda çok uzun. Lütfen serbest metni veya diğer alanları kısaltın." },
  en: { count: (n, m) => `${n} / ${m} characters`, tooLong: (m) => `The text is too long. Please shorten it to no more than ${m} characters.`, totalTooLong: "Your details are too long overall. Please shorten the free text or other fields." },
  nl: { count: (n, m) => `${n} / ${m} tekens`, tooLong: (m) => `De tekst is te lang. Kort deze in tot maximaal ${m} tekens.`, totalTooLong: "Uw gegevens zijn in totaal te lang. Kort de vrije tekst of andere velden in." },
  it: { count: (n, m) => `${n} / ${m} caratteri`, tooLong: (m) => `Il testo è troppo lungo. La preghiamo di ridurlo a massimo ${m} caratteri.`, totalTooLong: "I dati inseriti sono complessivamente troppo lunghi. La preghiamo di accorciare il testo libero o altri campi." },
  es: { count: (n, m) => `${n} / ${m} caracteres`, tooLong: (m) => `El texto es demasiado largo. Acórtelo a un máximo de ${m} caracteres.`, totalTooLong: "Sus datos son demasiado largos en total. Acorte el texto libre u otros campos." },
  fr: { count: (n, m) => `${n} / ${m} caractères`, tooLong: (m) => `Le texte est trop long. Veuillez le réduire à ${m} caractères maximum.`, totalTooLong: "Vos informations sont trop longues au total. Veuillez raccourcir le texte libre ou d'autres champs." },
};
export const limitCopy = (lang: Language | string) => copy[lang] ?? copy.en;

export const TextLimit = ({ length, max, lang, error }: { length: number; max: number; lang: Language | string; error?: string }) => {
  const c = limitCopy(lang);
  const over = length > max;
  return (
    <span className="mt-1 block normal-case tracking-normal" aria-live="polite">
      <span className={`block text-right text-xs ${over ? "font-semibold text-destructive" : "text-muted-foreground"}`}>{c.count(length, max)}</span>
      {(over || error) && <span className="block text-sm text-destructive">{error || c.tooLong(max)}</span>}
    </span>
  );
};
