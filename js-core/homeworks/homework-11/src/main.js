/*
 *
 * Сделайте 4 объекта - не усложняйте, просто наследование
 * через __proto__
 - Пользователь
 - Верифицированный пользователь(админ)
 - Гость
 - База данных
 - База хранит информацию о пользователях
 - Пользователи знают мыло админа
 - админ знает пароль от базы данных
 - Гости могут зарегистрироваться в базе данных
 *
 * */


/* *
 * Я не совсем поняла во эти два задания
 *  1. Пользователи знают мыло админа
 *  2. админ знает пароль от базы данных
 * Это простое присвоение? Или здесь надо было использовать наследование?
 *
 * * */


var user  = {
    userName: 'olga'
};

var admin = {
    __proto__: user,
    verification: true,
    adminEmail: 'mymail2@gmail.com'
};

var database  = {
    users: [user],
    databasePassword: 456
};

var guest = {
    checkIn: function () {
        database.users.push(guest)
    }
};

user.adminEmail = admin.adminEmail;
admin.databasePassword = database.databasePassword;


console.log('Пользователь:', user);
console.log('Админ:', admin);
guest.checkIn();
console.log('База данных:', database);
