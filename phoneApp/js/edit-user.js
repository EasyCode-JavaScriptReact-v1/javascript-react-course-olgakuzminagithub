class EditUser {
    constructor (colums, users) {
        this.user = {
            photo: '',
            firstName: '',
            lastName: '',
            company:'',
            phone: '0663143296',
            homePhone: '',
            email: '',
            address: '',
            birthday: '',
            socialProfile: '',

        }
    }
    render() {
        const mountNode = document.querySelector('#mountNode');
        mountNode.innerHTML += this.renderHeader() +this.renderMain() + this.renderFooter();
    }
    renderHeader() {
        return `<header class="header">
                <div class="container top-radius">
                    <nav class="user-top-line">
                        <a href="user.html">Cansel</a>
                        <button  type = "submit" formaction="#" formmethod="get" class = "done-btn">Done</button>
                    </nav>
                </div>
               </header>`
     }
     renderMain () {
        return `<main class="main">
        <div class="container">
            <div class="edit-main-info">
                <div class="edit-foto"><img src="images/user-face-mini.png" alt="#" class=" user-img img-circle center-block"></div>
                <div class="main-info-holder">
                    <div class="edit-field">
                        <button href="#" class="add-btn"><span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span>
                            <span>First Name</span>
                        </button>
                    </div>
                    <div class="edit-field">
                        <button href="#" class="add-btn"><span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span>
                            <span>Last Name</span>
                        </button>
                    </div>
                    <div class="edit-field">
                        <button href="#" class="add-btn"><span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span>
                            <span>Company</span>
                        </button>
                    </div>
                </div>
            </div>
            <div class="scroll-holder">
                <div class="edit-info">
                    <div class="edit-field">
                        <button href="#" class="delete-btn"><span class="glyphicon glyphicon-minus-sign" aria-hidden="true"></span>
                            <span>phone</span>
                            <span>${this.user.phone}</span>
                        </button>
                    </div>
                    <div class="edit-field">
                        <button href="#" class="add-btn"><span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span>
                            <span>add  home phone</span>
                        </button>
                    </div>
                    <div class="edit-field">
                        <button href="#" class="add-btn"><span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span>
                            <span>add email</span>
                        </button>
                    </div>
                    <div class="edit-field">
                        <button href="#" class="add-btn"><span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span>
                            <span>add address</span>
                        </button>
                    </div>
                    <div class="edit-field">
                        <button href="#" class="add-btn"><span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span>
                            <span>add birthday</span>
                        </button>
                    </div>
                    <div class="edit-field">
                        <button href="#" class="add-btn"><span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span>
                            <span>add social profile</span>
                        </button>
                    </div>
                    <div class="edit-field">
                        <button href="#" class="add-btn"><span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span>
                            <span>add field</span>
                        </button>
                    </div>
                    <div class="edit-field">
                        <button href="#" class="delete-contact">delete contact</button>
                    </div>
                </div>
            </div>
        </div>
    </main>`
     }
     renderFooter () {
        return `<footer class="footer">
        <div class="container bottom-radius">
        <nav class="main-nav">
            ${this.renderLink({ url: 'contacts.html', content:'Contacts', icon:'search'})}
            ${this.renderLink({ url: 'keypad.html', content:'Keypad',  icon:'th'})}
            ${this.renderLink({ url: 'edit-contact.html', content:'Edit contact', className:'active',  icon:'pencil'})}
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

const editUser = new EditUser();
editUser.render();