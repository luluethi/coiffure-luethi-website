# Coiffure Lüthi · Website

Statische Website mit vier Seiten: Startseite, Leistungen & Preise, Team und Salon.
HTML, CSS und JavaScript ohne Framework oder kostenpflichtige Dienste. Inhalte,
Preise, Team und Kontaktdaten basieren auf dem vorhandenen Repository.

## Lokal entwickeln

Voraussetzungen: Node.js 22 oder neuer, Python 3 für den lokalen Webserver.
Keine Paketinstallation erforderlich.

```sh
npm run dev
```

## Build und Netlify

```sh
npm run build
python3 -m http.server 8000 --directory dist
```

`netlify.toml` definiert `npm run build` und das Ausgabeverzeichnis `dist`.
Die Änderungen enthalten keinen Deployment-Aufruf. Eine bestehende Live-Site
wird durch diese lokalen Befehle nicht verändert. Veröffentlichung erfolgt
separat über die vorhandene Hosting-Konfiguration.

## Gestaltung und Inhalte

Dunkles Olivgrau, warmes Papier, lokale Systemschriften, gelber Lüthi-Schriftzug und optimierte
WebP-Bilder aus den vorhandenen JPG-Dateien. Die Originaldateien bleiben erhalten.
Responsive Navigation mit Escape-Taste, sichtbare Tastaturfokusse und Rücksicht
auf reduzierte Bewegung. Inhalte bleiben ohne JavaScript zugänglich.

Terminvereinbarung erfolgt telefonisch; es wird kein Buchungsdienst eingebunden.
Die übernommenen Preisangaben stehen weiterhin unter Bestätigungsvorbehalt.
Impressum und vollständige Datenschutzhinweise müssen vor einer späteren
Live-Veröffentlichung vom Salon bereitgestellt werden. Es wurden keine
rechtlichen Angaben oder Öffnungszeiten erfunden.

## Analyse und Markenführung

Die kritische Bestandsaufnahme und die Regeln für das zusammenhängende Redesign
stehen in [docs/redesign-analyse.md](docs/redesign-analyse.md). Das Logo unter
`assets/luethi.svg` ist eine geglättete Vektorisierung des vorhandenen gelben
Schriftzugs aus `assets/header_logo.jpg`; es enthält keinen COIFFURE-Zusatz und
keine neue Bildmarke. Eine originale Vektordatei war im Repository nicht vorhanden.
