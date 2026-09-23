# Startseiten-Hero responsiv korrigieren

## Änderung
- Ausschließlich im Startseiten-Sonderfall `mobileHomeFlow` die fehlende Höhenregel für mittlere und große Bildschirme ergänzen.
- Ab Tablet-Breite wieder das frühere Verhalten `87vh` mit mindestens `615px` anwenden.
- Unterhalb der Tablet-Breite die bestehende inhaltsabhängige Höhe mit zusätzlichem unteren Abstand unverändert lassen.
- Keine Rücksetzung durchführen und keine Texte, Bilder, Farben, Links, Navigation, andere Seiten oder Metadaten anfassen.

## Prüfung
- Startseite bei 1413 px: großer Hero, Folgeabschnitt beginnt vollständig darunter.
- Startseite bei Tablet-Breite: responsive Zwischenstufe ohne Überlagerung.
- Startseite bei 390 px: beide Schaltflächen bleiben vollständig im Hero und „Wo befindet sich Ihre Immobilie?“ bleibt frei sichtbar.
- Änderungsumfang kontrollieren, damit nur die responsive Klasse in `PageHero` betroffen ist.
