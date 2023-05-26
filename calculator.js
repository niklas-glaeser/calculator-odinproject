let displayValue = '';
let operator = '';
let result = null;

function appendValue(value) {
  if (result !== null) {
    // If there is a previous result, clear it
    result = null;
    operator = '';
    displayValue = '';
  }

  displayValue += value;
  document.getElementById('display').textContent = displayValue;
}

function appendOperator(op) {
  if (displayValue !== '') {
    if (operator !== '') {
      // If an operator is already set, perform the calculation and display the intermediate result
      performCalculation();
      operator = op;
      displayValue += op;
    } else {
      // If no operator is set, update the operator and display the value
      operator = op;
      displayValue += op;
    }
    document.getElementById('display').textContent = displayValue;
  }
}

function calculate() {
  performCalculation();
  operator = '';
}

function performCalculation() {
  if (operator === '' || displayValue === '') {
    return;
  }

  const operand1 = result !== null ? result : parseFloat(displayValue.split(operator)[0]);
  const operand2 = parseFloat(displayValue.split(operator)[1]);

  switch (operator) {
    case '+':
      result = operand1 + operand2;
      break;
    case '-':
      result = operand1 - operand2;
      break;
    case '*':
      result = operand1 * operand2;
      break;
    case '/':
      result = operand1 / operand2;
      break;
    default:
      break;
  }

  displayValue = result.toString();
  document.getElementById('display').textContent = displayValue;
}

function clearAll() {
  displayValue = '';
  operator = '';
  result = null;
  document.getElementById('display').textContent = '0';
}
