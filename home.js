// Mapping start button to the quiz page
$("#start-button").click(function () {
  window.location.href = "quiz.html";
});

$("#highscore-button").click(function () {
  var highScores = JSON.parse(localStorage.getItem("highScores"));

  $("#high-score").append(highScores.map(score => {
    return `<li class="high-score">${score.name} - ${score.score}</li>`;    
  }));
  this.disabled = true;
});