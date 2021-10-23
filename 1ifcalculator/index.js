let firstNumber = '';
let secondNumber = '';

function getNumber() {
    firstNumber = document.getElementById("firstNumber").value;
    secondNumber = document.getElementById("secondNumber").value;
    let errorCode = 0;

    if (!firstNumber || isNaN(firstNumber)) {
        alert('Please enter the first number!');
        errorCode += 1;
    }

    if (!secondNumber || isNaN(secondNumber)) {
        alert('Please enter the second number!');
        errorCode += 1;
    }
    return errorCode;
}

function calcSum() {
    if (getNumber() === 0) {
        document.getElementById('result').value = Number(firstNumber) + Number(secondNumber);
    }
}

function calcDeduction() {
    if (getNumber() === 0) {
        document.getElementById('result').value = Number(firstNumber) - Number(secondNumber);
    }
}

function calcMultiplication() {
    if (getNumber() === 0) {
        document.getElementById('result').value = Number(firstNumber) * Number(secondNumber);
    }
}

function calcDivision() {
    if (getNumber() === 0) {
        if (+secondNumber === 0) {
            alert('Divide by zero is forbidden!');
        } else {
        document.getElementById('result').value = Number(firstNumber) / Number(secondNumber);
        }
    }
}