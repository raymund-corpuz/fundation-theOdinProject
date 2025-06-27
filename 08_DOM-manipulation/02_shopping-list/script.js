const itemList = document.querySelector("ul");
const inputUser = document.querySelector("input");
const btnUser = document.querySelector("button");
const div = document.querySelector("div");

function runBtnClick() {
  const currentValue = inputUser.value;

  if (currentValue) {
    inputUser.value = "";
    console.log(currentValue);

    const listLi = document.createElement("li");
    const listSpan = document.createElement("span");
    listSpan.textContent = currentValue;
    listLi.appendChild(listSpan);
    const delButton = document.createElement("button");
    listLi.appendChild(delButton);
    delButton.textContent = "delete";
    delButton.addEventListener("click", () => {
      listLi.remove();
    });
    itemList.appendChild(listLi);
    inputUser.focus();
  } else {
    alert("No Input");
  }
}

btnUser.addEventListener("click", runBtnClick);
