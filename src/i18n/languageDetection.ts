import type { Language } from "./types";

export const SUPPORTED_LANGUAGES: Language[] = ["de", "en", "nl", "it", "es", "tr", "fr"];
export const STORAGE_KEY = "aurelia-lang";

/** German is the fixed default language of the site. */
export const DEFAULT_LANGUAGE: Language = "de";

export const isLanguage = (value: unknown): value is Language =>
  typeof value === "string" && (SUPPORTED_LANGUAGES as string[]).includes(value);

/** Explicit language in the URL (?lang=tr / #lang=tr / /tr path prefix) wins over everything else. */
export const languageFromUrl = (): Language | null => {
  if (typeof window === "undefined") return null;
  try {
    const url = new URL(window.location.href);
    const param = url.searchParams.get("lang") ?? url.searchParams.get("hl");
    if (isLanguage(param?.toLowerCase())) return param!.toLowerCase() as Language;
    const hashMatch = url.hash.match(/lang=([a-z]{2})/i);
    if (hashMatch && isLanguage(hashMatch[1].toLowerCase())) return hashMatch[1].toLowerCase() as Language;
    const seg = url.pathname.split("/").filter(Boolean)[0]?.toLowerCase();
    if (isLanguage(seg)) return seg as Language;
  } catch {}
  return null;
};

export const storedLanguage = (): Language | null => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return isLanguage(stored) ? stored : null;
  } catch {
    return null;
  }
};

/**
 * Priority: explicit URL language > stored manual choice > German default.
 * No IP/country lookup and no browser-language guessing.
 */
export const resolveInitialLanguage = (): { language: Language; explicit: boolean } => {
  const fromUrl = languageFromUrl();
  if (fromUrl) {
    try {
      localStorage.setItem(STORAGE_KEY, fromUrl);
    } catch {}
    return { language: fromUrl, explicit: true };
  }
  const stored = storedLanguage();
  if (stored) return { language: stored, explicit: true };
  return { language: DEFAULT_LANGUAGE, explicit: false };
};
