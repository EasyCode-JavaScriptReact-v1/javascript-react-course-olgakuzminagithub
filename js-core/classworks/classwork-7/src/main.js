/* задание 1 */

// function helloWorldClosure() {
//     let str = ' ';
//     return function (value) {
//         return str += value + ' ';
//     }
// }
// const helloWorld = helloWorldClosure();
//
// console.log(helloWorld('hello'));
// console.log(helloWorld('world'));
// console.log(helloWorld('world'));


/* задание 2
 *  сложить два числа
 *
 *  */
//  function plusSomething(number1) {
//      return function (number2) {
//          return number1 + number2;
//
//      }
//  }
//
// const  numberTwenty = plusSomething(10);
// console.log(numberTwenty(20));


/* задание 3
 * напишите функцию кторая будет возвращать объект
 * и у этого объекта будет свойство  кторое будет равняться функции
 * add{}
 * при выхове этого свойства отобразите в консоле 1
 * */


function createCounter() {
    let myObject = {};
    let count = 0;
    function add() {
        return count ++;
    }
    myObject.add = add;
    return myObject;
}

const myCounter = createCounter();
console.log(myCounter.add());
console.log(myCounter.add());
console.log(myCounter.add());


