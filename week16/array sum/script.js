function sumInput() {

let sum = 0;
let numbers = [];

for (;;) {
    let value = +prompt("Введите число", '');
    if (!value) break;
    numbers.push (value);
    numbers.sort(function(a,b){ 
        return a-b
      });
    sum += value;
}
alert ('Массив: ' + numbers);
alert('Сумма: ' + sum);
}

sumInput()