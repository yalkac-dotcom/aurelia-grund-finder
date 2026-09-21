import type { Language } from "./types";

export const SUPPORTED_LANGUAGES: Language[] = ["de", "en", "nl", "it", "es", "tr"];
export const STORAGE_KEY = "aurelia-lang";
export const COUNTRY_CACHE_KEY = "aurelia-geo-country";

export const isLanguage = (value: unknown): value is Language =>
  typeof value === "string" && (SUPPORTED_LANGUAGES as string[]).includes(value);

/** Country (ISO-3166 alpha-2) -> Aurelia language. Country level only, no precise location. */
const countryLanguageMap: Record<string, Language> = {
  // German
  DE: "de", AT: "de", CH: "de", LI: "de", LU: "de",
  // Turkish
  TR: "tr", CY: "tr",
  // Dutch
  NL: "nl", BE: "nl", SR: "nl", AW: "nl", CW: "nl",
  // Italian
  IT: "it", SM: "it", VA: "it",
  // Spanish
  ES: "es", MX: "es", AR: "es", CO: "es", CL: "es", PE: "es", VE: "es", EC: "es",
  UY: "es", PY: "es", BO: "es", CR: "es", PA: "es", GT: "es", HN: "es", SV: "es",
  NI: "es", DO: "es", CU: "es", PR: "es", GQ: "es",
  // English
  GB: "en", IE: "en", US: "en", CA: "en", AU: "en", NZ: "en", ZA: "en", IN: "en",
  SG: "en", MT: "en", NG: "en", KE: "en", GH: "en", PH: "en", JM: "en", TT: "en",
};

/** Unknown/unmapped country -> English (per spec). */
export const languageForCountry = (country?: string | null): Language | null => {
  if (!country) return null;
  const code = country.trim().toUpperCase();
  if (code.length !== 2) return null;
  return countryLanguageMap[code] ?? "en";
};

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

/** Browser language, only used as a hint when GeoIP is unavailable. */
export const languageFromBrowser = (): Language | null => {
  if (typeof navigator === "undefined") return null;
  const candidates = [...(navigator.languages ?? []), navigator.language].filter(Boolean);
  for (const entry of candidates) {
    const base = entry.toLowerCase().split("-")[0];
    if (isLanguage(base)) return base as Language;
  }
  return null;
};

export const cachedCountry = (): string | null => {
  try {
    const value = sessionStorage.getItem(COUNTRY_CACHE_KEY);
    return value && value.length === 2 ? value : null;
  } catch {
    return null;
  }
};

/** Coarse, privacy-friendly country lookup (country code only, no GPS, no permission prompt). */
export const fetchCountry = async (signal?: AbortSignal): Promise<string | null> => {
  const cached = cachedCountry();
  if (cached) return cached;

  const readers: Array<() => Promise<string | null>> = [
    async () => {
      const res = await fetch("https://www.cloudflare.com/cdn-cgi/trace", { signal });
      if (!res.ok) return null;
      const text = await res.text();
      return text.match(/^loc=([A-Z]{2})$/m)?.[1] ?? null;
    },
    async () => {
      const res = await fetch("https://ipapi.co/country/", { signal });
      if (!res.ok) return null;
      const text = (await res.text()).trim().toUpperCase();
      return /^[A-Z]{2}$/.test(text) ? text : null;
    },
  ];

  for (const read of readers) {
    try {
      const country = await read();
      if (country) {
        try {
          sessionStorage.setItem(COUNTRY_CACHE_KEY, country);
        } catch {}
        return country;
      }
    } catch {
      // try next provider
    }
  }
  return null;
};

/**
 * Priority: stored manual choice > explicit URL language > GeoIP country > browser language > German.
 * Returns the language to use plus whether it came from an explicit (manual/URL) source.
 */
export const resolveInitialLanguage = (): { language: Language; explicit: boolean } => {
  const stored = storedLanguage();
  if (stored) return { language: stored, explicit: true };
  const fromUrl = languageFromUrl();
  if (fromUrl) return { language: fromUrl, explicit: true };
  const country = cachedCountry();
  const fromCountry = languageForCountry(country);
  if (fromCountry) return { language: fromCountry, explicit: false };
  return { language: "de", explicit: false };
};
