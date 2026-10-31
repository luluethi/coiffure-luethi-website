# Analyse und Gestaltungsgrundlage

## Leitlinie

Ein moderner Familienbetrieb mit Geschichte, hoher Qualität und persönlichem
Service. Die Gestaltung vermittelt diese Haltung durch Originalbilder, echte
Menschen, klare Informationen und sorgfältige Details. Das Logo besteht allein
aus dem gelben Lüthi-Schriftzug.

## Befund über die gesamte Website

| Bereich | Befund vor dieser Überarbeitung | Konsequenz |
| --- | --- | --- |
| Identität | Der kleine isolierte Logo-Ausschnitt wurde mit einem zusätzlichen COIFFURE-Label kombiniert. Die gelbe Marke spielte im übrigen Design kaum eine Rolle. | Nur der gelbe Schriftzug, als SVG aus der grösseren vorhandenen Bilddatei nachgezeichnet. Dunkler Hintergrund für Sichtbarkeit. Gelb gezielt bei Kontakt und Navigation. |
| Einstieg | Dunkler Bildfilter und mehrere austauschbare Werbezeilen verdeckten den realen Salon. | Heller, grossflächiger Originaleinblick neben einer konkreten Orts- und Betriebsangabe. Keine automatische Slideshow. |
| Familienbetrieb | Der Begriff stand im Text, auf der Startseite waren nur zwei von fünf Menschen zu sehen. | Alle fünf Personen schon auf der Startseite. Auf der Teamseite Inhaber zuerst, dann die übrigen Mitglieder; Rollen unverändert. |
| Geschichte | Gründungsjahr, Chronik und historische Fotografien fehlen im Repository. | Keine erfundene Tradition, Generationenfolge oder Jahreszahl. Vorhandene Räume, Name und Familie tragen die Identität. Eine Chronik braucht belegte Angaben des Salons. |
| Leistungen | Drei generische Karten, darunter Beratung, bildeten die bestehende Preisliste nicht vollständig ab. | Damen, Herren, Farbe und Kinder als nachvollziehbare Einstiege mit direkten Ankern in der Preisliste. |
| Preise | Übernommene Preise stehen unter Bestätigungsvorbehalt. | Alle elf Positionen und Beträge bleiben erhalten. Richtpreis-Hinweis steht vor der Liste; keine neuen Preise oder Pakete. |
| Salon | Wiederholte allgemeine Alternativtexte, fehlende Bildunterschriften und auf Mobilgeräten ausgeblendete Inspirationsbilder. | Konkrete Bildbeschreibungen und Bildunterschriften; Empfang, Bedienplätze, Waschplätze und Aussenansicht. Alle sechs Inspirationsbilder bleiben mobil sichtbar. |
| Kontakt | Mehrere unterschiedlich formulierte Handlungsaufforderungen führten teils zum Kontaktbereich, teils zum Telefon. | Hauptaktion stets telefonische Terminvereinbarung. Adresse, Telefon und E-Mail in einem gemeinsamen Kontaktbereich auf allen Seiten. |
| Texte | Wiederholte Formeln über Haargefühl und Persönlichkeit ohne zusätzliche Information. | Kürzere Texte mit Personen, Ort und Leistungen; keine unbelegten Qualitäts- oder Erfahrungssuperlative. |
| Technik | Vier statische Seiten, gemeinsames CSS/JS und Build ohne Paketabhängigkeiten sind eine passende Grundlage. Mobile Navigation war ohne JS verborgen; Bildabmessungen waren pauschal. | Struktur bleibt. Navigation funktioniert auch ohne JS, tatsächliche Bildabmessungen, seitenspezifische Beschreibungen, separates SVG statt Base64-Kopie. |
| Veröffentlichung | Preise und vollständige rechtliche Texte sind nicht abschliessend bestätigt. | In README dokumentiert; keine erfundenen Rechtsangaben. Kein Merge und kein Live-Deployment. |

## Gestaltungsregeln

- Dunkles Olivgrau, warmes Papier und das Gelb des bestehenden Schriftzugs.
- Serifentypografie für Überschriften; gut lesbare sachliche Navigation und Texte.
- Originalaufnahmen in ihrer natürlichen Farbigkeit, keine erfundenen Salonbilder.
- Wiederkehrende Abstände, Linien, Bildunterschriften und Linkformen über alle Seiten.
- Ruhige Einblendungen nur als Ergänzung; bei reduzierter Bewegung deaktiviert.
- Keine extern geladenen Schriften, Buchungsdienste, Tracker oder Karten-Embeds.

## Logo-Herkunft und Grenzen

`assets/luethi.svg` wurde aus dem gelben Schriftzug in `assets/header_logo.jpg`
isoliert und als geglättete Kontur vektorisiert. Keine neue Schrift und keine
Bildmarke wurden hinzugefügt. Der Schatten und das alte Banner gehören nicht zum
verwendeten Logo. Das SVG skaliert ohne Pixelkanten, ist aber eine Aufbereitung
der vorhandenen Rastervorlage und keine wiederhergestellte Original-Vektordatei.
Eine spätere Originaldatei kann unter demselben Asset-Pfad eingesetzt werden.

## Validierung dieser Umsetzung

- `npm run build` erzeugt alle vier Seiten und die lokalen Assets unter `dist`.
- Chromium: vier Seiten jeweils bei 375, 390, 768 und 1440 Pixeln; keine
  horizontalen Überläufe, defekten Bilder oder JavaScript-Laufzeitfehler.
- 85 interne Asset-, Seiten- und Fragmentverweise auf vorhandene Ziele geprüft.
- Alle elf ursprünglichen Preisbeträge und ihre Reihenfolge unverändert geprüft.
- Desktop- und Smartphone-Screenshots zur Beurteilung von Bildausschnitten,
  Hierarchie und Schriftzug visuell kontrolliert.
- Zusätzlich 320-Pixel-Ansicht mit tatsächlichen Menüklicks, direkter Einstieg
  zur Farbpreisliste, sichtbare Navigation ohne JavaScript auf allen vier Seiten
  und Einblendungen bei normaler Bewegung erfolgreich geprüft.
