## Struktur jeder Unterseite

Jede Seite enthält:
1. `<link rel="stylesheet" href="shared.css">` im Head
2. Nav (identisch zu index.html)
3. Mobiles Overlay-Menü
4. Page-Teaser (55vh, Bild + Overlay + H1) — Platzhalterbild von Unsplash
5. Breadcrumb
6. Seiteninhalt (siehe unten pro Seite)
7. Footer (identisch zu index.html, mit 4 Spalten)
8. `<script src="shared.js"></script>` vor `</body>`

Kein inline `<style>`-Block außer für rein seitenspezifische Styles, 
die in keiner anderen Seite vorkommen.

---

## Areale (Prompt-CMS)

Seit 2026-07-12 trägt jede Seite unsichtbare Areal-Marker: reine HTML-
Kommentare der Form `[AREAL N: Name]`, angehängt an den bestehenden
Struktur-Kommentar direkt vor dem jeweiligen Block (z. B.
`<!-- ── 4. TORTEN ── [AREAL 60: Torten] -->`). Sie rendern nicht, tauchen
in keiner Suchmaschine auf und kosten nichts — sie sind ausschließlich
dafür da, dass eine Kundenanfrage wie „ändere das Bild in Areal 60 auf der
Startseite" sofort eindeutig einer Datei + einem Codeblock zugeordnet
werden kann, ohne dass Claude die Seite erst durchsuchen muss.

**Funktionsweise für Claude:**
1. Kunde nennt Seite + Areal-Nummer (oder nur eine grobe Beschreibung
   wie „das Bild unter dem Header").
2. Claude sucht `AREAL <N>` in der genannten HTML-Datei (oder gleicht die
   Beschreibung gegen die Tabelle unten ab, falls der Kunde nur einen
   Namen statt einer Nummer nennt).
3. Ein Areal reicht vom markierten Kommentar bis zum Ende des
   umschließenden Elements (nächster gleichrangiger Struktur-Kommentar
   oder schließendes `</section>`/`</header>`/`</footer>`/`</nav>`-Tag) —
   es gibt bewusst KEINEN separaten Schluss-Marker, das hielte den Diff
   unnötig groß.
4. **Jede Änderung an einem Areal wird automatisch für Tablet (768px) und
   Mobile (375px) mitgeprüft** — das ist kein Sonderfall, sondern fester
   Bestandteil jeder Areal-Bearbeitung (siehe Verifikations-Workflow).

**Nummerierung:** Je Seite eigenständig, in Zehnerschritten (10, 20, 30 …).
Die Lücken sind Absicht — wird später zwischen zwei Areale ein neuer
Abschnitt eingefügt, bekommt er eine Nummer dazwischen (z. B. 45), ohne
dass alle nachfolgenden Areale umnummeriert werden müssen.

**Global vs. seitenspezifisch:** Areale, die als „GLOBAL" markiert sind
(Navigation, Footer), sollen auf allen 8 Seiten inhaltlich identisch sein.
Eine Änderung dort muss deshalb in ALLEN 8 HTML-Dateien nachgezogen
werden, nicht nur in der zuerst genannten. (Der Footer von `index.html`
wich bis 2026-07-12 von den 7 Unterseiten ab — inzwischen angeglichen,
siehe Arbeitsprotokoll.)

### Areal-Tabelle

**`index.html`**
| Areal | Inhalt |
|---|---|
| 10 (GLOBAL) | Navigation oben + mobiles Menü |
| 20 | Header (Hero-Slideshow, inkl. Text) |
| 30 | Laufband |
| 40 | „Handwerk, das schmeckt" (Über-uns-Teaser, Bild + Text) |
| 50 | „Was wir machen" (Angebot, nur Text) |
| 60 | Torten (Text + Bild) |
| 65 | FAQ (3 Frage/Antwort-Paare, mit FAQPage-Schema) |
| 70 | Öffnungszeiten |
| 80 (GLOBAL, siehe Hinweis oben) | Footer |

**`speisekarte.html`**
| Areal | Inhalt |
|---|---|
| 10 (GLOBAL) | Navigation oben + mobiles Menü |
| 20 | Page-Teaser (Slideshow) |
| 60 | Frühstückskonfigurator — **seit 2026-08-26 an erster Stelle direkt nach dem Breadcrumb**, vor Areal 30. Die Nummer blieb bewusst 60 (nicht umnummeriert), nur die Position im Dokument wurde getauscht. |
| 30 | Drei Karten (Frühstück / Bäcker-Sushi / Backwaren) |
| 40 | Bäcker-Sushi, Canapés & mehr |
| 50 | Interaktive Preisliste |
| 70 | Saisonales & Neuheiten |
| 75 | FAQ (3 Frage/Antwort-Paare zu Frühstück, mit FAQPage-Schema) |
| 80 | Öffnungszeiten-Reminder |
| 90 | Bestellzettel (nur Druck/PDF-Export) |
| 95 | Bestellungs-Ansicht / Tisch-Sammelbestellung (QR-Code-Ziel an der Kasse, im Alltag unsichtbar) |
| 100 (GLOBAL) | Footer |

**`torten.html`**
| Areal | Inhalt |
|---|---|
| 10 (GLOBAL) | Navigation oben + mobiles Menü |
| 20 | Page-Teaser (Slideshow) |
| 30 | Intro & Prozess |
| 40 | Kategorien (Hochzeit/Geburtstag/Motiv/Cupcakes) |
| 50 | Saisonales |
| 55 | FAQ (3 Frage/Antwort-Paare zu Torten/Törtchen, mit FAQPage-Schema) |
| 60 | Anfrage-Formular |
| 70 (GLOBAL) | Footer |

**`ueber-uns.html`**
| Areal | Inhalt |
|---|---|
| 10 (GLOBAL) | Navigation oben + mobiles Menü |
| 20 | Page-Teaser (Slideshow) |
| 30 | Text & Bild |
| 40 | Werte (3 Kacheln) |
| 50 | Instagram |
| 60 (GLOBAL) | Footer |

**`kontakt.html`**
| Areal | Inhalt |
|---|---|
| 10 (GLOBAL) | Navigation oben + mobiles Menü |
| 20 | Page-Teaser |
| 30 | Adresse, Karte & Formular |
| 40 | Anfahrt |
| 50 (GLOBAL) | Footer |

**`karriere.html`**
| Areal | Inhalt |
|---|---|
| 10 (GLOBAL) | Navigation oben + mobiles Menü |
| 20 | Page-Teaser |
| 30 | Stellenangebote |
| 40 | Bewerbungsformular |
| 50 (GLOBAL) | Footer |

**`impressum.html`**
| Areal | Inhalt |
|---|---|
| 10 (GLOBAL) | Navigation oben + mobiles Menü |
| 20 | Page-Teaser (minimal) |
| 30 | Impressum-Text |
| 40 (GLOBAL) | Footer |

**`datenschutz.html`**
| Areal | Inhalt |
|---|---|
| 10 (GLOBAL) | Navigation oben + mobiles Menü |
| 20 | Page-Teaser (minimal) |
| 30 | Datenschutz-Text |
| 40 (GLOBAL) | Footer |

**`canapes.html`** (seit 2026-07-12)
| Areal | Inhalt |
|---|---|
| 10 (GLOBAL) | Navigation oben + mobiles Menü |
| 20 | Page-Teaser |
| 30 | Einleitung (Text) |
| 40 | Galerie (11 Sorten, 3×4) |
| 50 | Bestellformular |
| 60 (GLOBAL) | Footer |

**`sushi.html`** (seit 2026-07-12, seit 2026-08-31 `index, follow`)
| Areal | Inhalt |
|---|---|
| 10 (GLOBAL) | Navigation oben + mobiles Menü |
| 20 | Page-Teaser |
| 30 | Einleitung (Text) |
| 40 | 10er-Pack-Hinweis, Einzelbild links + Sortenliste rechts — **seit 2026-08-31**, ersetzt die frühere 11-teilige Galerie |
| 50 | Bestellformular |
| 60 (GLOBAL) | Footer |

### Gesprächsablauf für Kundenanfragen

Wenn ein Kunde sinngemäß schreibt „Ich möchte heute Änderungen an der
Startseite vornehmen" (ohne Areal-Nummer zu nennen): Claude nennt kurz die
Areal-Liste der genannten Seite aus der Tabelle oben und fragt, welches
Areal gemeint ist bzw. was genau geändert werden soll — Kunden kennen
i. d. R. keine Areal-Nummern auswendig, eine kurze Beschreibung reicht
(„das Bild ganz oben", „der Text bei den Öffnungszeiten"). Erst danach mit
der eigentlichen Änderung beginnen.

---

## Verifikations-Workflow

Gilt für JEDE Änderung an der Website, nicht nur für Areal-Bearbeitungen.
Bis 2026-08-31 war dieser Abschnitt nur aus dem Arbeitsprotokoll ableitbar —
der Verweis im Areale-Kapitel („siehe Verifikations-Workflow") zeigte ins
Leere. Hier stehen die Regeln jetzt gesammelt.

### 0. Vor der Umsetzung

1. Diese Datei lesen — sie ist der vollständige aktuelle Stand.
2. Areal bestimmen (Areal-Tabelle oben). Nennt der Kunde nur eine
   Beschreibung, kurz die Areal-Liste der Seite anbieten und nachfragen,
   statt zu raten.
3. **Diagnose + Vorschlag zuerst, dann auf ein ausdrückliches Go warten** —
   auch bei scheinbar eindeutigen Bugfixes. Nicht ungefragt losbauen.
4. Ist das Areal als GLOBAL markiert (Navigation, Footer, Favicon), muss die
   Änderung in ALLEN 10 HTML-Dateien nachgezogen werden, nicht nur in der
   zuerst genannten.

### 1. Umsetzung

- **Viele gleichartige Textstellen → Python-Skript mit erwarteter
  Trefferzahl**, das bei Abweichung abbricht, OHNE eine Datei zu schreiben.
  So entsteht nie ein Halbstand. (Genau das hat am 2026-08-13 den
  Entity-Fehler gefangen, bevor Schaden entstand.)
- Dateien immer als UTF-8 lesen und schreiben. Gedankenstriche stehen in
  diesen Dateien als **echtes Zeichen `–` (U+2013)**, nicht als `&#8211;` —
  Suchmuster entsprechend bauen.
- **Preise ausschließlich in `json/preise.js`** pflegen, nie im HTML.
- **Aktiv genutzte Funktionen** (QR-Ziel-URL, Formular-Action, Weiterleitungen
  mit Testcharakter) NIE auf die künftige Live-Domain hartcodieren —
  `location.origin` bzw. relative Pfade verwenden. Nur inerte Metadaten
  (Canonical, JSON-LD, Open Graph, Sitemap), die bis zum Livegang niemand
  aktiv aufruft, dürfen fest auf `brotzeit-rostock.de` zeigen.
- **Tag-Wechsel im Markup** (z. B. `<h1>` → `<p>` gegen doppelte H1):
  vorher prüfen, ob das CSS über den Tag selektiert (`.bestellung-box h1`).
  Wenn ja, gleichzeitig auf einen Klassen-Selektor umstellen — sonst ändert
  sich still das Aussehen. Auch `@media print`-Blöcke prüfen.
- **Farben immer gegen den tatsächlichen Hintergrund der Sektion prüfen.**
  Die Seite mischt helle (`--cream`, `--sand`) und dunkle (`--warm-dark`)
  Sektionen. Eine Farbe, die auf dunklem Grund funktioniert, ist auf hellem
  Grund oft unsichtbar — genau so verschwand die Erfolgsmeldung des
  Kontaktformulars (behoben 2026-08-31).

### 2. Mitziehen (wird am häufigsten vergessen)

- **JSON-LD/Schema derselben Seite**: Öffnungszeiten, FAQPage, JobPosting,
  Menu, ItemList. Sonst spielt Google weiter die alten Angaben aus, obwohl
  auf der Seite die neuen stehen.
- **FAQ: sichtbarer Text und FAQPage-Schema müssen wortgleich sein** —
  Google verlangt das für Rich Snippets. Beides zusammen ändern.
- Title, Meta-Description, Open Graph und Twitter-Card, Canonical.
- `sitemap.xml` bei neuen oder entfernten Seiten. Seiten mit `noindex`
  gehören NICHT in die Sitemap (widersprüchliches Signal).
- **Deploy-Checkliste** in dieser Datei, sobald eine neue Datei oder ein
  neuer Ordner dazukommt.
- **Bilder immer in allen vier Größen** `images/480|960|1600|2800/` anlegen —
  fehlt eine, bricht das `srcset` still, und `src`/`og:image` zeigen ins
  Leere. (So war das Canapé-Teaserbild seit dem Ordnerwechsel kaputt,
  behoben 2026-08-31.)

### 3. Testen in der Vorschau — Pflicht, nicht optional

Jede Änderung wird auf **Desktop, Tablet (768px) und Mobile (375px)**
geprüft. Mindestumfang:

- Kein horizontales Scrollen (`documentElement.scrollWidth > clientWidth`).
- Konsole fehlerfrei.
- Geänderte oder neue Assets liefern tatsächlich 200 OK.
- Genau ein `<h1>` pro Seite.
- **Die Funktion wirklich ausführen, nicht nur den Quellcode lesen.**
  Beispiel: den tatsächlich kodierten QR-Inhalt per Monkey-Patch auf
  `qrcode()` auslesen, statt sich auf die Codestelle zu verlassen.
- Was sich nicht nachstellen lässt (echtes iOS-Kameraverhalten, echter
  SMTP-Versand, Vercel Functions unter `python -m http.server`), klar als
  nicht getestet benennen statt es als geprüft auszugeben.

**Stolperfallen der lokalen Vorschau:**

- `python -m http.server` setzt keine Cache-Header — CSS und JS hängen
  hartnäckig im Cache, auch über Neuladen hinweg. Cache brechen:
  `link.href = 'shared.css?v=' + Date.now()`.
- Bilder, die vorher 404 lieferten, bleiben negativ gecacht. Nach dem
  Nachlegen einer Datei neu laden, sonst misst man den alten Fehlstand.
- Ein fester `resize_window`-Wert kann die Screenshot-Skalierung verzerren;
  die Presets `desktop` / `tablet` / `mobile` verhalten sich zuverlässiger.
- **Testdaten müssen dem echten Format entsprechen.** Die Bestellnummer
  ist z. B. ein String (`String(Math.floor(...))` in `speisekarte.html`) —
  eine Testbestellung mit numerischer `nummer` lässt `esc()` auflaufen und
  täuscht einen Fehler vor, den es im echten Ablauf nicht gibt.

### 4. Nachdokumentieren

- **Arbeitsprotokoll**: neuer Eintrag ganz oben, mit Wunsch bzw. Problem,
  Ursache, umgesetzten Schritten und dem konkreten Testergebnis.
- Vorausschauende Spec-Stellen weiter oben in dieser Datei anpassen, damit
  Spec und Realität nicht auseinanderlaufen.
- **Historische Protokolleinträge NICHT rückwirkend umschreiben** — sie
  beschreiben korrekt, was zum jeweiligen Zeitpunkt galt.
- Areal-Tabelle und Deploy-Checkliste bei strukturellen Änderungen
  nachziehen.

---

## Seiten — Anweisungen

### 1. `speisekarte.html`

Title: `Frühstück & Speisekarte in Rostock | Brotzeit`
Description: `Täglich frisches Frühstück, wechselnder Mittagstisch und handwerkliche Backwaren. Brotzeit Rostock, Am Vögenteich 24.`
Canonical: `https://brotzeit-rostock.de/speisekarte.html`

Page-Teaser H1: `Frühstück & Backwaren <em>in Rostock.</em>`
Teaser-Lead: `Frühstück ab 7.30 Uhr, wechselnder Mittagstisch, Backwaren aus der Backstube. Die Karte wechselt wöchentlich.`
Platzhalterbild: `https://images.unsplash.com/photo-1504718855392-c0f33b372e72?w=1600&q=80&fit=crop`

Inhalt (3 Sektionen):

**Sektion 1 — Drei Karten nebeneinander (Grid 3 Spalten):**
- Karte 01: „Frühstück" — Belegte Brote, Frühstücksteller, Rührei, Lachs — täglich ab 7.30 Uhr
- Karte 02: „Bäcker-Sushi & Canapés" — Rollen, Schnittchen, Snacks & Salate — Neu im Sortiment
- Karte 03: „Backwaren & Brot" — Brote, Brötchen, Kuchen aus der Backstube — täglich frisch

**Sektion 1A — Bäcker-Sushi, Canapés & mehr (id="snacks", weißer Hintergrund):**
4 Text-Karten (2×2): Bäcker-Sushi, Canapés, Snacks & Salate, Warme & kalte
Getränke (Link → #preise). Fotos folgen vom Fototermin, Canapé-Preise von
Sparre — bis dahin bewusst ohne Bilder.

Hinweis unter den Karten (kleiner Text, zentriert): 
„Die Karte wechselt wöchentlich. Aktuelle Angebote immer im Laden oder auf Instagram."
Instagram-Link: `https://www.instagram.com/brotzeitrostock/`

**Sektion 2 — Saisonales & Neuheiten (zwei Blöcke):**
Überschrift: `Saisonales & <em>Neuheiten.</em>`
Eyebrow: `Immer zur richtigen Zeit`

Block „01 · Saisonales" (Kacheln 2×2):
- Ostern: Hefezöpfe, Osterlämmer, Schokoeier — lokales Foto
- Muttertag: Individualtorten, Blumentörtchen, Frühstücksboxen — lokales, responsives Bild `brotzeit-rostock-muttertag-torte.jpg`
- Valentinstag: Pralinen, Herztorten, kleine Überraschungen — lokales Foto
- Weihnachten: Stollen, Lebkuchen, Christstollen nach Hausrezept — lokales, responsives Bild `brotzeit-rostock-weihnachten-plaetzchen.jpg`
- (auskommentierte Eiscafé-Vorlage zum schnellen Einsetzen im Sommer)

Block „02 · Neuheiten":
- Bäcker-Sushi (Platzhalterfoto, echtes folgt)
- Frühstückskonfigurator-Teaser (verlinkt auf #fruehstueck-konfigurator)

Jede Kachel: Bild (3:2 Ratio), Titel, 1 Satz Text. Kachel tauschen =
img + Titel + Text ändern, mehr nicht.

**Sektion 3 — Öffnungszeiten-Reminder (dark background, var(--warm-dark)):**
Text: „Täglich vor Ort" + Öffnungszeiten-Tabelle + CTA „Kontakt aufnehmen" → kontakt.html

**Sektion 1B — Interaktive Preisliste (id="preise"):**
Kategorie-Tabs (Heißgetränke / Tee & Kalte Getränke / Brötchen & Gebäck /
Frühstück belegen), Live-Suche über alle Kategorien, Gruppen-Karten mit
klein/groß-Spalten. Alle Preisdaten kommen zentral aus `json/preise.js`
(window.BROTZEIT_PREISE) — Preisänderungen NUR dort pflegen, nie im HTML.

**Sektion 1C — Frühstückskonfigurator (id="fruehstueck-konfigurator", background var(--sand)):**
Aufklappbare Gruppen (details/summary) mit Mengen-Steppern, sticky
Zusammenfassung (dark, var(--warm-dark)) mit Live-Gesamtsumme und
Vorname-Feld („wir rufen dich auf", McDonald's-Prinzip).
Aktionen: „QR-Code für die Kasse erzeugen" (Klartext-Bestellung als QR,
Kasse scannt → hat sofort Bestellung + Namen; lokale Lib js/qrcode.min.js,
KEIN mailto mehr!), „Als PDF speichern" (Bestellzettel inkl. QR über
Druckdialog), „Liste kopieren" (Clipboard), „Zurücksetzen".
QR wird bei jeder Änderung der Auswahl ungültig (ausgeblendet).
Kein Warenkorb, keine Zahlung — bezahlt wird an der Kasse.

---

### 2. `torten.html`

Title: `Individuelle Torten – Brotzeit Rostock | Hochzeitstorten, Motivtorten, Cupcakes`
Description: `Individuelle Torten nach Maß: Hochzeitstorten, Geburtstagstorten, Motivtorten und Cupcakes. Handwerkliche Konditorei Rostock. Jetzt anfragen.`
Canonical: `https://brotzeit-rostock.de/torten.html`

Page-Teaser H1: `Jede Torte ein <em>Einzelstück.</em>`
Teaser-Lead: `Hochzeitstorten, Geburtstagstorten, Motivtorten — jede Torte entsteht nach Wunsch. Wir besprechen alles persönlich.`
Platzhalterbild: `https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=1600&q=80&fit=crop`

Inhalt (4 Sektionen):

**Sektion 1 — Intro mit Bild links, Prozess rechts (2-spaltig):**
Überschrift: `Von der Idee zur <em>fertigen Torte.</em>`
Prozess-Schritte (nummeriert 1–4):
1. Anfrage — E-Mail oder persönlich im Laden
2. Persönliches Gespräch — Geschmack, Motiv, Größe, Datum
3. Angebot & Bestätigung — schriftlich, verbindlich
4. Abholung — Am Vögenteich 24 oder Lieferung auf Anfrage

**Sektion 2 — Kategorien (2×2 Grid, Bild-Karten mit Overlay-Text):**
- Hochzeitstorten — `https://images.unsplash.com/photo-1535254973040-607b474cb50d?w=800&q=80&fit=crop`
- Geburtstagstorten — `https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80&fit=crop`
- Motivtorten — `https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?w=800&q=80&fit=crop`
- Cupcakes & Petitfours — `https://images.unsplash.com/photo-1519869325930-281384150729?w=800&q=80&fit=crop`
Jede Karte: Link → `mailto:info@brotzeit-rostock.de`

**Sektion 3 — Saisonale Kacheln (identisch zu speisekarte.html, 4 Kacheln):**
Ostern · Muttertag · Valentinstag · Weihnachten

**Sektion 4 — Anfrage (dark background):**
2-spaltig: Links Kontakt-Info (persönlich, E-Mail, Telefon, Vorlaufzeit), 
rechts rudimentäres Kontaktformular:
Felder: Name, E-Mail, Anlass (Dropdown: Hochzeit / Geburtstag / Motiv / Sonstiges), 
Wunschdatum, Personenzahl, Nachricht (Textarea), Senden-Button
Seit 2026-08-31 wie `kontakt.html` an das Vercel-Backend angeschlossen:
`POST /api/formular`, `multipart/form-data`, Formular-Typ `torte`, gemeinsames
Client-Script `formular.js`, Honeypot und Zeitprüfung. Der Endpoint versendet
die Anfrage über das bestehende IONOS-Postfach an
`info@brotzeit-rostock.de`. Die Nachricht ist ein Pflichtfeld; Anlass,
Wunschdatum und Personenzahl werden in die E-Mail übernommen.

---

### 3. `ueber-uns.html`

Title: `Über uns – Brotzeit Rostock | Bäckerei Sparre seit Jahrzehnten`
Description: `Die Brotzeit ist aus der Bäckerei Sparre gewachsen. Handwerkliches Backen, Konditorei und Café am Vögenteich 24 in Rostock.`
Canonical: `https://brotzeit-rostock.de/ueber-uns.html`

Page-Teaser H1: `Handwerk, <em>das schmeckt.</em>`
Teaser-Lead: `Die Brotzeit ist aus der Bäckerei Sparre gewachsen — Bäckerei, Konditorei und Café. Am Vögenteich 24, Rostock.`
Platzhalterbild: `https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=1600&q=80&fit=crop`

Inhalt (3 Sektionen):

**Sektion 1 — Text links, Bild rechts (2-spaltig):**
Überschrift: `Aus der Bäckerei <em>Sparre.</em>`
Text: Die Brotzeit entstand aus der Bäckerei Sparre — einem Rostocker Handwerksbetrieb, der seit Jahrzehnten für seine handwerkliche Qualität bekannt ist. Am Vögenteich 24 vereint die Brotzeit Bäckerei, Konditorei und Café unter einem Dach. Täglich frisch gebacken, täglich für Rostock.
Platzhalterbild: `https://images.unsplash.com/photo-1509440159596-0249088772ff?w=900&q=80&fit=crop`

**Sektion 2 — 3 Werte-Kacheln (Grid 3 Spalten, light background):**
- Handwerk: Jedes Brot, jede Torte, jedes Brötchen — aus eigener Produktion.
- Frische: Täglich gebacken. Was heute im Laden liegt, wurde heute gebacken.
- Rostock: Ein Laden für die Nachbarschaft, die Mittagspause und den besonderen Anlass.

**Sektion 3 — Instagram-Teaser (dark background):**
Text: „Einblicke in die Backstube" + Instagram-Handle `@brotzeitrostock`
CTA-Button: „Auf Instagram folgen" → `https://www.instagram.com/brotzeitrostock/`

---

### 4. `kontakt.html`

Title: `Brotzeit Rostock: Kontakt, Öffnungszeiten & Anfahrt`
Description: `Brotzeit Rostock kontaktieren: Am Vögenteich 24, 18055 Rostock. Telefon, E-Mail, Öffnungszeiten und Google Maps.`
Canonical: `https://brotzeit-rostock.de/kontakt.html`

Page-Teaser H1: `Brotzeit <em>in Rostock finden.</em>`
Teaser-Lead: `Am Vögenteich 24, mitten in Rostock. Persönlich, per E-Mail oder telefonisch.`
Platzhalterbild: `https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1600&q=80&fit=crop`

Inhalt (2 Sektionen):

**Sektion 1 — 3-spaltig:**
Spalte 1 — Adresse & Öffnungszeiten:
Am Vögenteich 24, 18055 Rostock
Tel: 0381 87729509 (als tel-Link)
E-Mail: info@brotzeit-rostock.de (als mailto-Link)
Öffnungszeiten-Tabelle (Mo–Fr 07:30–17:30, Sa 08:00–16:30, So geschlossen)

Spalte 2 — Google Maps Embed:

**Seit 2026-08-26 mit echtem Embed befüllt** (Quelle: vom Kunden
gelieferter Google-Maps-Kurzlink zum echten Business-Eintrag „Brotzeit
Rostock", siehe Arbeitsprotokoll). Aktueller Code:
```html
<iframe
  src="https://www.google.com/maps/embed?pb=!1m2!2m1!1sBrotzeit+Rostock,+Am+Voegenteich+24,+18055+Rostock"
  width="100%" height="320" style="border:0;border-radius:4px;"
  allowfullscreen loading="lazy"
  referrerpolicy="no-referrer-when-downgrade"
  title="Brotzeit Rostock auf Google Maps">
</iframe>
```
(Ursprünglicher Platzhalter-Code, zur Referenz, nicht mehr aktiv:
`src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2335.123!2d12.1327!3d54.0897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTTCsDA1JzIyLjkiTiAxMsKwMDcnNTcuNyJF!5e0!3m2!1sde!2sde!4v1234567890"`.)

Spalte 3 — Rudimentäres Kontaktformular:
Felder: Name, E-Mail, Betreff (Dropdown: Allgemeine Anfrage / Torte bestellen / Tisch reservieren / Karriere / Sonstiges), Nachricht (Textarea), Senden-Button
Formular-Action: `mailto:info@brotzeit-rostock.de` (method="post" enctype="text/plain")
Kein Backend, kein externer Dienst.

**Sektion 2 — Anfahrt (dark background):**
Text: Mit Bus oder Auto — Parkplätze am Vögenteich verfügbar. 
ÖPNV: Linie 1 und 2, Haltestelle Steintor (ca. 5 Minuten Fußweg).
CTA: „Route planen" → `https://maps.google.com/?q=Am+Vögenteich+24+Rostock`

---

### 5. `karriere.html`

Title: `Karriere – Brotzeit Rostock | Jetzt bewerben`
Description: `Werde Teil des Teams bei Brotzeit Rostock. Offene Stellen in Bäckerei, Konditorei und Service. Bewerbung per E-Mail.`
Canonical: `https://brotzeit-rostock.de/karriere.html`

Page-Teaser H1: `Werde Teil <em>unseres Teams.</em>`
Teaser-Lead: `Handwerk, Konditorei, Service — wir freuen uns über Verstärkung.`
Platzhalterbild: `https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1600&q=80&fit=crop`

Inhalt (2 Sektionen):

**Sektion 1 — Text + 3 Kacheln (Stellen):**
Intro-Text: Wir sind ein kleines Team mit viel Herzblut für gutes Handwerk. Ob Bäcker, Konditor oder im Service — wenn du gerne backst, anpackst und Freude am Umgang mit Menschen hast, bist du bei uns richtig.

3 Kacheln:
- Bäcker / Konditor (m/w/d)
- Fachverkäufer im Lebensmittelhandwerk (m/w/d)  
- Aushilfe / Minijob (m/w/d)

Jede Kachel: Stellenbezeichnung, 2 Sätze Beschreibung, Button „Jetzt bewerben" → `mailto:info@brotzeit-rostock.de?subject=Bewerbung Brotzeit Rostock`

**Sektion 2 — dark background:**
Text: Kein passendes Angebot dabei? Schick uns eine Initiativbewerbung. 
CTA: „Initiativbewerbung senden" → `mailto:info@brotzeit-rostock.de?subject=Initiativbewerbung Brotzeit Rostock`

---

### 6. `impressum.html`

Title: `Impressum – Brotzeit Rostock`
Canonical: `https://brotzeit-rostock.de/impressum.html`

Minimales Layout: Page-Teaser nur 30vh, kein Bild (dark background var(--warm-dark)), 
dann ein breiter Text-Container mit dem Impressumstext.

**Seit 2026-07-13 mit echten Daten befüllt** (Quelle: `impress-datenschutz/
Impressum Sparre.docx`, siehe Arbeitsprotokoll). Rechtlich verantwortlich
ist die Bäckerei Sparre GmbH & Co. KG (nicht Maximilian Sparre persönlich
— er ist einer von drei Prokuristen, Geschäftsführer ist Michael Sparre).
Kontaktdaten im Impressum/Datenschutz sind bewusst die der GmbH & Co. KG
(Erich-Schlesinger-Str. 49, Telefon 0381 36 46 70 00, mail@sparre.de) —
das weicht von den Brotzeit-Ladenkontaktdaten (Am Vögenteich 24, 0381
87729509, info@brotzeit-rostock.de) ab, die auf allen anderen Seiten
stehen. Das ist so gewollt: Impressum/Datenschutz müssen die tatsächlich
haftende juristische Person nennen, nicht die Filiale.

### 7. `datenschutz.html`

Title: `Datenschutz – Brotzeit Rostock`
Canonical: `https://brotzeit-rostock.de/datenschutz.html`

Gleiches Minimal-Layout wie Impressum.

**Seit 2026-07-13 mit echtem Text befüllt** (Quelle: `impress-datenschutz/
Datenschutzerklärung - Sparre.docx`, 9 nummerierte Abschnitte, siehe
Arbeitsprotokoll). Vom Kunden bereitgestelltes Generator-Dokument —
enthält u. a. Abschnitte zu PayPal, Sofortüberweisung, Newsletter,
Kommentarfunktion und Registrierung, die auf der aktuellen Website keine
Entsprechung haben. Bewusst 1:1 übernommen statt eigenmächtig gekürzt,
da das eine juristische Entscheidung ist, keine gestalterische — nur der
Kunde/dessen Rechtsberatung sollte entscheiden, ob diese Abschnitte
raus können.

---

### 8. `canapes.html`

Seit 2026-07-12. Zunächst nur über die Canapé-Kachel auf speisekarte.html
(Sektion 1A, Areal 40) verlinkt, seit 2026-07-12 (abends) auch fest in der
Hauptnavigation (`.nav-links`, `.nav-mobile`) und im Footer
(„Angebot"-Spalte) aller Seiten — Position zwischen Torten und Über uns
(inzwischen zwischen Torten und Bäcker-Sushi, siehe Seite 9 unten).

Title: `Canapés Rostock | Feine Häppchen für jeden Anlass – Brotzeit`
Description: `Canapés von Brotzeit Rostock: elf raffinierte Sorten auf frischem Brot, verfeinert mit Cremes und Obstdeko. Perfekt für Feiern und Events. Jetzt anfragen.`
Canonical: `https://brotzeit-rostock.de/canapes.html`

Page-Teaser H1: `Canapés für <em>jeden Anlass.</em>`
Teaser-Lead: `Elf raffinierte Sorten auf frischem Brot — verfeinert mit Cremes, Kräutern und Obstdeko. Perfekt für Feiern, Meetings und besondere Anlässe in Rostock.`
Teaserbild: `images/…/brotzeit-rostock-mittagstisch-veggie-rostock.jpg` — wiederverwendetes Bild aus der Hero-Slideshow von index.html (bewusst kein neues Fotoshooting, auf Kundenwunsch).

Inhalt (3 Sektionen):

**Sektion 1 — Einleitung (reiner Text, kein Bild):**
Kurzer Absatz, der die Canapé-Auswahl beschreibt (Roggenvollkorn- oder
Weizenbrot als Basis, Cremes, Feldsalat/Rucola, Obstdeko).

**Sektion 2 — Galerie (3×4 Grid, 12 Kacheln, sandfarbener Hintergrund):**
1 Übersichtsbild („Canapés — alle Sorten") + 11 Sorten: Serranoschinken,
Gouda, Putenbrust, Tomate Mozzarella, französische Salami, Leerdammer,
Pastrami, Bonbel Butterkäse, Räucherlachs, Kochschinken, Tomate Feta.
Bildquelle: Instagram-Carousel-Grafiken des Kunden (`images/cannapes/`,
12 Screenshots, 853×853px) — SEO-umbenannt nach dem Muster
`brotzeit-rostock-canape-{sorte}.jpg`. Die Sorten-Namen und Zutaten stehen
bereits als Grafik-Text IM Bild (Instagram-Design mit Kreisbogen-Rahmen
und Zutat-Callouts) — deshalb KEIN zusätzliches Text-Overlay auf den
Kacheln, das wäre redundant und würde den bereits vorhandenen Bildtext
überdecken. Jede Kachel verlinkt auf `#anfrage` (Formular weiter unten),
aber ohne Anlass-Vorauswahl (anders als bei torten.html) — bei einer
Catering-Anfrage für mehrere Personen macht eine Einzelsorten-Auswahl im
Formular keinen Sinn, das freie Textfeld „Ihre Wünsche" deckt das ab.

**Sektion 3 — Bestellformular (dark background, wie torten.html Anfrage):**
2-spaltig: Links Kontakt-Info (persönlich, E-Mail, Telefon, Vorlaufzeit
3–5 Tage — kürzer als bei Torten, da kein individuelles Anfertigen nötig),
rechts Formular: Name, E-Mail, Wunschtermin, Stückzahl, Nachricht
(„Welche Sorten interessieren dich? Vegetarisch, Allergien, besondere
Wünsche …"), Senden-Button. Seit 2026-08-31 wie die übrigen Formulare an
das Vercel-Backend angeschlossen: `POST /api/formular`,
`multipart/form-data`, Formular-Typ `canapes`, gemeinsames Client-Script
`formular.js`, Honeypot und Zeitprüfung. Der Endpoint versendet die Anfrage
über das bestehende IONOS-Postfach an `info@brotzeit-rostock.de`;
Wunschtermin, Stückzahl und Wünsche werden in die E-Mail übernommen. Die
Nachricht ist ein Pflichtfeld.

---

### 9. `sushi.html`

Seit 2026-07-12 (abends). Eigener Navigationspunkt statt Zusammenlegung
mit Canapés (Kundenentscheidung — „Canapés & Sushi" hätte in die Irre
geführt, da es sich nicht um echtes Sushi handelt). In Hauptnavigation
(`.nav-links`, `.nav-mobile`) und Footer aller Seiten verlinkt, Position
zwischen Canapés und Über uns. Zusätzlich verlinkt von der
Bäcker-Sushi-Karte auf speisekarte.html (Sektion 1A) und von der
Bäcker-Sushi-Kachel im „02 · Neuheiten"-Block (Sektion 2) — beide zeigten
vorher auf kontakt.html bzw. ein Platzhalterbild, jetzt auf die eigene
Seite mit echtem Foto.

**Seit 2026-08-31 `index, follow`** (vorher `noindex, follow`, solange die
Sortennamen Platzhalter waren). Die echten Sorten stehen jetzt fest, die
Seite ist in `sitemap.xml` gelistet und trägt ein `ItemList`-Schema mit
allen zehn Sorten.

Title: `Bäcker-Sushi in Rostock bestellen | Brotzeit`
Description: `Bäcker-Sushi von Brotzeit Rostock: herzhafte Röllchen aus Brot mit feinem Belag, geschnitten und angerichtet wie Sushi. Die besondere Alternative zur klassischen Platte. Jetzt anfragen.`
Canonical: `https://brotzeit-rostock.de/sushi.html`

Page-Teaser H1: `Bäcker-Sushi — <em>die herzhafte Rolle.</em>`
Teaser-Lead: `Herzhafte Röllchen aus Brot mit feinem Belag — geschnitten und angerichtet wie Sushi. Die besondere Alternative zur klassischen Platte, perfekt für Feiern, Meetings und Events in Rostock.`
Teaserbild: `brotzeit-rostock-baecker-sushi-07.jpg` (eines der 11 echten Produktfotos, siehe Galerie).

Inhalt (3 Sektionen), strukturell identisch zu canapes.html:

**Sektion 1 — Einleitung (reiner Text, kein Bild).**

**Sektion 2 — 10er-Pack-Hinweis, Einzelbild + Sortenliste (sandfarbener
Hintergrund), seit 2026-08-31:**
Ersetzt die frühere 11-teilige Galerie mit Platzhalternamen. Aufbau:
Überschrift „Zehn Sorten, *ein Pack.*", darunter ein hervorgehobener
Hinweiskasten (`.sushi-pack`, weiß mit Akzent-Rand links), dass es
Bäcker-Sushi ausschließlich im 10er-Pack gibt. Darunter zweispaltig
(`.sushi-split`): **links** ein einzelnes, symbolhaftes Foto
(`brotzeit-rostock-baecker-sushi-10er-pack.jpg`, Quelle `sushi/IMG_3323.jpg`,
zeigt genau einen 10er-Pack in der Schale) mit `figcaption`, **rechts** die
nummerierte Liste der zehn Sorten plus CTA „Jetzt anfragen →" auf
`#anfrage`. Das Bild ist auf Desktop `position: sticky`, damit es neben der
langen Liste mitläuft; ab 900px einspaltig und `static`.

Die zehn Sorten (Kundenangabe, Cremenamen im Fließtext mit Bindestrich
gesetzt — z. B. „Honig-Senf-Creme" statt „Honig Senf Creme"):
Tomatencreme · Mediterrane Creme (3×, mit Salami+Brie / Hähnchen+Paprika /
Rührei+Tomate) · Honig-Senf-Creme · Curry-Creme · Frischkäse ·
Basilikumcreme · Senf-Gurke-Creme · Apfel-Meerrettich-Creme.

**Wichtig für künftige Änderungen an dieser Liste:** Die Sorten stehen an
ZWEI Stellen — sichtbar in `<ol class="sushi-liste">` und im
`ItemList`-Schema im `<head>`. Beide zusammen ändern, sonst laufen
Seiteninhalt und strukturierte Daten auseinander.

Die 11 alten Produktfotos (`brotzeit-rostock-baecker-sushi-01–11.jpg`)
werden von dieser Seite nicht mehr verwendet. `-07` bleibt aber weiterhin
in Gebrauch: als Page-Teaser dieser Seite, als `og:image`/`twitter:image`
und als Bild der Bäcker-Sushi-Kachel auf `speisekarte.html`. Die übrigen
zehn Motive liegen ungenutzt in `images/480|960|1600|2800/` (auf
Kundenwunsch nicht gelöscht, siehe Deploy-Checkliste).

**Sektion 3 — Bestellformular (dark background, wie canapes.html):**
Gleiche Struktur/Felder wie canapes.html (Name, E-Mail, Wunschtermin,
Stückzahl, Nachricht). Seit 2026-08-31 wie `kontakt.html` an das
Vercel-Backend angeschlossen: `POST /api/formular`, `multipart/form-data`,
Formular-Typ `sushi`, gemeinsames Client-Script `formular.js`, Honeypot und
Zeitprüfung. Der Endpoint versendet die Anfrage über das bestehende IONOS-
Postfach an `info@brotzeit-rostock.de`; Wunschtermin und Stückzahl werden in
die E-Mail übernommen. Die Nachricht ist ein Pflichtfeld. IDs mit Präfix
`s-` (statt `c-` bei canapes.html) zur Unterscheidung.

---

## Technische Anforderungen

- Alle Seiten: `<link rel="stylesheet" href="shared.css">` im Head, 
  `<script src="shared.js"></script>` vor `</body>`
- Keine inline `<style>`-Blöcke außer für isolierte seitenspezifische Layouts
- Canonical-URLs enden auf `.html`
- JSON-LD Schema auf jeder Seite (BreadcrumbList + passender @type pro Seite).
  Die Brotzeit wird seitenübergreifend über die gemeinsame Bakery-ID
  `https://brotzeit-rostock.de/#brotzeit` referenziert; Adresse, Kontakt,
  Öffnungszeiten und Geokoordinaten werden nicht widersprüchlich dupliziert.
- Bilder: responsive `srcset`-Varianten (480/960/1600/2800), explizite
  `width`-/`height`-Attribute und aussagekräftige `alt`-Texte. Das erste
  sichtbare Hero-Bild wird priorisiert, nachfolgende Bilder werden lazy geladen.
- Aktiver Nav-Link erhält Klasse `active`
- Alle `mailto:`-Links mit echter Adresse: `info@brotzeit-rostock.de`
- Alle `tel:`-Links: `+493818772950`
- Google Maps Embed auf kontakt.html: echter Embed-Code seit 2026-08-26
  aktiv (siehe Arbeitsprotokoll)
- Vercel-Formulare (`kontakt.html`, `karriere.html`, `torten.html`,
  `sushi.html` und `canapes.html`; Kontakt/Bewerbung seit 2026-08-26,
  Torte/Sushi/Canapés seit 2026-08-31): Alle senden per `POST /api/formular` direkt über das bestehende IONOS-
  Postfach an `info@brotzeit-rostock.de`. SMTP: `smtp.ionos.de`, Port 587,
  STARTTLS zwingend, Authentifizierung erforderlich. Erforderliche Vercel-
  Umgebungsvariablen: `SMTP_USER` und `SMTP_PASSWORD`. Zugangsdaten dürfen
  nie im HTML oder Repository stehen.
  Bewerbungsanhänge: PDF, DOC, DOCX, JPG oder PNG, maximal 3 MB. Die Grenze
  liegt bewusst unter Vercels nicht erhöhbarem Request-Limit von 4,5 MB.
- Favicon (seit 2026-07-12, GLOBAL — auf allen 9 Seiten identisch, direkt
  nach der viewport-Meta-Zeile): 
  ```html
  <link rel="icon" href="/favicon.ico" sizes="48x48">
  <link rel="icon" href="/favicon.svg" type="image/svg+xml">
  <link rel="apple-touch-icon" href="/apple-touch-icon.png">
  <link rel="manifest" href="/site.webmanifest">
  <meta name="theme-color" content="#241B12">
  ```
  Neue Seiten bekommen dieselben 5 Zeilen. Icon-Dateien liegen im
  Projekt-Root (root-absolute Pfade `/…`), siehe Deploy-Checkliste.

## Was nicht eingebaut wird

- Warenkorb / Online-Zahlung (der Frühstückskonfigurator erzeugt nur einen
  QR-Bestellcode zum Scannen an der Kasse, keine Transaktion)
- E-Mail-Bestellung im Frühstückskonfigurator (am 2026-07-11 bewusst
  ersatzlos gestrichen — QR-Code ersetzt mailto)
- Social-Media-Feed-Integration (nur Links)
- CMS-Abhängigkeiten

## Reihenfolge

Schreibe die Dateien in dieser Reihenfolge:
1. speisekarte.html
2. torten.html
3. ueber-uns.html
4. kontakt.html
5. karriere.html
6. impressum.html
7. datenschutz.html

`canapes.html` (siehe Seite 8 oben) kam erst später dazu, seit 2026-07-12,
zunächst nur über die Canapé-Kachel auf speisekarte.html verlinkt, seit
2026-07-12 (abends) auch in der Hauptnavigation (`.nav-links` +
`.nav-mobile`) und im Footer aller Seiten — Position zwischen Torten und
Bäcker-Sushi, Areal 10 (Navigation) und Footer-Areal sind GLOBAL, siehe
„Areale (Prompt-CMS)" oben.

`sushi.html` (siehe Seite 9 oben) kam noch später dazu, seit 2026-07-12
abends, und war von Anfang an in der Hauptnavigation und im Footer aller
10 Seiten verlinkt (Position zwischen Canapés und Über uns) — anders als
canapes.html, das zunächst nur über eine Kachel erreichbar war. Aktuell
`noindex, follow` wegen Platzhalter-Sortennamen, siehe Seite 9.

---

## Deploy-Checkliste (immer aktuell halten!)

Diese Liste NICHT chronologisch in Arbeitsprotokoll-Einträgen suchen —
hier steht der aktuelle Gesamtstand. Bei jeder Änderung, die eine neue
Datei/einen neuen Ordner einführt, hier ergänzen.

**Muss komplett mit hochgeladen werden:**
- Alle 10 `*.html`: `index.html`, `speisekarte.html`, `torten.html`,
  `ueber-uns.html`, `kontakt.html`, `karriere.html`, `impressum.html`,
  `datenschutz.html`, `canapes.html`, `sushi.html`
- `shared.css`, `shared.js`, `formular.js`
- `api/formular.js`, `package.json` und `package-lock.json` (Vercel-Backend,
  `busboy` für Multipart-Uploads und `nodemailer` für IONOS-SMTP)
- `json/preise.js` (Preisdaten für Preisliste + Frühstückskonfigurator)
- `js/qrcode.min.js` (QR-Bibliothek für den Konfigurator)
- `images/` — 4 Dateien direkt im Root (`brotzeit-rostock-brot-handwerk-baeckerei.jpg`,
  `brotzeit-rostock-fruehstueck-gebaeck-petit-fours-konditorei.jpg`,
  `brotzeit-rostock-mittagstisch-veggie-rostock.jpg`,
  `brotzeit-rostock-petit-fours-toertchen-konditorei.jpg`) — bleiben als
  Fallback und als unbearbeitete Originale liegen; aktive Seitenbilder
  referenzieren die responsiven Unterordner
- `images/480/`, `images/960/`, `images/1600/`, `images/2800/` — je
  IDENTISCHE Dateimenge (aktuell 55 Bilder pro Ordner = 220 Dateien
  insgesamt). Seit der SEO-Runde vom 2026-08-31 sind zusätzlich die drei
  Startseitenmotive `brotzeit-rostock-brot-handwerk-baeckerei.jpg`,
  `brotzeit-rostock-fruehstueck-gebaeck-petit-fours-konditorei.jpg` und
  `brotzeit-rostock-petit-fours-toertchen-konditorei.jpg` sowie die beiden
  lokalen Saisonmotive `brotzeit-rostock-muttertag-torte.jpg` und
  `brotzeit-rostock-weihnachten-plaetzchen.jpg` in allen vier Ordnern
  vorhanden. Das sind die
  responsiven Größen für alle Teaser und Sektionsbilder auf index/
  speisekarte/torten/ueber-uns/kontakt/karriere/canapes/sushi.
  **Hinweis:** Davon werden 10 Motive nicht mehr referenziert
  (`brotzeit-rostock-baecker-sushi-01` bis `-06` und `-08` bis `-11`) —
  Reste der am 2026-08-31 entfernten Sushi-Galerie. Sie liegen auf
  Kundenwunsch weiter auf der Platte, müssen aber nicht hochgeladen
  werden. `-07` wird weiterhin gebraucht (Teaser sushi.html, og:image,
  Kachel auf speisekarte.html).
- Favicon-Paket (seit 2026-07-12, root-absolute Pfade `/…`, MUSS also im
  Root der Domain liegen, nicht in einem Unterordner): `favicon.ico`,
  `favicon.svg`, `apple-touch-icon.png`, `icon-192x192.png`,
  `icon-512x512.png`, `site.webmanifest` — alle 6 direkt im Projekt-Root
  (nicht im Ordner `favicon/`, das ist nur die lokale Quelle).
- `robots.txt` und `sitemap.xml` (seit 2026-07-13, GLOBAL, MÜSSEN im
  Domain-Root liegen) — erlauben explizit auch KI-Crawler (GPTBot,
  OAI-SearchBot, ChatGPT-User, Google-Extended, ClaudeBot, anthropic-ai, PerplexityBot,
  CCBot) für GEO/KI-Sichtbarkeit. `sitemap.xml` listet aktuell 8 der 10
  Seiten (nur impressum.html und datenschutz.html sind wegen `noindex`
  bewusst ausgeklammert; sushi.html ist seit 2026-08-31 gelistet, siehe
  Hinweis in der Datei selbst).
  **Achtung:** robots.txt verhindert nur High-Level-Crawler-Blocking auf
  Seitenebene — falls Vercel (Pro-Account hat eigene Firewall-Funktionen,
  „Attack Challenge Mode" o. ä.) aktiven Bot-Schutz einsetzt, müssen
  dieselben KI-User-Agents dort zusätzlich als Ausnahme eingetragen
  werden, sonst werden sie trotz robots.txt auf Firewall-Ebene geblockt.
- `vercel.json` (301/308-Redirects von den alten WordPress-URLs auf die
  neuen `.html`-Seiten, seit 2026-07-13) — greift direkt auf Vercel, dem
  dauerhaften Hosting dieser Seite (seit 2026-07-14 bestätigt, kein
  Umzug zu Cloudflare). Siehe Abschnitt „Redirects (301)" oben.

**NICHT hochladen (Rohmaterial, von keiner Seite referenziert):**
- `images/startseite/`, `images/torten/` (inkl. `images/torten/1/`),
  `images/ueberuns/`, `images/überuns/`, `images/karriere/`,
  `images/cannapes/`, `images/sushi/` — Original-Fotos/Grafiken, aus denen
  die Dateien in `images/480|960|1600|2800/` erzeugt wurden. Bleiben nur
  als lokale Arbeitskopie.
- `favicon/` (Quellordner mit denselben 6 Dateien + `preview.png`) — die
  6 gebrauchten Dateien liegen bereits im Projekt-Root, siehe oben;
  `preview.png` wird nirgends referenziert.
- `neues/`, `08_04_26_Brotzeit favo/` (u. a. RAW-Dateien vom Fototermin),
  `tortenkonfigurator_v2/` (separates, nicht verlinktes Projekt),
  `briefing-brotzeit (3).html`, `SEO_VORBEREITUNG_BROTZEIT_ROSTOCK.md`,
  `PROMPT-CMS-METHODIK.md` (kundenübergreifende interne Vorlage, siehe
  Abschnitt „Areale (Prompt-CMS)" oben), `impress-datenschutz/` (die
  beiden Word-Quelldokumente für Impressum/Datenschutz, Inhalt ist
  längst in impressum.html/datenschutz.html übernommen), `claude.md`
  selbst — alles interne Arbeitsdateien ohne Website-Bezug.

**Vor dem ersten echten Livegang zusätzlich prüfen:**
- In Vercel `SMTP_USER` und `SMTP_PASSWORD` für Production, Preview und
  Development setzen. `SMTP_USER` ist die vollständige IONOS-Mailadresse,
  `SMTP_PASSWORD` das zugehörige Postfachpasswort. Danach beide Formulare
  real testen (inkl. Antwortadresse und einem zulässigen Anhang).
- **301-Weiterleitungen von der alten WordPress-Seite einrichten**
  (siehe eigener Abschnitt „Redirects (301)" unten) — sonst gehen
  bestehende Google-Rankings und externe Links beim Domain-Umzug verloren.

---

## Redirects (301) — vor dem Livegang auf der echten Domain einrichten

**Hintergrund:** Unter der aktuellen Live-Domain läuft noch die alte
WordPress-Seite. Ein SEO-Review durch ChatGPT/Codex (2026-07-13) fand
dort mehrere indexierte Alt-URLs ohne `.html`-Endung; der Kunde lieferte
zusätzlich eine eigene Link-Liste aus der aktuellen Seite. Beide Quellen
wurden zu dieser Tabelle zusammengeführt (Facebook-/Instagram-/mailto-
Links aus der Kundenliste sind keine internen Redirects und deshalb
NICHT enthalten).

| Alte URL | Ziel (neu) | Quelle |
|---|---|---|
| `/`, `/#`, `/#content` | `/` (Startseite, Ziel bereits identisch) | Kundenliste |
| `/unser-taeglich-brot` (http + https) | `/speisekarte.html` | Kundenliste + Codex |
| `/torten` | `/torten.html` | Kundenliste + Codex |
| `/kontakt` | `/kontakt.html` | Kundenliste + Codex |
| `/contact` (englische Alt-Version) | `/kontakt.html` | nur Codex-Fund, nicht in Kundenliste |
| `/karriere` | `/karriere.html` | Kundenliste + Codex |
| `/ueber-uns` | `/ueber-uns.html` | Kundenliste + Codex |
| `/impressum` | `/impressum.html` | Kundenliste + Codex |
| `/datenschutz` | `/datenschutz.html` | Kundenliste + Codex |

Canapés, Bäcker-Sushi sind komplett neue Seiten ohne Alt-URL-Entsprechung
— kein Redirect nötig.

**Hosting endgültig bestätigt (2026-07-14):** Kein Umzug zu Cloudflare —
der Kunde bleibt dauerhaft bei Vercel, jetzt mit Pro-Account. Damit ist
`vercel.json` (Projekt-Root, Vercel's `redirects`-Array mit
`"permanent": true` → technisch 308, SEO-seitig gleichwertig zu 301) der
EINZIGE relevante Redirect-Mechanismus für diese Seite. Die zuvor als
Vorbereitung für einen möglichen Cloudflare-Livegang angelegte
`_redirects`-Datei (Netlify/Cloudflare-Pages-Syntax) wurde wieder entfernt
— nicht mehr relevant, kein doppelt gepflegter Redirect-Stand nötig.

Falls sich das Hosting doch nochmal ändert (z. B. Apache/Nginx), hier
nachfragen — die Redirect-Logik aus der Tabelle oben lässt sich leicht
übertragen.

---

## Arbeitsprotokoll

Diese Sektion wird bei JEDER Änderung an der Website fortgeschrieben
(neuester Eintrag oben). Priorität hat immer die Website selbst.

### 2026-08-31 (am spätesten) — Canapé-Formular an Vercel-/IONOS-Versand angeschlossen

**Wunsch (Kunde):** Das bislang über `mailto:` arbeitende Formular auf
`canapes.html` soll wie Kontakt, Torten und Bäcker-Sushi zuverlässig über
den vorhandenen Vercel-Endpunkt senden. Die unmittelbar zuvor vorgenommenen
SEO-Änderungen müssen vollständig erhalten bleiben.

**Umgesetzt:**
1. `canapes.html` sendet nun per `POST` und `multipart/form-data` an
   `/api/formular`, trägt den Formular-Typ `canapes` und verwendet
   `formular.js` inklusive Ladezustand, Erfolg-/Fehlermeldung, Honeypot und
   Zeitprüfung. Das Wünsche-Feld ist jetzt verpflichtend.
2. `api/formular.js` akzeptiert den neuen Typ und erzeugt eine eigene
   Canapé-E-Mail mit Name, Antwortadresse, Wunschtermin, Stückzahl und freien
   Wünschen. Empfänger bleibt ausschließlich `info@brotzeit-rostock.de` über
   das vorhandene IONOS-SMTP-Konto; Zugangsdaten stehen weiterhin nur in den
   Vercel-Umgebungsvariablen.
3. Der automatische Endpunkttest deckt Canapé-Anfragen einschließlich
   Betreff und aller Fachfelder ab. Insgesamt bestehen nun sieben Tests.
4. Geändert wurden ausschließlich `canapes.html`, `api/formular.js`,
   `tests/formular.test.js` und diese `claude.md`. `shared.css`,
   `formular.js`, andere Seiten sowie Vercel/GitHub/DNS blieben unverändert.

### 2026-08-31 (am spätesten) — Lokale SEO-, KI- und Bildperformance-Optimierung

**Wunsch (Kunde):** Alle Seiten auf SEO-Tauglichkeit mit Schwerpunkt Rostock,
Bäckerei, Torten, Bäcker-Sushi und Handwerk prüfen; H1-Struktur und
Maschinenlesbarkeit für Suchmaschinen und KI-Systeme verbessern. Änderungen
werden nur lokal vorbereitet. GitHub, Vercel und DNS bleiben unverändert.

**Umgesetzt:**
1. Alle acht indexierbaren Inhaltsseiten wurden auf eindeutige Titles,
   Descriptions, Canonicals, genau eine H1, interne Verlinkung und lesbaren
   Seiteninhalt geprüft. Die Titles/H1 von `speisekarte.html` und
   `kontakt.html` sowie der Title von `sushi.html` wurden präzisiert. Die
   Einleitungen von Torten, Bäcker-Sushi und Canapés nennen Handwerk,
   Bäckerei/Backstube und Rostock natürlich im Fließtext.
2. Die strukturierte Auszeichnung verwendet seitenübergreifend die eindeutige
   Bakery-ID `https://brotzeit-rostock.de/#brotzeit`. Ergänzt wurden unter
   anderem Logo, Bilder, Speisekarte, Einzugsgebiet und die verifizierten
   Koordinaten 54.0871912 / 12.1267265. Torten, Sushi und Canapés verknüpfen
   ihre Listen bzw. FAQ eindeutig mit der Brotzeit.
3. Die drei großen Startseitenmotive wurden als responsive Webbilder erzeugt.
   Muttertags- und Weihnachtsmotive liegen nun ebenfalls lokal und responsiv
   vor; direkte Unsplash-Abhängigkeiten auf den aktiven Seiten entfallen.
   Alle aktiven statischen Bilder besitzen feste Maße, sinnvolle Alt-Texte
   und passende Ladehinweise. Ausgenommen sind ausschließlich dynamisch per
   JavaScript erzeugte QR-Bilder und auskommentierte Platzhalter.
4. `robots.txt` erlaubt jetzt ausdrücklich auch `OAI-SearchBot`.
   `sitemap.xml` trägt für alle acht indexierbaren Seiten das tatsächliche
   Änderungsdatum 2026-08-31; die von Google ignorierten Angaben `priority`
   und `changefreq` wurden entfernt.
5. Die Canonicals zeigen bereits auf `https://brotzeit-rostock.de/`. Die
   derzeit noch unter `brotzeit.botschaft42.de` erreichbare Vercel-Fassung
   und die spätere DNS-Umschaltung wurden nicht verändert. Die
   Datenschutzseite wurde wegen ihres rechtlichen Inhalts bewusst nicht in
   dieser SEO-Runde umgeschrieben.
6. Abschlussprüfung bestanden: Auf allen acht indexierbaren Seiten gibt es
   genau eine H1 und ein `<main>`, sämtliche JSON-LD-Blöcke sind gültiges
   JSON, alle aktiven lokalen Bild- und Linkziele existieren und die Sitemap
   enthält jede indexierbare Seite. Zusätzlich bestehen weiterhin alle sechs
   automatisierten Tests des gemeinsamen Vercel-/IONOS-Formular-Endpunkts.

### 2026-08-31 (am spätesten) — Torten- und Sushi-Formulare an Vercel-/IONOS-Versand angeschlossen

**Wunsch (Kunde):** Die noch als `mailto:` arbeitenden Formulare auf
`torten.html` und `sushi.html` sollen genauso wie das bereits live
funktionierende Formular auf `kontakt.html` über Vercel versenden. Die heute
zuvor vorgenommenen Sushi-Änderungen (10er-Pack, Sortenliste und Freigabe für
Google) müssen vollständig erhalten bleiben.

**Umgesetzt:**
1. Beide Formulare senden nun per `POST` und `multipart/form-data` an
   `/api/formular`, tragen die Typen `torte` bzw. `sushi` und verwenden den
   vorhandenen gemeinsamen Client `formular.js` inklusive Ladezustand,
   Erfolg-/Fehlermeldung, Honeypot und Zeitprüfung.
2. Die vorhandenen Fachfelder bleiben erhalten. Torten-E-Mails enthalten
   Anlass, Wunschdatum und Personenzahl; Sushi-E-Mails enthalten Wunschtermin
   und Stückzahl. Die freien Wünsche sind auf beiden Seiten Pflichtfelder.
3. `api/formular.js` akzeptiert die beiden neuen Formulartypen, erzeugt
   passende Betreffzeilen und lesbare E-Mail-Inhalte und versendet weiterhin
   ausschließlich über das vorhandene IONOS-SMTP-Konto an
   `info@brotzeit-rostock.de`. Zugangsdaten wurden weder im Code noch in der
   Dokumentation gespeichert.
4. Erfolgs- und Fehlermeldungen erhielten direkt in den beiden Seiten helle
   Farben für den dunklen Anfragebereich. `shared.css` musste deshalb nicht
   verändert werden; dessen heutiger Stand blieb unangetastet.
5. Automatisierte Backend-Tests um Torten- und Sushi-Anfragen erweitert.
   Ergebnis: alle 6 Fälle bestanden (Kontakt, Bewerbung, Torte, Sushi,
   Validierungsfehler und Honeypot). Die SMTP-Funktion war im Test simuliert;
   es wurde dabei keine echte E-Mail versendet.

**Geänderte Dateien:** `torten.html`, `sushi.html`, `api/formular.js`,
`tests/formular.test.js`, `claude.md`. Keine Änderung an `formular.js`,
`shared.css`, `package.json` oder `package-lock.json`.

### 2026-08-31 (später) — sushi.html: Galerie ersetzt durch 10er-Pack-Hinweis, Einzelbild + Sortenliste; Seite für Google freigegeben

**Wunsch (Kunde):** Die elf Galeriebilder auf `sushi.html` sollen raus.
Stattdessen nur noch ein einzelnes, symbolhaftes Foto, links positioniert,
mit einem harmonisch daneben stehenden Textfeld. Oben zusätzlich ein
Hinweis, dass es Bäcker-Sushi nur im 10er-Pack gibt, plus die Auflistung der
zehn Sorten. Der Einleitungsblock (Areal 30, „Handgefertigt in der
Backstube …") bleibt unverändert. Bildquelle: `sushi/IMG_3323.jpg`.

**Vorab geklärt (drei Rückfragen, weil „alle Bilder raus" mehr betraf als
die Galerie):** `brotzeit-rostock-baecker-sushi-07.jpg` wird außerhalb der
Galerie an drei weiteren Stellen benutzt — als Page-Teaser dieser Seite, als
`og:image`/`twitter:image` und als Bild der Bäcker-Sushi-Kachel auf
`speisekarte.html`. Kundenentscheidung: **nur die Galerie** entfällt, der
Teaser und beide anderen Verwendungen bleiben unangetastet. Außerdem
entschieden: Seite jetzt für Google freigeben, und die zehn ungenutzt
werdenden Motive nicht löschen, sondern liegen lassen.

**Umgesetzte Schritte:**
1. `sushi/IMG_3323.jpg` (4641×3255, zeigt genau einen 10er-Pack in der
   Schale) mit Python/Pillow in die vier Standardbreiten skaliert,
   SEO-Name `brotzeit-rostock-baecker-sushi-10er-pack.jpg`
   (480×337 / 960×673 / 1600×1122 / 2800×1964; 1,1 MB in 2800w liegt im
   üblichen Rahmen, andere Motive dort wiegen bis 1,6 MB).
2. Areal 40 komplett ersetzt: statt `.sushi-grid` mit 11 Kacheln jetzt ein
   Hinweiskasten `.sushi-pack` („Bäcker-Sushi gibt es ausschließlich im
   10er-Pack.") und darunter `.sushi-split` — links `<figure class="sushi-bild">`
   mit dem neuen Foto und Bildunterschrift, rechts Überschrift „10
   verschiedene Röllchen" plus nummerierte `<ol class="sushi-liste">` und
   CTA „Jetzt anfragen →" auf `#anfrage`. Die alten Galerie-Styles
   (`.sushi-tile*`) wurden mit entfernt, nicht nur verwaist stehen gelassen.
3. Das Bild ist auf Desktop `position: sticky` (`top: 110px`), damit es neben
   der deutlich längeren Sortenliste mitläuft statt oben zu parken — das
   war mit „harmonisch daneben" gemeint. Ab 900px einspaltig und wieder
   `static`, sonst würde ein klebendes Bild den Text überdecken.
4. Sortennamen 1:1 aus der Kundenliste übernommen, mit einer bewussten
   typografischen Anpassung: mehrteilige Cremenamen mit Bindestrich gesetzt
   („Honig-Senf-Creme", „Curry-Creme", „Senf-Gurke-Creme",
   „Apfel-Meerrettich-Creme") statt mit Leerzeichen. Zutaten und Reihenfolge
   sind unverändert, inklusive der drei Einträge mit „Mediterrane Creme".
   Falls der Kunde die Schreibweise ohne Bindestrich möchte, ist das eine
   Ein-Zeilen-Änderung an zwei Stellen (Liste + Schema).
5. `<meta name="robots">` von `noindex, follow` auf `index, follow`
   umgestellt — der Grund für die Sperre (Platzhalternamen „Röllchen 01"–„11")
   ist entfallen. Passend dazu `sushi.html` in `sitemap.xml` aufgenommen
   (jetzt 8 der 10 Seiten) und ein `ItemList`-Schema mit allen zehn Sorten
   als zweites `@graph`-Element neben der BreadcrumbList ergänzt.
6. **Layoutfehler beim Testen gefunden und behoben:** Jede Listenzeile war
   192–218px hoch statt rund 54px. Ursache: `.sushi-liste li` ist ein
   CSS-Grid mit zwei Spalten (34px Nummer + Text), und jedes Kind bekommt
   eine eigene Zelle — durch `::before` + `<strong>` + `<span>` landete das
   `<span>` mit dem Belag in Zeile 2, Spalte 1, also in der 34px schmalen
   Nummernspalte, und wurde dort auf sieben Zeilen umgebrochen. Behoben,
   indem Sorte und Belag in einen gemeinsamen `<span class="sushi-zeile">`
   gefasst wurden, sodass im Grid nur noch zwei Kinder liegen.
7. `width="960" height="673"` am Bild ergänzt, damit die Figur schon vor dem
   Laden Platz reserviert. Ohne das kollabierte sie auf 33px Höhe (nur
   Bildunterschrift) — sichtbarer Layoutsprung beim Nachladen.

**Getestet in der Vorschau (localhost:8744):** Desktop (1265px) — Bild links
(48–605px), Liste rechts (ab 661px), nachweislich nebeneinander, `sticky`
aktiv, Bild 422px / Liste 539px hoch, also gut ausbalanciert; alle zehn
Zeilen einheitlich 54px. Tablet (753px) und Mobile (375px) — einspaltig,
`sticky` korrekt deaktiviert, Zeilen 54–78px, kein Textabschnitt überläuft,
auf keiner Breite horizontales Scrollen. Bild lädt in allen vier Größen
(200 OK), bei 768px korrekt die 960er-Variante. `robots` liefert
„index, follow", JSON-LD parst fehlerfrei mit BreadcrumbList + ItemList
(10 Einträge), genau ein `<h1>`, keine `.sushi-tile` mehr im DOM.
Einleitungsblock (Areal 30) wortgleich unverändert, Teaserbild weiterhin
`-07`, Bestellformular unberührt. `speisekarte.html` gegengeprüft: alle
sechs Links auf `sushi.html` intakt, die Kachel zeigt weiterhin `-07`.
Konsole fehlerfrei.

**Hinweis zur Vorschau (neu in den Verifikations-Workflow aufgenommen):**
Das Vorschau-Panel lieferte in dieser Session unbrauchbare Screenshots
(leere Bilder trotz korrektem DOM) und kollabierte zwischenzeitlich auf
Viewport-Breite 0, was eine erste Messung „horizontales Scrollen: ja"
vortäuschte. Außerdem laufen CSS-Transitions in einem ausgeblendeten Panel
nicht weiter, weshalb alle `.reveal`-Elemente auf Opacity 0 stehen bleiben
und `loading="lazy"`-Bilder gar nicht erst geladen werden. Die Verifikation
lief deshalb über Geometrie-Messungen im DOM und über `innerText`, nicht
über Screenshots — die gefundenen Werte waren durchgehend reproduzierbar.

**Noch offen für diese Seite:** Preise für den 10er-Pack fehlen weiterhin
(waren nicht Teil der Anfrage). Sobald sie feststehen, gehören sie in den
Hinweiskasten `.sushi-pack` und könnten das ItemList- zu einem
`Offer`-Schema erweitern.

### 2026-08-31 — Verifikations-Workflow dokumentiert, fehlende Bildgrößen, doppeltes H1, unsichtbare Kontakt-Bestätigung

**Auslöser:** Der Kunde fragte, ob in dieser Datei auch die *Herangehensweise*
bei Seitenänderungen steht, und bat darum, den kompletten Projektordner zu
lesen. Beim Durchgehen fielen drei konkrete Defekte auf, die alle vier
freigegeben wurden.

**Umgesetzte Schritte:**

1. **Neuer Abschnitt „Verifikations-Workflow"** (zwischen Areale-Kapitel und
   „Seiten — Anweisungen"). Das Areale-Kapitel verwies seit 2026-07-12 auf
   einen „Verifikations-Workflow", den es als Abschnitt nie gab — die Regeln
   waren nur über rund 40 Arbeitsprotokoll-Einträge verstreut. Jetzt
   gesammelt in vier Phasen (vor der Umsetzung / Umsetzung / Mitziehen /
   Testen / Nachdokumentieren), inklusive der Vorschau-Stolperfallen
   (CSS-Cache, negativ gecachte 404-Bilder, Testdaten im echten Format).
   Reine Dokumentation, kein Code verändert.

2. **Drei fehlende Bildgrößen nachgelegt.** `brotzeit-rostock-mittagstisch-
   veggie-rostock.jpg` lag in diesem Ordner nur in `images/2800/`, fehlte in
   `480/960/1600`. Das Teaserbild von `canapes.html` referenziert die 1600er
   als `src` (ebenso `og:image` und `twitter:image`) — die Seite lud ihr
   Teaserbild also gar nicht. Ursache: beim Ordnerwechsel am 2026-08-26 nicht
   mit übernommen; in `D:\Brotzeit web` waren alle vier Größen vorhanden und
   wurden von dort kopiert (480×320, 960×640, 1600×1067, 2800×1867, alle als
   gültiges JPEG verifiziert). Damit stimmen wieder 49 Dateien pro
   Größenordner, wie die Deploy-Checkliste es angibt.

3. **Doppeltes `<h1>` auf `speisekarte.html` behoben** (Befund vom 2026-08-26,
   bis dahin offen). Der Titel der eingebetteten Bestellungs-Ansicht
   (Areal 95) war ein zweites `<h1>` neben dem echten Seiten-H1. Nach dem
   Muster des Codex-Fixes vom 2026-07-13 (`zettel-titel`) zu
   `<p class="bestellung-titel">` geändert. Wichtig dabei: das CSS selektierte
   über den Tag (`.bestellung-box h1`), sowohl im Bildschirm- als auch im
   `@media print`-Block — beide Selektoren mit umgestellt, sonst hätte sich
   das Aussehen still geändert.

4. **Fehlende Versand-Bestätigung im Kontaktformular behoben.** Der Kunde
   meldete: Formulare versenden korrekt (Umstellung auf IONOS-SMTP stammt von
   ChatGPT und funktioniert), aber auf `kontakt.html` erscheint keine
   Bestätigung. Ursache war **kein** Fehler im Versand, sondern reiner
   Kontrast: `.formular-status[data-status="erfolg"]` war `#d8f3dc` (blasses
   Mintgrün), passend zum DUNKLEN Hintergrund des Bewerbungsformulars auf
   `karriere.html`. Das Kontaktformular sitzt aber auf `--cream` (`#F5EFE4`) —
   Kontrast rund 1,1:1, die Meldung wurde gesetzt, war aber unsichtbar.
   Lösung: Standardfarben in `shared.css` auf dunkle, lesbare Werte umgestellt
   (`#1B5E3F` Erfolg, `#A4161A` Fehler, jeweils `font-weight: 500`, Kontrast
   rund 6,8:1 auf Cream), und in `karriere.html` die hellen Varianten als
   seitenspezifische Überschreibung für `.bewerbung-section` zurückgeholt.
   Am Versand selbst (`api/formular.js`) wurde nichts geändert.

**Getestet in der Vorschau (localhost:8744, Ordner `Finale August26`):**
Canapé-Teaser lädt wieder auf 768px und 375px (alle vier Größen liefern
200 OK mit plausiblen Dateigrößen; das vorherige `naturalWidth: 0` war ein
negativ gecachter 404). `speisekarte.html` hat genau ein `<h1>`; die
Bestellungs-Ansicht mit `?bestellung=…` rendert unverändert (Titel, eine
Person, „Gesamt: 2,80 €", Buttons in Einzelbestellungs-Sprache), und der
neue `<p>`-Titel hat exakt dieselben berechneten Werte wie zuvor das `<h1>`
(Cormorant Garamond, 24px, `#B8935A`, Gewicht 300, 16px Abstand). Erfolgs-
und Fehlermeldung auf `kontakt.html` per Screenshot als deutlich lesbar
bestätigt, ebenso die weiterhin helle Meldung auf `karriere.html` — keine
Regression. Alle vier berührten Seiten ohne horizontales Scrollen auf 768px
und 375px, Konsole fehlerfrei, Frühstückskonfigurator unverändert mit 15
Gruppen.

**Zwischenfund, kein Handlungsbedarf:** Ein erster Test der Bestellungs-Ansicht
schlug mit `TypeError: s.replace is not a function` fehl. Ursache war der
Testdatensatz, nicht die Seite — `nummer` wird produktiv immer als String
erzeugt (`speisekarte.html`, `holeBestellIdentitaet()`), meine Testbestellung
enthielt eine JSON-Zahl. `esc()` verlässt sich auf String-Eingaben; das ist
fragil, aber im echten Ablauf nicht auslösbar. Als Stolperfalle in den neuen
Verifikations-Workflow aufgenommen.

**Weiterhin offen:** `bestellung.html` ist unverändert toter Code (von keiner
Datei referenziert, siehe Eintrag 2026-08-26) — noch beim Kunden zu klären.
In Vercel fehlen weiterhin `SMTP_USER`/`SMTP_PASSWORD` als
Umgebungsvariablen, falls noch nicht gesetzt.

### 2026-08-27 — Parallele Formular-Implementierung entdeckt und bereinigt, package.json repariert

**Hintergrund:** Der Kunde bat um eine Formspree-Alternative auf Vercel-Basis
(„Option 2"). Während ich das baute (eigene `api/kontakt.js`/`api/bewerbung.js`
mit Resend), stellte sich mitten in der Arbeit heraus, dass eine ANDERE
Session bereits parallel eine vollständige, bereits integrierte Lösung gebaut
hatte: `api/formular.js` (ein gemeinsamer Endpunkt für beide Formulare,
Nodemailer über das bestehende IONOS-Postfach statt eines neuen Resend-
Kontos — siehe Eintrag „Resend entfernt" unten), plus `formular.js` (Client-
Skript), plus bereits angepasste `kontakt.html`/`karriere.html`. Das ist die
bessere Lösung (kein neuer Drittanbieter-Account nötig, da IONOS-Postfach
schon existiert) und war schon vollständig verdrahtet.

**Umgesetzte Schritte:**
1. Meine eigenen, jetzt überflüssigen Dateien entfernt: `api/kontakt.js`,
   `api/bewerbung.js`, sowie meine Ergänzungen in `shared.js`
   (`initApiForm`) und `shared.css` (`.form-status`) — die bereits
   vorhandenen `.formular-status`/`.formular-honigfalle`-Styles und das
   eigenständige `formular.js` decken das bereits ab.
2. **Echten Bug in `package.json` gefunden und behoben:** Die Datei hatte
   `"type": "module"` gesetzt, aber `api/formular.js` ist in klassischem
   CommonJS geschrieben (`require(...)`, `module.exports = …`) — mit
   `"type": "module"` hätte der Aufruf in Produktion mit einem
   `ReferenceError: require is not defined` fehlgeschlagen. Entfernt, damit
   greift wieder der CommonJS-Standard.
3. `nodemailer` fehlte komplett als Abhängigkeit in `package.json` (nur
   `busboy` war eingetragen) — `api/formular.js` hätte beim ersten Aufruf
   mit „Cannot find module 'nodemailer'" abgestürzt. Ergänzt.
4. Beim ersten `npm install` mit `nodemailer` wurde eine ungepinnte alte
   Version installiert, die laut `npm audit` 8 bekannte Sicherheitslücken
   hat (u. a. SMTP-Command-Injection, CRLF-Injection, SSRF-Bypass). Version
   auf `^9.0.5` (aktueller, gepatchter Stand) festgelegt — `npm audit`
   zeigt jetzt 0 Schwachstellen.
5. `api/formular.js` mit einem echten, temporären Testskript geprüft (lokal,
   `nodemailer.createTransport` gemockt, kein echter SMTP-Versand): alle 9
   Fälle korrekt — gültige Kontaktanfrage (200, Reply-To korrekt gesetzt,
   Umlaute erhalten), Honeypot-Feld ausgefüllt (200 Fake-Erfolg, aber
   keine Mail verschickt), zu schnell abgeschickt/Bot-Timing (400),
   ungültige E-Mail (422), Bewerbung mit PDF-Anhang (200, Anhang korrekt
   base64-kodiert), verbotener Dateityp .exe (415), Bewerbung ohne Anhang
   (200), ungültiger `formular_typ` (422), simulierter SMTP-Fehler (502,
   sauberes Fehler-JSON statt Absturz). Testdatei danach wieder gelöscht,
   nicht Teil des Deployments.
6. `busboy`/`nodemailer` real installiert (`node_modules`, `package-lock.json`
   aktualisiert) — beide sind über `.gitignore` bereits von node_modules
   ausgeschlossen.

**Noch offen (unverändert von den vorherigen Einträgen):** In Vercel müssen
weiterhin `SMTP_USER` und `SMTP_PASSWORD` als Umgebungsvariablen gesetzt
werden (siehe `.env.example` und Eintrag „Resend entfernt" unten), bevor die
Formulare live funktionieren.

### 2026-08-26 (allerneuester Stand) — Resend entfernt, Versand direkt über IONOS-SMTP

**Wunsch:** Kein zusätzliches Resend-Konto eröffnen. Stattdessen das bereits
vorhandene IONOS-Postfach von `info@brotzeit-rostock.de` für den Versand
verwenden. Vom Kunden gelieferte Daten: `smtp.ionos.de`, Port 587, TLS und
Authentifizierung erforderlich.

**Umgesetzte Schritte:**
1. Resend vollständig aus `api/formular.js`, `.env.example`, Abhängigkeiten
   und aktiver Dokumentation entfernt. Es wird kein Resend-Konto und keine
   Resend-Domainverifizierung mehr benötigt.
2. Versand über Nodemailer direkt an `smtp.ionos.de:587` umgestellt:
   `secure: false` für den Verbindungsstart, anschließend zwingendes
   STARTTLS durch `requireTLS: true`. SMTP-Authentifizierung verwendet die
   Vercel-Secrets `SMTP_USER` und `SMTP_PASSWORD`.
3. Sichtbarer Absender ist „Brotzeit Website <SMTP_USER>"; Empfänger bleibt
   fest `info@brotzeit-rostock.de`. Die vom Formularnutzer angegebene
   E-Mail-Adresse bleibt als `Reply-To` gesetzt.
4. Verbindungstimeouts ergänzt, damit ein nicht erreichbarer Mailserver die
   Function nicht unnötig lange bindet. Nutzer erhalten bei SMTP-Fehlern
   weiterhin eine neutrale Fehlermeldung; technische Details stehen nur im
   Vercel-Log.
5. Automatisierte Tests auf den SMTP-Transport angepasst. Das echte
   Postfachpasswort wird niemals in Testdateien oder Quellcode gespeichert.

### 2026-08-26 (am spätesten) — Formspree durch Vercel Function + Resend ersetzt

**Wunsch:** Die vorbereiteten Formspree-Formulare ohne Formspree betreiben,
im bestehenden Vercel-Projekt. Kontaktanfragen und Bewerbungen gehen an
`info@brotzeit-rostock.de`; Bewerbungen unterstützen Lebenslauf-Uploads.

**Umgesetzte Schritte:**
1. Gemeinsamen Node-Endpunkt `POST /api/formular` angelegt. Versand erfolgt
   serverseitig über die Resend-API; Empfänger ist fest
   `info@brotzeit-rostock.de`, die Absenderadresse kommt aus `FORM_FROM`.
   `RESEND_API_KEY` bleibt ausschließlich als Vercel-Umgebungsvariable.
2. Kontakt- und Bewerbungsformular auf den neuen Endpunkt umgestellt.
   `formular.js` sendet per Fetch, sperrt den Button während des Versands
   und zeigt barrierearm Erfolg oder konkrete Fehler direkt am Formular.
3. Serverseitige Pflichtfeld-/E-Mail-Prüfung, Textlängenbegrenzung,
   Honeypot und Mindest-Ausfüllzeit ergänzt. Nutzereingaben werden nur als
   Plaintext-Mail versendet; dadurch kann kein HTML in E-Mails eingeschleust
   werden. `reply_to` zeigt auf die vom Absender eingegebene E-Mail-Adresse.
4. Lebenslauf-Upload auf genau eine Datei und PDF/DOC/DOCX/JPG/PNG begrenzt.
   Maximalgröße von 10 MB auf 3 MB korrigiert: Vercel Functions akzeptieren
   höchstens 4,5 MB für den gesamten Request, daher wäre 10 MB technisch
   unmöglich. Prüfung findet sowohl im Browser als auch serverseitig statt.
5. `package.json` mit `busboy`, `.env.example` und `.gitignore` ergänzt.
   Vor Livebetrieb müssen Resend-Domain und die zwei Vercel-Variablen
   eingerichtet und ein echter Ende-zu-Ende-Test durchgeführt werden.

### 2026-08-26 (noch später) — kontakt.html: echter Google-Maps-Embed eingesetzt

**Wunsch (Kunde):** Der Google-Maps-Embed auf kontakt.html zeigte noch die
Platzhalter-Adresse aus der ursprünglichen Bauanleitung. Kunde lieferte den
echten Standort als Google-Maps-Kurzlink: `https://maps.app.goo.gl/d5nBKUuHAzeJrTLA6`.

**Umgesetzte Schritte:**
1. Kurzlink im Browser aufgelöst, um die tatsächliche Zieladresse zu
   ermitteln (nicht blind übernommen) — löst auf zu „Brotzeit Rostock, Am
   Vögenteich 24, 18055 Rostock" (4,7 ★, 515 Bewertungen), also exakt die
   Adresse, die ohnehin überall auf der Seite steht. Aus den Netzwerk-
   Requests zusätzlich die echten Koordinaten extrahiert (54.0871784,
   12.1266869) — leicht abweichend von den bisherigen Platzhalter-
   Koordinaten (54.0897, 12.1327), die ca. 300–400 m daneben lagen.
2. Neuen Embed-Code erzeugt: `https://www.google.com/maps/embed?pb=!1m2!2m1!1sBrotzeit+Rostock,+Am+Voegenteich+24,+18055+Rostock`
   — das einfache, API-Key-freie Google-Maps-Embed-Format (Adress-Query
   statt der komplexen, nur über die Maps-UI erzeugbaren `!1m18…`-Syntax).
   In einer isolierten Testseite verifiziert: zeigt nachweislich den
   richtigen Google-Business-Eintrag mit Pin, Name und Bewertung.
3. `kontakt.html`: `iframe src` ersetzt, den „Bitte durch echten Embed-Code
   ersetzen"-Kommentar entfernt (nicht mehr zutreffend).
4. claude.md aktualisiert: Platzhalter-Hinweis in Abschnitt „4. kontakt.html"
   durch den echten Code ersetzt (alter Platzhalter-Code als Referenz mit
   Datum kommentiert stehen gelassen), Punkt in „Technische Anforderungen"
   aktualisiert, „Google-Maps-Embed" aus der Pre-Launch-Checkliste entfernt
   (erledigt).
5. Getestet: Der neue Embed wurde in einer separaten, isolierten Testseite
   visuell bestätigt (Screenshot zeigt korrekt „Brotzeit Rostock, Am
   Vögenteich 24, 18055 Rostock"). Ein direkter Screenshot-Test INNERHALB
   von kontakt.html blieb wiederholt hängen (bekanntes Tool-Problem dieser
   Session mit dem Vorschau-Browser, kein Website-Fehler) — stattdessen per
   `fetch()` aus dem echten Seitenkontext heraus bestätigt: Die Embed-URL
   liefert 200 OK und der Inhalt enthält „Brotzeit"/„Vögenteich". Konsole
   auf kontakt.html durchgehend fehlerfrei.

### 2026-08-26 (später) — speisekarte.html: Frühstückskonfigurator an erste Stelle verschoben

**Wunsch (Kunde):** Der Frühstückskonfigurator (Areal 60, Eyebrow „Frühstück
nach deinem Geschmack", Überschrift „Stell dir dein Frühstück zusammen.")
soll die erste Sektion direkt unter dem Page-Teaser werden — vor „Drei
Karten" (Areal 30). Ausdrücklich nur diese eine Sektion verschieben, alle
anderen Sektionen bleiben in ihrer bisherigen Reihenfolge zueinander.

**Umgesetzte Schritte:**
1. Den kompletten Block (Kommentar `[AREAL 60: Frühstückskonfigurator]`
   + `<section id="fruehstueck-konfigurator">…</section>`) 1:1 von seiner
   bisherigen Position (nach der Preisliste, Areal 50) entfernt und direkt
   nach dem Breadcrumb wieder eingefügt — vor Areal 30. Reiner Orts-Tausch,
   kein Zeichen am Inhalt der Sektion selbst verändert.
2. Areal-Nummer bewusst NICHT umnummeriert (bleibt 60, obwohl jetzt vor
   Areal 30 im Dokument steht) — der Kunde bat nur um den Positionstausch,
   keine Neunummerierung. Die Areal-Tabelle in claude.md wurde trotzdem
   nach der neuen Dokumentreihenfolge sortiert (60 jetzt zwischen 20 und
   30 gelistet) mit erklärendem Hinweis, damit spätere Areal-Lookups nicht
   in die Irre führen.
3. Getestet in der Vorschau (localhost:8743): Frühstückskonfigurator ist
   jetzt nachweislich das erste Element nach dem Breadcrumb (per JS
   geprüft: `breadcrumb.nextElementSibling === konfigurator`), alle
   anderen Sektionen (Drei Karten, Bäcker-Sushi, Preisliste, Saisonales,
   FAQ, Öffnungszeiten) folgen unverändert in der bisherigen Reihenfolge.
   Konfigurator rendert weiterhin korrekt (15 Gruppen aus `preise.js`
   befüllt), keine doppelten IDs durch die Verschiebung entstanden. Kein
   horizontales Scrollen auf Mobile (375px), Konsole fehlerfrei.

### 2026-08-26 — Umzug auf den richtigen Projektordner (D:\Brotzeit Finale August26) + Bestellungs-Ansicht-Befund

**Hintergrund:** Die Session lief bislang im Ordner `D:\Brotzeit web`. Der
Kunde stellte klar, dass `D:\Brotzeit Finale August26` der richtige/aktuelle
Arbeitsordner ist. Vor der Umstellung wurden beide Ordner Datei für Datei
verglichen, um sicherzugehen, dass nichts verloren geht.

**Befund beim Vergleich:**
1. `D:\Brotzeit Finale August26` enthält bereits sämtliche Arbeit aus dieser
   Session (Title/Meta, Open Graph, `<main>`, `aria-current`, JobPosting-Fix,
   `sitemap.xml`, `vercel.json` — bei mehreren Dateien byte-identisch) —
   plus zusätzliche Änderungen, die offenbar über GitHub/eine andere Session
   eingeflossen sind: Öffnungszeiten bereits auf Mo–Fr 07:30 / Sa 08:00.
2. Die `claude.md` in `Finale August26` war dagegen der allererste
   Tag-1-Entwurf (kein Areal-System, keine canapes.html/sushi.html-Kapitel,
   noch `maxi@sparre.de` im Beispieltext) — komplett veraltet gegenüber dem
   tatsächlichen Stand der Website-Dateien. Nach Rückfrage vom Kunden
   bestätigt: die ausführliche `claude.md` aus `D:\Brotzeit web` (dieser
   Stand hier) wurde 1:1 herüberkopiert und ersetzt die alte Version.
3. **Wichtiger technischer Befund, noch ungeklärt:** Es existiert eine neue,
   eigenständige Seite `bestellung.html` (`noindex, nofollow`, liest die
   Bestellung aus einem Base64-kodierten URL-Hash `#d=…`) — sieht aus wie
   eine geplante Ablösung der bisherigen, in `speisekarte.html` eingebetteten
   Bestellungs-Ansicht (Areal 95, `?bestellung=`-Query-Parameter,
   `#bestellung-titel`). **Die beiden sind aber nicht verbunden:**
   `qrTargetURL()` in `speisekarte.html` erzeugt weiterhin
   `speisekarte.html?bestellung=…` — nirgends im Projekt verlinkt oder
   generiert etwas auf `bestellung.html`. Die neue Seite ist aktuell toter
   Code ohne Verbindung zum QR-Code-Flow der Kasse. Muss beim Kunden geklärt
   werden: `bestellung.html` fertig verdrahten (und die eingebettete Ansicht
   in `speisekarte.html` entfernen) oder vorerst ignorieren/löschen?
4. Dabei ebenfalls entdeckt: `speisekarte.html` hat inzwischen ein zweites
   `<h1>` (`#bestellung-titel` in der eingebetteten Bestellungs-Ansicht,
   zusätzlich zum echten Seiten-H1) — ein neues doppeltes H1, das beim
   Codex-Review-Fix vom 13.07. noch nicht existierte und deshalb dort nicht
   mitgefangen wurde. Betrifft beide Ordner gleichermaßen, noch nicht
   behoben.
5. Ab sofort ist `D:\Brotzeit Finale August26` der alleinige Arbeitsordner
   für diese Website. `D:\Brotzeit web` bleibt unangetastet liegen (nicht
   gelöscht), gilt aber ab jetzt als überholt.

### 2026-08-13 — Öffnungszeiten geändert: Mo–Fr ab 07:30, Sa ab 08:00

**Wunsch (Kunde):** Öffnungszeiten wochentags von 7:00 auf 7:30 Uhr und
samstags von 7:30 auf 8:00 Uhr. Schließzeiten (17:30 / 16:30) unverändert.
Ausdrückliche Auflage: am Layout darf sich nichts ändern.

**Vorgeschichte:** Dieselbe Änderung war am Vortag bereits über die GitHub-
Weboberfläche beauftragt und dort auf den Branch `claude/repo-review-dusbgc`
gepusht worden — sie kam beim Kunden aber nicht an. Deshalb hier nochmal
lokal ausgeführt. **Wichtig:** Der lokale Ordner `D:\Brotzeit web` ist KEIN
funktionierendes Git-Repo (`.git` existiert, ist aber leer — jeder
git-Befehl scheitert mit „not a git repository"). Lokal und GitHub sind
außerdem inhaltlich auseinandergelaufen: auf GitHub gibt es laut Bericht
eine eigene `bestellung.html`, lokal steckt die Kassen-Ansicht weiterhin als
Areal 95 in `speisekarte.html`; umgekehrt liegt lokal noch das längst
gelöschte `index1.html`. Vor dem nächsten Upload klären, welcher Stand
führend ist — sonst überschreibt ein Upload der lokalen Dateien Arbeit,
die nur auf GitHub existiert.

**Umgesetzte Schritte (26 Textstellen, kein Markup/CSS angefasst):**
1. Öffnungszeiten-Tabellen: `index.html` (Wochentabelle, 5× Mo–Fr + Sa),
   `speisekarte.html` und `kontakt.html` (je 2 Zeilen).
2. Footer aller 10 Seiten (GLOBAL-Areal, deshalb überall identisch
   nachgezogen): „Mo–Fr 07:30–17:30" / „Sa 08:00–16:30".
3. JSON-LD `OpeningHoursSpecification` auf `index.html` (Bakery) und
   `kontakt.html` — `opens` von „07:00" auf „07:30" bzw. von „07:30" auf
   „08:00". Ohne das hätte Google/Maps weiter die alten Zeiten ausgespielt,
   obwohl auf der Seite die neuen stehen.
4. Frühstücks-Texte „ab 7 Uhr" → „ab 7.30 Uhr": `index.html` (Hero-Sub,
   Laufband 2×, FAQ-Antwort + FAQ-Schema) und `speisekarte.html`
   (Teaser-Lead, Karte 01, FAQ-Antwort + FAQ-Schema). FAQ-Fließtext und
   FAQPage-Schema wurden dabei bewusst gleichlautend geändert — Google
   verlangt für FAQ-Rich-Snippets identischen Text.
5. **Eine inhaltliche Anpassung über reines Ersetzen hinaus:** In
   `index.html` stand bei der Angebot-Karte „Frühstück & Snacks" die Angabe
   „Montag bis Samstag ab 7 Uhr" — das wäre mit dem neuen Samstagsbeginn
   falsch geworden. Nach Rückfrage vom Kunden entschieden:
   „Montag bis Freitag ab 7.30 Uhr, samstags ab 8 Uhr."
6. Umsetzung per Python-Skript mit Trockenlauf: Jede Ersetzung hatte eine
   erwartete Trefferzahl; bei Abweichung bricht das Skript ab, OHNE eine
   Datei zu schreiben. Der erste Durchlauf lief genau deshalb ins Leere —
   die Suchmuster enthielten `&#8211;`, im HTML steht aber ein echtes
   Gedankenstrich-Zeichen (`–`, U+2013). Kein Halbstand, keine
   Teiländerung. **Für künftige Sessions:** In diesen Dateien stehen
   Gedankenstriche als echte Zeichen, nicht als HTML-Entity.
7. `claude.md`: die drei vorausschauenden Spec-Stellen (Teaser-Lead und
   Karte 01 unter „1. speisekarte.html", Öffnungszeiten-Tabelle unter
   „4. kontakt.html") auf die neuen Zeiten umgestellt, `AGENTS.md`
   (Codex-Spiegelfassung) an denselben drei Stellen ebenfalls. Historische
   Arbeitsprotokoll-Einträge bewusst NICHT rückwirkend umgeschrieben —
   sie beschreiben korrekt, was zum jeweiligen Zeitpunkt galt.
8. Getestet in der Vorschau (localhost:8742): Auf allen 10 Seiten kein
   einziger Treffer für „07:00" / „ab 7 Uhr" mehr; JSON-LD parst überall
   fehlerfrei und liefert `opens` 07:30 bzw. 08:00; FAQ-Fließtext und
   FAQ-Schema auf index.html und speisekarte.html nachweislich identisch
   (programmatisch verglichen, nicht nur gesichtet); Wochentabelle,
   Preisliste und Frühstückskonfigurator (`json/preise.js`,
   `js/qrcode.min.js`) unverändert funktionsfähig. Layout auf Desktop,
   Tablet (768px) und Mobile (375px) geprüft: kein horizontales Scrollen,
   kein Textüberlauf in der längeren Angebot-Karte, kein Umbruch im
   Laufband, alle Zeit-Zeilen unverändert hoch. Konsole ohne JS-Fehler —
   die zwei gemeldeten 404 stammen von der Google-Fonts-URL, die im
   Vorschau-Sandkasten geblockt wird (alle lokalen Dateien laden mit 200),
   und sind unabhängig von dieser Änderung.

### 2026-07-17 (allerspätest) — Bugfix: Kassen-Ansicht zeigte auch bei nur einer Bestellung „Sammelbestellung"

**Problem (vom Nutzer gemeldet):** Nach der letzten Erweiterung zeigte die
Kassen-Ansicht (Areal 95) IMMER die Überschrift „Sammelbestellung" und die
„X Bestellungen am Tisch"-Formulierung — auch wenn nur eine einzelne Person
(kein Tisch) gescannt wurde. Das ist der weitaus häufigere Fall (einzelne
Kundin ohne Gruppe) und wirkte dadurch fälschlich wie eine Gruppenbestellung.

**Ursache:** Überschrift, Button-Beschriftungen und die Zusammenfassung
waren fest auf „Sammelbestellung"/„Tisch" verdrahtet, unabhängig von der
tatsächlichen Anzahl erfasster Bestellungen.

**Umgesetzte Schritte:**
1. `renderSammelliste(liste)` unterscheidet jetzt `liste.length > 1`
   („mehrere") von genau einer Bestellung: Bei einer einzelnen Bestellung
   zeigt die Ansicht „Bestellung" (Überschrift `#bestellung-titel`, Buttons
   „Als PDF speichern"/„Bestellung abschließen", Zusammenfassung nur
   „Gesamt: X €" ohne Tisch-Bezug). Ab der zweiten erfassten Bestellung
   schaltet automatisch auf „Sammelbestellung" um (Buttons „Sammelbestellung
   als PDF"/„Tisch abschließen", „X Bestellungen am Tisch — Gesamt: Y €").
2. Wird eine Bestellung wieder entfernt (×-Button) und bleibt nur noch eine
   übrig, schaltet die Ansicht automatisch zurück auf die Einzelbestellungs-
   Sprache — `renderSammelliste()` wird nach jeder Änderung neu aufgerufen
   und wertet die aktuelle Länge frisch aus.
3. Bestätigungstext beim Scannen ebenfalls angepasst: „✓ Bestellung Nr. …
   erfasst." bei einer einzelnen Bestellung statt „… zur Sammelbestellung
   hinzugefügt." Die „Tisch abschließen"-Sicherheitsabfrage (`confirm()`)
   unterscheidet ebenfalls zwischen Einzahl/Mehrzahl.
4. Getestet in der Vorschau: Einzelner Scan zeigt „Bestellung" + „Gesamt:
   2,95 €" + „Als PDF speichern"/„Bestellung abschließen"; zweiter Scan
   eines anderen Namens schaltet korrekt auf „Sammelbestellung" + „2
   Bestellungen am Tisch — Gesamt: 6,80 €" + „Sammelbestellung als
   PDF"/„Tisch abschließen"; Entfernen der zweiten Bestellung schaltet
   korrekt zurück auf Einzelbestellungs-Sprache. Konsole durchgehend
   fehlerfrei.

### 2026-07-17 (spätest) — Getränke fehlten im Frühstückskonfigurator

**Problem (vom Nutzer gemeldet):** „Heißgetränke" und „Tee & Kalte Getränke"
stehen zwar in der normalen Preisliste (Sektion 1B), fehlten aber komplett
im Frühstückskonfigurator (Sektion 1C) — Kaffee, Tee, Kaltgetränke ließen
sich dort nicht mit auswählen.

**Ursache:** Der Konfigurator zeigt nur Kategorien mit `konfigurator: true`
in `json/preise.js` — bislang nur „Brötchen & Gebäck" und „Frühstück
belegen". Die beiden Getränke-Kategorien hatten dieses Flag nie bekommen.

**Komplikation:** „Heißgetränke" hat pro Artikel zwei Preise (klein/groß,
`p: [3.85, 4.95]`), der Konfigurator kannte bisher nur „ein Preis pro
Artikel" (nutzte stets `item.p[0]`). Mit dem Nutzer abgestimmt: statt einer
neuen Größenauswahl-Oberfläche wird jeder Zwei-Preis-Artikel zu ZWEI
eigenen Konfigurator-Positionen, z. B. „Cappuccino (klein)" und
„Cappuccino (groß)" — nutzt exakt dieselbe Stepper-Oberfläche wie alle
anderen Artikel, kein neues UI-Element nötig.

**Umgesetzte Schritte:**
1. `json/preise.js`: `konfigurator: true` bei den Kategorien `heiss`
   (Heißgetränke) und `tee` (Tee & Kalte Getränke) ergänzt.
2. `speisekarte.html`, Konfigurator-Aufbau: Vor dem Rendern jeder Gruppe
   wird jetzt eine `varianten`-Liste gebaut — Artikel mit `p.length > 1 &&
   p[1] != null` werden zu zwei Einträgen („(klein)"/„(groß)", je eigener
   Preis), alle anderen bleiben unverändert ein einzelner Eintrag. Artikel
   mit zwei Preis-Slots, bei denen die Größe aber nicht existiert (z. B.
   „Hafer Latte" mit `p: [4.80, null]`, laut Datenkommentar „null = Größe
   gibt es nicht"), werden korrekt NICHT gesplittet. Dieselbe `varianten`-
   Liste speist sowohl das HTML (`data-key`) als auch die `auswahl`-Map
   (`auswahl.set(v.key, …)`) — beide entstehen aus demselben Durchlauf,
   dadurch kein Risiko einer Schlüssel-Abweichung zwischen Anzeige und
   Zähl-Logik.
3. Getestet: Direkte Prüfung der Kategorien-/Artikel-Daten nach dem Laden
   von `json/preise.js` bestätigt beide neuen `konfigurator`-Flags. Die
   komplette Aufbaulogik wurde mit den echten (frischen) Preisdaten separat
   nachgestellt: „Kaffee Creme (klein)" 3,30 €/„Kaffee Creme (groß)" 4,10 €,
   „Cappuccino (klein)" 3,85 €/„Cappuccino (groß)" 4,95 € — beide korrekt
   gesplittet inkl. Info-Text („Espresso, Milch, Milchschaumhaube") bei
   beiden Varianten; „Hafer Latte" und „Kinder-Cappuccino" (Einzelpreis)
   korrekt NICHT gesplittet. Alle 7 neuen Gruppen (Kaffee, Espresso, Kaffee
   Latte, Schokoladenträume, Erlesener Tee, Kalte Getränke, Für die
   Kleinen) erscheinen zusätzlich zu den bestehenden 8, macht 15 Gruppen /
   87 Konfigurator-Positionen (vorher 44). Visuell per Screenshot auf Mobile
   (375px) geprüft: Gruppe „Kaffee" korrekt aufgeklappt, alle Zeilen lesbar,
   kein horizontales Scrollen, Layout identisch zu den bestehenden Gruppen.
   Konsole durchgehend fehlerfrei.

**Hinweis:** Dieselbe Browser-Cache-Eigenheit wie bei früheren Einträgen
heute machte einen normalen Live-Klicktest im Vorschau-Tab unzuverlässig
(`json/preise.js` blieb im Cache hängen, auch nach Neuladen der HTML-Seite)
— die Verifikation lief stattdessen über direktes Nachvollziehen der
Aufbaulogik mit frisch abgerufenen (`cache: 'no-store'`) Preisdaten. Die
eigentliche Klick-/Zähl-Logik (`gruppenEl`-Event-Delegation → `auswahl.get`)
wurde inhaltlich NICHT verändert, nur die Befüllung von `auswahl` und die
`data-key`-Vergabe — beide laufen unverändert aus derselben Quelle wie
zuvor bei den Brötchen-/Belag-Artikeln.

### 2026-07-17 (ganz spät) — Kassen-Ansicht: mehrere QR-Scans zu einer Tisch-Sammelbestellung zusammenfassen

**Wunsch:** Bei einem Tisch mit 4–12 Personen soll die Mitarbeiterin nach-
einander jeden Frühstückskonfigurator-QR-Code scannen können, ohne sich
etwas aufschreiben zu müssen — die App soll die einzelnen Scans zu einer
Sammelbestellung für den Tisch zusammenrechnen.

**Architektur-Entscheidung:** Kein Backend vorhanden (siehe „Was nicht
eingebaut wird") — die Sammelbestellung wird deshalb im `localStorage` DES
SCANNENDEN GERÄTS (Handy der Mitarbeiterin) zwischengespeichert, nicht auf
einem Server. Das funktioniert zuverlässig, SOLANGE derselbe Tisch komplett
mit demselben Handy durchgescannt wird (der übliche Fall) — es gibt aber
keine Synchronisation zwischen mehreren Mitarbeiter-Handys. Wurde dem
Kunden so nicht explizit vorgelegt, ergibt sich aber zwingend aus der
No-Backend-Architektur der Seite; falls mehrere Handys gleichzeitig an
einem Tisch scannen sollen, bräuchte es einen echten Server (siehe „Offen
für später" unten, „digitale Ablage").

**Umgesetzte Schritte:**
1. QR-Code-Inhalt von vorformatiertem Text auf strukturiertes JSON
   umgestellt: `bestellDaten(vorname)` liefert jetzt `{ nummer, name, zeit,
   items: [{name, anzahl, preis}], summe }` statt eines fertigen Textblocks.
   `qrTargetURL()` kodiert dieses Objekt per `JSON.stringify` in den
   `?bestellung=`-Parameter. Grund: Die Kassen-Ansicht muss die Positionen
   jetzt PROGRAMMATISCH weiterverarbeiten (Summen über mehrere Personen
   bilden, Duplikate erkennen) statt nur Text anzuzeigen — das geht mit
   Klartext nur über fehleranfälliges Regex-Parsing zurück.
2. Kassen-Ansicht (Areal 95) komplett umgebaut: Beim Aufruf mit
   `?bestellung=…` wird das JSON geparst und in eine Sammelbestellung im
   `localStorage` (Key `brotzeit-tisch-sammelbestellung`) eingetragen —
   jede Person erscheint als eigene Karte (Name, Bestellnummer, eigene
   Positionen, eigene Summe, „×"-Button zum Entfernen bei Fehlscans), darunter
   eine laufende Gesamtsumme („11 Bestellungen am Tisch — Gesamt: 45,95 €").
3. Duplikat-Schutz: Wird dieselbe Bestellnummer erneut gescannt (z. B.
   aus Versehen zweimal derselbe Kunde), wird sie NICHT doppelt gezählt —
   stattdessen erscheint „war bereits erfasst".
4. Neuer Button „Tisch abschließen" leert die Sammelbestellung (mit
   Sicherheits-Nachfrage per `confirm()`, da sonst mehrere Bestellungen auf
   einmal verloren gehen könnten) und springt zurück zur normalen Seite —
   damit ist das Gerät bereit für den nächsten Tisch. Ohne diesen Schritt
   würden Bestellungen vom nächsten Tisch fälschlich in dieselbe Liste
   einsortiert werden.
5. Alters-Warnung: Ist der älteste Eintrag der aktuellen Sammelbestellung
   mehr als 3 Stunden alt, erscheint ein Hinweis „vermutlich vom letzten
   Tisch übrig geblieben — am besten zuerst Tisch abschließen" — Sicherheits-
   netz für den Fall, dass „Tisch abschließen" vergessen wurde.
6. „Als PDF speichern" (bereits vom letzten Schritt vorhanden) druckt jetzt
   automatisch die GESAMTE Sammelbestellung (alle Personen, alle Positionen,
   Gesamtsumme) statt nur des zuletzt gescannten Einzel-Scans — das ist der
   eigentliche Nutzen für die Mitarbeiterin (ein Ausdruck für den ganzen
   Tisch statt Zettel für jede Person einzeln).
7. Rückwärts-Kompatibilität: Ist der `?bestellung=`-Inhalt kein gültiges
   JSON (z. B. ein vor diesem Update bereits erzeugter/gedruckter QR-Code im
   alten Klartext-Format), stürzt nichts ab — stattdessen erscheint der
   Rohtext mit dem Hinweis „Älterer QR-Code — bitte neu erzeugen", ohne
   Sammel-Funktion für diesen einen Scan.
8. Overlay-Layout defensiv gegen Overflow gebaut (Lehre aus dem Overflow-Bug
   im mobilen Menü vom selben Tag): `#bestellung-overlay` ist jetzt von oben
   ausgerichtet + `overflow-y: auto` statt zentriert ohne Scroll — bei einem
   vollen 12-Personen-Tisch reicht der Inhalt locker über einen Handy-
   Bildschirm hinaus und muss zuverlässig scrollbar bleiben.
9. Druck-CSS erweitert: Die „×"-Entfernen-Buttons, der Hinweistext und die
   Alters-Warnung werden beim Drucken ausgeblendet, jede Personen-Karte
   bekommt einen dezenten Rahmen statt des dunklen Bildschirm-Hintergrunds.
10. Getestet in der Vorschau: Zwei nacheinander simulierte Scans (Anna 0,48 €,
    Ben 7,70 €) ergeben korrekt „2 Bestellungen — Gesamt: 8,18 €"; erneuter
    Scan von Annas Nummer wird als Duplikat erkannt, Summe bleibt bei 8,18 €;
    Entfernen von Bens Karte reduziert Summe und `localStorage` korrekt auf
    0,48 €; „Tisch abschließen" (mit bestätigtem `confirm()`) leert
    `localStorage` auf `null` und navigiert zurück zu `speisekarte.html`;
    zusammengesetzter 11-Personen-Tisch (10 vorbefüllt + 1 frisch gescannt)
    zeigt korrekt „11 Bestellungen — Gesamt: 45,95 €" UND die 3-Stunden-
    Alters-Warnung; auf Mobile (375×667) ist der komplette Tisch trotz
    Overflow bis zum „Zur Speisekarte"-Link durchscrollbar, kein
    horizontales Scrollen; Klartext-Fallback (altes QR-Format) zeigt den
    Rohtext ohne Absturz. Konsole durchgehend fehlerfrei.

**Offen für später (unverändert vom letzten Eintrag):** „Bestellung per
E-Mail versenden" sowie eine echte digitale Ablage aller Bestellungen
(bräuchte einen Server — würde auch das Mehrere-Handys-Limit dieser
localStorage-Lösung auflösen, siehe Architektur-Entscheidung oben).

### 2026-07-17 (noch später) — Kassen-Ansicht erweitert: Bestellnummer + „Als PDF speichern" für die Mitarbeiterin

**Wunsch:** Der bisherige Ablauf (Kundin scannt QR, Mitarbeiterin sieht nur
Fließtext) sollte für die Mitarbeiterin nutzbarer werden. Priorität 1 (jetzt
umgesetzt): Möglichkeit, die Bestellung direkt aus der Kassen-Ansicht heraus
als PDF/Ausdruck zu sichern. Zusätzlich gewünscht: immer Datum + Uhrzeit
(gab es schon) sowie eine zufällig generierte Bestellnummer als Referenz.
Für später angekündigt, hier bewusst NICHT umgesetzt: „Bestellung per
E-Mail versenden" sowie eine digitale Ablage aller Bestellungen (Letzteres
bräuchte ein echtes Backend/eine Datenbank — widerspricht der bisherigen
No-Backend-Architektur der Seite, siehe „Was nicht eingebaut wird").

**Umgesetzte Schritte:**
1. Neue `holeBestellIdentitaet()`-Funktion: erzeugt einmal pro Bestellung
   eine 4-stellige zufällige Bestellnummer (`1000`–`9999`) + einen festen
   Zeitstempel, hält beides danach stabil. Vorher erzeugte `qrPayload()` bei
   jedem Aufruf einen frischen `new Date()` — klickte man erst „QR-Code
   erzeugen" und Minuten später „Als PDF speichern", enthielten QR-Code und
   PDF-Zettel dadurch unterschiedliche Uhrzeiten (ein bislang unbemerkter
   Bug). Mit der zentralen Identität zeigen jetzt QR-Code, PDF-Bestellzettel
   und die Kassen-Ansicht (Areal 95) garantiert dieselbe Nummer + Uhrzeit,
   solange sich an der Auswahl nichts ändert. Ändert sich die Auswahl
   (`renderKonfig()`), wird die Identität wie der QR-Code selbst ungültig
   und beim nächsten Export neu erzeugt.
2. `qrPayload()` um eine Zeile „Nr. <Nummer>" direkt unter „BROTZEIT
   BESTELLUNG" ergänzt — dadurch taucht die Nummer automatisch überall auf,
   wo dieser Text verwendet wird (QR-Inhalt, Kassen-Ansicht-Text), ohne
   Sonderfall pro Ausgabeform.
3. Bestellzettel (Areal 90, PDF-Export der Kundin) bekommt eine eigene neue
   Zeile „Bestellung Nr. <Nummer>" (`#zettel-nummer`, in Akzentfarbe) direkt
   unter dem Titel „Mein Frühstück" — dort wird der sichtbare Text separat
   von `eintraege`/`auswahl` aufgebaut (nicht aus `qrPayload()`), deshalb
   eigenes Element statt automatischem Miterscheinen. Datum/Uhrzeit auf dem
   Zettel jetzt ebenfalls aus der stabilen Identität statt `new Date()`.
4. Bildschirm-Hinweistext unter dem QR-Code („Einfach an der Kasse scannen
   lassen …") beginnt jetzt mit „Bestellung Nr. <Nummer> — …", damit die
   Nummer schon VOR dem Scannen sichtbar ist (z. B. um sie der Mitarbeiterin
   zusätzlich mündlich zu nennen, falls das Scannen gerade nicht klappt).
5. Kassen-Ansicht (Areal 95, `#bestellung-overlay`) um einen Button „Als PDF
   speichern" (`#bestellung-drucken`) ergänzt. Da `body.bestellung-modus`
   bereits alles außer dem Overlay ausblendet — und diese Regel bewusst
   nicht auf `@media screen` beschränkt ist, gilt sie automatisch auch beim
   Drucken —, genügt ein einfacher `window.print()`-Aufruf, ganz ohne den
   Umweg über eine zusätzliche `druckmodus`-Klasse wie beim bestehenden
   Bestellzettel. Neue `@media print`-Regeln wandeln das dunkle Bildschirm-
   Layout beim Drucken in ein helles Papier-Layout (weißer Hintergrund,
   dunkler Text, Rahmen statt Verlaufshintergrund) und blenden Button sowie
   „Zur Speisekarte"-Link aus, die auf Papier keinen Sinn ergeben.
6. Getestet in der Vorschau: QR erzeugt (Bestellnummer laut Hinweistext
   „6964"), tatsächlich im QR kodierter Text enthält dieselbe Nummer
   (per Monkey-Patch auf `qrcode()` ausgelesen, nicht nur Quellcode-Prüfung);
   danach „Als PDF speichern" geklickt (ohne Auswahl zu ändern) — Zettel
   zeigt identische Nummer „6964" sowie denselben Zeitstempel wie der QR.
   Auswahl geändert (weiteres Item hinzugefügt) → nächste QR-Erzeugung
   liefert erwartungsgemäß eine NEUE Nummer („8420"), Identität also korrekt
   invalidiert. Direkter Aufruf der Kassen-Ansicht mit `?bestellung=…`
   (inkl. „Nr. 8420" im Text) zeigt die Nummer korrekt, Klick auf „Als PDF
   speichern" ruft `window.print()` auf (Funktion testweise überschrieben,
   um den Aufruf ohne echten Druckdialog zu verifizieren). Kein
   horizontales Scrollen auf Mobile (375×667), Konsole durchgehend
   fehlerfrei.

**Offen für später (auf Kundenwunsch, bewusst nicht jetzt umgesetzt):**
- „Bestellung per E-Mail versenden" direkt aus der Kassen-Ansicht heraus
  (nächster Schritt laut Kunde). Vermutlich `mailto:` an eine feste interne
  Adresse, analog zum bestehenden Formular-Muster — sobald angefragt.
- Digitale Ablage/Archiv aller Bestellungen. Das braucht echte Persistenz
  (Backend/Datenbank oder externer Dienst) und sprengt die aktuelle
  No-Backend-Architektur der Seite — beim Kunden vorab klären, welcher
  Dienst/welches Hosting dafür in Frage kommt, bevor das angegangen wird.

### 2026-07-17 (später) — Korrektur: QR-Ziel-URL zeigte fest auf die künftige Live-Domain statt auf den aktuellen Vorschau-Server

**Problem (vom Nutzer gemeldet, kurz vor einer Kundenpräsentation):** Der
QR-Code-Fix vom 2026-07-15 (siehe Eintrag „Bugfix: QR-Code des
Frühstückskonfigurators …") hatte `qrTargetURL()` bewusst, aber fälschlich
auf `https://brotzeit-rostock.de/...` hartcodiert — mit demselben
Begründungsmuster wie bei Canonical-URLs/JSON-LD/Open-Graph. Der
entscheidende Unterschied: Diese Adressen werden nur von Suchmaschinen/
Crawlern gelesen und sind bis zum Livegang folgenlos falsch. Der QR-Code
dagegen wird JETZT SCHON von echten Menschen gescannt (Kassiervorgang,
Kundenpräsentationen) — auf dem aktuellen Arbeitsserver
`https://brotzeit.botschaft42.de/`, nicht auf der künftigen Domain. Ein
gescannter Code landete dadurch auf einer 404-Seite der (noch nicht
gebauten) echten Live-Domain, mitten in einer Präsentation vor dem Kunden.

**Ursache:** Fehlende Unterscheidung zwischen „inerten" Metadaten (SEO-
Felder, die bis zum Domain-Umzug niemand aktiv aufruft) und einer aktiv
genutzten Funktion (QR-Code wird in Echtzeit gescannt). Nur Erstere dürfen
auf die künftige Domain hartcodiert werden.

**Umgesetzte Schritte:**
1. `qrTargetURL()` von `'https://brotzeit-rostock.de/speisekarte.html?...'`
   auf `location.origin + location.pathname + '?bestellung=...'` umgestellt
   — die Ziel-URL ergibt sich jetzt immer aus der Adresse, unter der die
   Seite gerade tatsächlich aufgerufen wird. Funktioniert dadurch
   unverändert auf `localhost:8742` (lokale Vorschau), auf
   `brotzeit.botschaft42.de` (aktueller Arbeitsserver) und später
   automatisch auch auf `brotzeit-rostock.de`, ohne dass beim Domain-Umzug
   nochmal an diese Stelle gedacht werden muss.
2. Bewusst `location.pathname` statt `location.href`/`location.search`
   verwendet, damit ein eventueller Cache-Busting- oder Tracking-
   Query-Parameter in der aufrufenden URL nicht versehentlich mit in den
   QR-Code übernommen wird.
3. Der iOS-Fix vom 2026-07-15 selbst (echte URL statt Klartext, Bestellungs-
   Ansicht Areal 95) bleibt unverändert bestehen — nur die Herkunft der
   Domain wurde korrigiert, die Funktionsweise ist identisch.
4. Getestet in der Vorschau: QR-Code-Generierung abgefangen (Monkey-Patch
   auf `qrcode()`, um den tatsächlich kodierten String auszulesen, statt
   nur den Quellcode zu prüfen) — bestätigt `http://localhost:8742/
   speisekarte.html?bestellung=…` statt der alten Domain; ein zusätzlicher
   `?v=…`-Cache-Busting-Parameter in der aufrufenden URL landete korrekt
   NICHT im QR-Inhalt. Direkter Aufruf der erzeugten `?bestellung=…`-URL
   zeigt weiterhin korrekt die Bestellungs-Ansicht. Konsole fehlerfrei.

**Wichtig für künftige Sessions:** Der aktuelle Arbeitsserver für
Kundenpräsentationen ist `https://brotzeit.botschaft42.de/` (nicht nur der
lokale `localhost:8742`-Vorschau-Server). Bei allem, das jetzt schon aktiv
benutzt/gescannt/angeklickt werden kann (QR-Codes, Formular-Actions,
Weiterleitungen mit Testcharakter), NICHT auf die künftige Live-Domain
`brotzeit-rostock.de` hartcodieren, sondern relativ/dynamisch
(`location.origin`, relative Pfade) halten. Nur bei Metadaten, die bis zum
Domain-Umzug niemand aktiv aufruft (Canonical-URLs, JSON-LD, Open-Graph,
Sitemap), ist eine feste Adresse auf die künftige Domain weiterhin richtig
und beabsichtigt.

### 2026-07-17 — Bugfix: „Speisekarte" fehlte im mobilen Menü auf allen Seiten (Overflow, kein Scroll)

**Problem (vom Nutzer gemeldet):** Im mobilen Overlay-Menü (Burger-Icon)
fehlte der Eintrag „Speisekarte" komplett — auf allen Seiten, da Navigation
GLOBAL ist (Areal 10, `shared.css`).

**Ursache:** `.nav-mobile` (shared.css) zentriert seine 7 Links + Adresszeile
per `justify-content: center`, ganz ohne `overflow`. Seit Canapés und
Bäcker-Sushi zur Navigation dazukamen (siehe Einträge vom 12.07.), ist der
Gesamtinhalt bei kleineren/realen Handy-Displays (z. B. iPhone SE/8, oder
jedes iPhone sobald Safaris eigene Werkzeugleiste die sichtbare Höhe
verkleinert) höher als der Viewport. Durch die Zentrierung ohne Scroll-
Möglichkeit rutschte der erste Eintrag „Speisekarte" dabei unsichtbar über
den oberen Bildschirmrand hinaus — nicht nur schwer erreichbar, sondern
komplett unsichtbar und nicht antippbar. In der Vorschau bei großen
Testbreiten (z. B. 375×812) fiel das nicht auf, weil dort noch genug Platz
war — deshalb blieb der Bug bislang unbemerkt.

**Umgesetzte Schritte:**
1. `.nav-mobile` in `shared.css` von `justify-content: center` auf
   `flex-start` umgestellt, `overflow-y: auto` ergänzt sowie `padding: 96px
   0 40px` (statt der wegfallenden Zentrierung) — auf großen Displays sieht
   das Menü weiterhin ausgewogen aus, auf kleinen/realen Handys ist jetzt
   aber jeder Eintrag entweder direkt sichtbar oder zumindest per Scrollen
   erreichbar, nie mehr unsichtbar abgeschnitten.
2. Da `.nav-mobile` GLOBAL in `shared.css` liegt, gilt der Fix automatisch
   für alle 10 Seiten — keine einzelne HTML-Datei musste angefasst werden.
3. Getestet in der Vorschau bei 375×667 (iPhone SE/8-Größe, wo der Bug
   zuvor reproduzierbar war: „Speisekarte" stand bei `top: -2.6px`, also
   knapp oberhalb des sichtbaren Bereichs): nach dem Fix startet
   „Speisekarte" korrekt bei `top: 96px`, alle 7 Links + Adresszeile sind
   entweder sichtbar oder nach unten scrollbar (`scrollTop` bis 141px
   möglich, „Kontakt" und Adresszeile dann vollständig im sichtbaren
   Bereich). Bei 375×812 (größeres, übliches Handy-Format) passt weiterhin
   alles ohne Scrollen auf den Bildschirm, kein horizontales Scrollen,
   stichprobenartig auch auf karriere.html geprüft (Fix greift dort
   identisch, wie erwartet bei einer `shared.css`-Änderung). Konsole
   durchgehend fehlerfrei.

**Hinweis für Claude in künftigen Sessions:** Bei Vorschau-Tests von
`shared.css`-Änderungen kann der lokale `python -m http.server` keine
Cache-Control-Header setzen — der Vorschau-Browser cachet CSS-Dateien
dadurch teils hartnäckig, auch über `navigate` und `Strg+Umschalt+R`
hinweg. Zum zuverlässigen Verifizieren einer CSS-Änderung ggf. den
`<link>`-Tag der Seite per JS auf eine cache-gebrochene URL umbiegen
(`link.href = 'shared.css?v=' + Date.now()`) und danach erneut prüfen.

### 2026-07-15 (später) — Bugfix: QR-Code des Frühstückskonfigurators öffnete auf iPhones eine Google-Suche statt die Bestellung zu zeigen

**Problem (vom Nutzer gemeldet, nach dem Preislisten-Suchfeld-Fix):** Ein
anderes, ähnlich klingendes Problem — nicht die Website selbst, sondern
der vom Frühstückskonfigurator erzeugte QR-Code (Button „QR-Code für die
Kasse erzeugen", Sektion 1C, Areal 60). Scannt ein iPhone diesen Code mit
der normalen Kamera-App, erscheint nur „Im Web suchen" statt die
Bestellung direkt anzuzeigen. Auf Nachfrage bestätigte der Kunde: Der
QR-Code wird tatsächlich von der Handykamera der Mitarbeiter gescannt
(kein dediziertes Scanner-Gerät an der Kasse) — das iOS-Verhalten betrifft
also den echten Kassiervorgang, nicht nur ein Test.

**Ursache:** Der QR-Code enthielt bisher reinen Klartext („BROTZEIT
BESTELLUNG / Name / Datum / Positionen / Gesamt", UTF-8-kodiert). iOS
bietet bei Klartext-QR-Codes in der Kamera-App standardmäßig nur „Im Web
suchen" an, weil es den Inhalt keinem anderen Aktionstyp (Link, Telefon,
WLAN …) zuordnen kann — ein bekanntes, nicht per JavaScript beeinflussbares
Systemverhalten der iOS-Kamera. Android/Google Lens zeigt Klartext dagegen
meist direkt an, daher der Plattform-Unterschied.

**Umgesetzte Schritte:**
1. QR-Ziel von reinem Klartext auf eine echte `https://`-URL umgestellt:
   `qrTargetURL(vorname)` baut jetzt
   `https://brotzeit-rostock.de/speisekarte.html?bestellung=<encodeURIComponent(Bestelltext)>`.
   iOS erkennt echte URLs zuverlässig als Link („In Safari öffnen"-Banner)
   — das bisherige Klartext-Fallback-Problem entfällt dadurch komplett,
   unabhängig vom Scan-Gerät. Der bisherige UTF-8-Byte-Trick für Umlaute
   (`unescape(encodeURIComponent(...))`) wird nicht mehr gebraucht, da
   `encodeURIComponent` bereits reines ASCII erzeugt.
2. Neue, unauffällige „Bestellungs-Ansicht" (Areal 95, direkt nach
   `<body>`) eingebaut: Ein synchrones Inline-Script direkt nach dem
   öffnenden `<body>`-Tag prüft `?bestellung=…` in der URL und setzt bei
   Treffer sofort `body.classList.add('bestellung-modus')` — noch bevor
   der Rest der Seite gerendert wird, kein Aufblitzen der normalen
   Speisekarte. Per CSS (`body.bestellung-modus > *:not(#bestellung-overlay)
   { display: none !important; }`, gleiches Muster wie das bestehende
   `body.druckmodus` für den Bestellzettel) wird die komplette restliche
   Seite ausgeblendet, ein zentriertes, dunkles Overlay (`var(--warm-dark)`)
   zeigt Logo, Überschrift „Bestellung", den Bestelltext (Name, Positionen,
   Gesamtsumme, per `<pre>` mit `white-space: pre-wrap`) und einen Link
   „Zur Speisekarte" zurück zur normalen Seite. Befüllung des Textes läuft
   in `DOMContentLoaded`, unabhängig von `window.BROTZEIT_PREISE` (auch
   ohne geladene Preisdaten funktionsfähig).
3. `qrDataURL()` (genutzt sowohl vom Bildschirm-QR-Button als auch vom
   QR-Code auf dem gedruckten Bestellzettel/PDF, Areal 90) unverändert in
   der Signatur — beide Aufrufer profitieren automatisch vom Fix, ohne
   selbst angepasst werden zu müssen.
4. Areal-Tabelle in dieser Datei um Areal 95 ergänzt.
5. Getestet in der Vorschau: normaler Seitenaufruf unverändert (Overlay
   `display:none`, `bestellung-modus` nicht gesetzt); simulierter Aufruf
   mit `?bestellung=…` (inkl. Umlauten „Käsebrötchen", „—", „€") zeigt das
   Overlay korrekt (`main`/`footer`/Nav auf `display:none`, Overlay füllt
   den kompletten Viewport, Text exakt wie im Query-Parameter); echter
   Konfigurator-Durchlauf (Artikel wählen, Vorname eintragen, QR-Button
   klicken) erzeugt weiterhin fehlerfrei ein QR-Bild, Hinweistext korrekt;
   kein horizontales Scrollen auf Tablet (768px) und Mobile (375px),
   Konsole durchgehend fehlerfrei.

**Hinweis:** Wie beim vorherigen Fix lässt sich das eigentliche
iOS-Kameraverhalten im Vorschau-Browser nicht nachstellen — die
Verifikation erfolgte über die Ursache (Klartext- vs. URL-QR-Code, ein
dokumentiertes iOS-Verhalten) und den vollständigen Funktionsweg
(QR-Ziel-URL → Bestellungs-Ansicht zeigt exakt den Bestelltext). Der
Nutzer sollte nach dem Livegang einmal mit einem echten iPhone
gegentesten. Die QR-Ziel-URL ist hart auf die künftige Live-Domain
`brotzeit-rostock.de` codiert (wie bereits bei Canonical-URLs/JSON-LD/
Open-Graph an anderer Stelle) — vor dem eigentlichen Livegang funktioniert
ein gescannter QR-Code deshalb nur, wenn diese Domain bereits online ist;
lokal in der Vorschau lässt sich die Bestellungs-Ansicht aber weiterhin
direkt über `?bestellung=…` in der URL testen (siehe Schritt 5).

### 2026-07-15 — Bugfix: iOS öffnete Google-Suche statt Preisliste zu filtern

**Problem (vom Nutzer gemeldet):** Auf speisekarte.html öffnete sich auf
iPhones/Apple-Geräten beim Tippen im Preislisten-Suchfeld eine Google-
Websuche, statt die Preisliste zu filtern. Auf Android trat das nicht
auf. Der Nutzer erinnerte sich, dass das bereits einmal behoben worden
war — in `claude.md` findet sich dazu allerdings kein Eintrag, das muss
also entweder vor Einführung des Arbeitsprotokolls passiert oder nie
dokumentiert worden sein.

**Ursache:** `<input type="search" id="preise-search">` (Sektion 1B,
Areal 50) steckt in keinem `<form>`-Element — das ist auf der ganzen
Seite die einzige Stelle mit `type="search"`. iOS Safari öffnet bei
einem `type="search"`-Feld ohne umschließendes `<form>` beim Drücken von
„Suchen" auf der Bildschirmtastatur als Fallback eine allgemeine
Websuche, weil kein Formular zum Abschicken da ist. Android/Chrome kennt
dieses Fallback-Verhalten nicht, daher der Unterschied zwischen den
Plattformen.

**Umgesetzte Schritte:**
1. Da die Preisliste ohnehin live beim Tippen filtert (`input`-Event,
   kein Submit nötig), war ein `<form>`-Wrapper unnötiger Aufwand.
   Stattdessen einen `keydown`-Listener ergänzt, der bei Enter
   `preventDefault()` aufruft und damit den iOS-Fallback unterbindet,
   ohne die bestehende Live-Filter-Logik anzufassen.
2. Sitewide geprüft: `type="search"` kommt nur an dieser einen Stelle
   vor, keine weiteren betroffenen Felder.
3. Getestet in der Vorschau: Live-Filter funktioniert weiterhin
   (Eingabe „Cappuccino" filtert korrekt), simuliertes Enter-Keydown wird
   jetzt abgefangen (`preventDefault` greift), URL ändert sich nicht,
   kein horizontales Scrollen auf Mobile (375px), Konsole fehlerfrei.

**Hinweis:** Echtes iOS-Verhalten lässt sich im Chromium-basierten
Vorschau-Browser nicht nachstellen — die Verifikation erfolgte über die
zugrunde liegende Ursache (fehlendes `<form>` bei `type="search"`, ein
bekanntes WebKit/iOS-Verhalten) und das korrekte Abfangen des
Enter-Keydown-Events. Der Nutzer sollte den Fix auf einem echten
iPhone/iPad gegentesten, sobald die Seite live ist.

### 2026-07-14 (später) — Kein Umzug zu Cloudflare: dauerhaft bei Vercel (Pro-Account), _redirects wieder entfernt

**Wunsch (Kunde):** Klarstellung direkt im Anschluss an den vorherigen
Eintrag — es kommt KEIN späterer Umzug zu Cloudflare. Der Kunde bleibt
dauerhaft bei Vercel und hat inzwischen auf den Pro-Account upgegradet.
Weitere Änderungen an der Seite wurden für die nächste Zeit angekündigt.

**Umgesetzte Schritte:**
1. `_redirects` (Cloudflare-Pages-Vorbereitung aus dem vorherigen Eintrag)
   wieder gelöscht — nicht mehr relevant, vermeidet einen zweiten,
   unnötig zu pflegenden Redirect-Stand.
2. `vercel.json` bleibt unverändert bestehen und ist jetzt der EINZIGE
   Redirect-Mechanismus für diese Seite (dauerhaft, nicht nur als
   Vorschau-Übergangslösung).
3. claude.md aktualisiert: Abschnitt „Redirects (301)" umbenannt („vor
   dem Livegang auf der echten Domain" statt „vor dem Domain-Umzug",
   da kein Plattform-Umzug mehr ansteht) und der Hosting-Hinweis auf den
   bestätigten Dauerzustand (Vercel Pro) umgeschrieben. Deploy-Checkliste:
   `_redirects`-Zeile entfernt, robots.txt-Firewall-Hinweis von
   „Cloudflare o. ä." auf Vercels eigene Firewall-Funktionen (Pro-Account)
   umformuliert.
4. Reine Dokumentations-/Aufräumarbeit ohne Auswirkung auf das Rendering
   der Website — kein Browser-Test nötig.

### 2026-07-14 — Hosting für Redirects bestätigt: vercel.json + _redirects angelegt

**Wunsch:** Nachdem die Redirect-Tabelle stand, aber noch unklar war, ob
Apache oder Nginx zum Einsatz kommt, bestätigte der Kunde das tatsächliche
Setup: aktuell läuft die Vorschau über GitHub/Vercel, der spätere echte
Livegang erfolgt über GitHub/Cloudflare. Damit war klar, dass weder die
vorbereiteten Apache- noch die Nginx-Snippets zutreffen — beide Plattformen
haben eigene Redirect-Mechanismen.

**Umgesetzte Schritte:**
1. `vercel.json` neu angelegt (Projekt-Root) — Vercel's `redirects`-Array
   mit `"permanent": true` (erzeugt technisch 308 statt 301, SEO-seitig
   aber gleichwertig als dauerhafte Weiterleitung gewertet). Greift schon
   jetzt für die aktuelle Vercel-Vorschau.
2. `_redirects` neu angelegt (Projekt-Root, Netlify-kompatible Syntax, die
   Cloudflare Pages übernommen hat) — mit echtem 301-Code je Zeile. Greift
   erst beim späteren Livegang über Cloudflare Pages.
3. Beide Dateien enthalten dieselbe Zuordnung wie die zuvor dokumentierte
   Redirect-Tabelle (8 alte WordPress-URLs → neue `.html`-Seiten).
4. claude.md aktualisiert: Abschnitt „Redirects (301)" — die „noch
   offen"-Formulierung mit Apache/Nginx-Snippets durch den bestätigten
   Vercel/Cloudflare-Stand ersetzt; Deploy-Checkliste um beide neuen
   Dateien ergänzt; dabei nebenbei eine veraltete Angabe korrigiert
   (sitemap.xml listet 7 der 10 Seiten, nicht 9 — seit dem Impressum/
   Datenschutz-Sitemap-Fix von vorhin nicht mehr nachgezogen).
5. `vercel.json` auf valides JSON geprüft (Python `json.load`), `_redirects`
   folgt der Standard-Netlify/Cloudflare-Pages-Syntax (Quelle, Ziel,
   Statuscode, durch Leerzeichen getrennt) — beide Dateien sind reine
   Konfigurationsdateien ohne Auswirkung auf das lokale Vorschau-Rendering,
   daher kein Browser-Test nötig.

### 2026-07-13 (nach Mitternacht) — Codex-Webmaster-Review umgesetzt: Sitemap-Fix, Semantik, JobPosting, Open Graph, Redirect-Mapping

**Auslöser:** Der Kunde ließ die Vorschau-Seite von „Codex" (ChatGPT) als
Webmaster/SEO-Auditor prüfen. Der Bericht wurde zunächst nur ausgewertet
(nichts verändert, siehe vorheriger Chat-Abschnitt), danach vom Kunden
mit „ja, ist ok und go" für 5 Punkte freigegeben, plus eine eigene
Link-Liste der aktuell live indexierten alten WordPress-URLs für die
Redirect-Planung (Punkt 5).

**Vorab gegen den echten Code geprüft (nicht blind übernommen):** Sitemap/
noindex-Widerspruch bei Impressum/Datenschutz, Title-Länge torten.html
(87 Zeichen, selbst verursacht), JobPosting-Lücken auf karriere.html,
doppeltes H1 auf speisekarte.html, fehlendes `<main>` auf 8 Seiten,
fehlendes `aria-current`/Open-Graph — alles bestätigt zutreffend.
Bewusst NICHT umgesetzt: die Codex-Empfehlung, die Speisekarte/Preisliste
JS-frei statisch auszuliefern — auf ausdrücklichen Kundenwunsch („aus
unserer Sicht nicht SEO wichtig").

**Umgesetzte Schritte:**
1. `sitemap.xml`: `impressum.html` und `datenschutz.html` entfernt (beide
   `noindex, follow` — Google rät, sie dann auch nicht in der Sitemap zu
   listen, sonst widersprüchliches Signal). Kommentar an der Stelle
   ergänzt, der das erklärt.
2. Title/Meta-Längen gekürzt: `torten.html`-Title 87→63 Zeichen (jetzt
   „Individuelle Torten & handgemachte Törtchen Rostock | Brotzeit"),
   `index.html`-Title 80→66 Zeichen, `sushi.html`-Description 187→158
   Zeichen — Long-Tail-Keywords aus der letzten Session blieben erhalten,
   nur die sekundären Zusatzbegriffe (z. B. „Hochzeitstorte,
   Geburtstagstorte" im torten.html-Title) wurden gestrichen, da sie im
   Fließtext/H2 ohnehin vorkommen.
3. `speisekarte.html`: verstecktes `<h1 class="zettel-titel">` (Drucksatz-
   Bestellzettel) zu `<p class="zettel-titel">` geändert — die CSS-Regel
   greift über die Klasse, nicht den Tag, daher rein semantische Änderung
   ohne optischen Effekt. Damit hat jede Seite wieder nur ein H1.
4. `aria-current="page"` auf den aktiven Hauptnav-Link ergänzt (Desktop
   UND mobiles Menü) auf allen 7 Seiten, die eine `class="active"`-Markierung
   in `.nav-links`/`.nav-mobile` haben: torten, karriere, canapes, sushi,
   ueber-uns, kontakt, speisekarte. (index.html und impressum/datenschutz
   markieren dort nichts als aktiv, siehe Nav-Struktur — kein Änderungsbedarf.)
5. `<main>`-Element auf den 8 Seiten ergänzt, die noch keins hatten (index,
   speisekarte, torten, canapes, sushi, ueber-uns, kontakt, karriere) —
   Impressum/Datenschutz hatten es bereits. Öffnet direkt nach `</header>`
   (bzw. vor dem Breadcrumb bei den Unterseiten), schließt vor dem
   Footer-Kommentar. Bei speisekarte.html bewusst VOR dem versteckten,
   `aria-hidden`-Bestellzettel geschlossen — der ist Druckvorlage, kein
   Hauptinhalt.
6. `karriere.html`: JobPosting-Schema von 1 auf alle 3 Stellen erweitert,
   `description` (Pflichtfeld bei Google, fehlte komplett) aus dem
   ohnehin sichtbaren `.stellen-desc`-Text übernommen, `employmentType`
   passend zu den Badges gesetzt (Bäcker/Konditor + Fachverkäufer:
   `["FULL_TIME","PART_TIME"]`, Aushilfe/Minijob: `PART_TIME`).
   `validThrough` ergänzt (Annahme: 1 Jahr ab `datePosted`, also
   2027-04-04) — das ist eine Annahme, keine bestätigte Angabe des
   Kunden. **Sollte eine Stelle vorher besetzt sein, muss das Schema
   (oder zumindest `validThrough`) manuell angepasst/entfernt werden**,
   sonst zeigt Google eine längst besetzte Stelle als offen an.
7. Open Graph + Twitter-Card-Meta auf allen 10 Seiten ergänzt (`og:type`,
   `og:site_name`, `og:locale`, `og:title`, `og:description`, `og:url`,
   `og:image`, `twitter:card` = `summary_large_image` + Title/Description/
   Image). `og:title`/`og:description` sind identisch zu Title/Meta-
   Description der jeweiligen Seite (keine neue Copy erfunden). Als
   `og:image` je Seite das bereits vorhandene Hero-/Teaser-Bild (1600w-
   Variante) verwendet; für impressum.html/datenschutz.html (kein eigenes
   Bild, minimales Dark-Layout) ein generisches Marken-Bild
   (`brotzeit-rostock-brot-handwerk-baeckerei.jpg`) als Fallback. Alle
   9 referenzierten Bildpfade vor dem Einbau auf Existenz geprüft.
8. Neuer Abschnitt „Redirects (301) — vor dem Domain-Umzug einrichten"
   in claude.md: Kundenliste (Facebook/Instagram/mailto bewusst
   herausgefiltert, wie vom Kunden angemerkt) + Codex-Fund (`/contact`)
   zu einer Tabelle zusammengeführt, dazu fertige Apache-`.htaccess`- und
   Nginx-Snippets. Noch NICHT als aktive Datei im Projekt abgelegt, da
   der tatsächliche Servertyp beim Kunden noch nicht bekannt ist.
9. Deploy-Checkliste: neuer Punkt „301-Weiterleitungen einrichten" unter
   „Vor dem ersten echten Livegang zusätzlich prüfen".
10. Getestet in der Vorschau (localhost:8742): auf allen 10 Seiten `<main>`
    vorhanden, genau 1 `<h1>` pro Seite, `aria-current="page"` korrekt
    gesetzt, kein horizontales Scrollen, Konsole fehlerfrei.
    karriere.html: JSON-LD parst fehlerfrei, alle 3 JobPostings mit
    `description` vorhanden. Alle 9 neu referenzierten OG-Bildpfade
    existieren auf der Festplatte.

**Bewusst nicht umgesetzt:** Speisekarte/Preisliste JS→statisch (Kunden-
entscheidung, siehe oben), `llms.txt` (laut Codex selbst unkritisch),
Bakery-Entity-Verfeinerung (`@id`, `parentOrganization` zu Sparre,
`logo`) — kleinere Nice-to-haves, noch nicht angefragt.

### 2026-07-13 (allerspätest) — SEO/GEO-Pass auf torten.html & speisekarte.html, Long-Tail-Keywords via CSV/ChatGPT/Grok geprüft

**Auslöser:** Nach der index.html-Optimierung lieferte der Kunde weitere
Recherche-Grundlagen: ein CSV mit Keyword/Title/Meta-Vorschlägen sowie
zwei zusätzliche KI-Analysen (ChatGPT, Grok) zur SEO/GEO-Strategie.
Auftrag: prüfen, was übernommen werden kann — aber jede Umsetzung erst
nach explizitem GO des Kunden.

**Wichtige Entscheidung (per Rückfrage geklärt):** Das CSV schlug u. a.
komplett neue URLs vor (`/individuelle-toertchen-torten`, `/fruehstueck`,
`/brot-und-backwaren`, `/torte-anfragen`). Das hätte inhaltlich mit den
bereits bestehenden Seiten `torten.html` und `speisekarte.html`
konkurriert und Rankingsignale gespalten statt gebündelt, plus Aufwand an
Navigation/Footer/Sitemap auf allen Seiten. Kunde entschied sich (nach
Nachfrage mit 3 Optionen) für „bestehende Seiten stärken" — KEINE neuen
URLs/Seiten, stattdessen Long-Tail-Keywords und FAQ-Erweiterungen direkt
in `torten.html` und `speisekarte.html` einfließen lassen.

**Umgesetzte Schritte:**
1. `shared.css` — neue, seitenübergreifende `.faq`/`.faq-intro`/
   `.faq-list`/`.faq-item`-Klassen ergänzt (natives `<details>/<summary>`,
   Hintergrund `var(--white)` für Kontrast auf hellen wie sandfarbenen
   Section-Hintergründen, `+`-Icon dreht sich beim Öffnen). Bewusst in
   `shared.css` statt seitenspezifisch, da sowohl torten.html als auch
   speisekarte.html das gleiche Muster brauchen — anders als index.html,
   das sein eigenes, komplett unabhängiges Inline-Style hat und seine
   FAQ-CSS deshalb schon vorher dort separat bekam (siehe voriger
   Eintrag).
2. `index.html` — Title/Meta auf „individuelles Frühstück & handgemachte
   Törtchen" geschärft (Long-Tail-Begriffe aus CSV/ChatGPT/Grok-Analyse,
   niedrige Konkurrenz laut allen drei Quellen). „handgemachte Törtchen"
   in Über-uns-Teaser und Angebot-Karte „Bäckerei & Konditorei" ergänzt.
   FAQ-Frage 1 von „kleine Törtchen" auf „handgemachte Törtchen"
   geschärft, FAQ-Antwort 2 um „individuelles Frühstück am Vögenteich"
   ergänzt — sichtbarer Text und FAQPage-Schema dabei identisch gehalten.
3. `torten.html` — Title/Meta von „Individuelle Torten Rostock … & Törtchen"
   auf „Individuelle Torten & handgemachte Törtchen Rostock" umgestellt.
   Intro-Lead (Areal 30) und `seo-keyword-panel`-Text (Areal 40) um
   „individuelle Törtchen Rostock"/„handgemachte Törtchen Rostock" als
   eigenständige Phrasen ergänzt (vorher nur „individuelle Torten und
   Törtchen" als ein Begriff). Neue FAQ-Sektion (Areal 55, zwischen
   Saisonales [50] und Anfrage-Formular [60]) mit 3 Fragen zu Hochzeits-/
   Geburtstagstorten, handgemachten Törtchen und Vorlaufzeit (7–10 Tage,
   aus den bereits vorhandenen Anfrage-Infos übernommen). FAQPage als
   drittes Element in das bestehende `@graph` (BreadcrumbList + ItemList)
   ergänzt, nicht als separates `<script>` — folgt damit dem auf dieser
   Seite bereits etablierten `@graph`-Muster.
4. `speisekarte.html` — Title/Meta von „Frühstück & Speisekarte" auf
   „Individuelles Frühstück Rostock" geschärft (Frühstück war zwar schon
   prominent, aber ohne das Wort „individuell", das laut allen drei
   Analysen der eigentliche Long-Tail-Hebel ist). Page-Teaser-Lead und
   Sektion-1-Lead (Areal 20/30) um „individuelles Frühstück" ergänzt.
   Neue FAQ-Sektion (Areal 75, zwischen Saisonales & Neuheiten [70] und
   Öffnungszeiten-Reminder [80]) mit 3 Fragen zu individuellem Frühstück,
   Frühstückskonfigurator-Bestellung (QR-Code/Kasse, keine neue
   Behauptung, nur bereits vorhandene Funktionsweise beschrieben) und
   Bäcker-Sushi/Canapés. FAQPage ebenfalls als drittes `@graph`-Element
   ergänzt (Menu-Schema war dort schon vorhanden).
5. **Bewusst NICHT übernommen:** die im CSV vorgeschlagene neue
   URL-Struktur (siehe Entscheidung oben) sowie Google-Business-Profil-
   Empfehlungen aus allen drei Analysen — Letzteres ist kein Website-Code,
   sondern eine Aufgabe des Kunden selbst auf google.com/business.
6. claude.md aktualisiert: Areal-Tabellen von torten.html (Areal 55) und
   speisekarte.html (Areal 75) um die neuen FAQ-Sektionen ergänzt.
7. Getestet in der Vorschau (localhost:8742): auf beiden Seiten JSON-LD
   `@graph` parst fehlerfrei (torten.html: BreadcrumbList + ItemList +
   FAQPage; speisekarte.html: BreadcrumbList + Menu + FAQPage), je 3
   FAQ-Items im DOM, keine 404s bei Preisliste/Konfigurator-Assets
   (json/preise.js, js/qrcode.min.js) auf speisekarte.html. Tablet (768px)
   und Mobile (375px) auf beiden Seiten geprüft: kein horizontales
   Scrollen. Konsole auf allen Breiten und beiden Seiten fehlerfrei.

**Offen für weitere Unterseiten:** ueber-uns.html, kontakt.html, canapes.html
und sushi.html haben noch keine FAQ-Sektion/FAQPage-Schema — bei Bedarf
gleiches Muster (shared.css `.faq`-Klassen bereits vorhanden) dort
nachziehen.

### 2026-07-13 (ganz spät) — robots.txt, sitemap.xml + erste SEO/GEO-Optimierung von index.html

**Auslöser:** Beim Durchsehen des kompletten Projektordners (nicht nur
`claude.md`) fiel auf, dass `SEO_VORBEREITUNG_BROTZEIT_ROSTOCK.md` (Stand
13.05.2026) unter „Nächste sinnvolle SEO-Schritte" Sitemap.xml und
robots.txt fordert — beide fehlten komplett und standen nirgends als
offener Punkt. Der Kunde bestätigte, beides direkt anzulegen, und legte
zusätzlich eine ausführliche, extern erstellte „SEO- und GEO-Strategie
2026"-Analyse vor (Marktanalyse Rostocker Bäckereien/Cafés, Keyword-
Cluster, GEO-Empfehlungen für KI-Suchmaschinen). Auftrag: index.html
danach als erste Seite SEO/GEO-optimieren, inkl. Verlinkung zur
Bäckerei Sparre (https://www.baeckerei-sparre.de/).

**Wichtige Einordnung der Kundenanalyse:** Die strukturellen Empfehlungen
(Definition-Lead-Sätze unter H2s, sichtbarer FAQ-Bereich mit FAQPage-
Schema, robots.txt die KI-Crawler nicht blockiert, kein Content hinter
JS/Akkordeons versteckt) wurden übernommen. Die in der Analyse als
Beispiel genannten konkreten Produktbegriffe eines Mitbewerbers (z. B.
„Apfel-Thymian-Schmalz mit Röstzwiebeln", „hausgemachter Fruchtjoghurt")
wurden bewusst NICHT übernommen, da sie nicht als tatsächliches Brotzeit-
Sortiment verifiziert sind — das wäre eine falsche Tatsachenbehauptung
auf der Website gewesen. Ebenso wurden die konkreten Prozentangaben der
Analyse (z. B. „40 % höhere KI-Zitierwahrscheinlichkeit") nicht als
Fakten in Website-Text übernommen, nur die daraus abgeleiteten
strukturellen Maßnahmen.

**Umgesetzte Schritte:**
1. `robots.txt` neu angelegt (Projekt-Root): `User-agent: * / Allow: /`
   plus explizite Allow-Einträge für GPTBot, ChatGPT-User, Google-
   Extended, ClaudeBot, anthropic-ai, PerplexityBot, CCBot — verhindert,
   dass die neue Website versehentlich für KI-Suchmaschinen (ChatGPT,
   Perplexity, Google AI Overviews, Claude) blockiert wird. Verweist per
   `Sitemap:`-Zeile auf `sitemap.xml`.
2. `sitemap.xml` neu angelegt: 9 der 10 Seiten gelistet (alle außer
   sushi.html, siehe Kommentar in der Datei — Seite trägt aktuell
   `noindex, follow` wegen Platzhalter-Sortennamen, ein gelistetes,
   aber nicht indexierbares Sitemap-Eintrag wäre ein widersprüchliches
   Signal an Google). `lastmod` auf 2026-07-13, `priority`/`changefreq`
   grob nach Seitenwichtigkeit gestaffelt (Start 1.0, Speisekarte 0.9,
   Torten 0.8, Canapés/Kontakt 0.7, Über uns 0.6, Karriere 0.5,
   Impressum/Datenschutz 0.3).
3. `index.html` — Hero-Sub (Areal 20) um „frisches Frühstück ab 7 Uhr"
   ergänzt (Frühstück fehlte bisher komplett im Hero-Text, obwohl es laut
   Kunde und SEO-Analyse das wichtigste USP ist).
4. `index.html` — Über-uns-Teaser (Areal 40) Fließtext zu einem
   Definition-Lead-Satz umgeschrieben („Die Brotzeit Rostock ist ein
   handwerkliches Café und eine Bäckerei am Vögenteich 24, hervorgegangen
   aus der traditionsreichen Bäckerei Sparre — …") und „Bäckerei Sparre"
   darin auf `https://www.baeckerei-sparre.de/` verlinkt (`target="_blank"
   rel="noopener"`, eigene Linkfarbe/Hover ergänzt, da die Sektion einen
   dunklen Hintergrund hat und bisher keine Link-Styles definiert waren).
   Bewusst nur EIN Sparre-Link auf der Seite (nicht zusätzlich in der
   Angebot-Kachel „Bäckerei & Konditorei", die Sparre ebenfalls textlich
   erwähnt) — ein natürlicher Kontext-Link pro externer Domain reicht,
   mehrere dicht beieinander wirken schnell wie Link-Spam.
5. `index.html` — neue Sektion „FAQ" (Areal 65, zwischen Torten [60] und
   Öffnungszeiten [70]) eingefügt: 3 Frage/Antwort-Paare als natives
   `<details>/<summary>` (kein JS nötig, Inhalt liegt vollständig im DOM
   und ist damit für Google UND KI-Crawler lesbar — anders als JS-
   nachgeladener Akkordeon-Inhalt, den die Kundenanalyse zurecht als
   Risiko nennt). Fragen/Antworten ausschließlich aus bereits verifizierten
   Fakten der Website formuliert (Frühstück ab 7 Uhr, individuelle Torten
   nach Wunsch, Konditorei der Bäckerei Sparre, Anlässe Hochzeit/
   Geburtstag/Jugendweihe/Taufe). Neue CSS-Klassen `.faq`/`.faq-intro`/
   `.faq-list`/`.faq-item` im bestehenden Inline-`<style>`-Block von
   index.html ergänzt (sandfarbener Hintergrund, passt in die Abfolge
   dunkel→hell→cream→sand→dunkel zwischen Torten und Öffnungszeiten),
   inkl. Mobile-Anpassung in der 900px-Media-Query.
6. `index.html` — zweiter JSON-LD-Block `FAQPage` mit `mainEntity` für
   alle 3 Fragen ergänzt (Text 1:1 identisch zum sichtbaren Seiteninhalt,
   wie von Google für FAQ-Rich-Snippets gefordert). Bestehendes
   `Bakery`-Schema unverändert gelassen (Adresse, Öffnungszeiten,
   servesCuisine, sameAs waren bereits vollständig).
7. claude.md aktualisiert: Areal-Tabelle von index.html um Areal 65 (FAQ)
   ergänzt, Deploy-Checkliste um robots.txt/sitemap.xml ergänzt (inkl.
   Hinweis, dass ein späterer Cloudflare-Bot-Fight-Mode dieselben
   KI-User-Agents zusätzlich freischalten müsste, da robots.txt keine
   Firewall-Blockade ersetzt).
8. Getestet in der Vorschau (localhost:8742): beide JSON-LD-Blöcke
   parsen fehlerfrei (`Bakery` + `FAQPage`), Sparre-Link zeigt auf die
   korrekte URL und ist auf dem dunklen Hintergrund gut lesbar (Farbe
   `var(--brown-light)`, unterstrichen), FAQ-Akkordeon öffnet/schließt
   und zeigt den Antworttext im DOM. Tablet (768px) und Mobile (375px)
   geprüft: kein horizontales Scrollen, FAQ-Sektion nutzt die reduzierten
   Innenabstände aus der Media-Query. Konsole auf allen drei Breiten
   fehlerfrei.

**Offen für die weiteren Unterseiten:** Diese SEO/GEO-Analyse betrifft
laut Kundenwunsch zunächst nur `index.html`. Torten-, Speisekarte- und
Über-uns-Seite haben teils schon eigene „seo-note"-Absätze und
lokalisierte Begriffe (Dierkow, Toitenwinkel, Warnemünde), aber noch
keine FAQ-Schemas oder Definition-Lead-Sätze — bei Bedarf gleiches Muster
dort nachziehen.

### 2026-07-13 (noch später) — Laden-E-Mail-Adresse auf info@brotzeit-rostock.de umgestellt

**Wunsch:** Nachdem beim Impressum/Datenschutz-Update auffiel, dass die
Brotzeit-Ladenseiten `maxi@sparre.de` verwenden, während Impressum/
Datenschutz korrekt die GmbH-Adresse `mail@sparre.de` zeigen, bestätigte
der Kunde den Unterschied als gewollt und bat darum, die Laden-Adresse
auf eine eigene Brotzeit-Domain-Adresse umzustellen: `maxi@sparre.de` →
`info@brotzeit-rostock.de`.

**Umgesetzte Schritte:**
1. Alle Vorkommen von `maxi@sparre.de` in den 7 betroffenen HTML-Dateien
   ersetzt (index.html 3×, speisekarte.html 1×, torten.html 3×,
   karriere.html 2×, kontakt.html 3×, canapes.html 3×, sushi.html 3× —
   18 Ersetzungen insgesamt): mailto-Links, sichtbarer E-Mail-Text,
   Formular-Actions und die `email`-Felder in den JSON-LD-Schemas auf
   index.html und kontakt.html.
2. `mail@sparre.de` in impressum.html und datenschutz.html bewusst NICHT
   angefasst — das ist die korrekte rechtliche Kontaktadresse der
   Bäckerei Sparre GmbH & Co. KG, unabhängig von der Laden-Adresse.
3. claude.md aktualisiert: alle vorausschauenden Spec-Stellen unter
   „Seiten — Anweisungen" und „Technische Anforderungen" (9 Stellen) auf
   die neue Adresse umgestellt. Die beiden Notizen zum Impressum/
   Datenschutz-Unterschied (Seite 6 oben und der vorherige
   Arbeitsprotokoll-Eintrag) ebenfalls angepasst bzw. mit Update-Vermerk
   versehen. Historische Arbeitsprotokoll-Einträge vor diesem Eintrag
   bewusst NICHT rückwirkend umgeschrieben — sie beschreiben korrekt, was
   zum jeweiligen Zeitpunkt der Fall war.
4. Getestet in der Vorschau: torten.html — Formular-Action und
   sichtbarer E-Mail-Link zeigen `info@brotzeit-rostock.de`; impressum.html
   — mailto-Link zeigt weiterhin unverändert `mail@sparre.de`. Konsole
   fehlerfrei.

**Hinweis:** `info@brotzeit-rostock.de` muss beim E-Mail-Provider des
Kunden tatsächlich eingerichtet sein (Postfach oder Weiterleitung),
sonst laufen alle mailto-Links und die späteren Formspree-Formulare
(kontakt.html, karriere.html) ins Leere. Das ist keine Website-seitige
Aufgabe mehr, sondern beim Hoster/E-Mail-Anbieter des Kunden zu prüfen.

### 2026-07-13 (später) — Echte Daten in Impressum und Datenschutz eingetragen

**Wunsch:** Die Platzhaltertexte in impressum.html und datenschutz.html
durch die echten Angaben des Kunden ersetzen. Quelle: zwei Word-Dokumente
in `impress-datenschutz/` (`Impressum Sparre.docx`,
`Datenschutzerklärung - Sparre.docx`).

**Wichtige Erkenntnis beim Lesen der Dokumente:** Rechtlich verantwortlich
ist nicht „Maximilian Sparre" (wie im bisherigen Platzhalter angenommen),
sondern die **Bäckerei Sparre GmbH & Co. KG**, Geschäftsführer Michael
Sparre, mit Maximilian Sparre als einem von drei Prokuristen. Die
Kontaktdaten der GmbH & Co. KG (Erich-Schlesinger-Str. 49, Telefon 0381
36 46 70 00, mail@sparre.de) unterscheiden sich bewusst von den
Brotzeit-Ladenkontaktdaten (Am Vögenteich 24, 0381 87729509,
damals maxi@sparre.de), die auf allen anderen Seiten der Website stehen
— das ist rechtlich korrekt so (Impressum/Datenschutz müssen die
haftende juristische Person nennen, nicht zwingend die Filiale) und
keine Inkonsistenz. **Update, noch am selben Tag:** Der Kunde bestätigte
den Unterschied als gewollt und bat direkt darum, die Laden-E-Mail-Adresse
von `maxi@sparre.de` auf `info@brotzeit-rostock.de` zu ändern — siehe
nächster Eintrag.

**Umgesetzte Schritte:**
1. Beide .docx-Dateien mit `python-docx` ausgelesen (Text pro Absatz
   extrahiert, in UTF-8-Dateien zwischengespeichert statt direkt in die
   Bash-Konsole zu drucken — Windows-Terminal mangelt Umlaute sonst zu
   „�", siehe bereits bekanntes Problem aus früheren Sessions).
2. `impressum.html`: `.legal-container`-Inhalt komplett ersetzt —
   Angaben gemäß § 5 TMG (GmbH & Co. KG statt Einzelperson), „Vertreten
   durch" (Geschäftsführer + 3 Prokuristen, neuer Abschnitt), Kontakt,
   Registereintrag (Amtsgericht Rostock, HRA 3378), Umsatzsteuer-ID
   (DE 284855903), Verantwortlich für den Inhalt — Rechtsgrundlage von
   „§ 55 Abs. 2 RStV" (veraltet) auf „§ 18 Abs. 2 MStV" (aktuell,
   Medienstaatsvertrag hat RStV abgelöst) korrigiert, wie im Kundendokument
   angegeben. Neuer Abschnitt „Für verwendete Texte und Bilder"
   (Copyright-Hinweis). Streitschlichtung- und Haftungshinweis-Text durch
   die vom Kunden vorgegebene Formulierung ersetzt (vorher eigene
   Platzhalter-Formulierung). Alle `legal-placeholder`-Spans entfernt, da
   nichts mehr offen ist.
3. `datenschutz.html`: `.legal-container`-Inhalt komplett ersetzt — der
   Hinweis-Kasten „wird durch Datenschutzgenerator ergänzt" ist raus,
   stattdessen die vollständige, vom Kunden gelieferte Datenschutz-
   erklärung mit 9 nummerierten Hauptabschnitten und rund 30
   Unterabschnitten (Datenschutz auf einen Blick, Pflichtinformationen,
   Datenschutzbeauftragter, Datenerfassung, Soziale Medien, Analyse-Tools,
   Newsletter, Plugins & Tools, Zahlungsanbieter). Bewusst 1:1 übernommen,
   OHNE Abschnitte zu kürzen, die aktuell keine Entsprechung auf der
   Website haben (z. B. PayPal, Sofortüberweisung, Newsletter,
   Kommentarfunktion, Registrierung) — das Kürzen einer Datenschutz-
   erklärung ist eine juristische Entscheidung, die nur der Kunde bzw.
   dessen Rechtsberatung treffen sollte, nicht Claude eigenmächtig.
   Bare URLs aus dem Word-Dokument in klickbare `<a>`-Links umgewandelt
   (mit `target="_blank" rel="noopener noreferrer"`, wie site-weiter
   Standard bei externen Links). Offensichtlichen Tippfehler im
   Quelldokument still korrigiert („Telefon: Telefon: …" → „Telefon: …").
4. claude.md aktualisiert: Abschnitte 6 und 7 unter „Seiten — Anweisungen"
   beschreiben jetzt den echten Stand (inkl. Hinweis auf die bewusst
   abweichenden Kontaktdaten), `impress-datenschutz/` in der
   Deploy-Checkliste als „nicht hochladen" ergänzt, der erledigte TODO-
   Punkt „Impressum/Datenschutz-Platzhaltertexte" aus „Vor dem ersten
   echten Livegang zusätzlich prüfen" entfernt.
5. Getestet in der Vorschau: impressum.html — alle Angaben korrekt
   gerendert (Firma, Vertretung, Kontakt, Register, USt-ID, Streit-
   schlichtung, Haftungshinweis), kein horizontales Scrollen auf Mobile
   (375px); datenschutz.html — alle 9 Hauptabschnitte + 30
   Unterabschnitte vorhanden, 15 externe Links korrekt gesetzt, kein
   horizontales Scrollen auf Mobile. Konsole auf beiden Seiten fehlerfrei.

### 2026-07-13 — Neue Seite sushi.html + eigener Navigationspunkt

**Wunsch:** Bäcker-Sushi sollte ursprünglich unter „Canapés & Sushi" in
der Navigation zusammengefasst werden. Nach kurzer Abwägung (Claude riet
zu getrennten Seiten, Kunde stimmte zu: „Canapés & Sushi" klingt nach
echtem Sushi, verwässert außerdem die Suchintention beider Seiten)
stattdessen eine eigene `sushi.html` nach dem Vorbild von canapes.html,
mit eigenem Navigationspunkt von Anfang an.

**Bildquelle:** `images/sushi/` — 11 freigestellte Produktfotos
(transparentes PNG, 3000×1996px) vom Kunden, MZ6_xxxx_clipped-Dateinamen
(professionell freigestellt, kein Studio-Hintergrund). Anders als bei den
Canapé-Instagram-Grafiken ist HIER kein Sortenname im Bild eingebrannt.

**Wichtige Entscheidung — Sortennamen unbekannt:**
1. Der Kunde kennt die genauen Sorten noch nicht → Platzhalter „Röllchen
   01"–„11" als Kachel-Titel und in den Alt-Texten eingesetzt, mit
   HTML-Kommentar `<!-- TODO: echte Sortennamen eintragen -->` direkt im
   Code markiert.
2. Da eine Seite mit elf Mal „Röllchen 0X" schlecht für Google ist,
   `<meta name="robots" content="noindex, follow">` gesetzt statt der
   sonst üblichen `index, follow` — die Seite bleibt darüber intern
   erreichbar (verlinkt, `follow`), taucht aber nicht in der
   Google-Suche auf, bis die echten Namen eingetragen sind. Auf JSON-LD
   `ItemList` mit Fake-Namen bewusst verzichtet (nur BreadcrumbList).
   Als Punkt in „Vor dem ersten echten Livegang zusätzlich prüfen"
   dokumentiert, damit das nicht vergessen wird.

**Umgesetzte Schritte:**
1. Alle 11 PNGs mit Python/Pillow auf weißem Hintergrund geflacht (RGBA
   → RGB, echte Transparenz vorhanden, nicht nur schwarzer Hintergrund)
   und in die vier Standardbreiten skaliert, SEO-Name
   `brotzeit-rostock-baecker-sushi-{01–11}.jpg`.
2. `sushi.html` neu angelegt, strukturell wie canapes.html: Nav (Areal 10,
   GLOBAL), Einzelbild-Teaser mit einem der neuen Fotos (Areal 20, kein
   Slideshow-JS), Einleitung nur Text (Areal 30), 3-spaltige Galerie mit
   11 Kacheln (Areal 40) — anders als bei canapes.html MIT Text-Overlay
   (Farbverlauf + Titel), da hier kein Text im Bild steht, Bestellformular
   (Areal 50, gleiche Struktur wie canapes.html, IDs mit Präfix `s-`),
   Footer (Areal 60, GLOBAL).
3. Neuer Navigationspunkt „Bäcker-Sushi" in ALLEN 9 bestehenden
   HTML-Dateien ergänzt (nav-links, nav-mobile, Footer „Angebot"-Spalte),
   Position zwischen Canapés und Über uns — per Python-Skript wie beim
   Canapés-Rollout, diesmal gleich mit Zeilenumbruch-verankerter Suche
   (keine Wiederholung des letzten Bugs). Einzige Ausnahme: canapes.html
   selbst brauchte einen manuellen Sonderfall, weil dort der
   Canapés-Link `class="active"` trägt und die generische Suche deshalb
   nicht traf — mit zwei gezielten Edits nachgezogen.
4. speisekarte.html: Bäcker-Sushi-Karte (Sektion 1A, vorher `<article>`,
   nicht klickbar) zu `<a href="sushi.html">` umgebaut, CTA-Text auf
   „Alle Sorten & Bestellung →" geändert. Bäcker-Sushi-Kachel im
   „02 · Neuheiten"-Block (Sektion 2, vorher Link zu
   `kontakt.html#kontakt-heading` mit Platzhalterbild-Kommentar) zeigt
   jetzt auf `sushi.html` mit einem der echten neuen Fotos. Hinweistext
   unter der Kartengrid entsprechend umformuliert (verweist jetzt auf
   beide neuen Seiten, betont dass nur noch die Preise fehlen).
5. claude.md aktualisiert: neuer Abschnitt „9. sushi.html", neue
   Areal-Tabelle, „Reihenfolge"-Hinweis, Deploy-Checkliste auf 10 Seiten /
   49 Bilder pro Größenordner, neuer Punkt in „Vor dem ersten echten
   Livegang zusätzlich prüfen" (Platzhalter-Namen + robots-Umstellung).
6. Getestet in der Vorschau: sushi.html — 11 Kacheln, alle Bilddateien
   erreichbar (200 OK), `noindex, follow` korrekt gesetzt, Nav zeigt alle
   7 Punkte, kein horizontales Scrollen auf Mobile (375px); index.html
   und speisekarte.html — Nav/mobiles Menü/Footer zeigen „Bäcker-Sushi"
   an der richtigen Stelle; canapes.html — „Canapés" bleibt aktiv,
   „Bäcker-Sushi" ohne active-Klasse; beide speisekarte.html-Kacheln
   verlinken korrekt auf sushi.html. Konsole überall fehlerfrei.

**Wichtig für Deploy:** `sushi.html` ist eine neue, 10. HTML-Datei. 11
neue Bildnamen liegen zusätzlich in `images/480|960|1600|2800/` (49 statt
38 Dateien pro Ordner). `images/sushi/` (Rohdateien) wird von der Website
nicht referenziert, nur als Quelle genutzt. **Vor dem Livegang unbedingt
die echten Sortennamen eintragen und robots auf `index, follow`
umstellen** (siehe Deploy-Checkliste) — sonst bleibt die Seite dauerhaft
für Google unsichtbar.

### 2026-07-12 (nachts) — Favicon eingebaut

**Wunsch:** Favicon-Paket aus `favicon/` einbauen, inkl. der vom Nutzer
mitgelieferten `<link>`/`<meta>`-Tags.

**Umgesetzte Schritte:**
1. Sechs benötigte Dateien aus `favicon/` in den Projekt-Root kopiert
   (`favicon.ico`, `favicon.svg`, `apple-touch-icon.png`,
   `icon-192x192.png`, `icon-512x512.png`, `site.webmanifest`) — die vom
   Nutzer gelieferten Tags und `site.webmanifest` referenzieren alles mit
   root-absoluten Pfaden (`/favicon.ico` usw.), die Dateien müssen also im
   Root der Domain liegen, nicht in einem Unterordner. `preview.png` aus
   `favicon/` wird nirgends referenziert, bleibt nur als Vorschau liegen.
2. Die 5 vom Nutzer genannten Zeilen (`icon` ×2, `apple-touch-icon`,
   `manifest`, `theme-color`) per Python-Skript in ALLEN 9 HTML-Dateien
   direkt nach der `viewport`-Meta-Zeile eingefügt (favicon zählt als
   GLOBAL, wie Navigation/Footer — muss auf jeder Seite identisch sein).
3. Getestet in der Vorschau: index.html — alle 4 `<link>`-Tags +
   `theme-color` korrekt gesetzt, alle 6 Icon-/Manifest-Dateien laden mit
   200 OK unter den root-absoluten Pfaden; canapes.html und impressum.html
   stichprobenartig geprüft, Konsole überall fehlerfrei.
4. claude.md aktualisiert: neuer Punkt unter „Technische Anforderungen"
   (mit dem exakten Code-Snippet, damit neue Seiten es 1:1 übernehmen),
   Favicon-Paket in der Deploy-Checkliste ergänzt (muss hochgeladen
   werden, root-absolute Pfade beachten).

### 2026-07-12 (abends, später) — canapes.html in die Hauptnavigation aufgenommen

**Wunsch:** Canapés jetzt doch fest in die Navigation integrieren (nicht
mehr nur über die Kachel auf speisekarte.html erreichbar).

**Umgesetzte Schritte:**
1. Da Navigation UND Footer als GLOBAL-Areale gelten (Areal 10 bzw. das
   jeweils letzte Areal jeder Seite, siehe „Areale (Prompt-CMS)"), musste
   der neue Link `<a href="canapes.html">Canapés</a>` in ALLEN 9
   HTML-Dateien an drei Stellen ergänzt werden: `.nav-links` (Desktop),
   `.nav-mobile` (mobiles Overlay-Menü) und Footer-Spalte „Angebot".
   Position jeweils zwischen „Torten" und „Über uns" — passt inhaltlich
   am besten zwischen die beiden anderen Konditorei/Bestell-Seiten.
2. Per Python-Skript umgesetzt (27 Einzel-Einfügungen: 9 Seiten × 3
   Stellen) statt einzelner manueller Edits. Dabei einen Bug im ersten
   Durchlauf gefunden und korrigiert: die Suche nach der unveränderten
   Mobile-Menü-Zeile (`  <a href="torten.html">Torten</a>`, 2 Leerzeichen
   Einrückung) traf ungewollt auch als Teilstring auf die bereits
   eingefügte Footer-Zeile (6 Leerzeichen Einrückung, „  " ist Teilstring
   von „      "), wurde dadurch als 2× vorkommend erkannt und sicherheits-
   halber übersprungen (kein Datenverlust, nur unvollständig). Fix: Suche
   mit vorangestelltem Zeilenumbruch verankert, damit nur echte
   Zeilenanfänge zählen — danach fehlerfrei für alle 8 betroffenen Seiten
   nachgezogen.
3. Auf canapes.html selbst bekommt der neue Canapés-Link in `.nav-links`
   und `.nav-mobile` die Klasse `active` (aktuelle Seite), im Footer wie
   bei allen anderen Seiten keine Auszeichnung (Footer kennzeichnet nie
   die aktuelle Seite). Auf torten.html blieb „Torten" korrekt aktiv,
   „Canapés" dort ohne active-Klasse.
4. claude.md aktualisiert: Areal-Tabelle, Seiten-Anweisungen-Eintrag und
   „Reihenfolge"-Hinweis passen jetzt zum neuen Stand (nicht mehr „noch
   nicht in der Navigation").
5. Getestet in der Vorschau: index.html — Desktop-Nav, mobiles Menü
   (Burger-Klick, alle 6 Links inkl. Canapés sichtbar) und Footer-Spalte
   „Angebot" zeigen alle sechs Einträge in der richtigen Reihenfolge;
   torten.html und canapes.html — active-Klasse jeweils korrekt auf der
   eigenen Seite; impressum.html und karriere.html stichprobenartig
   geprüft. Kein horizontales Scrollen auf Mobile (375px), Konsole
   überall fehlerfrei.

### 2026-07-12 (abends) — Neue Seite canapes.html (Galerie + Bestellformular)

**Wunsch:** Eine neue Unterseite für Canapés, ähnlich aufgebaut wie
torten.html: Teaser (wiederverwendetes Bild aus der index.html-
Slideshow, keine neuen Fotos), etwas Einleitungstext, eine 3×4-Galerie
aus 12 vorhandenen Bildern (SEO-Umbenennung nötig), am Ende ein eigenes
Bestellformular. Verlinkung vorerst NUR über die Canapé-Kachel auf
speisekarte.html, noch nicht in der Hauptnavigation (kommt evtl. später).

**Bildquelle:** `images/cannapes/` — 12 Instagram-Carousel-Screenshots
(853×853px, PNG) vom Kunden: 1 Übersichts-Folie „Canapés — alle Sorten"
+ 11 Sorten-Folien (Serranoschinken, Gouda, Putenbrust, Tomate
Mozzarella, französische Salami, Leerdammer, Pastrami, Bonbel
Butterkäse, Räucherlachs, Kochschinken, Tomate Feta). Jede Folie trägt
Sorten-Name und Zutaten bereits als Grafik-Text im Bild — deshalb bewusst
KEIN zusätzliches Text-Overlay auf den Galerie-Kacheln.

**Umgesetzte Schritte:**
1. Alle 12 PNGs mit Python/Pillow auf weißem Hintergrund geflacht (RGBA
   → RGB) und in die vier Standardbreiten 480/960/1600/2800 skaliert
   (Quelle nur 853px breit, 1600w/2800w daher identisch zu 960w — kein
   Hochskalieren), SEO-gerecht benannt nach dem Muster
   `brotzeit-rostock-canape-{sorte}.jpg` bzw. `-canapes-vielfalt.jpg`
   für die Übersichtsfolie. Ablage wie gewohnt in den globalen
   Größenordnern `images/480|960|1600|2800/`.
2. Als Teaserbild `brotzeit-rostock-mittagstisch-veggie-rostock.jpg`
   wiederverwendet (eines der 4 Hero-Slideshow-Bilder auf index.html,
   zeigt einen herzhaften Snack) — dieses Bild hatte bisher gar keine
   Größenvarianten (nur Root-Version, direkt von index.html referenziert,
   noch ohne srcset), deshalb dort ebenfalls in 480/960/1600/2800
   nachgezogen. index.html selbst bewusst NICHT angefasst (nicht Teil
   der Anfrage), nutzt weiterhin die alte Einzelbild-Version.
3. `canapes.html` neu angelegt, strukturell an torten.html orientiert:
   Nav/Mobile-Menü (Areal 10, GLOBAL), Einzelbild-Teaser (Areal 20, kein
   Slideshow-JS nötig), Einleitung nur Text (Areal 30), 3×4-Bildergalerie
   (Areal 40, 12 Kacheln, `aspect-ratio 1/1`, alle verlinken auf
   `#anfrage`), Bestellformular (Areal 50, dark, 2-spaltig wie torten.html
   Anfrage-Sektion: Name/E-Mail/Wunschtermin/Stückzahl/Nachricht,
   `mailto:maxi@sparre.de`, KEIN Formspree — nicht angefragt für diese
   Seite), Footer (Areal 60, GLOBAL). JSON-LD mit BreadcrumbList + ItemList
   der 11 Sorten. Von Anfang an mit Areal-Markern angelegt (nicht
   nachträglich wie bei den ersten 8 Seiten).
4. speisekarte.html: Canapé-Kachel in Sektion 1A von `<article>` (nicht
   klickbar) zu `<a href="canapes.html">` umgebaut, CTA-Text von „Auf
   Bestellung" auf „Alle Sorten & Bestellung →" geändert. Hinweistext
   darunter angepasst — erwähnt jetzt die neue Canapé-Galerie, „Fotos
   folgen in Kürze" gilt nur noch für Bäcker-Sushi.
5. claude.md aktualisiert: neuer Abschnitt „8. canapes.html" unter
   „Seiten — Anweisungen", neue Areal-Tabelle, Hinweis bei „Reihenfolge",
   dass die Seite bewusst noch nicht in der Navigation ist (inkl. Anleitung
   für später), Deploy-Checkliste auf 9 Seiten / 38 Bilder pro
   Größenordner aktualisiert.
6. Getestet in der Vorschau: 12 Galerie-Kacheln vorhanden, alle Bild-
   Dateien erreichbar (200 OK), 3 Spalten Desktop / 2 Spalten Tablet
   (768px) / 1 Spalte Mobile (375px), kein horizontales Scrollen auf
   keiner Breite, Canapé-Kachel auf speisekarte.html zeigt korrekt auf
   canapes.html, Konsole fehlerfrei auf beiden Seiten.

**Wichtig für Deploy:** `canapes.html` ist eine neue, 9. HTML-Datei.
12 neue Bildnamen (Canapés) + 1 nachgezogenes Bild (Veggie-Teaser) liegen
jetzt zusätzlich in `images/480|960|1600|2800/` (38 statt 25 Dateien pro
Ordner). `images/cannapes/` (Rohdateien) wird von der Website nicht
referenziert, nur als Quelle genutzt.

### 2026-07-12 (nach den Areal-Markern) — Bugfix: index.html-Footer auf 4-Spalten-Struktur der Unterseiten angeglichen

**Problem (beim Einbau der Areal-Marker entdeckt):** index.html hatte
noch einen alten, einzeiligen Footer (`#footer`, Klassen `.footer-logo`/
`.footer-links`/`.footer-copy`) statt der 4-Spalten-Struktur, die alle 7
Unterseiten längst verwenden (`#main-footer`, `.footer-top`/
`.footer-brand`/`.footer-col`/`.footer-bottom`/`.footer-legal`). Dadurch
fehlten auf der Startseite die Links zu Impressum und Datenschutz —
relevant für die Impressumspflicht, da diese von JEDER Seite erreichbar
sein müssen.

**Umgesetzte Schritte:**
1. index.html lädt kein `shared.css` (eigenständiger, vollständiger
   Inline-`<style>`-Block seit jeher — das ist so gewollt, siehe „Struktur
   jeder Unterseite" oben, index.html ist die Referenz, aus der
   shared.css für die Unterseiten extrahiert wurde). Deshalb die
   Footer-CSS-Regeln 1:1 aus shared.css in den Inline-`<style>`-Block von
   index.html übernommen (Selektor `#footer` → `#main-footer`), inkl.
   beider Responsive-Breakpoints (900px: 2 Spalten; 560px: 1 Spalte).
   Alle verwendeten CSS-Variablen (`--warm-dark`, `--brown-light`,
   `--font-display` etc.) waren bereits identisch zu shared.css vorhanden
   — keine Anpassung nötig.
2. Footer-HTML-Markup 1:1 von den Unterseiten übernommen: Marke +
   Kurztext, 3 Spalten (Angebot / Unternehmen / Öffnungszeiten), unten
   Copyright + Impressum-/Datenschutz-Links.
3. Geprüft in der Vorschau: 4 Spalten bei 1400px, 2 Spalten bei 768px
   (Tablet), 1 Spalte bei 375px (Mobile), Impressum- und Datenschutz-Link
   vorhanden und korrekt verlinkt, kein horizontales Scrollen auf keiner
   Breite, Konsole fehlerfrei.
4. claude.md aktualisiert: Hinweis im Areale-Abschnitt und der offene
   Punkt in „Offen / beim Kunden klären" entfernt, da erledigt.

### 2026-07-12 (nach dem Teaserbild-Tausch) — Prompt-CMS: Areal-Marker auf allen 8 Seiten + Methodik-Vorlage

**Idee vom Nutzer:** Jede Seite in benannte „Arbeitsareale" einteilen
(Header, Laufband, Torten-Bereich usw.), damit ein Kunde in einfacher
Sprache sagen kann „ändere Areal 5 auf der Startseite" und Claude sofort
weiß, welcher Codeblock gemeint ist. Zusätzlich: eine wiederverwendbare
Methodik daraus machen, die für ALLE künftigen Kundenprojekte gilt (nicht
nur Brotzeit) — die Kunden können i. d. R. kein HTML und pushen nur über
die GitHub-Desktop-App.

**Umgesetzte Schritte:**
1. Alle 8 HTML-Dateien strukturell erfasst (bestehende
   `<!-- ── SEKTION … ── -->`-Kommentare als Basis).
2. Areale zugeschnitten: Navigation (inkl. mobilem Menü) und Footer als
   „GLOBAL"-Areal je Seite, jede inhaltliche Sektion dazwischen als
   eigenes Areal. Nummerierung pro Seite eigenständig in Zehnerschritten
   (10, 20, 30 …) — die Lücken sind Absicht, damit später eingefügte
   Abschnitte eine Nummer dazwischen bekommen können, ohne alles
   umzunummerieren.
3. Marker per Python-Skript (schneller & weniger fehleranfällig als 49
   einzelne manuelle Edits) an die bestehenden Struktur-Kommentare
   angehängt, Format `[AREAL N: Kurzname]` — reiner HTML-Kommentar,
   unsichtbar für Besucher und Suchmaschinen. Insgesamt 49 Marker über
   alle 8 Seiten. Kein separater Schluss-Marker; ein Areal reicht bis zum
   nächsten gleichrangigen Struktur-Kommentar bzw. bis zum schließenden
   Tag des umschließenden Elements.
4. Neuen Abschnitt „Areale (Prompt-CMS)" in claude.md angelegt: Konzept-
   Erklärung, Nummerierungs-Logik, Global-vs-seitenspezifisch-Regel,
   volle Areal-Tabelle für alle 8 Seiten, Gesprächsablauf-Vorlage für
   vage Kundenanfragen.
5. **Dabei entdeckt (nicht verursacht):** Der Footer von `index.html`
   entspricht nicht der eigenen Spec „identisch zu den Unterseiten, 4
   Spalten" — er ist einzeilig und verlinkt weder Impressum noch
   Datenschutz. Als offener Punkt dokumentiert statt fälschlich als
   „GLOBAL identisch" markiert.
6. Kundenübergreifende Methodik in eigene neue Datei
   `PROMPT-CMS-METHODIK.md` ausgelagert (Repo-Root, NICHT Website-Bezug,
   nicht mit hochladen) — die 5-Schritte-Anleitung, um dasselbe Muster
   bei jedem neuen Kunden aufzusetzen, inkl. Hinweis auf den GitHub-
   Desktop-Workflow der Endkunden (kein Terminal, keine git-Befehle
   vorschlagen).
7. Getestet in der Vorschau: 6 von 8 Seiten stichprobenartig geladen
   (index, impressum, torten, datenschutz, karriere + vorher schon
   speisekarte/ueber-uns/kontakt im selben Bearbeitungsschritt), überall
   Konsole fehlerfrei, Nav-Links und Formulare weiterhin funktionsfähig
   — reine Kommentar-Ergänzung ändert nichts am Rendering.

**Wichtig:** `PROMPT-CMS-METHODIK.md` ist bewusst NICHT Brotzeit-
spezifisch formuliert und gehört nicht in die Deploy-Checkliste der
Website — sie ist Vorlage für zukünftige Kundenprojekte.

### 2026-07-12 (noch später) — index.html: Über-uns-Teaserbild ausgetauscht

**Wunsch:** Erstes Bild unter dem Hauptteaser (About-Strip-Sektion) gegen
`MHS06886_Brotzeit_Torten_Toertchen.jpg` aus `images/startseite/` tauschen,
inkl. aller Größen.

**Umgesetzte Schritte:**
1. Neues Foto (Team-Mitarbeiterin dekoriert Erdbeertörtchen an der Vitrine,
   „ein Stück Rostock"-Wand + Brotregal im Hintergrund) mit Python/Pillow in
   die vier Standardbreiten 480/960/1600/2800 skaliert.
2. Bewusst unter demselben Dateinamen `brotzeit-team-rostock.jpg` in
   `images/480|960|1600|2800/` gespeichert (überschreibt das bisherige Foto
   von der Ladentheke) — reiner Bildtausch am selben Platz, keine
   HTML-Änderung an den Bildpfaden nötig.
3. Alt-Text in index.html an den neuen Bildinhalt angepasst: „Brotzeit-Team
   Rostock dekoriert frische Erdbeertörtchen an der Vitrine".
4. Getestet in der Vorschau: alle 4 Größen laden (200 OK) mit den neuen,
   größeren Dateigrößen (Beleg für den erfolgten Austausch), Konsole
   fehlerfrei.

**Hinweis:** `MHS06900.jpg` (das alte Quellbild) liegt weiterhin unverändert
in `images/startseite/`, wird aber nicht mehr referenziert.

### 2026-07-12 (später) — Nachtrag zum Kategorie-Karten-Fix: Saisonales & Neuheiten verlinken

**Wunsch (Nachtrag vom Nutzer):** Die Saisonal-Kacheln (Ostern, Muttertag,
Valentinstag, Weihnachten) waren beim letzten Fix vergessen worden — die
gibt es identisch auf torten.html UND speisekarte.html. Zusätzlich sollte
die Bäcker-Sushi-Kachel auf speisekarte.html ebenfalls verlinkt werden.

**Entscheidung (per Nachfrage geklärt):** Saisonal-Kacheln auf beiden
Seiten führen zum Torten-Anfrage-Formular; Bäcker-Sushi verlinkt
stattdessen zu kontakt.html, da es kein Anlass-Produkt mit eigenem
Formularfeld ist, sondern eine allgemeine Anfrage.

**Umgesetzte Schritte:**
1. torten.html: Alle 4 Saisonal-Kacheln von `<div>` zu `<a href="#anfrage">`
   umgebaut, mit `data-anlass="…"` (Ostern/Muttertag/Valentinstag/
   Weihnachten). Anlass-Dropdown im Formular um genau diese 4 Optionen
   erweitert. JS-Selektor für die Anlass-Vorauswahl auf eine gemeinsame
   Klasse `.anlass-link` erweitert (gilt jetzt für Kategorie-Karten UND
   Saisonal-Kacheln).
2. speisekarte.html: Die 4 identischen Saisonal-Kacheln verlinken jetzt
   seitenübergreifend auf `torten.html?anlass=…#anfrage` — der
   Anlass wird als URL-Parameter übergeben, weil eine seitenübergreifende
   JS-Vorauswahl (anders als bei Klicks innerhalb derselben Seite) nicht
   funktioniert. torten.html liest `anlass` beim Laden aus
   `location.search` und wählt es im Dropdown vor, zusätzlich sorgt der
   `#anfrage`-Hash für automatisches Hinscrollen zum Formular.
3. speisekarte.html: Bäcker-Sushi-Kachel (vorher reines `<div>`, kein Link)
   verlinkt jetzt auf `kontakt.html#kontakt-heading`.
4. Getestet in der Vorschau: torten.html — alle 4 Kacheln sind jetzt
   `<a>`-Elemente mit korrektem `data-anlass`, Klick wählt den Anlass
   korrekt vor; direkter Aufruf mit `?anlass=Ostern#anfrage` wählt „Ostern"
   ebenfalls korrekt vor. speisekarte.html — alle 6 Kacheln (4 Saisonal +
   Bäcker-Sushi + Frühstückskonfigurator) zeigen die erwarteten Hrefs.
   Kein horizontales Scrollen auf Mobile (375px) auf beiden Seiten,
   Konsole fehlerfrei.

### 2026-07-12 — Bugfix: Kategorie-Karten auf torten.html öffneten E-Mail-Programm statt zum Formular zu führen

**Problem (vom Nutzer gemeldet):** Die 4 Bild-Kacheln in der Kategorien-
Sektion von torten.html (Hochzeitstorten, Geburtstagstorten, Motivtorten,
Cupcakes & Petitfours) waren noch `mailto:maxi@sparre.de`-Links aus einer
früheren Version der Seite — obwohl weiter unten längst ein echtes
Anfrage-Formular existiert. Klick auf eine Kachel öffnete also das
E-Mail-Programm, statt zum Formular zu scrollen.

**Umgesetzte Schritte:**
1. Alle 4 `kategorie-card`-Links von `mailto:maxi@sparre.de` auf
   `href="#anfrage"` umgestellt (dazu der Anfrage-`<section>` eine
   `id="anfrage"` gegeben), je mit `data-anlass="…"`-Attribut
   (Hochzeit / Geburtstag / Motiv / Cupcakes).
2. Anlass-Dropdown im Formular (`#t-anlass`) um die fehlende Option
   „Cupcakes & Petitfours" (`value="Cupcakes"`) ergänzt — vorher gab es
   dafür keine passende Auswahl.
3. Kleines Seiten-Script ergänzt (gleiches Muster wie „Jetzt bewerben" auf
   karriere.html): Klick auf eine Kategorie-Karte wählt automatisch den
   passenden Anlass im Dropdown vor, bevor zum Formular gesprungen wird.
4. Getestet in der Vorschau: alle 4 Karten zeigen jetzt auf `#anfrage`,
   Klick auf „Motivtorten" wählt „Motivtorte" im Dropdown vor und die
   URL bekommt den Hash `#anfrage`, neue Cupcakes-Option vorhanden, kein
   horizontales Scrollen auf Mobile (375px), Konsole fehlerfrei.

### 2026-07-11 (nachts, am spätesten) — Bewerbungsformular auf karriere.html + Formspree für kontakt.html & karriere.html + Teaser-Bilder

**Wunsch:** karriere.html bekommt unten ein echtes Bewerbungsformular
(analog zum Kontaktformular auf kontakt.html) statt reiner mailto-Buttons.
Beide Formulare (Kontakt + Bewerbung) sollen auf Formspree vorbereitet
werden — der Kunde richtet das Formspree-Konto später selbst ein. Die
„Jetzt bewerben"-Links der einzelnen Stellen-Kacheln sollen zum Formular
führen. Teaserbilder für karriere.html und kontakt.html aus
`images/karriere/` austauschen (Kontakt-Teaser lag im selben Ordner,
Dateiname „kontakt.jpg").

**Wichtige Klarstellung an den Nutzer:** Claude kann kein Formspree-Konto
erstellen (Konten-Erstellung bei Drittanbietern ist grundsätzlich tabu,
unabhängig von Zustimmung). Beide Formulare sind aber vollständig
Formspree-fertig gebaut — es fehlt nur das Eintragen der echten
Formular-Endpoint-URL, exakt nach dem bereits etablierten Muster des
Google-Maps-Platzhalters.

**Umgesetzte Schritte:**
1. Teaser-Bilder aus `images/karriere/` mit Python/Pillow in die vier
   Standardbreiten 480/960/1600/2800 skaliert und SEO-gerecht benannt:
   `brotzeit-rostock-filiale-aussenansicht.jpg` (karriere.html-Teaser,
   Ladenfassade mit „ein Stück Rostock"-Schriftzug) und
   `brotzeit-rostock-vitrine-bedienung.jpg` (kontakt.html-Teaser,
   Vitrine mit Bedienung im Hintergrund). Ablage wie gewohnt in
   `images/480|960|1600|2800/`. Beide Teaser bleiben Einzelbilder (keine
   Slideshow), nur mit `srcset`/`sizes="100vw"` responsive gemacht.
2. kontakt.html: bestehendes Kontaktformular von `mailto:` (enctype
   text/plain) auf Formspree umgestellt — `action` mit Platzhalter-URL
   `REPLACE_WITH_KONTAKT_FORM_ID`, `method="POST"`, `_subject`-Hidden-Feld,
   Honeypot-Feld `_gotcha` (Formspree-Spam-Schutz), E-Mail-Feld auf
   `name="_replyto"` umbenannt (Formspree-Konvention für Reply-To).
3. karriere.html: Sektion 2 („Initiativbewerbung", vorher nur ein
   mailto-Button) zu einer vollwertigen Bewerbungsformular-Sektion
   ausgebaut — 2-spaltig (dunkler Hintergrund, Info links + Formular
   rechts), Aufbau analog zur „Anfrage"-Sektion auf torten.html. Felder:
   Name, E-Mail, Telefon (optional), Stelle (Dropdown, gleiche 3 Stellen +
   Initiativbewerbung + Sonstiges), Nachricht, Lebenslauf-Upload (optional,
   `type="file"`, PDF/Word/Bild, `enctype="multipart/form-data"` fürs
   Formular). Gleiches Formspree-Platzhalter-Muster wie bei kontakt.html
   (eigene Endpoint-ID `REPLACE_WITH_BEWERBUNG_FORM_ID`).
4. Alle 3 „Jetzt bewerben"-Buttons der Stellen-Kacheln von `mailto:` auf
   `href="#bewerbung"` umgestellt, je mit `data-stelle="…"`-Attribut.
   Kleines Seiten-Script wählt beim Klick automatisch die passende Stelle
   im Formular-Dropdown vor (McDonald's-Prinzip wie beim
   Frühstückskonfigurator: möglichst wenig Tipparbeit für den Nutzer).
5. Datei-Input-Styling ergänzt (`::file-selector-button`), da im Rest der
   Seite noch kein Formular einen Datei-Upload hatte.
6. `claude.md` aktualisiert: „Was nicht eingebaut wird" — Zeile „kein
   Formspree" entfernt (war der alte Stand, jetzt überholt); neuer Punkt
   unter „Technische Anforderungen" zum Formspree-Platzhalter-Muster.
7. Getestet in der Vorschau: beide Teaser-Bilder laden (200 OK), Formular-
   Actions zeigen auf die Formspree-Platzhalter-URLs, Honeypot/Subject-
   Felder vorhanden, Klick auf „Jetzt bewerben (Fachverkäufer)" wählt
   „Fachverkäufer im Lebensmittelhandwerk (m/w/d)" im Dropdown vor UND
   springt zu `#bewerbung`, kein horizontales Scrollen auf Mobile (375px)
   auf beiden Seiten, Konsole fehlerfrei.

**Wichtig für Deploy / für den Kunden:**
- 2 neue Bildnamen liegen zusätzlich in `images/480|960|1600|2800/` und
  müssen mit hochgeladen werden.
- Vor dem Livegang MÜSSEN auf formspree.io zwei Formulare angelegt und die
  beiden Platzhalter-URLs (in kontakt.html und karriere.html, jeweils
  Kommentar direkt über dem `<form>`-Tag) durch die echten Endpoint-URLs
  ersetzt werden — sonst laufen beide Formulare ins Leere.

### 2026-07-11 (nachts, noch später) — torten.html: Teaser-Slideshow + echte Fotos in Intro & Kategorien

**Wunsch:** Teaser von torten.html genauso auf eine Slideshow umstellen wie bei
speisekarte.html/ueber-uns.html, mit den Bildern aus `images/torten/`. Für die
übrigen Unsplash-Platzhalter auf der Seite (Intro-Bild + 4 Kategorie-Karten)
durfte frei aus `images/torten/1/` ausgewählt werden. Sektion „Saisonales &
Neuheiten" ausdrücklich unverändert lassen.

**Bildauswahl aus `images/torten/1/` (10 Kandidaten gesichtet, 5 verwendet):**
- Sektion 1 (Intro, 4:5 Hochformat): `IMG_5191.jpg` — Naked Cake mit roten
  Rosen und Beeren, bereits im Hochformat fotografiert.
- Kategorie Hochzeitstorten: `IMG_8647.jpg` — Schwarzwälder Torte mit
  Brautpaar-Figur, eindeutigstes Hochzeits-Motiv im Ordner.
- Kategorie Geburtstagstorten: `IMG_8677.jpg` — Erdbeer-Sahnetorte mit
  weißer Schokolade, Vitrinen-Ansicht.
- Kategorie Motivtorten: `IMG_3497.jpg` — personalisierte Torte mit
  Namens-Cake-Topper („Lieza & Marc"), Rosen und Früchten.
- Kategorie Cupcakes & Petitfours: `IMG_8639.jpg` — einzige Aufnahme mit
  sichtbaren Cupcakes im unteren Tortenständer-Tier.
  Nicht verwendet (zur Nachnutzung übrig): IMG_5102, IMG_8642, IMG_8643,
  IMG_8650, IMG_8678.

**Umgesetzte Schritte:**
1. 5 Teaser-Bilder aus `images/torten/` + 5 Sektionsbilder aus
   `images/torten/1/` (insgesamt 10 Motive) mit Python/Pillow in die vier
   Standardbreiten 480/960/1600/2800 skaliert und SEO-gerecht benannt,
   Ablage in den bestehenden globalen Größenordnern
   `images/480|960|1600|2800/`:
   Teaser: `brotzeit-rostock-toertchen-brotzeit-label.jpg` (Startbild),
   `-toertchen-reihe-beeren.jpg`, `-motivtorte-happy-birthday.jpg`,
   `-toertchen-vielfalt.jpg`, `-himbeertoertchen-nahaufnahme.jpg`.
   Sektionen: `-torte-rosen-beeren.jpg` (Intro), `-hochzeitstorte-brautpaar.jpg`,
   `-geburtstagstorte-erdbeer.jpg`, `-motivtorte-individuell.jpg`,
   `-cupcakes-petitfours.jpg` (je eine Kategorie-Karte).
   Hinweis: `IMG_8647.jpg`/`IMG_8639.jpg` waren nur ~1179px breit im
   Original — die 1600w/2800w-Varianten sind daher identisch zur
   960w-Quelle (kein Hochskalieren), Qualität weiterhin ausreichend für die
   4:3-Kategorie-Kacheln.
2. Page-Teaser von torten.html von Einzelbild auf dieselbe Crossfade-
   Slideshow wie bei speisekarte.html/ueber-uns.html umgebaut (5 Bilder,
   Auto-Wechsel 5s, Dots, `srcset` 480–2800w, `sizes="100vw"`).
3. Intro-Bild (Sektion 1, `.torten-intro-img`) und alle 4 Kategorie-Karten
   (Sektion 2, `.kategorie-card`) von Unsplash auf lokale Bilder mit
   `srcset` + `sizes="(max-width: 900px) 100vw, 50vw"` umgestellt.
4. Sektion 3 „Saisonales & Neuheiten" bewusst NICHT angefasst (weiterhin
   2 lokale + 2 Unsplash-Bilder wie zuvor) — auf ausdrücklichen Wunsch.
5. Getestet in der Vorschau: 5 Slides/5 Dots synchron, Auto-Wechsel läuft,
   alle 20 stichprobenartig geprüften Bilddateien (von 40 neuen insgesamt)
   erreichbar, Saisonal-Sektion nachweislich unverändert (Bild-Quellen
   geprüft), kein horizontales Scrollen auf Mobile (375px), Konsole
   fehlerfrei.

**Wichtig für Deploy:** 10 neue Bildnamen liegen jetzt zusätzlich in
`images/480/`, `images/960/`, `images/1600/`, `images/2800/` (40 Dateien)
und müssen mit hochgeladen werden. `images/torten/` und `images/torten/1/`
(Rohdateien) werden von der Website nicht referenziert, nur als Quelle
genutzt.

### 2026-07-11 (nachts, später) — ueber-uns.html: Teaser-Slideshow + echtes Foto in Sektion 1

**Wunsch:** Teaser von ueber-uns.html genauso auf eine Slideshow umstellen wie
bei speisekarte.html, mit den Bildern aus `images/ueberuns/`. Zusätzlich das
zweite Bild in Sektion 1 (aktuell Unsplash „Frisch gebackenes Brot") durch
`zweites Bild im Abschnitt.jpg` aus demselben Ordner ersetzen. Wieder SEO-
gerecht umbenennen und in allen Größen bereitstellen.

**Umgesetzte Schritte:**
1. 6 Bilder aus `images/ueberuns/` mit Python/Pillow in die vier Standard-
   breiten 480/960/1600/2800 skaliert und SEO-gerecht benannt, Ablage in den
   bestehenden globalen Größenordnern `images/480|960|1600|2800/`:
   - `brotzeit-rostock-laden-innenansicht.jpg` (Brotregal + Theke, Startbild)
   - `brotzeit-rostock-brotlaib-schriftzug.jpg` (Brot vor „ein Stück Rostock")
   - `brotzeit-rostock-broetchen-auslage.jpg`
   - `brotzeit-rostock-toertchen-vitrine-blueten.jpg`
   - `brotzeit-rostock-ladenfassade-voegenteich.jpg` (Außenansicht)
   - `brotzeit-rostock-sonnenblumenbrot-nahaufnahme.jpg` (für Sektion 1)
2. Page-Teaser in `ueber-uns.html` von Einzelbild auf dieselbe Crossfade-
   Slideshow wie bei speisekarte.html umgebaut (5 Bilder, Auto-Wechsel 5s,
   Dots, `srcset` 480–2800w, `sizes="100vw"`) — Styles/Script 1:1 aus
   speisekarte.html übernommen (`.teaser-slides/-slide/-dots/-dot`).
3. Zweites Bild in Sektion 1 (`.about-bild`) von Unsplash auf
   `brotzeit-rostock-sonnenblumenbrot-nahaufnahme.jpg` umgestellt, mit
   `srcset` + `sizes="(max-width: 900px) 100vw, 50vw"` (Spalte ist ab 900px
   50% breit, darunter voll) — gleiches Muster wie bei den index.html-Bildern
   vom letzten Schritt.
4. Getestet in der Vorschau: 5 Slides/5 Dots vorhanden und synchron,
   Auto-Wechsel läuft (Slide/Dot-Index nach Wartezeit übereinstimmend
   weitergesprungen), alle 24 neuen Bilddateien (6 Motive × 4 Größen)
   erreichbar, Sektion-1-Bild korrekt referenziert, kein horizontales
   Scrollen auf Mobile (375px), Konsole fehlerfrei.

**Wichtig für Deploy:** Die 6 neuen Bildnamen liegen jetzt zusätzlich in
`images/480/`, `images/960/`, `images/1600/`, `images/2800/` und müssen mit
hochgeladen werden. `images/ueberuns/` (Rohdateien) wird von der Website
nicht referenziert, nur als Quelle genutzt.

### 2026-07-11 (nachts) — index.html: Laufband zwischen Hero und Über-uns + echte Fotos statt Unsplash

**Wunsch:** Abstand zwischen Hauptteaser (Hero) und dem folgenden Abschnitt auf
index.html war zu knapp (quasi 0px). Gewünscht: deutlich größerer Abstand,
gefüllt mit einem unaufdringlichen Laufband. Zusätzlich zwei Unsplash-
Platzhalterbilder durch echte Fotos ersetzen.

**Vorgehen:** Zuerst als Testdatei `index1.html` gebaut und in der Vorschau
geprüft (Laufband-Idee freigegeben) — danach 1:1 in `index.html` übernommen
und `index1.html` wieder gelöscht.

**Umgesetzte Schritte:**
1. Neues Laufband zwischen `</header>` (Hero) und der `.about-strip`-Sektion:
   heller Streifen (`--cream`, dünne Trennlinien, 30px Padding), Endlos-
   Marquee (42s, linear) mit Kernbotschaften („Täglich frisch gebacken",
   „Frühstück ab 7 Uhr", „Am Vögenteich 24 · Rostock" etc.), pausiert bei
   `prefers-reduced-motion`, `aria-hidden` (rein dekorativ), auf Mobile
   kompakter. Kein Eingriff in shared.css/shared.js — Styles liegen im
   `<style>`-Block von index.html (seitenspezifisch, wie in claude.md
   vorgegeben).
2. Bilder aus `images/startseite/` (`MHS06900.jpg`, `torten.jpg`) mit Python/
   Pillow in die vier Standardbreiten 480/960/1600/2800 skaliert und SEO-
   gerecht benannt: `brotzeit-team-rostock.jpg` (Über-uns-Teaser) und
   `brotzeit-rostock-motivtorte-herzen.jpg` (Torten-Sektion) — Ablage in den
   bestehenden globalen Größenordnern `images/480|960|1600|2800/` (gleiches
   Muster wie beim Speisekarte-Teaser).
3. Beide `<img>`-Tags in index.html von Unsplash-Einzelbild auf `srcset`
   (480/960/1600/2800w) + `sizes="(max-width: 900px) 100vw, 50vw"`
   umgestellt (Spaltenbreite: 50% ab 900px, darunter volle Breite).
   Alt-Text Torten-Bild korrigiert: zeigt tatsächlich eine Herz-Motivtorte
   mit Schriftzug, nicht (wie der alte Unsplash-Alt-Text suggerierte) eine
   Hochzeitstorte.
4. Getestet in der Vorschau: Laufband sitzt exakt zwischen Hero (endet bei
   y=870) und About-Strip (beginnt bei y=951) — 81px Puffer statt vorher
   ~0px. Alle 8 neuen Bilddateien (2 Motive × 4 Größen) unter den
   erwarteten Pfaden mit 200 OK erreichbar. Kein horizontales Scrollen auf
   Mobile (375px). Konsole fehlerfrei.

**Wichtig für Deploy:** `brotzeit-team-rostock.jpg` und
`brotzeit-rostock-motivtorte-herzen.jpg` liegen jetzt zusätzlich in
`images/480/`, `images/960/`, `images/1600/`, `images/2800/` und müssen mit
hochgeladen werden. Der Ordner `images/startseite/` (Original-Rohdateien)
wird von der Website selbst nicht referenziert, nur als Quelle genutzt.

### 2026-07-11 (spät abends) — Teaser speisekarte.html: responsive Slideshow mit 5 Frühstücksbildern

**Wunsch:** Teaser von speisekarte.html vom Unsplash-Platzhalterbild auf eigene
Fotos umstellen. Alle 5 Bilder aus `images/2800/` verwenden, zusätzlich responsive
für Mobile/Tablet über die bereits angelegten Größenordner `1600/`, `960/`,
`480/`. Dateinamen SEO-gerecht mit „fruehstueck-brotzeit-rostock" im Namen.

**Umgesetzte Schritte:**
1. Die 5 Bilder (identische Dateinamen in allen vier Größenordnern) umbenannt:
   `fruehstueck-brotzeit-rostock-fruehstuecksteller.jpg`,
   `-spiegelei-avocado.jpg`, `-vollkornbrot-gemuese.jpg`, `-beeren-muesli.jpg`,
   `-broetchen-marmelade.jpg`.
2. Page-Teaser in `speisekarte.html` von Einzelbild auf Crossfade-Slideshow
   umgebaut (analog zur Hero-Slideshow auf index.html, aber als eigener,
   seitenspezifischer Block — keine Änderung an shared.css/shared.js).
   Automatischer Wechsel alle 5 s, klickbare Dots unten rechts (auf Mobile
   per Media Query ausgeblendet).
3. Jedes Slide-Bild mit `srcset` über alle vier Breiten (480/960/1600/2800w)
   und `sizes="100vw"` — der Browser lädt automatisch die passende Auflösung
   für Handy, iPad und Desktop. Beschreibende Alt-Texte mit Frühstück-Keyword.
4. Getestet in der Vorschau: Desktop (5 Slides/Dots synchron, Auto-Wechsel
   läuft), Mobile 375 px (Dots ausgeblendet, responsives Bild lädt, kein
   horizontales Scrollen), Konsole fehlerfrei, alle 20 Bilddateien
   (5 Motive × 4 Größen) laden mit 200 OK.

**Wichtig für Deploy:** Die Ordner `images/2800/`, `images/1600/`,
`images/960/` und `images/480/` sind neu und müssen beim nächsten Upload
mit hochgeladen werden (bisher stand in der Deploy-Checkliste nur die
`images/`-Root-Ebene).

### 2026-07-11 (abends) — Fehlermeldung bei fehlender QR-Lib + Deploy-Checkliste

**Problem:** Nach GitHub-Upload wurde kein QR-Code erzeugt — die neue Datei
`js/qrcode.min.js` fehlte im Upload (neuer Ordner!). Der Button scheiterte
still, weil `qrcode` nicht definiert war.

**Umgesetzt:** Guard im QR-Click-Handler — fehlt die Bibliothek, zeigt der
Button 4 Sekunden „Fehler: js/qrcode.min.js fehlt" statt still zu scheitern.
Getestet (beide Fälle: Lib da → QR kommt; Lib fehlt → Meldung).

**DEPLOY-CHECKLISTE — diese Dateien/Ordner müssen mit hochgeladen werden:**
- alle `*.html` (index, speisekarte, torten, ueber-uns, kontakt, karriere,
  impressum, datenschutz)
- `shared.css` und `shared.js` (shared.js wurde am 10.07. geändert!)
- `json/preise.js` — Preisdaten (ohne sie bleiben Preisliste + Konfigurator leer)
- `js/qrcode.min.js` — QR-Bibliothek (NEUER Ordner seit 11.07.!)
- `images/` — die 4 lokalen Fotos (seit 11.07. auch auf speisekarte.html
  und torten.html referenziert, nicht mehr nur auf index.html)

### 2026-07-11 (nachmittags) — Konfigurator: QR-Code statt E-Mail, Vorname-Aufruf

**Wunsch:** E-Mail-Bestellung komplett streichen. Stattdessen erzeugt der
Konfigurator einen QR-Code, den die Kasse scannt (Bestellung sofort da),
plus Vorname-Feld wie bei McDonald's — die Mitarbeiterin ruft den Namen,
wenn das Frühstück fertig ist.

**Umgesetzte Schritte:**
1. `js/qrcode.min.js` lokal ins Projekt gelegt (qrcode-generator 1.4.4,
   MIT-Lizenz, von cdnjs heruntergeladen) — kein externer Dienst, keine
   Laufzeit-CDN-Abhängigkeit, funktioniert offline/file://.
2. `speisekarte.html`: mailto-Button und komplette mailto-Logik entfernt.
   Neu in der Summary: Vorname-Feld („Dein Vorname — wir rufen dich auf"),
   Button „QR-Code für die Kasse erzeugen", weiße QR-Box mit Hinweistext
   („wir rufen ‚Name‘, sobald alles fertig ist").
3. QR-Inhalt = Klartext: BROTZEIT BESTELLUNG / Name / Datum+Uhrzeit /
   Positionen mit Preisen / Gesamtsumme in EUR. UTF-8-kodiert
   (unescape/encodeURIComponent-Trick), damit Umlaute beim Scannen stimmen.
4. Validierung: leere Auswahl → „Erst etwas auswählen"; fehlender Vorname →
   „Bitte Vornamen eingeben" + Fokus aufs Feld. Bei JEDER Änderung der
   Auswahl wird der alte QR ausgeblendet (ungültig).
5. PDF-Bestellzettel erweitert: Zeile „Für: <Vorname>" + derselbe QR-Code
   auf dem Zettel — auch der Ausdruck ist an der Kasse scannbar.
   Fußzeile ohne E-Mail-Adresse.
6. Getestet: QR erzeugt und testweise dekodiert — Inhalt exakt korrekt
   inkl. Umlauten („Jörg", „Käsebrötchen") und Summe (13,28 €).
   Namens-/Leer-Validierung ok, QR-Invalidierung bei Änderung ok,
   Zettel mit Name+QR ok, Konsole fehlerfrei.

**Hinweis für den Kunden:** Kasse braucht einen 2D-/QR-fähigen Scanner
(zur Not liest jedes Handy den Code). Inhalt ist unverschlüsselter Text.

### 2026-07-11 — Kundenmail umgesetzt: Mittag/Brunch raus, neue Kategorien, Saisonales/Neuheiten, Bildtausch

**Grundlage:** Mail von Maximilian Sparre (Angebot, Fototermine, Content-Termin,
Website-Änderungen). Hier nur die sofort umsetzbaren Website-Punkte.

**Umgesetzte Schritte:**
1. Mittag/Brunch komplett entfernt: speisekarte.html (Title, Meta-Description,
   JSON-LD, Teaser-Lead, Sektion-1-Überschrift/Lead, Karte 01 jetzt nur
   „Frühstück", Öffnungszeiten-Text), index.html (Meta, JSON-LD inkl.
   servesCuisine, Alt-Text Hero-Slide, Angebotskarte 01 jetzt „Frühstück &
   Snacks"), kontakt.html (Teaser-Lead). „Mittagspause" in ueber-uns.html
   bewusst belassen (beschreibt Nutzung, kein Angebot).
2. speisekarte.html: Karte 02 „Mittagstisch" ersetzt durch „Bäcker-Sushi &
   Canapés" (Hinweis „Neu im Sortiment").
3. speisekarte.html: neue Sektion 1A „Bäcker-Sushi, Canapés & mehr"
   (id="snacks", weißer Hintergrund) — 4 Text-Karten: Bäcker-Sushi, Canapés,
   Snacks & Salate, Warme & kalte Getränke (Link zur Preisliste). BEWUSST ohne
   Stockfotos — echte Fotos kommen vom Fototermin (Katrin), Canapé-Preise
   liefert Sparre nach (dann in json/preise.js).
4. speisekarte.html: Sektion 2 umgebaut zu „Saisonales & Neuheiten" mit zwei
   Blöcken: „01 · Saisonales" (Ostern, Muttertag, Valentinstag, Weihnachten +
   auskommentierte Eiscafé-Vorlage zum schnellen Einsetzen) und
   „02 · Neuheiten" (Bäcker-Sushi, Frühstückskonfigurator-Teaser mit Link).
   Sand-Hintergrund entfernt (Konfigurator davor ist bereits sand).
5. torten.html: Überschrift „Saisonales & Besonderes" → „... & Neuheiten"
   angeglichen (Blockstruktur dort vorerst nicht nötig).
6. Platzhalter-Bilder ersetzt (waren Brokkoli bzw. Katze von Unsplash!):
   Ostern-Kachel und Valentinstag-Kachel auf speisekarte.html UND torten.html
   zeigen jetzt echte lokale Fotos (images/brotzeit-rostock-brot-handwerk-…
   und …petit-fours-toertchen-…). WICHTIG: Die in der Kundenmail erwähnten
   Instagram-Bilder sind NICHT im Projektordner angekommen — sobald sie in
   `neues/` liegen, Kacheln damit bestücken.
7. Getestet (localhost:8742): kein Mittag/Brunch mehr im Text, Snacks-Sektion
   2×2, Blöcke 01/02 sichtbar, 6 Kacheln, Preisliste + Konfigurator (44 Items)
   unverändert funktionsfähig, Konsole fehlerfrei.

**Nicht umgesetzt (kein Website-Code / wartet auf Input):**
- Angebot (Chatbot, Konfiguratoren, Website, Foto, Ratenzahlung) — separates
  Dokument, auf Zuruf erstellen.
- Fototermine (Katrin 11–13 Uhr Brotzeit; Konditorei für Tortenkonfigurator)
  — organisatorisch.
- Canapé-Bilder + Preise — bringt Sparre.
- Törtchen-Fotos von oben (für Scheiben-Folien) — Hinweis an Katrin.

### 2026-07-10 (nachts) — PDF-Export für den Frühstückskonfigurator

**Wunsch:** Zusammengestellte Frühstücksliste als PDF herunterladen.

**Umsetzung (ohne externe Dienste/Libraries, gemäß Projektregeln):**
1. `speisekarte.html`: Button „Als PDF speichern" in den Konfigurator-Aktionen
   ergänzt (zwischen „Per E-Mail bestellen" und „Liste kopieren").
2. Versteckter `#bestellzettel` vor dem Footer: gestalteter Bestellschein
   (Brotzeit-Kopf, Datum, Tabelle Anzahl/Artikel/Einzelpreis/Summe,
   Gesamtsumme, Fußzeile mit Adresse + Hinweis „kein Kaufvertrag").
3. Print-CSS im seitenspezifischen Style-Block: `@media print` blendet bei
   `body.druckmodus` alles außer dem Zettel aus — der Browser-Druckdialog
   erzeugt daraus das PDF („Als PDF speichern" wählen). Funktioniert auf
   Desktop und Mobil, kein jsPDF o. ä. nötig.
4. JS: Button befüllt den Zettel, setzt `druckmodus`, ruft `window.print()`
   auf und räumt via `afterprint` + Timeout wieder auf. Leere Auswahl →
   Hinweis „Erst etwas auswählen" statt Druckdialog.
5. Getestet: Tabelle und Summe korrekt (Testbestellung 11,02 €), Zettel im
   Normalbetrieb unsichtbar, Aufräumen nach Druck, Leer-Fall abgefangen.

### 2026-07-10 (später Abend) — Bugfix: unsichtbare Inhalte durch Reveal-Animation

**Problem:** Seite wirkte in der eingebetteten Vorschau „zerschossen" —
große Teile blieben unsichtbar/ausgeblichen. Ursache: Die Scroll-Einblend-
Animation (`.reveal` + IntersectionObserver in shared.js) löste nicht aus,
wenn das Browserfenster beim Laden kurzzeitig 0 Pixel groß ist
(eingebettete Vorschau-Panels; betrifft potenziell alle Seiten der Site).

**Umgesetzte Schritte:**
1. `shared.js`: Fallback `zeigeSichtbare()` ergänzt — nach `load` (+400 ms)
   und bei jedem `scroll` werden alle `.reveal`-Elemente im Sichtbereich
   sichtbar geschaltet, auch wenn der Observer nie feuert. Viewport-Höhe
   defensiv ermittelt (mind. 700 px angenommen, falls innerHeight 0 ist).
   Grundsatz: Inhalte dürfen NIEMALS dauerhaft versteckt bleiben.
2. `speisekarte.html`: `reveal`-Klasse von den beiden großen Funktions-
   blöcken des Konfigurators entfernt (#konfig-gruppen, .konfig-summary) —
   funktionale UI wird nicht mehr animiert, nur Überschriften/Deko.
3. Verifiziert in der Vorschau (1366 px Desktop): Preisliste 2-spaltig,
   Konfigurator mit Sticky-Summary, alles sofort sichtbar.

**Wichtig fürs Verständnis:** Es gibt KEINE neue HTML-Datei für die
Preise — Preisliste (id="preise") und Frühstückskonfigurator
(id="fruehstueck-konfigurator") sind Sektionen INNERHALB von
speisekarte.html, direkt nach der „Drei Karten"-Sektion.

### 2026-07-10 — Preise eingepflegt: interaktive Preisliste + Frühstückskonfigurator

**Quellen gesichtet (Ordner `neues/`):**
- `Broetchen_Preisliste (1).xlsx` — 15 Brötchen-Artikel
- `Getraenkekarte (1).xlsx` — Kaffeespezialitäten klein/groß
- `Tee_und_Getraenke_Preisliste (1).xlsx` — Tees, Kaltgetränke, Kinder
- `Preisliste_Sauber (3).docx` — komplette Frühstücks-Belegliste mit Preisen
- `Brotzeit (1)/(2).docx` — ältere Versionen ohne Preise (ignoriert)
- `Preistafeln Brotzeit (1)/(2).pptx` — 4 Ladentafeln als Bilder
  (Kaffee/Espresso, Kaffee Latte, Schokoladenträume, Erlesener Tee)
- `Online-Bestellformular_Torten (1).docx` — Feldstruktur Tortenkonfigurator
- `sparre_meeting_2026-05-15.pdf` — Protokoll (Wunsch: Frühstückskonfigurator)

**Umgesetzte Schritte:**
1. `json/preise.js` neu angelegt — zentrale Preisdatenquelle
   (`window.BROTZEIT_PREISE`), als JS statt JSON, damit die Seite auch
   ohne Webserver (file://) funktioniert. Preisänderungen NUR hier pflegen.
2. `speisekarte.html`: Sektion 1B „Unsere Preise" eingebaut — Kategorie-Tabs,
   Live-Suche über alle Kategorien, Gruppen-Karten mit klein/groß-Spalten.
3. `speisekarte.html`: Sektion 1C „Frühstückskonfigurator" eingebaut —
   details/summary-Gruppen mit Steppern, sticky Dark-Summary mit
   Live-Gesamtsumme, Aktionen: mailto-Bestellung, Liste kopieren, Reset.
4. Seitenspezifische Styles im `<style>`-Block von speisekarte.html ergänzt
   (Klassen `preise-*` und `konfig-*`), responsive ab 900px einspaltig.
5. Rendering-Logik als Inline-Script vor `</body>` (nach shared.js und
   json/preise.js). Kein Framework, kein Backend.
6. `.claude/launch.json` angelegt (python http.server, Port 8742) zum
   lokalen Testen.
7. Getestet: Tabs, Suche („latte" findet kategorieübergreifend), Stepper-
   Rechnung (13,48 € korrekt), mailto-Body, Reset, Mobilansicht 375px
   (kein horizontales Scrollen), Konsole fehlerfrei.
8. Diese claude.md aktualisiert: „Keine Preise"-Regel entfernt,
   Sektionen 1B/1C dokumentiert, Arbeitsprotokoll eingeführt.

**Entscheidungen:**
- Bei Preis-Widersprüchen zwischen Excel und Preistafeln gelten die
  PREISTAFELN (hängen im Laden, mutmaßlich aktueller). Excel nur für
  Artikel, die auf keiner Tafel stehen.
- Konfigurator = Bestellliste per mailto, KEIN Warenkorb/Zahlung
  (bewusste Entscheidung, siehe „Was nicht eingebaut wird").
- Tomate-Mozzarella (ohne Preis in allen Quellen) vorerst weggelassen.

**Offen / beim Kunden klären:**
- [ ] Schoko-Croissant: Excel sagt 20 € — als 2,00 € eingetragen, bestätigen!
- [ ] Preisquelle bestätigen: Gelten die Preistafel-Preise (z. B. Cappuccino
      3,85/4,95) oder die Excel-Preise (3,90/4,30)?
- [ ] Tomate-Mozzarella: Preis nachliefern, dann in json/preise.js ergänzen.
- [ ] Mittagstisch-Preise fehlen komplett (keine Quelle vorhanden).
- [ ] Torten-Aufpreise (Bestellformular hat Lücken: Fondant, Höhe 8/10 cm,
      Deko-Positionen) — bringt Maximilian Sparre mit.
