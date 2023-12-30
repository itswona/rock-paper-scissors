// https://www.javatpoint.com/how-to-pick-random-elements-from-an-array
function getComputerChoice() {
    const choice = ["rock", "paper", "scissors"];
    for (let i = 0; i < choice.length; i++) {
        shuffle(choice);
        return choice[i];
    }
}

function shuffle (array) {
    for(let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

let userCounter = 0;
let computerCounter = 0;

function playRound(playerSelection, computerSelection) {
    let selection = playerSelection.toLowerCase();
    if (selection === computerSelection) {
        result.textContent = "Ooh, it's a tie!";
    } else if (selection === "rock" && computerSelection === "paper") {
        result.textContent = "You lose! Paper beats rock.";
        computerCounter++;
    } else if (selection === "rock" && computerSelection === "scissors") {
        result.textContent = "You win! Rock beats scissor.";
        userCounter++;
    } else if (selection === "paper" && computerSelection === "scissors") {
        result.textContent = "You lose! Scissors beats paper.";
        computerCounter++;
    } else if (selection === "paper" && computerSelection === "rock") {
        result.textContent = "You win! Paper beats rock.";
        userCounter++;
    } else if (selection === "scissors" && computerSelection === "rock") {
        result.textContent = "You lose! Rock beats scissors.";
        computerCounter++;
    } else if (selection === "scissors" && computerSelection === "paper") {
        result.textContent = "You win! Scissors beats paper.";
        userCounter++;
    } else {
        result.textContent = "Choices must be rock, paper, or scissors.";
    }

    if (userCounter < 5) {
        userScore.textContent = userCounter;
    } else {
        userScore.textContent = "You win the game! Congratulations! Reload the webpage to try again.";
        btnRock.disabled = true;
        btnPaper.disabled = true;
        btnScissors.disabled = true;
    }
    
    if (computerCounter < 5) {
        computerScore.textContent = computerCounter;
    } else {
        computerScore.textContent = "Computer wins the game! Better luck next time! Reload the webpage to try again.";
        btnRock.disabled = true;
        btnPaper.disabled = true;
        btnScissors.disabled = true;
    }
    
}

function game(playerSelection) {
    return playRound(playerSelection, getComputerChoice());
}

const selection = document.querySelector(".selection");
const btnRock = document.querySelector("#rock");
const btnPaper = document.querySelector("#paper");
const btnScissors = document.querySelector("#scissors");

const userScore = document.querySelector("#userScore");
const computerScore = document.querySelector("#computerScore");
const result = document.querySelector("#result");

userScore.textContent = userCounter;
computerScore.textContent = computerCounter;

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