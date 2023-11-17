const equal = document.querySelector('.js-equal-btn');
const clear = document.querySelector('.js-clear-btn');
const inputText = document.querySelector('.js-input');

let calculation = '';
// process calculation
function calculator(value) {
 calculation += value;
 inputText.value = calculation;
};

// execute calculation
function executeCalculation() {
  calculation = eval(calculation);
  inputText.value = calculation;
};

// clear calculation
function clearCalculation() {
  calculation = '';
  inputText.value = '';
};
equal.addEventListener('click', executeCalculation);
clear.addEventListener('click', clearCalculation);