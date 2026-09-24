# Bestehende Headerbilder schneller laden

## Umsetzung
- Alle tatsächlich sichtbaren Headerbilder und ihre Browser-Anfragen prüfen; bereits ausreichend optimierte Bildsets unverändert lassen.
- Nur aus den vorhandenen lizenzierten Adobe-Originalen fehlende responsive WebP-Varianten für Mobil, Tablet und Desktop erzeugen.
- Die betroffenen Header auf diese Varianten per `srcSet`/`sizes` umstellen, ohne Motiv, Zuschnitt, Position, Overlay oder Inhalte zu verändern.
- Den Startseiten-Preload exakt auf das vom Browser gewählte responsive Startseitenbild abstimmen; `eager` und hohe Ladepriorität beibehalten.
- Sicherstellen, dass auf Headerbildern keine Einblendanimation oder anfängliche Transparenz wirkt.

## Prüfung
- Vorher-/Nachher-Dateigrößen und tatsächlich geladene Bildquelle im Browser dokumentieren.
- Startseite, Käufer, Eigentümer, Türkei und Geschäftspartner auf 390 px und 1440 px prüfen: Bild lädt früh, kein leerer Zwischenzustand, unveränderter Zuschnitt und unveränderte Darstellung.
- Bildanfragen auf Fehler prüfen und Typcheck ausführen.
- Sprachkarten TR/FR/ES, Bildnachweise und veröffentlichte Website nicht verändern; nicht veröffentlichen.
