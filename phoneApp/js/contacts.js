class ContactPage {
    constructor (bdUsers) {
        this.users = bdUsers;
    }

    render() {
        const app = document.querySelector('#app');
        app.innerHTML = this.renderHeader() +this.renderMain();
        this.sortByParameterOnClick();
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
            <th>Name</th>
            <th>LastName</th>
            <th>Email</th>
         </thead>
         <tbody>
         ${this.renderTable()}</tbody>
         </table>
         </div>
         </main>`
    }

    renderTable() {
        return `
        ${this.users.map(user => {return`
             <tr>
             <td>${user.name}</td>
             <td>${user.lastName}</td>
             <td>${user.email}</td>
             </tr>`
        }).join('')}
        `
    }

    /* Сортировка по параметрам */

    sortByParameter (param) {
        this.users.sort(function (a, b) {
            if (a[param] > b[param]) {
                return 1
            }
            if (a[param] < b[param]) {
                return -1
            }
            return 0
        });
    };

    /* Сортировка по клику */

    sortByParameterOnClick () {
        const paramsForSort = document.querySelectorAll('th');
        let tBody = document.querySelector('tbody');

        paramsForSort[0].onclick = () => {
            this.sortByParameter('name');
            tBody.innerHTML = this.renderTable()
        };
        paramsForSort[1].onclick = () => {
            this.sortByParameter('lastName');
            tBody.innerHTML = this.renderTable()
        };
        paramsForSort[2].onclick = () => {
            this.sortByParameter('email');
            tBody.innerHTML = this.renderTable()
        };
    }
}






