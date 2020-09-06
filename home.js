// Mapping start button to the quiz page
$("#start-button").click(function () {
  window.location.href = "quiz.html";
});
// High score function to display high scores when clicked
$("#highscore-button").click(function () {
  // JSON parse in order to get the string from the local storage
  var highScores = JSON.parse(localStorage.getItem("highScores"));
  // When high score button is clicked it will add new element "li" with the top 5 scores inserted
  $("#high-score").append(highScores.map(function(score) {
    return `<li class="high-score">${score.name} - ${score.score}</li>`;    
  }));
  // Disable the high score button in order to prevent user from clicking it multiple times
  this.disabled = true;
});