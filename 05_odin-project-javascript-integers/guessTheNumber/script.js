// HARD CODE THE LOGIC FIRST
// ----------------DONE : Get all html and store in a variable
// --------DONE :Create a function called checkGuess,  resetGame, gameOver
// Create, check, apply
// -------------DONE : Computer will generate a guess number by itself
// -------------DONE :if the user clicks the My Guess button
// ------------ DONE: if the user did not input any return an error.
// -------------DONE: checkGuess will get the guessInput from the input field.
// -------------DONE : if the guess number and the guessInput is correct return congratulations.
// ---------DONE : check if the guess number is greater or less than then return a message
// disable the input field and the submit button.
// create a reset button to reset the game
// ---------DONE :if the guess number and the guess input is unmatch alert try again.
// --------DONE :remember the input should be only below 10 attempts (this should be decrement)
// if the attempt is more than 10 return game over
// create a reset button to reset the game

// <-------------------Variables -------------------------->
const container = document.querySelector(".container");
const myInput = document.querySelector("#guess-input");
const guessSubmit = document.querySelector("#guess-submit");
const congratsMessage = document.querySelector("#congrats-message");
const remainingAttempts = document.querySelector("remaining-attempts");

guessSubmit.addEventListener("click", checkGuess);

//CHECK GUESS ------------------------------->
const myRandom = Math.trunc(Math.random() * 100 + 1);
let attemps = 2;
let prevGuessArray = [];

function checkGuess() {
  let finalInput = +myInput.value;
  if (finalInput === "") {
    alert("NO INPUT");
  }
  if (myRandom === finalInput) {
    congratsMessage.textContent = "🎊🎉 CONGRATULATIONS 🎉🎊";
    console.log("create a Reset Button");
  } else {
    if (finalInput > myRandom) {
      console.log("TRY AGAIN...", myRandom);
      console.log("UR GUESS IS TOO HIGH...");
      --attemps;
      console.log(`You have only ${attemps} remaining...`);
      prevGuessArray.push(finalInput);
      console.log(prevGuessArray);
      if (attemps < 1) {
        gameOver();
        resetGame();
      }
    } else if (finalInput < myRandom) {
      console.log("TRY AGAIN...", myRandom);
      console.log("UR GUESS IS TOO LOW...");
      --attemps;
      console.log(`You have only ${attemps} remaining...`);
      prevGuessArray.push(finalInput);
      console.log(prevGuessArray);
      if (attemps < 1) {
        gameOver();
        resetGame();
      }
    }
  }
}
//RESET GAME -------------------------------->
function resetGame() {
  const resetButton = document.createElement("button");
  resetButton.textContent = "♻️ Reset Game ♻️";
  resetButton.classList.add("game-reset");
  container.appendChild(resetButton);

  resetButton.addEventListener("click", () => {
    if (resetButton.classList.contains("game-reset")) {
      console.log("RESET");
      attemps = 9;
      myRandom;
      console.log(attemps);
      container.removeChild(resetButton);
    }
  });
}

//GAME OVER --------------------------------->
function gameOver() {
  console.log("❌ GAME OVER ❌");
}

// let attemps = 2;

// const myRandom = Math.trunc(Math.random() * 100 + 1);

// if (myRandom === myInput) {
//   console.log("CONGRATULATIONS🎉🎊");
//   console.log("create a Reset Button");
// } else {
//   if (myInput > myRandom) {
//     console.log("TRY AGAIN...", myRandom);
//     console.log("UR GUESS IS TOO HIGH...");
//     --attemps;

//     console.log(`You have only ${attemps} remaining...`);
//     if (attemps < 1) {
//       console.log("GAME OVER");
//     }
//   } else if (myInput < myRandom) {
//     console.log("TRY AGAIN...", myRandom);
//     console.log("UR GUESS IS TOO LOW...");
//     --attemps;
//     console.log(`You have only ${attemps} remaining...`);
//     if (attemps < 1) {
//       console.log("GAME OVER");
//     }
//   }
// }

console.log(myInput);
