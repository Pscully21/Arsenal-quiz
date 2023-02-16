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
        if (timeRemaining > 0) {
            timerEl.textContent = ": " + timeRemaining + "seconds";
            timeRemaining--;
        } else {
            timerEl.textContent = "";
            clearInterval(timeInterval);
            showScore();
        }
    }, 1000);
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
    welcomeBox.style.display = "none";
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
    if (quizQuestions[currentQuiz].correctAns === this.id) {
        answerEl.textContent = "Nice Job! You're Correct!";
        score += 10;
    } else {
        answerEl.textContent = "Incorrect!";
        timeRemaining -= 10;
    }

    currentQuiz++;
    if (currentQuiz < quizQuestions.length) {
        showQuiz();
    } else {
        showScore();
    }
}
//event listener code
optionA.addEventListener("click", questionResult);
optionB.addEventListener("click", questionResult);
optionC.addEventListener("click", questionResult);
optionD.addEventListener("click", questionResult);
//declare score vaiables
var nameEl = document.getElementById("name");
var finishEl = document.getElementById("finish");
var scoreContainer = document.getElementById("score-container");
var scoreEl = document.getElementById("score");

function showScore() {
    scoreContainer.style.display = "none";
    quizContainer.style.display = "none";
    scoreEl.textContent = score;
};

// tell user to register a name to keep track of score
finishEl.addEventListener("click", function registerName() {
    if (nameEl.value === "") {
        window.alert("You must submit a name");
    } else {
        var highScore = {
            username: nameEl.value,
            score: score,
        };
        var hsData = JSON.parse(localStorage.getItem("hsData")) || [];
        hsData.push(highScore);
        localStorage.setItem("hsData", JSON.stringify(hsData));
        //function that shows all highscore data
        renderHighScores();
    }
});

var highScoreContainer = document.getElementById("high-score-container");
var highScoreList = document.getElementById("high-score-list");
var showHighScore = document.getElementById("show-high-score");
var backEl = document.getElementById("back");
//showing high scores
function renderHighScores() {
    highScoreContainer.style.display = "block";
    scoreContainer.style.display = "none";
    quizContainer.style.display = "none";
    welcomeBox.style.display = "none";
    answerEl.style.display = "none";
    highScoreList.innerHTML = "";
    
    var savedHighScores = JSON.parse(localStorage.getItem("hsData")) || [];
    
    for (var i = 0; i < savedHighScores.length; i++) {
        var scoresList = document.createElement("li");
        scoresList.textContent = savedHighScores[i].initial + "-" + savedHighScores[i].score;

        highScoreList.appendChild(scoresList);
    }
}

showHighScore.addEventListener("click", renderHighScores);

//return to main page
backEl.addEventListener("click", function () {
    location.reload
});
