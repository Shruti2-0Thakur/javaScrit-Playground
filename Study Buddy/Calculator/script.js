let display = document.querySelector('.display');
let buttonsContainer = document.querySelector('.buttons');
let currentValue = '0';
let operator = '';
let firstValue = '';


const buttonLabels = [
    'C', '+', '-', '×',
    '7', '8', '9', '÷',
    '4', '5', '6', '+',
    '1', '2', '3', '=',
    '0', '.', 'Shruti Thakur'
];

// Button actions in the corresponding order
const buttonActions = [
    clearDisplay, () => appendOperator('+'), () => appendOperator('-'), () => appendOperator('*'),
    () => appendNumber(7), () => appendNumber(8), () => appendNumber(9), () => appendOperator('/'),
    () => appendNumber(4), () => appendNumber(5), () => appendNumber(6), () => appendOperator('+'),
    () => appendNumber(1), () => appendNumber(2), () => appendNumber(3), calculate,
    () => appendNumber(0), appendDot, () => appendNumber(0)
];

// Function to create buttons dynamically
function createButtons() {
    buttonLabels.forEach((label, index) => {
        let button = document.createElement('button');
        button.classList.add('btn');
        button.textContent = label;
        button.addEventListener('click', buttonActions[index]);
        buttonsContainer.appendChild(button);
    });
}

// Clear display function
function clearDisplay() {
    currentValue = '0';
    operator = '';
    firstValue = '';
    updateDisplay();
}

// Append number function
function appendNumber(number) {
    if (currentValue === '0') {
        currentValue = number.toString();
    } else {
        currentValue += number.toString();
    }
    updateDisplay();
}

// Append operator function
function appendOperator(op) {
    if (operator) {
        calculate();
    }
    operator = op;
    firstValue = currentValue;
    currentValue = '0';
}

// Append dot function
function appendDot() {
    if (!currentValue.includes('.')) {
        currentValue += '.';
    }
    updateDisplay();
}

// Calculate function
function calculate() {
    let result;
    let num1 = parseFloat(firstValue);
    let num2 = parseFloat(currentValue);

    if (isNaN(num1) || isNaN(num2)) return;

    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        default:
            return;
    }

    currentValue = result.toString();
    operator = '';
    firstValue = '';
    updateDisplay();
}

// Update display function
function updateDisplay() {
    display.value = currentValue;
}
// https://github.com/coderjojo/creative-profile-readme
// Initialize the calculator by creating buttons
createButtons();
