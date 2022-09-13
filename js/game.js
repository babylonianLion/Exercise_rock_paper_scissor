function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }

function getComputerChoice(){
 let value = getRndInteger(1, 4);
 if (value == 1){
    return "Rock";
 }
 else if (value == 2){
    return "Paper";
 }
 else if (value == 3){
    return "Scissors";
 }
}

function playRound(playerSelection, computerSelection){
    let playerSelectionFixed = playerSelection.toLowerCase();
    playerSelectionFixed = playerSelectionFixed.charAt(0).toUpperCase() + playerSelectionFixed.slice(1);
    let win = "You win! " + playerSelectionFixed + " beats " + computerSelection;
    let lose = "You lose! " + computerSelection + " beats " + playerSelectionFixed;
    let draw = "It's a draw!";
    if(playerSelectionFixed == "Rock" && computerSelection == "Paper"){
        return lose;
    }
    else if(playerSelectionFixed == "Rock" && computerSelection == "Scissors"){
        return win;
    }
    else if(playerSelectionFixed == "Rock" && computerSelection == "Rock"){
        return draw;
    }
    else if(playerSelectionFixed == "Paper" && computerSelection == "Scissors"){
        return lose;
    }
    else if(playerSelectionFixed == "Paper" && computerSelection == "Rock"){
        return win;
    }
    else if(playerSelectionFixed == "Paper" && computerSelection == "Paper"){
        return draw;
    }
    else if(playerSelectionFixed == "Scissors" && computerSelection == "Scissors"){
        return draw;
    }
    else if(playerSelectionFixed == "Scissors" && computerSelection == "Paper"){
        return win;
    }
    else if(playerSelectionFixed == "Scissors" && computerSelection == "Rock"){
        return lose;
    }
}

const buttons = document.querySelectorAll("button");
const div = document.createElement("div");
const body = document.querySelector("body");
const score = document.querySelector("#score");
let runningScore = 0;
let winScore = 0;
let loseScore = 0;
buttons.forEach(button => button.addEventListener('click', function(){
    let result = playRound(this.id, getComputerChoice());
    if(runningScore == 5){
        body.removeChild(div);
        runningScore = 0;
        winScore = 0;
        loseScore = 0;
    }
    if(result.charAt(4) == "w"){
        winScore++;
        runningScore++;
    }
    else if(result.charAt(4) == "l"){
        loseScore++;
        runningScore++;
    }
    else{
        runningScore++;
    }
    score.textContent = runningScore;
    if(runningScore == 5){
        if(winScore > loseScore){
            div.textContent = "You won";
        }
        else if(winScore < loseScore){
            div.textContent = "You lost";
        }
        else{
            div.textContent = "It's a draw";
        }
        body.appendChild(div);
    }
}));