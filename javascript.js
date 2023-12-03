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
function playRound(playerSelection, computerSelection) {
  let winner;
  if (
    (playerSelection === "rock" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "rock")
  ) {
    winner = "computer";
    console.log("Computer is the winner");
  } else if (
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper") ||
    (playerSelection === "rock" && computerSelection === "scissors")
  ) {
    winner = "player";
    console.log("You are the winner");
  } else {
    winner = "tie";
    console.log("It's a tie");
  }
  return winner;
}

function game() {
  let yourScore = 0;
  let computerScore = 0;
  for (i = 0; i < 5; i++) {
    let playerInput = prompt(
      "Please enter one: 'rock', 'paper' or 'scissors': "
    );
    playerInput = playerInput.toLowerCase();
    let computerInput = getComputerChoice();
    let winner = playRound(playerInput, computerInput);
    if (winner === "player") {
      yourScore += 1;
      console.log(
        `Your score: ${yourScore}  Computer Score: ${computerScore} `
      );
    } else if (winner === "computer") {
      computerScore += 1;
      console.log(
        `Your score: ${yourScore}  Computer Score: ${computerScore} `
      );
    } else {
      yourScore += 0;
      computerScore += 0;
      console.log(
        `Your score: ${yourScore}  Computer Score: ${computerScore} `
      );
    }
  }
  if (yourScore > computerScore) {
    console.log("Yon Won!");
  } else if (yourScore < computerScore) {
    console.log("You lost!");
  } else {
    console.log("It's a tie!");
  }
  return;
}

game();
