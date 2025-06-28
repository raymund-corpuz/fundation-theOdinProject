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

function randomColorFunc(number) {
  return Math.floor(Math.random() * number + 1);
}

function bgChangeFunc(e) {
  const randomColorVar = `rgb(${randomColorFunc(255)} ${randomColorFunc(
    255
  )} ${randomColorFunc(255)})`;

  e.target.style.backgroundColor = randomColorVar;
  console.log(randomColorVar);
}

btn.addEventListener("click", bgChangeFunc);

const myCheckBox = document.querySelector("#myCheckBox");
myCheckBox.addEventListener("mouseover", () => {
  myCheckBox.click();
});

myCheckBox.addEventListener("click", () => {
  console.log("click event occurred");
});

const controlBtn = document.querySelectorAll(".button");

// controlBtn.forEach((button) => {
//   button.addEventListener("click", () => alert(button.id));
// });

const menu = document.querySelector("#menu");

menu.addEventListener("click", (event) => {
  let target = event.target;
  event.preventDefault();

  switch (target.id) {
    case "home":
      console.log("Home Menu");
      break;
    case "dashboard":
      console.log("Home Dashboard");
      break;
    case "report":
      console.log("Home Report");
      break;
  }
});

const myListReplaceChild = document.querySelector("#myListReplaceChild");
const tryItBtn = document.querySelector("#tryItBtn");

function replaceChildFunc() {
  const elemet = document.createElement("li");
  const textNode = document.createTextNode("Water");

  elemet.appendChild(textNode);

  const list = document.querySelector("#myListReplaceChild");
  list.replaceChild(elemet, list.children[0]);
}

tryItBtn.addEventListener("click", replaceChildFunc);
