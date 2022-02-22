function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function computerPlay() {
  const outcomes = ["cs-rock", "cs-paper", "cs-scissors"];
  return outcomes[randomNumber(0, 3)];
}

let computerScore = 0;
let playerScore = 0;
let csButtons = document.querySelectorAll(".cs-btn");

function playRound(playerSelection) {
  let computerSelection = computerPlay();
  // console.log(computerSelection);

  let csS = document.getElementById("cs-scissors");
  let csR = document.getElementById("cs-rock");
  let csP = document.getElementById("cs-paper");
  console.log(csS.attributes);

  if (playerSelection == "rock" && computerSelection == "cs-scissors") {
    csS.classList.add("active");
    csR.classList.remove("active");
    csP.classList.remove("active");
    playerScore++;
    return `you win! rock beats paper. Player Score: ${playerScore}`;
  } else if (playerSelection == "scissors" && computerSelection == "cs-rock") {
    csS.classList.remove("active");
    csR.classList.add("active");
    csP.classList.remove("active");
    computerScore++;
    return `you lose! rock beats paper. Computer Score: ${computerScore} `;
  } else if (playerSelection == "scissors" && computerSelection == "cs-paper") {
    csS.classList.remove("active");
    csR.classList.remove("active");
    csP.classList.add("active");
    playerScore++;
    return `you win! scissors cuts paper. Player Score: ${playerScore}`;
  } else if (playerSelection == "paper" && computerSelection == "cs-scissors") {
    csS.classList.add("active");
    csR.classList.remove("active");
    csP.classList.remove("active");
    computerScore++;
    return `you lose! scissors cuts paper. Computer Score: ${computerScore}`;
  } else if (playerSelection == "paper" && computerSelection == "cs-rock") {
    csS.classList.remove("active");
    csR.classList.add("active");
    csP.classList.remove("active");
    playerScore++;
    return `you win! paper covers rock. Player Score: ${playerScore}`;
  } else if (playerSelection == "rock" && computerSelection == "cs-paper") {
    csS.classList.remove("active");
    csR.classList.remove("active");
    csP.classList.add("active");
    computerScore++;
    return `you lose! paper covers rock. Computer Score: ${computerScore}`;
  } else if (`cs-${playerSelection}` == computerSelection) {
    if (computerSelection == "cs-rock") {
      csS.classList.remove("active");
      csR.classList.add("active");
      csP.classList.remove("active");
    } else if (computerSelection == "cs-paper") {
      csS.classList.remove("active");
      csR.classList.remove("active");
      csP.classList.add("active");
    } else if (computerSelection == "cs-scissors") {
      csS.classList.add("active");
      csR.classList.remove("active");
      csP.classList.remove("active");
    }

    return `draw! ${playerSelection} is same as ${playerSelection}`;
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

let para = document.getElementById("result");
let csResult = document.getElementById("display-cs-result");
let playerResult = document.getElementById("display-player-reult");

// console.log(csButtons);

buttons.forEach((buttons) => {
  buttons.addEventListener("click", () => {
    let a = buttons.classList[1];
    let b = playRound(a);

    para.innerHTML = b;
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
