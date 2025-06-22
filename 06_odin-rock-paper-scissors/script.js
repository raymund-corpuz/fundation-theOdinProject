//create a function getCOmputerChoice

let winProgress = 0;
function getComputerChoice() {
  const computerChoice = Math.trunc(Math.random() * 3);
  const tools = ["rock", "paper", "scissors"];
  console.log("Computer Choice: " + tools[computerChoice]);
  return tools[computerChoice];

  // Step 1: use Math.rand() function this should return 1 - 3
  //   const computerChoice = Math.trunc(Math.random() * 3);
  //   const select = computerChoice;
  //   // Step 2: create an array of tools
  //   // Step 3: store the rock paper scissors inside the array
  //   const tools = ["rock", "paper", "scissors"];
  //   // Step 4: pass the rand inside the array
  //   // Step 5: Create a varible to hold the computerChoice
  //   // return the computer choice
  //   console.log(tools[select]);
  //   const finalSelect = tools[select];
  //     return finalSelect;
}

// console.log(getComputerChoice());
// <--------------------------USER CHOICE---------------------------->

// Create a function to get the user choice
function getHumanChoice() {
  // use a prompt to get the user choice
  const userChoice = "PAPER";
  const userChoiceLowerCase = userChoice.toLowerCase();
  console.log("User Choice: " + userChoiceLowerCase);
  // return the user choice
  return userChoiceLowerCase;
}

const computerSelection = getComputerChoice();
const humanSelection = getHumanChoice();

// create a function evaluate
// this will  have two parameters (computerChoice, userChoice)
function playRound(computerChoice, userChoiceLowerCase) {
  // create an if statement to check who is the winner
  // if computer- rock && user -rock || computer paper && user- paper || computer scissors && user-scissors :  return tie

  // console.log("Computer Choice: " + computerSelection);
  // console.log("User Choice: " + humanSelection);
  if (
    (computerChoice == "rock" && userChoiceLowerCase == "rock") ||
    (computerChoice == "paper" && userChoiceLowerCase == "paper") ||
    (computerChoice == "scissors" && userChoiceLowerCase == "scissors")
  ) {
    console.log("------------ DRAW ----------------");
  }
  // if computer-rock && user -paper || computer paper && user -scissors || computer scissors && user rock  : return user as winner
  else if (
    (computerChoice == "rock" && userChoiceLowerCase == "paper") ||
    (computerChoice == "paper" && userChoiceLowerCase == "scissors") ||
    (computerChoice == "scissors" && userChoiceLowerCase == "rock")
  ) {
    console.log("-------------- The User Wins -----------------");
  }

  // if computer -rock && user-scissors  || computer scissors && user paper || computer paper &&  user rock: return computer winner
  else if (
    (computerChoice == "rock" && userChoiceLowerCase == "scissors") ||
    (computerChoice == "scissors" && userChoiceLowerCase == "paper") ||
    (computerChoice == "paper" && userChoiceLowerCase == "rock")
  ) {
    console.log("---------------- The Computer Wins --------------------");
  }
}

for (let i = 0; i < 5; i++) {
  playRound(computerSelection, humanSelection);
}
