class App {
    constructor(bdUsers) {
        this.state = {
            users: bdUsers,
            activePage: 'contacts'
        };
        this.pages = {
            contacts: new ContactPage(),
            keypad: new KeypadPage(),
            editcontact: new EditUser(),
            user: new User(),
            adduser: new AddUser(),
        };
        this.router =  new Router();
    }

    /*Преобразуем контент в сыылке в нужный формат */

    conversionActiveLink(text) {
        return text.replace(/-/g, "").replace(/.html/, "");
    }

    /*Переключатель вкладок в футере*/

    switchRouter() {
        const links = document.querySelectorAll('.tab');
        for (let i = 0; i < links.length; i++) {
            let href = links[i].getAttribute('href');
            links[i].addEventListener('click', (event) => {
                event.preventDefault();
                this.state.activePage = this.conversionActiveLink(href);
                this.updateView();
                for (let j = 0; j < links.length; j ++) {
                    if (i !== j) {
                        links[j].classList.remove('active')
                    }
                }
            })
        }
    }


    updateView () {
        const activePage = this.state.activePage;
        this.pages[activePage].render();

    }

    render() {
        this.router.render();
        this.updateView();
        this.switchRouter();
    }

    /*Подключаемся к базе данных, преобразуем обьект user, запускаем app, передаем туда массив юзеров*/

    static initialize() {
        const app  = new App();
        app.render();
    }
}




App.initialize();




