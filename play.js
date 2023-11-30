//Rounds need to be adjusted in gameRounds() as well if changed
let rounds = 5;
let playerWins = 0;
let computerWins = 0;
let paperButton = document.createElement("button");
let scissorButton = document.createElement("button");
let rockButton = document.createElement("button");
let container = document.createElement("div");
let resultContainer = document.createElement("div");
let finalResult = document.createElement("div");

paperButton.textContent = "Paper";
scissorButton.textContent = "Scissors";
rockButton.textContent = "Rock";

function getComputerChoice() {
  let computerPick = ["rock", "paper", "scissors"];
  return computerPick[Math.floor(Math.random() * 3)];
}

function playGame(playerSelection, computerSelection) {
  gameRounds();
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

(function game() {
  paperButton.addEventListener("click", () => {
    resultContainer.textContent = playGame("paper", getComputerChoice());
  });
  rockButton.addEventListener("click", () => {
    resultContainer.textContent = playGame("rock", getComputerChoice());
  });
  scissorButton.addEventListener("click", () => {
    resultContainer.textContent = playGame("scissors", getComputerChoice());
  });
})();

function gameRounds() {
  rounds--;
  if (rounds !== 0) {
    finalResult.textContent = "";
  } else if (rounds === 0 && playerWins > computerWins) {
    finalResult.textContent = "Player wins the game";
    rounds = 5;
  } else if (rounds === 0 && computerWins > playerWins) {
    finalResult.textContent = "Computer wins the game";
    rounds = 5;
  }
}

//CSS styling
[paperButton, rockButton, scissorButton].forEach((el) =>
  el.classList.add("button")
);

[paperButton, rockButton, scissorButton].forEach((el) =>
  el.setAttribute(
    "style",
    "color: white; background: blue; font-size: 5em; font-weight: bold; border-radius: 10px; padding: 0 20px"
  )
);

container.setAttribute(
  "style",
  "display: flex; justify-content: center; gap: 20px; margin-top: 30px"
);

resultContainer.setAttribute(
  "style",
  "display: flex; justify-content: center; font-size: 3em; color: purple; margin-top: 30px"
);

finalResult.setAttribute(
  "style",
  "display: flex; justify-content: center; font-size: 4em; color: white; background: linear-gradient(45deg, green, blue); border-radius: 20px; margin-top: 20px"
);

document.body.appendChild(container);
document.body.appendChild(resultContainer);
document.body.appendChild(finalResult);
container.appendChild(paperButton);
container.appendChild(rockButton);
container.appendChild(scissorButton);
