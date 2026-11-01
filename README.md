# Coiffure Lüthi — Website-Demo

Vier statische Seiten: Startseite, Leistungen & Preise, Team und Salon.
Heller Auftritt in gebrochenem Weiss, Aubergine und Flieder mit gelbem
Lüthi-Schriftzug, lokalem Manrope und Originalfotografien. Kein Framework, keine Paketinstallation und keine
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

Die Startseite beginnt mit dem gross gesetzten Namen Lüthi und einem eigens
KI-generierten abstrakten Haar-Stillleben ohne Menschen. Die bisherigen
Model-/Inspirationsaufnahmen prägen das Design nicht mehr. Danach folgen fünf
versetzt angeordnete Originalporträts, das Angebot und echte Aussen-/Innenansichten.
Auf Smartphones ist die Porträtfolge nativ wischbar und zusätzlich mit Pfeilen
bedienbar. Jedes Foto führt zur zugehörigen Person auf der Teamseite. Dort zeigt
eine nummerierte Porträtliste die vollständigen Namen und bestehenden Rollen.

Keine automatische Diashow oder Vorschaubild-Leiste. Team- und Salonfotos behalten
ihre natürlichen Seitenverhältnisse; kein Scroll-Zoom oder erzwungener Ausschnitt.

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
Alle Salonbilder sind Originalaufnahmen. Das abstrakte Haar-Stillleben ist
keine dargestellte Salonarbeit. Herkunft unter
`assets/images/hair-sculpture-README.txt`. Keine KI-Porträts.

Der aktuelle Instagram-Verweis führt zu https://www.instagram.com/coiffureluethi/.
Ein dynamischer Feed benötigt die Umstellung des persönlichen Kontos auf
Business/Creator und eine offizielle Autorisierung; aktuell wird kein Live-Feed
behauptet. Keine Tracker, externen Fonts oder eingebettete Karte. Manrope ist
lokal unter SIL Open Font License eingebunden; Lizenz unter `assets/fonts`.

[Logo-Paket](assets/brand/luethi-logo-paket.zip): SVG und transparente PNG-Dateien
mit 2000 Pixeln Breite. Der Schriftzug wurde aus der vorhandenen Rastervorlage
vektorisiert; Herkunft und Nutzungshinweise stehen in `assets/brand/README.txt`.
