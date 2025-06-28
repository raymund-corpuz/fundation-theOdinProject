//Psuedo code
//Rock paper scissors

let computerScore = 0;
let userScore = 0;

// ======================computer Function======================================
//create a function that will throw a random number
//create a variable for the rock, paper, scissors return type array
//the variable will contain the random number
// return the computer choice
function getComputerChoiceFunc() {
  let computerRandomChoice = Math.floor(Math.random() * 3);
  const computerChoiceVariable = ["rock", "paper", "scissors"];
  const computerChoiceResult = computerChoiceVariable[computerRandomChoice];
  console.log(`Computer: ${computerChoiceResult}`);
  return computerChoiceResult;
}

// ======================User Function======================================
//create a function for the user choice
//user will choose either rock paper scissors
// return user choice

function getUserChoiceFunc() {
  const userChoiceVariable = prompt("Enter: rock, paper, scissor");
  console.log(`User: ${userChoiceVariable}`);

  return userChoiceVariable;
}

// ======================CheckWinner Function======================================
//function checkWinner
// this will accept 2 parameters( computerChoice, userChoice)
// if the computer & user tie return draw
// if computer- rock & user -scissor || computer-scissor & user -paper || computer paper & user-rock => computer wins => update win computer
//else user wins => update user win

//return winner

function checkComputerVsUserFunction(computer, user) {
  if (computer === user) {
    console.log("------- This is a Draw ----------");
  } else if (
    (computer === "paper" && user === "rock") ||
    (computer === "rock" && user === "scissors") ||
    (computer === "scissors" && user === "paper")
  ) {
    console.log("----------------The Computer Win-------------");
    computerScore++;
  } else {
    console.log("----------------The User Win-------------");
    userScore++;
  }
  console.log(`Score -> User: ${userScore} | Computer: ${computerScore}`);
}

// ======================Winner Function======================================
//function that will have a parameter( winner)
//user and computer need to get 5 wins to be champion
//if draw no one will get points
//if computer win it's game over
// if user win it's game over

function playGame() {
  while (computerScore < 5 && userScore < 5) {
    const computerChoice = getComputerChoiceFunc();
    const userChoice = getUserChoiceFunc();

    if (
      userChoice !== "rock" &&
      userChoice !== "paper" &&
      userChoice !== "scissors"
    ) {
      console.log("Invalid Input");
      continue;
    }
    checkComputerVsUserFunction(computerChoice, userChoice);
  }
  if (computerScore === 5) {
    console.log("🎉 The Computer is the Champion");
  } else {
    console.log("🎉 The User is the Champion");
  }
}

playGame();
