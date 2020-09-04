var username = document.getElementById("name");
var submitButton = document.getElementById("submit");
var finalScore = document.getElementById("final-score");
var mostRecentScore = localStorage.getItem("mostRecentScore");
var highScores = JSON.parse(localStorage.getItem("highScores")) || [];

console.log(highScores);

finalScore.innerText = mostRecentScore;

username.addEventListener("keyup", function () {
  submitButton.disabled = !username.value;
});

document.querySelector("form").onsubmit = function (event) {
  event.preventDefault();
  var name = document.getElementById("name").value;
  localStorage["name"] = name;
  // console.log(localStorage);
  var score = {
    score: mostRecentScore,
    name: username.value
  };
  // Adding, sorting, then cutting the lowest score out
  highScores.push(score);
  highScores.sort((x, y) => y.score - x.score);
  highScores.splice(5);

  localStorage.setItem("highScores", JSON.stringify(highScores));
  return window.location.href="home.html";
};

$("#start-button").click(function () {
  window.location.href = "quiz.html";
});
$("#home-button").click(function () {
  window.location.href = "home.html";
});