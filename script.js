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
function playRound(playerSelection, computerSelection) {
  playerSelection = prompt("Enter your choice: ").toLowerCase();
  computerSelection = computerPlay();

  switch (playerSelection) {
    case computerSelection:
      return "tie", tieCounter++;
      break;
    case "rock":
      switch (computerSelection) {
        case "paper":
          return "You Lose! Paper beats Rock", computerScore++;
          break;
        case "scissors":
          return "You Win! Rock beats Scissors", playerScore++;
          break;
      }
    case "paper":
      switch (computerSelection) {
        case "rock":
          return "You Win! Paper beats Rock", playerScore++;
          break;
        case "scissors":
          return "You Lose! Scissors beats Paper", computerScore++;
          break;
      }
    case "scissors":
      switch (computerSelection) {
        case "rock":
          return "You Lose! Rock beats Scissors", computerScore++;
          break;
        case "paper":
          return "You Win! Scissors beats Paper", playerScore++;
          break;
      }
  }
}
function game() {
  playRound();
  console.log(tieCounter, playerScore, computerScore);
  playRound();
  console.log(tieCounter, playerScore, computerScore);
  playRound();
  console.log(tieCounter, playerScore, computerScore);
  playRound();
  console.log(tieCounter, playerScore, computerScore);
  playRound();
  console.log(tieCounter, playerScore, computerScore);
}
game();
