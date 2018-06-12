/* задание 1 */




// function calc() {
//     const x = + prompt ('введите 1-е число');
//     console.log(x);
//     if (isNaN(x)) {
//         alert('это не число');
//         calc();
//     } else {
//         const y = + prompt ('введите 2-е число');
//         console.log(y);
//         if (isNaN(y)) {
//             alert('это не число');
//             calc();
//         } else {
//             const sum = x + y;
//             alert(sum)
//         }
//     }
// }

// calc();

function promtWithValidation(index) {
    let number = + prompt (`введите ${index}-е число`);
    if (isNaN(number)) {
        alert('это не число');
        return promtWithValidation(index);
    }
    return number;
}


const x = promtWithValidation(1);
const y = promtWithValidation(2);
alert(`сумма ${x} + ${y} = ${x+y}`);




/* задание 2 */

// const x = + prompt ('введите число');

// if (x > 150) {
//     alert ('Тайлайнд')
// } else if ((x > 0)&&(x <100)) {
//     alert('Бали')
// } else {
//     alert ('Италия')
// }

/* задание 3 */

// const x = 15;
//
// if (x > 100) {
//     console.log ('x больше ста')
// } else {
//     if (x > 50) {
//         console.log ('x больше 50')
//     } else  {
//         if (x > 25) {
//             console.log ('x больше 25')
//         } else {
//             console.log ('x меньше 25')
//         }
//     }
// }

/* задание 3 */

function showNumbers() {
    console.log(1);
    console.log(2);
    console.log(3);
}

function helloUser(userName) {
    console.log('привет', userName)
}

function showNumber(x) {
    console.log(x);
}

function multiply2(x) {
    console.log(x * 2);
    return x * 2;
}

// const y = multiply2(4);
// console.log(y);

function hiUser(userName) {
    return `привет меня зовут ${userName}`;
}

// const hi = hiUser('Olga');
// console.log(hi);

