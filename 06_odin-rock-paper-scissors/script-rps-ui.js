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
