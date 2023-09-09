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

getComputerChoice();