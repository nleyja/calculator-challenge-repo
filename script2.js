const numButtons = document.querySelectorAll(".num-button");
const operButtons = document.querySelectorAll(".oper-button");
const equalButton = document.querySelector(".equal-button");
const outputDisplay = document.querySelector(".screen-output")

const handleNumbers = (event) => {
  outputDisplay.innerHTML += event.target.innerHTML;
};

for (let i = 0; i < numButtons.length; i++) {
  numButtons[i].addEventListener("click", handleNumbers);
};

const handleOperators = () => {
outputDisplay.innerHTML = operButtons.innerHTML;

};

const handleEqualButton = () => {
// equal button will equate values in output display
  
};

operButtons.addEventListener("click", handleOperators);
equalButton.addEventListener("click", handleEqualButton);