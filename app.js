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
let csS = document.getElementById("cs-scissors");
let csR = document.getElementById("cs-rock");
let csP = document.getElementById("cs-paper");

function playRound(playerSelection) {
  let computerSelection = computerPlay();

  if (playerSelection == "rock" && computerSelection == "cs-scissors") {
    csS.classList.add("active");
    csR.classList.remove("active");
    csP.classList.remove("active");
    playerScore++;
    return `you win! <br> rock beats scissors. `;
  } else if (playerSelection == "scissors" && computerSelection == "cs-rock") {
    csS.classList.remove("active");
    csR.classList.add("active");
    csP.classList.remove("active");
    computerScore++;
    return `you lose! <br> rock beats scissors.  `;
  } else if (playerSelection == "scissors" && computerSelection == "cs-paper") {
    csS.classList.remove("active");
    csR.classList.remove("active");
    csP.classList.add("active");
    playerScore++;
    return `you win! <br> scissors cuts paper.`;
  } else if (playerSelection == "paper" && computerSelection == "cs-scissors") {
    csS.classList.add("active");
    csR.classList.remove("active");
    csP.classList.remove("active");
    computerScore++;
    return `you lose! <br> scissors cuts paper. `;
  } else if (playerSelection == "paper" && computerSelection == "cs-rock") {
    csS.classList.remove("active");
    csR.classList.add("active");
    csP.classList.remove("active");
    playerScore++;
    return `you win! <br> paper covers rock. `;
  } else if (playerSelection == "rock" && computerSelection == "cs-paper") {
    csS.classList.remove("active");
    csR.classList.remove("active");
    csP.classList.add("active");
    computerScore++;
    return `you lose! <br> paper covers rock.`;
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

    return `draw! <br> ${playerSelection} is same as ${playerSelection}`;
  } else {
    return "something unexpected happened!";
  }
}

const buttons = document.querySelectorAll(".btn");

function disableButtons() {
  buttons.forEach((elem) => {
    console.log(elem.classList);
    elem.disabled = true;
  });
}
function enableButtons() {
  buttons.forEach((elem) => {
    console.log(elem.classList);
    elem.disabled = false;
  });
}

let para = document.getElementById("result");
let csResult = document.getElementById("display-cs-result");
let playerResult = document.getElementById("display-player-reult");
const sound = document.getElementById("sound");

// modal
let modal = document.getElementById("modal");
let modalClose = document.querySelector(".close");
let finalResult = document.getElementById("finalResult");

function showModal() {
  modal.style.display = "block";
}
function closeModal() {
  modal.style.display = "none";
}

buttons.forEach((buttons) => {
  buttons.addEventListener("click", () => {
    sound.play();
    let a = buttons.classList[1];
    let b = playRound(a);

    para.innerHTML = b;
    csResult.innerHTML = computerScore;
    playerResult.innerHTML = playerScore;

    if (playerScore == 5) {
      disableButtons();
      para.innerHTML = "YOU WIN!! <br> Please refresh to play again!";
      finalResult.innerHTML = "YOU WIN";
      showModal();
    } else if (computerScore == 5) {
      disableButtons();
      para.innerHTML = "YOU LOST!! <br> Please refresh to play again!";
      finalResult.innerHTML = "YOU LOSE";
      showModal();
    }
  });
});

//  play again!!
function playAgain() {
  playerScore = 0;
  computerScore = 0;
  csResult.innerHTML = "0";
  playerResult.innerHTML = "0";
  para.innerHTML = "LETS <br> PLAY!";
  csS.classList.remove("active");
  csR.classList.remove("active");
  csP.classList.remove("active");

  sound.play();
  enableButtons();
  closeModal();
}
