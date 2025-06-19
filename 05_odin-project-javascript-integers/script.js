const btn = document.getElementById("button");

const txt = document.getElementById("machine");

btn.addEventListener("click", updateBtn);

function updateBtn() {
  if (btn.textContent === "Start machine") {
    btn.textContent = "Stop machine";
    txt.textContent = "The machine has started!";
  } else {
    btn.textContent = "Start machine";
    txt.textContent = "The machine is stopped!";
  }
}

const pressMe = document.getElementById("press-me");
const greet = document.getElementById("greeting");

function greeting() {
  const name = prompt("What is your Name?");

  const result = `Hello! ${name}, how are you today?`;
  greet.textContent = result;
}

pressMe.addEventListener("click", greeting);

let randomNumber = Math.floor(Math.random() * 100) + 1;
const guesses = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const guessSubmit = document.querySelector(".guessSubmit");
const guessField = document.querySelector(".guessField");

let guessCount = 1;
let resetButton;

function checkGuess() {
  const userGuess = Number(guessField.value);
  if (guessCount === 1) {
    guesses.textContent = "Previous guess:";
  }

  guesses.textContent = `${guesses.textContent} ${userGuess}`;

  if (userGuess === randomNumber) {
    lastResult.textContent = "Congratulation! You got it right";
    lastResult.style.backgroungColor = "green";
    lowOrHi.textContent = "";
    setGameOver();
  } else if (guessCount === 10) {
    lastResult.textContent = "!!! GAME OVER !!!";
    lowOrHi.textContent = "";
    setGameOver();
  } else {
    lastResult.textContent = "Wrong!";
    lastResult.style.backgroungColor = "red";

    if (userGuess < randomNumber) {
      lowOrHi.textContent = "Last guess was too low!";
    } else if (userGuess > randomNumber) {
      lowOrHi.textContent = "Last guess was to high!";
    }
  }

  guessCount++;
  guessField.value = "";
  guessField.focus();
}
guessSubmit.addEventListener("click", checkGuess);

function setGameOver() {
  guessField.disabled = true;
  guessSubmit.disabled = true;
  resetButton = document.createElement("button");
  resetButton.textContent = "Start new game";
  document.body.appendChild(resetButton);
  resetButton.addEventListener("click", resetGame);
}

function resetGame() {
  guessCount = 1;
  const resetParas = document.querySelectorAll("resultParas p");
  for (const resetPara of resetParas) {
    resetPara.textContent = "";
  }

  resetButton.parentNode.removeChild(resetButton);
  guessField.disabled = false;
  guessSubmit.disabled = false;
  guessField.value = "";
  guessField.focus();
  lastResult.style.backgroungColor = "white";
  randomNumber = Math.floor(Math.random() * 100) + 1;
}

const select = document.querySelector("select");
const para = document.querySelector("#weatherParagraph");

select.addEventListener("change", setWeather);

function setWeather() {
  const choice = select.value;

  if (choice === "sunny") {
    para.textContent =
      "It is nice and sunny outside today. Wear shorts! got o the beach, or the park, and get an ice cream";
  } else if (choice === "rainy") {
    para.textContent =
      " Rain is falling outside; take a rain coat and an umbrella, and don't stay out for too long";
  } else if (choice === "snowing") {
    para.textContent =
      "The snow is coming down - it is freezing! Best to stay in with a cup of hot chocolate. or go build a snowman";
  } else if (choice == "overcast") {
    para.textContent =
      "it isn't raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case";
  } else {
    para.textContent = "";
  }
}

const fruits = document.querySelector("#fruits");
const fruitPragraph = document.querySelector("#fruitPragraph");

function getFruit() {
  const myFruit = fruits.value;

  console.log(myFruit);

  switch (myFruit) {
    case "banana":
      fruitPragraph.textContent =
        "BANANA : Botanically speaking, a banana qualifies as a berry because it develops from a single flower with one ovary and has multiple seeds embedded in the flesh.";
      break;
    case "pine apple":
      fruitPragraph.textContent = `PINE APPLE : A pineapple is a multiple fruit, meaning it develops from the fusion of many individual flowers (called a "multiple inflorescence")`;
      break;
    case "coconut":
      fruitPragraph.textContent =
        "COCONUT : Inside that hard shell is the seed—the part that can grow into a new coconut tree.And no, despite the name, coconuts are not true nuts. They don't meet the botanical criteria for nuts (like acorns or hazelnuts).";
      break;
    case "strawberry":
      fruitPragraph.textContent =
        "STRAWBERRY : Botanically, a strawberry is not a true berry, because true berries (like bananas or grapes) develop from a single ovary and contain seeds inside the flesh.";
      break;

    default:
      fruitPragraph.textContent = "";
  }
}

fruits.addEventListener("click", getFruit);

const bgtheme = document.querySelector(".bgtheme");
const theme = document.querySelector("#theme");
const myweb = document.querySelector("#myweb");

function update(bgColor, textColor) {
  bgtheme.style.backgroundColor = bgColor;
  myweb.style.color = textColor;
}

theme.addEventListener("change", () =>
  theme.value === "black" ? update("black", "white") : update("white", "black")
);

//NUMBER CHECKER
function numberChecker(number) {
  if (number >= 10) {
    return true;
  } else {
    return false;
  }
}

//MATH EQUATIONS
const a = 1 - 1; // Freebie!!! This is the answer to "one minus one"
const b = 1 + 8;
const c = 22 * 3;
const d = 5 / 4;
const e = b - 17;
const f = a + b + c + d + e;

//JOIN STRINGs
const birthYear = 1947;
const thisYear = 1965;
const firstName = "Carlos";
const lastName = "Stevenson";

const greeting =
  "Hello! My name is " +
  firstName +
  " " +
  lastName +
  " and I am " +
  (thisYear - birthYear) +
  " years old.";

//REPEAT STRING
const repeatString = function (word, times) {
  if (times < 0) return "ERROR";

  let string = "";

  for (let i = 0; i < times; i++) {
    string += word;
  }
  return string;
};
