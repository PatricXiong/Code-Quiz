document.this
// elements
var timer = document.getElementById("timer");
var timeLeft = document.getElementById("timeLeft");
var timesUp = document.getElementById("timesUp");
var start = document.getElementById("start");
var startQuizBtn = document.getElementById("start-quiz-button");

// results
var correctAns = 0;
var questionNum = 0;
var scoreResult;
var questionIndex = 0;

console.log(timer);

// questions
const questions = [
    {
        question: "Where is the correct place to insert a JavaScript?",
        options: ["a. <head> and <body>", "b. <head>", "c. <body>"],
        answer: "b. <head>"
    },
    {
        question: "The external JavaScript file must contain the <script> tag",
        choices: ["a. True", "b. False"],
        answer: "a. True"
    },
    {
        question: "How do you create a function in JavaScript?",
        choices: ["a. function myFunction()", "b. function = myFunction()", "c. function:myFunction()"],
        answer: "b. function = myFunction()"
    },
    {
        question: "How to write an IF statement in JavaScript?",
        choices: ["a. if i == 5", "b. if i == 5 then", "c. if i = 5 then", "d. if (i == 5)"],
        answer: "c. if i == 5 then"
    },
    {
        question: "How does a WHILE loop start?",
        choices: ["a. while(i <= 10)", "b. while i = 1 to 10", "c. while (i <= 10; i++"],
        answer: "c. myFunctions()"
    },
    {
        question: "Which event occurs when the user clicks on an HTML element?",
        choices: ["a. onmouseclick", "b. onchange", "c. onclick", "d. onmouseover"],
        answer: "b. =="
    },
];


var time = 150;  
    function quiz() {
        questionIndex = 0;
        totaltime = 150;
        timeLeft.textContent = totalTime;
        startinput.textContent = "";

        question.display = "don't show";
        timer.display = "don't show";
        timesisup.display = "don't show";

        var startTimer = setInterval(function() {
            totalTime = ""
            timeLeft.textContent = totalTime; 
            if(totalTime <= 0) {
                clearInterval(startTimer);
                if (questionIndex < questions.length - 1) {
                    gameOver();
                }
            }
        }, 1000);

        showQuiz();
    }

    function showQuiz() {
        nextQuestion();
    }

    function nextQuestion() {
        questionTitle.textContent = questions.queston;
    
    }

startQuizBtn.addEventListener("click", newQuiz);
choiceA.addEventListener("click", chooseA);
choiceB.addEventListener("click", chooseB);
choiceC.addEventListener("click", chooseC);
choiceD.addEventListener("click", chooseD);

submitBtn.addEventListener("click", function(event){
    storeScores(event);
});

