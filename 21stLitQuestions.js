// 21st Century Literature Questions
const litQuestions = [
    {
      "question": "Who is the author of The Penelopiad?",
      "type": "identification",
      "difficulty": "easy",
      "answer": 0,
      "options": [
        "Margaret Atwood",
        "Homer",
        "Laura Esquivel",
        "Ron Darvin"
      ]
    },
    {
      "question": "The Penelopiad reimagines which classical work?",
      "type": "identification",
      "difficulty": "easy",
      "answer": 1,
      "options": [
        "The Iliad",
        "Homer's Odyssey",
        "The Aeneid",
        "Metamorphoses"
      ]
    },
    {
      "question": "From whose perspective is The Penelopiad primarily told?",
      "type": "perspective",
      "difficulty": "easy",
      "answer": 2,
      "options": [
        "Odysseus, recounting his journey",
        "The twelve maids, collectively",
        "Penelope, speaking from the afterlife",
        "Telemachus, describing his search"
      ]
    },
    {
      "question": "Which perspective is explicitly offered in The Penelopiad regarding Penelope's life?",
      "type": "perspective",
      "difficulty": "medium",
      "answer": 0,
      "options": [
        "Feminist viewpoint on her experiences",
        "Strictly historical account of events",
        "Economic analysis of Ithaca's struggles",
        "Heroic portrayal matching traditional epics"
      ]
    },
    {
      "question": "In the plotting structure of The Penelopiad, what happens during the Exposition?",
      "type": "plot",
      "difficulty": "medium",
      "answer": 1,
      "options": [
        "Penelope directly confronts the executed maids.",
        "Penelope offers her life's version from the afterlife.",
        "Odysseus details his return and battle with suitors.",
        "The maids perform their first choral commentary."
      ]
    },
    {
      "question": "What key event occurs during the Rising Action of The Penelopiad?",
      "type": "plot",
      "difficulty": "medium",
      "answer": 3,
      "options": [
        "Penelope arranges her initial marriage to Odysseus.",
        "Penelope dictates her final thoughts from Hades.",
        "Penelope argues with Odysseus post-reunion.",
        "Penelope handles suitors and delays remarriage, aided by maids."
      ]
    },
    {
      "question": "What constitutes the Climax of The Penelopiad?",
      "type": "plot",
      "difficulty": "hard",
      "answer": 0,
      "options": [
        "Penelope faces the reality of her 12 maids' execution.",
        "Odysseus overcomes the final obstacle to reach home.",
        "Penelope chooses one suitor to finally remarry.",
        "The maids successfully plot to overthrow the suitors."
      ]
    },
    {
      "question": "What happens during the Falling Action of The Penelopiad?",
      "type": "plot",
      "difficulty": "medium",
      "answer": 2,
      "options": [
        "Penelope meticulously weaves a burial shroud.",
        "The maids deliver their judgment upon Odysseus.",
        "Penelope reflects on the maids' fate and her complicity.",
        "Odysseus justifies his actions to Penelope."
      ]
    },
    {
      "question": "How does The Penelopiad conclude (Resolution)?",
      "type": "plot",
      "difficulty": "medium",
      "answer": 1,
      "options": [
        "Penelope and Odysseus achieve a peaceful reconciliation.",
        "Penelope reflects with mixed feelings; maids' voices persist.",
        "The gods intervene to punish the household.",
        "Penelope establishes a new matriarchal order."
      ]
    },
    {
      "question": "What types of conflict are central to The Penelopiad?",
      "type": "conflict",
      "difficulty": "medium",
      "answer": 0,
      "options": [
        "Man vs Man & Man vs Self",
        "Man vs Nature & Man vs Society",
        "Man vs Technology & Man vs Fate",
        "Man vs Society & Man vs Supernatural"
      ]
    },
    {
      "question": "Penelope's internal struggle involves reconciling loyalty to Odysseus with:",
      "type": "conflict",
      "difficulty": "hard",
      "answer": 3,
      "options": [
        "Her ambition for personal power.",
        "Her hidden affection for the suitors.",
        "Her secret desire to flee Ithaca.",
        "Her own powerlessness and the maids' unjust end."
      ]
    },
    {
      "question": "What narrative technique allows for reinterpreting classical myths in The Penelopiad?",
      "type": "narrative_structure",
      "difficulty": "medium",
      "answer": 1,
      "options": [
        "Employing an omniscient third-person narrator.",
        "Using Penelope's retrospective afterlife POV.",
        "Alternating between multiple distinct narrators.",
        "Strictly adhering to the maids' viewpoints."
      ]
    },
    {
      "question": "Why might Penelope be considered an Unreliable Narrator?",
      "type": "narrative_technique",
      "difficulty": "medium",
      "answer": 2,
      "options": [
        "Because her account is set in the distant past.",
        "Due to deliberate contradictions with Homer's text.",
        "As her recollections are subjective and potentially biased.",
        "Her use of satirical language clouds the facts."
      ]
    },
    {
      "question": "What role do the twelve executed maids play structurally in The Penelopiad?",
      "type": "narrative_element",
      "difficulty": "medium",
      "answer": 0,
      "options": [
        "They function as a Chorus offering counter-narrative.",
        "They serve as the primary antagonists.",
        "They are merely background figures without agency.",
        "They narrate Odysseus's specific episodes."
      ]
    },
    {
      "question": "The Penelopiad's reference to and reinterpretation of the Odyssey exemplifies which literary device?",
      "type": "literary_device",
      "difficulty": "easy",
      "answer": 1,
      "options": [
        "Metaphor",
        "Allusion",
        "Simile",
        "Personification"
      ]
    },
    {
      "question": "Reinterpreting the Odyssey to challenge its traditional narratives and power structures is an example of:",
      "type": "literary_concept",
      "difficulty": "hard",
      "answer": 3,
      "options": [
        "Satirical analysis",
        "Magical Realist overlay",
        "Existentialist critique",
        "Deconstruction"
      ]
    },
    {
      "question": "How does The Penelopiad employ Satire?",
      "type": "literary_device",
      "difficulty": "medium",
      "answer": 0,
      "options": [
        "Using humor/exaggeration to critique patriarchal norms.",
        "By mimicking the serious, epic tone of Homer.",
        "Focusing solely on the comedic aspects of the myth.",
        "Directly mocking the actions of the Greek gods."
      ]
    },
    {
      "question": "Penelope describing her wifely role as a 'trap' or 'cage' uses which language device?",
      "type": "language_device",
      "difficulty": "easy",
      "answer": 1,
      "options": [
        "Simile",
        "Metaphor",
        "Irony",
        "Allusion"
      ]
    },
    {
      "question": "The contrast between Penelope's public persona and her private feelings primarily creates:",
      "type": "language_device",
      "difficulty": "medium",
      "answer": 2,
      "options": [
        "Extended Metaphor",
        "Historical Allusion",
        "Situational Irony",
        "Simple Simile"
      ]
    },
    {
      "question": "Penelope comparing a woman's life to a 'sieve' leaking hopes uses:",
      "type": "language_device",
      "difficulty": "easy",
      "answer": 3,
      "options": [
        "Metaphor",
        "Irony",
        "Allusion",
        "Simile"
      ]
    },
    {
      "question": "Giving the executed maids the ability to speak their side employs:",
      "type": "language_device",
      "difficulty": "easy",
      "answer": 0,
      "options": [
        "Personification",
        "Metaphor",
        "Simile",
        "Irony"
      ]
    },
    {
      "question": "Which literary movement closely relates to The Penelopiad's female-centric reinterpretation?",
      "type": "literary_movement",
      "difficulty": "easy",
      "answer": 1,
      "options": [
        "Magical Realism",
        "Feminism",
        "Gothic Literature",
        "Existentialism"
      ]
    },
    {
      "question": "The genre involving reimagining ancient myths, like The Penelopiad, is known as:",
      "type": "genre",
      "difficulty": "medium",
      "answer": 2,
      "options": [
        "Historical Fiction",
        "Gothic Literature",
        "Mythic Fiction",
        "Magical Realism"
      ]
    },
    {
      "question": "Penelope narrating from the underworld, blending real and supernatural, shows traits of:",
      "type": "genre",
      "difficulty": "medium",
      "answer": 0,
      "options": [
        "Magical Realism",
        "Satire",
        "Mythic Fiction",
        "Feminism"
      ]
    },
    {
      "question": "Death, the underworld, and a dark atmosphere link The Penelopiad to elements of:",
      "type": "genre",
      "difficulty": "medium",
      "answer": 3,
      "options": [
        "Mythic Fiction",
        "Magical Realism",
        "Existentialism",
        "Gothic Literature"
      ]
    },
    {
      "question": "Penelope's reflections on life, death, meaning, and identity align with themes in:",
      "type": "literary_movement",
      "difficulty": "medium",
      "answer": 1,
      "options": [
        "Feminism",
        "Existentialism",
        "Post-Colonialism",
        "Gothic Literature"
      ]
    },
    {
      "question": "The Penelopiad's critique of traditional gender roles connects strongly to:",
      "type": "theme",
      "difficulty": "easy",
      "answer": 0,
      "options": [
        "Gender and Power Dynamics",
        "Existential Themes",
        "Mythological Accuracy",
        "Economic Structures"
      ]
    },
    {
      "question": "The novel's focus on the maids' fate and loyalty relates to themes of:",
      "type": "theme",
      "difficulty": "medium",
      "answer": 2,
      "options": [
        "Mythic Retelling Methods",
        "Critique of Gender Roles",
        "Questioning Loyalty and Justice",
        "Incorporation of Magic"
      ]
    },
    {
      "question": "Who is the author of Malinche?",
      "type": "identification",
      "difficulty": "easy",
      "answer": 1,
      "options": [
        "Margaret Atwood",
        "Laura Esquivel",
        "Jose Wendell P. Capili",
        "Ron Darvin"
      ]
    },
    {
      "question": "What is the primary historical context for the novel Malinche?",
      "type": "context",
      "difficulty": "easy",
      "answer": 0,
      "options": [
        "The Spanish Conquest of Mexico",
        "Ancient Greece during the Trojan War",
        "Europe during World War II",
        "Spanish colonization of the Philippines"
      ]
    },
    {
      "question": "What crucial role does Malinalli (Malinche) play in the historical events depicted?",
      "type": "character_role",
      "difficulty": "medium",
      "answer": 3,
      "options": [
        "A high-ranking Spanish noblewoman.",
        "The supreme leader of the Aztec empire.",
        "A warrior fighting against the Spanish forces.",
        "Translator and advisor to Hernán Cortés."
      ]
    },
    {
      "question": "In the plot of Malinche, what happens during the Rising Action?",
      "type": "plot",
      "difficulty": "medium",
      "answer": 1,
      "options": [
        "Malinalli enjoys a privileged noble childhood.",
        "She is given to Cortés, using her language skills.",
        "Cortés formally abandons Malinche for another.",
        "Malinche reflects on her life in later obscurity."
      ]
    },
    {
      "question": "What constitutes the Climax in the novel Malinche?",
      "type": "plot",
      "difficulty": "hard",
      "answer": 2,
      "options": [
        "Malinche's initial sale into childhood slavery.",
        "Malinche's arranged marriage to Juan Jaramillo.",
        "Malinche realizes her role in the Aztec Empire's fall.",
        "Malinche vividly recalls comforting childhood memories."
      ]
    },
    {
      "question": "What happens to Malinche in the Falling Action?",
      "type": "plot",
      "difficulty": "medium",
      "answer": 0,
      "options": [
        "Cortés leaves her; she's given to another officer.",
        "She leads a successful Indigenous uprising.",
        "She is welcomed back by her original Nahua tribe.",
        "She is appointed governor of a new Spanish province."
      ]
    },
    {
      "question": "Which literary device is used when Malinalli recalls her childhood years?",
      "type": "literary_device",
      "difficulty": "easy",
      "answer": 1,
      "options": [
        "Foreshadowing",
        "Flash Back",
        "Symbolism",
        "Metaphor"
      ]
    },
    {
      "question": "Using symbols like food, the sea, and the eagle to convey themes is:",
      "type": "literary_device",
      "difficulty": "easy",
      "answer": 2,
      "options": [
        "Metaphor",
        "Foreshadowing",
        "Symbolism",
        "Magical Realism"
      ]
    },
    {
      "question": "Suggesting the future hardships Malinalli will endure after enslavement is an example of:",
      "type": "literary_device",
      "difficulty": "medium",
      "answer": 3,
      "options": [
        "Symbolism",
        "Flash Back",
        "Magical Realism",
        "Foreshadowing"
      ]
    },
    {
      "question": "Malinalli's connection to the land and ancestral spirits reflects which literary style?",
      "type": "literary_style",
      "difficulty": "medium",
      "answer": 0,
      "options": [
        "Magical Realism",
        "Historical Fiction",
        "Post-Colonial Lit.",
        "Feminist Literature"
      ]
    },
    {
      "question": "Which of these is NOT listed as a major character in Malinche?",
      "type": "character_identification",
      "difficulty": "easy",
      "answer": 3,
      "options": [
        "Malinche",
        "Hernan Cortes",
        "Moctezuma II",
        "Penelope"
      ]
    },
    {
      "question": "What is the primary Point of View used in Malinche?",
      "type": "narrative_technique",
      "difficulty": "easy",
      "answer": 1,
      "options": [
        "Third-person limited",
        "First-person",
        "Third-person omniscient",
        "Second-person"
      ]
    },
    {
      "question": "Which of the following is NOT a major theme explored in Malinche?",
      "type": "theme",
      "difficulty": "medium",
      "answer": 2,
      "options": [
        "Identity struggles",
        "Loyalty and Betrayal",
        "Ancient Myth Retelling",
        "Power and Survival"
      ]
    },
    {
      "question": "Describing Malinche as 'caught between two worlds' is primarily a:",
      "type": "language_device",
      "difficulty": "easy",
      "answer": 0,
      "options": [
        "Metaphor",
        "Simile",
        "Personification",
        "Oxymoron"
      ]
    },
    {
      "question": "The phrase 'the land seems to react' uses which literary device?",
      "type": "language_device",
      "difficulty": "medium",
      "answer": 1,
      "options": [
        "Metaphor",
        "Personification",
        "Simile",
        "Hyperbole"
      ]
    },
    {
      "question": "Comparing speech to a serpent ('His words were like a serpent') uses:",
      "type": "language_device",
      "difficulty": "easy",
      "answer": 2,
      "options": [
        "Metaphor",
        "Personification",
        "Simile",
        "Apostrophe"
      ]
    },
    {
      "question": "Describing Malinche as both 'traitor' and 'hero' uses which device?",
      "type": "language_device",
      "difficulty": "medium",
      "answer": 3,
      "options": [
        "Simile",
        "Hyperbole",
        "Apostrophe",
        "Oxymoron"
      ]
    },
    {
      "question": "When Malinche speaks directly to the earth about sorrow, it is:",
      "type": "language_device",
      "difficulty": "medium",
      "answer": 0,
      "options": [
        "Apostrophe",
        "Oxymoron",
        "Simile",
        "Personification"
      ]
    },
    {
      "question": "The phrase 'heavy enough to crush the earth' describing grief is:",
      "type": "language_device",
      "difficulty": "easy",
      "answer": 1,
      "options": [
        "Oxymoron",
        "Hyperbole",
        "Simile",
        "Metaphor"
      ]
    },
    {
      "question": "Which literary movement examines colonization's impact, relevant to Malinche?",
      "type": "literary_movement",
      "difficulty": "medium",
      "answer": 0,
      "options": [
        "Post-Colonial Literature",
        "Magical Realism",
        "Feminism Literature",
        "Historical Fiction"
      ]
    },
    {
      "question": "What is poetry defined as in the reviewer?",
      "type": "definition",
      "difficulty": "easy",
      "answer": 2,
      "options": [
        "A factual historical narrative.",
        "A prose story from one viewpoint.",
        "Creative expression via language/rhythm.",
        "A critique of social norms."
      ]
    },
    {
      "question": "Who is the author of the poem 'Cronulla Beach'?",
      "type": "identification",
      "difficulty": "easy",
      "answer": 1,
      "options": [
        "Ron Darvin",
        "Jose Wendell P. Capili",
        "Laura Esquivel",
        "Margaret Atwood"
      ]
    },
    {
      "question": "What real-life event inspired 'Cronulla Beach'?",
      "type": "context",
      "difficulty": "medium",
      "answer": 0,
      "options": [
        "The 2005 Cronulla race riots.",
        "Early British settlement of Sydney.",
        "A famous surfing championship.",
        "Discovery of rare seashells."
      ]
    },
    {
      "question": "What does 'kurranulla' mean, according to the poem?",
      "type": "terminology",
      "difficulty": "medium",
      "answer": 3,
      "options": [
        "Term for white bodies",
        "Phrase for blood surging",
        "Name for Aboriginal landscapes",
        "The place of pink seashells"
      ]
    },
    {
      "question": "What is the profession of Jose Wendell P. Capili?",
      "type": "author_background",
      "difficulty": "medium",
      "answer": 1,
      "options": [
        "Elected Politician",
        "Filipino Academic/poet/author",
        "Investigative Journalist",
        "Professional Athlete"
      ]
    },
    {
      "question": "What does the beach symbolize in 'Cronulla Beach'?",
      "type": "symbolism",
      "difficulty": "medium",
      "answer": 0,
      "options": [
        "Place of reflection, belonging, dislocation.",
        "Solely a site for leisure and surfing.",
        "Pure nature untouched by humanity.",
        "Symbol of political struggle only."
      ]
    },
    {
      "question": "Who is the Persona (speaker) in 'Cronulla Beach' described as?",
      "type": "narrative_element",
      "difficulty": "medium",
      "answer": 2,
      "options": [
        "An active participant in the riots.",
        "A historian giving an objective account.",
        "An imaginary, welcoming coastal figure.",
        "A detached scientific observer."
      ]
    },
    {
      "question": "Who is the Addressee (audience) of 'Cronulla Beach'?",
      "type": "narrative_element",
      "difficulty": "medium",
      "answer": 1,
      "options": [
        "Specifically the individuals in the riots.",
        "The imaginary reader; anyone visiting the shore.",
        "Australian government authorities.",
        "Contemporary Filipino poets."
      ]
    },
    {
      "question": "Using descriptions like 'Salty Breeze Brushes...' employs which poetic element?",
      "type": "poetic_element",
      "difficulty": "easy",
      "answer": 0,
      "options": [
        "Imagery",
        "Metaphor",
        "Symbolism",
        "Hyperbole"
      ]
    },
    {
      "question": "Referring to the beach as 'a canvas painted by the ocean' uses:",
      "type": "poetic_element",
      "difficulty": "easy",
      "answer": 1,
      "options": [
        "Sensory Imagery",
        "Metaphor",
        "Direct Symbolism",
        "Extreme Hyperbole"
      ]
    },
    {
      "question": "Saying 'The waves crashed louder than a thousand storms' employs:",
      "type": "poetic_element",
      "difficulty": "easy",
      "answer": 3,
      "options": [
        "Visual Imagery",
        "Extended Metaphor",
        "Cultural Symbolism",
        "Hyperbole"
      ]
    },
    {
      "question": "Who wrote the play 'Waiting'?",
      "type": "identification",
      "difficulty": "easy",
      "answer": 2,
      "options": [
        "Jose Wendell P. Capili",
        "Laura Esquivel",
        "Ron Darvin",
        "Margaret Atwood"
      ]
    },
    {
      "question": "What is the central theme of the play 'Waiting'?",
      "type": "theme",
      "difficulty": "medium",
      "answer": 0,
      "options": [
        "Impact of separation on migrant families.",
        "Difficulties in international business.",
        "A history of Philippine independence.",
        "Critique of Canadian immigration policy."
      ]
    },
    {
      "question": "In 'Waiting', who is Isabel?",
      "type": "character_identification",
      "difficulty": "easy",
      "answer": 1,
      "options": [
        "Roberto's Canadian spouse.",
        "Filipina ex-wife of Roberto in Canada.",
        "A Canadian social worker.",
        "Miguel's close friend in Vancouver."
      ]
    },
    {
      "question": "What conflict does the character Miguel represent in 'Waiting'?",
      "type": "character_analysis",
      "difficulty": "medium",
      "answer": 3,
      "options": [
        "Job search struggles in a new country.",
        "Financial burdens common to immigrants.",
        "Generational clashes with his mother.",
        "Second-generation immigrant identity conflict."
      ]
    },
    {
      "question": "What leads to conflict for the character Roberto in 'Waiting'?",
      "type": "character_analysis",
      "difficulty": "hard",
      "answer": 0,
      "options": [
        "His failure to adapt and emotional detachment.",
        "Lack of job opportunities in the Philippines.",
        "Disputes with Canadian legal authorities.",
        "His own desire to remain in the Philippines."
      ]
    },
    {
      "question": "Where is the primary setting of the play 'Waiting'?",
      "type": "setting",
      "difficulty": "easy",
      "answer": 2,
      "options": [
        "Metro Manila, Philippines",
        "Downtown Toronto, Canada",
        "Vancouver, B.C., Canada",
        "Suburb of Los Angeles, USA"
      ]
    },
    {
      "question": "Which of the following is NOT listed as a theme in 'Waiting'?",
      "type": "theme",
      "difficulty": "medium",
      "answer": 3,
      "options": [
        "Homesickness/Nostalgia",
        "Migration/Family Separation",
        "Cultural Displacement",
        "Political Revolution"
      ]
    },
    {
      "question": "What is a key moral lesson from 'Waiting' about family love?",
      "type": "moral_lesson",
      "difficulty": "medium",
      "answer": 1,
      "options": [
        "Love inevitably fades with physical distance.",
        "Love persists, but reconnection requires effort.",
        "Reconnecting separated families is simple.",
        "Separation inherently strengthens family bonds."
      ]
    },
    {
      "question": "The play 'Waiting' suggests that immigrants deserve:",
      "type": "moral_lesson",
      "difficulty": "easy",
      "answer": 0,
      "options": [
        "Dignity, not judgment.",
        "Guaranteed financial aid.",
        "Preferential treatment.",
        "Simplified citizenship."
      ]
    }
  ];

// Add to window object if it exists (for integration with existing quiz structure)
if (typeof window !== 'undefined') {
    window.litQuestions = litQuestions;
} 