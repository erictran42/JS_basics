const container = document.querySelector(".container");

function getComputerChoice() {
    let randomizer = Math.random();
    if (randomizer < 0.33) {
        return "rock";
    } else if (randomizer > 0.67) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    let choice = null;
    while (!((choice == "rock") || (choice == "paper") || (choice == "scissors"))) {
        choice = prompt("Enter choice: rock, paper, or scissors");
        choice = choice.toLowerCase();
    }
    return choice;
}

let humanScore = 0;
let computerScore = 0;

function playGame() {
    const matchResult = document.createElement("div");
    if (humanScore == 5) {
        matchResult.textContent = "You won the entire match!!!";
        humanScore = 0;
        computerScore = 0;
    } else if (computerScore == 5) {
        matchResult.textContent = "The computer won the entire match!!!";
        humanScore = 0;
        computerScore = 0;
    }
    container.appendChild(matchResult);

}

function playRound(computerChoice, humanChoice) {
    const result = document.createElement("div");
    if ((computerChoice == "rock" && humanChoice == "scissors") || (computerChoice == "paper" && humanChoice == "rock") || (computerChoice == "scissors" && humanChoice == "paper")) {
        computerScore += 1;
        result.textContent = `You lost! Score is ${humanScore} to ${computerScore}`;
    } else if ((humanChoice == "rock" && computerChoice == "scissors") || (humanChoice == "paper" && computerChoice == "rock") || (humanChoice == "scissors" && computerChoice == "paper")) {
        humanScore += 1;
        result.textContent = `You won! Score is ${humanScore} to ${computerScore}`;
    } else {
        result.textContent = `You tied! Score is ${humanScore} to ${computerScore}`;;
    }
    container.appendChild(result);
    playGame();
}

const rockPlayer = document.querySelector(".rock");
rockPlayer.addEventListener("click", () => {
    playRound(getComputerChoice(), "rock");
});

const paperPlayer = document.querySelector(".paper");
paperPlayer.addEventListener("click", () => {
    playRound(getComputerChoice(), "paper");
});

const scissorsPlayer = document.querySelector(".scissors");
scissorsPlayer.addEventListener("click", () => {
    playRound(getComputerChoice(), "scissors");
});
