# Einheitliche KI-Bildkennzeichnung

## Umsetzung

- Eine zentrale, wiederverwendbare Bildkennzeichnung erstellen, die abhängig von der gewählten Sprache exakt die vorgegebenen kurzen Texte anzeigt.
- Das Overlay vertikal am rechten unteren Bildrand platzieren, von unten nach oben lesbar, ohne Hintergrundfläche, Kasten, Balken, Logo oder Symbol.
- Die Kennzeichnung innerhalb bestehender Bildcontainer ergänzen, ohne Bilddateien, Zuschnitte, Abstände oder übrige Seitenelemente zu verändern.
- Responsive Bildvarianten derselben Aufnahme als ein Bild behandeln und nur ein gemeinsames Overlay anzeigen.
- Die ausdrücklich genannten Motive in zwei Gruppen kennzeichnen:
  - Standard: „KI-Visualisierung“ beziehungsweise die jeweilige Sprachfassung.
  - Symbolbild: „KI-Visualisierung · Symbolbild“ beziehungsweise die jeweilige Sprachfassung.
- Logo, Favicons, Icons, grafische Symbole, nicht genannte Bilder und die neue Deutschland-Karte der Startseite unverändert lassen.
- Auf „Bildnachweise“ ausschließlich den zusätzlichen Transparenzhinweis in allen sieben Sprachen ergänzen.

## Technische Details

- Das Overlay wird als nicht-interaktives HTML/CSS-Element mit vertikaler Schreibrichtung innerhalb eines relativ positionierten, begrenzten Bildcontainers umgesetzt.
- Gemeinsame Bildbausteine erhalten eine optionale Kennzeichnungsart; direkte Bildverwendungen erhalten denselben zentralen Overlay-Baustein.
- Hero-Bilder, Kartenbilder und `srcset`-Bilder behalten ihre bestehenden Bildquellen und responsiven Regeln vollständig bei.

## Prüfung

- Alle vorgesehenen Bildverwendungen und beide Kennzeichnungsarten gegen die Liste abgleichen.
- Alle sieben Sprachen auf korrekte, exakt vorgegebene Kurztexte prüfen.
- Die tatsächliche Vorschau bei 390 px, 768 px und 1440 px kontrollieren: vollständig innerhalb des Bildes, ohne Abschneiden, Überlappungen oder Layoutverschiebungen.
- Ausgeschlossene Grafiken stichprobenartig auf fehlende Kennzeichnung prüfen.
- Keine Veröffentlichung durchführen.