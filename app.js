function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function computerPlay() {
  const outcomes = ["rock", "paper", "scissors"];
  return outcomes[randomNumber(0, 3)];
  //   return console.log(outcomes[randomNumber(0, 3)]);
}
// computerPlay();

const playerSelection = prompt("enter your choice").toLowerCase();
console.log("you: " + playerSelection);
const computerSelection = computerPlay();
console.log("computer: " + computerSelection);

function playRound(playerSelection, computerSelection) {
  if (playerSelection == "rock" && computerSelection == "scissors") {
    return "you win";
  } else if (playerSelection == "scissors" && computerSelection == "paper") {
    return "you win";
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    return "you win";
  } else if (playerSelection == computerSelection) {
    return "tied";
  } else {
    return "you lose";
  }
}
let x = playRound(playerSelection, computerSelection);
console.log(x);
