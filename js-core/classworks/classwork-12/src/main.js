/* Задание 1
* сделайте чловека
* сделайте програмиста
* сделайте васю снчало человеком
* а потмо научите его вызывать метод createHelloWorld
*
*
* */

//
// function Human(name) {
//     this.name = name;
// }
//
// Human.prototype.drinkCoffe = function () {
//     console.log('drink coffee')
// };
//
// function Programmer(name) {
//     Human.call(this, name)
// }
// Programmer.prototype = Object.create(Human.prototype);
// Programmer.prototype.helloWorld = function () {
//     console.log('Hello world')
//
// };
//
//
// var Vasya = new Programmer('Vasya');
//
// Vasya.drinkCoffe();
// Vasya.helloWorld();




/* Задание 2
имя пользователя явяеться публичным
пароль защищенным
кэш серетный
у вас есть метод showUserCash
привызове showUserCashБ в кторый вы должны передать правильны пароль
вы узнаете сколько у вас наличных
если не правильный  ошибка
метод addCash  увеличивает кеш на преданный аргумент
* */

function AuthorizedUser(name, password, cash) {
    this.name = name;
    myPassword = password;
    myCash = cash;
    this.showUserCash = function (passwordForIf) {
        if (myPassword !== passwordForIf) {
            console.log('error 505');
        } else {
            console.log(myCash)
         }
     };
    this.addCash = function (cashtoAdd, passwordForIf) {
        if (this._isPasswordValid(passwordForIf, myPassword)) {
            myCash += cashtoAdd;
        }
    }
}

AuthorizedUser.prototype._isPasswordValid = function (passwordForIf, myPassword) {
    if (myPassword !== passwordForIf) {
        console.log('error 505');
    }
    return myPassword === passwordForIf
};


var me = new AuthorizedUser('me', 'secret', 3500);
console.log(me);
me.showUserCash('ohohoho');
me.showUserCash('secret');
me.addCash(7000, 'ohohoho');
me.addCash(7000, 'secret');
me.showUserCash('secret');
me._isPasswordValid('secret');











