let playerWins = 0;
let computerWins = 0;
let paperButton = document.createElement("button");
let scissorButton = document.createElement("button");
let rockButton = document.createElement("button");
let container = document.createElement("div");

paperButton.textContent = "Paper";
scissorButton.textContent = "Scissors";
rockButton.textContent = "Rock";

function getComputerChoice() {
  let computerPick = ["rock", "paper", "scissors"];
  return computerPick[Math.floor(Math.random() * 3)];
}

/*
function getPlayerChoice(choice) {
  let playerPick = prompt("Pick either rock, paper or scissors", "");
  return playerPick.toLowerCase();
  return choice;
}
*/

function playGame(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "Draw! Nobody wins";
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    computerWins++;
    return "You Lose! Paper beats Rock";
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    playerWins++;
    return "You Win! Rock beats Scissors";
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    computerWins++;
    return "You Lose! Scissors beats Paper";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    playerWins++;
    return "You Win! Paper beats Rock";
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    computerWins++;
    return "You Lose! Rock beats Scissors";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    playerWins++;
    return "You Win! Scissors beats Paper";
  }
}

function game() {
  paperButton.addEventListener("click", () => {
    console.log(playGame("paper", getComputerChoice()));
  });
  rockButton.addEventListener("click", () => {
    console.log(playGame("rock", getComputerChoice()));
  });
  scissorButton.addEventListener("click", () => {
    console.log(playGame("scissors", getComputerChoice()));
  });
  //	for (let i=0; i < 5; i++) {
  //  console.log(playGame(getPlayerChoice(), getComputerChoice()));
  /*
} if (playerWins > computerWins) {
		console.log('Player wins the game');
	} else { console.log('Computer wins the game'); }
	*/
}

console.log(game());

document.body.appendChild(container);
container.appendChild(paperButton);
container.appendChild(rockButton);
container.appendChild(scissorButton);
