let humanDisplay = document.getElementById("humanDisplay");
let computerDisplay = document.getElementById("computerDisplay");
let resultDisplay = document.getElementById("resultDisplay");

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    return computerChoice;
}

function getHumanChoice(humanChoice) {
    return humanChoice;
}

function playRound(humanChoice, computerChoice) {
    let result = "";
    if (humanChoice === computerChoice) {
        result = "IT'S A TIE!";
    }
    else {
        switch (humanChoice) {
            case "rock":
                result = (computerChoice === "scissors") ? "You win! Rock beats Scissors" : "You lose! Paper beats Rock";
                break;
            case "paper":
                result = (computerChoice === "rock") ? "You win! Paper beats Rock" : "You lose! Scissors beats Paper";
                break;
            case "scissors":
                result = (computerChoice === "paper") ? "You win! Scissors beats Paper" : "You lose! Rock beats Scissors";
                break;
        }
    }

    humanDisplay.textContent = `Human: ${humanChoice}`;
    computerDisplay.textContent = `Computer: ${computerChoice}`;
    resultDisplay.textContent = result;

    resultDisplay.classList.remove("greenText", "redText", "yellowText");

    if (result === "You win! Rock beats Scissors" || result === "You win! Paper beats Rock" || result === "You win! Scissors beats Paper") {
        resultDisplay.classList.add("greenText");
    }
    else if (result === "You lose! Paper beats Rock" || result === "You lose! Scissors beats Paper" || result === "You lose! Rock beats Scissors") {
        resultDisplay.classList.add("redText");
    }
    else if (result === "IT'S A TIE!") {
        resultDisplay.classList.add("yellowText");
    }
}

function handleButtonClick(humanChoice) {
    const humanSelection = getHumanChoice(humanChoice);
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
}