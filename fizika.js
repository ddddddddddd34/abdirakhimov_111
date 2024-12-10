const questions = [
    { question: "Vakuumda yorug'lik tezligi qancha?", options: [299792458, 300000000, 350000000], correctAnswer: 299792458 },
    { question: "Yerning massasi qancha?", options: [5.97e24, 6.67e24, 7.97e24], correctAnswer: 5.97e24 },
    { question: "Jismning tezlikka qarshi kuchini qanday ataymiz?", options: ['Yuklama', 'Kuch', 'Aks-sado'], correctAnswer: 'Kuch' },

];

let currentQuestionIndex = 0;
let timeLeft = 60;
let correctAnswers = 0;
const timerElement = document.getElementById('timer');
const questionText = document.getElementById('question-text');
const messageElement = document.getElementById('message');
const resultElement = document.getElementById('result');
const answerButtons = document.querySelectorAll('.answer');
const confettiContainer = document.getElementById('confetti-container');


function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionText.textContent = currentQuestion.question;
    for (let i = 0; i < answerButtons.length; i++) {
        answerButtons[i].textContent = currentQuestion.options[i];
    }
}


function checkAnswer(selectedOption) {
    const currentQuestion = questions[currentQuestionIndex];
    const correctAnswer = currentQuestion.correctAnswer;

    if (currentQuestion.options[selectedOption] === correctAnswer) {
        correctAnswers++;
        messageElement.textContent = "To'g'ri javob!";
        messageElement.style.color = "green";
    } else {
        messageElement.textContent = "Xato javob!";
        messageElement.style.color = "red";
    }

   
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        clearInterval(timerInterval); 
        showResult();
    }
}


function showResult() {
    resultElement.textContent = `Siz ${correctAnswers} ta to'g'ri javob berdingiz.`;
    messageElement.textContent = "";
    messageElement.style.color = "black";
    showConfetti();
}


let timerInterval = setInterval(function() {
    if (timeLeft <= 0) {
        clearInterval(timerInterval); 
        showResult();
    } else {
        timerElement.textContent = `${timeLeft} seconds left`;
        timeLeft--;
    }
}, 1000);


loadQuestion();

let confettiShown = false; 

function showConfetti() {
    if (confettiShown) return; 
    confettiShown = true; 

    const numberOfConfetti = 1000; 
    for (let i = 0; i < numberOfConfetti; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.animationDelay = Math.random() * 2 + 's';
        confettiContainer.appendChild(confetti);
    }
    confettiContainer.style.display = 'block'; 
}

