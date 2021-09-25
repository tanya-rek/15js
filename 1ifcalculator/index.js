let firstNumber = '';
let secondNumber = '';

function getNumber() {
    firstNumber = document.getElementById("firstNumber").value;
    secondNumber = document.getElementById("secondNumber").value;

    if (!firstNumber || isNaN(firstNumber)) {
        alert('Please enter the first number!');
    }

    if (!secondNumber || isNaN(secondNumber)) {
        alert('Please enter the second number!');
    }
}

function calcSum() {
    getNumber();
    document.getElementById('result').value = +firstNumber + +secondNumber;
}

function calcDeduction() {
    getNumber();
    document.getElementById('result').value =(firstNumber - secondNumber);
}

function calcMultiplication() {
    getNumber();
    document.getElementById('result').value =(firstNumber * secondNumber);
}

function calcDivision() {
    getNumber();
    if (+secondNumber === 0) {
        alert('Divide by zero is forbidden!');
    } else {
    document.getElementById('result').value =(+firstNumber / +secondNumber);
    }
}