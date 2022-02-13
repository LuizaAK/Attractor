const DropdownPage = require('../pageobjects/Dropdown.page'); //наследование страницы, url зашит в wdio.conf.js
const elem1 = $('#Option1');
const elem2 = $('#Option2');

describe('1 DD Dropdown page'), () => {
    it('should select options', async () => {     //группирую тест в mocha, далее использую assertions 
        await DropdownPage.open();                 //открывает нужную страницу
        await DropdownPage.clickDropdown.click();   //кликает на dropdown стрелку
        await expect(elem1).toBeSelected().true;    //выбирает option 1
        await DropdownPage.clickDropdown.click();
        await expect(elem2).toBeSelected().true;    //выбирает option 2
           
        
        
       
    });
};
