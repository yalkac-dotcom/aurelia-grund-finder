# Desktop-Navigation optimieren

## Umsetzung
- Ausschließlich die sichtbaren Navigationstitel in den sechs vorhandenen Sprachen kürzen; türkische Titel exakt wie vorgegeben setzen.
- Desktop-Header auf einzeilige Menüpunkte, gleichmäßige Abstände, klare Trennung von Sprache und CTA sowie einen früheren Wechsel zur mobilen Navigation einstellen.
- Logo, Farben, Typografie-Stil, CTA, URLs, Seitenüberschriften und sämtliche Seiteninhalte unverändert lassen.

## Prüfung
- Alle sechs Sprachen auf einzeilige Navigation und korrekte Titel prüfen.
- Desktop bei 1920 px, 1440 px und 1280 px kontrollieren; bei unzureichendem Platz muss die Hamburger-Navigation greifen.
- Sicherstellen, dass keine Seite, URL oder sonstiger Seitenbereich verändert wurde.

## Technische Details
- Änderungen bleiben auf `Header.tsx` und die `nav`-Titel der sechs Sprachdateien beschränkt.
- Der Desktop-Header erhält eine höhere Sichtbarkeitsschwelle als bisher, `whitespace-nowrap`, flexible Abstände und 13–14 px Navigationstext.
