const numButtons = document.querySelectorAll(".num-button");
const operButtons = document.querySelectorAll(".oper-button");
const equalButton = document.querySelector(".equal-button");
const outputDisplay = document.querySelector(".screen-output")
const clearButton = document.querySelector(".clear-button");

const handleAllButtons = (event) => {
  outputDisplay.innerHTML += event.target.innerHTML;
};

for (let i = 0; i < numButtons.length; i++) {
  numButtons[i].addEventListener("click", handleAllButtons);
};

for (let i = 0; i < operButtons.length; i++) {
  operButtons[i].addEventListener("click", handleAllButtons);
};

// const handleClearButton = () => {
//   outputDisplay.innerHTML = " ";
// };

// clearButton.addEventListener("click", handleClearButton);

// const handleEqualButton = () => {
//   outputDisplay.innerHTML = 
// };

// equalButton.addEventListener("click", handleEqualButton);









// const handleEqualButton = () => {
// // equal button will equate values in output display
  
// };

// operButtons.addEventListener("click", handleAllButtons);
// equalButton.addEventListener("click", handleEqualButton);