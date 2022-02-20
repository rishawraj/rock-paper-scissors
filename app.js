function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function computerPlay() {
  const outcomes = ["cs-rock", "cs-paper", "cs-scissors"];
  return outcomes[randomNumber(0, 3)];
}

let computerScore = 0;
let playerScore = 0;

function playRound(playerSelection, computerSelection) {
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

// function game() {
//   for (let i = 0; i < 5; i++) {
//     //   every thing inside for loop repeats every loops.
//     // let playerSelection = prompt("type rock, paper or scissors");
//     playerSelection = playerSelection.toLowerCase();
//     const computerSelection = computerPlay();
//     console.log(playRound(playerSelection, computerSelection));
//   }
//   if (playerScore > computerScore) {
//     console.log(
//       `you're the winner! Final Score: ${playerScore} to ${computerScore}`
//     );
//   } else if (computerScore > playerScore) {
//     console.log(
//       `you're the loser! Final Score: ${playerScore} to ${computerScore}`
//     );
//   } else {
//     console.log(`you tied. Final Score: ${playerScore} to ${computerScore}`);
//   }
// }
// game();

document.querySelectorAll(".btn").forEach((item) => {
  item.addEventListener("click", (event) => {
    let playerSelection = item.classList;
    let b = playerSelection[1]; //DOMTokenlist -> array methods
    let computerSelection = computerPlay();
    let t = document.getElementById(`${computerSelection}`);
    t.style.backgroundColor = "red";
    // console.log(computerSelection);
    let c = playRound(b, computerSelection);

    console.log(c);
  });
  console.log(item);
});
