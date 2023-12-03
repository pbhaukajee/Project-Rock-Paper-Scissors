//Make a function called getComputerChoice that randomly picks between rock/paper/scissors.

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

//calling the function
getComputerChoice();

//make a function that shows the final result
function result(playerSelection, computerSelection) {
  let result;
  if (playerSelection === "rock" && computerSelection === "paper") {
    result = console.log("You Lose! Paper beats Rock");
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    result = console.log("You Lose! Scissors beats Paper");
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    result = console.log("You Lose! Rock beats Scissors");
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    result = console.log("You Win! Paper beats Rock");
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    result = console.log("You Win! Scissors beats Paper");
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    result = console.log("You Win! Rock beats Scissors");
  } else {
    result = console.log("It's a tie");
  }
  return result;
}

let playerInput = prompt("Please enter one: 'rock', 'paper' or 'scissors': ");
playerInput = playerInput.toLowerCase();
if (
  playerInput !== "rock" ||
  playerInput !== "paper" ||
  playerInput !== "scissors"
) {
  playerInput = prompt(
    "Information invalid. Please enter one of the following: 'rock', 'paper' or 'scissors'"
  );
}
let computerInput = getComputerChoice();
console.log(`Your input: ${playerInput}`);
console.log(`Computer's input: ${computerInput}`);
result(playerInput, computerInput);
