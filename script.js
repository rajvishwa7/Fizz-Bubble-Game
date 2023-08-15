// Event Bubbling
// when u click on an element that will raise an event,
// and when didn't find event listener it will check listener on parent,
// again if didn't find will check on parent inside parent inside parent

var timer = 60;
var score = 0;
var hitFizz = 0;

function makeFizz() {
  var clutter = "";

  for (var i = 1; i <= 175; i++) {
    var fizzNum = Math.floor(Math.random() * 10);
    clutter += `<div class="fizz">${fizzNum}</div>`;
  }

  document.querySelector(".pbottom").innerHTML = clutter;
}

function runTimer() {
  var timerOut = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector("#timerVal").textContent = timer;
    } else {
      clearInterval(timerOut);
      document.querySelector(
        ".pbottom"
      ).innerHTML = `<h1 class='gameOver'>Game Over</h1>`;
    }
  }, 1000);
}

function getNewHit() {
  hitFizz = Math.floor(Math.random() * 10);
  document.querySelector("#newHit").textContent = hitFizz;
}

function increaseScore() {
  score += 10;
  document.querySelector("#scoreVal").textContent = score;
}

document
  .querySelector(".pbottom")
  .addEventListener("click", function (details) {
    var clickedFizz = Number(details.target.textContent);
    if (clickedFizz === hitFizz) {
      increaseScore();
      makeFizz();
      getNewHit();
    }
  });

runTimer();
makeFizz();
getNewHit();
