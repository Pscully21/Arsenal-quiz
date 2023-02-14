//functionality
//variables
var welcomeBox = document.getElementById("welcome-box");
var startButton = document.getElementById("start-button");
var answerEl = document.getElementById("answer");
var timerEl = document.getElementById("timer");
var timeRemaining = 40;

function beginQuiz() {
    showQuiz();
    var timeInterval = setInterval(function () {
        if (timeLeft > 0) {
            timerEl.textContent = ": " + timeLeft + "seconds";
            timeLeft--;
        } else {
            timerEl.textContent = "";
            clearInterval(timeInterval);
            showScore();
        }
    }, 2000);
}
startButton.addEventListener("click", beginQuiz);
//questions
const quizQuestions = [
    {
        question: "How many League Titles have Arsenal FC won?",
        a: "0",
        b: "3",
        c: "13",
        d: "too many",
        correctAns: "c",
    },
    {
        question: "How much is Arsenal FC worth?",
        a: "~1.5$ Billion",
        b: "~2.1$ Billion",
        c: "~2.6$ Billion",
        d: "~3.3$ Billion",
        correctAns: "b",
    },
    {
        question: "How many goals did Arsenal FC legend Thierry Henry score for the club?",
        a: "168 goals",
        b: "199 goals",
        c: "226 goals",
        d: "287 goals",
        correctAns: "c"
    },
    {
        question: "Arsene Wenger was one of the most successful managers across Europe during his tenure at Arsenal FC, How many games did he manage throughout his time at Arsenal?",
        a: "458 games",
        b: "689 games",
        c: "1,034 games",
        d: "1,702 games",
        correctAns: "d",
    },
    {
        question: "What is the primary difference between the 'let' and 'const' variable declarations?",
        a: "'let' can be re-assigned later when writing code where 'const' cannot",
        b: "'const' is only block scoped where 'let' is not",
        c: "'let' is strictly function scoped where 'const' is strictly globally scoped",
        d: "There is no difference when using either variable declaration",
        correctAns: "a",
    },
];

var quizContainer = document.getElementById("quiz-container");
var questionEl = document.getElementById("question");
var optionA = document.getElementById("a");
var optionB = document.getElementById("b");
var optionC = document.getElementById("c");
var optionD = document.getElementById("d");

function showQuiz() {
    quizContainer.style.display = "block";
    var quizInfo = quizQuestions[currentQuiz];
    questionEl.innerText = quizInfo.question;
    optionA.innerText = quizInfo.a;
    optionB.innerText = quizInfo.b;
    optionC.innerText = quizInfo.c;
    optionD.innerText = quizInfo.d;
}
var currentQuiz = 0;
var score = 0;
function questionResult() {
    if(quizData[currentQuiz].correctAns === this.id) {
        answerEl.textContent = "Nice Job! You're Correct!";
        score += 10;
    } else {
        answerEl.textContent = "Incorrect!";
        timeRemaining -= 10;
    }

    currentQuiz++;
    if (currentQuiz < quizData.length) {
        showQuiz();
    } else {
        showScore();
    }
}
optionA.addEventListener("click", startQuiz)