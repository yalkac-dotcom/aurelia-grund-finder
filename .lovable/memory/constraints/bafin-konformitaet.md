---
name: BaFin-Konformität
description: Keine Renditegarantien, keine Mindestanlagen, keine Finanzanlage-Aussagen — nur Geschäftspartnerschaften
type: constraint
---
Aurelia kommuniziert nach außen **keine** Vermögensanlagen oder Finanzinstrumente im aufsichtsrechtlichen Sinn.

**Verboten in öffentlich sichtbarem Content:**
- Konkrete Rendite-Prozentwerte als Versprechen ("15–25% p.a.", "12–20%", "Zielrendite X%")
- Konkrete Mindestanlagen ("Mindestanlage €10.000")
- Begriffe wie "Investmentopportunität", "Beteiligungsmodell" als öffentliches Angebot
- Werbliche Investoren-Akquise mit Renditezahlen

**Erlaubt:**
- "Geschäftspartnerschaft", "Projektpartnerschaft", "individuelle Vereinbarung"
- Vage Formulierungen: "transparente Beteiligung an Projekterträgen"
- Disclaimer mit Hinweis: keine Anlageberatung, kein öffentliches Angebot
- Vertraulicher Kontakt für Einzelfall-Prüfung

**Umsetzung:**
- Homepage-Karte "Investoren" → "Geschäftspartner"
- Header/Nav: "Für Investoren" → "Für Geschäftspartner"
- Route: `/fuer-investoren` (Alias) → `/fuer-geschaeftspartner` (kanonisch)
- Seite `ForGeschaftspartner.tsx` ersetzt `ForInvestors.tsx`
- Die separate `/investoren`-Seite (mit Gate, Case Study, Glossar) bleibt unverändert — sie ist bereits compliance-konform formuliert (Disclaimer, "individueller Einzelfall", keine Renditeversprechen)
