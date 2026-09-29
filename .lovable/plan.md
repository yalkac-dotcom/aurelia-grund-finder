# Besondere Verkaufssituationen – deutscher Referenztext (nur Vorschau)

Nur deutsche Texte. Übersetzungen erst nach Ihrer Freigabe des deutschen Textes. Nichts veröffentlichen.

## Was schon vorhanden ist
- Startseite: Karte „Wenn eine Zwangsversteigerung droht“ neben „Besondere Situationen“, dazu Zwangsversteigerungs-Erfahrung im Block „Wer wir sind“.
- FAQ: zwei Zwangsversteigerungs-Fragen gibt es schon („Was passiert, wenn eine Zwangsversteigerung droht?“ und „Kann ein Verkauf vor einer Zwangsversteigerung noch möglich sein?“).
- „Immobilie anbieten“: im Formular gibt es schon die Auswahl „Zwangsversteigerung droht / Zwangsversteigerungsverfahren läuft / kurzfristiger Verkaufswunsch“. Einen erklärenden Textabschnitt gibt es nicht.
- Über uns: nennt schon Zwangsversteigerungen als Teil der Erfahrung.

## 1. Startseite – NEUER ABSCHNITT
Platz: direkt nach dem Bereich „Besondere Situationen / Wenn eine Zwangsversteigerung droht“, vor „Wo Sie leben, ist nicht entscheidend“. Schmaler Textblock mit Goldrahmen im bestehenden Stil. Kein Bild, keine Warnbox-Optik.
- Überschrift: „Auch wenn es schnell gehen muss“
- Text: genau Ihr Wortlaut (zwei Absätze)
- Button: „Immobilie anbieten“ → bestehende Seite „Immobilie anbieten“
- Bleibt: Hero, Hauptbotschaft, alle anderen Bereiche.

## 2. „Immobilie anbieten“ – NEUER ABSCHNITT
Platz: zwischen Einleitung („Wo Sie selbst leben …“) und Formular. Gleicher Rahmen-Stil wie auf der Startseite.
- Überschrift: „Besondere Verkaufssituationen“
- Text: genau Ihr Wortlaut (vier Absätze, letzter Absatz: „Auch wenn keine besondere oder zeitkritische Situation besteht, …“)
- Bleibt: Überschrift, Einleitung, Formular, Pflichtfelder, Auswahlpunkte.

## 3. FAQ
- NEU: „Kauft Aurelia auch Immobilien bei einem Notverkauf?“ – Ihr Wortlaut.
- ERSETZT: „Was passiert, wenn eine Zwangsversteigerung droht?“ wird durch „Kann ich meine Immobilie auch bei einer drohenden oder laufenden Zwangsversteigerung anbieten?“ mit Ihrem Wortlaut ersetzt (gleiches Thema, sonst doppelt).
- NEU: „Kann Aurelia eine Zwangsversteigerung stoppen?“ – Ihr Wortlaut.
- BLEIBT: „Kann ein Verkauf vor einer Zwangsversteigerung noch möglich sein?“ und alle anderen Fragen.
- Die drei Fragen stehen zusammen im Zwangsversteigerungs-Teil der FAQ.

## 4. Über uns – ERGÄNZUNG eines Satzes
An den bestehenden Absatz „Ein Teil dieser Erfahrung stammt aus Immobilien mit besonderen Ausgangssituationen …“ wird angehängt:
„Aurelia verbindet so den regulären direkten Immobilienankauf mit Erfahrung in komplexen und zeitkritischen Verkaufssituationen.“
Der übrige Text bleibt.

## 5. Wie wir arbeiten
Keine Änderung. Hier passt das Thema nicht natürlich hinein, ohne die Seite neu auszurichten.

## Widerspruchsprüfung
- Jeder neue Text enthält auch den regulären Ankauf („Ebenso kaufen wir Immobilien unabhängig …“, „Auch wenn keine besondere … Situation besteht …“).
- Keine Zusage, eine Versteigerung zu verhindern; „Eine Rechts- oder Schuldnerberatung wird nicht angeboten“ bleibt drin.
- Keine Makler- oder Suchtätigkeit, keine reißerischen Begriffe.
- Die Suchbegriffe kommen jeweils nur ein- bis zweimal pro Seite vor.

## Nicht angefasst
WhatsApp, beide Telefonnummern, Datenschutz, KVKK, Impressum, Bildnachweise, KI-Kennzeichnungen, Cookies, Formulare, Bilder, Logo, Farben, Schriften, Header, Footer, Kontaktleiste, Navigation, Adressen, keine allgemeinen Gestaltungsregeln.

## Technische Details
- Startseite: neues optionales Feld in `homeMaster.ts` (nur `de` befüllt), Anzeige in `HomeDeSections.tsx` nur wenn vorhanden. Andere Sprachen zeigen den Abschnitt bis zur Übersetzung nicht.
- Immobilie anbieten: Block in `PropertyOffer.tsx` hinter `isDe`, wie die bestehende deutsche Einleitung.
- FAQ: `src/i18n/revision/de.ts` `faqPage.items`; Über uns: `revision/de.ts` `aboutV2`.
- Nur lokale Klassen (`aureliaGoldCard`, bestehende Abstände), kein globales CSS.
