class Router {
    /*Ренедеим футер*/

    render () {
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
}