const array = [];

function calc(min, max) {
    let sum = 0;
    let average = 0;
    let mult = 1;
    for (let i = 0; i < max; i++) {
        let rand = min + Math.random() * (max + 1 - min);
        let number = Math.floor(rand);
        array[i] = number;
        sum += array[i];
        average = sum / array.length;
        mult *= array[i];
    }
    console.log(array);
    console.log(sum);
    console.log(average);
    console.log(mult);


    let maxNumber = Math.max.apply(null, array);
    console.log(maxNumber);
    let minNumber = Math.min.apply(null, array);
    console.log(minNumber);
    let numbers = array.join(', ');

    document.getElementById("result").innerHTML = `<div> Сгенерировали: ${numbers}</div>
<div> Минимальное: ${minNumber}</div>
<div> Максимальное: ${maxNumber}</div>
<div> Среднее арифметическое: ${average}</div>
<div> Сумма чисел:  ${sum}</div>
<div> Произведение чисел:  ${mult}</div>
`
}






// let maxNumber = Math.max(array[0], array[1], array[2], array[3], array[4], array[5], array[6], array[7], array[8], array[9]);
// console.log(maxNumber);
// let minNumber = Math.min(array[0], array[1], array[2], array[3], array[4], array[5], array[6], array[7], array[8], array[9]);
// console.log(minNumber);