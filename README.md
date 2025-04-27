# Quiz App

A simple HTML, CSS, and JavaScript quiz application that allows users to test their knowledge on various subjects.

## Features

- Multiple subject selection (currently DRRR, with placeholders for Math and Science)
- Randomized questions from the selected subject
- Score tracking
- Visual feedback for correct and incorrect answers
- Responsive design for different screen sizes

## How to Use

1. Open `index.html` in a web browser
2. Select a subject from the home screen
3. Answer the questions by clicking on the options
4. View your final score on the end screen
5. Play again or return to the home screen to select a different subject

## Project Structure

- `index.html` - Main HTML file
- `styles.css` - CSS styling
- `app.js` - Main application logic
- `questions.js` - Question data for all subjects

## Adding New Questions

To add new questions, modify the respective question arrays in `questions.js`. For example, to add Math questions, add objects to the `mathQuestions` array following the same structure as the DRRR questions:

```javascript
{
  question: "Your question text here",
  type: "question-type",
  difficulty: "easy|medium|hard",
  answer: 0, // Index of correct answer (0-3)
  options: [
    "Option A",
    "Option B",
    "Option C",
    "Option D"
  ]
}
```

## Adding New Subjects

To add a new subject:

1. Add a new button in the subject-buttons section of `index.html`
2. Create a new array for the subject questions in `questions.js`
3. Add a new case in the `getQuestionsForSubject()` function in `app.js` 