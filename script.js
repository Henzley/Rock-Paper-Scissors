let humanScore = 0;
let computerScore = 0;

//Write a function that gets the computer's choice
function getComputerChoice() {
  //Getting a random number between 1 and 3 to assign rock, paper, or scissors
  let randomNum = Math.floor(Math.random() * (3 - 1) + 1);
  if (randomNum === 1) {
    return "rock";
  } else if (randomNum === 2) {
    return "paper";
  } else {
    return "scissors";
  }
}

//Write a function that gets the human's choice
function getHumanChoice() {
  let humanChoice = prompt(
    "Please enter rock, paper, or scissors:",
  ).toLowerCase();
  return humanChoice;
}
