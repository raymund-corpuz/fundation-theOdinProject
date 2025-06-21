//create a function getCOmputerChoice

function getComputerChoice() {
  const computerChoice = Math.trunc(Math.random() * 3);
  const tools = ["rock", "paper", "scissors"];
  getUserChoice();
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

const computerChoice = getComputerChoice();
console.log(computerChoice);
const userChoice = getUserChoice();
console.log(userChoice);
// console.log(getComputerChoice());
// <--------------------------USER CHOICE---------------------------->

// Create a function to get the user choice
function getUserChoice() {
  // use a prompt to get the user choice
  const userChoice = "Scissors";
  const userChoiceLowerCase = userChoice.toLowerCase();
  // return the user choice
  return userChoiceLowerCase;
}
