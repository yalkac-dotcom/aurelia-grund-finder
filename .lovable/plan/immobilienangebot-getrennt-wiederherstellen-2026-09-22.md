# Immobilienangebot getrennt wiederherstellen

## Umsetzung
- Eine eigene Seite „Immobilie anbieten“ im bestehenden Aurelia-Design anlegen.
- Zu Beginn eine Auswahl Deutschland/Türkei anzeigen und per URL eine passende Vorauswahl unterstützen.
- Deutschland-Felder und das vorhandene Türkei-Feldset vollständig, mobil einspaltig und sonst zweispaltig darstellen.
- Pflichtfelder, E-Mail, Längen, Zahlen, Einwilligung sowie PDF/JPG/JPEG/PNG bis 10 MB im Browser validieren.
- Dateien weiterhin in den bestehenden geschützten Dokumentbereich laden und nur zeitlich begrenzte Links intern versenden.
- Vorhandene Speicherung und E-Mail-Funktion erweitern, ohne Absender, interne Empfängeradresse oder getrennte Kundenbestätigung zu verändern.
- Erfolg nur nach bestätigter interner Zustellung anzeigen; fehlgeschlagene Kundenbestätigung gesondert, aber transparent melden.

## Verlinkung
- Allgemeine „Immobilie anbieten“-Buttons öffnen die neue Seite mit sichtbarer Länderauswahl.
- Deutschland-Angebotsbuttons öffnen sie mit Vorauswahl Deutschland.
- Türkei-Angebotsbuttons öffnen sie mit Vorauswahl Türkei.
- „Kontakt“ und allgemeine „Anfrage“-Buttons bleiben beim allgemeinen Kontaktformular.

## Sprache und Prüfung
- Formulartexte, Optionen, Fehlermeldungen und Erfolgsmeldungen für DE, TR, EN, NL, IT, ES und FR bereitstellen.
- Deutschland-, Türkei- und allgemeine Kontaktanfrage prüfen.
- Upload, interne Maildaten, Reply-To, Kundenbestätigung und Fehlersignale prüfen.
- Desktop, Tablet und Mobil sowie alle betroffenen Links kontrollieren.

## Technische Details
- Neue öffentliche Route `/immobilie-anbieten`; Vorauswahl über `?land=deutschland` beziehungsweise `?land=tuerkei`.
- Bestehende `send-contact-email`-Funktion erhält den zusätzlichen Typ `germany_property`; das bisherige Türkei-Verhalten bleibt bestehen.
- Der bestehende private Upload-Bereich und seine 10-MB-Grenze werden unverändert weiterverwendet.
