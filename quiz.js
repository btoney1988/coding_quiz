// DOM and Global variables
var question = document.getElementById("question");
var answers = Array.from(document.getElementsByClassName("answer-button"));
var questionCountInfo = document.getElementById("questionCounter");
var scoreInfo = document.getElementById("score");
var countdownEL = document.getElementById("timeCounter");

var currentQuestion = {};
var correctAnswer = true;
var score = 0;
var questionCounter = 0;
var availableQuestions = [];
// Questions 21 total
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
    question: 'What does CSS stand for?',
    answer1: 'Cascading Style Sheets',
    answer2: 'Colorful Style Sheets',
    answer3: 'Creative Style Sheets',
    answer4: 'Computer Style Sheets',
    answer: 1
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
  {
    question: 'How do you add a background color for all <h1> elements?',
    answer1: 'all.h1 {background-color:#FFFFF}',
    answer2: 'h1 {background-color:#FFFFF}',
    answer3: 'h1.all {background-color:#FFFFF}',
    answer4: 'h1(all) {background-color:#FFFF}',
    answer: 2
  },
  {
    question: 'How do you display hyperlinks without an underline?',
    answer1: 'a{text-decoration:none;}',
    answer2: 'a{decoration:no-underline;}',
    answer3: 'a{text-decoration:no-underline;}',
    answer4: 'a{underline:none;}',
    answer: 1
  },
  {
    question: 'How do you write "Hello World" in an alert box?',
    answer1: 'alertBox("Hello World")',
    answer2: 'msgBox("Hello World")',
    answer3: 'msg("Hello World")',
    answer4: 'alert("Hello World")',
    answer: 4
  },
  {
    question: 'How does a WHILE loop start?',
    answer1: 'while i=1 to 10',
    answer2: 'while (i <= 10)',
    answer3: 'while (i <= 10; i++)',
    answer4: 'while (i=1) to 10',
    answer: 3
  },
  {
    question: 'How does a FOR loop start?',
    answer1: 'for (i = 0; i <= 5; i++)',
    answer2: 'for (i = 0; i <= 5)',
    answer3: 'for i = 0 to 5',
    answer4: 'for (i <= 5; i++)',
    answer: 1
  },
  {
    question: 'What is the correct way to write a JavaScript array?',
    answer1: 'var colors = (1:"red", 2:"green", 3:"blue")',
    answer2: 'var colors = 1=("red"), 2=("green"), 3=("blue")',
    answer3: 'var colors = "red","green","blue")',
    answer4: 'var colors = ["red", "green", "blue"]',
    answer: 4
  },
  {
    question: 'How can you detect the clients browser name?',
    answer1: 'client.navName',
    answer2: 'navigator.appName',
    answer3: 'browser.name',
    answer4: 'browser.appName',
    answer: 2
  },
  {
    question: 'Which event occurs when the user clicks on an HTML element?',
    answer1: 'onclick',
    answer2: 'onmouseclick',
    answer3: 'onmouseover',
    answer4: 'onchange',
    answer: 1
  },
  {
    question: 'The Bootstrap grid system is based on how many columns?',
    answer1: '3',
    answer2: '12',
    answer3: '6',
    answer4: '9',
    answer: 2
  },
  {
    question: 'A standard navigation tab is created with:',
    answer1: '<ul class="navigation-tabs">',
    answer2: '<ul class="nav nav-navbar">',
    answer3: '<ul class="nav nav-tabs">',
    answer4: '<ul class="nav tabs">',
    answer: 2
  },
  {
    question: 'Which class is used to create a black navigation bar?',
    answer1: '.navbar-inverse',
    answer2: '.navbar-befault',
    answer3: '.navbar-dark',
    answer4: '.navbar-black',
    answer: 1
  },
  {
    question: 'Which plugin is used to cycle through elements, like a slideshow?',
    answer1: 'Scrollspy',
    answer2: 'Slideshow',
    answer3: 'Orbit',
    answer4: 'Carousel',
    answer: 4
  },
  {
    question: 'Which class indicates uppercased text?',
    answer1: '.text-uppercase',
    answer2: '.uppercase',
    answer3: '.ucase',
    answer4: '.text-capitalize',
    answer: 1
  },
  {
    question: 'What does HTML stand for?',
    answer1: 'Hyper Text Markeup Language',
    answer2: 'Hyperlinks and Text Markup Language',
    answer3: 'Home Tool Markup Language',
    answer4: 'Howdy There My Lads!',
    answer: 1
  },
  {
    question: 'What is the correct HTML for adding a background color?',
    answer1: '<background>yellow</background>',
    answer2: '<body style="background-color:yellow:">',
    answer3: '<body bg=yellow>',
    answer4: '<body = yellow>',
    answer: 2
  },
  {
    question: 'How can you make a numbered list?',
    answer1: '<dl>',
    answer2: '<list>',
    answer3: '<ol>',
    answer4: '<ul>',
    answer: 3
  },
];
var correctAnswer = 10;
var maxQuestions = 7;
var time = 40;

// Timer function
var timer = function () {
  var x = time--;
  if (time < 75) {
    countdownEL.innerHTML = x;
  }
  if (x < 1) {
    localStorage.setItem("mostRecentScore", score);
    window.location.href = "endscreen.html";
  }
};
// Timer interval to 1 second
setInterval(timer, 1000);

// Setting up the game when someone clicks on the start button
function startGame() {
  questionCounter = 0;
  score = 0;
  time = 40;
  timer();
  availableQuestions =  Array.from(questions);
  console.log(availableQuestions);
  getNextQuestion();
}

// Function to get the next question 
function getNextQuestion() {
  questionCounter++;
  questionCountInfo.innerText = questionCounter + "/" + maxQuestions;
  // When player reaches 7 questions their score will be save to local storage and they will be reverted to the endscreen
  if (questionCounter === maxQuestions + 1) {
    localStorage.setItem("mostRecentScore", score);
    window.location.href = "endscreen.html";
  }
  // Randomizing each question chosen from the questions array 
  var questionIndex = Math.floor(Math.random() * availableQuestions.length);
  currentQuestion = availableQuestions[questionIndex];
  question.innerText = currentQuestion.question;
  // Checking to make sure the answer the user chose was correct
  answers.forEach(function (answer) {
    var number = answer.dataset.number;
    answer.innerText = currentQuestion["answer" + number];
  });

  availableQuestions.splice(questionIndex, 1);
  
  correctAnswer = true;
}

// Function to add score and time penalty/reward
answers.forEach(function (answer) {
  answer.addEventListener("click", function (event) {
    var selected = event.target;
    var selectedAnswer = selected.dataset.number;
    console.log(selectedAnswer == currentQuestion.answer);
    // If answer is correct score/timer will increase
    if ((selectedAnswer == currentQuestion.answer) === true) {
      score = score + 10;
      time = time + 3;
    }
    // If answer is wrong score/timer will decrease 
    else {
      score = score - 3;
      time = time - 3;
    }
    scoreInfo.innerText = score;

    getNextQuestion();
  });
});

// Display 0 in the score HUD at beginning
scoreInfo.innerText = score;

startGame();