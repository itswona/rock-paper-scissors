console.log("hi :) i hope you're doing well");
console.log("to launch the game please enter: game()");
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
// function game() {
    // let playerSelection = prompt("Should you pick rock, paper, or scissors?");
    // for (let i = 0; i < 5; i++) {
        // console.log(playRound(playerSelection, getComputerChoice()));
    // }
// }

// next: add responses to overall results of the player
// 5 - whoa, perfect guess!
// 4 - you're amazing, great guess!
// 3 - that's good, keep it up!
// 2 - hang in there!
// 1 - oh, that's fine, you can try again :)

const selection = document.querySelector(".selection");

selection.addEventListener("click", (event) => {
    let target = event.target;

    switch (target.id) {
        case "rock":
            playRound("rock", getComputerChoice);
            break;
        case "paper":
            playRound("paper", getComputerChoice);
            break;
        case "scissors":
            playRound("scissors", getComputerChoice);
            break;
    }
});