let playerScore = Number(0);
let computerScore = Number(0);

function game() {
 
    for (let roundNumber = 1; roundNumber < 6; roundNumber++) {
        let computerSelection = getComputerSelection(Math.random());
        let playerSelection = prompt("Enter Rock, Paper or Scissors.");
        let whoWon = playRound(playerSelection, computerSelection);
        alert("Player Chose: " + playerSelection + "\n" + "Computer Chose: " + computerSelection + "\n" + "The Winner is the " + whoWon + "!");
        alert("Current score! \n\nRound: " + roundNumber + "\n\n Player: " + playerScore + "\n Computer:" + computerScore);
    }
    
    if (playerScore > computerScore) {
        alert("The final winner is the Player with a score of " + playerScore + " to " + computerScore); 
    } else if (computerScore > playerScore) {
        alert("The final winner is the Computer with a score of " + computerScore + " to " + playerScore);
    } else {
        alert("Tie game!");
    }
}

function getComputerSelection(randomInput) {
    if (randomInput < 1/3) {
        return ("Rock");
    } else if ( randomInput > 2/3) {
        return ("Paper");
    } else {
        return ("Scissors")
    }
}

function playRound(playerSelection, computerSelection) {

    if (playerSelection === "Rock") {
        if (computerSelection === "Rock") {
            return ("Tie");
        } else if (computerSelection === "Paper") {
            computerScore += 1;
            return ("Computer");
        } else if (computerSelection === "Scissors") {
            playerScore += 1;
            return ("Player");
        }
    } else if (playerSelection === "Paper") {
        if (computerSelection === "Rock") {
            playerScore += 1;
            return ("Player");
        } else if (computerSelection === "Paper") {
            return ("Tie");
        } else if (computerSelection === "Scissors") {
            computerScore += 1;
            return ("Computer");
        }
    } else if (playerSelection === "Scissors") {
        if (computerSelection === "Rock") {
            computerScore += 1;
            return ("Computer");
        } else if (computerSelection === "Paper") {
            playerScore += 1;
            return ("Player");
        } else if (computerSelection === "Scissors") {
            return ("Tie");
        }
    } else {
        computerScore += 1;
        return ("Computer");
    }
}