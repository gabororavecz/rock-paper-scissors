function getComputerChoice() {   // This will automatically gives the computer choice by an if statement
    let randomNumber = Math.random();
    
    if (randomNumber < 1 / 3) {
        return "rock";
    } else if (randomNumber < 2 / 3) {
        return "paper";
    } else {
        return "scissors";
    }
} 

console.log(getComputerChoice()); // This will randomly log "rock", "paper", or "scissors"


function getHumanChoice() {

let choice = prompt("Please choose rock, paper or scissors.")
return choice;
}

console.log(getHumanChoice()); // This will randomly log "rock", "paper", or "scissors"

let humanScore = 0;

let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    
    if (computerChoice == rock && humanChoice == paper) {
        humanScore++;
    }
    else if (computerChoice == rock && humanChoice == scissors) {
    computerScore++;
    }
    else if (computerChoice == paper && humanChoice == rock) {
        computerScore++;
    }
    else if (computerChoice == paper && humanChoice == scissors) {
        humanScore++;
    }
    else if (computerChoice == scissors && humanChoice == paper) {
            computerScore++;
    }
    else if (computerChoice == scissors && humanChoice == scissors) {
        computerScore++;
    }
    else if (computerChoice == scissors && humanChoice == rock) {
        humanScore++;
    }
    else if (computerChoice == paper && humanChoice == paper) {
        computerScore++;
    }
    else (computerChoice == rock && humanChoice == rock) {
        return 
    }
}

const humanSelection = getHumanChoice();
const computerChoice = getComputerChoice();

playRound(humanSelection, computerChoice);