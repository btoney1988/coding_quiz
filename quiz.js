var question = document.getElementById("question");
var answers = Array.from(document.getElementsByClassName("answer-button"));
var questionCountInfo = document.getElementById("questionCounter");
var scoreInfo = document.getElementById("score");
var currentQuestion = {};
var correctAnswer = true;
var score = 0;
var questionCounter = 0;
var availableQuestions = [];
var questions = [
  {
    question: 'How to write an IF statement for executing some code if "i" is NOT equal to 5?',
    answer1: 'if i=! 5 then',
    answer2: 'if i <> 5',
    answer3: 'if(i !=5)',
    answer4: 'if (i <> 5)',
    answer: 3
  },
  {
    question: 'The main basic laguages of web design are...',
    answer1: 'HTML',
    answer2: 'CSS',
    answer3: 'Javascript',
    answer4: 'all of the above',
    answer: 4
  },
  {
    question: 'Where in an HTML document is the correct place to refer to an external style sheet?',
    answer1: 'At the end of the document',
    answer2: 'In the <body> section',
    answer3: 'In the <head> section',
    answer4: 'At the top of the document',
    answer: 3
  },
  {
    question: 'Which is the correct CSS syntax?',
    answer1: 'body {color: black;}',
    answer2: '{body:color=black;}',
    answer3: '{body;color:black;}',
    answer4: 'body:color=black;',
    answer: 1
  },
  {
    question: 'How do you round the number 7.25, to the nearest integer?',
    answer1: 'Mar.rnd(7.25)',
    answer2: 'round(7.25)',
    answer3: 'rnd(7.25)',
    answer4: 'Math.round(7.25)',
    answer: 4
  },
]
var correctAnswer = 1;
var maxQuestions = 5


function startGame() {
  questionCounter = 0;
  score = 0;
  availableQuestions = [...questions]
  console.log(availableQuestions);
  getNextQuestion();
}

function getNextQuestion() {
  if (availableQuestions.length === 0) {
    localStorage.setItem("mostRecentScore", score)
    return window.location.href="endscreen.html";
  }
  questionCounter++;
  questionCountInfo.innerText = questionCounter + "/" + maxQuestions

  var questionIndex = Math.floor(Math.random() * availableQuestions.length);
  currentQuestion = availableQuestions[questionIndex];
  question.innerText = currentQuestion.question;

  answers.forEach(answer => {
    var number = answer.dataset['number'];
    answer.innerText = currentQuestion["answer" + number]
  });

  availableQuestions.splice(questionIndex, 1)

  correctAnswer = true;

};

answers.forEach(answer => {
  answer.addEventListener("click", function (event) {
    var selected = event.target;
    var selectedAnswer = selected.dataset["number"];
    console.log(selectedAnswer == currentQuestion.answer)

    if ((selectedAnswer == currentQuestion.answer) === true) {
      score++;
    }
    scoreInfo.innerText = score;

    getNextQuestion();
  });
});

scoreInfo.innerText = score

startGame()