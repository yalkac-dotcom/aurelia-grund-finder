import { useEffect } from "react";

/**
 * Sets title + description (incl. OG/Twitter mirrors) for a single page.
 * Marks the document so the language provider does not overwrite page level SEO.
 */
export const usePageSeo = (title: string, description: string) => {
  useEffect(() => {
    document.documentElement.dataset.pageSeo = "true";
    const titleEl = document.querySelector("title");
    if (titleEl) titleEl.textContent = title;

    const setMeta = (selector: string, content: string) => {
      document.querySelector(selector)?.setAttribute("content", content);
    };

    setMeta('meta[name="description"]', description);
    setMeta('meta[property="og:title"]', title);
    setMeta('meta[property="og:description"]', description);
    setMeta('meta[name="twitter:title"]', title);
    setMeta('meta[name="twitter:description"]', description);

    return () => {
      delete document.documentElement.dataset.pageSeo;
    };
  }, [title, description]);
};
