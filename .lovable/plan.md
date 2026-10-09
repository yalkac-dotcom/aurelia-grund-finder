# Gestaltungsvorschlag: Bereich zwischen Themenkarten und Länderauswahl

Seite: „Immobilie anbieten". Nur Vorschau, keine Veröffentlichung. Noch kein Code.

## Ausgangslage

Der Bereich besteht derzeit aus zwei nebeneinanderstehenden Textblöcken: links der
Wohnsitzhinweis, rechts „Unser Ankaufsgebiet" mit einer goldenen Randlinie. Diese
Aufteilung wird verworfen.

## Geplanter Aufbau

Ein einziger, durchgehend einspaltiger Informationstrakt. Keine Zweiteilung, keine
Kästen, keine goldenen Linien, keine extra Einrückung. Alles linksbündig in der
Breite von Themenkarten und Formular.

```text
[ Themenkarten: besondere Verkaufssituationen | Zwangsversteigerungen ]

        (ruhiger Abstand, ca. 36 px)

        Unser Ankaufsgebiet
        Wir kaufen Immobilien bevorzugt in Nordrhein-Westfalen,
        insbesondere im Raum Düsseldorf, am Niederrhein und im
        Ruhrgebiet. Immobilien außerhalb ... nur in besonderen
        Ausnahmefällen.

        Auch wenn Sie nicht am Standort der Immobilie leben,
        können Sie uns das Objekt anbieten. Entscheidend ist,
        wo sich die Immobilie befindet.

        (kompakter Abstand, ca. 48-56 px bis zum Formular)

[ Formular: "Wo befindet sich die Immobilie?"   Deutschland | Türkei ]
```

## Rangfolge der drei Texte

1. „Unser Ankaufsgebiet" - trägt den Abschnitt. Marineblaue Playfair-Überschrift,
   etwa 19 px auf dem Computer, klar eine Überschrift, aber deutlich kleiner als
   die Überschriften der Themenkarten und des Formulars. Keine Linie, kein Kasten,
   keine Hochschrift.
2. Ankaufsgebiet-Text - normaler Fließtext in ruhiger Lesebreite (ca. 62 Zeichen
   pro Zeile), 16 px, Zeilenhöhe 1.8.
3. Wohnsitzhinweis - bewusst der leise Teil: kleine Schrift (ca. 14 px),
   zurückgenommener Ton, ohne Rahmen, ohne Hintergrund, ohne goldene Akzente.
   Er steht unter dem Ankaufsgebiet-Text, nicht daneben.

Gold bleibt dort, wo es schon jetzt ist: goldene Zeile im Einstieg, goldene
Markierung der ausgewählten Länderkarte. In diesem Abschnitt kommt nichts Neues hinzu.

## Abstände

- Einrückung quer über den Abschnitt wird entfernt; der Block beginnt exakt auf der
  Linie der Karten und des Formulars.
- Abstand von den Themenkarten nach unten: etwas größer als bisher, damit der
  Übergang nicht gequetscht wirkt.
- Zwischen Überschrift und Text: eng (ca. 10 px), damit sie zusammengehören.
- Zwischen Ankaufsgebiet-Text und Wohnsitzhinweis: deutlich, aber klein (ca. 22 px).
- Bis zur Länderauswahl: rund die Hälfte weniger als heute (etwa 80 px auf
  48-56 px), ohne die Auswahlkarten selbst anzufassen.
- Keine durchgehende Mindesthöhe, kein Leerraum, der nur aus Abstandsregeln entsteht.

## Was vollständig unverändert bleibt

- Beide Immobilienbilder der Länderauswahl, Zuschnitt und Filterung.
- Deutschland- und Türkei-Auswahlkarten: Aufbau, Bilder, Auswahl, Funktion.
- Alle Texte in allen sieben Sprachen - kein neuer Satz, keine Umformulierung.
- Formularfelder, Pflichtfelder, Validierung, Upload, Versand.
- Themenkarten, Einstieg, Navigation, übrige Seiten.

## Sprache

- Der Aufbau ist in allen sieben Sprachen identisch einspaltig; die bisherige
  Sonderbehandlung entfällt.
- Hinweis: Der Wohnsitzhinweis erscheint heute nur auf Deutsch, die übrigen sechs
  Sprachen zeigen ausschließlich den Ankaufsgebiet-Text. Das bleibt so, solange Sie
  es nicht anders entscheiden - eine Übersetzung wäre neuer Text.

## Prüfung nach der Umsetzung

Alle sieben Sprachen bei 1280 px und 390 px: keine abgeschnittenen Texte, kein
seitliches Überlaufen, beide Bilder geladen, Auswahl unverändert. Screenshots des
gesamten Bereichs. Build und Typecheck.

## Freigabe

Erst nach Ihrer ausdrücklichen Bestätigung wird dieser Aufbau in der Vorschau
umgesetzt. Veröffentlicht wird nichts.
