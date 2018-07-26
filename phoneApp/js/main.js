class ContactPage {
    constructor (colums, users) {
        this.colums = colums;
        this.users = users;
    }
    render() {
        const mountNode = document.createElement('div');
        mountNode.setAttribute('id', 'mountNode');
        mountNode.innerHTML += this.renderHeader() +this.renderMain() + this.renderFooter();
        document.body.appendChild(mountNode);
    }
    renderHeader () {
        return `<header class="header">
            <div class="container top-radius">
                <h2>Contacts</h2>
        </div>
        </header>`
    }
    renderMain () {
        return `<main>
        <div class="container">
         <form class="form-inline search-form">
            <div class="form-group">
                <label class="sr-only" for="search">Search</label>
                <input type="text" class="form-control" id= "search" placeholder="Search">
            </div>
         </form>
         <table class="table table-hover contacts">
         <thead>
          ${this.colums.map(colum => {return`<th>${colum}</th>`}).join('')}
         </thead>
         <tbody>
         ${this.users.map(user => {return`
             <tr>
             <td>${user.name}</td>
             <td>${user.lastName}</td>
             <td>${user.email}</td>
             </tr>`
        }).join('')}</tbody>
         </table>
         </div>
         </main>`
    }
    renderFooter () {
        return `<footer class="footer">
        <div class="container bottom-radius">
        <nav class="main-nav">
            ${this.renderLink({ url: 'contacts.html', content:'Contacts', className:'active', icon:'search'})}
            ${this.renderLink({ url: 'keypad.html', content:'Keypad',  icon:'th'})}
            ${this.renderLink({ url: 'edit-contact.html', content:'Edit contact',  icon:'pencil'})}
            ${this.renderLink({ url: 'user.htm', content:'User',  icon:'user'})}
            ${this.renderLink({ url: 'add-user.html', content:'Add user',  icon:'plus'})}
         </nav>
         </div>
         </footer>`

    }
    renderLink (linkProperties) {
        return `<a href="${linkProperties.url}.html" class="tab ${linkProperties.className}">
                <span class="glyphicon glyphicon-${linkProperties.icon}" aria-hidden="true"></span>
                <span class = "tab-text">${linkProperties.content}</span>
         </a>`

    }
}

const users = [
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
];
const colums = ['Name', 'LastName', 'Email'];

const contactPage = new ContactPage(colums, users);
contactPage.render();

