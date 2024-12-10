
const questions = [
  
    { question: "2 + 3 = ?", options: [5, 6, 7], correctAnswer: 5 },
    { question: "7 + 8 = ?", options: [13, 15, 15], correctAnswer: 15 },
    { question: "3 + 9 = ?", options: [12, 13, 14], correctAnswer: 12 },
    { question: "15 + 6 = ?", options: [20, 21, 22], correctAnswer: 21 },

 
    { question: "10 - 4 = ?", options: [5, 6, 7], correctAnswer: 6 },
    { question: "20 - 9 = ?", options: [11, 10, 12], correctAnswer: 11 },
    { question: "15 - 3 = ?", options: [11, 12, 13], correctAnswer: 12 },
    { question: "18 - 5 = ?", options: [13, 16, 14], correctAnswer: 13 },

    
    { question: "3 ? 4 = ?", options: [10, 12, 12], correctAnswer: 12 },
    { question: "6 ? 7 = ?", options: [42, 41, 43], correctAnswer: 42 },
    { question: "5 ? 5 = ?", options: [23, 25, 25], correctAnswer: 25 },
    { question: "8 ? 3 = ?", options: [23, 24, 25], correctAnswer: 24 },

  
    { question: "12 ? 4 = ?", options: [2, 3, 4], correctAnswer: 3 },
    { question: "16 ? 2 = ?", options: [16, 8, 9], correctAnswer: 8 },
    { question: "9 ? 3 = ?", options: [2, 3, 4], correctAnswer: 3 },
    { question: "20 ? 5 = ?", options: [4, 5, 6], correctAnswer: 4 },

  
    { question: "8 + 3 ? 2 = ?", options: [14, 15, 16], correctAnswer: 14 },
    { question: "12 ? 4 + 5 = ?", options: [8, 9, 10], correctAnswer: 8 },
    { question: "7 ? 2 - 4 = ?", options: [10, 12, 14], correctAnswer: 10 },
    { question: "3 ? 4 + 2 = ?", options: [14, 15, 16], correctAnswer: 14 },

   
    { question: "100 ? 10 = ?", options: [8, 10, 10], correctAnswer: 10 }
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


const countdown = setInterval(function() {
    if (timeLeft <= 0) {
        clearInterval(countdown);
       
        showResult();
    } else {
        timerElement.textContent = `${timeLeft} seconds left`;
        timeLeft--;
    }
}, 1000);


function showQuestion(index) {
    if (index < questions.length) {
        const question = questions[index];
        questionText.textContent = question.question;
        const options = question.options;

      
        for (let i = 0; i < options.length; i++) {
            answerButtons[i].textContent = options[i];
            answerButtons[i].setAttribute('onclick', `checkAnswer(${options[i]})`);
        }
        messageElement.textContent = '';  
    } else {
        alert("Test yakunlandi!");
        showResult();
    }
}

function checkAnswer(answer) {
    const correctAnswer = questions[currentQuestionIndex].correctAnswer;
    if (answer === correctAnswer) {
        messageElement.textContent = 'To\'g\'ri javob!';
        messageElement.style.color = 'green';
        correctAnswers++;
    } else {
        messageElement.textContent = 'Noto\'g\'ri javob, qayta urinib ko\'ring!';
        messageElement.style.color = 'red';
    }

    currentQuestionIndex++;
    setTimeout(() => {
        if (currentQuestionIndex < questions.length) {
            showQuestion(currentQuestionIndex);
        } else {
            showResult();
        }
    }, 1000);
}


function showResult() {
    resultElement.textContent = `To'g'ri javoblar soni: ${correctAnswers}`;
    showConfetti(); 
}


function showConfetti() {
    confettiContainer.style.display = 'block';
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.left = Math.random() * 100 + 'vw';  
        confetti.style.animationDuration = Math.random() * 3 + 2 + 's'; 
        confettiContainer.appendChild(confetti);
    }

    setTimeout(() => {
        confettiContainer.style.display = 'none'; 
    }, 5000);
}


showQuestion(currentQuestionIndex);
