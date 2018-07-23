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
];
const colums = ['Name', 'LastName', 'Email'];
const app  = {
    users,
    colums,
    render() {
        document.body.innerHTML += this.renderHeader() +this.renderMain() + this.renderFooter();
    },
    renderHeader () {
        return `
        <header class="header">
            <div class="container top-radius">
                <h2>Contacts</h2>
        </div>
        </header>
        `
    },
    renderMain () {
        return `
        <main>
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
    },
    renderFooter () {
        return `
        <footer class="footer">
        <div class="container bottom-radius">
        <nav class="main-nav">
            <a href="index.html" class="tab active">
                <span class="glyphicon glyphicon-search" aria-hidden="true"></span>
                <span class = "tab-text">Contacts</span>
            </a>
            <a href="keypad.html" class="tab">
                <span class="glyphicon glyphicon-th" aria-hidden="true"></span>
                <span class = "tab-text">Keypad</span>
            </a>
            <a href="edit-contact.html" class="tab">
                <span class="glyphicon glyphicon-pencil" aria-hidden="true"></span>
                <span class = "tab-text">Edit contact</span>
            </a>
            <a href="user.html" class="tab">
                <span class="glyphicon glyphicon-user" aria-hidden="true"></span>
                <span class = "tab-text">User</span>
            </a>
            <a href="add-user.html" class="tab">
                <span class="glyphicon glyphicon-plus" aria-hidden="true"></span>
                <span class = "tab-text">Add user</span>
            </a>
         </nav>
         </div>
         </footer>`

    }

};

app.render();

