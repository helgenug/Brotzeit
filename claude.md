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

## Seiten — Anweisungen

### 1. `speisekarte.html`

Title: `Speisekarte – Brotzeit Rostock | Frühstück, Mittagstisch & Backwaren`
Description: `Täglich frisches Frühstück, wechselnder Mittagstisch und handwerkliche Backwaren. Brotzeit Rostock, Am Vögenteich 24.`
Canonical: `https://brotzeit-rostock.de/speisekarte.html`

Page-Teaser H1: `Täglich frisch. <em>Täglich anders.</em>`
Teaser-Lead: `Frühstück ab 7 Uhr, wechselnder Mittagstisch, Backwaren aus der Backstube. Die Karte wechselt wöchentlich.`
Platzhalterbild: `https://images.unsplash.com/photo-1504718855392-c0f33b372e72?w=1600&q=80&fit=crop`

Inhalt (3 Sektionen):

**Sektion 1 — Drei Karten nebeneinander (Grid 3 Spalten):**
- Karte 01: „Frühstück & Brunch" — Belegte Brote, Frühstücksteller, Rührei, Lachs — täglich ab 7 Uhr
- Karte 02: „Mittagstisch" — Wechselnde warme Gerichte, Mo–Fr — Platzhalterbild Unsplash
- Karte 03: „Backwaren & Brot" — Brote, Brötchen, Kuchen aus der Backstube — täglich frisch

Hinweis unter den Karten (kleiner Text, zentriert): 
„Die Karte wechselt wöchentlich. Aktuelle Angebote immer im Laden oder auf Instagram."
Instagram-Link: `https://www.instagram.com/brotzeitrostock/`

**Sektion 2 — Saisonale Kacheln (4 Kacheln, 2×2 Grid):**
Überschrift: `Saisonales & <em>Besonderes.</em>`
Eyebrow: `Immer zur richtigen Zeit`

Kacheln:
- Ostern: Hefezöpfe, Osterlämmer, Schokoeier aus der Konditorei — Platzhalterbild
- Muttertag: Individualtorten, Blumentörtchen, Frühstücksboxen — Platzhalterbild
- Valentinstag: Pralinen, Herztorten, kleine Überraschungen — Platzhalterbild
- Weihnachten: Stollen, Lebkuchen, Christstollen nach Hausrezept — Platzhalterbild

Jede Kachel: Bild (3:2 Ratio), Titel, 1 Satz Text. Kein Link nötig.

**Sektion 3 — Öffnungszeiten-Reminder (dark background, var(--warm-dark)):**
Text: „Täglich vor Ort" + Öffnungszeiten-Tabelle + CTA „Kontakt aufnehmen" → kontakt.html

Keine Preise auf der Seite.

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
Jede Karte: Link → `mailto:maxi@sparre.de`

**Sektion 3 — Saisonale Kacheln (identisch zu speisekarte.html, 4 Kacheln):**
Ostern · Muttertag · Valentinstag · Weihnachten

**Sektion 4 — Anfrage (dark background):**
2-spaltig: Links Kontakt-Info (persönlich, E-Mail, Telefon, Vorlaufzeit), 
rechts rudimentäres Kontaktformular:
Felder: Name, E-Mail, Anlass (Dropdown: Hochzeit / Geburtstag / Motiv / Sonstiges), 
Wunschdatum, Personenzahl, Nachricht (Textarea), Senden-Button
Formular-Action: `mailto:maxi@sparre.de` (method="post" enctype="text/plain")
Keine externen Dienste, kein Backend.

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

Title: `Kontakt – Brotzeit Rostock | Am Vögenteich 24`
Description: `Brotzeit Rostock kontaktieren: Am Vögenteich 24, 18055 Rostock. Telefon, E-Mail, Öffnungszeiten und Google Maps.`
Canonical: `https://brotzeit-rostock.de/kontakt.html`

Page-Teaser H1: `So findet ihr <em>uns.</em>`
Teaser-Lead: `Am Vögenteich 24, mitten in Rostock. Persönlich, per E-Mail oder telefonisch.`
Platzhalterbild: `https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1600&q=80&fit=crop`

Inhalt (2 Sektionen):

**Sektion 1 — 3-spaltig:**
Spalte 1 — Adresse & Öffnungszeiten:
Am Vögenteich 24, 18055 Rostock
Tel: 0381 87729509 (als tel-Link)
E-Mail: maxi@sparre.de (als mailto-Link)
Öffnungszeiten-Tabelle (Mo–Fr 07:00–17:30, Sa 07:30–16:30, So geschlossen)

Spalte 2 — Google Maps Embed:
```html
<iframe 
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2335.123!2d12.1327!3d54.0897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTTCsDA1JzIyLjkiTiAxMsKwMDcnNTcuNyJF!5e0!3m2!1sde!2sde!4v1234567890"
  width="100%" height="320" style="border:0;border-radius:8px;" 
  allowfullscreen loading="lazy" 
  referrerpolicy="no-referrer-when-downgrade"
  title="Brotzeit Rostock auf Google Maps">
</iframe>
```
Hinweis: Ersetze den src-Wert durch den echten Embed-Code von 
maps.google.com → "Teilen" → "Karte einbetten".

Spalte 3 — Rudimentäres Kontaktformular:
Felder: Name, E-Mail, Betreff (Dropdown: Allgemeine Anfrage / Torte bestellen / Tisch reservieren / Karriere / Sonstiges), Nachricht (Textarea), Senden-Button
Formular-Action: `mailto:maxi@sparre.de` (method="post" enctype="text/plain")
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

Jede Kachel: Stellenbezeichnung, 2 Sätze Beschreibung, Button „Jetzt bewerben" → `mailto:maxi@sparre.de?subject=Bewerbung Brotzeit Rostock`

**Sektion 2 — dark background:**
Text: Kein passendes Angebot dabei? Schick uns eine Initiativbewerbung. 
CTA: „Initiativbewerbung senden" → `mailto:maxi@sparre.de?subject=Initiativbewerbung Brotzeit Rostock`

---

### 6. `impressum.html`

Title: `Impressum – Brotzeit Rostock`
Canonical: `https://brotzeit-rostock.de/impressum.html`

Minimales Layout: Page-Teaser nur 30vh, kein Bild (dark background var(--warm-dark)), 
dann ein breiter Text-Container mit dem Impressumstext.

Impressum-Inhalt (Platzhalter — Kunde füllt aus):
Angaben gemäß § 5 TMG
Maximilian Sparre
[Firma / Rechtsform eintragen]
Am Vögenteich 24
18055 Rostock
Telefon: 0381 87729509
E-Mail: maxi@sparre.de
Umsatzsteuer-Identifikationsnummer: [eintragen]
Registergericht: [eintragen]
Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:
Maximilian Sparre
Am Vögenteich 24, 18055 Rostock
-------
---

### 7. `datenschutz.html`

Title: `Datenschutz – Brotzeit Rostock`
Canonical: `https://brotzeit-rostock.de/datenschutz.html`

Gleiches Minimal-Layout wie Impressum.
Platzhalter-Text: „Datenschutzerklärung gemäß DSGVO — wird durch einen Datenschutzgenerator ergänzt (z.B. datenschutz-generator.de)."

---

## Technische Anforderungen

- Alle Seiten: `<link rel="stylesheet" href="shared.css">` im Head, 
  `<script src="shared.js"></script>` vor `</body>`
- Keine inline `<style>`-Blöcke außer für isolierte seitenspezifische Layouts
- Canonical-URLs enden auf `.html`
- JSON-LD Schema auf jeder Seite (BreadcrumbList + passender @type pro Seite)
- Bilder: `loading="lazy"` + aussagekräftiger `alt`-Text mit Keyword + Ort
- Aktiver Nav-Link erhält Klasse `active`
- Alle `mailto:`-Links mit echter Adresse: `maxi@sparre.de`
- Alle `tel:`-Links: `+493818772950`
- Google Maps Embed auf kontakt.html: Platzhalter-src einfügen, 
  Kommentar „Bitte durch echten Embed-Code ersetzen"

## Was nicht eingebaut wird

- Online-Bestellung / Warenkorb
- Preisliste
- Social-Media-Feed-Integration (nur Links)
- Externe Formular-Dienste (kein Formspree, kein Netlify Forms)
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