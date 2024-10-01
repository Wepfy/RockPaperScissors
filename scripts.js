// For keeping track of score
let humanScore = 0;
let computerScore = 0;

playGame();



function playGame() {

    for (let i = 0; i < 5; i++) {

    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    }

    console.log("Final scores, You: " + humanScore + ", Computer: " + computerScore);
}


// Function to get random choice from pc
function getComputerChoice() {
    const number = Math.floor(Math.random() * 3);

    switch(number) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
        
    }
}

// Promps user for input
function getHumanChoice() {

    while(true){
    let name = prompt("Enter your choice: ");
    if (name != "scissors" && name != "rock" && name != "paper") {
        console.log("Invalid choice, please enter rock, paper or scissors.");
    } else {
        return name.toLowerCase();
    }
     
    }
    
}

// Plays a round of rock paper scissors and updates score
function playRound(humanChoice, computerChoice) {
    
    if (humanChoice === computerChoice) {
        console.log("It's a tie both chose " + humanChoice)
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") || 
        (humanChoice === "scissors" && computerChoice === "paper")
     ) {
        console.log("You win! " + humanChoice + " beats " + computerChoice);
        humanScore++;
     } else {
        console.log("You lose! " + computerChoice + " beats " + humanChoice)
        computerScore++;
     }

     console.log("Your score is: " + humanScore + " Computer score is: " + computerScore);
}
