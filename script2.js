// variables

// const numButtons = document.getElementsByClassName("num-buttons");
// const clearButton = document.getElementsByClassName("clear-button");
// const equalButton = document.getElementsByClassName("equal-button");
// const operButton = document.getElementsByClassName("oper-button");
// const ouputDisplay = document.getElementsByClassName("screen-output");

//const numButtons = document.querySelectorAll("num-buttons");

const numOneButton = document.querySelector("#one");
const ouputDisplay = document.querySelectorAll(".screen-output");



const handleNumOne = () => {
  ouputDisplay.innerHTML = numOneButton.innerHTML;
  
};


numOneButton.addEventListener("click", handleNumOne);

console.log(ouputDisplay.innerHTML);



