/*
Напишите функцию которая будет возвращать объект
с свойством name, а значением будет первый аргумент функции
*/

function returnObject(inputName) {
    var myObject = { name: inputName};
    return myObject;
}

var someObject = returnObject('Oleg');
console.log(someObject);


/*
Функция будет принимать 1 аргумент - ОБЪЕКТ у которого
будет свойство name
и возвращать новый объект изменяя свойство name
в большой регистр
*/

function toUpperCase(obj) {
    var newObj = { name: obj.name.toUpperCase()};
    return newObj;
}
const objectWithName = { name: 'privet kak dela' };
console.log(toUpperCase(objectWithName));

/*
1. Напишите функцию которая принимает в
качестве аргумента массив и элемент массива
и добавляет элемент в конец массива
*/

let arr = [];
arr[0] = 'privet';
arr[1] = 'poka';
arr[2] = 'zdrastvuite';

function addToArray(arrParam, newElem) {
    // без "естественных" способов добавления
    arrParam[arrParam.length] = newElem;

}

addToArray(arr, 34);
addToArray(arr, 55);
console.log(arr);

/*
2. Напишите функцию которая получает 3 параметра
и возвращает объект типа:
    {
      argument1: param1,
      argument2: param2,
      argument3: param3,
    }
*/

function simpleObjectGenerator(one, two, three) {
    var object = {
        argument1: one,
        argument2: two,
        argument3: three,
    };
    return object;
}

// console.log(simpleObjectGenerator('protocol', { url: '22' }, 8000));

/* {
   argument1:'protocol',
   argument2:{url:'22'},
   argument3:8000
}*/

var userNames = [{ name: 'Egor' }, { name: 'Katya' }, { name: 'Vera' }];

console.log(simpleObjectGenerator(77, userNames, 'privet kak dela chto novogo'.toUpperCase()));
/* {
 argument1:'77',
 argument2:[{ name: 'Egor' }, { name: 'Katya' }, { name: 'Vera' }],
 argument3:PRIVET KAK DELA CHTO NOVOGO
 }*/

///////////////////////////////////////////////
/*
3.  Напишите функцию которая принимает 3 аргумента,
     третий аргумент - это объект.
    Функция создает новый объект и добавляет ключ
    это первый аргумент, а значение - второй аргумент
    Проверяет если есть свойство name в переданном объекте,
    тогда добавляет данное свойство и возвращает новый объект
*/
var myName = { name: 'Oleg' };

function addNameToUser(newKey, newValue, userName) {
    var newObj = {
        newKey: newValue
    };
    if (userName.name) {
        newObj.name = userName.name;
        return newObj;
    } else {
        console.log('свойства name нет')
    }
}

console.log(addNameToUser('family', '%Lustenko%', myName));
console.log(addNameToUser('name', 'privet Pasha', {}));
/* {name:'Oleg', family:'%Lustenko%'} */

console.log(myName);
/* {name:'Oleg'} */

/////////////////////////////////

/*
-> @@ SUPER !
  Напишите функцию, которая будет
   возвращать 'Fizz' если передаваемый параметр кратен 3,
   'Buzz', если передаваемый параметр кратен 5,
   'FizzBuzz' - если параметер кратен 3 и 5
   Если передаваемое число не кратно 3 или 5, то вернуть указанный параметр
*/

// function fizzBuzz(num) {
//     if (!(num % 3)) {
//         if (! (num % 5)) {
//             console.log('FizzBuzz')
//         } else {
//             console.log('Fizz')
//         }
//     } else if (!(num % 5)) {
//         console.log('Buzz')
//     } else {
//         console.log(num)
//     }
// }

function fizzBuzz(num) {
    if (num % 3) {
        if (num % 5) {
            return num;
        } else {
            return 'Buzz';
        }
    } else {
        if (num % 5) {
            return 'Fizz';
        } else {
            return 'FizzBuzz';
        }
    }
}

console.log(fizzBuzz(1)); // 1
console.log(fizzBuzz(2)); // 2
console.log(fizzBuzz(3)); // 'Fizz'
console.log(fizzBuzz(5)); // 'Buzz'
// ...
console.log(fizzBuzz(15)); // 'FizzBuzz'
console.log(fizzBuzz(21)); // 'Fizz'

/* -> @@ SUPER 2
Напишите функцию, которая будет принимать 4 аргумента,
последний всегда функция.
Добавьте первые 3 аргумента в массив и вызовите переданную функцию с данным массивом
*/

function super2(arg1, arg2, arg3, callback) {
    var myArray = [arg1, arg2, arg3];
    console.log(callback(myArray));
}
function myFun(something) {
    x = typeof something;
    return x;
}

super2( 1, 2, ' привет', myFun);
