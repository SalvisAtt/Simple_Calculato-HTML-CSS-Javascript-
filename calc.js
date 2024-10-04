const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.option');
const resultBox = document.getElementById('result');

let firstNumber = '';
let secondNumber = '';
let operator = '';
let isOperatorClicked = false;
let resultIsDisplayed = false;

// Adding event listeners for buttons
numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (resultIsDisplayed){
            resultBox.value = '';
            resultIsDisplayed = false;
            firstNumber = '';
        }

        if (isOperatorClicked) {
            secondNumber += button.value;
            resultBox.value += button.value;
        } else {
            firstNumber += button.value;
            resultBox.value += button.value;
        }
    });
});

// Adding event listeners for buttons
operatorButtons.forEach(button => {
    button.addEventListener('click', () => {
        const operatorValue = button.value;
        if (operatorValue !== '=') {
            operator = operatorValue; // Store operator
            resultBox.value += ` ${operator} `; // Display operator in resultBox
            isOperatorClicked = true;
        } else {
            if (firstNumber && secondNumber && operator) {
                const result = calculate(Number(firstNumber), Number(secondNumber), operator);
                resultBox.value = result;

                resultIsDisplayed = true;

                // Reset values for the next calculation
                firstNumber = '';
                secondNumber = '';
                operator = '';
                isOperatorClicked = false;
            }
        }
    });
});

function calculate(num1, num2, operator) {
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num2 !== 0 ? num1 / num2 : 'Error';
        default:
            return '';
    }
}
