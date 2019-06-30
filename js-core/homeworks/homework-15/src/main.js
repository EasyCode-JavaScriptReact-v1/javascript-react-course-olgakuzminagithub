/*
TASK 0
Проверьте что строка содержит все символы от "a" до "z"
  solution("wyyga") // false
  solution("qwertyuioplkjhgfdsazxcvbnm") // true
  solution("ejuxggfsts") // false
  solution("qpwoeirutyalskdjfhgmznxbcv") // true
  solution("qqqqqqqqpwoeirutyallskkdjfhgmmznxbcv") // true
  solution("0123456789abcdefghijklmnop") // false
*/

/*Мне такое решение самой не нравиться, но лучше я не придумала((( */

const solution = str => {
        var newStr = str.replace(/a/, '$').replace(/b/, '$').replace(/c/, '$').replace(/d/, '$')
            .replace(/e/, '$').replace(/f/, '$').replace(/g/, '$').replace(/h/, '$')
            .replace(/i/, '$').replace(/j/, '$').replace(/k/, '$').replace(/l/, '$')
            .replace(/m/, '$').replace(/n/, '$').replace(/o/, '$').replace(/p/, '$')
            .replace(/q/, '$').replace(/r/, '$').replace(/s/, '$').replace(/t/, '$')
            .replace(/u/, '$').replace(/v/, '$').replace(/w/, '$').replace(/x/, '$')
            .replace(/y/, '$').replace(/z/, '$');
        var newArr = newStr.split('');
        var count = 0;
        newArr.forEach(elem => {
            if (elem === '$') {
                count ++;
            }
        });
        if (count === 26) {
            console.log(true)
        } else {
            console.log(false)
        }

};

solution("wyyga"); //false
solution("qwertyuioplkjhgfdsazxcvbnm");//true
solution("0123456789abcdefghijklmnop"); //false
solution("qpwoeirutyalskdjfhgmznxbcv");// true
solution("qqqqqqqqpwoeirutyallskkdjfhgmmznxbcv");// true
solution("0123456789abcdefghijklmnop");// false

/*
 2. Напишите функция которая преобразовывает / открывает
 скобки всех вложенных внутри массивов
 Необходимо реализовать рекурсивный фызов функции.
 Функция должна открывать любое количество
 внутренних массивов и объектов
 example:
 [[1,2],[3,[4]],5, 10] => [1, 2, 3, 4, 5, 10]
 [25, 10, [10, [15]]] => [25, 10, 10, 15]
 [1, [2, [ {a: "b", c: 'd' }, { c: [1, 2, 5] } ] ] ] => [1, 2, {a: "b"}]
 */

//#1 arr == [...] flattenedArray = [1] + flatten = [2, [{a: "b"}, { c: 'd' }]]
//#2 arr == [2, [ {a: "b"}, { c: 'd' } ] ] flattenedArray = [2] + flatten == [{a: "b"}, { c: 'd' }]
//#3 arr == [ {a: "b"}, { c: 'd' } ] flattenedArray = [{a: "b"}, { c: 'd' }]
//#
const flatten = arr => {

};


/* Рекурсия не получиласьБ решение со сплайсами у меня в 5 хомверке*/


/*
Виртуализировать таблицу, сделать рендер всей
таблицы через JavaScript.
Второй макет.
https://github.com/aleksandra-maslennikova/telephone-book/blob/master/index.html
Выглядеть должно так же: https://aleksandra-maslennikova.github.io/telephone-book/index.html
*/

const users = [
    {
        name: 'Иван',
        lastName: 'Петров',
        email: 'ivanpetrov@gmail.com'
    },
    {
        name: 'Сергей',
        lastName:'Сергеев',
        email: 'sergeysergeev@gmail.com'
    },
    {
        name: 'Иван',
        lastName: 'Петров',
        email: 'ivanpetrov@gmail.com'
    },
    {
        name: 'Александр',
        lastName: 'Александров',
        email: 'alex@gmail.com'
    },
    {
        name: 'Алекс',
        lastName: 'Смирнов',
        email: 'smirnov@gmail.com'
    },
];
const colums = ['Name', 'LastName', 'Email'];
const app  = {
    users,
    colums,
    newEl(elName) {
        return document.createElement(elName);
    },
    render() {
        const main = this.newEl('main');
        const table = this.newEl('table');
        const tr = this.newEl('tr');
        colums.forEach( columName => {
            const th = this.newEl('th');
            th.textContent = columName;
            tr.appendChild(th);

        });
        table.appendChild(tr);
        users.forEach(user => {
            const tr = this.newEl('tr');
            const td1 = this.newEl('td');
            td1.textContent = user.name;
            const td2 = this.newEl('td');
            td2.textContent = user.lastName;
            const td3 = this.newEl('td');
            td3.textContent = user.lastName;
            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);
            table.appendChild(tr);
        });
        main.appendChild(table);
        document.body.appendChild(main);
    }
};

app.render();