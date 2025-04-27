// DRRR Questions
const drrrQuestions = [
  {
    question: "What is the fundamental definition of a volcano provided in the text?",
    type: "definition",
    difficulty: "easy",
    answer: 1,
    options: [
      "A mountain formed by tectonic plate movement.",
      "An opening in the Earth's crust through which materials erupt.",
      "A large body of magma beneath the Earth's surface.",
      "A type of earthquake."
    ]
  },
  {
    question: "What causes a volcanic eruption, according to the document?",
    type: "cause",
    difficulty: "medium",
    answer: 2,
    options: [
      "Movement of tectonic plates only.",
      "Heavy rainfall saturating the ground.",
      "Magma, gases, and heat pressure building beneath the Earth's surface.",
      "Solar flares heating the Earth's core."
    ]
  },
  {
    question: "Identify the two main types of volcanoes discussed.",
    type: "classification",
    difficulty: "easy",
    answer: 2,
    options: [
      "Cinder Cone and Lava Dome.",
      "Active and Dormant.",
      "Composite (Stratovolcanoes) and Shield volcanoes.",
      "Hotspot and Subduction volcanoes."
    ]
  },
  {
    question: "Which volcano type is described as having broad, gently sloping sides and runny lava?",
    type: "characteristics",
    difficulty: "medium",
    answer: 0,
    options: [
      "Shield Volcano.",
      "Hotspot Volcano.",
      "Composite (Stratovolcanoes).",
      "Cinder Cone Volcano."
    ]
  },
  {
    question: "Where are Composite (Stratovolcanoes) typically located?",
    type: "location",
    difficulty: "medium",
    answer: 2,
    options: [
      "In Constructive Plate Margins (Divergent).",
      "Only at Hotspots.",
      "In Destructive Plate Margins (Convergent).",
      "Along Transform Faults."
    ]
  },
  {
    question: "What type of plate movement occurs at a Destructive Plate Margin (Convergent Plate Margin)?",
    type: "definition",
    difficulty: "medium",
    answer: 2,
    options: [
      "Plates slide past each other horizontally.",
      "Plates move away from each other.",
      "Oceanic and Continental Plates move towards each other.",
      "Plates remain stationary."
    ]
  },
  {
    question: "What type of plate movement occurs at a Constructive Plate Margin (Divergent Plate Margin)?",
    type: "definition",
    difficulty: "medium",
    answer: 1,
    options: [
      "Plates slide past each other horizontally.",
      "Plates move away from each other.",
      "Oceanic and Continental Plates move towards each other.",
      "Plates collide and buckle upwards."
    ]
  },
  {
    question: "What defines a Hotspot Volcano?",
    type: "definition",
    difficulty: "medium",
    answer: 2,
    options: [
      "Volcanoes formed only by converging plates.",
      "Volcanoes located exclusively underwater.",
      "Volcanoes that lie outside plate margins or away from tectonic plate boundaries.",
      "The largest and most explosive type of volcano."
    ]
  },
  {
    question: "What percentage of the world's volcanoes are located on the Pacific Ring of Fire?",
    type: "fact",
    difficulty: "easy",
    answer: 2,
    options: [
      "50%",
      "60%",
      "75%.",
      "90%"
    ]
  },
  {
    question: "Approximately how many times do volcanic eruptions occur globally each year?",
    type: "fact",
    difficulty: "medium",
    answer: 2,
    options: [
      "5 times",
      "10 times",
      "50 times.",
      "100 times"
    ]
  },
  {
    question: "Which volcanic hazard is described as a mass of magma flowing down the slope?",
    type: "identification",
    difficulty: "easy",
    answer: 2,
    options: [
      "Pyroclastic Flow",
      "Lahar",
      "Lava Flow.",
      "Tephra Fall"
    ]
  },
  {
    question: "Besides Water Vapor, CO2, and SO2, name two other volcanic gases mentioned.",
    type: "listing",
    difficulty: "hard",
    answer: 2,
    options: [
      "Methane and Ammonia",
      "Oxygen and Nitrogen",
      "Hydrogen Sulfide and Hydrogen Halides.",
      "Carbon Monoxide and Radon"
    ]
  },
  {
    question: "What environmental effect can volcanic gases cause when combined with atmospheric water droplets?",
    type: "effect",
    difficulty: "medium",
    answer: 2,
    options: [
      "Increased Ozone",
      "Global Warming",
      "Acid Rain.",
      "Snowfall"
    ]
  },
  {
    question: "How do Pyroclastic Flows differ from Lava Flows in terms of speed and composition?",
    type: "comparison",
    difficulty: "hard",
    answer: 1,
    options: [
      "Pyroclastic flows are slower and liquid.",
      "Pyroclastic flows are faster and composed of fragmented materials.",
      "Lava flows are gaseous and faster.",
      "They are identical in speed and composition."
    ]
  },
  {
    question: "What is Tephra Fall?",
    type: "definition",
    difficulty: "medium",
    answer: 2,
    options: [
      "A type of volcanic gas.",
      "A flow of molten rock.",
      "Showers of fine to coarse-grained volcanic materials.",
      "A landslide on a volcano's slope."
    ]
  },
  {
    question: "What is the term for tephra with a diameter between 2 mm and 64 mm?",
    type: "classification",
    difficulty: "medium",
    answer: 1,
    options: [
      "Ash",
      "Lapilli.",
      "Blocks",
      "Bombs"
    ]
  },
  {
    question: "What are Ballistic Projectiles in the context of volcanic eruptions?",
    type: "definition",
    difficulty: "medium",
    answer: 2,
    options: [
      "Fine ash carried by wind.",
      "Flowing mixture of debris and water.",
      "Bombs or large materials spewed out of the volcano.",
      "Poisonous gases released."
    ]
  },
  {
    question: "What constitutes a Lahar?",
    type: "definition",
    difficulty: "medium",
    answer: 2,
    options: [
      "Solidified lava fragments.",
      "A cloud of volcanic ash.",
      "A flowing mixture of volcanic debris and water.",
      "A volcanic earthquake."
    ]
  },
  {
    question: "Differentiate between Primary/Hot Lahar and Secondary/Cold Lahar.",
    type: "comparison",
    difficulty: "hard",
    answer: 2,
    options: [
      "Primary lahar is slower than secondary lahar.",
      "Secondary lahar contains less water than primary lahar.",
      "Primary lahar occurs during eruptions, secondary lahar occurs after due to rainfall.",
      "Primary lahar is gaseous, secondary lahar is liquid."
    ]
  },
  {
    question: "What is a Volcanic Debris Avalanche?",
    type: "definition",
    difficulty: "medium",
    answer: 2,
    options: [
      "An eruption column collapse.",
      "A type of lava flow.",
      "Landslides along volcanic slopes.",
      "Underwater volcanic eruption."
    ]
  },
  {
    question: "Identify one positive effect of volcanic hazards mentioned in the text.",
    type: "effects",
    difficulty: "easy",
    answer: 2,
    options: [
      "Air Pollution.",
      "Loss of Life & Property.",
      "Fertile Soil.",
      "Disruption of Transportation."
    ]
  },
  {
    question: "Identify one negative effect of volcanic hazards mentioned in the text.",
    type: "effects",
    difficulty: "easy",
    answer: 2,
    options: [
      "Geothermal Energy.",
      "Fertile Soil.",
      "Loss of Life & Property.",
      "Tourism."
    ]
  },
  {
    question: "Which sign of an impending eruption involves the swelling or cracking of the volcano's surface?",
    type: "identification",
    difficulty: "medium",
    answer: 2,
    options: [
      "Increased Seismic Activity",
      "Gas Emissions",
      "Ground Deformation.",
      "Crater Glow"
    ]
  },
  {
    question: "What does a Crater Glow indicate?",
    type: "interpretation",
    difficulty: "medium",
    answer: 2,
    options: [
      "Reflection of moonlight.",
      "Forest fire near the crater.",
      "Hot magma nearing the surface.",
      "Lightning strike."
    ]
  },
  {
    question: "What action is recommended *before* a potential volcanic eruption?",
    type: "safety",
    difficulty: "easy",
    answer: 2,
    options: [
      "Wait inside until the eruption starts.",
      "Drive closer to observe the volcano.",
      "Stay updated on alerts, prepare an emergency kit, identify evacuation routes.",
      "Ignore any warnings."
    ]
  },
  {
    question: "What should you do immediately if evacuation orders are given *during* a volcanic eruption?",
    type: "safety",
    difficulty: "easy",
    answer: 2,
    options: [
      "Wait for confirmation from neighbors.",
      "Finish packing non-essential items.",
      "Follow evacuation orders immediately.",
      "Stay indoors and seal windows."
    ]
  },
  {
    question: "What precaution should be taken regarding ash *after* a volcanic eruption?",
    type: "safety",
    difficulty: "medium",
    answer: 2,
    options: [
      "Use the ash as fertilizer immediately.",
      "Wash the ash into storm drains.",
      "Avoid ash-covered areas and clean it carefully.",
      "Ignore the ash as it will blow away."
    ]
  },
  {
    question: "What is Hydrometeorology a combination of?",
    type: "definition",
    difficulty: "easy",
    answer: 1,
    options: [
      "Geology and Oceanography.",
      "Hydrology and Meteorology.",
      "Climatology and Seismology.",
      "Atmospheric Chemistry and Physics."
    ]
  },
  {
    question: "What does Hydrology study?",
    type: "definition",
    difficulty: "medium",
    answer: 1,
    options: [
      "Atmospheric phenomena and weather.",
      "The distribution and movement of water.",
      "Earth's structure and composition.",
      "Ocean currents and tides."
    ]
  },
  {
    question: "What does Meteorology study?",
    type: "definition",
    difficulty: "medium",
    answer: 2,
    options: [
      "The distribution and movement of water.",
      "Volcanic activity.",
      "The atmosphere, atmospheric phenomena, and weather.",
      "Earthquakes and seismic waves."
    ]
  },
  {
    question: "What is the definition of a Typhoon provided in the text?",
    type: "definition",
    difficulty: "easy",
    answer: 2,
    options: [
      "A localized thunderstorm with hail.",
      "A rise in sea level due to wind.",
      "Severe weather disturbances with strong winds and heavy rains revolving around a central low-pressure area.",
      "A rotating column of wind over land."
    ]
  },
  {
    question: "What is the meaning of the Chinese term 'Tai Fung'?",
    type: "etymology",
    difficulty: "medium",
    answer: 2,
    options: [
      "Strong Water",
      "Great Storm",
      "Ta - Big, Fung - Wind.",
      "Heaven's Rain"
    ]
  },
  {
    question: "What is a Tropical Cyclone?",
    type: "definition",
    difficulty: "easy",
    answer: 1,
    options: [
      "A winter storm with snow.",
      "A storm system forming over warm ocean waters with low pressure, strong winds, and heavy rains.",
      "A dust storm in desert regions.",
      "An earthquake occurring under the sea."
    ]
  },
  {
    question: "What minimum sea surface temperature is typically required for tropical cyclone formation?",
    type: "condition",
    difficulty: "medium",
    answer: 2,
    options: [
      "15.5° C",
      "20.0° C",
      "26.5° C.",
      "30.0° C"
    ]
  },
  {
    question: "What does PAR (Philippine Area of Responsibility) signify?",
    type: "definition",
    difficulty: "medium",
    answer: 2,
    options: [
      "The region most prone to earthquakes.",
      "The zone where volcanic activity is highest.",
      "The area where PAGASA monitors weather occurrences.",
      "The airspace controlled by the Philippine Air Force."
    ]
  },
  {
    question: "Identify the three main structural parts of a tropical cyclone.",
    type: "structure",
    difficulty: "medium",
    answer: 2,
    options: [
      "Core, Mantle, Crust.",
      "Updraft, Downdraft, Anvil.",
      "Eye, Eye Wall, Rain Bands.",
      "Storm Surge, Wind Field, Central Pressure."
    ]
  },
  {
    question: "What is located at the very center of a tropical cyclone and has the lowest atmospheric pressure?",
    type: "structure",
    difficulty: "easy",
    answer: 2,
    options: [
      "Rain Band",
      "Eye Wall",
      "Eye.",
      "Outer Edge"
    ]
  },
  {
    question: "Why does the Philippines frequently experience tropical cyclones?",
    type: "cause",
    difficulty: "hard",
    answer: 2,
    options: [
      "Because it is surrounded by cold ocean currents.",
      "Due to its high altitude.",
      "Due to its location in the Intertropical Convergence Zone (ITCZ).",
      "Because of frequent volcanic eruptions."
    ]
  },
  {
    question: "What is a tropical cyclone called in the North Atlantic Ocean?",
    type: "terminology",
    difficulty: "easy",
    answer: 2,
    options: [
      "Typhoon",
      "Cyclone",
      "Hurricane.",
      "Willy-willy"
    ]
  },
  {
    question: "What is a tropical cyclone called in Australian Waters?",
    type: "terminology",
    difficulty: "medium",
    answer: 3,
    options: [
      "Typhoon",
      "Cyclone",
      "Hurricane",
      "Willy-willy."
    ]
  },
  {
    question: "What does PAGASA stand for?",
    type: "acronym",
    difficulty: "medium",
    answer: 2,
    options: [
      "Philippine Association of Geological and Astronomical Sciences.",
      "Public Administration for Geophysical and Atmospheric Safety.",
      "Philippine Atmospheric Geophysical and Astronomical Services Administration.",
      "Pacific Area Geophysical and Astronomical Service Agency."
    ]
  },
  {
    question: "What is the purpose of the Public Storm Warning Signal (PSWS)?",
    type: "purpose",
    difficulty: "easy",
    answer: 2,
    options: [
      "To measure rainfall intensity.",
      "To predict earthquake occurrences.",
      "To warn the public of incoming weather disturbances.",
      "To announce public holidays."
    ]
  },
  {
    question: "According to the Revised PSWS, what is the typical lead time for PSWS #1?",
    type: "data interpretation",
    difficulty: "medium",
    answer: 3,
    options: [
      "12 hours",
      "18 hours",
      "24 hours",
      "36 hours."
    ]
  },
  {
    question: "What level of damage is associated with PSWS #5 winds?",
    type: "data interpretation",
    difficulty: "medium",
    answer: 3,
    options: [
      "No damage to very light damage.",
      "Light to moderate damage.",
      "Moderate to heavy damage.",
      "Very heavy to widespread damage."
    ]
  },
  {
    question: "Define Storm Surge.",
    type: "definition",
    difficulty: "medium",
    answer: 2,
    options: [
      "A large wave caused by earthquakes (tsunami).",
      "Normal high tide during a full moon.",
      "An unusual localized increase in seawater level due to storm winds and pressure.",
      "Flooding caused solely by heavy rainfall."
    ]
  },
  {
    question: "Is a storm surge considered a primary or secondary hazard associated with tropical cyclones?",
    type: "classification",
    difficulty: "medium",
    answer: 1,
    options: [
      "Primary hazard",
      "Secondary hazard.",
      "Tertiary hazard",
      "Not related to tropical cyclones"
    ]
  },
  {
    question: "What causes a 'Tidal Wave' as defined in the document (distinct from a storm surge)?",
    type: "cause",
    difficulty: "hard",
    answer: 3,
    options: [
      "Strong winds from a storm.",
      "Low atmospheric pressure.",
      "Underwater earthquakes.",
      "The unbalanced and gravitational influence of celestial bodies."
    ]
  },
  {
    question: "What weather phenomenon is associated with cumulonimbus clouds and is described as violent and transient?",
    type: "identification",
    difficulty: "easy",
    answer: 2,
    options: [
      "Typhoon",
      "Storm Surge",
      "Thunderstorm.",
      "El Niño"
    ]
  },
  {
    question: "What occurs during the Developing (Cumulus) Stage of a thunderstorm?",
    type: "process",
    difficulty: "medium",
    answer: 2,
    options: [
      "Heavy rain and hail.",
      "Downdrafts dominate the storm.",
      "Upward growth of a cumulus cloud due to continuous updraft and moisture supply.",
      "Lightning is most frequent."
    ]
  },
  {
    question: "What characterizes the Final (Dissipating) Stage of a thunderstorm?",
    type: "process",
    difficulty: "medium",
    answer: 2,
    options: [
      "Strong updrafts lift the cloud higher.",
      "The storm reaches its maximum intensity.",
      "Downdrafts dominate, preventing updrafts, and rainfall decreases.",
      "Hail formation begins."
    ]
  },
  {
    question: "What is lightning?",
    type: "definition",
    difficulty: "easy",
    answer: 2,
    options: [
      "The sound caused by rapidly expanding air.",
      "A type of rainfall.",
      "An abrupt, natural, visible high-voltage electrical discharge.",
      "Wind rotating in a column."
    ]
  },
  {
    question: "What causes the sound known as thunder?",
    type: "cause",
    difficulty: "medium",
    answer: 2,
    options: [
      "Clouds colliding with each other.",
      "The electrical discharge of lightning itself.",
      "The acoustic effect of the sudden expansion of air caused by heat from a lightning strike.",
      "Heavy rainfall hitting the ground."
    ]
  },
  {
    question: "What is a Lightning Strike?",
    type: "definition",
    difficulty: "easy",
    answer: 2,
    options: [
      "Lightning between two clouds.",
      "Lightning within a single cloud.",
      "When lightning hits an object on the ground.",
      "The sound that follows lightning."
    ]
  },
  {
    question: "What is Hail?",
    type: "definition",
    difficulty: "easy",
    answer: 2,
    options: [
      "Frozen rain (sleet).",
      "Snowflakes.",
      "A type of solid precipitation (ice pieces).",
      "Condensed water vapor."
    ]
  },
  {
    question: "What defines a Hailstorm?",
    type: "definition",
    difficulty: "medium",
    answer: 2,
    options: [
      "Any storm with strong winds.",
      "A storm that produces only rain.",
      "A thunderstorm that produces hail.",
      "A snowstorm with icy conditions."
    ]
  },
  {
    question: "What are Hailstones?",
    type: "definition",
    difficulty: "medium",
    answer: 2,
    options: [
      "Small pellets of frozen rain.",
      "Large snowflakes.",
      "Individual pieces of layered ice from a hailstorm.",
      "Frozen dew on the ground."
    ]
  },
  {
    question: "What is another name for Tornadoes, commonly used in the U.S.?",
    type: "terminology",
    difficulty: "easy",
    answer: 2,
    options: [
      "Cyclones",
      "Hurricanes",
      "Twisters.",
      "Waterspouts"
    ]
  },
  {
    question: "What is a Waterspout?",
    type: "definition",
    difficulty: "medium",
    answer: 2,
    options: [
      "A large wave.",
      "A type of fountain.",
      "A tornado that forms over water.",
      "Heavy rainfall over the sea."
    ]
  },
  {
    question: "What are Downbursts associated with thunderstorms?",
    type: "definition",
    difficulty: "hard",
    answer: 2,
    options: [
      "Upward currents of air.",
      "Rotating columns of wind.",
      "Localized descending strong winds in straight lines.",
      "Sheet lightning."
    ]
  },
  {
    question: "Which type of flood involves an abnormal rise of water level in rivers?",
    type: "identification",
    difficulty: "easy",
    answer: 2,
    options: [
      "Flash Flood",
      "Coastal Flood",
      "Riverine Flood.",
      "Urban Flood"
    ]
  },
  {
    question: "What characterizes a Flash Flood?",
    type: "characteristics",
    difficulty: "medium",
    answer: 2,
    options: [
      "Slow rise of water in coastal areas.",
      "Gradual overflowing of a large river system.",
      "Rapid, short-lived, violent arrival of water.",
      "Flooding caused by dam failure only."
    ]
  },
  {
    question: "List two examples of Flood Control measures mentioned in the document.",
    type: "listing",
    difficulty: "medium",
    answer: 2,
    options: [
      "Rain dances and cloud seeding.",
      "Building bridges and tunnels.",
      "Dams and Seawalls.",
      "Irrigation systems and wells."
    ]
  },
  {
    question: "What does ENSO stand for?",
    type: "acronym",
    difficulty: "easy",
    answer: 2,
    options: [
      "Eastern North Pacific Storm Oscillation",
      "Equatorial Near-Surface Oscillation",
      "El Niño Southern Oscillation.",
      "Enhanced Northern Summer Oscillation"
    ]
  },
  {
    question: "What is the primary cause of ENSO?",
    type: "cause",
    difficulty: "medium",
    answer: 2,
    options: [
      "Volcanic eruptions.",
      "Changes in Earth's orbit.",
      "Cyclic fluctuations of sea surface temperatures and atmospheric pressure.",
      "Deforestation."
    ]
  },
  {
    question: "What climatic condition characterizes El Niño?",
    type: "characteristics",
    difficulty: "medium",
    answer: 2,
    options: [
      "Unusual cooling of sea surface temperatures.",
      "Strengthening of trade winds.",
      "Prolonged unusual warming of sea surface temperatures.",
      "Increased rainfall globally."
    ]
  },
  {
    question: "What are typical effects of El Niño mentioned in the text?",
    type: "effects",
    difficulty: "medium",
    answer: 2,
    options: [
      "Excessive rainfall and flooding.",
      "Stronger typhoons.",
      "Drought, water shortages, crop damage, fires.",
      "Colder winters."
    ]
  },
  {
    question: "What climatic condition characterizes La Niña?",
    type: "characteristics",
    difficulty: "medium",
    answer: 2,
    options: [
      "Warming of sea surface temperatures.",
      "Weakening of trade winds.",
      "Strengthening of easterly trade winds and cold water upwelling.",
      "Decreased rainfall globally."
    ]
  },
  {
    question: "What are the typical effects of La Niña in the Philippines?",
    type: "effects",
    difficulty: "medium",
    answer: 2,
    options: [
      "Drought and water shortages.",
      "Weakening of typhoons.",
      "Near normal to above normal rainfall and more strong typhoons.",
      "Unusually warm sea temperatures."
    ]
  }
];

// Example placeholder for Math and Science questions
const mathQuestions = [];
const scienceQuestions = []; 