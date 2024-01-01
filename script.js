let userCounter = 0;
let computerCounter = 0;

const container = document.querySelector(".container");

const title = document.createElement("h1");
title.textContent = "Rock Paper Scissors";

const result = document.createElement("p");
result.setAttribute("id", "result");
result.textContent = "Click on rock, paper, or scissors to begin.";

const selection = document.createElement("div");
selection.setAttribute("class", "selection");

const btnRock = document.createElement("button");
btnRock.textContent = "Rock";
btnRock.setAttribute("id", "rock");

const btnPaper = document.createElement("button");
btnPaper.textContent = "Paper";
btnPaper.setAttribute("id", "paper");

const btnScissors = document.createElement("button");
btnScissors.textContent = "Scissors";
btnScissors.setAttribute("id", "scissors");

const btnReset = document.createElement("button");
btnReset.textContent = "Reset";
btnReset.setAttribute("id", "reset");
btnReset.addEventListener("click", () => window.location.reload());

const scores = document.createElement("div");
scores.setAttribute("class", "result");

const userScore = document.createElement("p");
userScore.textContent = "Human";
userScore.setAttribute("id", "userScore");

const computerScore = document.createElement("p");
computerScore.textContent = "Computer";
computerScore.setAttribute("id", "computerScore");

selection.append(btnRock, btnPaper, btnScissors, btnReset);
scores.append(userScore, computerScore);
container.append(title, result, selection, scores);

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

function playRound(playerSelection, computerSelection) {
    let selection = playerSelection.toLowerCase();
    if (selection === computerSelection) {
        result.textContent = "Tie!";
    } else if (selection === "rock" && computerSelection === "paper") {
        result.textContent = "Oops! Computer beats you with paper.";
        computerCounter++;
    } else if (selection === "rock" && computerSelection === "scissors") {
        result.textContent = "Awesome! You beat computer with rock.";
        userCounter++;
    } else if (selection === "paper" && computerSelection === "scissors") {
        result.textContent = "Oops! Computer beats you with scissors.";
        computerCounter++;
    } else if (selection === "paper" && computerSelection === "rock") {
        result.textContent = "Awesome! You beat computer with paper.";
        userCounter++;
    } else if (selection === "scissors" && computerSelection === "rock") {
        result.textContent = "Oops! Computer beats you with rock.";
        computerCounter++;
    } else if (selection === "scissors" && computerSelection === "paper") {
        result.textContent = "Awesome! You beat computer with scissors.";
        userCounter++;
    }

    if (userCounter < 5) {
        userScore.textContent = userCounter;
    } else {
        userScore.textContent = "Winner";
        result.textContent = "You win the game!";
        btnRock.disabled = true;
        btnPaper.disabled = true;
        btnScissors.disabled = true;
    }
    
    if (computerCounter < 5) {
        computerScore.textContent = computerCounter;
    } else {
        computerScore.textContent = "Winner";
        result.textContent = "Oh no! You lost the game.";
        btnRock.disabled = true;
        btnPaper.disabled = true;
        btnScissors.disabled = true;
    }
    
}

function game(playerSelection) {
    return playRound(playerSelection, getComputerChoice());
}

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