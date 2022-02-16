// Дан массив ['js', 'css', 'html']. Выведите на экран первый элемент.

const myArray = ['js', 'css', 'html'];
alert (myArray[0]); // js

// Отфильтруйте массив [0, 1, false, 2, undefined, '', 3, null] от нежелательных значений, 
// таких как false, undefined, пустые строки, ноль, null с помощью метода filter.  

const myArray2 = [0, 1, false, 2, undefined, '', 3, null];
const filteredArray2 = myArray2.filter (Boolean);
alert(filteredArray2); // 1,2,3

// Дан массив [[1,2], [1,2,3], [1,2,3,4]]. Найдите индекс массива, длина которого > 3.
const myArray3 = [[1,2], [1,2,3], [1,2,3,4]];
const el = myArray3.findIndex(el=>el.length>3);
alert (el); // 2