import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";
import type { Language } from "@/i18n/types";

const SITE_ORIGIN = "https://www.aureliaestates.de";

/**
 * Keeps <link rel="canonical"> and og:url pointed at the current route
 * instead of the static homepage URL from index.html.
 */
export const useCanonicalUrl = () => {
  const { pathname } = useLocation();
  const { language } = useLanguage();

  useEffect(() => {
    const route = pathname === "/" ? "/" : pathname.replace(/\/+$/, "");
    const url = language === "de" ? `${SITE_ORIGIN}${route}` : `${SITE_ORIGIN}${route}?lang=${language}`;

    let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = url;

    const languages: Language[] = ["de", "tr", "en", "nl", "it", "es", "fr"];
    for (const lang of languages) {
      let alternate = document.querySelector<HTMLLinkElement>(`link[rel="alternate"][hreflang="${lang}"]`);
      if (!alternate) {
        alternate = document.createElement("link");
        alternate.rel = "alternate";
        alternate.hreflang = lang;
        document.head.appendChild(alternate);
      }
      alternate.href = lang === "de" ? `${SITE_ORIGIN}${route}` : `${SITE_ORIGIN}${route}?lang=${lang}`;
    }
    const fallback = document.querySelector<HTMLLinkElement>('link[rel="alternate"][hreflang="x-default"]');
    if (fallback) fallback.href = `${SITE_ORIGIN}${route}`;

    const ogUrl = document.querySelector<HTMLMetaElement>('meta[property="og:url"]');
    if (ogUrl) ogUrl.content = url;
  }, [language, pathname]);
};
