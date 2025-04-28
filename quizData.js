// QuizData.js - Centralized Question Data
// Run initialization immediately
(function initQuizData() {
    console.log('QuizData.js: Initializing quiz data immediately');
    
    // Store all subject question arrays in a central object
    window.quizData = {};
    
    // Create helper function to check if an array is properly loaded
    function checkAndLoadQuestions(globalName, subjectName) {
        try {
            const questionArray = window[globalName];
            if (Array.isArray(questionArray) && questionArray.length > 0) {
                console.log(`QuizData.js: ${subjectName} questions loaded, count:`, questionArray.length);
                window.quizData[subjectName] = [...questionArray];
                return true;
            } else {
                console.warn(`QuizData.js: ${globalName} exists but is empty or not an array`);
                window.quizData[subjectName] = [];
                return false;
            }
        } catch (e) {
            console.warn(`QuizData.js: Error loading ${subjectName} questions:`, e);
            window.quizData[subjectName] = [];
            return false;
        }
    }
    
    // Check and save DRRR questions
    checkAndLoadQuestions('drrrQuestions', 'DRRR');
    
    // Check and save Reading & Writing questions
    checkAndLoadQuestions('readingWritingQuestions', 'Reading & Writing');
    
    // Also check for possible alternative names
    checkAndLoadQuestions('readingandwritingQuestions', 'Reading & Writing');
    
    // Trigger an event to notify the app that quiz data is ready
    const dataLoadedEvent = new CustomEvent('quizDataLoaded', { 
        detail: { subjects: Object.keys(window.quizData) } 
    });
    document.dispatchEvent(dataLoadedEvent);
    
    console.log('QuizData.js: Quiz data initialization complete');
})(); // Self-executing function

// Also run when DOM is fully loaded as a backup
document.addEventListener('DOMContentLoaded', function() {
    console.log('QuizData.js: Checking quiz data after DOM loaded');
    
    // If the data wasn't loaded properly, try again
    if (!window.quizData || Object.keys(window.quizData).length === 0) {
        console.warn('QuizData.js: Quiz data not initialized earlier, trying again');
        
        // Initialize the data
        window.quizData = window.quizData || {};
        
        // Try loading questions again
        if (typeof drrrQuestions !== 'undefined' && drrrQuestions.length > 0) {
            window.quizData.DRRR = [...drrrQuestions];
            console.log('QuizData.js: DRRR questions now loaded, count:', drrrQuestions.length);
        }
        
        if (typeof readingWritingQuestions !== 'undefined' && readingWritingQuestions.length > 0) {
            window.quizData['Reading & Writing'] = [...readingWritingQuestions];
            console.log('QuizData.js: Reading & Writing questions now loaded, count:', readingWritingQuestions.length);
        }
        
        // Trigger the event again
        const dataLoadedEvent = new CustomEvent('quizDataLoaded', { 
            detail: { subjects: Object.keys(window.quizData) } 
        });
        document.dispatchEvent(dataLoadedEvent);
    }
}); 