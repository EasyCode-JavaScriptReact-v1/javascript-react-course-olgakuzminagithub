/* Задание 1*/


// let user = {
//     name: 'Oleg',
//     birthday: 'once',
//     friends: [
//         { name: 'Даша', birthday: '25.11.1991' },
//         { name: 'Саша', birthday: undefined },
//         { name: 'Егор', birthday: '25.10.1992' },
//         { name: 'Дима', birthday: '25.10.1985' }
//     ],
// };
//
//
// function showNameAndNameFriends(obj) {
//  console.log(obj.name);
//  for (let i = 0; i < obj.friends.length; i ++) {
//   let elem = obj.friends[i];
//   if (elem.birthday) {
//    console.log(elem.name)
//   }
//  }
// }
//
// showNameAndNameFriends(user);

/* Задание 2
* Напишите функцию, которая принимает 2 аргумента
1 аргумент МАССИВ ИЛИ ОБЪЕКТ
2 аргумент число

Если у нас объект, тогда, найти в этом объекте массив
И найти число, которое больше переданного второго параметра

Если массив, тогда найти в этом массиве,
число больше второго аргумента
отобразить данное число и завершить циклы */

// const obj = {
//     name: 'qwerty',
//     qwerty: [1, 2, 3, 4, 5],
//     qwerty2: [100, 200, 300, 400, 500]
// };
// const arr = [1, 2, 500, 310, 20, 75];
//
// function  moreSecondElement(data, number) {
//     if(Array.isArray(data)) {
//        helpMe(data);
//     }
//     if (typeof data === 'object' && !(Array.isArray(data))) {
//         for (let key in data) {
//          if (Array.isArray(data[key])) {
//              let dataElem = data[key];
//              helpMe(dataElem);
//             }
//         }
//     }
//     function helpMe(data) {
//         for ( let i = 0; i < data.length; i ++) {
//             let elem = data[i];
//             if (elem > number) {
//                 console.log(elem);
//                 break;
//             }
//         }
//     }
//
// }
//
// moreSecondElement(arr, 2);
// moreSecondElement(obj, 2);

/* Задание 3*/

const myString = 'JavaScript is Awesome';

// let arr = myString.split('').reverse;

console.log(myString.split('').reverse().join(''));



