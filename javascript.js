const container = document.querySelector(".container");
const image = document.querySelectorAll("img");
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const result = document.querySelector(".result");
const score = document.querySelector(".score");
const playerScore = document.querySelector(".playerScore");
const compScore = document.querySelector(".compScore");
const choice = document.querySelector(".choice");
const playerOption = document.querySelector(".playerOption");
const computerOption = document.querySelector(".computerOption");

let yourScore = 0;
let computerScore = 0;
let gamePlayed = 0;
let playerInput;

const click = image.forEach((img) =>
  img.addEventListener("click", () => {
    playerInput = `Player: ${img.alt}`;
    playerOption.textContent = playerInput;
    let computerInput = getComputerChoice();
    computerOption.textContent = `Computer: ${computerInput}`;
  })
);

function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3) + 1;
  if (choice == 1) {
    return "Rock";
  } else if (choice == 2) {
    return "Paper";
  } else {
    return "Scissors";
  }
}

//make a function that shows the final result
function playRound(playerSelection, computerSelection) {
  let winner;
  if (
    (playerSelection === "Rock" && computerSelection === "Paper") ||
    (playerSelection === "Paper" && computerSelection === "Scissors") ||
    (playerSelection === "Scissors" && computerSelection === "Rock")
  ) {
    winner = "computer";
    computerScore += 1;
  } else if (
    (playerSelection === "Paper" && computerSelection === "Rock") ||
    (playerSelection === "Scissors" && computerSelection === "Paper") ||
    (playerSelection === "Rock" && computerSelection === "Scissors")
  ) {
    winner = "player";
    yourScore += 1;
  } else {
    winner = "tie";
  }
  return;
}

function game() {
  for (i = 0; i < 5; i++) {
    let computerInput = getComputerChoice();
    playRound(playerInput, computerInput);
    gamePlayed += 1;
  }
  finalwinner();
  return;
}

function finalwinner() {
  if (gamePlayed === 5) {
    if (yourScore > computerScore) {
      console.log("Yon Won!");
    } else if (yourScore < computerScore) {
      console.log("You lost!");
    } else {
      console.log("It's a tie!");
    }
  }
}
