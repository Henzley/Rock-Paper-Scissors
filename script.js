let humanScore = 0;
let computerScore = 0;
const winningPoints = 5;

//Buttons
const rockButton = document.querySelector(".rock");
const scissorsButton = document.querySelector(".scissors");
const paperButton = document.querySelector(".paper");

//Results
const roundResult = document.querySelector(".roundResult");
const humanResult = document.querySelector(".humanResult");
const computerResult = document.querySelector(".computerResult");
const finalResult = document.querySelector(".finalResult");

//Write a function that gets the computer's choice
function getComputerChoice() {
  //Getting a random number between 0,1 or 2 to assign rock, paper, or scissors
  let randomNum = Math.floor(Math.random() * 3);
  if (randomNum === 0) {
    return "rock";
  } else if (randomNum === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

//Write the logic to play the entire game
function playGame() {
  function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
      roundResult.textContent = `It's a tie, ladies and gentleman! They both chose ${humanChoice}.`;
      // console.log(
      //   `It's a tie, ladies and gentleman! They both chose ${humanChoice}.`,
      // );
    } else if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "paper" && computerChoice == "rock") ||
      (humanChoice === "scissors" && computerChoice === "paper")
    ) {
      humanScore++;
      roundResult.textContent = `You win! ${humanChoice} beats ${computerChoice}.`;
      humanResult.textContent = `Your score: ${humanScore}`;
      // console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
    } else {
      computerScore++;
      roundResult.textContent = `You lose! ${computerChoice} beats ${humanChoice}.`;
      computerResult.textContent = `Computer score: ${computerScore}`;
      // console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
    }

    if (humanScore === winningPoints) {
      finalResult.textContent = "Congratulations! You beat the computer";
    } else if (computerScore === winningPoints) {
      finalResult.textContent = "The computer beat you this time. Try again!";
    } else if (humanScore && computerScore === winningPoints) {
      finalResult.textContent = "It ends in a draw!";
    }
  }

  //Create event listeners for the button the user clicks
  rockButton.addEventListener("click", () => {
    const computerChoice = getComputerChoice();
    playRound("rock", computerChoice);
  });

  paperButton.addEventListener("click", () => {
    const computerChoice = getComputerChoice();
    playRound("paper", computerChoice);
  });

  scissorsButton.addEventListener("click", () => {
    const computerChoice = getComputerChoice();
    playRound("scissors", computerChoice);
  });

  /* console.log(`Your score is ${humanScore}`);
  console.log(`The computer score is ${computerScore}`);
  if (humanScore > computerScore) {
    console.log("Congratulations! You beat the computer");
  } else if (computerScore > humanScore) {
    console.log("The computer wins this round!");
  } else {
    console.log("It ends in a draw!");
  } */
}

//call the function to start the game
playGame();
