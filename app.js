function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function computerPlay() {
  const outcomes = ["cs-rock", "cs-paper", "cs-scissors"];
  return outcomes[randomNumber(0, 3)];
}

let computerScore = 0;
let playerScore = 0;

function playRound(playerSelection) {
  let computerSelection = computerPlay();

  if (playerSelection == "rock" && computerSelection == "cs-scissors") {
    playerScore++;
    return `you win! rock beats paper. Player Score: ${playerScore}`;
  } else if (playerSelection == "scissors" && computerSelection == "cs-rock") {
    computerScore++;
    return `you lose! rock beats paper. Computer Score: ${computerScore} `;
  } else if (playerSelection == "scissors" && computerSelection == "cs-paper") {
    playerScore++;
    return `you win! scissors cuts paper. Player Score: ${playerScore}`;
  } else if (playerSelection == "paper" && computerSelection == "cs-scissors") {
    computerScore++;
    return `you lose! scissors cuts paper. Computer Score: ${computerScore}`;
  } else if (playerSelection == "paper" && computerSelection == "cs-rock") {
    playerScore++;
    return `you win! paper covers rock. Player Score: ${playerScore}`;
  } else if (playerSelection == "rock" && computerSelection == "cs-paper") {
    computerScore++;
    return `you lose! paper covers rock. Computer Score: ${computerScore}`;
  } else if (`cs-${playerSelection}` == computerSelection) {
    return "draw!";
  } else {
    return "something unexpected happened!";
  }
}

const buttons = document.querySelectorAll(".btn");

function disableButtons() {
  buttons.forEach((elem) => {
    elem.disabled = true;
  });
}
/
let para = document.getElementById("result");
let csResult = document.getElementById("display-cs-result");
let playerResult = document.getElementById("display-player-reult");

buttons.forEach((buttons) => {
  buttons.addEventListener("click", () => {
    let a = buttons.classList[1];
    let b = playRound(a);
    para.innerHTML = b;
    console.log(b);
    csResult.innerHTML = computerScore;
    playerResult.innerHTML = playerScore;

    if (playerScore == 5) {
      disableButtons();
      para.innerHTML = "match over!! you win.";
    } else if (computerScore == 5) {
      disableButtons();
      para.innerHTML = "match over!! computer won.";
    }
  });
});
