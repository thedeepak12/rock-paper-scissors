let humanDisplay = document.getElementById("humanDisplay");
let computerDisplay = document.getElementById("computerDisplay");
let resultDisplay = document.getElementById("resultDisplay");
let humanScoreDisplay = document.getElementById("humanScoreDisplay");
let computerScoreDisplay = document.getElementById("computerScoreDisplay");
let playAgainButton = document.getElementById("playAgainButton");

function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    return computerChoice;
}

function getHumanChoice(humanChoice) {
    return humanChoice;
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    let roundsPlayed = 0;

    if (playAgainButton) {
        playAgainButton.style.display = "none";
    }

    function playRound(humanChoice, computerChoice) {
        if (roundsPlayed >= 5) {
            return;
        }

        let result = "";
        if (humanChoice === computerChoice) {
            result = "IT'S A TIE!";
        } else {
            switch (humanChoice) {
                case "Rock":
                    result = computerChoice === "Scissors" ? "You win! Rock beats Scissors" : "You lose! Paper beats Rock";
                    break;
                case "Paper":
                    result = computerChoice === "Rock" ? "You win! Paper beats Rock" : "You lose! Scissors beats Paper";
                    break;
                case "Scissors":
                    result = computerChoice === "Paper" ? "You win! Scissors beats Paper" : "You lose! Rock beats Scissors";
                    break;
            }
        }

        humanDisplay.textContent = `Human: ${humanChoice}`;
        computerDisplay.textContent = `Computer: ${computerChoice}`;

        resultDisplay.classList.remove("greenText", "redText", "yellowText");
        resultDisplay.textContent = result;

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

        roundsPlayed++;

        if (roundsPlayed >= 5) {
            let finalResult = "";
            resultDisplay.classList.remove("greenText", "redText", "yellowText");
            if (humanScore > computerScore) {
                finalResult = `Game Over! You win! Play again?`;
                resultDisplay.classList.add("greenText");
            } else if (computerScore > humanScore) {
                finalResult = `Game Over! Computer wins! Play again?`;
                resultDisplay.classList.add("redText");
            } else {
                finalResult = `Game Over! It's a tie! Play again?`;
                resultDisplay.classList.add("yellowText");
            }
            resultDisplay.textContent = finalResult;

            if (playAgainButton) {
                playAgainButton.style.display = "inline-block";
            }
        }
    }

    return playRound;
}

let playRound = playGame();

function handleButtonClick(humanChoice) {
    const humanSelection = getHumanChoice(humanChoice);
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
}

function resetGame() {
    humanScoreDisplay.textContent = "0";
    computerScoreDisplay.textContent = "0";
    resultDisplay.textContent = "";
    resultDisplay.classList.remove("greenText", "redText", "yellowText");
    humanDisplay.textContent = "Human: ";
    computerDisplay.textContent = "Computer: ";

    if (playAgainButton) {
        playAgainButton.style.display = "none";
    }

    playRound = playGame();
}