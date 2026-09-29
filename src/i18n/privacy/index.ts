import type { PrivacyCopy } from "./types";
import { de } from "./de";
import { tr } from "./tr";
import { en } from "./en";
import { nl } from "./nl";
import { it } from "./it";
import { es } from "./es";
import { fr } from "./fr";

export type { PrivacyCopy };
export { PRIVACY_URLS } from "./types";
export const privacyCopy: Record<string, PrivacyCopy> = { de, tr, en, nl, it, es, fr };
