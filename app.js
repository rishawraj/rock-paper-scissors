function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function computerPlay() {
  const outcomes = ["rock", "paper", "scissors"];
  return outcomes[randomNumber(0, 3)];
}

let computerScore = 0;
let playerScore = 0;

function playRound(playerSelection, computerSelection) {
  if (playerSelection == "rock" && computerSelection == "scissors") {
    playerScore++;
    return `you win! rock beats paper. Score: ${playerScore}`;
  } else if (playerSelection == "scissors" && computerSelection == "rock") {
    computerScore++;
    return `you lose! rock beats paper. Score: ${computerScore} `;
  } else if (playerSelection == "scissors" && computerSelection == "paper") {
    playerScore++;
    return `you win! scissors cuts paper. Score: ${playerScore}`;
  } else if (playerSelection == "paper" && computerSelection == "scissors") {
    computerScore++;
    return `you lose! scissors cuts paper. Score: ${computerScore}`;
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    playerScore++;
    return `you win! paper covers rock. Score: ${playerScore}`;
  } else if (playerSelection == "rock" && computerSelection == "paper") {
    computerScore++;
    return `you lose! paper covers rock. Score: ${computerScore}`;
  } else {
    return "draw!";
  }
}

function game() {
  for (let i = 0; i < 5; i++) {
    //   every thing inside for loop repeats every loops.
    let playerSelection = prompt("type rock, paper or scissors");
    playerSelection = playerSelection.toLowerCase();
    const computerSelection = computerPlay();
    console.log(playRound(playerSelection, computerSelection));
  }
  if (playerScore > computerScore) {
    console.log(
      `you're the winner! Final Score: ${playerScore} to ${computerScore}`
    );
  } else if (computerScore > playerScore) {
    console.log(
      `you're the loser! Final Score: ${playerScore} to ${computerScore}`
    );
  } else {
    console.log(`you tied. Final Score: ${playerScore} to ${computerScore}`);
  }
}
game();
