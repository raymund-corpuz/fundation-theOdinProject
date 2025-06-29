const div = document.querySelector(".container");
const divLength = 16;

const colorPicker = document.querySelector("#colorPicker");

for (let i = 0; i <= divLength; i++) {
  for (let j = 0; j <= divLength; j++) {
    const innerDiv = document.createElement("div");
    innerDiv.classList.add("boxes");
    innerDiv.style.width = "20px";
    innerDiv.style.height = "20px";
    innerDiv.style.border = "1px solid black";

    div.appendChild(innerDiv);

    innerDiv.addEventListener("mouseover", () => {
      innerDiv.style.backgroundColor = "black";
    });
  }
}

const clear = document.querySelector(".clear");
clear.addEventListener("click", () => {
  const clearBoxes = document.querySelectorAll(".boxes");
  const boxesArray = [...clearBoxes];

  boxesArray.forEach((element) => {
    element.style.backgroundColor = "white";
  });
});
