const numButtons = document.querySelectorAll(".num-button");
const operButtons = document.querySelectorAll(".oper-button");
const equalButton = document.querySelector(".equal-button");
const outputDisplay = document.querySelector(".screen-output");
const clearButton = document.querySelector(".clear-button");

let fistInputNumber;
let secondInputNumber;
let operatorSign;
let calculateButton

const handleNumButtons = (event) => {
  outputDisplay.innerHTML += event.target.innerHTML;
};

for (let i = 0; i < numButtons.length; i++) {
  numButtons[i].addEventListener("click", handleNumButtons);
};


const handleOperButtons = (event) => {
  outputDisplay.innerHTML += event.target.innerHTML;
  fistInputNumber = outputDisplay.innerHTML.slice(0, -1);
  operatorSign = outputDisplay.innerHTML.slice(-1);
  outputDisplay.innerHTML = " "
};

for (let i = 0; i < operButtons.length; i++) {
  operButtons[i].addEventListener("click", handleOperButtons);
};


const handleCalculateButton = (event) => {
  outputDisplay.innerHTML += event.target.innerHTML;
  secondInputNumber = outputDisplay.innerHTML.slice(0, -1)
  calculateButton = outputDisplay.innerHTML.slice(-1);
};

equalButton.addEventListener("click", handleCalculateButton);


const handleClearButton = () => {
  outputDisplay.innerHTML = " ";
};

clearButton.addEventListener("click", handleClearButton);


const finalEquation = () => {
  if(operatorSign == "+") {
    outputDisplay.innerHTML = Number(fistInputNumber) + Number(secondInputNumber);
   } else if (operatorSign == "-") {
    outputDisplay.innerHTML = Number(fistInputNumber) - Number(secondInputNumber);
   } else if (operatorSign == "*") {
    outputDisplay.innerHTML = Number(fistInputNumber) * Number(secondInputNumber);
   } else if (operatorSign == "÷") {
    outputDisplay.innerHTML = Number(fistInputNumber) / Number(secondInputNumber);
   } else {
    outputDisplay.innerHTML = "error"
   }
};

equalButton.addEventListener("click", finalEquation);
