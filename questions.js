// DRRR Questions
const drrrQuestions = [
  {
    "question": "What is the fundamental definition of a volcano provided in the text?",
    "type": "definition",
    "difficulty": "easy",
    "answer": 0,
    "options": [
      "An opening in the Earth's crust where materials erupt.",
      "A large body of magma found deep beneath the surface.",
      "A mountain formed solely by tectonic plate collisions.",
      "A specific type of seismic earthquake activity."
    ]
  },
  {
    "question": "What causes a volcanic eruption, according to the document?",
    "type": "cause",
    "difficulty": "medium",
    "answer": 1,
    "options": [
      "Only the shifting movement of tectonic plates.",
      "Build-up of magma, gases, and heat pressure below.",
      "Heavy rainfall saturating ground above a magma chamber.",
      "Solar flares significantly heating the Earth's core."
    ]
  },
  {
    "question": "Identify the two main types of volcanoes discussed.",
    "type": "classification",
    "difficulty": "easy",
    "answer": 3,
    "options": [
      "Cinder Cone and Lava Dome volcanoes.",
      "Active and Dormant volcanoes based on activity.",
      "Hotspot and Subduction zone volcanoes.",
      "Composite (Stratovolcanoes) and Shield volcanoes."
    ]
  },
  {
    "question": "Which volcano type is described as having broad, gently sloping sides and runny lava?",
    "type": "characteristics",
    "difficulty": "medium",
    "answer": 2,
    "options": [
      "Hotspot Volcano, known for isolated locations.",
      "Composite (Stratovolcano), with steep slopes.",
      "Shield Volcano, formed by fluid lava flows.",
      "Cinder Cone Volcano, built from lava fragments."
    ]
  },
  {
    "question": "Where are Composite (Stratovolcanoes) typically located?",
    "type": "location",
    "difficulty": "medium",
    "answer": 1,
    "options": [
        "At Constructive (Divergent) Plate Margins.",
        "At Destructive (Convergent) Plate Margins.",
        "Exclusively at mid-ocean ridges or hotspots.",
        "Along Transform Faults (sliding plates)."
    ]
  },
  {
    "question": "What type of plate movement occurs at a Destructive Plate Margin (Convergent Plate Margin)?",
    "type": "definition",
    "difficulty": "medium",
    "answer": 0,
    "options": [
        "Oceanic and Continental Plates move towards each other.",
        "Tectonic plates slide horizontally past one another.",
        "Continental plates move away, creating rifts.",
        "Plates remain stationary relative to each other."
    ]
  },
    {
    "question": "What type of plate movement occurs at a Constructive Plate Margin (Divergent Plate Margin)?",
    "type": "definition",
    "difficulty": "medium",
    "answer": 3,
    "options": [
        "Plates slide past each other horizontally.",
        "Oceanic/Continental Plates move towards each other.",
        "Two plates collide and buckle upwards.",
        "Oceanic/Continental Plates move away from each other."
    ]
  },
  {
    "question": "What defines a Hotspot Volcano?",
    "type": "definition",
    "difficulty": "medium",
    "answer": 0,
    "options": [
        "Volcanoes lying outside plate margins, away from boundaries.",
        "Volcanoes formed only by converging plate collision.",
        "Volcanoes located exclusively deep underwater near trenches.",
        "The largest and most historically explosive volcano type."
    ]
  },
  {
    "question": "What percentage of the world's volcanoes are located on the Pacific Ring of Fire?",
    "type": "fact",
    "difficulty": "easy",
    "answer": 1,
    "options": [
      "Approximately 50%",
      "Around 75%.",
      "About 60%",
      "Nearly 90%"
    ]
  },
  {
    "question": "Approximately how many times do volcanic eruptions occur globally each year?",
    "type": "fact",
    "difficulty": "medium",
    "answer": 0,
    "options": [
      "Roughly 50 times.",
      "About 5 times.",
      "Around 10 times.",
      "Over 100 times."
    ]
  },
  {
    "question": "Which volcanic hazard is described as a mass of magma flowing down the slope?",
    "type": "identification",
    "difficulty": "easy",
    "answer": 3,
    "options": [
      "Pyroclastic Flow (hot gas/debris)",
      "Lahar (mudflow/debris flow)",
      "Tephra Fall (airborne particles)",
      "Lava Flow (molten rock)."
    ]
  },
  {
    "question": "Besides Water Vapor, CO2, and SO2, name two other volcanic gases mentioned.",
    "type": "listing",
    "difficulty": "hard",
    "answer": 1,
    "options": [
        "Methane and Ammonia",
        "Hydrogen Sulfide and Hydrogen Halides.",
        "Oxygen and Nitrogen",
        "Carbon Monoxide and Radon"
    ]
  },
  {
    "question": "What environmental effect can volcanic gases cause when combined with atmospheric water droplets?",
    "type": "effect",
    "difficulty": "medium",
    "answer": 0,
    "options": [
        "Acid Rain formation.",
        "Increased Ozone layer thickness.",
        "Significant Global Warming.",
        "Unseasonal Snowfall."
    ]
  },
  {
    "question": "How do Pyroclastic Flows differ from Lava Flows in terms of speed and composition?",
    "type": "comparison",
    "difficulty": "hard",
    "answer": 2,
     "options": [
        "Pyroclastic flows are slower, liquid streams.",
        "Lava flows are gaseous clouds, traveling faster.",
        "Pyroclastic flows are faster, fragmented hot materials/gas.",
        "They are essentially identical in speed/composition."
        ]
  },
  {
    "question": "What is Tephra Fall?",
    "type": "definition",
    "difficulty": "medium",
    "answer": 1,
     "options": [
        "A type of poisonous volcanic gas emission.",
        "Showers of fine to coarse volcanic particles from the air.",
        "A specific type of slow-moving, viscous lava.",
        "A landslide occurring on a volcano's steep slope."
        ]
  },
  {
    "question": "What is the term for tephra with a diameter between 2 mm and 64 mm?",
    "type": "classification",
    "difficulty": "medium",
    "answer": 0,
    "options": [
      "Lapilli.",
      "Ash (<2 mm).",
      "Blocks (>64 mm, solid).",
      "Bombs (>64 mm, molten)."
    ]
  },
  {
    "question": "What are Ballistic Projectiles in the context of volcanic eruptions?",
    "type": "definition",
    "difficulty": "medium",
    "answer": 1,
    "options": [
        "Fine ash particles carried long distances by wind.",
        "Spewed bombs or large rock fragments traveling through air.",
        "Flowing mixtures of hot volcanic debris and water.",
        "Toxic gases released from volcanic vents/fumaroles."
    ]
  },
  {
    "question": "What constitutes a Lahar?",
    "type": "definition",
    "difficulty": "medium",
    "answer": 0,
    "options": [
        "A flowing mixture of volcanic debris and water.",
        "Large, solidified fragments of erupted lava.",
        "A dense cloud of volcanic ash and gas.",
        "A minor earthquake triggered by magma movement."
    ]
  },
  {
    "question": "Differentiate between Primary/Hot Lahar and Secondary/Cold Lahar.",
    "type": "comparison",
    "difficulty": "hard",
    "answer": 0,
     "options": [
        "Primary is eruption-associated; Secondary is often rainfall-induced.",
        "Primary lahars are significantly slower than secondary lahars.",
        "Secondary lahars contain much less water than primary lahars.",
        "Primary lahars are gaseous; secondary lahars are liquid mud."
        ]
  },
  {
    "question": "What is a Volcanic Debris Avalanche?",
    "type": "definition",
    "difficulty": "medium",
    "answer": 3,
    "options": [
        "The collapse of a vertical eruption column.",
        "A specific type of very fluid lava flow.",
        "An explosive underwater volcanic eruption.",
        "Rapid landslides along the volcano's slopes."
    ]
  },
  {
    "question": "Identify one positive effect of volcanic hazards mentioned in the text.",
    "type": "effects",
    "difficulty": "easy",
    "answer": 1,
    "options": [
        "Increased air pollution.",
        "Creation of fertile soil.",
        "Widespread loss of life.",
        "Major transport disruption."
        ]
  },
    {
    "question": "Identify one negative effect of volcanic hazards mentioned in the text.",
    "type": "effects",
    "difficulty": "easy",
    "answer": 0,
    "options": [
        "Loss of life and property damage.",
        "Generation of geothermal energy.",
        "Enrichment of soil for farming.",
        "Creation of tourist attractions."
        ]
  },
  {
    "question": "Which sign of an impending eruption involves the swelling or cracking of the volcano's surface?",
    "type": "identification",
    "difficulty": "medium",
    "answer": 1,
    "options": [
      "Increased Seismic Activity",
      "Ground Deformation.",
      "Gas Emissions changes",
      "Crater Glow visibility"
    ]
  },
   {
    "question": "What does a Crater Glow indicate?",
    "type": "interpretation",
    "difficulty": "medium",
    "answer": 0,
    "options": [
        "Hot magma rising close to the surface.",
        "Reflection of moonlight off crater walls.",
        "A forest fire burning near the rim.",
        "A recent lightning strike in the crater."
    ]
  },
   {
    "question": "What action is recommended *before* a potential volcanic eruption?",
    "type": "safety",
    "difficulty": "easy",
    "answer": 1,
    "options": [
        "Wait indoors until eruption starts.",
        "Stay updated, prepare kit, know routes.",
        "Drive closer for better observation.",
        "Ignore warnings until ash falls."
        ]
  },
  {
    "question": "What should you do immediately if evacuation orders are given *during* a volcanic eruption?",
    "type": "safety",
    "difficulty": "easy",
    "answer": 0,
    "options": [
        "Follow evacuation orders without delay.",
        "Wait for confirmation from neighbors.",
        "Finish packing non-essential items.",
        "Decide to stay indoors and seal windows."
    ]
  },
  {
    "question": "What precaution should be taken regarding ash *after* a volcanic eruption?",
    "type": "safety",
    "difficulty": "medium",
    "answer": 1,
    "options": [
        "Use fallen ash as garden fertilizer.",
        "Avoid ash areas; clean carefully.",
        "Quickly wash ash into storm drains.",
        "Ignore ash as it will blow away."
    ]
  },
  {
    "question": "What is Hydrometeorology a combination of?",
    "type": "definition",
    "difficulty": "easy",
    "answer": 3,
    "options": [
        "Geology and Oceanography.",
        "Climatology and Seismology.",
        "Atmospheric Chemistry/Physics.",
        "Hydrology and Meteorology."
        ]
  },
   {
    "question": "What does Hydrology study?",
    "type": "definition",
    "difficulty": "medium",
    "answer": 0,
    "options": [
        "The distribution and movement of water.",
        "Atmospheric phenomena and weather.",
        "The Earth's physical structure.",
        "Ocean currents, tides, marine life."
    ]
  },
   {
    "question": "What does Meteorology study?",
    "type": "definition",
    "difficulty": "medium",
    "answer": 1,
    "options": [
        "The distribution/movement of water.",
        "The atmosphere, phenomena, weather.",
        "Volcanic processes and hazards.",
        "Earthquakes and seismic waves."
    ]
  },
  {
    "question": "What is the definition of a Typhoon provided in the text?",
    "type": "definition",
    "difficulty": "easy",
    "answer": 0,
    "options": [
        "Severe disturbance with strong winds/rain around low-pressure.",
        "Localized thunderstorm producing hail/strong winds.",
        "Abnormal rise in sea level caused by strong winds.",
        "Violently rotating column of air (cloud to ground)."
    ]
  },
   {
    "question": "What is the meaning of the Chinese term 'Tai Fung'?",
    "type": "etymology",
    "difficulty": "medium",
    "answer": 1,
    "options": [
        "Strong Water",
        "Ta - Big, Fung - Wind.",
        "Great Storm",
        "Heaven's Rain"
    ]
  },
    {
    "question": "What is a Tropical Cyclone?",
    "type": "definition",
    "difficulty": "easy",
    "answer": 3,
    "options": [
        "A large winter storm system with heavy snow.",
        "A swirling dust storm common in arid regions.",
        "An earthquake occurring beneath the ocean.",
        "Storm system over warm oceans (low pressure, wind, rain)."
    ]
  },
  {
    "question": "What minimum sea surface temperature is typically required for tropical cyclone formation?",
    "type": "condition",
    "difficulty": "medium",
    "answer": 1,
    "options": [
      "15.5° C",
      "26.5° C.",
      "20.0° C",
      "30.0° C"
    ]
  },
  {
    "question": "What does PAR (Philippine Area of Responsibility) signify?",
    "type": "definition",
    "difficulty": "medium",
    "answer": 0,
    "options": [
        "The geographical area where PAGASA monitors weather.",
        "The region most prone to major earthquakes.",
        "The zone where most active volcanic activity occurs.",
        "The national airspace controlled by the Air Force."
    ]
  },
  {
    "question": "Identify the three main structural parts of a tropical cyclone.",
    "type": "structure",
    "difficulty": "medium",
    "answer": 1,
    "options": [
        "Core, Mantle, and Crust.",
        "Eye, Eye Wall, and Rain Bands.",
        "Updraft, Downdraft, and Anvil.",
        "Storm Surge, Wind Field, Central Pressure."
        ]
  },
  {
    "question": "What is located at the very center of a tropical cyclone and has the lowest atmospheric pressure?",
    "type": "structure",
    "difficulty": "easy",
    "answer": 0,
    "options": [
      "Eye.",
      "Outer Rain Band.",
      "Eye Wall.",
      "Dense Cirrus Overcast."
    ]
  },
  {
    "question": "Why does the Philippines frequently experience tropical cyclones?",
    "type": "cause",
    "difficulty": "hard",
    "answer": 1,
    "options": [
        "It is surrounded by cold ocean currents.",
        "Its location within the ITCZ.",
        "Its generally high altitude.",
        "High frequency of volcanic eruptions."
    ]
  },
  {
    "question": "What is a tropical cyclone called in the North Atlantic Ocean?",
    "type": "terminology",
    "difficulty": "easy",
    "answer": 0,
    "options": [
      "Hurricane.",
      "Typhoon",
      "Cyclone",
      "Willy-willy"
    ]
  },
   {
    "question": "What is a tropical cyclone called in Australian Waters?",
    "type": "terminology",
    "difficulty": "medium",
    "answer": 2,
    "options": [
      "Typhoon",
      "Cyclone",
      "Willy-willy.",
      "Hurricane"
    ]
  },
  {
    "question": "What does PAGASA stand for?",
    "type": "acronym",
    "difficulty": "medium",
    "answer": 0,
    "options": [
        "Philippine Atmospheric Geophysical and Astronomical Services Administration.",
        "Philippine Association of Geological and Astronomical Sciences.",
        "Public Administration for Geophysical and Atmospheric Safety.",
        "Pacific Area Geophysical and Astronomical Service Agency."
    ]
  },
    {
    "question": "What is the purpose of the Public Storm Warning Signal (PSWS)?",
    "type": "purpose",
    "difficulty": "easy",
    "answer": 1,
    "options": [
        "To accurately measure rainfall intensity.",
        "To warn public of incoming weather disturbances.",
        "To predict exact timing/location of quakes.",
        "To officially announce public holidays."
    ]
  },
  {
    "question": "According to the Revised PSWS, what is the typical lead time for PSWS #1?",
    "type": "data interpretation",
    "difficulty": "medium",
    "answer": 2,
    "options": [
        "12 hours",
        "18 hours",
        "36 hours.",
        "24 hours"
    ]
  },
    {
    "question": "What level of damage is associated with PSWS #5 winds?",
    "type": "data interpretation",
    "difficulty": "medium",
    "answer": 0,
    "options": [
        "Very heavy to widespread damage.",
        "No damage to very light damage.",
        "Light to moderate damage expected.",
        "Moderate to heavy damage likely."
    ]
  },
  {
    "question": "Define Storm Surge.",
    "type": "definition",
    "difficulty": "medium",
    "answer": 1,
    "options": [
        "A large ocean wave from underwater quakes (tsunami).",
        "Unusual rise in seawater level from storm winds/pressure.",
        "Normal high tide level during a full moon phase.",
        "Inland flooding caused solely by heavy rainfall."
        ]
  },
   {
    "question": "Is a storm surge considered a primary or secondary hazard associated with tropical cyclones?",
    "type": "classification",
    "difficulty": "medium",
    "answer": 2,
    "options": [
        "Primary hazard (direct result)",
        "Tertiary hazard (indirect)",
        "Secondary hazard (resulting).",
        "Not directly related"
    ]
  },
  {
    "question": "What causes a 'Tidal Wave' as defined in the document (distinct from a storm surge)?",
    "type": "cause",
    "difficulty": "hard",
    "answer": 1,
    "options": [
        "Intense winds from a tropical cyclone.",
        "Unbalanced gravitational pull of celestial bodies.",
        "Significant drop in atmospheric pressure.",
        "Large underwater earthquakes displacing water."
    ]
  },
  {
    "question": "What weather phenomenon is associated with cumulonimbus clouds and is described as violent and transient?",
    "type": "identification",
    "difficulty": "easy",
    "answer": 3,
    "options": [
      "Typhoon (large cyclone)",
      "Storm Surge (coastal flood)",
      "El Niño (climate pattern)",
      "Thunderstorm (localized)."
    ]
  },
  {
    "question": "What occurs during the Developing (Cumulus) Stage of a thunderstorm?",
    "type": "process",
    "difficulty": "medium",
    "answer": 0,
    "options": [
        "Upward growth of cumulus cloud via updrafts.",
        "Heavy rain, hail, frequent lightning occur.",
        "Downdrafts begin to dominate storm cell.",
        "Storm reaches maximum vertical height."
    ]
  },
   {
    "question": "What characterizes the Final (Dissipating) Stage of a thunderstorm?",
    "type": "process",
    "difficulty": "medium",
    "answer": 1,
    "options": [
        "Strong updrafts continue lifting cloud.",
        "Downdrafts dominate, cutting off inflow, rain decreases.",
        "Storm reaches peak intensity/severe weather.",
        "Hail formation is most likely."
    ]
  },
  {
    "question": "What is lightning?",
    "type": "definition",
    "difficulty": "easy",
    "answer": 0,
    "options": [
      "Abrupt, visible high-voltage electrical discharge.",
      "Loud sound from rapidly expanding air.",
      "Precipitation consisting of ice pellets.",
      "Column of rapidly rotating air."
    ]
  },
  {
    "question": "What causes the sound known as thunder?",
    "type": "cause",
    "difficulty": "medium",
    "answer": 3,
    "options": [
        "Large clouds colliding violently.",
        "Sound of the electrical discharge.",
        "Impact of heavy rainfall on ground.",
        "Rapid expansion of air heated by lightning."
    ]
  },
   {
    "question": "What is a Lightning Strike?",
    "type": "definition",
    "difficulty": "easy",
    "answer": 0,
    "options": [
        "When lightning contacts an object on the ground.",
        "Discharge occurring between two clouds.",
        "Electrical discharge within a single cloud.",
        "Audible sound following lightning flash."
    ]
  },
   {
    "question": "What is Hail?",
    "type": "definition",
    "difficulty": "easy",
    "answer": 1,
    "options": [
        "Small pellets of frozen rain (sleet).",
        "Solid precipitation composed of ice pieces.",
        "Large, complex ice crystals (snow).",
        "Water vapor condensing directly into ice."
    ]
  },
  {
    "question": "What defines a Hailstorm?",
    "type": "definition",
    "difficulty": "medium",
    "answer": 0,
    "options": [
        "A thunderstorm currently producing hail.",
        "Any severe storm with very strong winds.",
        "A weather system producing only heavy rain.",
        "A winter snowstorm with icy conditions."
    ]
  },
   {
    "question": "What are Hailstones?",
    "type": "definition",
    "difficulty": "medium",
    "answer": 1,
    "options": [
        "Small, uniform pellets of frozen rain.",
        "Individual pieces of layered ice from hailstorm.",
        "Unusually large, complex snowflakes.",
        "Dew frozen solid on ground surfaces."
    ]
  },
  {
    "question": "What is another name for Tornadoes, commonly used in the U.S.?",
    "type": "terminology",
    "difficulty": "easy",
    "answer": 1,
    "options": [
      "Cyclones",
      "Twisters.",
      "Hurricanes",
      "Waterspouts"
    ]
  },
  {
    "question": "What is a Waterspout?",
    "type": "definition",
    "difficulty": "medium",
    "answer": 0,
     "options": [
        "A tornado forming/moving over water.",
        "An exceptionally large ocean wave.",
        "A man-made decorative water feature.",
        "A period of heavy rainfall over sea."
        ]
  },
  {
    "question": "What are Downbursts associated with thunderstorms?",
    "type": "definition",
    "difficulty": "hard",
    "answer": 0,
     "options": [
        "Localized, descending strong winds in straight lines.",
        "Strong upward currents of air in thundercloud.",
        "Intensely rotating columns of wind.",
        "Widespread, faint lightning within cloud."
        ]
  },
  {
    "question": "Which type of flood involves an abnormal rise of water level in rivers?",
    "type": "identification",
    "difficulty": "easy",
    "answer": 1,
    "options": [
      "Flash Flood (rapid onset)",
      "Riverine Flood (river overflow).",
      "Coastal Flood (seawater)",
      "Urban Flood (drainage)"
    ]
  },
  {
    "question": "What characterizes a Flash Flood?",
    "type": "characteristics",
    "difficulty": "medium",
    "answer": 0,
    "options": [
        "Rapid, short-lived, violent arrival of water.",
        "Slow, gradual rise of coastal water.",
        "Steady overflowing of major river system.",
        "Flooding specifically from dam/levee failure."
    ]
  },
   {
    "question": "List two examples of Flood Control measures mentioned in the document.",
    "type": "listing",
    "difficulty": "medium",
    "answer": 1,
    "options": [
        "Rain dances, cloud seeding.",
        "Construction of Dams and Seawalls.",
        "Building taller bridges/tunnels.",
        "Developing irrigation systems/wells."
    ]
  },
  {
    "question": "What does ENSO stand for?",
    "type": "acronym",
    "difficulty": "easy",
    "answer": 0,
    "options": [
      "El Niño Southern Oscillation.",
      "Eastern North Pacific Storm Oscillation",
      "Equatorial Near-Surface Oscillation",
      "Enhanced Northern Summer Oscillation"
    ]
  },
  {
    "question": "What is the primary cause of ENSO?",
    "type": "cause",
    "difficulty": "medium",
    "answer": 1,
    "options": [
        "Increased frequency of volcanic eruptions.",
        "Cyclic changes in Pacific sea temps/pressure.",
        "Long-term variations in Earth's orbit.",
        "Widespread deforestation effects."
    ]
  },
  {
    "question": "What climatic condition characterizes El Niño?",
    "type": "characteristics",
    "difficulty": "medium",
    "answer": 0,
    "options": [
        "Prolonged unusual warming of central/eastern Pacific.",
        "Significant unusual cooling of central/eastern Pacific.",
        "Marked strengthening of easterly trade winds.",
        "General increase in rainfall globally."
        ]
  },
  {
    "question": "What are typical effects of El Niño mentioned in the text?",
    "type": "effects",
    "difficulty": "medium",
    "answer": 1,
    "options": [
        "Excessive rainfall and widespread flooding.",
        "Drought, water shortages, crop damage, fire risk.",
        "Increase in number/intensity of typhoons.",
        "Significantly colder than average winters."
    ]
  },
  {
    "question": "What climatic condition characterizes La Niña?",
    "type": "characteristics",
    "difficulty": "medium",
    "answer": 3,
     "options": [
        "Unusual warming of Pacific sea temps.",
        "Significant weakening/reversal of trade winds.",
        "Decrease in rainfall in most tropics.",
        "Strengthening trade winds, cold water upwelling."
        ]
  },
  {
    "question": "What are the typical effects of La Niña in the Philippines?",
    "type": "effects",
    "difficulty": "medium",
    "answer": 0,
    "options": [
        "Near normal to above normal rainfall; more strong typhoons.",
        "Severe drought conditions and water shortages.",
        "General weakening of typhoons approaching.",
        "Unusually warm sea surface temperatures."
    ]
  }
];

// Register that these questions are loaded
if (typeof window.loadedSubjects === 'undefined') {
  window.loadedSubjects = {};
}
window.loadedSubjects['DRRR'] = drrrQuestions;
console.log('DRRR questions registered:', drrrQuestions.length);

// Dispatch a custom event to notify app
document.dispatchEvent(new CustomEvent('subjectLoaded', {
  detail: {
    subject: 'DRRR',
    count: drrrQuestions.length
  }
}));

// Example placeholder for Math and Science questions
const mathQuestions = [];
const scienceQuestions = []; 