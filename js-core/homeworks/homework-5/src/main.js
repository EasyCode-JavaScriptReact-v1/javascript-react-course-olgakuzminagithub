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

function moveZeroToEnd(arr) {
    for ( let i = 0; i < arr.length; i ++) {
        let elem = arr[i];
        if (elem === 0) {
            arr.splice(i, 1);
            arr.push(elem);
        }
    }
    return arr;
}


console.log(moveZeroToEnd(arr1));
console.log(moveZeroToEnd(arr2));

/*
 2. Верните сумму двух найменьших чисел в массиве
 [10,20,30,1,31,11,10] => 11
 [-1,0,25] => -1
 [-4,-10,25,10] => -14
 [0,200,10,25,15] => 10
 */


function sumTwoMinimalNumber(arr) {
    function searcheMinimalNumber(arr) {
        let minElem = arr[0];
        for (let i = 0; i < arr.length; i ++) {
            if (arr[i] < minElem) {
                minElem = arr[i];
            }
        }
        return minElem;
    }
    let minimalNumber = searcheMinimalNumber(arr);
    let sum =+ minimalNumber;
    let indexMinimalNumber = arr.indexOf(minimalNumber);
    arr.splice(indexMinimalNumber, 1);
    minimalNumber = searcheMinimalNumber(arr);
    sum = sum + minimalNumber;
    return sum;
}
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

function nameShuffler(str) {
    let arr = str.split(' ');
    arr.reverse();
    let str2 = arr.join(' ');
    return str2;
}

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

function capMe(arr) {
    for (let i = 0; i < arr.length; i ++) {
        let str  = `${arr[i]}`;
        arr[i] = str[0].toUpperCase() + str.slice(1).toLowerCase();
    }
    console.log(arr);
}
capMe(['jo', 'nelson', 'jurie']);
capMe(['KARLY', 'DANIEL', 'KELSEY']);

// @SUPER
/*
 1. Найдите число отсутствующее в заданной последовательности
 example:
  [1,3,5,9] => 7 (9-1) / 4 == 2
  [0,8,16,32] => 24
  [4, 6, 8, 10] => 2 // число сначала
  [0,16,24,32] => 8
 */

function random(arr) {
}

random([1, 3, 5, 9]);
random([0, 8, 16, 32]);
random([0, 16, 24, 32]);
random([4, 6, 8, 10]);

/*
 Задача с собеседований*
 2. Напишите функция которая преобразовывает/открывает скобки всех
 вложенных внутри массивов
 Необходимо реализовать рекурсивный фызов функции.
 Функция должна открывать любое количество внутренних массивов
 example:
  [[1,2],[3,[4]],5, 10] => [1,2,3,4,5,10]
  [25,10,[10,[15]]] => [25,10,10,15]
 */

/*C рекурсией не получилось:(, только перебором*/

function openBraces(arr) {
    for ( let i = 0; i < arr.length; i ++) {
        if (Array.isArray(arr[i])) {
          let elem  = arr[i];
          arr.splice(i,1);
          for (let x = 0; x < elem.length; x++) {
              arr.splice(i+x, 0, elem[x])

          }
        }
    }
    return arr;
}


console.log(openBraces([[1,2],[3,[4]],5, 10]));
console.log(openBraces([25,10,[10,[15]]]));
console.log(openBraces([25,10,[10,[15,6,[13]]]]));