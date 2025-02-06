document.addEventListener('DOMContentLoaded', function() {
    loadQuestions();
});

function loadQuestions() {
    const questions = [
        'What is the capital of France?',
        'What is the largest planet in our solar system?',
        'Who wrote "To Kill a Mockingbird"?',
        'What is the square root of 144?',
        'What is the chemical symbol for Gold?'
    ];

    const questionList = document.getElementById('question-list');
    questions.forEach(question => {
        const li = document.createElement('li');
        li.textContent = question;
        questionList.appendChild(li);
    });
}