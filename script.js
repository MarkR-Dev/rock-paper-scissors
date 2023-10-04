"use strict"

const buttons = document.querySelectorAll("button");
const resultsDiv = document.querySelector("#results");
const scoreDiv = document.querySelector("#score");
const playerScoreDom = document.querySelector("#player-score");
const computerScoreDom = document.querySelector("#computer-score");
let playerScore = 0;
let computerScore = 0;

buttons.forEach(btn => {
    btn.addEventListener("click", playRound);
})

function getComputerChoice(){
    let randomChoice = Math.floor((Math.random() * 3));
    let choices = ["Rock", "Paper", "Scissors"];
    return choices[randomChoice];
}

function displayScore(){
    playerScoreDom.textContent = playerScore;
    computerScoreDom.textContent = computerScore;
}

function displayWinner(){
    if(playerScore === 5){
        resultsDiv.textContent = "CONGRATULATIONS! You won the game!";
    }else {
        resultsDiv.textContent = "Sorry you lost the game.";
    }

    buttons.forEach(btn => {
        btn.removeEventListener("click", playRound);
    })
}

function playRound(event){
    let computerSelection = getComputerChoice();
    let playerSelection = event.target.id;
    
    if(playerSelection === computerSelection){
        resultsDiv.textContent = "It's a tie this round!";
    }else if((playerSelection === "Rock" && computerSelection === "Scissors") || (playerSelection === "Paper" && computerSelection === "Rock") || (playerSelection === "Scissors" && computerSelection === "Paper")){
        resultsDiv.textContent = `You won the round! ${playerSelection} beats ${computerSelection}`;
        playerScore++;
    }else{
        resultsDiv.textContent = `You lost the round! ${playerSelection} loses to ${computerSelection}`;
        computerScore++;
    }

    displayScore();

    if(playerScore === 5 || computerScore === 5){
        displayWinner();
    }
    
}









