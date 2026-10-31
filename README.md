# Coiffure Lüthi — Familienbetrieb in Wohlen seit 1987

Vier statische Seiten: Startseite, Leistungen & Preise, Team und Salon.
Gemeinsames Designsystem mit lokal geladenen Schriften, dem gelben Lüthi-Logo
und optimierten Originalbildern. Keine kostenpflichtigen Dienste, kein Framework
und keine Paketinstallation für Build oder Betrieb.

## Entwicklung

Node.js 22 oder neuer; Python 3 für Webserver und Inhaltsprüfung.

```sh
npm run dev
```

## Produktionsbuild und Prüfung

```sh
npm run build
npm run check
python3 -m http.server 8000 --directory dist
```

Netlify: Build `npm run build`, Veröffentlichungsverzeichnis `dist`; siehe
`netlify.toml`. Die Netlify-Site soft-empanada-97cf3d verwendet den Production-
Branch `main`. Ein Push kann dort ein Deployment auslösen. Die originale Website
ausserhalb dieses Repositorys ist nicht Bestandteil dieser Implementierung.

## Inhalte und Gestaltung

[Analyse und Designsystem](docs/redesign-analyse.md) beschreiben die Leitlinie
und das Zusammenspiel aller Seiten. Das bestätigte Gründungsjahr ist 1987.
Teammitglieder, Rollen, Kontaktdaten und elf Preispositionen basieren auf dem
vorhandenen Repository. Preise behalten ihren sichtbaren Bestätigungsvorbehalt.
Öffnungszeiten, Bewertungen und biografische Angaben wurden nicht erfunden.
Rechtliche Angaben müssen vor einem offiziellen Domainwechsel ergänzt werden.

Team und Salon zeigen ausschliesslich vorhandene Originalfotos. Frisurenbilder
werden als Inspiration aus der bestehenden Sammlung gekennzeichnet. Original-
JPG-Dateien bleiben erhalten; die Website verwendet WebP-Versionen.

Manrope und Cormorant Garamond werden lokal geladen. Die SIL-OFL-Lizenzen liegen
unter `assets/fonts`. Keine Anfragen an externe Font-Dienste, keine Tracker und
keine eingebettete Karte. Google Maps öffnet nur nach Klick einen externen Link.

## Logo separat verwenden

[Logo-Paket herunterladen](assets/brand/luethi-logo-paket.zip): gelbe Hauptversion
sowie einfarbige Alternativen als SVG und transparente PNG (2000 Pixel breit).
Das Logo besteht nur aus dem Schriftzug; die vertraute Form wurde als Vektor
aus der vorhandenen Rastervorlage aufbereitet. Herkunft und Einsatzhinweise
stehen in `assets/brand/README.txt`.

## Bedienung

Mobile Navigation mit Escape-Taste, sichtbare Tastaturfokusse, Sprunglink,
reduzierte Bewegung und ohne JavaScript sichtbare Inhalte/Navigation. Die
Salon-Galerie nutzt einen nativen Dialog mit Escape-Taste und Fokusrückgabe;
ohne JavaScript öffnen die Bildlinks direkt das Originalbild. Terminvereinbarung
führt direkt zu `tel:+41566226040`.
