class Calc {
    static sum(a, b) {
        return a + b;
    }

    static diff(a, b) {
        return a - b;
    }

    static mult(a, b) {
        return a * b;
    }

    static div(a, b) {
        if (b == 0) {
            return "На ноль делить нельзя!";
        } else {
            return a / b;
        }
    }
}

function showMessage1() {
    let a = Number(document.getElementById('number1').value);
    let b = Number(document.getElementById('number2').value);
    document.getElementById('result').innerHTML = Calc.sum(a, b);
};

function showMessage2() {
    let a = Number(document.getElementById('number1').value);
    let b = Number(document.getElementById('number2').value);
    document.getElementById('result').innerHTML = Calc.diff(a, b);
};

function showMessage3() {
    let a = Number(document.getElementById('number1').value);
    let b = Number(document.getElementById('number2').value);
    document.getElementById('result').innerHTML = Calc.mult(a, b);
};

function showMessage4() {
    let a = Number(document.getElementById('number1').value);
    let b = Number(document.getElementById('number2').value);
    document.getElementById('result').innerHTML = Calc.div(a, b);
};

