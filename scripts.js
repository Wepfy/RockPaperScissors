// For keeping track of score
let humanScore = 0;
let computerScore = 0;


// Function to get random choice from pc
function getComputerChoice() {
    const number = Math.floor(Math.random() * 3);

    switch (number) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";

    }
}

// Plays a round of rock paper scissors and updates score
function playRound(humanChoice, computerChoice) {
    const resultDiv = document.querySelector("#result");
    const scoreDiv = document.querySelector("#score");
    const winnerDiv = document.querySelector("#winner")

    if (humanChoice === computerChoice) {
        resultDiv.textContent = "It's a tie both chose " + humanChoice;
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        resultDiv.textContent = "You win! " + humanChoice + " beats " + computerChoice;
        humanScore++;
    } else {
        resultDiv.textContent = "You lose! " + computerChoice + " beats " + humanChoice;
        computerScore++;
    }

    scoreDiv.textContent = "Your score is: " + humanScore + " Computer score is: " + computerScore;

    if (humanScore === 5) {
        winnerDiv.textContent = "Congratulations! You are the winner!";
        setTimeout(resetGame, 3000);

    } else if (computerScore === 5) {
        winnerDiv.textContent = "The computer wins! Better luck next time!";
        setTimeout(resetGame, 3000);
    }
}

// resets scores and texts 
function resetGame() {
    humanScore = 0;
    computerScore = 0;

    document.querySelector("#score").textContent = "";
    document.querySelector("#result").textContent = "";
    document.querySelector("#winner").textContent = "";
}

document.querySelector("#rock").addEventListener("click", (e) => {
    const humanSelection = "rock";
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
});
document.querySelector("#paper").addEventListener("click", (e) => {
    const humanSelection = "paper";
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
});
document.querySelector("#scissors").addEventListener("click", (e) => {
    const humanSelection = "scissors";
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
});
