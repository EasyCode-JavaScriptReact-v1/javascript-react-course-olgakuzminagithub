//'use strict';

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

var ctx = {
    req: {},
    PORT: 2,
    url: 'string',
    res: {},
    status: 1,
    massage: 'string',
    header: {
        ntenttype: 'application/json'
    }
};

var next  = function() {};

function Http() { }
Http.prototype.createServer = function(fn) {
    this.someFunction = fn;
    return this;
};

Http.prototype.listen = function(PORT, host) {
    if (PORT === undefined && host === undefined) {
        this.someFunction(ctx);
        return this;

    } else {
        this.someFunction(ctx);
        console.log("Server running on https://" + host + ":"+ PORT);
    }
};

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

function Human(name, age) {
   this.name = name;
   this.age = age;
};

function Worker(name, age, salary, workPlace) {
    Human.apply(this, arguments);
    this.salary = salary;
    this.workPlace = workPlace;
};

Worker.prototype = Object.create(Human.prototype);

Worker.prototype.toWork = function () {
    console.log('работать')

};

function Student(name, age, grants, univercity) {
    Human.apply(this, arguments);
    this.grants = grants;
    this.univercity = univercity;

}
Student.prototype = Object.create(Human.prototype);

Student.prototype.watchSeries = function () {
    console.log('смотерть сериалы')
};

var Olga = new Worker('Olga',  29,  500, 'Vectaury');
console.log(Olga);
Olga.toWork();

var Max = new Student('Max', 18, 100, 'KHURE');
console.log(Max);
Max.watchSeries();

