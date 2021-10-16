/*  */
function computerPlay() {
    randomNumber = Math.floor(Math.random()*3);
    if (randomNumber === 0) {return 'rock';}
    else if (randomNumber === 1) {return 'paper';}
    else if (randomNumber === 2) {return 'scissors';}
    else {console.log("Error Occurred! Try Again!");}
}

/*  */
function playRound(playerSelection, computerSelection) {
    let whoWon = null;
    if (playerSelection === computerSelection) {
        console.log("There was a Tie!");
    }
    else if (playerSelection !== computerSelection) {
        if (playerSelection === 'paper' && computerSelection === 'rock') {
            console.log("Player Wins! Paper Beats Rock!");
            whoWon = true;
        }
        else if (computerSelection === 'paper' && playerSelection === 'rock') {
            console.log("Computer Wins! Paper Beats Rock!");
            whoWon = false;
        }

        if (playerSelection === 'rock' && computerSelection === 'scissors') {
            console.log("Player Wins! Rock Beats Scissors!");
            whoWon = true;
        }
        else if (computerSelection === 'rock' && playerSelection === 'scissors') {
            console.log("Computer Wins! Rock Beats Scissors!");
            whoWon = false;
        }

        if (playerSelection === 'scissors' && computerSelection === 'paper') {
            console.log("Player Wins! Scissors Beats Paper!");
            whoWon = true;
        }
        else if (computerSelection === 'scissors' && playerSelection === 'paper') {
            console.log("Computer Wins! Scissors Beats Paper!");
            whoWon = false;
        }
    }
    return whoWon;
  }

/*  */
function playGame() {
    let playerScore = 0;
    let computerScore = 0;

    while (true){
        let userInput = prompt("Enter 'rock, paper, or scissors");
        let playerSelection = userInput.toLowerCase();
        let computerSelection = computerPlay();
        whoWon = playRound(playerSelection, computerSelection);
        if (whoWon === true) {
            playerScore += 1;
        }
        else if (whoWon === false) {
            computerScore += 1;
        }
        console.log(`\nPlayer Score: ${playerScore}\nComputer Score: ${computerScore} \n`);

        if (playerScore >= 3) {
            console.log("\nPlayer WON THE GAME!!!!"); 
            break;
        }
        else if (computerScore >= 3) {
            console.log("\nComputer WON THE GAME!!!!"); 
            break;
        }
    }
}

// This will start the game...
playGame();


