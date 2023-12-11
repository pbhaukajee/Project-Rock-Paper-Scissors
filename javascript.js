const container = document.querySelector(".container");
const image = document.querySelectorAll("img");
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const result = document.querySelector(".result");
const score = document.querySelector(".score");
const playerScore = document.querySelector(".playerScore");
const compScore = document.querySelector(".compScore");

function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3) + 1;
  if (choice == 1) {
    return "rock";
  } else if (choice == 2) {
    return "paper";
  } else {
    return "scissors";
  }
}
let yourScore = 0;
let computerScore = 0;
let gamePlayed = 0;

//make a function that shows the final result
function playRound(playerSelection, computerSelection) {
  let winner;
  if (
    (playerSelection === "rock" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "rock")
  ) {
    winner = "computer";
    computerScore += 1;
  } else if (
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper") ||
    (playerSelection === "rock" && computerSelection === "scissors")
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
    let playerInput = "rock";
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

game();

image.forEach((img) =>
  img.addEventListener("click", () => {
    console.log(img.alt);
  })
);
