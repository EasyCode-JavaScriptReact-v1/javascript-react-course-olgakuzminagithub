class App {
    constructor() {
        const store = this.createStore();
        this.pages = {
            contacts: new ContactPage(store),
            keypad: new KeypadPage(store),
            editcontact: new EditUser(store),
            user: new User(store),
            adduser: new AddUser(store),
        };

        this.router =  new Router();
        this.render();

        store.setState({
            users: [],
            activePage: 'contacts'
        });
        this.pages = {
            contacts: new ContactPage(store),
            keypad: new KeypadPage(store),
            editcontact: new EditUser(store),
            user: new User(store),
            adduser: new AddUser(store),
        };

    }

    /*Преобразуем контент в сыылке в нужный формат */

    conversionActiveLink(text) {
        return text.replace(/-/g, "").replace(/.html/, "");
    }

    createStore() {
        let state;

        const getState = () => {
            return state;
        };

        const setState = (newState) => {
            state = {
                ...state,
                ...newState,
            };
            this.pages[state.activePage].render();
            console.log(this);
        };

        return {
            getState,
            setState
        }
    }

    /*Переключатель вкладок в футере*/

    switchRouter() {
        const links = document.querySelectorAll('.tab');
        for (let i = 0; i < links.length; i++) {
            let href = links[i].getAttribute('href');
            links[i].addEventListener('click', (event) => {
                event.preventDefault();
                //
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


    updateView() {
        const activePage = this.state.activePage;
        this.pages[activePage].componentDidMount();
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




