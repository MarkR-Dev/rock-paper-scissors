"use strict"

const buttons = document.querySelectorAll(".choice");
const resultsDiv = document.querySelector("#results");
const playerScoreDom = document.querySelector("#player-score");
const computerScoreDom = document.querySelector("#computer-score");
const resetButton = document.querySelector("#reset");
let playerScore = 0;
let computerScore = 0;

resetButton.addEventListener("click", resetGame);

function addListeners(){
    buttons.forEach(button => {
        button.addEventListener("click", playRound);
    });
}

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
        playerScoreDom.style.color = "green";
        computerScoreDom.style.color = "#e62b2b";
    }else {
        resultsDiv.textContent = "Sorry you lost the game.";
        playerScoreDom.style.color = "#e62b2b";
        computerScoreDom.style.color = "green";
    }

    buttons.forEach(button => {
        button.removeEventListener("click", playRound);
    })
}

function resetGame(){
    playerScore = 0;
    computerScore = 0;
    displayScore();
    playerScoreDom.style.color = "white";
    computerScoreDom.style.color = "white";
    resultsDiv.textContent = "Choose an option";
    addListeners();
}

function playRound(event){
    let computerSelection = getComputerChoice();
    let playerSelection = event.target.id;
    
    if(playerSelection === computerSelection){
        resultsDiv.textContent = "It's a tie this round!";
    }else if((playerSelection === "Rock" && computerSelection === "Scissors") || (playerSelection === "Paper" && computerSelection === "Rock") || (playerSelection === "Scissors" && computerSelection === "Paper")){
        resultsDiv.textContent = `You won the round! ${playerSelection} beats ${computerSelection}!`;
        playerScore++;
    }else{
        resultsDiv.textContent = `You lost the round! ${playerSelection} loses to ${computerSelection}.`;
        computerScore++;
    }

    displayScore();

    if(playerScore === 5 || computerScore === 5){
        displayWinner();
    }
}

addListeners();







