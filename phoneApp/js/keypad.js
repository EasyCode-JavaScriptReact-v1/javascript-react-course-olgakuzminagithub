class KeypadPage {
    render() {
        const mountNode = document.querySelector('#mountNode');
        mountNode.innerHTML += this.renderHeader() +this.renderMain() + this.renderFooter();
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
            <button class="key">1</button>
            <button class="key">2</button>
            <button class="key">3</button>
            <button class="key">4</button>
            <button class="key">5</button>
            <button class="key">6</button>
            <button class="key">7</button>
            <button class="key">8</button>
            <button class="key">9</button>
            <button class="key">*</button>
            <button class="key">0</button>
            <button class="key">#</button>
            <button class="key"><span class="glyphicon glyphicon-earphone" aria-hidden="true"></span></button>
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
            ${this.renderLink({ url: 'keypad.html', content:'Keypad', className:'active',  icon:'th'})}
            ${this.renderLink({ url: 'edit-contact.html', content:'Edit contact',  icon:'pencil'})}
            ${this.renderLink({ url: 'user.htm', content:'User',  icon:'user'})}
            ${this.renderLink({ url: 'add-user.html', content:'Add user',  icon:'plus'})}
         </nav>
         </div>
         </footer>`

    }
    conversionPhoneFormat (phoneNumber) {
        switch(phoneNumber.length) {
            case 1: return phoneNumber.replace(/([0-9]{1})/, '($1)');
            case 2: return phoneNumber.replace(/([0-9]{2})/, '($1)');
            case 3: return phoneNumber.replace(/([0-9]{3})/, '($1)');
            case 4: return phoneNumber.replace(/([0-9]{3})([0-9]{1})/, '($1) $2'); break;
            case 5: return phoneNumber.replace(/([0-9]{3})([0-9]{2})/, '($1) $2'); break;
            case 6: return phoneNumber.replace(/([0-9]{3})([0-9]{2})([0-9]{1})/, '($1) $2-$3'); break;
            case 7: return phoneNumber.replace(/([0-9]{3})([0-9]{2})([0-9]{2})/, '($1) $2-$3'); break;
            case 8: return phoneNumber.replace(/([0-9]{3})([0-9]{2})([0-9]{2})([0-9]{1})/, '($1) $2-$3-$4'); break;
            case 9: return phoneNumber.replace(/([0-9]{3})([0-9]{2})([0-9]{2})([0-9]{2})/, '($1) $2-$3-$4'); break;
            case 10: return phoneNumber.replace(/([0-9]{3})([0-9]{2})([0-9]{2})([0-9]{3})/, '($1) $2-$3-$4'); break;
            default: break;
        }
    }
    deleteSimbol (phoneNumber) {
        return phoneNumber.replace(/\D/g, "");


    }
}
const keypadPage = new KeypadPage();
keypadPage.render();


/*Набор номера*/

const buttons = document.querySelectorAll('button');
const entryField = document.querySelector('.numbers');

for (let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function () {
        if ( keypadPage.deleteSimbol(entryField.textContent).length < 10) {
            entryField.textContent = keypadPage.deleteSimbol(entryField.textContent) +`${buttons[i].textContent}`;
            entryField.innerHTML = keypadPage.conversionPhoneFormat(entryField.textContent);
        }
    }
}

/*Удаление номера*/

const buttonDelete = document.querySelector('.glyphicon-circle-arrow-left');

buttonDelete.onclick = function () {
    entryField.innerHTML = `${entryField.textContent.slice(0, -1)}`;
};


/*Набор с клавиатуры */

function getChar(event) {
    console.log(event.which);
    if (event.which == null) { // IE
        if (event.keyCode < 32) return null; // спец. символ
        return String.fromCharCode(event.keyCode)
    }

    if (event.which != 0 && event.charCode != 0) { // все кроме IE
        if (event.which < 32) return null; // спец. символ
        return String.fromCharCode(event.which); // остальные
    }

    return null; // спец. символ
}


document.onkeypress = function (event) {
    if ( keypadPage.deleteSimbol(entryField.textContent).length < 10) {
        entryField.textContent = keypadPage.deleteSimbol(entryField.textContent) + getChar(event);
        entryField.innerHTML = keypadPage.conversionPhoneFormat(entryField.textContent);
    }
};