// General Biology Questions
const genBioQuestions = [
  {
    "question": "What is another term for Cell Division?",
    "type": "terminology",
    "difficulty": "easy",
    "answer": 1,
    "options": [
      "Cell Growth",
      "Cell Reproduction",
      "Cell Replacement",
      "Asexual Reproduction"
    ]
  },
  {
    "question": "Cell Division is linked to Cell Theory, which states that all cells come from:",
    "type": "concept",
    "difficulty": "easy",
    "answer": 0,
    "options": [
      "Preexisting cells",
      "Spontaneous generation",
      "Gamete fusion",
      "Nutrient absorption"
    ]
  },
  {
    "question": "Which of the following is NOT listed as a primary purpose of cell division?",
    "type": "purpose",
    "difficulty": "medium",
    "answer": 3,
    "options": [
      "Growth and Development",
      "Cell Replacement",
      "Asexual Reproduction",
      "Energy Production"
    ]
  },
  {
    "question": "How often does the human epidermis typically replace itself?",
    "type": "fact",
    "difficulty": "medium",
    "answer": 2,
    "options": [
      "Every 2 days",
      "Every week",
      "Every 2 weeks",
      "Every month"
    ]
  },
  {
    "question": "What is the key difference between Asexual and Sexual Reproduction regarding parent organisms?",
    "type": "comparison",
    "difficulty": "medium",
    "answer": 1,
    "options": [
      "Asexual uses two parents, Sexual uses one.",
      "Asexual uses one parent, Sexual uses two.",
      "Both use only one parent.",
      "Both require gametes."
    ]
  },
  {
    "question": "Offspring produced via Asexual Reproduction are genetically:",
    "type": "characteristics",
    "difficulty": "easy",
    "answer": 0,
    "options": [
      "Identical to the single parent",
      "A mix of two parents",
      "Different from the parent",
      "Similar but not identical"
    ]
  },
  {
    "question": "Why is the rate of cell division typically faster in asexual reproduction?",
    "type": "reasoning",
    "difficulty": "hard",
    "answer": 2,
    "options": [
      "It involves more complex DNA.",
      "It requires gamete formation.",
      "Lack of a nucleus and less complex DNA structure.",
      "It occurs only in multicellular organisms."
    ]
  },
  {
    "question": "What type of asexual reproduction is the most common form in bacteria?",
    "type": "example",
    "difficulty": "easy",
    "answer": 0,
    "options": [
      "Binary Fission",
      "Budding",
      "Fragmentation",
      "Sporulation"
    ]
  },
  {
    "question": "Which type of asexual reproduction involves breaking off a body part that grows into a new organism?",
    "type": "classification",
    "difficulty": "easy",
    "answer": 2,
    "options": [
      "Binary Fission",
      "Budding",
      "Fragmentation",
      "Parthenogenesis"
    ]
  },
  {
    "question": "Hydra reproduces asexually through which method?",
    "type": "example",
    "difficulty": "medium",
    "answer": 1,
    "options": [
      "Fragmentation",
      "Budding",
      "Sporulation",
      "Vegetative Reproduction"
    ]
  },
  {
    "question": "Asexual reproduction in plants using leaves, roots, or stems is called:",
    "type": "terminology",
    "difficulty": "medium",
    "answer": 3,
    "options": [
      "Budding",
      "Sporulation",
      "Regeneration",
      "Vegetative Reproduction"
    ]
  },
  {
    "question": "The ability of an organism to regrow certain body parts is known as:",
    "type": "definition",
    "difficulty": "easy",
    "answer": 0,
    "options": [
      "Regeneration",
      "Fragmentation",
      "Budding",
      "Sporulation"
    ]
  },
  {
    "question": "Producing hundreds of spores that germinate under favorable conditions is characteristic of:",
    "type": "classification",
    "difficulty": "medium",
    "answer": 2,
    "options": [
      "Parthenogenesis",
      "Regeneration",
      "Sporulation",
      "Budding"
    ]
  },
  {
    "question": "What is Parthenogenesis?",
    "type": "definition",
    "difficulty": "medium",
    "answer": 1,
    "options": [
      "Reproduction using spores.",
      "A female producing an embryo without sperm fertilization.",
      "Regrowing a lost body part.",
      "Splitting into two identical cells."
    ]
  },
  {
    "question": "What molecule carries the genetic information in a cell?",
    "type": "identification",
    "difficulty": "easy",
    "answer": 0,
    "options": [
      "DNA (Deoxyribonucleic Acid)",
      "RNA (Ribonucleic Acid)",
      "Protein",
      "Chromatin"
    ]
  },
  {
    "question": "What are the DNA-associated proteins that help wind the DNA thread called?",
    "type": "terminology",
    "difficulty": "easy",
    "answer": 1,
    "options": [
      "Chromatids",
      "Histones",
      "Centromeres",
      "Telomeres"
    ]
  },
  {
    "question": "What is the total number of chromosome pairs in a human somatic cell?",
    "type": "fact",
    "difficulty": "easy",
    "answer": 2,
    "options": [
      "46 pairs",
      "22 pairs",
      "23 pairs",
      "2 pairs"
    ]
  },
  {
    "question": "What term describes the number of chromosomes in a somatic cell (2n)?",
    "type": "terminology",
    "difficulty": "easy",
    "answer": 0,
    "options": [
      "Diploid Number",
      "Haploid Number",
      "Gamete Number",
      "Autosome Number"
    ]
  },
  {
    "question": "What term describes the number of chromosomes in a gamete (n)?",
    "type": "terminology",
    "difficulty": "easy",
    "answer": 1,
    "options": [
      "Diploid Number",
      "Haploid Number",
      "Somatic Number",
      "Chromosome Pair"
    ]
  },
  {
    "question": "How many pairs of autosomes (body chromosomes) do humans have?",
    "type": "fact",
    "difficulty": "easy",
    "answer": 1,
    "options": [
      "23 pairs",
      "22 pairs",
      "1 pair",
      "46 pairs"
    ]
  },
  {
    "question": "What is the sex chromosome pair for a human female?",
    "type": "fact",
    "difficulty": "easy",
    "answer": 2,
    "options": [
      "XY",
      "YY",
      "XX",
      "XO"
    ]
  },
  {
    "question": "Why do chromosomes become tightly condensed during cell division?",
    "type": "reasoning",
    "difficulty": "medium",
    "answer": 0,
    "options": [
      "To prevent entanglement and ensure proper distribution.",
      "To make DNA replication easier.",
      "To allow gene expression.",
      "To protect the DNA from damage."
    ]
  },
  {
    "question": "What are somatic cells?",
    "type": "definition",
    "difficulty": "easy",
    "answer": 3,
    "options": [
      "Sex cells (sperm and egg)",
      "Bacterial cells",
      "Cells undergoing meiosis",
      "Body cells other than sperm and egg cells"
    ]
  },
  {
    "question": "What is Chromatin?",
    "type": "definition",
    "difficulty": "medium",
    "answer": 1,
    "options": [
      "A duplicated chromosome.",
      "A complex of loose DNA, proteins, and RNA.",
      "The protein core DNA wraps around.",
      "The end structure of a chromosome."
    ]
  },
  {
    "question": "What is each strand of a duplicated chromosome called?",
    "type": "terminology",
    "difficulty": "easy",
    "answer": 2,
    "options": [
      "Centromere",
      "Kinetochore",
      "Chromatid",
      "Telomere"
    ]
  },
  {
    "question": "What are identical copies of a chromosome formed during DNA replication and joined at a centromere called?",
    "type": "terminology",
    "difficulty": "medium",
    "answer": 0,
    "options": [
      "Sister Chromatids",
      "Homologous Chromosomes",
      "Daughter Chromosomes",
      "Parent Chromosomes"
    ]
  },
  {
    "question": "What is the region of a condensed, pinched chromosome where sister chromatids attach?",
    "type": "terminology",
    "difficulty": "easy",
    "answer": 1,
    "options": [
      "Telomere",
      "Centromere",
      "Kinetochore",
      "Histone"
    ]
  },
  {
    "question": "What is the protein structure located at the centromere that attaches to spindle fibers?",
    "type": "terminology",
    "difficulty": "medium",
    "answer": 2,
    "options": [
      "Telomere",
      "Centromere",
      "Kinetochore",
      "Chromatin"
    ]
  },
  {
    "question": "What are Telomeres?",
    "type": "definition",
    "difficulty": "medium",
    "answer": 0,
    "options": [
      "Ends of the DNA molecule with repeated nucleotides.",
      "Proteins that DNA wraps around.",
      "The structure that connects sister chromatids.",
      "Fibers that pull chromosomes apart."
    ]
  },
  {
    "question": "What is the main purpose of Telomeres?",
    "type": "purpose",
    "difficulty": "hard",
    "answer": 3,
    "options": [
      "To initiate DNA replication.",
      "To control gene expression.",
      "To attach chromosomes to spindle fibers.",
      "To protect chromosome ends from degradation and fusion."
    ]
  },
  {
    "question": "The Cell Cycle involves distinct phases of growth, duplication, and:",
    "type": "process",
    "difficulty": "easy",
    "answer": 1,
    "options": [
      "Repair",
      "Division",
      "Differentiation",
      "Mutation"
    ]
  },
  {
    "question": "What are the three main stages of the Cell Cycle listed?",
    "type": "process",
    "difficulty": "easy",
    "answer": 0,
    "options": [
      "Interphase, Mitosis, Cytokinesis",
      "Growth, Synthesis, Division",
      "Prophase, Metaphase, Anaphase",
      "G1, S, G2"
    ]
  },
  {
    "question": "Which phase includes G1, S, and G2?",
    "type": "classification",
    "difficulty": "easy",
    "answer": 2,
    "options": [
      "Mitosis",
      "Cytokinesis",
      "Interphase",
      "M Phase"
    ]
  },
  {
    "question": "In which phase of Interphase does DNA replication occur?",
    "type": "process",
    "difficulty": "easy",
    "answer": 1,
    "options": [
      "Gap 1 (G1)",
      "Synthesis (S)",
      "Gap 2 (G2)",
      "Mitosis (M)"
    ]
  },
  {
    "question": "What happens during the G1 phase of Interphase?",
    "type": "process",
    "difficulty": "medium",
    "answer": 0,
    "options": [
      "Cell growth and increase in organelles",
      "DNA replication",
      "Preparation for mitosis, enzyme production",
      "Nuclear division"
    ]
  },
  {
    "question": "What is the primary event during the S phase?",
    "type": "process",
    "difficulty": "easy",
    "answer": 1,
    "options": [
      "Cell growth",
      "DNA synthesis (replication)",
      "Cytoplasm division",
      "Chromosome condensation"
    ]
  },
  {
    "question": "What occurs during the G2 phase?",
    "type": "process",
    "difficulty": "medium",
    "answer": 2,
    "options": [
      "DNA replication",
      "Initial cell growth",
      "Further growth, enzyme production, checkpoint",
      "Separation of sister chromatids"
    ]
  },
  {
    "question": "What process ensures daughter cells receive an exact copy of the parent's genetic material?",
    "type": "process",
    "difficulty": "medium",
    "answer": 0,
    "options": [
      "DNA replication during S phase",
      "Cytokinesis",
      "Chromosome condensation",
      "Spindle fiber formation"
    ]
  },
  {
    "question": "What is another term for Mitosis, referring specifically to nuclear division?",
    "type": "terminology",
    "difficulty": "medium",
    "answer": 1,
    "options": [
      "Cytokinesis",
      "Karyokinesis",
      "Interphase",
      "Meiosis"
    ]
  },
  {
    "question": "Which phase of Mitosis is characterized by the condensation of chromosomes and the disappearance of the nucleolus?",
    "type": "mitosis_phases",
    "difficulty": "easy",
    "answer": 0,
    "options": [
      "Prophase",
      "Metaphase",
      "Anaphase",
      "Telophase"
    ]
  },
  {
    "question": "During which phase of Mitosis do chromosomes align at the cell's equator (metaphase plate)?",
    "type": "mitosis_phases",
    "difficulty": "easy",
    "answer": 1,
    "options": [
      "Prophase",
      "Metaphase",
      "Anaphase",
      "Telophase"
    ]
  },
  {
    "question": "In which phase of Mitosis do sister chromatids separate and move to opposite poles?",
    "type": "mitosis_phases",
    "difficulty": "easy",
    "answer": 2,
    "options": [
      "Prophase",
      "Metaphase",
      "Anaphase",
      "Telophase"
    ]
  },
  {
    "question": "What happens during Telophase?",
    "type": "mitosis_phases",
    "difficulty": "medium",
    "answer": 3,
    "options": [
      "Chromosomes condense.",
      "Chromosomes align at the equator.",
      "Sister chromatids separate.",
      "Nuclear envelope reforms, chromosomes decondense."
    ]
  },
  {
    "question": "What structures form the spindle fibers in animal cells?",
    "type": "structure",
    "difficulty": "medium",
    "answer": 0,
    "options": [
      "Centrioles (within the centrosome)",
      "Kinetochores",
      "Ribosomes",
      "Cell wall"
    ]
  },
  {
    "question": "How do spindle fibers form in plant cells?",
    "type": "comparison",
    "difficulty": "medium",
    "answer": 1,
    "options": [
      "From centrioles",
      "Without centrioles (from microtubule organizing centers)",
      "From the cell wall",
      "From the nucleolus"
    ]
  },
  {
    "question": "What protein complex holds sister chromatids together before Anaphase?",
    "type": "structure",
    "difficulty": "hard",
    "answer": 2,
    "options": [
      "Kinetochore",
      "Centromere",
      "Cohesin",
      "Histone"
    ]
  },
  {
    "question": "What is Cytokinesis?",
    "type": "definition",
    "difficulty": "easy",
    "answer": 0,
    "options": [
      "Division of the cytoplasm",
      "Division of the nucleus",
      "Replication of DNA",
      "Condensation of chromosomes"
    ]
  },
  {
    "question": "How does cytokinesis occur in animal cells?",
    "type": "process",
    "difficulty": "medium",
    "answer": 1,
    "options": [
      "Formation of a cell plate",
      "Formation of a cleavage furrow by a contractile ring",
      "Building a new cell wall",
      "Splitting of the nucleus"
    ]
  },
  {
    "question": "How does cytokinesis occur in plant cells?",
    "type": "process",
    "difficulty": "medium",
    "answer": 0,
    "options": [
      "Formation of a cell plate from vesicles",
      "Formation of a cleavage furrow",
      "Constriction by actin fibers",
      "Dissolving the middle lamella"
    ]
  },
  {
    "question": "Cell division rates are generally higher in which areas?",
    "type": "rate",
    "difficulty": "medium",
    "answer": 2,
    "options": [
      "Low-wear areas like nerve tissue",
      "Areas with slow growth",
      "High-wear areas like skin or intestinal lining",
      "Mature, non-growing tissues"
    ]
  },
  {
    "question": "Which cell type listed has the shortest life span/fastest replacement rate?",
    "type": "rate",
    "difficulty": "medium",
    "answer": 1,
    "options": [
      "Liver cell",
      "Internal lining of the intestine",
      "Bone Cell",
      "Skin Cell"
    ]
  },
  {
    "question": "What is the G0 phase?",
    "type": "process",
    "difficulty": "medium",
    "answer": 3,
    "options": [
      "A phase of rapid division.",
      "The phase before G1.",
      "A checkpoint within Mitosis.",
      "A non-dividing state where cells perform normal functions."
    ]
  },
  {
    "question": "Messages from nearby cells or remote parts of the body that regulate the cell cycle are classified as:",
    "type": "regulation",
    "difficulty": "easy",
    "answer": 0,
    "options": [
      "External Factors",
      "Internal Factors",
      "Physical Signals",
      "Chemical Signals"
    ]
  },
  {
    "question": "Cell-to-cell contact preventing further division is an example of:",
    "type": "regulation",
    "difficulty": "medium",
    "answer": 2,
    "options": [
      "Anchorage Dependence",
      "Chemical Signaling",
      "Contact Inhibition",
      "Growth Factor Stimulation"
    ]
  },
  {
    "question": "The requirement for cells to be attached to a surface to divide is called:",
    "type": "regulation",
    "difficulty": "medium",
    "answer": 1,
    "options": [
      "Contact Inhibition",
      "Anchorage Dependence",
      "Sporulation",
      "Binary Fission"
    ]
  },
  {
    "question": "Molecules found within the cytoplasm that regulate the cell cycle are known as:",
    "type": "regulation",
    "difficulty": "easy",
    "answer": 1,
    "options": [
      "External Factors",
      "Internal Factors",
      "Growth Factors",
      "Receptors"
    ]
  },
  {
    "question": "Which internal factor transfers a phosphate group to accelerate or change a target molecule?",
    "type": "regulation",
    "difficulty": "medium",
    "answer": 0,
    "options": [
      "Kinases",
      "Cyclins",
      "Growth Factors",
      "Platelets"
    ]
  },
  {
    "question": "What group of proteins activates kinases and helps control the cell cycle, being rapidly destroyed at certain points?",
    "type": "regulation",
    "difficulty": "medium",
    "answer": 1,
    "options": [
      "Kinases",
      "Cyclins",
      "Erythropoietin",
      "Receptors"
    ]
  },
  {
    "question": "Which factor specifically stimulates the production of red blood cells?",
    "type": "regulation",
    "difficulty": "medium",
    "answer": 2,
    "options": [
      "Growth Factors (general)",
      "Platelets",
      "Erythropoietin",
      "Cyclins"
    ]
  },
  {
    "question": "Which factor stores a substance helpful for wound repair?",
    "type": "regulation",
    "difficulty": "medium",
    "answer": 3,
    "options": [
      "Erythropoietin",
      "Kinases",
      "Cyclins",
      "Platelets"
    ]
  },
  {
    "question": "The partnership between which two internal factors helps advance the cell cycle through different stages?",
    "type": "regulation",
    "difficulty": "hard",
    "answer": 0,
    "options": [
      "Kinases and Cyclins",
      "Platelets and Growth Factors",
      "Erythropoietin and Receptors",
      "DNA and Histones"
    ]
  }
];

// Add to window object if it exists (for integration with existing quiz structure)
if (typeof window !== 'undefined') {
    window.genBioQuestions = genBioQuestions;
} 