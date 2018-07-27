class KeypadPage {
    constructor () {
        this.keypad = ['1','2','3','4','5','6','7','8','9','*','0','#']

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
                <h2>Keypad</h2>
        </div>
        </header>`
    }
    renderMain () {
        return `<main class="main">
        <div class="container">
        <div class="number">
            <span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span>
            <span class ="numbers"></span>
            <span class="glyphicon glyphicon-circle-arrow-left" aria-hidden="true"></span>
        </div>
        <div class="keypad-holder">
            ${this.keypad.map(button => {
                return `<button class="key">${button}</button>`
             }).join('')}
            <button class="key"> <span class="glyphicon glyphicon-earphone" aria-hidden="true"></span></button>
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
            ${this.renderLink({ url: 'contacts.html', content:'Contacts', className:'active', icon:'search'})}
            ${this.renderLink({ url: 'keypad.html', content:'Keypad',  icon:'th'})}
            ${this.renderLink({ url: 'edit-contact.html', content:'Edit contact',  icon:'pencil'})}
            ${this.renderLink({ url: 'user.htm', content:'User',  icon:'user'})}
            ${this.renderLink({ url: 'add-user.html', content:'Add user',  icon:'plus'})}
         </nav>
         </div>
         </footer>`

    }
}
const keypadPage = new KeypadPage();
keypadPage.render();

const buttons = document.querySelectorAll('button');
const entryField = document.getElementsByClassName('numbers')[0];

for (let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function () {
        console.log(entryField);
        entryField.innerHTML += `${keypadPage.keypad[i]}`;
    }
}
