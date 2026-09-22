# Mobile Darstellung und Kontaktleiste korrigieren

## Ziel
Die mobilen Überlappungen werden bei 360–430 px behoben, die Überschrift im „Über uns“-Hero erhält das vorhandene Aurelia-Gold, und die mobile Kontaktleiste wird konsistent sowie mehrsprachig eingesetzt. Texte, Bilder, Navigation, SEO und Desktop-/Tablet-Darstellung bleiben ansonsten unverändert.

## Umsetzung
1. **Mobile Hero-Bereiche stabilisieren**
   - Gemeinsame Hero-Höhen auf kleinen Displays von starren Höhen auf inhaltsabhängige Mindesthöhen umstellen.
   - Sichere obere und untere Innenabstände ergänzen, damit lange Übersetzungen, Buttons und Vertrauenszeilen vollständig innerhalb des Bildbereichs bleiben.
   - Eigenständige Hero-Bereiche wie „Über uns“, Türkei und Portfolio nach demselben mobilen Prinzip korrigieren, ohne die Einstellungen ab Tabletbreite zu verändern.

2. **Goldene Hauptüberschrift auf „Über uns“**
   - Nur die große Hauptüberschrift im Hero mit dem bestehenden semantischen Aurelia-Gold (`accent`) darstellen.
   - Die darunter bereits goldene Aussage und alle übrigen Farben unverändert lassen.
   - Da alle Sprachversionen denselben Hero verwenden, gilt die Änderung automatisch für jede Sprache.

3. **Einheitliche mobile Kontaktleiste**
   - Die vorhandene seitenbezogene Leiste in eine zentrale mobile Leiste im gemeinsamen Seitenrahmen überführen.
   - Links: übersetztes „Anrufen“, Navy-Hintergrund, weißes Telefonsymbol und direkter Link zu `+49 211 69583033`.
   - Rechts: übersetztes „Immobilie anbieten“, vorhandenes Aurelia-Gold, dunkelblaue Schrift und Link zur bestehenden Angebotsseite.
   - Die aktive Sprache wird über die vorhandene Sprachlogik erhalten, sodass keine Sprachversion auf Deutsch oder zur Kontaktseite wechselt.
   - Rechtliche Seiten und Bildnachweise werden ausgeschlossen; die Leiste erscheint nur auf inhaltlich passenden Seiten.
   - Mobiler Abschlussabstand wird zentral ergänzt, damit Footer, Formulare und Buttons nicht verdeckt werden.

4. **Übersetzungen**
   - Ausschließlich die beiden kurzen Leistentexte in DE, EN, NL, IT, ES, FR und TR ergänzen beziehungsweise präzisieren.
   - Keine übrigen sichtbaren Texte ändern.

## Prüfung
- Alle vorhandenen Seiten automatisiert bei 360, 390 und 430 px auf horizontale Überläufe, überlagernde Hero-Inhalte und verdeckte Seitenelemente prüfen.
- Die Leiste auf einbezogenen und ausgeschlossenen Seiten kontrollieren; Telefon- und Angebotslink in allen sieben Sprachen verifizieren.
- Betroffene Seiten zusätzlich bei Tablet- und Desktopbreite vergleichen, damit dort keine unbeabsichtigte Änderung entsteht.
- Technische Prüfung ausführen; nicht veröffentlichen.
