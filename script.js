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

//Write the logic to play the entire game
//The game will play 5 rounds
function playGame() {
  function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
      console.log(
        `It's a tie, ladies and gentleman! They both chose ${humanChoice}.`,
      );
    } else if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "paper" && computerChoice == "rock") ||
      (humanChoice === "scissors" && computerChoice === "paper")
    ) {
      humanScore++;
      console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
    } else {
      computerScore++;
      console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
    }

    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
  }

  //Loop to play 5 round of rock, paper, scissors
  if (playRound() <= 5) {
    playRound(humanSelection, computerSelection);
  }

  //call the function to start the game
  playGame();
}
playGame();
