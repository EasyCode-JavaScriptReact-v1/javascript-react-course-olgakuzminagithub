class App {
    constructor() {
        this.state = {
            users: [
                {
                    name: 'Иван',
                    lastName: 'Петров',
                    email: 'ivanpetrov@gmail.com'
                },
                {
                    name: 'Сергей',
                    lastName:'Сергеев',
                    email: 'sergeysergeev@gmail.com'
                },
                {
                    name: 'Иван',
                    lastName: 'Петров',
                    email: 'ivanpetrov@gmail.com'
                },
                {
                    name: 'Александр',
                    lastName: 'Александров',
                    email: 'alex@gmail.com'
                },
                {
                    name: 'Алекс',
                    lastName: 'Смирнов',
                    email: 'smirnov@gmail.com'
                },
                {
                    name: 'Сергей',
                    lastName: 'Волков',
                    email: 'srgvolk@gmail.com'
                },
                {
                    name: 'Мария',
                    lastName: 'Шарапова',
                    email: 'mari@gmail.com'
                },
                {
                    name: 'Александр',
                    lastName: 'Винник',
                    email: 'smirnov@gmail.com'
                },
                {
                    name: 'Паша',
                    lastName: 'Новиков',
                    email: 'pasha@gmail.com'
                },
                {
                    name: 'Даша',
                    lastName: 'Стрижак',
                    email: 'dasha@gmail.com'
                },
                {
                    name: 'Елена',
                    lastName: 'Лещенко',
                    email: '@gmail.com'
                },
            ],
            activePage: 'contacts'
        };
        this.pages = {
            contacts: new ContactPage(this.state),
            keypad: new KeypadPage(),
            editcontact: new EditUser(this.state),
            user: new User(this.state),
            adduser: new AddUser(this.state),
        };
        this.initializeRouter();
        this.switchRouter();

    }
    initializeRouter () {
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
    renderLink (linkProperties) {
        return `
        <a href="${linkProperties.url}.html" class="tab ${linkProperties.className}">
                <span class="glyphicon glyphicon-${linkProperties.icon}" aria-hidden="true"></span>
                <span class = "tab-text">${linkProperties.content}</span>
         </a>`

    }
    conversionActiveLink(text) {
        return text.replace(/\s/g, "").toLowerCase();


    }
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
    //     const activePage = this.state.activePage;
    //     this.pages[activePage].updateState(this.state);
    //
    // }
    render() {
        const activePage = this.state.activePage;
        // this.updateView();
        this.pages[activePage].render();

    }
}

const app = new App();
app.render();
