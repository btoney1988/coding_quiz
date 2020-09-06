// DOM Elements
var username = document.getElementById("name");
var submitButton = document.getElementById("submit");
var finalScore = document.getElementById("final-score");
var mostRecentScore = localStorage.getItem("mostRecentScore");
var highScores = JSON.parse(localStorage.getItem("highScores")) || [];

console.log(highScores);

// Show the players score in finalScore section
finalScore.innerText = mostRecentScore;

// Event listener to ensure that user has inputted a name before submitting
username.addEventListener("keyup", function () {
  submitButton.disabled = !username.value;
});

// Save the name and score to the local storage
document.querySelector("form").onsubmit = function (event) {
  event.preventDefault();
  // Saving name and score
  var name = document.getElementById("name").value;
  localStorage.name = name;
  var score = {
    score: mostRecentScore,
    name: username.value
  };
  // Adding, sorting, then cutting the lowest score out. Max number is 5 scores
  highScores.push(score);
  highScores.sort(function (x, y){
    return y.score - x.score;
  });
  highScores.splice(5);
  // Saving final high scores to local storage, turning highscores back into a string
  localStorage.setItem("highScores", JSON.stringify(highScores));
  window.location.href="index.html";
};

// Buttons will revert to correct page
$("#start-button").click(function () {
  window.location.href = "quiz.html";
});
$("#home-button").click(function () {
  window.location.href = "index.html";
});