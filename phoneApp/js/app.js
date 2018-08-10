class App {
    constructor(bdUsers) {
        this.state = {
            users: bdUsers,
            activePage: 'contacts'
        };
        this.pages = {
            contacts: new ContactPage(this.state.users),
            keypad: new KeypadPage(),
            editcontact: new EditUser(this.state),
            user: new User(this.state),
            adduser: new AddUser(this.state),
        };
        this.renderRouter();
        this.switchRouter();
    }

    /*Ренедеим футер*/

    renderRouter () {
        const mountNode = document.querySelector('#mountNode');
        mountNode.innerHTML = `
        <div id="app"></div>
        <footer class="footer">
            <div class="container bottom-radius">
                <nav class="main-nav">
                    ${this.renderLink({ url: 'contacts', content:'Contacts', className:'active', icon:'search'})}
                    ${this.renderLink({ url: 'keypad', content:'Keypad',  icon:'th'})}
                    ${this.renderLink({ url: 'edit-contact', content:'Edit contact', icon:'pencil'})}
                    ${this.renderLink({ url: 'user', content:'User', icon:'user'})}
                    ${this.renderLink({ url: 'add-user', content:'Add user', icon:'plus'})}
                 </nav>
             </div>
         </footer>
        `
    }

    /*Ренедеим ссылки в футере*/

    renderLink (linkProperties) {
        return `
        <a href="${linkProperties.url}.html" class="tab ${linkProperties.className}">
                <span class="glyphicon glyphicon-${linkProperties.icon}" aria-hidden="true"></span>
                <span class = "tab-text">${linkProperties.content}</span>
         </a>`

    }

    /*Преобразуем контент в сыылке в нужный формат */

    conversionActiveLink(text) {
        return text.replace(/\s/g, "").toLowerCase();
    }

    /*Переключатель вкладок в футере*/

    switchRouter() {
        const linksForRouter = document.querySelectorAll('.tab');
        for (let i = 0; i < linksForRouter.length; i++) {
            linksForRouter[i].onclick = (event) => {
                event.preventDefault();
                linksForRouter[i].classList.toggle('active');
                this.state.activePage =  this.conversionActiveLink(linksForRouter[i].textContent);
                this.render();
                for (let j = 0; j < linksForRouter.length; j ++) {
                    if (i !== j) {
                        linksForRouter[j].classList.remove('active');
                    }
                }
            }
        }
    }
    // updateView() {
    //     this.pages[activePage].updateState(this.state);
    //
    // }
    render() {
        const activePage = this.state.activePage;
        // this.updateView();
        this.pages[activePage].render();

    }

    /*Подключаемся к базе данных, преобразуем обьект user, запускаем app, передаем туда массив юзеров*/

    static initialize(bdUrl) {
        const url = bdUrl;
        const xhr = new XMLHttpRequest();
        xhr.onreadystatechange = () => {
            if(xhr.readyState === 4) {
                let users = [];
                JSON.parse(xhr.responseText).map(elem => {
                    let user = {};
                    user.id = elem._id;
                    user.name = elem.fullName.split(' ')[0];
                    user.lastName = elem.fullName.split(' ')[1] ? elem.fullName.split(' ')[1] : ' ';
                    user.email = elem.email;
                    user.phone = elem.phone;
                    users.push(user);
                });
                const app  = new App(users);
                app.render();
            }
        };
        xhr.open('GET', url + '/users', true);
        xhr.send();
    }
}

App.initialize('http://easycode-js.herokuapp.com/olku');




