# Aktueller Auftritt: Salonansichten, Team und klare Besuchswege

## Verbindliche Grundlagen

Coiffure Lüthi ist ein Familienbetrieb in Wohlen seit 1987. Die öffentliche
Ansprache ist Sie. Nur der Lüthi-Schriftzug ist gelb; Buttons, Links und übrige
Oberflächenelemente sind neutral. Die dunkle Richtung bleibt erhalten.

Team und Salon zeigen ausschliesslich Originalfotografien. Preise, Rollen und
Kontaktdaten bleiben unverändert. Öffnungszeiten werden auf ausdrücklichen Wunsch
nicht gezeigt. Die vorhandenen Preisbezeichnungen bleiben ohne zusätzliche
Erklärungen bestehen. Keine neuen Spezialisierungen oder biografischen Angaben.

## Neue Startseiten-Komposition

Die Startseite beginnt direkt mit einer sichtbaren Überschrift und der Bildfolge.
Ein grosser überlagerter Logo-Banner und ein separater Salon-Teaser entfallen.
Die Hauptansicht, auswählbare Vorschaubilder und das Teamfoto sind in einer
zusammenhängenden Übersicht angeordnet. Auf Smartphones folgen sie in einer
natürlichen Reihenfolge: Hauptbild, Bildsteuerung, Vorschaubilder und Teamfoto.

Die Aussenansicht steht zuerst. Es folgen Fensterplätze, Innenraum und Empfang.
Alle vier Bilder werden vollständig im originalen Seitenverhältnis dargestellt;
keine Vergrösserung, Scrollverschiebung oder erzwungener Ausschnitt. Die Auswahl
per Vorschaubild, Vor/Zurück, Tastatur und Wischen wechselt Ansicht, Beschriftung,
Zähler und Auswahlzustand gemeinsam. Keine automatische Slideshow.

Das Teamfoto ist in die Bildübersicht integriert, statt einen weiteren grossen
Abschnitt mit wiederholter Vorstellung zu bilden. Die Angaben zum Familienbetrieb
stehen einmal bei diesem Teamfoto. Die Leistungen liegen in einem eingerückten
hellen Feld; die vier Kategorien führen direkt zu den vorhandenen Preisen.
Instagram wird als kompakter Profil-Link dargestellt. Ein grosser Platzhalter-
Abschnitt ohne Beiträge entfällt. Der gemeinsame Kontaktbereich bleibt klar
und kompakt, mit direkter Telefonnummer, Adresse, E-Mail und Routenlink.

## Bewegung und Zugänglichkeit

Fotoüberblendung und Auswahlzustände unterstützen die Navigation. Titel und
Teambild werden dezent eingeblendet. Die Bildmaske beobachtet einen ungeclippten
Rahmen, damit Bilder nicht dauerhaft unsichtbar bleiben können. Reduzierte
Bewegung des Betriebssystems und die gespeicherte Animationspause werden
respektiert. Der Browser-Scroll bleibt unverändert.

Die Bildfläche unterstützt Pfeiltasten sowie Home/End; Touch-Wischen betrifft
nur horizontale Bewegungen. Vorschaubilder sind benannte Buttons mit aria-pressed;
inaktive Hauptbilder sind für Screenreader ausgeblendet. Ohne JavaScript bleiben
das erste Bild, das Team und der direkte Link zur vollständigen Galerie nutzbar.
Inaktive Bildsteuerungen sind dann ausgeblendet. Die Galerie auf der Salonseite
unterstützt Bildwechsel, Escape und Fokusrückgabe.

## Technik und Prüfung

Die Startseiten-Komposition liegt in `assets/home.css`. Gemeinsame Unterseiten-
Stile bleiben in `assets/site.css`. Beide Stylesheets und das gemeinsame Skript
bekommen im Build Inhalts-Hashes; Quellpfade bleiben für lokale Entwicklung
unverändert. Pages-Projektpfad und Domain-Wurzel werden weiterhin unterstützt.

Geprüft: Build und interne Verweise in beiden Varianten; vier Seiten bei 320,
375, 390, 768, 1440 und 1920 Pixeln; Bilder, Fonts, Überläufe, Navigation, Preis-
Sprunglinks, Galerie und Nutzung ohne JavaScript. Zusätzliche Funktionsprüfungen
bei 320/390/768/1440 Pixeln umfassen Vorschaubilder, ARIA-Auswahl, Tastatur inklusive
Umlauf, Wischgeste, Originalproportionen, Teamfoto-Einblendung und gespeicherte
Animationspause. Die Team- und Salon-Bilddateien wurden nicht verändert.

Der Instagram-Link führt zum bestätigten Profil @coiffureluethi. Ein dynamischer
Feed ist weiterhin nicht angeschlossen: Das Konto ist laut Auftraggeber
persönlich, für die offizielle Feed-Anbindung sind ein professionelles Konto
und eine Autorisierung erforderlich. Es werden keine Beiträge oder KI-Porträts
vorgetäuscht. Die originale Salon-Website ausserhalb des Repositorys bleibt
unverändert.
