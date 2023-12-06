// https://www.javatpoint.com/how-to-pick-random-elements-from-an-array
function getComputerChoice() {
    const choice = ["rock", "paper", "scissors"];
    return choice[Math.floor(Math.random() * choice.length)];
}
function playRound(playerSelection, computerSelection) {
    let selection = playerSelection.toLowerCase();
    if (selection === computerSelection) {
        return "Ooh, it's a tie!";
    } else if (selection === "rock" && computerSelection === "paper") {
        return "You lose! Paper beats rock.";
    } else if (selection === "rock" && computerSelection === "scissors") {
        return "You win! Rock beats scissor.";
    } else if (selection === "paper" && computerSelection === "scissors") {
        return "You lose! Scissors beats paper.";
    } else if (selection === "paper" && computerSelection === "rock") {
        return "You win! Paper beats rock.";
    } else if (selection === "scissors" && computerSelection === "rock") {
        return "You lose! Rock beats scissors.";
    } else if (selection === "scissors" && computerSelection === "paper") {
        return "You win! Scissors beats paper."
    } else {
        return "Please type any of these choices: rock, paper, or scissors.";
    }
}
function game(playerSelection) {
    // let playerSelection = prompt("Should you pick rock, paper, or scissors?");
    // for (let i = 0; i < 5; i++) {
        return playRound(playerSelection, getComputerChoice());
    // }
}

// next: add responses to overall results of the player
// 5 - whoa, perfect guess!
// 4 - you're amazing, great guess!
// 3 - that's good, keep it up!
// 2 - hang in there!
// 1 - oh, that's fine, you can try again :)

const selection = document.querySelector(".selection");
const btnRock = document.querySelector("#rock");
const btnPaper = document.querySelector("#paper");
const btnScissors = document.querySelector("#scissors");
const result = document.querySelector("#result");

btnRock.textContent = "Rock";
btnPaper.textContent = "Paper";
btnScissors.textContent = "Scissors";

selection.addEventListener("click", (event) => {
    let target = event.target;

    switch (target.id) {
        case "rock":
            result.textContent = game(btnRock.textContent);
            break;
        case "paper":
            result.textContent = game(btnPaper.textContent);
            break;
        case "scissors":
            result.textContent = game(btnScissors.textContent);
            break;
        default:
            result.textContent = "Undefined value";
            break;
    }
});