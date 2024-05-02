function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};

const divControls = document.querySelector("#controls");
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const divBoxes = document.querySelector("#boxes");


createBtn.addEventListener("click", () => {
  const amountInput = document.querySelector("input");
  const amount = parseInt(amountInput.value)
  if (amount >= 1 && amount <= 100) {
    destroyBoxes();
    createBoxes(amount);
    amountInput.value = "";
  }
});


function createBoxes(amount) {
  const boxesArray = [];
  for (let i = 0; i < amount; i++) {
    const newDiv = document.createElement("div");
    newDiv.style.width = `${30 + i * 10}px`;
    newDiv.style.height = `${30 + i * 10}px`;
    newDiv.style.backgroundColor = getRandomHexColor();
    boxesArray.push(newDiv);
    
  }
divBoxes.append(...(boxesArray))
};


destroyBtn.addEventListener("click", destroyBoxes);

function destroyBoxes() {
  divBoxes.innerHTML = "";
};
