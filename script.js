"use strict"

/* 

function getPlayerChoice(){
    let playerChoice = prompt("Choose Rock, Paper or Scissors...");
    playerChoice = playerChoice.toLowerCase();
    
    return playerChoice;
}



function game(){
    
    for (let i = 1; i <= 5; i++){
        //let playerSelection = getPlayerChoice();
        let playerSelection = "rock";
        let computerSelection = getComputerChoice();

        console.log(playRound(playerSelection, computerSelection));
        
        console.log("Score:")
        console.log(`Player ${playerScore} - ${computerScore} Computer`);
        console.log("");
    }

    if(playerScore > computerScore){
        console.log("Congrats you won the game!");
    }else if (playerScore === computerScore){
        console.log("You tied the game.");
    }else {
        console.log("Sorry you lost the game.");
    }
}


let playerScore = 0;
let computerScore = 0;

game();
 */

const buttons = document.querySelectorAll("button");

buttons.forEach(btn => {
    btn.addEventListener("click", playRound);
})

function getComputerChoice(){
    let randomChoice = Math.floor((Math.random() * 3));
    let choices = ["rock", "paper", "scissors"];
    return choices[randomChoice];
}

function playRound(event){
    let computerSelection = getComputerChoice();
    let playerSelection = event.target.id;

    let roundResult = "";
    
    if(playerSelection === computerSelection){
        roundResult = "It's a tie this round!";
    }else if((playerSelection === "rock" && computerSelection === "scissors") || (playerSelection === "paper" && computerSelection === "rock") || (playerSelection === "scissors" && computerSelection === "paper")){
        roundResult = `You won the round! ${playerSelection} beats ${computerSelection}`;
        //playerScore++;
    }else{
        roundResult = `You lost the round! ${playerSelection} loses to ${computerSelection}`;
        //computerScore++;
    }

    console.log(roundResult)
    return roundResult;
}








