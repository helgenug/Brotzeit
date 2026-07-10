/* ═══════════════════════════════════════════
   BROTZEIT ROSTOCK — ZENTRALE PREISDATEN
   Einzige Quelle für alle Preise auf der Website.
   Preise ändern: nur hier — speisekarte.html liest diese Datei.

   Quellen (Stand Juli 2026):
   - Heißgetränke/Tee: Preistafeln im Laden (neues/Preistafeln Brotzeit.pptx)
   - Kalte Getränke, Kinder: neues/Tee_und_Getraenke_Preisliste.xlsx
   - Brötchen: neues/Broetchen_Preisliste.xlsx
   - Frühstück belegen: neues/Preisliste_Sauber.docx

   p: [preis] = Einheitspreis · p: [klein, groß] · null = Größe gibt es nicht
═══════════════════════════════════════════ */

window.BROTZEIT_PREISE = {
  stand: "Juli 2026",
  kategorien: [
    {
      id: "heiss",
      label: "Heißgetränke",
      spalten: ["klein", "groß"],
      gruppen: [
        {
          titel: "Kaffee",
          items: [
            { name: "Kaffee Creme", p: [3.30, 4.10] },
            { name: "Cappuccino", info: "Espresso, Milch, Milchschaumhaube", p: [3.85, 4.95] },
            { name: "Schokochino", info: "Espresso, heiße Schokolade, Milchschaum", p: [4.85, 5.25] },
            { name: "Goldene Milch", info: "ayurvedisches Getränk mit Kurkuma, kein Kaffee", p: [4.99, null] }
          ]
        },
        {
          titel: "Espresso",
          items: [
            { name: "Espresso", info: "einfach / doppelt", p: [2.95, 3.99] },
            { name: "Espresso Macchiato", info: "Espresso, Milchschaumhaube", p: [3.25, 4.35] }
          ]
        },
        {
          titel: "Kaffee Latte",
          items: [
            { name: "Kaffee Latte", info: "Espresso, geschäumte Milch", p: [4.30, 5.10] },
            { name: "Kaffee Latte extra", info: "doppelter Espresso, geschäumte Milch", p: [4.95, 5.45] },
            { name: "Vanille-, Zimt- oder Nuss-Latte", info: "mit Vanille-, Zimt- oder Haselnuss-Geschmack", p: [4.95, 5.45] },
            { name: "Latte Macchiato", info: "Espresso, geschäumte Milch", p: [4.50, 5.20] },
            { name: "Caramel Macchiato", info: "Caramel, Espresso, geschäumte Milch", p: [5.05, 5.50] },
            { name: "Hafer Latte", p: [4.80, null] },
            { name: "Aufpreis Milchalternative", info: "für alle Kaffeespezialitäten", p: [0.50, null] }
          ]
        },
        {
          titel: "Schokoladenträume",
          items: [
            { name: "Vollmilch- oder Weiße Schokolade", info: "mit Sahne", p: [4.10, 5.10] },
            { name: "Caramel Schokolade", info: "Caramel, heiße Schokolade", p: [4.30, 5.30] },
            { name: "Nuss Schokolade", info: "Haselnuss, heiße Schokolade", p: [4.30, 5.30] },
            { name: "Schokoladenkuss", info: "heiße Schokolade, Baileys (2 cl klein / 4 cl groß), Sahne", p: [4.85, 5.95] }
          ]
        }
      ]
    },
    {
      id: "tee",
      label: "Tee & Kalte Getränke",
      gruppen: [
        {
          titel: "Erlesener Tee",
          items: [
            { name: "Ronnefeldt Tee", info: "Darjeeling, Wellness, Verveine, Kamille, Heiße Liebe, Greenleaf Grün, Rooibos Orange, Sweet Berries oder Lemon Fresh", p: [3.65] },
            { name: "Frische Minze", info: "mit Honig und Kandis", p: [3.80] },
            { name: "Frischer Ingwer", info: "mit Honig und Kandis", p: [3.80] },
            { name: "Chai Latte", p: [4.10] },
            { name: "Matcha Latte", p: [4.99] }
          ]
        },
        {
          titel: "Kalte Getränke",
          items: [
            { name: "Fritz Kola", p: [2.80] },
            { name: "Fritz gespritzter Orangensaft", p: [3.90] },
            { name: "Apfelspritz", p: [2.80] },
            { name: "Schorle", p: [2.80] },
            { name: "Mineralwasser", p: [2.80] }
          ]
        },
        {
          titel: "Für die Kleinen",
          items: [
            { name: "Kinder-Cappuccino", p: [2.20] },
            { name: "Streuselkeks", p: [2.90] }
          ]
        }
      ]
    },
    {
      id: "broetchen",
      label: "Brötchen & Gebäck",
      konfigurator: true,
      gruppen: [
        {
          titel: "Brötchen & Brot",
          items: [
            { name: "Frühstücksbrötchen", p: [0.48] },
            { name: "4-Kornbrötchen", p: [0.95] },
            { name: "Mohnbrötchen", p: [0.95] },
            { name: "Sauerteigbrötchen", p: [0.99] },
            { name: "Dinkelbeißer", p: [0.99] },
            { name: "Buchweizenbrötchen", p: [0.99] },
            { name: "Weizenmisch-Scheibe", p: [1.00] },
            { name: "Hörnchen", p: [1.45] },
            { name: "Focaccia", p: [1.50] },
            { name: "Laugenstange", p: [1.58] },
            { name: "Käsebrötchen", p: [1.59] },
            { name: "Bagel", p: [1.60] },
            { name: "Dinkelkäsebrötchen", p: [1.70] },
            { name: "Croissant", p: [1.96] },
            /* Quelle nennt 20 € — offensichtlicher Tippfehler, bitte bestätigen: */
            { name: "Schoko-Croissant", p: [2.00] }
          ]
        }
      ]
    },
    {
      id: "fruehstueck",
      label: "Frühstück belegen",
      konfigurator: true,
      gruppen: [
        {
          titel: "Eier & Warmes",
          items: [
            { name: "Gekochtes Ei", p: [1.50] },
            { name: "Portion Spiegeleier", info: "2 Stück", p: [4.20] },
            { name: "Portion Rührei", info: "3 Eier, mit Kräutern", p: [5.60] },
            { name: "Extra zum Ei", info: "Kochschinken, Tomaten, Champignons, Käse oder Zwiebeln", p: [1.00] },
            { name: "Portion Bacon", info: "2 Scheiben", p: [2.50] }
          ]
        },
        {
          titel: "Aufschnitt",
          hinweis: "2 Scheiben pro Portion",
          items: [
            { name: "Serranoschinken", p: [2.90] },
            { name: "Französische Salami", p: [2.90] },
            { name: "Pute", p: [2.10] },
            { name: "Kochschinken", p: [2.10] }
          ]
        },
        {
          titel: "Käse",
          hinweis: "2 Scheiben pro Portion",
          items: [
            { name: "Leerdammer", p: [2.10] },
            { name: "Bonbel Butterkäse", p: [2.10] },
            { name: "Gouda", p: [1.95] },
            { name: "Brie", p: [1.95] }
          ]
        },
        {
          titel: "Gemüse",
          items: [
            { name: "Portion Avocado", p: [2.50] },
            { name: "Tomaten", p: [2.00] },
            { name: "Gurke", p: [2.00] },
            { name: "Paprika", p: [2.00] }
          ]
        },
        {
          titel: "Aufstriche",
          items: [
            { name: "Butter", p: [1.20] },
            { name: "Frischkäse", info: "Natur, Meerrettich, Kräuter oder Curry", p: [1.40] },
            { name: "Tomatencreme", p: [1.40] },
            { name: "Honig-Feige-Senf", p: [1.40] },
            { name: "Apfel-Meerrettich", p: [1.40] },
            { name: "Basilikum-Creme", p: [1.40] },
            { name: "Senf-Gurken-Creme", p: [1.40] }
          ]
        },
        {
          titel: "Fisch",
          items: [
            { name: "Stremellachs", p: [3.50] },
            { name: "Räucherlachs", p: [4.50] }
          ]
        },
        {
          titel: "Süßes",
          items: [
            { name: "Marmelade", info: "Erdbeere, saure Kirsche, Marille oder schwarze Johannisbeere", p: [1.50] },
            { name: "Honig", p: [1.30] },
            { name: "Nutella", p: [1.10] }
          ]
        }
      ]
    }
  ]
};
