/*
Приложение телефонный справочник

Создайте функцию конструктор.
У данной функции должны быть методы:

1 Преобразование телефонного номера из формата 0993378130 в (099) 33-78-130
2 Проверка, что телефонный номер содержит только числа
3 Добавление пользователей в справочник
4 Удаление пользователя по имени, фамилии
5 Поиск пользователей по имени - отображает всех пользователей с одинаковым именем
6 Изменение имени, фамилии, телефонного номера у выбраного пользователя ( здесь должно быть реализовано через this )
7 Сортировка пользователей по номеру телефона, фамилии, имени и тд, по любому из свойств пользователя
8 Фильтр по указанному свойству

*/


class PhoneApp {
    constructor() {
        this.dataBase = [
            {firstName:'Оля', secondName: 'Кузьмина', phone:'0661234567'},
            {firstName:'Катя', secondName: 'Иванова', phone:'0991234567'},
            {firstName:'Оля', secondName: 'Петрова', phone:'0631234567'},
            {firstName:'Марина', secondName: 'Сидорова',phone:'0951234567'}
        ]
    }
    /* 1. Преобразование телефонного номера из формата 0993378130 в (099) 33-78-130 */
    conversionPhoneFormat (phoneNumber) {
        return phoneNumber.replace(/^([0-9]{3})([0-9]{2})([0-9]{2})([0-9]{3})$/, '($1) $2-$3-$4');

    }
    /* 2. Проверка, что телефонный номер содержит только числа */
    chekNumber (phoneNumber) {
        return +phoneNumber ? true : false;
    };
    /* 3. Добавление пользователей в справочник */
    addUser (newUser) {
        this.dataBase.push(newUser);

    };
    /* 4. Удаление пользователя по имени, фамилии */
    deleteUser (name) {
        this.dataBase = this.dataBase.filter(function (elem) {
            return elem.firstName !== name;
        });
    };
    /* 5. Поиск пользователей по имени - отображает всех пользователей с одинаковым именем */
    searchByName (name) {
        return this.dataBase.filter(function (elem) {
            return elem.firstName === name;
        });
    };
    /* 6. Изменение имени, фамилии, телефонного номера у выбраного пользователя*/
    changeUser (id, newFirstName, newSecondName, newPhoneNumber) {
        this.dataBase[id].firstName = newFirstName;
        this.dataBase[id].secondName = newSecondName;
        this.dataBase[id].phone = newPhoneNumber;
    };
    /* 7. Сортировка пользователей по номеру телефона, фамилии, имени и тд, по любому из свойств пользователя */
    sortByParameter (param) {
        this.dataBase.sort(function (a, b) {
            if (a[param] > b[param]) {
                return 1
            }
            if (a[param] < b[param]) {
                return -1
            }
            return 0
        });
    };
}

const myApp = new PhoneApp();
console.log(myApp.conversionPhoneFormat('0661234567'));
console.log(myApp.chekNumber('0661234567'));
myApp.addUser({firstName: 'Макс', secondName: 'Пейн', phone: '0662345678'});
console.log(myApp);
myApp.deleteUser('Катя');
console.log(myApp);
console.log(myApp.searchByName('Оля'));
myApp.changeUser(3, 'Артем', 'Жук', '0669876543');
console.log(myApp);
myApp.sortByParameter('firstName');
console.log(myApp);





