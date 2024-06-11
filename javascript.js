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

function playRound(computerChoice, humanChoice) {
    if ((computerChoice == "rock" && humanChoice =="scissors") || (computerChoice == "paper" && humanChoice =="rock") || (computerChoice == "scissors" && humanChoice =="paper")) {
        console.log("You lost!");
        humanScore += 1;
    } else if ((humanChoice == "rock" && computerChoice =="scissors") || (humanChoice == "paper" && computerChoice =="rock") || (humanChoice == "scissors" && computerChoice =="paper")) {
        console.log("You won!");
        computerScore += 1;
    } else {
        console.log("You tied!");
    }
}

function playGame() {
    let i = 0;
    while (i<5) {
        playRound(getComputerChoice(), getHumanChoice());
        i += 1;
    }
    if (humanScore > computerScore) {
        console.log(`You beat the computer, ${humanScore} to ${computerScore}!!!`);
    } else if (humanScore < computerScore) {
        console.log(`You lost to the computer, ${humanScore} to ${computerScore}!!!`);
    } else {
        console.log(`You tied the computer, ${humanScore} to ${computerScore}!!!`);
    }
}

playGame()