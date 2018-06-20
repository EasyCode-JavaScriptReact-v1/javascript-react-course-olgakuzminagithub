/* 2 варианта инициализации функции */

/* Function expression - выражение */
// function sum(a,b) {
//     return a + b;
// }
/* Function declaration - выражение */
// const add  = function (a,b) {
//     return a + b;
// };
/*
1 фаза инициализации переменных и функций
2 запуск программы
*/


/* Задание 1 */

// function myFun(arr) {
//     if (Array.isArray(arr) && typeof arr[0] === "number") {
//         console.log('winer')
//     } else if ((typeof arr === "object" || typeof arr === "string") && !(Array.isArray(arr))) {
//         console.log(arr)
//     } else {
//         console.log(false)
//     }
// }
// myFun([1, 1, 2]);
// myFun(['оля', 1, 2]);
// myFun('оля');
// myFun({name: 'оля'});


// let number  = 10;
// console.log(number += 1);
// console.log(++ number);
// console.log(number ++);

/* Задание 2 */

// for (let i = 1; i <= 10; i++) {
//     if ((i%2)) {
//         console.log(i);
//     }
// }
// let number = 0;
// while (number < 10) {
//     console.log(number);
//     number ++;
// }

const array = [
   'книга 1',
    'книга 2',
    'книга 3',
    'книга 4',
    'книга 5',
    'книга 6',
    'книга 7',
    'книга 8',
];
 for (let i = 0; i < array.length; i++) {
     console.log( i+1, array[i]);
 }