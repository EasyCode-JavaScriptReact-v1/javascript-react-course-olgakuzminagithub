class AddUser {
    constructor (globalState) {
        this.users = globalState;
    }
    render() {
        const app = document.querySelector('#app');
        app.innerHTML = this.renderHeader() +this.renderMain();
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
                <div class="edit-foto">
                    <button class="add-foto-btn"><span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span>
                        <span>add foto</span></button>
                 </div>
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
                        <button href="#" class="add-btn"><span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span>
                            <span>phone</span>
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
}
