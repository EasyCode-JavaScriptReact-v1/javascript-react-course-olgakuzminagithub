function Controller(model, view) {
    this.model = model;
    this.view = view;
    this.init();
}

Controller.prototype.init = function () {
    this.addHandlerForAddTask();

    // this.handlerForAddTask = this.handlerForAddTask.bind(this);
};

Controller.prototype.addHandlerForAddTask = function () {
    const {
        addButton,
        entryField,
        // Получить кнопку к которой нужно добавить событие VIEW
    } = this.view.elements;
    console.log(this.view);


    addButton.addEventListener('click', (event) => {
        this.model.addTodoItem(entryField.value);
        this.view.render(this.model.data);

        // default value
        entryField.value = '';

    });


    /*
    * 1) Получить значение из инпута в VIEW
    * 2) Получить кнопку к которой нужно добавить событие VIEW
  2.5) Создать обработчик события который будет добавлять значение в модель
    * 3) Повесить событие на кнопку
    * 4) Положить значение в model
    * 5) вызвать рендер с новым state у view
    * */
};
//
// Controller.prototype.handlerForAddTask = function () {
//     const {
//         entryField,
//     } =  this.view.elements;
//
//     console.log(this.view);
//
//     // if (!entryField.value) {
//     //     return;
//     // }
//
//
//     this.model.addTodoItem(entryField.value);
//     this.view.render(this.model.data);
//
//     // default value
//     entryField.value = '';
// };
