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

function game(){
    let winCounter = 0;
    let loseCounter = 0;
    for(let x = 0; x < 5; x++){
        let playerSelection = prompt("Please select your choice.")
        let computerSelection = getComputerChoice();
        result = playRound(playerSelection, computerSelection);
        if(result.charAt(4) == "w"){
            winCounter++;
        }
        else if(result.charAt(4) == "l"){
            loseCounter++;
        }
    }
    if(winCounter>loseCounter){
        console.log("You won more rounds.");
    }
    else if(winCounter<loseCounter){
        console.log("You lost more rounds.");
    }
    else{
        console.log("It's a draw.");
    }
}
