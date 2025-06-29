//step 1: store all buttons into a variable
// A) Create a foreach loop to call PlayGame()
//B ) call the getUserChoice(pass a variable here..)
const buttonCollection = document.querySelectorAll("button");
buttonCollection.forEach((button) => {
  button.addEventListener("click", () => {
    const userInput = button.textContent;
    playGame(userInput);
  });
});

let userScore = 0;
let computerScore = 0;

//step 2: Create Function getComputerChoice()
// A) generate a random num - computerRandonNumber
// B) Create an array then pass cRN - rockPaperScissorsArray
// return letterB

function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3);
  const rockPaperScissorsArray = ["rock", "paper", "scissors"];
  const computerChoice = rockPaperScissorsArray[randomNumber];
  console.log(`Computer Selection: ${computerChoice}`);
  return computerChoice;
}

//Step 3: Create function getUserChoice(accept step1)

// A) store accepted param and return immediately
// b) check if the param receive is correct

function getUserChoice(user) {
  const userChoice = user.toLowerCase();
  console.log(`User Selection: ${userChoice}`);
  return userChoice;
}

//Step 4 : Create a function checkRockPaperScissors(computer, user )
// A ) check if the computer === user return draw
// B ) check if computer win return computer win computer ++
// C ) check if user win return user  win user++
// D ) if either user and computer reach score === 5 Champion

function checkRockPaperScissors(computer, user) {
  if (computer === user) {
    console.log("--Draw--");
  } else if (
    (computer === "paper" && user === "rock") ||
    (computer === "rock" && user === "scissors") ||
    (computer === "scissors" && user === "paper")
  ) {
    console.log("--Computer Wins--");
    computerScore++;
  } else {
    console.log("--User Wins--");
    userScore++;
  }
}

//Step 5 : Create PlayGame function(user)
// A ) store the param => userChoice
// B) store computerfunction => computerInput
// C) store userFunction => userInput
// D)if userScore and computerScore is less than 5,
// E)  call getUserChoice( computerInput, userInput)

function playGame(user) {
  const userChoice = user;
  const computerInput = getComputerChoice();
  const userInput = getUserChoice(userChoice);

  if (computerScore <= 5 || userScore <= 5) {
    checkRockPaperScissors(computerInput, userInput);
  }
}
