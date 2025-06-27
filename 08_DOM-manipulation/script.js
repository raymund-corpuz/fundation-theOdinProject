const body = document.querySelector("body");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "New Div";

const paragraph = document.createElement("p");
paragraph.classList.add("para");
paragraph.textContent = "Hey I'm red";
paragraph.style.color = "red";
content.appendChild(paragraph);

const etch3 = document.createElement("h3");
etch3.classList.add("etch-3");
etch3.textContent = "Hey i'm a blue h3";
etch3.style.color = "blue";
content.appendChild(etch3);

const lastDiv = document.createElement("div");
lastDiv.style.backgroundColor = "pink";
lastDiv.style.border = "2px solid black";
content.appendChild(lastDiv);

const greeting = document.createElement("h1");
greeting.textContent = "Hey, I'm in a Div";
lastDiv.appendChild(greeting);

const greetingPara = document.createElement("p");
greetingPara.textContent = "Me Too!!!";
lastDiv.appendChild(greetingPara);

body.appendChild(content);

console.log(body);

const btn = document.querySelector("button");

function randomColor(number) {
  return Math.floor(Math.random() * number + 1);
}

function bgChange(e) {
  const randomColorVariable = `rgb(${randomColor(255)} ${randomColor(
    255
  )} ${randomColor(255)} )`;

  e.target.style.backgroundColor = randomColorVariable;

  console.log(randomColorVariable);
  console.log(e);
}

btn.addEventListener("click", bgChange);
