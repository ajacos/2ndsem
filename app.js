// DOM Elements
const homeElement = document.getElementById('home');
const quizElement = document.getElementById('quiz');
const endElement = document.getElementById('end');
const subjectButtons = document.querySelectorAll('.subject-buttons button');
const question = document.getElementById('question');
const choices = Array.from(document.getElementsByClassName('choice-text'));
const questionCounterText = document.getElementById('questionCounter');
const scoreText = document.getElementById('score');
const finalScoreText = document.getElementById('final-score');
const correctCountText = document.getElementById('correct-count');
const totalCountText = document.getElementById('total-count');
const subjectTitle = document.getElementById('subject-title');
const playAgainButton = document.getElementById('play-again');
const goHomeButton = document.getElementById('go-home');
const homeBtn = document.getElementById('home-btn');
const progressBar = document.getElementById('progress-bar');
const resultsContainer = document.getElementById('results-container');
const submitButton = document.getElementById('submit-btn');
const nextButton = document.getElementById('next-btn');
const prevButton = document.getElementById('prev-btn');
const answerFeedback = document.getElementById('answer-feedback');
const feedbackText = document.getElementById('feedback-text');
const themeToggleBtn = document.getElementById('theme-toggle-btn');

// Game variables
let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];
let currentSubject = '';
let questions = [];
let totalQuestions = 0;
let userResults = []; // Array to store user's answers and results
let selectedChoice = null;
let selectedAnswer = null;
let quizHistory = []; // Array to store question history for navigation
let currentQuestionIndex = -1; // Current position in the quiz history
let darkMode = localStorage.getItem('darkMode') === 'enabled';

// Constants
const CORRECT_BONUS = 10;
const ANIMATION_SPEED = 500; // ms

// Check if questions are loaded properly when the DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM fully loaded');
    console.log('DRRR Questions defined:', typeof drrrQuestions !== 'undefined');
    console.log('DRRR Questions length:', typeof drrrQuestions !== 'undefined' ? drrrQuestions.length : 'Not defined');
    console.log('Math Questions defined:', typeof mathQuestions !== 'undefined');
    console.log('Math Questions length:', typeof mathQuestions !== 'undefined' ? mathQuestions.length : 'Not defined');
    console.log('Science Questions defined:', typeof scienceQuestions !== 'undefined');
    console.log('Science Questions length:', typeof scienceQuestions !== 'undefined' ? scienceQuestions.length : 'Not defined');
    
    // Apply dark mode if enabled
    if (darkMode) {
        enableDarkMode();
    }
});

// Dark mode functions
function enableDarkMode() {
    document.body.classList.add('dark-mode');
    themeToggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
    localStorage.setItem('darkMode', 'enabled');
    darkMode = true;
}

function disableDarkMode() {
    document.body.classList.remove('dark-mode');
    themeToggleBtn.innerHTML = '<i class="fas fa-moon"></i>';
    localStorage.setItem('darkMode', null);
    darkMode = false;
}

// Theme toggle button event listener
themeToggleBtn.addEventListener('click', () => {
    if (darkMode) {
        disableDarkMode();
    } else {
        enableDarkMode();
    }
});

// Start Game
function startGame(subject) {
    currentSubject = 'DRRR'; // Always default to DRRR
    subjectTitle.innerText = currentSubject;
    questions = getQuestionsForSubject(currentSubject);
    totalQuestions = questions.length;
    score = 0;
    questionCounter = 0;
    userResults = []; // Reset results
    quizHistory = []; // Reset question history
    currentQuestionIndex = -1; // Reset current index
    
    // Shuffle questions
    availableQuestions = [...questions].sort(() => Math.random() - 0.5);
    
    // Show quiz screen
    homeElement.classList.add('hidden');
    quizElement.classList.remove('hidden');
    endElement.classList.add('hidden');
    
    // Reset progress bar
    updateProgressBar(0);
    
    getNewQuestion();
}

// Update progress bar with animation
function updateProgressBar(value) {
    // Animate progress bar
    progressBar.style.width = `${value}%`;
}

// Get a new question
function getNewQuestion() {
    if (availableQuestions.length === 0) {
        // Save score to local storage
        localStorage.setItem('mostRecentScore', score);
        
        // Update progress to 100%
        updateProgressBar(100);
        
        // Short delay before showing results
        setTimeout(() => {
            // Show end screen with results
            showResults();
        }, ANIMATION_SPEED);
        return;
    }
    
    // Reset question state
    resetQuestionState();
    
    // If we're navigating forward (not going back)
    if (currentQuestionIndex === quizHistory.length - 1) {
        questionCounter++;
        
        const questionIndex = Math.floor(Math.random() * availableQuestions.length);
        currentQuestion = JSON.parse(JSON.stringify(availableQuestions[questionIndex])); // Deep clone the question
        availableQuestions.splice(questionIndex, 1);
        
        // Scramble the choices while preserving the correct answer
        scrambleChoices(currentQuestion);
        
        // Add to history
        quizHistory.push({
            question: currentQuestion,
            userAnswer: null,
            isAnswered: false,
            isCorrect: false
        });
        currentQuestionIndex = quizHistory.length - 1;
    } else {
        // We're already in the history, just move forward one question
        currentQuestionIndex++;
        currentQuestion = quizHistory[currentQuestionIndex].question;
        
        // If this question was already answered, show the answer
        if (quizHistory[currentQuestionIndex].isAnswered) {
            showPreviousAnswer(currentQuestionIndex);
        }
    }
    
    // Update question counter text
    questionCounterText.innerText = `${currentQuestionIndex + 1}/${totalQuestions}`;
    
    // Update progress bar
    const progressPercentage = ((currentQuestionIndex + 1) / totalQuestions) * 100;
    updateProgressBar(progressPercentage);
    
    // Show question and choices
    question.innerText = currentQuestion.question;
    
    choices.forEach(choice => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion.options[number];
    });
    
    // Show/hide previous button
    if (currentQuestionIndex > 0) {
        prevButton.classList.remove('hidden');
    } else {
        prevButton.classList.add('hidden');
    }
    
    acceptingAnswers = !quizHistory[currentQuestionIndex].isAnswered;
}

// Function to scramble choices while keeping track of the correct answer
function scrambleChoices(questionObj) {
    // Save original correct answer
    const correctOptionText = questionObj.options[questionObj.answer];
    const originalAnswer = questionObj.answer;
    
    // Shuffle the options array
    const shuffledOptions = [...questionObj.options].sort(() => Math.random() - 0.5);
    
    // Update the question object with shuffled options
    questionObj.options = shuffledOptions;
    
    // Find the new index of the correct answer and update answer property
    questionObj.answer = shuffledOptions.findIndex(option => option === correctOptionText);
    
    // Debug: Log the scrambling results
    console.log('Question scrambled:');
    console.log('Original correct answer position:', originalAnswer);
    console.log('New correct answer position:', questionObj.answer);
    console.log('Shuffled options:', shuffledOptions);
}

// Get previous question
function getPreviousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        currentQuestion = quizHistory[currentQuestionIndex].question;
        
        // Update question counter text
        questionCounterText.innerText = `${currentQuestionIndex + 1}/${totalQuestions}`;
        
        // Update progress bar
        const progressPercentage = ((currentQuestionIndex + 1) / totalQuestions) * 100;
        updateProgressBar(progressPercentage);
        
        // Reset question state
        resetQuestionState();
        
        // Show question and choices
        question.innerText = currentQuestion.question;
        
        choices.forEach(choice => {
            const number = choice.dataset['number'];
            choice.innerText = currentQuestion.options[number];
        });
        
        // Show previous answer if already answered
        if (quizHistory[currentQuestionIndex].isAnswered) {
            showPreviousAnswer(currentQuestionIndex);
        }
        
        // Show/hide previous button
        if (currentQuestionIndex > 0) {
            prevButton.classList.remove('hidden');
        } else {
            prevButton.classList.add('hidden');
        }
        
        acceptingAnswers = !quizHistory[currentQuestionIndex].isAnswered;
    }
}

// Show previous answer for an already answered question
function showPreviousAnswer(index) {
    const historyItem = quizHistory[index];
    
    if (historyItem.isAnswered) {
        // Find and show the user's selection
        const userChoice = choices[historyItem.userAnswer].parentElement;
        userChoice.classList.add('selected');
        
        if (historyItem.isCorrect) {
            userChoice.classList.add('correct');
        } else {
            userChoice.classList.add('incorrect');
            // Show the correct answer
            const correctChoice = choices[historyItem.question.answer].parentElement;
            correctChoice.classList.add('correct');
        }
        
        // Show feedback
        const correctAnswerText = historyItem.question.options[historyItem.question.answer];
        feedbackText.innerHTML = historyItem.isCorrect 
            ? `<span style="color: var(--correct-color);"><i class="fas fa-check-circle"></i> Correct!</span> ${correctAnswerText} is the right answer.` 
            : `<span style="color: var(--incorrect-color);"><i class="fas fa-times-circle"></i> Incorrect.</span> The correct answer is: ${correctAnswerText}`;
        
        answerFeedback.classList.remove('hidden');
        
        // Hide submit button, show next button
        submitButton.classList.add('hidden');
        nextButton.classList.remove('hidden');
        
        // Disable further answering
        acceptingAnswers = false;
    }
}

// Reset state for new question
function resetQuestionState() {
    // Hide feedback
    answerFeedback.classList.add('hidden');
    
    // Hide next button, show submit button
    nextButton.classList.add('hidden');
    submitButton.classList.remove('hidden');
    submitButton.disabled = true;
    
    // Clear selection
    selectedChoice = null;
    selectedAnswer = null;
    
    // Remove any selected styling
    choices.forEach(choice => {
        choice.parentElement.classList.remove('selected', 'correct', 'incorrect');
    });
}

// Handle choice selection
choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if (!acceptingAnswers) return;
        
        // Remove previous selection styling
        choices.forEach(c => c.parentElement.classList.remove('selected'));
        
        // Store the selection
        selectedChoice = e.target;
        selectedAnswer = parseInt(selectedChoice.dataset['number']);
        
        // Add selection styling
        selectedChoice.parentElement.classList.add('selected');
        
        // Enable submit button
        submitButton.disabled = false;
        
        // Add subtle animation to the submit button
        submitButton.classList.add('pulse');
        setTimeout(() => {
            submitButton.classList.remove('pulse');
        }, 500);
    });
});

// Submit button handler
submitButton.addEventListener('click', () => {
    if (!selectedChoice) return;
    
    // Disable answering and submit button
    acceptingAnswers = false;
    submitButton.disabled = true;
    
    // Check if answer is correct
    const isCorrect = selectedAnswer === currentQuestion.answer;
    const classToApply = isCorrect ? 'correct' : 'incorrect';
    
    // Update quiz history with the answer
    quizHistory[currentQuestionIndex].userAnswer = selectedAnswer;
    quizHistory[currentQuestionIndex].isAnswered = true;
    quizHistory[currentQuestionIndex].isCorrect = isCorrect;
    
    // Store the result
    userResults.push({
        question: currentQuestion.question,
        userAnswer: selectedAnswer,
        correctAnswer: currentQuestion.answer,
        options: currentQuestion.options,
        isCorrect: isCorrect
    });
    
    // Apply visual feedback with slight delay for better UX
    setTimeout(() => {
        // Apply visual feedback
        selectedChoice.parentElement.classList.add(classToApply);
        
        // Show correct answer if answer is incorrect
        if (!isCorrect) {
            const correctElement = choices[currentQuestion.answer].parentElement;
            correctElement.classList.add('correct');
        }
        
        // Add to score if correct
        if (isCorrect) {
            incrementScore(CORRECT_BONUS);
        }
        
        // Show feedback
        const correctAnswerText = currentQuestion.options[currentQuestion.answer];
        feedbackText.innerHTML = isCorrect 
            ? `<span style="color: var(--correct-color);"><i class="fas fa-check-circle"></i> Correct!</span> ${correctAnswerText} is the right answer.` 
            : `<span style="color: var(--incorrect-color);"><i class="fas fa-times-circle"></i> Incorrect.</span> The correct answer is: ${correctAnswerText}`;
        
        answerFeedback.classList.remove('hidden');
        
        // Hide submit button, show next button
        submitButton.classList.add('hidden');
        nextButton.classList.remove('hidden');
    }, 300);
});

// Next button handler
nextButton.addEventListener('click', () => {
    getNewQuestion();
});

// Previous button handler
prevButton.addEventListener('click', () => {
    getPreviousQuestion();
});

// Increment score with animation
function incrementScore(num) {
    // Add animation class to score
    scoreText.classList.add('score-animation');
    
    // Update score after short delay
    setTimeout(() => {
        score += num;
        scoreText.innerText = score;
        
        // Remove animation class
        setTimeout(() => {
            scoreText.classList.remove('score-animation');
        }, 300);
    }, 100);
}

// Show results
function showResults() {
    quizElement.classList.add('hidden');
    endElement.classList.remove('hidden');
    
    // Update score texts
    finalScoreText.innerText = score;
    const correctAnswers = userResults.filter(result => result.isCorrect).length;
    correctCountText.innerText = correctAnswers;
    totalCountText.innerText = totalQuestions;
    
    // Calculate percentage
    const percentage = Math.round((correctAnswers / totalQuestions) * 100);
    
    // Clear previous results
    resultsContainer.innerHTML = '';
    
    // Add each result to the container
    userResults.forEach((result, index) => {
        const resultItem = document.createElement('div');
        resultItem.classList.add('result-item');
        
        // Add question number and text
        const questionNumber = document.createElement('div');
        questionNumber.classList.add('result-question');
        questionNumber.textContent = `Q${index + 1}: ${result.question}`;
        resultItem.appendChild(questionNumber);
        
        // Add status (correct/incorrect)
        const resultStatus = document.createElement('span');
        resultStatus.classList.add('result-status');
        
        if (result.isCorrect) {
            resultStatus.classList.add('status-correct');
            resultStatus.innerHTML = '<i class="fas fa-check-circle"></i> Correct';
        } else {
            resultStatus.classList.add('status-incorrect');
            resultStatus.innerHTML = '<i class="fas fa-times-circle"></i> Incorrect';
        }
        
        resultItem.appendChild(resultStatus);
        
        // Add answer details
        const resultDetails = document.createElement('div');
        resultDetails.classList.add('result-answers');
        
        if (!result.isCorrect) {
            resultDetails.innerHTML = `
                <p><strong>Your answer:</strong> ${result.options[result.userAnswer]}</p>
                <p><strong>Correct answer:</strong> ${result.options[result.correctAnswer]}</p>
            `;
        } else {
            resultDetails.innerHTML = `
                <p><strong>Your answer:</strong> ${result.options[result.userAnswer]}</p>
            `;
        }
        
        resultItem.appendChild(resultDetails);
        
        // Add with delay for staggered animation effect
        setTimeout(() => {
            resultsContainer.appendChild(resultItem);
            // Add fade-in animation
            setTimeout(() => {
                resultItem.style.opacity = '1';
            }, 50);
        }, index * 100);
    });
}

// Function to get questions based on subject
function getQuestionsForSubject(subject) {
    console.log('Getting questions for DRRR');
    return typeof drrrQuestions !== 'undefined' ? drrrQuestions : [];
}

// Subject button event listeners
subjectButtons.forEach(button => {
    button.addEventListener('click', e => {
        // Use the button's text content directly
        const subject = button.textContent.replace(/^\s*[\w\s]+\s/, '').trim();
        console.log("Selected subject:", subject);
        startGame(subject);
    });
});

// Play again button
playAgainButton.addEventListener('click', () => {
    startGame(currentSubject);
});

// Go home button
goHomeButton.addEventListener('click', () => {
    endElement.classList.add('hidden');
    homeElement.classList.remove('hidden');
});

// Home button event listener for in-quiz navigation
homeBtn.addEventListener('click', () => {
    // Show confirmation dialog
    if (confirm('Are you sure you want to exit the quiz? Your progress will be lost.')) {
        // Navigate to home
        quizElement.classList.add('hidden');
        endElement.classList.add('hidden');
        homeElement.classList.remove('hidden');
    }
}); 