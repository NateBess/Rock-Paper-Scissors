
const playerScoreTag = document.querySelector('#player-score');
const computerScoreTag = document.querySelector('#computer-score');
const resultText = document.querySelector('#result-text-container');
const newGame = document.querySelector('#new-game-button');

playerScore = 0;
computerScore = 0;
resultText.textContent = '';
updateScore();


/* DOM Manipulatin Below Here */

function updateScore() {
    playerScoreTag.textContent = playerScore;
    computerScoreTag.textContent = computerScore;
}






/* Game Functions Below Here */

function resetScore() {
    playerScore = 0;
    computerScore = 0;
    resultText.textContent = '';
    updateScore();
}

function computerPlay() {
    randomNumber = Math.floor(Math.random()*3);
    if (randomNumber === 0) {return 'rock';}
    else if (randomNumber === 1) {return 'paper';}
    else if (randomNumber === 2) {return 'scissors';}
    else {console.log("Error Occurred! Try Again!");}
}

function playRound(playerSelection, computerSelection) {
    let whoWon = null;
    if (playerSelection === computerSelection) {
        //console.log("There was a Tie!");
        return
    }
    else if (playerSelection !== computerSelection) {
        if (playerSelection === 'paper' && computerSelection === 'rock') {whoWon = true;}
        else if (computerSelection === 'paper' && playerSelection === 'rock') {whoWon = false;}

        if (playerSelection === 'rock' && computerSelection === 'scissors') {whoWon = true;}
        else if (computerSelection === 'rock' && playerSelection === 'scissors') {whoWon = false;}

        if (playerSelection === 'scissors' && computerSelection === 'paper') {whoWon = true;}
        else if (computerSelection === 'scissors' && playerSelection === 'paper') {whoWon = false;}
    }
    return whoWon;
  }

function playGame(weapon) {
    let playerSelection = weapon;
    let computerSelection = computerPlay();
    playerIsWinner = playRound(playerSelection, computerSelection);
    if (playerScore >= 3) {resultText.textContent = 'Player Won The Game!'; return;}
    else if (computerScore >= 3) {resultText.textContent = 'Player Won The Game!'; return;}
    else if (playerIsWinner === true) { playerScore += 1; resultText.textContent = 'Player Won!';}
    else if (playerIsWinner === false) { computerScore += 1; resultText.textContent = 'Computer Won!';}
    else {resultText.textContent = 'It Was A Tie!'; return}
    console.log(`\nPlayer Score: ${playerScore}\nComputer Score: ${computerScore} \n`);
    updateScore()
}

function chooseRock() {
    let weapon = 'rock';
    playGame(weapon);
}

function choosePaper() {
    let weapon = 'paper';
    playGame(weapon);
}

function chooseScissors() {
    let weapon = 'scissors';
    playGame(weapon);
}


