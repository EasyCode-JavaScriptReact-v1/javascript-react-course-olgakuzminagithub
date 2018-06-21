/* Вычислить факториал  - подсмотерла */

function factorial(n) {
    return (n !== 1) ? n * factorial(n - 1) : 1;
}

console.log(factorial(5));

/* Вычислить сумму чисел до данного с использованием формулы для суммы арифметической прогресии */

function sumTo(n) {
  let sum = (1 + n)/2*n;
  return sum;

}

console.log(sumTo(100)); // 5050


/* Сумма через замыкание */

function sum (x) {
    let sum = 0;
    return function (y) {
        return sum = x + y;
    }
}

console.log(sum(1)(2));
console.log(sum(7)(0));


/* Функция - строковый буфер (метод clear подсмотрела) */

function makeBuffer() {
    let str = ' ';
    function buffer(x) {
        if (x === undefined) {
            return str;
        } else {
            str += x;
        }
    }
    buffer.clear = function clear() {
        return str = ' ';
    };
    return buffer;

}

let buffer = makeBuffer();

// добавить значения к буферу
buffer('Замыкания');
buffer(' Использовать');
buffer(' Нужно!');

// получить текущее значение
console.log(buffer()); // Замыкания Использовать Нужно!

buffer.clear();
console.log(buffer());

/* Сортировка */

var users = [{
    name: "Вася",
    surname: 'Иванов',
    age: 20
}, {
    name: "Петя",
    surname: 'Чапаев',
    age: 25
}, {
    name: "Маша",
    surname: 'Медведева',
    age: 18
}];

function byField(field) {
    return function (a, b) {
        return a[field] > b[field] ? 1 : -1;
    }
}
users.sort(byField('name'));
users.forEach(function(user) {
    console.log( user.name );
});
users.sort(byField('age'));
users.forEach(function(user) {
    console.log( user.name );
});


/* Фильтрация через функцию */


var arr = [1, 2, 3, 4, 5, 6, 7];


function filter(arr, func) {
    let newArr = [];
    arr.forEach(function(value) {
        if (func(value)) {
            newArr.push(value);
        }
    });
    return newArr;
}

function inBetween(a, b) {
    return function(elem) {
        if (elem >= a && elem <= b) {
            return true;
        }
    }
}
/* Подсмотрела, про IndexOf не догодалась*/

function inArray(array) {
    return function (elem) {
        return array.indexOf(elem) !== -1
    }
}

console.log(filter(arr, function(a) {
    return a % 2 === 0
})); // 2,4,6

console.log( filter(arr, inBetween(3, 6)) ); // 3,4,5,6
console.log( filter(arr, inArray([1, 2, 10])) ); // 1,2

/* Аримя функций */

function makeArmy() {
    let shooters = [];
    for (let i = 0; i < 10; i++) {
        let shooter = function() { // функция-стрелок
            console.log( i ); // выводит свой номер
        };
        shooters.push(shooter);
    }

    return shooters;
}

let army = makeArmy();

army[0]();
army[1]();
army[2]();
army[3]();
army[9]();
