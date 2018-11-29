var userClickedPattern = [];
var gamePattern = [];
var buttonColours = ["red", "blue", "green", "yellow"];
var randomNumber;
var level = 0;

function nextSequence() {
  userClickedPattern = [];
  var randomNumber = Math.floor((Math.random() * 3));
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  $("#" + randomChosenColour).fadeOut(100).fadeIn(100);
  playSound(randomChosenColour);
  level++;
  $("h1").text("Level " + level);
}

function playSound(color) {

  switch (color) {
    case "red":
      var red = new Audio("sounds/red.mp3");
      red.volume = 0.05;
      red.play();
      break;

    case "blue":
      var blue = new Audio("sounds/blue.mp3");
      blue.volume = 0.05;
      blue.play();
      break;

    case "green":
      var green = new Audio("sounds/green.mp3");
      green.volume = 0.05;
      green.play();
      break;

    case "yellow":
      var yellow = new Audio("sounds/yellow.mp3");
      yellow.volume = 0.05;
      yellow.play();
      break;
  }
}

function wrong() {
  var wrong = new Audio("sounds/wrong.mp3");
  wrong.volume = 0.05;
  wrong.play();
}

$(".btn").click(function handler() {
  var userChosenColour = this.id;
  userClickedPattern.push(userChosenColour);

  playSound(userChosenColour);
  animatePress(userChosenColour);

  checkAnswer(userClickedPattern.length-1);

});

function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");

  setTimeout(function() {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}

$("h1").click(function handler() {
  nextSequence();
});

function checkAnswer(currentLevel) {

  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    console.log("success");

    if (userClickedPattern.length === gamePattern.length) {
      setTimeout(function () {
        nextSequence();
      }, 1000);
    }

  } else {
    wrong();
    $("body").addClass("game-over");
    $("h1").text("Game Over, Click on me to Restart");

    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 200);

    startOver();

  }

  function startOver() {
    level = 0;
    gamePattern = [];
  }

}
