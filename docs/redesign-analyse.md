# Coiffure Lüthi — animierter, bildbetonter Auftritt

## Inhaltliche Grundlage

Familienbetrieb in Wohlen seit 1987. Die Website verwendet Sie und beschreibt
konkret Team, Räume, Leistungen und Kontakt. Preise, Rollen und Kontaktdaten
stammen aus dem vorhandenen Repository. Keine neuen Spezialisierungen,
Bewertungen oder biografischen Angaben werden erfunden.

## Gestalterische Entscheidung

Der Auftraggeber hat die dunkle Richtung gewählt und anschliessend mehr
Eigenständigkeit, Bildwirkung und Bewegung gewünscht. Der aktuelle Aufbau
ersetzt das übliche Text-links/Bild-rechts-Muster des Einstiegs durch einen
bildfüllenden Original-Salonblick mit dem grossen gelben Lüthi-Schriftzug.

Die anschliessende Teamsektion zeigt das echte Gruppenfoto. Ein heller Abschnitt
mit grossen Leistungsbegriffen schafft einen bewussten Kontrast zur dunklen
Bildwelt. Der Instagram-Verweis führt zu dem bestätigten Profil
https://www.instagram.com/coiffureluethi/. Er ist ein externer Profil-Link,
kein automatisch importierter Feed und keine nachgebaute Beitragsansicht.

Die Familie/Geschichte erscheint einmal im Einstieg. Keine zusätzlichen
Geschichtsblöcke, nummerierten Personen oder doppelten Porträtlisten auf der
Startseite. Team, Preisseite und Galerie verwenden dieselben Schriften,
Farben, Verlinkungen, Animationen und Kontaktformen.

## Bilder und Echtheit

Team- und Salonaufnahmen bleiben Originaldateien. Das vom Auftraggeber gelieferte
`assets/TeamBild.jpg` bleibt erhalten; 800/1800 Pixel breite WebP-Kopien werden
responsiv ausgeliefert und ohne Beschnitt dargestellt.

Die während der Erprobung erzeugten KI-Porträts wurden vom Auftraggeber als
zu künstlich verworfen. Sie sind nicht im Repository und werden nicht ausgeliefert.
Die frühere allgemeine Modebild-Galerie wird nicht mehr auf der Website gezeigt.
Die Dateien bleiben als bestehender Bestand im Repository erhalten. Das Instagram-Profil ist die Verbindung zu aktuellen
eigenen Inhalten des Salons; es werden keine Beiträge automatisch kopiert.

## Bewegung und Bedienung

- Der Schriftzug wird beim Einstieg über eine Maske eingeblendet; Begleittext
  erscheint leicht versetzt. Die Original-Salonansichten wechseln nur manuell
  mit Vor/Zurück, Zähler und Bildbezeichnung. Keine automatische Slideshow.
- Salonfotos bleiben ohne Zoom oder Scrollversatz im Originalausschnitt. Der Header
  erhält beim Scrollen einen dunklen,
  transparenten Hintergrund. Der native Browser-Scroll bleibt erhalten.
- Text erscheint beim Scrollen; das Teamfoto wird über eine Bildmaske aufgedeckt.
  Ein ungeclippter Beobachtungsrahmen verhindert unsichtbar bleibende Bilder.
- Links, Pfeile und die Anruf-Schaltfläche erhalten gezielte Hovereffekte.
  Unterstützende Browser verwenden kurze Seitenübergänge.
- Das Betriebssystemsignal für reduzierte Bewegung wird respektiert.
  Die Footer-Schaltfläche pausiert Animationen und speichert nur diese lokale
  Präferenz. Ohne JavaScript sind Bilder, Texte und Navigation weiterhin sichtbar.
- Galerie-Dialog mit Bildwechsel, Pfeiltasten, Escape und Fokusrückgabe.

## Technik und Prüfung

Statische Seiten, lokale Manrope-Schriften, keine zusätzlichen Laufzeitpakete,
Tracker, extern geladenen Fonts oder kostenpflichtigen Dienste. Der Instagram-
Link lädt erst bei Klick die externe Seite. CSS und JavaScript erhalten im
Produktionsbuild inhaltsabhängige Dateinamen, um alte Browser-Caches zu vermeiden.
GitHub Pages nutzt `main` und den unterstützten Projekt-Unterpfad.

Geprüft: Produktionsbuild und interne Verweise für Domain-Wurzel und Pages-Pfad;
alle vier Seiten bei 320, 375, 390, 768, 1440 und 1920 Pixeln; Bilder, lokale
Schriften, Navigation und Nutzung ohne JavaScript. Zusätzliche Tests mit normaler
Bewegung prüfen Maskenanimation, manuellen Szenenwechsel, unveränderten Bildausschnitt,
Headerverhalten und gespeicherte Pausenpräferenz. Preise bleiben unverändert.
Die originale Salon-Website ausserhalb des Repositorys wird nicht verändert.


## Präzisierung: Logo-Farbe und natürliche Bildausschnitte

Gelb wird ausschliesslich für den Lüthi-Schriftzug verwendet. Buttons, Links,
Fokusränder, Nummern und dekorative Punkte verwenden neutrale helle Farben.
Farben innerhalb der unveränderten Originalfotografien bleiben erhalten.

Die Bildfolge beginnt mit dem Salon von aussen, gefolgt von Bedienplätzen,
Innenansicht und Empfang. Im Startbereich werden alle vier Bilder vollständig
über contain gezeigt, ohne Vergrösserung oder Hintergrundverschiebung. Auf
Smartphones erhält das Foto einen eigenen Rahmen im Originalseitenverhältnis.
Die Salon-Galerie verwendet natürliche Bildhöhen statt erzwungener Quer-/Hochformate;
auch der Hover-Zoom ist entfernt. Überblendungen und Schrift-/Bildmasken bleiben.

Zusätzlich geprüft: alle vier Hero-Bilder ohne Zoom/Pan sowie alle fünf
Galeriefotos mit identischen Original-/Darstellungsproportionen bei 320, 390,
768, 1440 und 1920 Pixeln. Allgemeine Browserprüfung aller vier Seiten bei sechs
Breiten und beide Produktionsbuilds erfolgreich.

Der Auftraggeber hat das Instagram-Konto als persönliches Konto bestätigt. Ein
offizieller dynamischer Feed erfordert ein professionelles Konto und eine
autorisierte API-Verbindung; diese Voraussetzungen sind noch nicht vorhanden.
Bis dahin bleibt der Profil-Link bestehen. Es wurde weder ein Feed vorgetäuscht
noch der Kontotyp des Salons verändert.


## Lesbarkeit, mobile Gewichtung und Kontakt

Die Schriftzug-Breite im Desktop-Einstieg ist von 840 auf maximal 560 Pixel
reduziert. Mobil ist der Einstieg kürzer, das Gruppenfoto steht vor der
Teameinleitung. Bei 390 × 844 Pixeln beginnt das Foto jetzt bei etwa 640 statt
1190 Pixeln. Die dauerhafte Telefonleiste übernimmt mobil die Terminaktion;
der zusätzliche Hero-Terminbutton wird dort ausgeblendet.

Grundschrift 17 Pixel, grössere Begleittexte und Bildunterschriften, mindestens
44 Pixel hohe Bildsteuerungen, Preis-Kategorielinks und zentrale Kontaktaktionen.
Sprunglinks berücksichtigen die feste Header-Höhe, damit Preisüberschriften nach
der Navigation sichtbar bleiben. Der Kontaktbereich verwendet eine gefüllte
Überschrift und direkt daneben die Telefonnummer; der zusätzliche Pfeilkreis
und die riesige doppelte Kontur-Überschrift sind entfernt.

Die Salonseite zeigt ausschliesslich eigene Räume; der frühere Modelbereich ist
durch einen direkten Instagram-Verweis ersetzt. Es wird keine neue Arbeit
behauptet und kein Feed vorgetäuscht.

Geprüft: alle vier Seiten auf sechs Breiten, mobile Reihenfolge und Grössen
bei 320/390/768/1440 Pixeln, mindestens 44 Pixel grosse Bildsteuerung und sichtbar
unterhalb des Headers angesprungene Farbpreis-Überschrift. Die elf ursprünglichen
Preispositionen bleiben unverändert. Der Auftraggeber möchte
keine Öffnungszeiten veröffentlichen. Die bestehenden Preisbezeichnungen bleiben
auf ausdrücklichen Wunsch unverändert und werden nicht zusätzlich erklärt.
