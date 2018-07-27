/*
TASK 0. Найдите числа которые повторяются нечетное количество раз
в массиве
  solution([12, 23, 34, 12, 12, 23, 12, 45]) -> [34 45]
  solution([4, 4, 100, 5000, 4, 4, 4, 4, 4, 100, 100,]) -> [4 100 5000]
  solution([3, 3, 4, 6, 4, 5, 9, 9, 21, 9]) -> [6 5 9 21]
  solution([4, 8, 15, 16, 23, 42, 4, 15, 42, 42]) -> [8 16 23 42]
  solution([2, 2, 44, 44]) => []
*/


const someWebpackModule = `module.exports = {
    context: %%HOMEDIR%,
    entry: {
        app: "%%HOMEDIR%%/%%APP_DIR%%/%%APPNAME%%.js"
    },
    output: {
        path: %%HOMEDIR%% + '/app',
        filename: "dist/[%%APPNAME%%].js",
        library: '[%%APPNAME%%]'
    }
   }`;

/* TASK - 1
Распарсите строку и замените
 %%HOMEDIR%% -> './JavaScript-Basic'
 %%APP_DIR%% -> 'fixtures/src'
 %%APPNAME%% -> 'app.js'
 Вам нужно написать функцию которая в зависимости от разных параметров
 будет изменять заданные значения на необходимые вам
 Сделайте несколько вызовов данной функции
 *
 * */




/*
 TASK - 2
 Сделайте разметку как скриншоте используя HTML
 вам необходимо использовать тэги(!)
*/




/*
TASK 3
 JavaScript =>
  Создать объект с методами, которые будут динамически генерировать DOM
  Это будет тест, который мы будем разрабатывать в следующих заданиях.
  Сейчас вам нужно только динамически создать html,
  методы должны храниться в одном объекте.
  Изначально на странице должен быть только <body>,
  вызывая методы объекта нужно создать dom-элементы
*/

// app.render();

class App {
    constructor () {
        this.title = 'Тест по программированию';
        this.labelContent = ['Вопрос №1', 'Вопрос №2', 'Вопрос №3'];
        this.inputContent = [
            ['Вариант ответа №1', 'Вариант ответа №2', 'Вариант ответа №3'],
            ['Вариант ответа №1', 'Вариант ответа №2', 'Вариант ответа №3'],
            ['Вариант ответа №1', 'Вариант ответа №2', 'Вариант ответа №3'],
        ]
    }
    render() {
        const div = document.createElement('div');
        div.setAttribute('class', 'test');
        const h1 = document.createElement('h1');
        h1.textContent = this.title;
        div.appendChild(h1);
        const form = document.createElement('form');
        div.appendChild(form);
        for (let i = 0; i < this.labelContent.length; i++) {
            const fieldset = document.createElement('fieldset');
            const label = document.createElement('label');
            label.textContent = this.labelContent[i];
            fieldset.appendChild(label);
            for ( let j = 0; j < this.inputContent[i].length; j ++) {
                const input = document.createElement('input');
                input.textContent = this.inputContent[i][j];
                input.setAttribute('type', 'checkbox');
                fieldset.appendChild(input);
            }
            form.appendChild(fieldset);
        }
        document.body.appendChild(div);
    }

}

const app = new App();
app.render();