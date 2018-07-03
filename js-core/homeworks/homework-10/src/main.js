/*
 *
 * Задача 0
 *
 * Что вернет выражение z(x) ?
 * Напишите ответ своими словами как вы понимаете
 * В консоле не смотрите, сначала напишите, после проверьте себя
 *
 * */

let y = 5;
let x = () => y;

let z = t => {
    let y = 5;
    t();
};
console.log(y); // здесь будет 5

console.log(z(x)); // здесь будет 5
// в z передаем функцию, кторая возвращает y,
// ,  в z вызываем фнукцию, кторая возбмет локальную переменную y и вернет 5

/*
 *
 * TASK 1
 * Создайте функцию которая будет превращать
 * передаваемую строку в html тэг
 *
 *
 * */

let $ = function(teg) {
    return `<${teg}></${teg}>`
};

let createBODY = $('body');
let createDIV = $('div');
console.log(createBODY); // <body></body>
console.log(createDIV); // <div></div>

/*
 *
 * TASK 2
 *
 * Создайте объект к которому можно будет применить любое число вызовов
  // obj.method().method().method()
  ---------------
 *  Передаваемое значение должно возвращаться в виде html тэгов (TASK 1)
 *  Передаваемые аргументы должны быть только в виде строки
 * */


var ezjQuery = {
    str: ' ',
    add: function(teg, str) {
        let middle = this.str.length/2;
        if (str) {
            this.str = this.str.substring(0,middle-2) + `${str}` + this.str.substring(middle-2, middle*2);
        } else {
            this.str = this.str.substring(0,middle-1) + `<${teg}></${teg}>` + this.str.substring(middle-1, middle*2);
        }
        return this;
    },
    render: function() {
        return this.str;
    },
    clear: function () {
        this.str = ' ';
    }
};
ezjQuery.add('body').add('div').add('h1');
console.log(ezjQuery.render()); // <body></body><div></div><h1></h1>
ezjQuery.clear();

/*
 *
 * TASK 3
 * Доработйте метод add чтобы на каждом вызове следующий
 * тэг помещался внутри предыдущего !
 ---
 * И добавьте объекту ezjQuery метод render, который будет возвращать
 * сгенерированную строку
 -----
 * Методу add - второй параметр, который будет размещать
 * информацию внутри тэга
 *
 */

// example
var helloList = ezjQuery.add('body').add('div').add('ul').add('li', 'Hello').render();
console.log(helloList); // <body><div><ul><li>Hello</li></ul></div></body>
ezjQuery.clear();

var bodyDiv = ezjQuery.add('body').add('div').render();
console.log(bodyDiv); //<body><div></div></body>

document.write(helloList);