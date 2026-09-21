// Hero image imports with WebP srcSet variants
// Each hero has 4 widths: 640, 1024, 1440, 1920

// NOTE: hero-premium uses stable /public/heroes URLs (not Vite-imported) so the
// <link rel="preload"> in index.html matches the same URL the <img> requests.
// This is critical for LCP on the homepage.
const premium640 = "/heroes/hero-premium-640w.webp";
const premium1024 = "/heroes/hero-premium-1024w.webp";
const premium1440 = "/heroes/hero-premium-1440w.webp";
const premium1920 = "/heroes/hero-premium-1920w.webp";

import building640 from "@/assets/hero-building-640w.webp";
import building1024 from "@/assets/hero-building-1024w.webp";
import building1440 from "@/assets/hero-building-1440w.webp";
import building1920 from "@/assets/hero-building-1920w.webp";

import contact640 from "@/assets/hero-contact-640w.webp";
import contact1024 from "@/assets/hero-contact-1024w.webp";
import contact1440 from "@/assets/hero-contact-1440w.webp";
import contact1920 from "@/assets/hero-contact-1920w.webp";

import services640 from "@/assets/hero-services-640w.webp";
import services1024 from "@/assets/hero-services-1024w.webp";
import services1440 from "@/assets/hero-services-1440w.webp";
import services1920 from "@/assets/hero-services-1920w.webp";

import investors640 from "@/assets/hero-investors-640w.webp";
import investors1024 from "@/assets/hero-investors-1024w.webp";
import investors1440 from "@/assets/hero-investors-1440w.webp";
import investors1920 from "@/assets/hero-investors-1920w.webp";

import steuervorteile640 from "@/assets/hero-steuervorteile-640w.webp";
import steuervorteile1024 from "@/assets/hero-steuervorteile-1024w.webp";
import steuervorteile1440 from "@/assets/hero-steuervorteile-1440w.webp";
import steuervorteile1920 from "@/assets/hero-steuervorteile-1920w.webp";

import afa640 from "@/assets/hero-afa-640w.webp";
import afa1024 from "@/assets/hero-afa-1024w.webp";
import afa1440 from "@/assets/hero-afa-1440w.webp";
import afa1920 from "@/assets/hero-afa-1920w.webp";

import bafa640 from "@/assets/hero-bafa-640w.webp";
import bafa1024 from "@/assets/hero-bafa-1024w.webp";
import bafa1440 from "@/assets/hero-bafa-1440w.webp";
import bafa1920 from "@/assets/hero-bafa-1920w.webp";

import kfw640 from "@/assets/hero-kfw-640w.webp";
import kfw1024 from "@/assets/hero-kfw-1024w.webp";
import kfw1440 from "@/assets/hero-kfw-1440w.webp";
import kfw1920 from "@/assets/hero-kfw-1920w.webp";

import energetisch640 from "@/assets/hero-energetisch-640w.webp";
import energetisch1024 from "@/assets/hero-energetisch-1024w.webp";
import energetisch1440 from "@/assets/hero-energetisch-1440w.webp";
import energetisch1920 from "@/assets/hero-energetisch-1920w.webp";

import glossar640 from "@/assets/hero-glossar-640w.webp";
import glossar1024 from "@/assets/hero-glossar-1024w.webp";
import glossar1440 from "@/assets/hero-glossar-1440w.webp";
import glossar1920 from "@/assets/hero-glossar-1920w.webp";

import arbeitsweise640 from "@/assets/hero-arbeitsweise-640w.webp";
import arbeitsweise1024 from "@/assets/hero-arbeitsweise-1024w.webp";
import arbeitsweise1440 from "@/assets/hero-arbeitsweise-1440w.webp";
import arbeitsweise1920 from "@/assets/hero-arbeitsweise-1920w.webp";

import about640 from "@/assets/hero-about-640w.webp";
import about1024 from "@/assets/hero-about-1024w.webp";
import about1440 from "@/assets/hero-about-1440w.webp";
import about1920 from "@/assets/hero-about-1920w.webp";

// Tighter sizes hint: at common desktop widths (≤1440), the 1024w variant is sufficient
// for a hero image behind a dark overlay — saves ~110 KB on LCP payload vs. forcing 1440w.
const SIZES = "(max-width: 640px) 100vw, (max-width: 1440px) 75vw, 1920px";

function srcSet(w640: string, w1024: string, w1440: string, w1920: string) {
  return `${w640} 640w, ${w1024} 1024w, ${w1440} 1440w, ${w1920} 1920w`;
}

// `src` uses the 1024w variant as a lighter fallback. The browser still picks the
// optimal width from `srcSet` based on `sizes` + DPR — this only affects the very
// first byte that gets requested when srcSet is unsupported (rare).
export const heroSets = {
  premium:       { src: premium1024,       srcSet: srcSet(premium640, premium1024, premium1440, premium1920),             sizes: SIZES },
  building:      { src: building1440,      srcSet: srcSet(building640, building1024, building1440, building1920),           sizes: SIZES },
  contact:       { src: contact1440,       srcSet: srcSet(contact640, contact1024, contact1440, contact1920),               sizes: SIZES },
  services:      { src: services1440,      srcSet: srcSet(services640, services1024, services1440, services1920),           sizes: SIZES },
  investors:     { src: investors1440,     srcSet: srcSet(investors640, investors1024, investors1440, investors1920),       sizes: SIZES },
  steuervorteile:{ src: steuervorteile1440,srcSet: srcSet(steuervorteile640, steuervorteile1024, steuervorteile1440, steuervorteile1920), sizes: SIZES },
  afa:           { src: afa1440,           srcSet: srcSet(afa640, afa1024, afa1440, afa1920),                               sizes: SIZES },
  bafa:          { src: bafa1440,          srcSet: srcSet(bafa640, bafa1024, bafa1440, bafa1920),                           sizes: SIZES },
  kfw:           { src: kfw1440,           srcSet: srcSet(kfw640, kfw1024, kfw1440, kfw1920),                               sizes: SIZES },
  energetisch:   { src: energetisch1440,   srcSet: srcSet(energetisch640, energetisch1024, energetisch1440, energetisch1920), sizes: SIZES },
  glossar:       { src: glossar1440,       srcSet: srcSet(glossar640, glossar1024, glossar1440, glossar1920),               sizes: SIZES },
  arbeitsweise:  { src: arbeitsweise1440,  srcSet: srcSet(arbeitsweise640, arbeitsweise1024, arbeitsweise1440, arbeitsweise1920), sizes: SIZES },
  about:         { src: about1440,         srcSet: srcSet(about640, about1024, about1440, about1920),                           sizes: SIZES },
} as const;
