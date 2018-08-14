(function() {

    const initialState = [
        'learn JavaScript',
        'learn MVC',
        'reed book'
    ];

    const model = new Model(initialState);
    const view = new View(initialState);
    const controller = new Controller(model, view);

})();

