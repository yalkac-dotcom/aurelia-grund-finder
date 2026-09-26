# Website-Header stabilisieren

## Ziel
Den gemeinsamen Aurelia-Header auf allen Seiten und in allen Sprachen dauerhaft sichtbar halten, ohne Gestaltung oder Inhalte zu verändern.

## Umsetzung
- Die zentrale Header-Komponente von einer vom Dokumentfluss abhängigen Sticky-Lösung auf eine robuste, viewportgebundene Positionierung umstellen.
- Im gemeinsamen Seitenrahmen exakt den vorhandenen Headerplatz reservieren, damit kein Inhalt verdeckt oder verschoben wird.
- Die bestehende mobile Navigation, Sprachwahl, Navigationseinträge und Zusatzleiste unverändert lassen.
- Die Stapelreihenfolge zentral so absichern, dass Seitenbilder, Karten und Hintergründe den Header nicht überdecken.

## Prüfung
- Hauptseiten in DE, TR und EN bei 1440, 768 und 390 px öffnen.
- Langsames und schnelles Scrollen, Seitenende und Rückkehr nach oben prüfen.
- Seiten- und Sprachwechsel sowie Reload auf einer Unterseite prüfen.
- Sichtbarkeit, Überlagerungen, seitliches Scrollen und Browserfehler kontrollieren.

## Technische Details
Die aktuelle `position: sticky`-Lösung hängt vom Scroll- und Containing-Block ab. Der Header wird zentral als `fixed` am Viewport verankert; der Seitenrahmen erhält eine responsive Ausgleichshöhe entsprechend der bestehenden 64/80-px-Headerhöhe.
