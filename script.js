let humanDisplay = document.getElementById("humanDisplay");
let computerDisplay = document.getElementById("computerDisplay");
let resultDisplay = document.getElementById("resultDisplay");
let humanScoreDisplay = document.getElementById("humanScoreDisplay");
let computerScoreDisplay = document.getElementById("computerScoreDisplay");

let humanScore = 0;
let computerScore = 0;


function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
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
            case "Rock":
                result = (computerChoice === "Scissors") ? "You win! Rock beats Scissors" : "You lose! Paper beats Rock";
                break;
            case "Paper":
                result = (computerChoice === "Rock") ? "You win! Paper beats Rock" : "You lose! Scissors beats Paper";
                break;
            case "Scissors":
                result = (computerChoice === "Paper") ? "You win! Scissors beats Paper" : "You lose! Rock beats Scissors";
                break;
        }
    }

    humanDisplay.textContent = `Human: ${humanChoice}`;
    computerDisplay.textContent = `Computer: ${computerChoice}`;
    resultDisplay.textContent = result;

    resultDisplay.classList.remove("greenText", "redText", "yellowText");

    if (result === "You win! Rock beats Scissors" || result === "You win! Paper beats Rock" || result === "You win! Scissors beats Paper") {
        resultDisplay.classList.add("greenText");
        humanScore++;
        humanScoreDisplay.textContent = humanScore;
    }
    else if (result === "You lose! Paper beats Rock" || result === "You lose! Scissors beats Paper" || result === "You lose! Rock beats Scissors") {
        resultDisplay.classList.add("redText");
        computerScore++;
        computerScoreDisplay.textContent = computerScore;
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