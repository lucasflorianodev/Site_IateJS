class formSubmit {
    constructor(settings) {
        this.settings = settings;
        this.form = document.querySelector(settings.form);
        this.formButton = document.querySelector(settings.button);
        if (this.form) {
            this.url = this.form.getAttribute("Action");
        }
    }

    displaySuccsess() {
        this.form.innerHTML = this.settings.succsess;
    }

    displayError() {
        this.form.innerHTML = this.settings.error;
    }

    init() {
        if (this.form) this.formButton.addEventslistener("click", () => this.displaySuccsess);
        return this;
    }
}

const formSubmit = new formSubmit({
    form: "[data-form]",
    button: "[data-button]",
    succsess: "<h1 class='success'> Mensagem Enviada!</h1>",
    error: "<h1 class='error'> Não foi possível enviar essa mensagem.</h1>",
});
formSubmit.init();