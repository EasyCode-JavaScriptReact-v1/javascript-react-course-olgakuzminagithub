/* Задание 1 */

// function Database(databaseName) {
//     this.detabaseName = databaseName;
// };
//
// let mySQL = new Database('MySQL');


/* Задание 2 */

// function CreateObgect(arrayName, objectName, stringName) {
//         this.myArray = arrayName;
//         this.cars = objectName;
//         this.name = stringName;
// }
//
//
// let myObject = new CreateObgect([1,2,3], {}, 'строка');
// console.log(myObject);

/* Задание 3 */

// function CreateObgect(...args) {
//     for( let i = 0; i < args.length; i++) {
//         this[`${i}`] = args[i];
//     }
// }
//
// let myObject = new CreateObgect([1,2,3], {}, 'строка');
// console.log(myObject);

// function CreateObgect2(arg1, arg2, arg3) {
//    if (arg1) {
//        this.ar1 = arg1
//    }
//     if (arg2) {
//        this.ar2 = arg2
//     }
//     if (arg3) {
//        this.ar3 = arg3
//     }
// }
//
// let myObject2 = new CreateObgect2([1,2,3], {});
// console.log(myObject2);


// function Counter() {
//     let count = 0;
//     this.counter = function(){
//         count++;
//     }
// }
//
// var myCounter = new Counter();
// myCounter.counter();

// function Database(databaseName) {
//     this.detabaseName = databaseName;
// };
//
// Database.prototype.registerUser = function (name, password) {
//     this.user = {
//         name: name,
//         password: password;
//     };
// };
//
// let mySQL = new Database('MySQL');

/* Задание 4 */

function Transport(color, name, doors) {
    this.color = color;
    this.name = name;
    this.doors = doors;
    this.weels = 4;
}

var myCar = new Transport('red', 'kia', 4);

 Transport.prototype.beepBeep = function () {
     console.log('beepBeep');
 };

console.log(myCar);
myCar.beepBeep();


function Bus() {

}

Bus.prototype =  Object.create(Transport.prototype);

Bus.prototype.price = function () {
    console.log('price 3 uan')
};


