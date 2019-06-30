/*
 0 Алгоритмы
 Реализуйте функцию которая будет превращать трехмерный массив
 в двухмерный, а если массив двухмерный, тогда в трехмерный массив
 // solution([ [1, 'a'], [2, 'b'], [3, 'c'] ]) => [ [1, 2, 3], [a, b, c] ]
 // solution([ [1, 3, 5], [2, 4, 6] ]) => [ [1, 2], [3, 4], [5, 6] ]
 // solution([[]]) => []
 [ [ [ ] ] ] = [ [] ]
 ИСПОЛЬЗУЙТЕ МЕТОДЫ МАССИВОВ !
 */
//

/*yt получилось */

const solution = arr => {
    let newArr = [];

    for ( let i = 0; i < arr.length; i++) {
        let elem = arr[i];
        for (let j = 0; j < elem.length-1; j++) {
            newArr[i] = elem[j];
        }
    }
};

solution([ [1, 'a'], [2, 'b'], [3, 'c'] ]);
solution([ [1, 3, 5], [2, 4, 6] ]);
solution([[]]);


const navigation = [
    {name: 'Главная'},
    {
        name: 'Каталог',
        children: [
            {
                name: 'Компьютеры',
                children: [
                        {
                            name: 'Ноутбуки',
                            children: [{name: 'Apple'}, {name: 'HP'}]
                        },
                        {name: 'Планшеты'}
                    ]
            },
            {
                name: 'Телевизоры',
                children: [{name: '4k'}, {name: 'samrt-tv'}]
            },
        ]
    },
    {name: 'Профиль'}
];

/*
 Визуализируйте массив, если в коллекции есть свойство
 children,
 тогда создайте вложенный лист
 name - свойство h1
 children ul -> li
 Используйте innerHTML
 */

/*
<h1>Main</h1>
<ul>
  <h1>Catalog</h1>
  <li>
    <ul>
      <h1>Comp</h1>
      <ul>
        <li>
          <h1>Notebook</h1>
          <h1>...</h1>
        </li>
      </ul>
  </li>
*/

const visualArray = arr => {
    return `
    ${arr.map(elem => {
        if (elem.children) {
            let arr = elem.children;
            return `
                    <h1>${elem.name}</h1>
                    <li>
                    <ul>
                    ${visualArray(arr)}
                    </ul>
                    </li>
                    `
        } else {
            return`<h1>${elem.name}</h1>`
        }
    }).join('')}`

};

document.body.innerHTML +=  visualArray(navigation);