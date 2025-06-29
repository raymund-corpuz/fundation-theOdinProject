const div = document.querySelector(".container");
const colorPickerDiv = document.querySelector(".colorPickerDiv");
const divLength = 32;

div.style.width = `${divLength * 20 + divLength}px`;
div.style.hegiht = `${divLength * 20 + divLength}px`;
colorPickerDiv.style.width = `${divLength * 20 + divLength}px`;

const colorPicker = document.querySelector("#colorPicker");
colorPicker.addEventListener("change", (event) => {
  const myColor = event.target.value;

  setColor(event.target.value || "#000000");
});

for (let i = 0; i < divLength; i++) {
  for (let j = 0; j < divLength - 1; j++) {
    const innerDiv = document.createElement("div");
    innerDiv.classList.add("boxes");
    innerDiv.style.width = "20px";
    innerDiv.style.height = "20px";
    innerDiv.style.border = "1px solid black";

    div.appendChild(innerDiv);
  }
}

function setColor(color = "black") {
  const innerDive = document.querySelectorAll(".boxes");
  const innerDiv = [...innerDive];
  innerDiv.forEach((element) => {
    element.addEventListener("mouseover", () => {
      element.style.backgroundColor = color;
    });
  });

  console.log(color);
}

const clear = document.querySelector(".clear");
clear.addEventListener("click", () => {
  const clearBoxes = document.querySelectorAll(".boxes");
  const boxesArray = [...clearBoxes];

  boxesArray.forEach((element) => {
    element.style.backgroundColor = "white";
  });
});
