// Prepares the header photo (and, for the Turkey page, its code chunk) of a
// main page when a navigation link is hovered, focused or touched.
// Uses the exact same srcset/sizes as the rendered hero, so the browser picks
// the same file and the later <img> request is served from cache.
const SIZES = "(max-width: 640px) 100vw, (max-width: 1440px) 75vw, 1920px";

const HEROES: Record<string, [string, number]> = {
  "/": ["141562359", 1920],
  "/fuer-kaeufer": ["302581671", 2048],
  "/fuer-eigentumer-in-not": ["368296755", 2048],
  "/immobilien-tuerkei": ["502929748", 2048],
  "/fuer-geschaeftspartner": ["364445283", 2048],
};

const prepared = new Set<string>();

export function prepareRoute(to: string) {
  const path = (to.split(/[?#]/)[0].replace(/\/+$/, "") || "/");
  const hero = HEROES[path];
  if (!hero || prepared.has(path) || typeof window === "undefined") return;
  prepared.add(path);
  if (path === "/immobilien-tuerkei") void import("@/pages/TurkeyProperties");
  const base = `/heroes/AdobeStock_${hero[0]}-`;
  const img = new Image();
  img.decoding = "async";
  img.sizes = SIZES;
  img.srcset = [640, 1024, 1440, hero[1]].map((w) => `${base}${w}w.webp ${w}w`).join(", ");
  img.src = `${base}1024w.webp`;
}

export const prefetchHandlers = (to: string) => ({
  onMouseEnter: () => prepareRoute(to),
  onFocus: () => prepareRoute(to),
  onTouchStart: () => prepareRoute(to),
});
