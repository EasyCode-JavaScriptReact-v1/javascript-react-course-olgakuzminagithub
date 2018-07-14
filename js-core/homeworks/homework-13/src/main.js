/*
 * TASK - 2
 *
 * Перепишите Homework 12 - TASK 1 используя class
 *
 * */

/*
 * TASK ! ! !
 * Сделайте пожалуйста с теми навыками которые у вас есть ТЕЛЕФОННЫЙ СПРАВОЧНИК
 *
 * Task 0
 *
 * Создайте функцию конструктор Http, которая будет иметь 2 метода
 *
 * createServer() - принимает один аргумент функцию с двумя параметрами ctx и next
 * ctx: Object {
 *   req: Object
 *     PORT: number
 *     url: string
 *   res: Object
 *     status: number,
 *     message: string,
 *     header: Object {
 *       content-type:application/json
 *       }
 *   }
 * next: Function
 *
 *
 * при вызове listen(PORT, host) - в консоле должна отобразится надпись
 * "Server running on https://host:port"
 * и вызваться переданная в createServer функция
 *
 *
 * методы нужно вызывать через chain
 * после вызова метода listen() - должна вызываться переданная в createServer
 * первая функция и возвращать объект и функцию
 *
 * */

let ctx = {
    req: {
        PORT: 2,
        url: 'string',
    },
    res: {
        status: 1,
        massage: 'string',
        header: {
            'content-type': 'application/json'
        }
    }
};

let next  = function() {};

class Http {
    createServer (fn) {
        this.someFunction = fn;
        return this;
    };
    listen (PORT, host) {
        if (PORT === undefined && host === undefined) {
            this.someFunction(ctx);
            return this;

        } else {
            this.someFunction(ctx);
            console.log("Server running on https://" + host + ":"+ PORT);
        }
    };
}

const server = new Http().createServer(function(ctx, next) {
    console.log(ctx);
}).listen(300, 'localhost');


// TASK 1
// Создать класс Human, у которого будут свойства обычного человека:
// имя, возраст, пол, рост, вес.
// Используя прототипное наследование создать дочерние классы Worker
// (дописать в них поля места работы, зарплата, метод "работать")
// и Student (дописать поля места учебы, стипендией, метод "смотреть сериалы")
//
// Создать несколько экземпляров классов Worker и Student, вывести их в консоль.
// Убедиться что они имеют поля родительского класса Human

class Human {
    constructor (name, age) {
        this.name = name;
        this.age = age;
    }
}
class Worker extends Human {
    constructor (name, age, salary, workPlace) {
        super(name, age);
        this.salary = salary;
        this.workPlace = workPlace;
    }
    toWork() {
        console.log('работать')

    };
}

class Student extends Human {
    constructor (name, age, grants, univercity) {
        super(name, age);
        this.grants = grants;
        this.univercity = univercity;
    }
    watchSeries() {
        console.log("смотреть сериалы")
    }
}

let Olga = new Worker('Olga',  29,  500, 'Vectaury');
console.log(Olga);
Olga.toWork();

let Max = new Student('Max', 18, 100, 'KHURE');
console.log(Max);
Max.watchSeries();


/*
 * Вы должны создать имитацию медленной базы данных.
 * TASK - 1 Сделайте Класс Database с методами
 *
 *  query
 *
 *  При запуске метода query запустите внутренний таймаут, который будет длиться 5 секунд.
 *  При поступлении еще 1 запроса(если вызвать метод еще раз),
 *  таймаут должен стартануть сначала
 *  и ответ должен прийти снова через 5 секунд
 *
 * */

class DataBase {
    query() {
        if(this.timer) {
            this.counter = 5;
            clearImmediate(this.interval);
            clearTimeout(this.timer);
        }
        this.counter = 5;
        this.interval = setInterval(function () {
            console.log(this.counter--);
            if (this.counter === 0) {
                clearInterval(this.interval)
            }
        }, 1000);
        this.timer = setTimeout(function () {
            console.log('The web server is down');
            this.timer = null;
        }, 5000)
    }
}

const dataBase = new DataBase();
dataBase.query();
dataBase.query();
dataBase.query();
// // 5
// // 4
// // 3
// // 2
// // 1
// // console.log('The web server is down') https://www.youtube.com/watch?v=W8_Kfjo3VjU

// dataBase.query();
// // 5
// // 4
// dataBase.query();
// // 5
// // 4
// // 3
// // 2
// dataBase.query();
// 5
// 4
// 3
// 2
// 1
// console.log('The web server is down')