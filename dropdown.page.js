const Page = require('./page');                //импорт страницы

class DropdownPage extends Page {              //наследует страницу, создает класс
   
    get clickDropdown () {                     //собирает селекторы, чтобы передать их в спеки
        return $('#dropdown');
    }
    get selectOption1() {
        return $('#Option 1');
    }

    get selectOption2() {
        return $('#Option 2');
    }
    
  
    async dropdown (option1, option2) {        //ассинхронная функция, выбирающая опции из выпадающего списка
        await DropdownPage.open();
        await DropdownPage.clickDropdown.click();
        await expect$(Option1).isSelected();
        await DropdownPage.clickDropdown.click();
        await expect$(Option2).isSelected();
        
    }

    
    open() {
        return super.open('dropdown');
    }
}

module.exports = new DropdownPage();           //экспорт страницы
