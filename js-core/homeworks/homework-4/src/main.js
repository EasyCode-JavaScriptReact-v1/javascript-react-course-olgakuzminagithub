/*
* Напишите функцию которая будет принимать 1 аргумент и в зависимости от типа аргумента
*
* Если тип аргумента число или объект -> возвращать true
* Если тип аргумента функция -> возвращать false
* Если тип аргумента Строка и длина этой строки не равна 10 -> возвращать "длина вашей строки: <длина строки>
*                            Если длина 10 -> 'you win'
*
*
*
*
* */

/*
*
*  Задача в классе !
*
* */


/*
 1. Напишите функцию которая принимает 2 числа
 и возвращает массив содержащий числа между первым числом и вторым числом;
 */

function numbersBetween(a, b) {
    let myArr = [];
    for (let i = 0; i <= (b-a); i ++) {
        myArr[i] = a + i;
    }
    return myArr;
}

console.log(numbersBetween(3, 5));
// 3, 4, 5

console.log(numbersBetween(10, 12));
// 10, 11, 12


/*
 2. Перепишите задачу FizzBuzz, но с использованием цикла.
 Расчет чисел должен идти до 100
 */

// 1. FizzBuzz 3, 5, 3 && % 5

function FizzBuzz(number) {
    let str = '';
    if (!(number % 3)) {
        str += 'Fizz';
    }
    if (!(number % 5)) {
        str += 'Buzz';
    }
    if (str) {
        return str;
    } else {
        return number;
    }

}


function fizzBuzz100(number) {
    for ( let i = 1; i <= number; i ++) {
        console.log(FizzBuzz(i));
    }
}
fizzBuzz100(100);


/*
 3. Напишите функцию которая принимает 1 аргумент - массив
 И возвращает новый массив содержащий типы значений переменных
 */

let arr = [1, null, undefined, 'str', {}, [], function() {}];

function returnTypeArrayVariables(array) {
    let newArray = [];
    for (let i = 0; i <= array.length; i ++) {
        newArray[i] = typeof array[i];

    }
    return newArray;
}

console.log(returnTypeArrayVariables(arr));


/*
 1. @@SUPER@@. Вам дан массив array, содержащий внутри объекты.
 Напишите функцию которая внутри цикла проходится по каждому элементу массива
 И проверяет какой тип данных содержит свойство age, если тип данных NaN,
 тогда добавляет данному объекту свойство unknownAge: true
 2. На основании нового массива, создайте новую функцию, которая вернет новый массив
  содержащий все объекты содержащие свойство unknownAge: true
 */

let array = Array.from({length: 35},
    (value, index) => (index % 2 ? {age: index + 2} : {age: NaN}),
);


function solution(arr) {
    for (let i = 0; i < arr.length; i ++) {
        let counter = 0;
        for (let key in arr[i]) {
            if (key === 'age' && !(arr[i][key])) {
                arr[i]['unknownAge'] = true
            }
            counter ++;
        }
    }
    return arr;
}

newArr = solution(array);
console.log(newArr);

function testUnknownAge(arr) {
    let newArr = [];
    let j = 0;
    for (let i = 0; i < arr.length; i ++) {
        let counter = 0;
        for (let key in arr[i]) {
            if (key === 'unknownAge') {
                newArr[j] = arr[i];
                j ++;
            }
            counter ++;
        }
    }
    return newArr;

}

console.log(testUnknownAge(newArr));