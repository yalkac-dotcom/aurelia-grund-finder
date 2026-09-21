import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const SITE_ORIGIN = "https://www.aureliaestates.de";

/**
 * Keeps <link rel="canonical"> and og:url pointed at the current route
 * instead of the static homepage URL from index.html.
 */
export const useCanonicalUrl = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const url = `${SITE_ORIGIN}${pathname === "/" ? "/" : pathname.replace(/\/+$/, "")}`;

    let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = url;

    const ogUrl = document.querySelector<HTMLMetaElement>('meta[property="og:url"]');
    if (ogUrl) ogUrl.content = url;
  }, [pathname]);
};
