/* EASY
Алгоритмы !
TASK 0
Вам дано предложение, верните массив из слов,
которые длинее чем средняя длина всех слов.
Слова разделены пробелами, если в предложении запятые,они должны быть пропущены
solution(["This is a sample string"]) expected ["This" "sample" "string"]
solution(["Some another sample"]) expected ["another" "sample"]
solution(["Do, do, do, do... do it!"]) expected []
*/

function removePunctuation(string) {
    return string.replace(/[.,!?]/g, "")

}

function solution (arr) {
    let wordsArr = arr[0].split(' ').map(word => {
        return removePunctuation(word)
    });
    let lengthsArr = wordsArr.map(word => {
        return word.length
    });
    let sumLengthsArr = 0;
    lengthsArr.forEach(length => {
        return sumLengthsArr += length;
    });
    let averageLength = sumLengthsArr/lengthsArr.length;
    let res = wordsArr.filter(word => {
        if(word.length > averageLength) {
            return word;
        }
    });
    console.log(res);
}

solution(["This is a sample string"]);
solution(["Some another sample"]);
solution(["Do, do, do, do... do it!"]);


/* TASK 1
Сделайте таблицу 5x5
При клике на элемент, изменяйте цвет у элемента на красный.
Но цвет у элемента должен изменяться пропорционально в другой половине квадрата
Пример 3х3:
[]|[]|[]
[]|[]|[]
[]|[]|[]
кликаем сюда -> []|[]|[]
                []|[]|[]
                []|[]|[x] <- загорается тут
                []|[]|[]
кликаем сюда -> []|[]|[x] <- загорается тут
                []|[]|[x]
*/

 /* C делегированием я не смогла сделать */

let table = document.querySelector('table');

// table.addEventListener('click', (event) => {
//     if (event.target.tagName === 'TD') {
//     }
// });

/* Только присвоением события на каждый элемент*/

let cells = document.querySelectorAll('td');

for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', () => {
        let number = cells.length - 1 - i;
        cells[number].style.background = 'red';
    })
}