const inputName = document.querySelector("#name-input");
const outputName = document.querySelector("#name-output");

inputName.addEventListener("input", handleInput);


function handleInput() {
    if (inputName.value.trim() === '') {
        outputName.textContent = "Anonymous";
    } else {
        outputName.textContent = inputName.value;
    }
}

console.log(handleInput());
