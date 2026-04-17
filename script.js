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

//Write logic to play a single round of rock, paper, scissors
//These parameters are used to take the human and computer choices as arguments
function playRound(humanChoice, computerChoice) {
  const humanSelection = getHumanChoice();
  const computerSelection = getComputerChoice();

  if (humanSelection === computerSelection) {
    console.log("It's a tie, ladies and gentleman!");
  } else if (humanSelection === "rock" && computerSelection === "scissors") {
    console.log("You win! Rock beats Scissors.");
    humanScore += 1;
  } else if (humanSelection === "paper" && computerSelection === "rock") {
    console.log("You win! Paper beats Rock.");
    humanScore += 1;
  } else if (humanSelection === "scissors" && computerSelection === "paper") {
    console.log("You win! Scissors beats Paper.");
    humanScore += 1;
  } else if (humanSelection === "rock" && computerSelection === "paper") {
    console.log("You lose! Paper beats Rock.");
    computerScore += 1;
  } else if (humanSelection === "paper" && computerSelection === "scissors") {
    console.log("You lose! Scissors beats Paper.");
    computerScore += 1;
  } else if (humanChoice === "scissors" && computerChoice === "rock") {
    console.log("You lose! Rock beats Scissors.");
    computerScore += 1;
  }
}
