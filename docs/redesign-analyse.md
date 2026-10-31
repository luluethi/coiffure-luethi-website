# Aktuelles Designsystem — dunkel und markant

## Auftrag und Entscheidung

Coiffure Lüthi ist ein Familienbetrieb in Wohlen seit 1987, mit vielen
langjährigen Kundinnen und Kunden. Die Ansprache der Website ist Sie.
Team, Salon und Kontaktdaten sind echt; Preise und Rollen stammen aus dem
vorhandenen Repository. Zusätzliche Spezialisierungen, Bewertungen oder
biografische Angaben werden nicht erfunden.

Nach dem Review empfand der Auftraggeber den hellen, serifenbetonten Entwurf als
zu langweilig und wiederholend. Gewählt wurde ausdrücklich die Richtung B:
dunkel, markant und atmosphärisch. Diese Entscheidung gilt für alle vier Seiten.

## Gestalterische Regeln

- Anthrazit `#171916` als Hintergrund, `#22251F` für zurückhaltende Flächen.
- Helle Schrift `#F4F4ED`, lesbare Nebeninformationen `#B9BDB1`.
- Gelb `#FFDF00` für den bekannten Lüthi-Schriftzug, zentrale Handlungen und
  wenige Akzente. Keine zusätzliche Bildmarke, Schatten im Logo oder COIFFURE-Zeile.
- Manrope, lokal geladen in 400/600/800. Kräftige aufrechte Überschriften und
  grössere Informationstexte ersetzen die dünnen kursiven Überschriften.
- Breite Originalbilder, offene Flächen und klare Linien statt dekorativer
  Bildplaketten, nummerierter Personen und gleichförmiger Modebild-Karten.
- Dezente Einblendungen und Hovereffekte, bei reduzierter Bewegung deaktiviert.
- Team und Salon bleiben Originalfotografien; keine KI-Veränderung der Menschen
  oder Räumlichkeiten. Die Modebilder stehen nur in der Inspirationsgalerie.

## Inhaltsdisziplin und Seitenaufbau

Startseite: Einstieg mit Gruppenbild, Leistungen, Salon-Einblick, Kontakt.
Der Begriff Familienbetrieb erscheint nur einmal sichtbar, zusammen mit 1987
im Einstieg. Der grosse Jahreszahlenblock und alle Einzelporträts wurden von
der Startseite entfernt. Die Teamseite enthält die fünf echten Porträts ohne
Nummerierung und ohne einen weiteren Geschichtsblock.

Leistungen führen zu Damen, Herren, Farbe und Kindern auf der Preisseite. Die
elf Preispositionen und ihre Beträge bleiben unverändert, ebenso der sichtbare
Bestätigungsvorbehalt. Unklare vorhandene Bezeichnungen werden ohne Rückfrage
beim Salon nicht umbenannt.

Die Salonseite enthält Originalaufnahmen mit zugänglicher Bildvergrösserung.
Die Frisureninspiration ist ein eigener Abschnitt. Der gemeinsame Kontaktbereich
ist kompakter: sichtbare Telefonnummer, Adresse, E-Mail und externer Routenlink.
Der Footer wiederholt die Familiengeschichte nicht.

## Bild- und Logo-Dateien

Das hochgeladene `assets/TeamBild.jpg` bleibt unverändert im Repository.
Zwei WebP-Kopien (800/1800 Pixel, nur Formatoptimierung) liefern das Foto über
srcset aus. Es bleibt im ursprünglichen Seitenverhältnis vollständig sichtbar.

Das Logo-Paket unter `assets/brand/luethi-logo-paket.zip` enthält SVG und
transparente PNG-Dateien (2000 Pixel breit) sowie Verwendungshinweise. Der
Schriftzug ist eine geglättete Vektorisierung des vorhandenen Rasterbanners,
keine behauptete Original-Vektordatei. Die historische Form bleibt erhalten.

## Technik und geprüfter Stand

Vier statische HTML-Seiten, gemeinsame CSS-/JavaScript-Dateien, Build ohne
Paketinstallation. GitHub Pages verwendet einen eigenen Actions-Workflow für
`main`. Der Build unterstützt den Projekt-Unterpfad über BASE_PATH und prüft
auch responsive Bildverweise. Netlify bleibt technisch kompatibel.

- Produktionsbuild und `npm run check` erfolgreich für Domain-Wurzel und Pages-
  Projektpfad: vier Seiten, 93 lokale Verweise, CSS-Ressourcen und SVG-Dateien.
- Chromium auf 320, 375, 390, 768, 1440 und 1920 Pixeln: keine horizontalen
  Überläufe, fehlenden Bilder, Font-Ladefehler oder JavaScript-Laufzeitfehler.
- Navigation mit Escape, Leistungsanker, Preis-Details und Galerie mit
  Fokusrückgabe geprüft. Alle vier Seiten auch ohne JavaScript bedienbar.
- Alle elf ursprünglichen Preisbeträge unverändert geprüft.
- Desktop-, Tablet- und Smartphone-Screenshots aller Seiten visuell kontrolliert.

Die originale Salon-Website ausserhalb des Repositorys wird nicht verändert.
Rechtliche Texte und Preisbestätigung bleiben vor einem offiziellen Domainwechsel
mit dem Salon abzustimmen.
