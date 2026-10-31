# Coiffure Lüthi — Familienbetrieb in Wohlen seit 1987

Vier statische Seiten: Startseite, Leistungen & Preise, Team und Salon.
Bildbetonter dunkler Auftritt mit animiertem Lüthi-Schriftzug, lokaler Manrope-Typografie
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
`assets/TeamBild.jpg` steht im Teamabschnitt der Startseite; optimierte WebP-Dateien
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

## Bildsprache und Animationen

Der Einstieg zeigt vier manuell wechselbare Original-Salonansichten. Den Anfang
macht die Aussenansicht; der gelbe Schriftzug steht als Markenzeichen darüber. Darauf folgen Team, Leistungen und der direkte Link
zu [@coiffureluethi](https://www.instagram.com/coiffureluethi/). Es werden keine
Instagram-Posts nachgebaut und keine KI-Porträts ausgeliefert.

Scroll-Einblendungen, Bildmaske und Seitenübergänge ergänzen
die Gestaltung. Animationen lassen sich im Footer pausieren; die lokale Präferenz
bleibt erhalten. Reduzierte Bewegung des Betriebssystems hat Vorrang. Die Galerie
unterstützt Vor/Zurück, Pfeiltasten und Escape.

Der Build versieht CSS und JavaScript mit einem Inhalts-Hash im Dateinamen.
Dadurch erhält ein neues Deployment neue Asset-URLs, ohne Quelldateinamen oder
lokale Entwicklung zu verändern.

Salonfotos werden ohne Zoom und ohne Scrollverschiebung vollständig dargestellt.
Mobil erhält die Bildfolge einen eigenen Rahmen; Galerie-Bilder behalten ihre
Originalproportionen. Gelb bleibt dem Logo vorbehalten; die übrige Oberfläche
verwendet neutrale Farben.

Für einen automatisch aktuellen Instagram-Feed sind die Umstellung des derzeit
persönlichen Kontos auf Business/Creator und eine offizielle Autorisierung noch
erforderlich. Aktuell ist das Profil verlinkt, nicht als Live-Feed eingebunden.
