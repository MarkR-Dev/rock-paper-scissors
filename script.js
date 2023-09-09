"use strict"

function getComputerChoice(){
    let randomNum = Math.floor((Math.random() * 3) + 1);
    let computerChoice = "";
    
    if(randomNum === 1){
        computerChoice = "rock";
    }else if(randomNum === 2){
        computerChoice = "paper";
    }else{
        computerChoice = "scissors";
    }
    
    return computerChoice;
}

function getPlayerChoice(){
    let playerChoice = prompt("Choose Rock, Paper or Scissors...");
    playerChoice = playerChoice.toLowerCase();
    
    return playerChoice;
}

function playRound(playerSelection, computerSelection){

    let roundResult = "";

    if(playerSelection === computerSelection){
        roundResult = "It's a tie!";
    }else if((playerSelection === "rock" && computerSelection === "scissors") || (playerSelection === "paper" && computerSelection === "rock") || (playerSelection === "scissors" && computerSelection === "paper")){
       roundResult = `You win! ${playerSelection} beats ${computerSelection}`;
    }else{
        roundResult = `You lose! ${playerSelection} loses to ${computerSelection}`;
    }

    return roundResult;
}

let playerSelection = getPlayerChoice();
let computerSelection = getComputerChoice();

console.log(playRound(playerSelection, computerSelection));