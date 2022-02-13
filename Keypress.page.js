const {clearInputValue} = require('../../methods/helper') //экспорт метода для удаления введенных данных
const Page = require('./Page');
const t = tab;
const s = S;
class KeyPressPage extends Page {                          //cоздает класс с наследуемой страницей, находит селекторы, вводит заданный текст
    get inputField() {
        return $('#target');
    }
    get inputText1() {
        return $('#result');
    }
    get inputText2() {
        return $('#result');
    async keypress (t, s) {
        await this.inputText1.setValue(t);
        await clearInputValue(await KeyPressPage.inputText)
        await this.inputText2.setValue(space);
        

    open()
    {
        return super.open('key_presses');
    }
}
}

module.exports = new KeyPressPage();
