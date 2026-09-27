/**
 * Einheitlicher Aurelia-Kartenstil (Vorlage: deutsche FAQ-Karten).
 * Heller Card-Hintergrund, feiner Rahmen, weiche Rundung, dezenter Schatten,
 * goldener Akzent beim Hover. Nur Gestaltung – keine Inhalte.
 */
export const aureliaCard =
  "rounded-xl border border-primary/15 bg-card shadow-[0_6px_24px_-12px_hsl(var(--primary)/0.18)] transition-all duration-300 hover:border-accent/50 hover:shadow-[0_12px_36px_-14px_hsl(var(--primary)/0.25)]";

/** A) / B) Elegante Karten: helles Creme, feine Goldkontur, gleich hoch. */
export const aureliaGoldCard =
  "flex h-full flex-col rounded-lg border border-accent/40 bg-secondary/30 p-6 sm:p-7 md:p-8";

/** C) Editorial-Rahmen für längere Unternehmenstexte. */
export const aureliaEditorialFrame =
  "rounded-sm border border-accent/35 bg-secondary/20 px-6 py-9 sm:px-10 md:px-14 md:py-12";

/** D) Dezente Info-Card für wichtige Einzelhinweise (mit Eckakzent via InfoCorner). */
export const aureliaInfoCard =
  "relative rounded-sm border border-accent/25 bg-secondary/35 px-6 py-6 md:px-9 md:py-7";

/** Kurze Goldlinie als Überschriften-Akzent. */
export const aureliaGoldRule = "h-[2px] w-10 bg-accent";
