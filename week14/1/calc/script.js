function showMessage1() {
    let a = document.getElementById ('number1').value;
    let b = document.getElementById ('number2').value;
    let result = (+a + +b);
    document.getElementById('result').innerHTML = result;
}

function showMessage2() {
    let a = document.getElementById ('number1').value;
    let b = document.getElementById ('number2').value;
    let result = (a - b);
    document.getElementById('result').innerHTML = result;
}

function showMessage3() {
    let a = document.getElementById ('number1').value;
    let b = document.getElementById ('number2').value;
    let result = (a * b);
    document.getElementById('result').innerHTML = result;
}

function showMessage4() {
    let a = document.getElementById ('number1').value;
    let b = document.getElementById ('number2').value;
    let result = (a / b);
    document.getElementById('result').innerHTML = result;
}