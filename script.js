//random number function to choose between rock paper scissors
function computerPlay() {
  let randomNumber = Math.floor(Math.random() * Math.floor(3));
  switch (randomNumber) {
    case 0:
      return "rock";
      break;
    case 1:
      return "paper";
      break;
    case 2:
      return "scissors";
      break;
  }
}
//score variables
let tieCounter = 0;
let playerScore = 0;
let computerScore = 0;
let message;

//play function
function playRound(playerSelection, computerSelection) {
  playerSelection = prompt("Rock, Paper or Scissors? ").toLowerCase();

  //check the entered value to see it's correct
  if (
    playerSelection === "rock" ||
    playerSelection === "paper" ||
    playerSelection === "scissors"
  ) {
    playerSelection = playerSelection;
  } else {
    message = "Please select one of these optios:\nRock, Paper, Scissors";
  }
  computerSelection = computerPlay();
  //the main conditional of the game
  switch (playerSelection) {
    case computerSelection:
      message = "The game is a tie";
      return tieCounter++;
      break;
    case "rock":
      switch (computerSelection) {
        case "paper":
          message = "You Lose! Paper beats Rock";
          return computerScore++;
          break;
        case "scissors":
          message = "You Win! Rock beats Scissors";
          return playerScore++;
          break;
      }
    case "paper":
      switch (computerSelection) {
        case "rock":
          message = "You Win! Paper beats Rock";
          return playerScore++;
          break;
        case "scissors":
          return (message = "You Lose! Scissors beats Paper");
          computerScore++;
          break;
      }
    case "scissors":
      switch (computerSelection) {
        case "rock":
          message = "You Lose! Rock beats Scissors";
          return computerScore++;
          break;
        case "paper":
          message = "You Win! Scissors beats Paper";
          return playerScore++;
          break;
      }
  }
}
//using the playRound function to play a 5 round game and show the result
function game() {
  let output;
  playRound();
  output = `${message}\nPlayerScore=${playerScore} ComputerScore=${computerScore} Tie=${tieCounter}`;
  console.log(output);
  playRound();
  output = `${message}\nPlayerScore=${playerScore} ComputerScore=${computerScore} Tie=${tieCounter}`;
  console.log(output);
  playRound();
  output = `${message}\nPlayerScore=${playerScore} ComputerScore=${computerScore} Tie=${tieCounter}`;
  console.log(output);
  playRound();
  output = `${message}\nPlayerScore=${playerScore} ComputerScore=${computerScore} Tie=${tieCounter}`;
  console.log(output);
  playRound();
  output = `${message}\nPlayerScore=${playerScore} ComputerScore=${computerScore} Tie=${tieCounter}`;
  console.log(output);
  if (playerScore > computerScore) {
    console.log("congratulation, you win!");
  } else if (computerScore > playerScore) {
    console.log("Sorry, you have Lost!");
  } else {
    console.log("It's a tie");
  }
}
game();
