// PE Questions
const peQuestions = [
  {
    "question": "According to the reviewer, Taekwondo is considered which of the following?",
    "type": "identification",
    "difficulty": "easy",
    "answer": 0,
    "options": [
      "Combative Sports, Self-Defense, and Fitness",
      "Only a form of meditation and discipline",
      "A type of dance originating from Korea",
      "A non-contact sport focused on forms"
    ]
  },
  {
    "question": "What does 'Tae' mean in the etymology of Taekwondo?",
    "type": "etymology",
    "difficulty": "easy",
    "answer": 1,
    "options": [
      "Fist or Fight",
      "Foot, Leg, or To Step on",
      "Way, Arts, or Discipline",
      "Spirit or Energy"
    ]
  },
  {
    "question": "What does 'Kwon' mean in the etymology of Taekwondo?",
    "type": "etymology",
    "difficulty": "easy",
    "answer": 0,
    "options": [
      "Fist or Fight",
      "Foot, Leg, or To Step on",
      "Way, Arts, or Discipline",
      "Block or Defend"
    ]
  },
  {
    "question": "What does 'Do' mean in the etymology of Taekwondo?",
    "type": "etymology",
    "difficulty": "easy",
    "answer": 2,
    "options": [
      "Fist or Fight",
      "Foot, Leg, or To Step on",
      "Way, Arts, or Discipline",
      "Kick or Strike"
    ]
  },
  {
    "question": "Which of the following is NOT one of the 3 main programs of Taekwondo listed?",
    "type": "listing",
    "difficulty": "medium",
    "answer": 3,
    "options": [
      "Poomsae (Forms)",
      "Kyorugi (Sparring)",
      "Kyukpa (Breaking)",
      "Hoshinsul (Self-Defense techniques)"
    ]
  },
  {
    "question": "Which Tenet of Taekwondo refers to believing in one's abilities?",
    "type": "tenets",
    "difficulty": "easy",
    "answer": 0,
    "options": [
      "Self-Confidence",
      "Modesty",
      "Indomitable Spirit",
      "Perseverance"
    ]
  },
  {
    "question": "Which Tenet emphasizes a humble opinion of oneself and achievements?",
    "type": "tenets",
    "difficulty": "medium",
    "answer": 1,
    "options": [
      "Self-Confidence",
      "Modesty",
      "Indomitable Spirit",
      "Etiquette"
    ]
  },
  {
    "question": "The Tenet 'Indomitable Spirit' means:",
    "type": "tenets",
    "difficulty": "medium",
    "answer": 2,
    "options": [
      "Always follow prescribed conduct.",
      "Take steps to achieve goals.",
      "Not easily discouraged or defeated.",
      "Believe in your own skills."
    ]
  },
  {
    "question": "Which Tenet involves taking the necessary steps to achieve goals?",
    "type": "tenets",
    "difficulty": "medium",
    "answer": 3,
    "options": [
      "Modesty",
      "Indomitable Spirit",
      "Etiquette",
      "Perseverance"
    ]
  },
  {
    "question": "Conduct or behavior prescribed by custom observed in professional life refers to which Tenet?",
    "type": "tenets",
    "difficulty": "medium",
    "answer": 1,
    "options": [
      "Perseverance",
      "Etiquette",
      "Self-Confidence",
      "Modesty"
    ]
  },
  {
    "question": "What is the English meaning of the basic command 'Charyeut'?",
    "type": "commands",
    "difficulty": "easy",
    "answer": 0,
    "options": [
      "Attention Stance",
      "Bow",
      "Ready Stance",
      "Begin"
    ]
  },
  {
    "question": "What is the English meaning of the basic command 'Kyung-rye'?",
    "type": "commands",
    "difficulty": "easy",
    "answer": 1,
    "options": [
      "Attention Stance",
      "Bow",
      "Ready Stance",
      "Stop"
    ]
  },
  {
    "question": "What is the English meaning of the basic command 'Joonbi'?",
    "type": "commands",
    "difficulty": "easy",
    "answer": 2,
    "options": [
      "Bow",
      "Begin",
      "Ready Stance",
      "Thank you"
    ]
  },
  {
    "question": "What is the English meaning of the basic command 'Shijak'?",
    "type": "commands",
    "difficulty": "easy",
    "answer": 3,
    "options": [
      "Stop",
      "Thank you",
      "Bow",
      "Begin"
    ]
  },
  {
    "question": "What is the English meaning of the basic command 'Kamsahamnida'?",
    "type": "commands",
    "difficulty": "easy",
    "answer": 0,
    "options": [
      "Thank you",
      "Stop",
      "Begin",
      "Ready Stance"
    ]
  },
  {
    "question": "What is the English meaning of the basic command 'Keuman'?",
    "type": "commands",
    "difficulty": "easy",
    "answer": 1,
    "options": [
      "Thank you",
      "Stop",
      "Begin",
      "Attention Stance"
    ]
  },
  {
    "question": "What is the Korean number for 'One'?",
    "type": "counting",
    "difficulty": "easy",
    "answer": 0,
    "options": [
      "Hana",
      "Dhul",
      "Seht",
      "Neht"
    ]
  },
  {
    "question": "What is the Korean number for 'Three'?",
    "type": "counting",
    "difficulty": "easy",
    "answer": 2,
    "options": [
      "Hana",
      "Dhul",
      "Seht",
      "Neht"
    ]
  },
  {
    "question": "What is the Korean number for 'Five'?",
    "type": "counting",
    "difficulty": "easy",
    "answer": 3,
    "options": [
      "Neht",
      "Yeo-seot",
      "Il-gop",
      "Da-seot"
    ]
  },
  {
    "question": "What is the Korean number for 'Eight'?",
    "type": "counting",
    "difficulty": "easy",
    "answer": 0,
    "options": [
      "Yeo-dul",
      "Il-gop",
      "A-hop",
      "Yeol"
    ]
  },
  {
    "question": "What is the Korean number for 'Ten'?",
    "type": "counting",
    "difficulty": "easy",
    "answer": 1,
    "options": [
      "A-hop",
      "Yeol",
      "Yeo-dul",
      "Il-gop"
    ]
  },
  {
    "question": "What is the primary purpose of Blocks in Taekwondo?",
    "type": "purpose",
    "difficulty": "easy",
    "answer": 2,
    "options": [
      "To initiate an attack.",
      "To score points in sparring.",
      "To protect oneself from an opponent's attack.",
      "To break boards or objects."
    ]
  },
  {
    "question": "Which block, also known as Arae Makki, defends the lower portion of the body?",
    "type": "blocks",
    "difficulty": "easy",
    "answer": 0,
    "options": [
      "Low Block",
      "Middle Block",
      "High Block",
      "Knifehand Block"
    ]
  },
  {
    "question": "According to the 'How to Perform a Low Block' steps, how should the defending hand be?",
    "type": "technique",
    "difficulty": "medium",
    "answer": 1,
    "options": [
      "Relaxed and open",
      "Tense and tight (fist)",
      "Slightly curved",
      "Pointing downwards"
    ]
  },
   {
    "question": "In a Low Block, the final position stops the fist in front of the body to block below the:",
    "type": "technique",
    "difficulty": "medium",
    "answer": 3,
    "options": [
      "Shoulder",
      "Solar plexus",
      "Knee",
      "Belt"
    ]
  },
  {
    "question": "Which block, Momtong Makki, is performed moving the fist towards the shoulder and blocks in front of the solar plexus?",
    "type": "blocks",
    "difficulty": "easy",
    "answer": 1,
    "options": [
      "Low Block",
      "Middle Block",
      "High Block",
      "Upward Block"
    ]
  },
  {
    "question": "Which part of the wrist is primarily used for a standard Middle Block (Momtong Makki)?",
    "type": "technique",
    "difficulty": "medium",
    "answer": 0,
    "options": [
      "Insides of the wrist",
      "Outer wrist / Knifehand",
      "Back of the wrist",
      "Palm heel"
    ]
  },
  {
    "question": "What is the Korean term for High Block?",
    "type": "blocks",
    "difficulty": "medium",
    "answer": 2,
    "options": [
      "Arae Makki",
      "Momtong Makki",
      "Eolgul Makki",
      "Sonnal Makki"
    ]
  },
  {
    "question": "What is the recommended distance between the forehead and the blocking fist in a High Block (Eolgul Makki)?",
    "type": "technique",
    "difficulty": "hard",
    "answer": 1,
    "options": [
      "2 inches (5cm)",
      "4 inches (10cm)",
      "6 inches (15cm)",
      "Touching the forehead"
    ]
  },
  {
    "question": "What does 'Sonnal' mean in English?",
    "type": "terminology",
    "difficulty": "medium",
    "answer": 0,
    "options": [
      "Knifehand",
      "Fist",
      "Elbow",
      "Palm"
    ]
  },
  {
    "question": "What is the English term for 'Ap Chagi'?",
    "type": "kicks",
    "difficulty": "easy",
    "answer": 1,
    "options": [
      "Side Kick",
      "Front Kick",
      "Roundhouse Kick",
      "Back Kick"
    ]
  },
  {
    "question": "What is the English term for 'Yeop Chagi'?",
    "type": "kicks",
    "difficulty": "easy",
    "answer": 0,
    "options": [
      "Side Kick",
      "Front Kick",
      "Roundhouse Kick",
      "Punch Kick"
    ]
  },
  {
    "question": "What is the English term for 'Dollyo Chagi'?",
    "type": "kicks",
    "difficulty": "easy",
    "answer": 2,
    "options": [
      "Side Kick",
      "Front Kick",
      "Roundhouse Kick",
      "Turning Side Kick"
    ]
  },
    {
    "question": "What is the Korean term for Turning Side Kick?",
    "type": "kicks",
    "difficulty": "medium",
    "answer": 1,
    "options": [
      "Bandal Chagi",
      "Dwi Chagi",
      "Peodo Chagi",
      "Yeop Chagi"
    ]
  },
    {
    "question": "What is the English term for 'Bandal Chagi'?",
    "type": "kicks",
    "difficulty": "medium",
    "answer": 3,
    "options": [
      "Punch Kick",
      "Turning Side Kick",
      "Side Kick",
      "Full Moon Kick (often synonymous with Crescent Kick)"
    ]
  },
    {
    "question": "What is the English term for 'Peodo Chagi'?",
    "type": "kicks",
    "difficulty": "medium",
    "answer": 0,
    "options": [
      "Punch Kick",
      "Full Moon Kick",
      "Front Kick",
      "Roundhouse Kick"
    ]
  },
  {
    "question": "What is the English term for the stance 'Joonbi Seogi'?",
    "type": "stances",
    "difficulty": "easy",
    "answer": 1,
    "options": [
      "Walking Stance",
      "Ready Stance",
      "Horseback Riding Stance",
      "Back Stance"
    ]
  },
  {
    "question": "What is the English term for the stance 'Juchum Seogi'?",
    "type": "stances",
    "difficulty": "medium",
    "answer": 2,
    "options": [
      "Ready Stance",
      "Forward Stance",
      "Horseback Riding Stance",
      "Walking Stance"
    ]
  },
  {
    "question": "What is the English term for the stance 'Apkoobi Seogi' (often similar to Ap Seogi)?",
    "type": "stances",
    "difficulty": "medium",
    "answer": 3,
    "options": [
      "Back Stance",
      "Ready Stance",
      "Walking Stance",
      "Forward Stance"
    ]
  },
  {
    "question": "What is the Korean term for Back Stance?",
    "type": "stances",
    "difficulty": "medium",
    "answer": 0,
    "options": [
      "Dwitkoobi Seogi",
      "Apseogi",
      "Juchum Seogi",
      "Joonbi Seogi"
    ]
  },
  {
    "question": "What is the Korean term for Walking Stance?",
    "type": "stances",
    "difficulty": "medium",
    "answer": 1,
    "options": [
      "Dwitkoobi Seogi",
      "Apseogi",
      "Apkoobi Seogi",
      "Juchum Seogi"
    ]
  }
]; 

// Register that these questions are loaded
if (typeof window.loadedSubjects === 'undefined') {
  window.loadedSubjects = {};
}
window.loadedSubjects['PE'] = peQuestions;
console.log('PE questions registered:', peQuestions.length);

// Dispatch a custom event to notify app
document.dispatchEvent(new CustomEvent('subjectLoaded', {
  detail: {
    subject: 'PE',
    count: peQuestions.length
  }
})); 