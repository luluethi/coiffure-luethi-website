# Redesign: Haar, Menschen und Salon

## Ausgangslage und Entscheidung

Die bisherige Startseite zeigte eine grosse Salonansicht, mehrere auswählbare
Vorschaubilder und das Team gleichzeitig. Das wirkte wie eine Bildverwaltung und
wiederholte die Salon-Galerie. Die neue Startseite verzichtet vollständig auf
diese Steuerung und erzählt in vier Abschnitten: Coiffure, Team, Angebot und Salon.

## Gemeinsame Gestaltung

Antonio in grossen Versalien prägt Titel und Abschnittsüberschriften. Manrope
bleibt die gut lesbare Schrift für Texte, Namen, Preise und Navigation. Beide
Schriften werden lokal mitgeliefert. Anthrazit und gebrochenes Weiss bilden die
Oberfläche; ausschliesslich der Lüthi-Schriftzug ist gelb. Der Teamabschnitt setzt
einen hellen Kontrast. Alle vier Seiten teilen Navigation, Typografie, Abstände,
Bedienelemente und den direkten telefonischen Kontaktabschluss.

Der Einstieg zeigt eine einzelne Schwarzweiss-Frisurenaufnahme aus dem vorhandenen
Bildbestand, ausdrücklich als «Frisureninspiration» gekennzeichnet. Keine neue
KI-Aufnahme, keine Behauptung einer Salonarbeit. Team und Salon bleiben originale,
unveränderte Fotografien. Alle Bilder behalten ihre natürlichen Proportionen;
kein Scroll-Zoom oder erzwungener Ausschnitt.

Das echte Gruppenfoto erhält einen eigenen Abschnitt mit den fünf bekannten
Vornamen. Die Leistungen führen direkt zu den bestehenden Preisgruppen. Die
Salonszene auf der Startseite verweist zur Galerie mit Aussenansicht und weiteren
Originalaufnahmen. Instagram bleibt ein kompakter Link zum bestätigten Profil.

## Inhalte

Coiffure Lüthi, Wohlen, seit 1987. Öffentliche Ansprache: Sie. Team, Rollen,
Kontaktangaben und elf Preispositionen stammen aus dem vorhandenen Repository.
Öffnungszeiten und persönliche Zukunftspläne werden nicht veröffentlicht. Die
bestehenden Preisbezeichnungen und der Bestätigungsvorbehalt bleiben erhalten.
Keine neuen Spezialisierungen, Werbeversprechen oder erfundenen Angaben.

Ein dynamischer Instagram-Feed ist nicht angeschlossen: Das bestätigte Profil
@coiffureluethi ist ein persönliches Konto; eine offizielle automatische
Anbindung erfordert ein professionelles Konto und Autorisierung.

## Bewegung und Bedienung

Titel und Bildmaske bauen den Einstieg auf. Abschnitte und Originalfotos blenden
beim Scrollen ein, ohne die Bilder zu verschieben oder zu skalieren. Die
Bildmasken beobachten ungeclippte Rahmen, damit Inhalte zuverlässig erscheinen.
Die Betriebssystemeinstellung für reduzierte Bewegung und die im Footer
gespeicherte Animationspause werden berücksichtigt. Ohne JavaScript bleiben
Inhalte und Navigation sichtbar und Galeriebilder als direkte Links nutzbar.

Das mobile Menü hat einen eindeutigen Öffnen-/Schliessen-Zustand und schliesst
mit Escape. Die Salon-Galerie unterstützt Pfeiltasten, Escape und Fokusrückgabe.
Preis-Sprunglinks berücksichtigen den festen Header. Ein mobiler Anruf-Link
bleibt erreichbar; Telefonnummer und Adresse stehen im gemeinsamen Kontaktblock.

## Technik und Prüfung

Statische HTML-Seiten ohne Framework oder kostenpflichtige Dienste. Startseiten-
Layout in `assets/home.css`, gemeinsame Gestaltung in `assets/site.css`. Beide
Stylesheets und das Skript erhalten beim Build Inhalts-Hashes. Domain-Wurzel
und GitHub-Pages-Projektpfad werden unterstützt.

Prüfumfang: Builds und lokale Referenzen in beiden Pfadvarianten; alle vier Seiten
bei 320, 375, 390, 768, 1440 und 1920 Pixeln; Bild-/Font-Ladung, Überläufe, mobiles
Menü, Preislinks, Galerie und Nutzung ohne JavaScript. Zusätzliche Kontrolle der
Bildproportionen, Einblendungen und gespeicherten Animationspause. Team- und
Salon-Bilddateien bleiben unverändert. Die originale Salon-Website ausserhalb
des Repositorys wird nicht verändert.
