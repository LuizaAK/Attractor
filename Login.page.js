const Page = require('./page'); //наследование страницы, импортирует класс,

class LoginPage extends Page {   //создает класс, находит селекторы, чтобы передать их в cпеки; вводит по очереди данные, нажимает на кнопку Login
   
    get inputUsername() {
        return $('#username');
    }

    get inputPassword() {
        return $('#password');
    }

    get btnSubmit() {
        return $('button[type="submit"]');
    }

   
    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    
    open() {
        return super.open('login');
    }
}

module.exports = new LoginPage(); // экспортирует страницу
