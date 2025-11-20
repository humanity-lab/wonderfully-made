const VARIATIONS = [
  // ======================================
  // CHROMOSOME PATTERNS (most common first)
  // ======================================

  {
    short: "46,XX",
    id: "46xx",
    category: "Chromosome Patterns",
    approx_prevalence: "very common (~49% of births)",
    text: "Many people assigned female at birth have 46,XX chromosomes. This is one of the two most common X/Y chromosome patterns in humans.",
  },
  {
    short: "46,XY",
    id: "46xy",
    category: "Chromosome Patterns",
    approx_prevalence: "very common (~49% of births)",
    text: "Many people assigned male at birth have 46,XY chromosomes. This is the other most common X/Y chromosome pattern in humans.",
  },
  {
    short: "47,XXY",
    id: "47xxy",
    category: "Chromosome Patterns",
    approx_prevalence: "uncommon (~0.1-0.2% of male births)",
    text: "Some people have 47,XXY chromosomes. This pattern occurs in roughly 0.1-0.2% of boys (about 1 in 500-1,000 male births), and many are never diagnosed.",
  },
  {
    short: "47,XYY",
    id: "47xyy",
    category: "Chromosome Patterns",
    approx_prevalence: "uncommon (~0.1% of male births)",
    text: "Some people have 47,XYY chromosomes. This pattern occurs in about 0.1% of boys (around 1 in 1,000 male births) and is often not detected without genetic testing.",
  },
  {
    short: "47,XXX",
    id: "47xxx",
    category: "Chromosome Patterns",
    approx_prevalence: "uncommon (~0.1% of female births)",
    text: "Some people have 47,XXX chromosomes. This pattern occurs in about 0.1% of girls (around 1 in 1,000 female births), and most never know unless they have genetic testing.",
  },
  {
    short: "45,X (Turner pattern)",
    id: "45x",
    category: "Chromosome Patterns",
    approx_prevalence: "uncommon (~0.04-0.05% of female births)",
    text: "Some people have a single X chromosome (45,X), often grouped under Turner patterns. This occurs in roughly 0.04-0.05% of girls (around 1 in 2,000-2,500 female births).",
  },
  {
    short: "General Mosaic Patterns",
    id: "mosaic_turner_xy",
    category: "Chromosome Patterns",
    approx_prevalence: "rare (<0.1% of births)",
    text: "Some people have a mix of cell lines, such as 45,X/46,XX or 45,X/46,XY. These mosaic patterns add even more diversity to how bodies develop.",
  },
  {
    short: "46,XX/46,XY Chimerism",
    id: "chimera_46xx_46xy",
    category: "Chromosome Patterns",
    approx_prevalence: "very rare (<0.01% of births)",
    text: "Some people develop from two fertilized eggs that merge, so different cells carry 46,XX or 46,XY chromosomes. This is called chimerism.",
  },
  {
    short: "45,X/46,XX Mosaic",
    id: "mosaic_45x_46xx",
    category: "Chromosome Patterns",
    approx_prevalence: "rare (<0.1% of births)",
    text: "Some people have a mix of 45,X and 46,XX cells. Mosaic patterns show how early development can branch in more than one direction.",
  },
  {
    short: "45,X/46,XY Mosaic",
    id: "mosaic_45x_46xy",
    category: "Chromosome Patterns",
    approx_prevalence: "rare (<0.1% of births)",
    text: "Some people have both 45,X and 46,XY cell lines. Mosaic patterns like this can shape bodies in many different ways.",
  },
  {
    short: "46,XX/47,XXX Mosaic",
    id: "mosaic_46xx_47xxx",
    category: "Chromosome Patterns",
    approx_prevalence: "rare (<0.1% of births)",
    text: "Some people have a mix of 46,XX and 47,XXX cells. Mosaicism adds natural variation across tissues and development.",
  },
  {
    short: "46,XY/47,XYY Mosaic",
    id: "mosaic_46xy_47xyy",
    category: "Chromosome Patterns",
    approx_prevalence: "rare (<0.1% of births)",
    text: "Some people have both 46,XY and 47,XYY cell lines. This mosaic pattern is usually seen only through chromosome testing.",
  },
  {
    short: "48,XXYY",
    id: "48xxyy",
    category: "Chromosome Patterns",
    approx_prevalence: "very rare (<0.01% of births)",
    text: "Some people have 48,XXYY chromosomes. This is one of several higher-order patterns involving both X and Y chromosomes.",
  },
  {
    short: "48,XXXY",
    id: "48xxxy",
    category: "Chromosome Patterns",
    approx_prevalence: "very rare (<0.01% of births)",
    text: "Some people have 48,XXXY chromosomes. This pattern is uncommon but fully part of human diversity.",
  },
  {
    short: "48,XYYY",
    id: "48xyyy",
    category: "Chromosome Patterns",
    approx_prevalence: "very rare (<0.01% of births)",
    text: "Some people have 48,XYYY chromosomes. This pattern is rare and usually identified only by chromosome analysis.",
  },
  {
    short: "49,XXXXY",
    id: "49xxxxy",
    category: "Chromosome Patterns",
    approx_prevalence: "extremely rare (<0.001% of births)",
    text: "Some people have 49,XXXXY chromosomes. This is a rare configuration showing how flexible chromosome counts can be.",
  },
  {
    short: "49,XXXYY",
    id: "49xxxyy",
    category: "Chromosome Patterns",
    approx_prevalence: "extremely rare (<0.001% of births)",
    text: "Some people have 49,XXXYY chromosomes. This rare pattern highlights the wide possibilities of X/Y arrangement.",
  },
  {
    short: "Isochromosome X",
    id: "isochromosome_x",
    category: "Chromosome Patterns",
    approx_prevalence: "rare (<0.1% of births)",
    text: "Some people have X chromosomes with duplicated arms, called isochromosomes. These arise naturally during cell division.",
  },
  {
    short: "X/Y Structural Variants",
    id: "x_y_structural",
    category: "Chromosome Patterns",
    approx_prevalence: "rare (<0.1% of births)",
    text: "Some people have structural changes on the X or Y—deletions, duplications, or translocations. These are part of ordinary genomic diversity.",
  },
  {
    short: "46,XX with Testes",
    id: "46xx_testicular",
    category: "Chromosome Patterns",
    approx_prevalence: "very rare (~1 in 20,000 males)",
    text: "A small number of people look typically male but have 46,XX chromosomes and develop testes. This is a naturally occurring developmental difference.",
  },

  // ======================================
  // HORMONE RESPONSE & HORMONE BALANCE
  // ======================================

  {
    short: "Androgen Insensitivity (AIS)",
    id: "ais_general",
    category: "Hormone Response",
    approx_prevalence: "very rare (<0.1% of XY births)",
    text: "Some people with 46,XY chromosomes have cells that do not fully respond to certain hormones such as testosterone. This group of patterns is often called androgen insensitivity.",
  },
  {
    short: "Partial AIS (PAIS)",
    id: "pais",
    category: "Hormone Response",
    approx_prevalence: "very rare (<0.01% of XY births)",
    text: "Some people with 46,XY chromosomes respond only partially to testosterone. This partial androgen insensitivity leads to many natural developmental paths.",
  },
  {
    short: "Complete AIS (CAIS)",
    id: "cais",
    category: "Hormone Response",
    approx_prevalence: "very rare (~1 in 20,000-100,000 XY births)",
    text: "Some people with 46,XY chromosomes do not respond to testosterone at all. Development typically follows a feminine pattern.",
  },
  {
    short: "5-Alpha-Reductase Variation",
    id: "five_alpha_reductase",
    category: "Hormone Response",
    approx_prevalence:
      "very rare (<0.01% of births; clustered in some families/regions)",
    text: "Some 46,XY people make testosterone but have changes in the enzyme 5-alpha-reductase, which converts it to a stronger form (DHT). This pattern is rare and can cluster in certain families and regions.",
  },
  {
    short: "17β-HSD Variation",
    id: "17b_hsd",
    category: "Hormone Response",
    approx_prevalence: "very rare (<0.01% of births)",
    text: "Some people have differences in 17β-hydroxysteroid dehydrogenase, an enzyme involved in hormone production. This shifts how hormones are balanced during development.",
  },
  {
    short: "Leydig Cell Differences",
    id: "leydig_hypoplasia",
    category: "Hormone Response",
    approx_prevalence: "very rare (<0.01% of births)",
    text: "Some people have Leydig cells that respond weakly or not at all to LH, which affects the amount of testosterone produced.",
  },
  {
    short: "Swyer Pattern (46,XY GD)",
    id: "swyer_syndrome",
    category: "Hormone Response",
    approx_prevalence: "very rare (<0.01% of births)",
    text: "Some people with 46,XY chromosomes develop typical female anatomy when the gonads do not form functioning testes. This is known as the Swyer pattern.",
  },
  {
    short: "Turner Patterns with Y Material",
    id: "turner_y_material",
    category: "Hormone Response",
    approx_prevalence: "rare (<0.1% of births)",
    text: "Some Turner patterns include a small amount of Y-chromosome material, which can shape how gonads develop and how hormones are produced.",
  },

  // ======================================
  // GONADAL DEVELOPMENT
  // ======================================

  {
    short: "Ovotesticular Development",
    id: "46xx_ovotesticular",
    category: "Gonadal Development",
    approx_prevalence: "very rare (~1 in 20,000 births)",
    text: "Some people develop both ovarian and testicular tissue, often with a 46,XX pattern. Ovotesticular development is rare but well described in medical literature.",
  },
  {
    short: "Complete Gonadal Dysgenesis",
    id: "complete_gonadal_dysgenesis",
    category: "Gonadal Development",
    approx_prevalence: "very rare (<0.01% of births)",
    text: "Some people form gonads that do not become typical ovaries or testes. This complete gonadal dysgenesis results in undeveloped or streak tissue.",
  },
  {
    short: "Partial Gonadal Dysgenesis",
    id: "partial_gonadal_dysgenesis",
    category: "Gonadal Development",
    approx_prevalence: "very rare (<0.01% of births)",
    text: "Some people form gonads that differentiate only partway toward ovaries or testes. This partial dysgenesis produces a wide range of natural outcomes.",
  },
  {
    short: "Testicular Regression",
    id: "testicular_regression",
    category: "Gonadal Development",
    approx_prevalence: "very rare (<0.01% of births)",
    text: "Some people begin forming testes early in development, but the tissue later regresses. This is known as testicular regression.",
  },
  {
    short: "Streak Gonads",
    id: "streak_gonads",
    category: "Gonadal Development",
    approx_prevalence: "very rare (<0.01% of births)",
    text: "Some people have streak gonads—thin, undeveloped tissue. This can occur in certain Turner-spectrum and 46,XY developmental patterns.",
  },

  // ======================================
  // ENZYME PATHWAYS (STEROID SYNTHESIS)
  // ======================================

  {
    short: "CAH - 21-Hydroxylase",
    id: "cah_21_hydroxylase",
    category: "Enzyme Pathways",
    approx_prevalence: "uncommon (~0.01% of births; about 1 in 10,000-15,000)",
    text: "The most common form of congenital adrenal hyperplasia (CAH) involves 21-hydroxylase. Differences in this enzyme change cortisol and androgen balance.",
  },
  {
    short: "CAH - 11β-Hydroxylase",
    id: "cah_11b_hydroxylase",
    category: "Enzyme Pathways",
    approx_prevalence: "very rare (<0.01% of births)",
    text: "Some people have CAH due to 11β-hydroxylase differences, which also affect steroid production and blood pressure.",
  },
  {
    short: "CAH - 3β-HSD",
    id: "cah_3b_hsd",
    category: "Enzyme Pathways",
    approx_prevalence: "very rare (<0.01% of births)",
    text: "Some people have CAH linked to 3β-HSD differences, affecting several hormone pathways before and after birth.",
  },
  {
    short: "StAR Pathway Differences",
    id: "star_deficiency",
    category: "Enzyme Pathways",
    approx_prevalence: "very rare (<0.01% of births)",
    text: "Some people have changes in the StAR pathway, which helps move cholesterol into mitochondria for hormone production.",
  },
  {
    short: "Aromatase Differences",
    id: "aromatase_diff",
    category: "Enzyme Pathways",
    approx_prevalence: "rare to very rare (<0.1% of births)",
    text: "Some people make or use estrogen differently because of aromatase differences. This can shape growth, bones, and body composition.",
  },

  // ======================================
  // RECEPTOR-LEVEL PATTERNS
  // ======================================

  {
    short: "Estrogen Receptors",
    id: "estrogen_receptor",
    category: "Receptor Patterns",
    approx_prevalence: "frequency not well established (likely uncommon)",
    text: "Some people have natural differences in estrogen receptors, affecting how tissues respond to estrogen throughout life.",
  },
  {
    short: "Progesterone Receptors",
    id: "progesterone_receptor",
    category: "Receptor Patterns",
    approx_prevalence: "frequency not well established (likely uncommon)",
    text: "Some people have variations in progesterone receptors, which can shape aspects of reproductive biology.",
  },
  {
    short: "LH Receptors",
    id: "lh_receptor",
    category: "Receptor Patterns",
    approx_prevalence: "frequency not well established (likely uncommon)",
    text: "Some people have differences in LH receptors, which signal the gonads to produce hormones.",
  },
  {
    short: "FSH Receptors",
    id: "fsh_receptor",
    category: "Receptor Patterns",
    approx_prevalence: "frequency not well established (likely uncommon)",
    text: "Some people have differences in FSH receptors, affecting how the body develops and maintains ovarian or testicular tissue.",
  },

  // ======================================
  // OVERVIEW / MORE
  // ======================================

  {
    short: "More Variations",
    id: "more_variations",
    category: "More",
    approx_prevalence: "rare to very rare (<0.1% of births)",
    text: "Researchers have documented dozens of X/Y chromosome, hormone, enzyme, receptor, and gonadal patterns beyond the familiar ones. Most are individually rare, but together they show that human biology is surprisingly diverse.",
  },
];
