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