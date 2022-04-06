//DOM selector
const keys = document.querySelectorAll(".key");
const operatorKeys = document.querySelectorAll(".operator");
let output = document.querySelector(".output");
const clearButton = document.querySelector(".clear");
const deleteButton = document.querySelector(".del");
const equalButton = document.querySelector(".equal");
let number1 = 0;
let number2 = 0;
let op;
let displayValue = output.textContent;

function add(x, y) {
  return x + y;
}
function subtract(x, y) {
  return x - y;
}

function multiply(x, y) {
  return x * y;
}

function divide(x, y) {
  return y === 0 ? "Cannot divide with zero" : x / y;
}

function operate(operator, num1, num2) {
  num1 = Number(num1);
  num2 = Number(num2);
  switch (operator) {
    case "+":
      return add(num1, num2);
      break;
    case "-":
      return subtract(num1, num2);
      break;
    case "x":
      return multiply(num1, num2);
      break;
    case "/":
      return divide(num1, num2);
  }
}

// Functions display the number
function displaynumber(e) {
  displayValue = e.target.textContent;
  output.innerHTML += displayValue;
}

keys.forEach((btn) => {
  btn.addEventListener("click", displaynumber);
});

//function clear the number
clearButton.addEventListener("click", (e) => {
  output.innerHTML = "";
});

//function that will delete number
deleteButton.addEventListener("click", (e) => {
  output.innerHTML = output.innerHTML.slice(0, -1);
});

//function that will store opreator number and show it

function opreation(e) {
  displayValue = output.textContent;
  op = e.target.textContent;
  number1 = displayValue;
  output.innerHTML = "";
}

operatorKeys.forEach((op) => {
  op.addEventListener("click", opreation);
});

//function that will do equal
equalButton.addEventListener("click", () => {
  displayValue = output.textContent;
  number2 = displayValue;
  output.innerHTML = operate(op, number1, number2);
});
