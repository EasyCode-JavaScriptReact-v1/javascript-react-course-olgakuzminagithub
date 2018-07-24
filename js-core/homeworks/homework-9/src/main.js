
/* ---------------------- */
/*  ЗАДАНИЯ ИЗ HOMEWORK 5 */
/* ---------------------- */
/*
 1. Переместите 0 в конец массива, остальные числа должны остаться
 неизменными
 // concat
 example:
 [1,false,2,0,3,null,0,4,0,25] => [1, false, 2, 3, null, 4, 25, 0, 0, 0]
 [ 'a', 0, 0, 'b', null, 'c', 'd', 0, 1, false, 0, 1, 0, 3, [], 0, 1, 9, 0, 0, {}, 0, 0, 9 ] => ["a","b",null,"c","d",1,false,1,3,[],1,9,{},9,0,0,0,0,0,0,0,0,0,0]
 [ 0, 1, null, 2, false, 1, 0 ] => [1,null,2,false,1,0,0]
 */

let arr1 = [1, false, 2, 0, 3, null, 0, 4, 0, 25];
let arr2 = [
    'a',
    0,
    0,
    'b',
    null,
    'c',
    'd',
    0,
    1,
    false,
    0,
    1,
    0,
    3,
    [],
    0,
    1,
    9,
    0,
    0,
    {},
    0,
    0,
    9
];

const moveZeroToEnd = arr => {
    const arr1 =[];
    const arr2 =[];
    arr.forEach(elem => {
        if (elem === 0) {
            arr2.push(elem);
        } else  {
            arr1.push(elem);
        }
    });
    return arr1.concat(arr2);
};

console.log(moveZeroToEnd(arr1));
console.log(moveZeroToEnd(arr2));

/*
 2. Верните сумму двух найменьших чисел в массиве
 [10,20,30,1,31,11,10] => 11
 [-1,0,25] => -1
 [-4,-10,25,10] => -14
 [0,200,10,25,15] => 10
 */

const sumTwoMinimalNumber = (arr) => {
    let minimalNumber = Math.min.apply(null, arr);
    let sum =+ minimalNumber;
    let indexMinimalNumber = arr.indexOf(minimalNumber);
    arr.splice(indexMinimalNumber, 1);
    minimalNumber = Math.min.apply(null, arr);
    sum = sum + minimalNumber;
    return sum;
};

console.log(sumTwoMinimalNumber([10,20,30,1,31,11,10]));
console.log(sumTwoMinimalNumber([-1,0,25]));
console.log(sumTwoMinimalNumber([-4,-10,25,10]));
console.log(sumTwoMinimalNumber([0,200,10,25,15]));

/*
 3. Напишите функцию которая меняет местами имя и фамилию
 nameShuffler('john McClane'); => "McClane john"
 nameShuffler('Arnold Schwarzenegger'); => "Schwarzenegger Arnold"
 nameShuffler('James Bond'); => "Bond James"
 */

const nameShuffler = str => str.split(' ').reverse().join(' ');

console.log(nameShuffler('John McClane'));
console.log(nameShuffler('Arnold Schwarzenegger'));
console.log(nameShuffler('James Bond'));


/*
 // !
 4. Напишите функцию которая принимает массив с именами и возвращает массив
 в котором каждая буква становится заглавной
 capMe(['jo', 'nelson', 'jurie'])     // returns ['Jo', 'Nelson', 'Jurie']
 capMe(['KARLY', 'DANIEL', 'KELSEY']) // returns ['Karly', 'Daniel', 'Kelsey']
 */

const capMe = arr => {
    const newArr = arr.map(elem => {
         return elem[0].toUpperCase() + elem.slice(1).toLowerCase();
    });
    console.log(newArr);
};
capMe(['jo', 'nelson', 'jurie']);
capMe(['KARLY', 'DANIEL', 'KELSEY']);


