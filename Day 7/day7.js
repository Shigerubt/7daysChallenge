let memory = 0;

function getNumbers() {
    const firstNumber = parseFloat(document.getElementById('firstNumber').value);
    const secondNumber = parseFloat(document.getElementById('secondNumber').value);
    return { firstNumber, secondNumber };
}

function add() {
    const { firstNumber, secondNumber } = getNumbers();
    const result = firstNumber + secondNumber;
    displayResult(result);
}

function subtract() {
    const { firstNumber, secondNumber } = getNumbers();
    const result = firstNumber - secondNumber;
    displayResult(result);
}

function multiply() {
    const { firstNumber, secondNumber } = getNumbers();
    const result = firstNumber * secondNumber;
    displayResult(result);
}

function divide() {
    const { firstNumber, secondNumber } = getNumbers();
    if (secondNumber === 0) {
        displayResult('Error: Division by zero');
    } else {
        const result = firstNumber / secondNumber;
        displayResult(result);
    }
}

function addMemory() {
    const result = parseFloat(document.getElementById('result').innerText.split(': ')[1]);
    if (!isNaN(result)) {
        memory += result;
        alert(`Memory: ${memory}`);
    }
}

function clearMemory() {
    memory = 0;
    alert('Memory cleared');
}

function showMemory() {
    alert(`Memory: ${memory}`);
}

function clearFields() {
    document.getElementById('firstNumber').value = '';
    document.getElementById('secondNumber').value = '';
    document.getElementById('result').innerText = '';
}

function displayResult(result) {
    document.getElementById('result').innerText = `Result: ${result}`;
}