// https://www.javatpoint.com/how-to-pick-random-elements-from-an-array
function getComputerChoice() {
    const choice = ["rock", "paper", "scissors"];
    return choice[Math.floor(Math.random() * choice.length)];
}

function playRound(playerSelection, computerSelection) {
    let selection = playerSelection.toLowerCase();
    if (selection === computerSelection) {
        result.textContent = "Ooh, it's a tie!";
    } else if (selection === "rock" && computerSelection === "paper") {
        result.textContent = "You lose! Paper beats rock.";
    } else if (selection === "rock" && computerSelection === "scissors") {
        result.textContent = "You win! Rock beats scissor.";
    } else if (selection === "paper" && computerSelection === "scissors") {
        result.textContent = "You lose! Scissors beats paper.";
    } else if (selection === "paper" && computerSelection === "rock") {
        result.textContent = "You win! Paper beats rock.";
    } else if (selection === "scissors" && computerSelection === "rock") {
        result.textContent = "You lose! Rock beats scissors.";
    } else if (selection === "scissors" && computerSelection === "paper") {
        result.textContent = "You win! Scissors beats paper."
    } else {
        result.textContent = "Please type any of these choices: rock, paper, or scissors.";
    }
}

function game(playerSelection) {
    return playRound(playerSelection, getComputerChoice());
}

const selection = document.querySelector(".selection");
const btnRock = document.querySelector("#rock");
const btnPaper = document.querySelector("#paper");
const btnScissors = document.querySelector("#scissors");

const humanScore = document.querySelector("#humanScore");
const computerScore = document.querySelector("#computerScore");
const result = document.querySelector("#result");

humanScore.textContent = "";
computerScore.textContent = "";

btnRock.textContent = "Rock";
btnPaper.textContent = "Paper";
btnScissors.textContent = "Scissors";

selection.addEventListener("click", (event) => {
    let target = event.target;
    switch (target.id) {
        case "rock":
            game(btnRock.textContent);
            break;
        case "paper":
            game(btnPaper.textContent);
            break;
        case "scissors":
            game(btnScissors.textContent);
            break;
    }
});