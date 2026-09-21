# Vollständige Sprach-Endabnahme

## Umfang

- Alle sechs aktiven Sprachen prüfen: Deutsch, Englisch, Niederländisch, Italienisch, Spanisch und Türkisch.
- Alle 21 regulären Routen plus die 404-Seite erfassen; Startseite, Hauptseiten, Türkei-Seite, Kontakt, FAQ, Rechtstexte, Bildnachweise, Portfolio, Glossare und Steuer-Unterseiten einschließen.
- Desktop- und Mobilnavigation, Sprachumschalter, Footer, Cookie-Dialog, Kartenfreigabe, Formulare, Uploadstatus sowie Erfolgs- und Fehlermeldungen einbeziehen.
- Automatische Bestätigungsmails in allen sechs Sprachen auf vollständig einsprachige Betreffzeilen, Texte und Signaturen prüfen. Die bestehende Versandlogik und Empfängertrennung bleiben unverändert.

## Korrekturen

- Sichtbare fest eingebaute deutsche Texte aus gemeinsam genutzten Komponenten und Seiten in die zentrale Sprachstruktur überführen.
- Bildnachweise vollständig in allen sechs Sprachen ergänzen; die vorgegebene türkische Fassung wortgetreu übernehmen und die übrigen Fassungen natürlich formulieren.
- Fehlende oder deutsche Rückfalltexte in Cookie-Dialog, Kontaktseite, Kontaktmodul, Portfolio, 404, Bildbeschreibungen und sonstigen Unterseiten lokalisieren.
- Formularbeschriftungen, Platzhalter, Auswahlwerte, Uploadtexte und Statusmeldungen je Sprache vervollständigen. Interne, nicht sichtbare Anfragedaten dürfen für Aurelia weiterhin deutsch strukturiert sein.
- Rechtliche Aussagen nicht verändern; ausschließlich vorhandene Inhalte sprachlich übertragen. Firmenname, Anschrift, Registerangaben, E-Mail und Eigennamen unverändert lassen.
- Sprachwechsel bleibt auf derselben URL; vorhandene Routen und Gestaltung bleiben bestehen.

## Technische Prüfung

- Sprachdateien strukturell vergleichen, damit in keiner Sprache Schlüssel fehlen.
- Quellcode erneut nach sichtbaren fest eingebauten deutschen Texten und deutschen Fallbacks durchsuchen.
- Automatisierten Browserlauf für jede Route und jede Sprache ausführen; Navigation, Hauptinhalt, Footer, Dialoge und Formulare kontrollieren.
- Jede Sprache zusätzlich bei 390 px und 430 px auf Überläufe, abgeschnittene Menüpunkte und horizontales Scrollen prüfen.
- Relevante Formulare ohne echten Versand bis zur Validierung und den lokalisierten Meldungen testen; bestehende Versandlogik nicht verändern.
- Abschließend Tests ausführen und einen Fehlerbericht pro Sprache mit Seite, altem Text und Korrektur erstellen.

## Bereits bestätigte Ausgangsbefunde

- Aktiv sind exakt sechs Sprachen und 21 reguläre Routen plus 404.
- Die Bildnachweis-Seite übersetzt derzeit nur die Überschrift; Fließtext und Kontaktuntertitel sind fest auf Deutsch eingebaut.
- Weitere sichtbare deutsche Festtexte bestehen mindestens auf der Kontaktseite, im Kontaktmodul, im Portfolio sowie in einzelnen Bildbeschreibungen und Beschriftungen.
- Der Cookie-Dialog enthält deutsche Rückfalltexte, die bei einem fehlenden Schlüssel fremdsprachig sichtbar würden.
