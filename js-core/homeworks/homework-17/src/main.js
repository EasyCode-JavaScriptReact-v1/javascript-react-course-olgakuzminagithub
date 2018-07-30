/*
 TASK 0
 Отобразите всех лидеров массива.
 *
 *
 * Элемент лидер если он больше чем все последующие элементы
 * после него ( элементы справа ).
 * Последний элемент всегда лидер. Например в массиве [16,17,4,3,5,2]
 * лидеры 17, 5 и 2.
 *
 * */

const solution = arr => {
    let newArr =[];
    for ( let i = 0; i <arr.length; i++) {
        let count = 0;
        for (let j = i + 1; j < arr.length; j ++) {
            if (arr[i] > arr[j]) {
               count ++;
            }
        }
        if (count === arr.length - i - 1) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
};

console.log(solution([16, 17, 4, 3, 5, 2])); // === [17, 5, 2]
console.log(solution([4, 3, 7, 12, 6, 67, 5, 45, 34, 35, 2, 8])); // [67, 45, 35, 8]
console.log(solution([12, 10, 12, 8, 7, 6])); // [12, 8, 7, 6]
console.log(solution([1, 2, 3, 4, 5, 4])); // [5, 4]
console.log(solution([12, 12, 12])); // [5, 4]


/* TASK 1
 * Сделайте карусель.
 * При клике по кнопке "<=" показывается первое изображение по "=>" следующее.
 */

class Carousel {
    constructor (element) {
        this.elementToApply = element.elementToApply,
        this.widthImg = element.widthImg,
        this.transition = element.transition,
        this.infinity = element.infinity,
        this.nav = element.nav,
        this.timer = element.timer,
        this.list = carousel.querySelectorAll('li');
    }
    static initialize(properties) {
        let myInitializedCarousel =  new Carousel(properties);
        myInitializedCarousel.start();
    }
    infinityCarousel () {
        let last = this.list.length - 1;
        if (!this.list[last].classList.contains('active')) {
            for (let i = 0; i < this.list.length; i ++) {
                let nextPosition = parseInt(this.list[i].style.left) - this.widthImg * this.count;
                this.list[i].style.left = nextPosition + 'px';
                let position = parseInt(this.list[i].style.left);
                if (position === 0) {
                    this.list[i].classList.add('active')
                } else {
                    this.list[i].classList.remove('active')
                }
            }
        } else if (this.list[last].classList.contains('active') && this.infinity === true) {
            this.startCarousel();
        }
    }
    startCarousel () {
        /*Объявляем перменные */
        let carousel =  document.querySelector(this.elementToApply);
        let prev = carousel.querySelector('.prev');
        let next = carousel.querySelector('.next');
        let list = carousel.querySelectorAll('li');

        let widthImg = this.widthImg;
        let count = this.transition;
        let infinity = this.infinity;
        let nav = this.nav;

        /* Нумеруем картинки*/

        const div = document.createElement('div');
        div.setAttribute('class', 'navigation');
        const ul = document.createElement('ul');
        for (let i = 0; i < this.list.length; i++) {
            const li = document.createElement('li');
            li.setAttribute('class', 'nav');
            li.innerHTML = i + 1;
            ul.appendChild(li);
        }
        div.appendChild(ul);
        let navs = [];

        if (nav === true) {
            carousel.appendChild(div);
            navs = carousel.querySelectorAll('.nav');
        }

        /* Один круг карусели */
        /* Не получилось разделить метод на несколько, потому что при событии onclick
        не получаеться обращаться к глобальной переменной this.list и надо переопредлять переменную list в саом методе */

        const newRoundCarusel = () => {
            for (let i = 0; i < list.length; i ++) {
                list[0].classList.add('active');
                list[list.length-1].classList.remove('active');
                list[i].style.top = 0;
                list[i].style.left = widthImg * count * i + 'px';
                if (nav  === true) {
                    navs[0].classList.add('active');
                    navs[list.length-1].classList.remove('active');
                }
            }
            prev.onclick = function () {
                if (!list[0].classList.contains('active')) {
                    for (let i = 0; i < list.length; i ++) {
                        let nextPosition = parseInt(list[i].style.left) + widthImg * count;
                        list[i].style.left = nextPosition + 'px';
                        let position = parseInt(list[i].style.left);
                        if (position === 0) {
                            list[i].classList.add('active');
                            if (nav  === true) {
                                navs[i].classList.add('active');
                            }

                        } else {
                            list[i].classList.remove('active');
                            if (nav  === true) {
                                navs[i].classList.remove('active');
                            }
                        }
                    }
                }
            };
            next.onclick = function () {
                let last = list.length - 1;
                if (!list[last].classList.contains('active')) {
                    for (let i = 0; i < list.length; i ++) {
                        let nextPosition = parseInt(list[i].style.left) - widthImg * count;
                        list[i].style.left = nextPosition + 'px';
                        let position = parseInt(list[i].style.left);
                        if (position === 0) {
                            list[i].classList.add('active');
                            if (nav  === true) {
                                navs[i].classList.add('active');
                            }
                        } else {
                            list[i].classList.remove('active');
                            if (nav  === true) {
                                navs[i].classList.remove('active');
                            }
                        }
                    }
                } else if (list[last].classList.contains('active') && infinity === true) {
                    newRoundCarusel();

                }
            };
        };
        newRoundCarusel();

    }
    start () {
        this.startCarousel();

        /*Запускаем таймер, если он есть*/

        if (this.timer !== 0) {
            setInterval(() => {
                this.infinityCarousel()
            }, this.timer);
        }

    }
}

Carousel.initialize({
    elementToApply: '.carousel',
    widthImg: 1170,
    transition: 1,
    infinity: true,
    nav: true,
    timer: 0
});






