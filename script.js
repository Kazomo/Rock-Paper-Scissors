//random number between 0 and max
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

let tieCounter = 0;
let playerScore = 0;
let computerScore = 0;
let message;
function playRound(playerSelection, computerSelection) {
  playerSelection = prompt("Enter your choice: ").toLowerCase();
  computerSelection = computerPlay();

  if (
    playerSelection === "rock" ||
    playerSelection === "paper" ||
    playerSelection === "scissors"
  ) {
    return playerSelection;
  } else {
    message = "Please select one of these optios:\n Rock, Paper, Scissors";
  }

  switch (playerSelection) {
    case computerSelection:
      message = "tie";
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
function game() {
  let output;
  playRound();
  output = `${message}. Player Score=${playerScore} Computer Score=${computerScore} Tie=${tieCounter}`;
  console.log(output);
  playRound();
  output = `${message}. Player Score=${playerScore} Computer Score=${computerScore} Tie=${tieCounter}`;
  console.log(output);
  playRound();
  output = `${message}. Player Score=${playerScore} Computer Score=${computerScore} Tie=${tieCounter}`;
  console.log(output);
  playRound();
  output = `${message}. Player Score=${playerScore} Computer Score=${computerScore} Tie=${tieCounter}`;
  console.log(output);
  playRound();
  output = `${message}. Player Score=${playerScore} Computer Score=${computerScore} Tie=${tieCounter}`;
  console.log(output);
}
game();
