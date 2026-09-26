import { de } from "./de";
import { en } from "./en";
import { tr } from "./tr";
import { nl } from "./nl";
import { it } from "./it";
import { es } from "./es";
import { fr } from "./fr";
import type { RevisionCopy } from "./types";

export type { RevisionCopy };
export const revisionFinal: Record<string, RevisionCopy> = { de, en, tr, nl, it, es, fr };
