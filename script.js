var computerChoose = ["ROCK", "PAPER", "SCISSORS"];
var getRandomChoice = () => computerChoose[Math.floor(Math.random() * 3)];
var computerChoice = document.querySelector('[data-ns-test="computer-choose"]');
var userChoice = document.querySelector(".user-choice");
var turnsInput = document.querySelector("#turns");
var turnsLeft = document.querySelector('[data-ns-test="rounds-left"]');

var userPoint = document.querySelector('[data-ns-test="user-points"]');
var computerPoint = document.querySelector('[data-ns-test="computer-points"]');
var roundResult = document.querySelector('[data-ns-test="round-result"]');
var gameResult = document.querySelector('[data-ns-test="game-result"]');

const playButton = document.querySelector('[data-ns-test="play-game"]');
playButton.addEventListener("click", startGame);

function startGame(event) {
  turnsLeft.innerText = turnsInput.value;

  if (turnsLeft.innerText > 0) {
    userChoice.hidden = false;
  } else {
    userChoice.hidden = true;
  }
  var allUserButtons = document.querySelectorAll(".user-choice > *");
  for (const userButton of allUserButtons) {
    userButton.addEventListener("click", handleClick);
  }

  //
  function handleClick(event) {
    userChoice.hidden = false;

    let userOption = event.target.innerText;
    let computerOption = getRandomChoice();
    if (userOption == "ROCK") {
      if (computerOption == "PAPER") {
        // increase computer points
        increaseComputerPoints();
      } else if (computerOption == "SCISSORS") {
        // increase user points
        increaseUserPoints();
      } else {
        // it's a tie
        roundResult.innerText = "TIE";
      }
    } else if (userOption == "PAPER") {
      if (computerOption == "SCISSORS") {
        // increase computer points
        increaseComputerPoints();
      } else if (computerOption == "ROCK") {
        // increase user points
        increaseUserPoints();
      } else {
        // it's a tie
        roundResult.innerText = "TIE";
      }
    } else {
      // userOption is SCISSORS
      if (computerOption == "ROCK") {
        // increase computer points
        increaseComputerPoints();
      } else if (computerOption == "PAPER") {
        // increase user points
        increaseUserPoints();
      } else {
        // it's a tie
        roundResult.innerText = "TIE";
      }
    }
    computerChoice.innerText = computerOption;
    turnsLeft.innerText -= 1;

    if (turnsLeft.innerText == 0) {
      // render game result
      userChoice.hidden = true;
      let currentUserPoints = Number(userPoint.innerText);
      let currentComputerPoints = Number(computerPoint.innerText);

      if (currentUserPoints > currentComputerPoints) {
        gameResult.innerText = "WON";
      } else if (currentUserPoints < currentComputerPoints) {
        gameResult.innerText = "LOSE";
      } else {
        gameResult.innerText = "TIE";
      }
    }
  }
}

function increaseUserPoints() {
  let currentUserPoints = Number(userPoint.innerText);
  userPoint.innerText = currentUserPoints + 1;
  roundResult.innerText = "WON";
}

function increaseComputerPoints() {
  let currentComputerPoints = Number(computerPoint.innerText);
  computerPoint.innerText = currentComputerPoints + 1;
  roundResult.innerText = "LOSE";
}
