class Calculator {
  constructor(previousOperandText, currentOperandText) {
    this.previousOperandText = previousOperandText;
    this.currentOperandText = currentOperandText;
    this.clear()
  }

  // calculator functions

  // clears output screen
  clear() {
  this.currentOperand = " ";
  this.previousOperand = " ";
  this.operation = undefined;
  }

  //determines what will occur everytime you click a number to add to the output screen
  appendNumber(number) {
    if (number === "." && this.currentOperand.includes(".")) return
    this.currentOperand = this.currentOperand.toString() + number.toString()
  }

  // determines what will occur when you click a operation button
  chooseOperation(operation) {
    if (this.currentOperand === '') return
    if (this.previousOperand !== '') {
      this.compute()
    }
    this.operation = operation
    this.previousOperand = this.currentOperand
    this.currentOperand = ''

  }

  // takes values and displays the result
  compute() {
    let computation
    const prev = parseFloat(this.previousOperand)
    const current = parseFloat(this.currentOperand)
    if (isNaN(prev) || isNaN(current)) return
    switch (this.operation) {
      case '+':
        computation = prev + current
        break
      case '-':
        computation = prev - current
        break
      case '*':
        computation = prev * current
        break
      case '÷':
        computation = prev / current
        break
      default:
        return
    }
    this.currentOperand = computation
    this.operation = undefined
    this.previousOperand = ''
  }

  // function lets you update the values inside the output screen
  updateDisplay() {
    this.currentOperandText.innerText = this.currentOperand

  }
}

// Calculator JS

const numberButtons = document.querySelectorAll("[data-number]");
const operationButtons = document.querySelectorAll("[data-operational]");
const allClearButton = document.querySelector("[data-clear-all]");
const equalButton = document.querySelector("[data-equals]");
const previousOperandText = document.querySelector("[data-previous-operand]");
const currentOperandText = document.querySelector("[data-current-operand]");


// added calculator class and put a constructor that takes all inputs
// and all calculator functions


const calculator = new Calculator(previousOperandText, currentOperandText)

// used for.Each to loop thru numbers and added an .addEventListener for the button click
// .appendNumber calls the functions to display number selected
// .updateDispaly updates button presses on the output screen

numberButtons.forEach(button => {
  button.addEventListener("click", () => {
    calculator.appendNumber(button.innerText)
    calculator.updateDisplay()
  })
}) 

operationButtons.forEach(button => {
  button.addEventListener("click", () => {
    calculator.chooseOperation(button.innerText)
    calculator.updateDisplay()
  })
})

equalButton.addEventListener('click', button => {
  calculator.compute()
  calculator.updateDisplay()
})

allClearButton.addEventListener('click', button => {
  calculator.clear()
  calculator.updateDisplay()
}) 




