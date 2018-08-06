class User {
    constructor() {
        this.user = {
            userName: 'userName',
            userPhoto: 'images/user-face.png',
            optionLine: [
                {name:'message', glyphicon: 'glyphicon-comment'},
                {name:'call', glyphicon: 'glyphicon-earphone'},
                {name:'video', glyphicon: 'glyphicon-facetime-video'},
                {name:'mail', glyphicon: 'glyphicon-envelope'},
            ],
            mobilePhone: '+38 (093) 989 89 89',
            homePhone: '+38 (093) 989 89 89',
            optionTable: ['Notes', 'Send message', 'Share contact', 'Add to favorites', 'Share my location', 'Block this caller']
        }
    }
    render () {
        const mountNode = document.querySelector('#mountNode');
        mountNode.innerHTML += this.renderHeader() +this.renderMain() + this.renderFooter();
        console.log(this.user.optionTable);

    }
    renderHeader () {
        return`<header class="header">
                    <div class="container top-radius">
                        <div class="user-top-line">
                            <a href="index.html">
                                <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                                Contacts</a>
                            <a href="edit-contact.html">Edit</a>
                        </div>
                    </div>
               </header>`

    }
    renderMain () {
        return `<main class="main">
        <div class="container">
            <img src="${this.user.userPhoto}" alt="#" class=" user-img img-circle center-block">
            <div class="user-name">${this.user.userName}</div>
            <div class="options-line">
            ${this.user.optionLine.map(option => {
                return ` <div class="${option.name}">
                            <div class= "options-icon"><span class="icon glyphicon ${option.glyphicon}" aria-hidden="true"></span></div>
                            <span class = "options-text">${option.name}</span>
                        </div>`
            }).join('')}
            </div>
            <div class="tel-number">
                <h3>mobile</h3>
                <div>${this.user.mobilePhone}</div>
            </div>
            <div class="tel-number">
                <h3>home</h3>
                <div>${this.user.homePhone}</div>
            </div>
            <div class="options-table">
                ${this.user.optionTable.map(option => {
                    return `<div class ="options-item"><a href="#">${option}</a></div>`
                    
                }).join('')}
            </div>
        </div>
    </main>`
    }
    renderLink (linkProperties) {
        return `<a href="${linkProperties.url}.html" class="tab ${linkProperties.className}">
                <span class="glyphicon glyphicon-${linkProperties.icon}" aria-hidden="true"></span>
                <span class = "tab-text">${linkProperties.content}</span>
         </a>`

    }
    renderFooter () {
        return `<footer class="footer">
        <div class="container bottom-radius">
        <nav class="main-nav">
            ${this.renderLink({ url: 'contacts.html', content:'Contacts', icon:'search'})}
            ${this.renderLink({ url: 'keypad.html', content:'Keypad',  icon:'th'})}
            ${this.renderLink({ url: 'edit-contact.html', content:'Edit contact',  icon:'pencil'})}
            ${this.renderLink({ url: 'user.htm', content:'User', className:'active',  icon:'user'})}
            ${this.renderLink({ url: 'add-user.html', content:'Add user',  icon:'plus'})}
         </nav>
         </div>
         </footer>`

    }

}

const user = new User();
user.render();