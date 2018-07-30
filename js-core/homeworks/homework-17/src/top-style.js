
/*
* TASK 2
* Сделайте класс, который будет иметь метод topStyle
* метод topStyle принимает объект с CSS стилями и добавляет в <head>
*   новый элемент с данными стилями
*
*
* */
// .topStyle('fetch', {backgroundColor:'blue'})
/*
*
* <style>.fetch {
* background-color
* */

/* Не получилось */

class Style {
    standartViewStyle (property) {
        return property.replace(/([a-z])([A-Z])/, '$1-$2').toLowerCase();
    }
    topStyle (className, yourStyle) {
        const style = document.createElement('style');
        let properties = '';
        for (let key in yourStyle) {
            properties += `${this.standartViewStyle(key)}: ${yourStyle[key]};
            `;
        }
        style.innerHTML = `.${className} {
            ${properties}
        }`;
        document.head.appendChild(style);

    }
}
const newStyle  = new Style();
newStyle.topStyle('fetch', {backgroundColor:'blue', width: '100px', height: '100px', marginLeft: '100px', marginTop: '100px'});
