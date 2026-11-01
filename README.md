# Coiffure Lüthi — Website-Demo

Vier statische Seiten: Startseite, Leistungen & Preise, Team und Salon.
Dunkler Auftritt mit gelbem Lüthi-Schriftzug, lokalen Antonio-/Manrope-Schriften und
Originalfotografien. Kein Framework, keine Paketinstallation und keine
kostenpflichtigen Laufzeitdienste.

## Lokal entwickeln und prüfen

Node.js 22 oder neuer; Python 3 für Webserver und Inhaltsprüfung.

```sh
npm run dev
npm run build
npm run check
python3 -m http.server 8000 --directory dist
```

Für GitHub Pages mit Projektpfad:

```sh
BASE_PATH=/coiffure-luethi-website npm run build
BASE_PATH=/coiffure-luethi-website npm run check
```

## Veröffentlichung

`.github/workflows/pages.yml` baut und prüft Pushes auf `main` und veröffentlicht
mit GitHub Pages. Überholte Läufe werden abgebrochen. Ein manueller Start ist
über Run workflow möglich. Repository Settings → Pages verwendet GitHub Actions.

Demo: https://luluethi.github.io/coiffure-luethi-website/

Der Build erstellt `dist`, passt lokale Bild-, Font- und Navigationspfade an und
versioniert `site.css`, `home.css` und `site.js` mit Inhalts-Hashes gegen alte
Browser-Caches. Ohne BASE_PATH bleibt ein Build für die Domain-Wurzel möglich.
Netlify bleibt mit `npm run build` und Ausgabe `dist` kompatibel. Die originale
Salon-Website ausserhalb des Repositorys wird nicht verändert.

## Komposition und Bedienung

Die Startseite beginnt mit grosser, schmaler Displayschrift und einer einzelnen
Schwarzweiss-Frisurenaufnahme aus dem bestehenden Bildbestand. Sie ist als
Frisureninspiration gekennzeichnet. Danach folgen das echte Team in einem hellen
Abschnitt, vier direkte Wege zu den Preisen und eine grosse Original-Salonansicht.
Keine Diashow oder Vorschaubild-Leiste; keine Bildvergrösserung beim Scrollen.
Alle Fotos behalten ihr natürliches Seitenverhältnis. Die Salonseite zeigt auch
die Aussenansicht und bietet eine separat bedienbare Galerie.

Bewegung wird bei entsprechender Betriebssystemeinstellung reduziert und lässt
sich im Footer pausieren. Die lokale Präferenz wird gespeichert. Ohne JavaScript
bleiben Inhalte, Navigation und Galerie-Link sichtbar. Galerie-Dialog mit
Tastatursteuerung, Escape und Fokusrückgabe. Preis-Sprunglinks berücksichtigen
den festen Header.

## Inhalte und Dateien

[Designsystem und Prüfung](docs/redesign-analyse.md) dokumentieren die aktuelle
Komposition. Team, Rollen, Kontakt und elf Preispositionen basieren auf dem
vorhandenen Repository. Preise behalten den bestehenden Bestätigungsvorbehalt.
Öffnungszeiten werden bewusst weggelassen, Preisbezeichnungen nicht zusätzlich
erklärt. Persönliche Zukunftspläne werden nicht veröffentlicht.

Das hochgeladene `assets/TeamBild.jpg` bleibt unverändert; optimierte WebP-Kopien
unter `assets/images/team-vor-dem-salon*.webp` werden responsiv ausgeliefert.
Alle Salonbilder sind Originalaufnahmen. Allgemeine Modelbilder und KI-Porträts
werden nicht als eigene Arbeiten gezeigt. Das Startseitenmotiv ist ausdrücklich
als Inspiration beschriftet.

Der aktuelle Instagram-Verweis führt zu https://www.instagram.com/coiffureluethi/.
Ein dynamischer Feed benötigt die Umstellung des persönlichen Kontos auf
Business/Creator und eine offizielle Autorisierung; aktuell wird kein Live-Feed
behauptet. Keine Tracker, externen Fonts oder eingebettete Karte. Manrope und Antonio sind
lokal unter SIL Open Font License eingebunden; Lizenzen unter `assets/fonts`.

[Logo-Paket](assets/brand/luethi-logo-paket.zip): SVG und transparente PNG-Dateien
mit 2000 Pixeln Breite. Der Schriftzug wurde aus der vorhandenen Rastervorlage
vektorisiert; Herkunft und Nutzungshinweise stehen in `assets/brand/README.txt`.
