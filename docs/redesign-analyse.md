# Coiffure Lüthi — ganzheitlicher Rework

## Grundlage

Vom Auftraggeber bestätigt: Familienbetrieb in Wohlen seit 1987, mit hoher
Stammkundschaft. Modernisierung soll gewachsene Vertrautheit und zeitgemässe
Gestaltung verbinden. Persönliche Angaben beschränken sich auf die freigegebenen
Informationen und die vorhandenen Teamrollen.

Team, Kontaktdaten, Leistungen und Preisbeträge stammen aus dem bestehenden
Repository. Die bisherigen Preise bleiben mit Bestätigungsvorbehalt versehen.
Gründungsjahr 1987 und Stammkundschaft wurden im Auftrag ergänzt. Weitere
historische Meilensteine, Öffnungszeiten, Bewertungen oder neue Angebote wurden
nicht erfunden.

## Kritische Bestandsaufnahme

- Der bisherige Einstieg zeigte fast ausschliesslich die Einrichtung. Die
  Verbindung aus moderner Coiffure, Familienbetrieb und Stammkundschaft blieb
  gestalterisch schwach. Jetzt führt eine gekennzeichnete Frisureninspiration in
  das Angebot; echte Räume und Menschen bekommen jeweils eigene Abschnitte.
- Der gelbe Schriftzug war ursprünglich als kleines Rasterbild vergrössert und
  mit zusätzlichem COIFFURE-Text kombiniert. Jetzt wird nur der bekannte,
  vektorisierte Schriftzug verwendet. Das bewahrt den Wiedererkennungswert.
- Unterschiedliche Werbezeilen ersetzten die fehlende Geschichte. Das bestätigte
  Jahr 1987 und die Beziehung zur Stammkundschaft geben jetzt einen konkreten
  Schwerpunkt, ohne eine Chronik zu erfinden.
- Die vier Seiten brauchen dieselbe gestalterische Sprache. Eine gemeinsame
  Schrift-, Farb- und Abstandsdefinition, wiederkehrende Bildunterschriften,
  Linkformen, Teamkarten und Kontaktbereiche verbinden sie.
- Auf kleinen Bildschirmen reichen verkleinerte Desktopansichten nicht aus:
  eigenständige Anordnung der Bilder, lesbare Texte, sichtbare Telefonnummer,
  vollständige Navigation und bedienbare Bildvergrösserung sind notwendig.

## Gestaltungssystem

- Schriftzug: Lüthi, Hauptfarbe Gelb `#FFDF00`, auf dunklem Grund `#292B25`.
- Flächen: warmes Papier `#F8F5EF`, Stein `#EAE5DC`, zurückhaltendes Oliv.
- Überschriften: Cormorant Garamond, aufrechte und kursive Schnitte; Text und
  Navigation: Manrope. Lokal gespeicherte WOFF2-Dateien, SIL Open Font License.
- Fotografie: vorhandene Schwarzweiss-Frisurenbilder als Inspiration; Team und
  Location ausschliesslich unveränderte Originalaufnahmen. Keine KI-Team- oder
  KI-Salonbilder. Die Inspiration wird nicht als eigene Arbeitsreferenz behauptet.
- Gestaltung: klare Bildkanten, grosszügige Zwischenräume, schmale Linien und
  gezielt eingesetztes Gelb. Keine automatisch laufenden Karussells.
- Bewegung: dezente Einblendungen und Hovereffekte. `prefers-reduced-motion`
  deaktiviert Bewegung. Die Inhalte bleiben ohne JavaScript sichtbar.

## Zusammenspiel der Seiten

1. Startseite: moderner Einstieg, Geschichte und Wiedersehen, Angebot,
   Original-Salonbilder, vollständiges Team und direkte Terminvereinbarung.
2. Leistungen & Preise: Anker zu Damen, Herren, Farbe und Kindern; die elf
   übernommenen Preise unverändert. Hinweise und Terminfragen als native Details.
3. Team: fünf echte Personen mit den bisherigen Rollen. Dieter und Doris zuerst;
   die drei übrigen Mitglieder folgen. Keine erfundenen Biografien.
4. Salon & Galerie: fünf Originalaufnahmen mit Bildbeschreibung und zugänglicher
   Vergrösserung. Separater Inspirationsbereich mit allen sechs Frisurenbildern.

Die gemeinsame Hauptaktion führt zum Telefon. Adresse und E-Mail stehen auf
jeder Seite. Die mobile Kontaktleiste enthält die sichtbare Telefonnummer.

## Logo-Paket

`assets/brand/luethi-logo-paket.zip` enthält SVG und transparente PNG-Dateien
(2000 Pixel breit) in Gelb, Dunkel und Elfenbein sowie Hinweise zur Verwendung.
Der gelbe Schriftzug ist die Hauptversion. Die Form stammt aus der geglätteten
Vektorisierung des vorhandenen Banners `assets/header_logo.jpg`, nicht aus einer
neu erfundenen Handschrift oder einer angeblich wiederhergestellten Vektordatei.

## Technik und Veröffentlichung

Vier bestehende HTML-Seiten, gemeinsames CSS/JavaScript, kein Framework, keine
Paketabhängigkeiten für Build oder Betrieb. Ein lokales Build-Skript erstellt
`dist`; Netlify nutzt `npm run build` und `dist` laut `netlify.toml`.

`npm run check` kontrolliert die gebauten Seiten, interne Asset-/Seitenverweise,
Anker, Font-Dateien, Logo-XML und JavaScript-Syntax. Browserchecks prüfen zusätzlich
Darstellung und Interaktion. Die originale Website ausserhalb dieses Repositorys
wird durch diese Änderungen nicht bearbeitet.

Vor einer späteren offiziellen Veröffentlichung mit eigener Salon-Domain bleiben
die Bestätigung der Preise und die Vervollständigung rechtlicher Texte durch den
Salon erforderlich. Für das freigegebene Netlify-Projekt ist die Veröffentlichung
dieses Reworks vom Auftraggeber erlaubt.

## Geprüfter Stand

- Produktionsbuild und `npm run check` erfolgreich: vier Seiten, 102 interne
  Seiten-/Asset-/Fragmentverweise, CSS-Font-Ressourcen und SVG-Dateien.
- Chromium auf 320, 375, 390, 768, 1440 und 1920 Pixeln: keine horizontalen
  Überläufe, fehlenden Bilder, Font-Ladefehler oder JavaScript-Laufzeitfehler.
- Mobile Navigation inklusive Escape, native Preis-Details, direkter Farbpreis-
  Einstieg sowie Galerie-Dialog inklusive Fokusrückgabe erfolgreich geprüft.
- Alle vier Seiten ohne JavaScript mit sichtbarem Inhalt und Navigation geprüft.
- Alle elf ursprünglichen Preisbeträge und deren Reihenfolge unverändert.
- Alle drei Logo-PNGs mit 2000 × 829 Pixeln und transparentem Hintergrund geprüft.
- Desktop-, Tablet- und Smartphoneansichten visuell geprüft; die Tablet-Proportionen
  des Einstiegs wurden nach dieser Kontrolle nochmals angepasst.


## Wechsel der Demo zu GitHub Pages

Der Pages-Workflow baut `main`, prüft alle lokalen Verweise und veröffentlicht
per GitHub Actions. Neue Läufe ersetzen überholte Läufe. Die Projekt-URL mit
Unterverzeichnis wird über BASE_PATH im Build unterstützt; Netlify- und lokale
Builds bleiben ohne Präfix nutzbar. Beide Buildvarianten und die Projektpfad-
Version im Browser (vier Seiten, 390/1440 Pixel, Schriften, Bilder, Navigation,
Preisanker, Details, Galerie und ohne JavaScript) wurden erfolgreich geprüft.
Die einmalige Aktivierung in GitHub Settings → Pages kann wegen des gesperrten
GitHub-API-Zugriffs nicht durch den Agenten vorgenommen werden. Repo-Sichtbarkeit
wird nicht geändert. Ein tatsächliches GitHub-Deployment muss gesondert bestätigt
werden; lokale Tests belegen noch keine veröffentlichte Demo.
