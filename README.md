# Coiffure Lüthi — Familienbetrieb in Wohlen seit 1987

Vier statische Seiten: Startseite, Leistungen & Preise, Team und Salon.
Dunkles Designsystem mit kräftiger Manrope-Typografie, dem gelben Lüthi-Logo
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

## GitHub-Pages-Demo

Der Workflow `.github/workflows/pages.yml` baut und prüft jeden Push auf `main`
und veröffentlicht das Ergebnis mit GitHub Pages. Über `workflow_dispatch` kann
auch ohne Codeänderung neu veröffentlicht werden. Überholte Läufe werden
abgebrochen. Es werden keine eigenen Zugangsdaten benötigt; der Workflow nutzt
das von GitHub bereitgestellte, auf Pages beschränkte Job-Token.

Einmalig im Repository unter **Settings → Pages → Build and deployment → Source**
**GitHub Actions** auswählen. Für kostenlose Nutzung mit GitHub Free muss das
Repository öffentlich sein; dieser Workflow ändert keine Sichtbarkeit.

Vorgesehene Projektadresse (ohne eigene Domain):
`https://luluethi.github.io/coiffure-luethi-website/`

`actions/configure-pages` liefert den tatsächlichen Unterpfad. Der Build setzt
`BASE_PATH` nur für die Ausgabedateien; die Quelldateien bleiben unverändert
unter einer Domain-Wurzel nutzbar. Projektpfade lassen sich lokal prüfen:

```sh
BASE_PATH=/coiffure-luethi-website npm run build
BASE_PATH=/coiffure-luethi-website npm run check
```

Netlify bleibt kompatibel: Build `npm run build`, Ausgabe `dist`, ohne BASE_PATH.
Das Netlify-Projekt und die ursprüngliche Salon-Website werden durch die
Pages-Einrichtung nicht gelöscht oder verändert. Das Netlify-Projekt kann nach
einem erfolgreich geprüften Pages-Deployment separat entfernt werden.

## Inhalte und Gestaltung

[Analyse und Designsystem](docs/redesign-analyse.md) beschreiben die Leitlinie
und das Zusammenspiel aller Seiten. Das bestätigte Gründungsjahr ist 1987.
Teammitglieder, Rollen, Kontaktdaten und elf Preispositionen basieren auf dem
vorhandenen Repository. Preise behalten ihren sichtbaren Bestätigungsvorbehalt.
Öffnungszeiten, Bewertungen und biografische Angaben wurden nicht erfunden.
Rechtliche Angaben müssen vor einem offiziellen Domainwechsel ergänzt werden.

Team und Salon zeigen ausschliesslich vorhandene Originalfotos. Das Gruppenbild
`assets/TeamBild.jpg` steht im Einstieg der Startseite; optimierte WebP-Dateien
unter `assets/images/team-vor-dem-salon*.webp` werden responsiv ausgeliefert. Frisurenbilder
werden als Inspiration aus der bestehenden Sammlung gekennzeichnet. Original-
JPG-Dateien bleiben erhalten; die Website verwendet WebP-Versionen.

Manrope wird lokal in 400, 600 und 800 geladen. Die SIL-OFL-Lizenz liegt
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

Die Startseite umfasst Einstieg, Leistungen, Salon und Kontakt. Die Geschichte
steht einmal im Einstieg; die Einzelporträts befinden sich ausschliesslich auf
der Teamseite. Die gewählte dunkle Gestaltungsrichtung ist in der Analyse
dokumentiert.
