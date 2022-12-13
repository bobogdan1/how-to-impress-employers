var firstNumberInput = document.getElementById('first-number');
var secondNumberInput = document.getElementById('second-number');
var outputParagraph = document.getElementById('output');

function calculate(operator) {
	var result;
	var firstNumber = Number(firstNumberInput.value);
	var secondNumber = Number(secondNumberInput.value);

	switch (operator) {
		case '+':
			result = firstNumber + secondNumber;
			break;
		case '-':
			result = firstNumber - secondNumber;
			break;
		case '*':
			result = firstNumber * secondNumber;
			break;
		case '/':
			result = firstNumber / secondNumber;
			break;
		case '%':
			result = firstNumber % secondNumber;
			break;
	}

	outputParagraph.innerText =
		firstNumber + ' ' + operator + ' ' + secondNumber + ' = ' + result;
	outputParagraph.style.display = 'block';
}
