const DropdownPage = require('../pageobjects/Dropdown.page'); 
const elem1 = $('#Option1');
const elem2 = $('#Option2');

describe('Dropdown page'), () => {
    it('should select options', async () => {     //группирую тест в mocha, далее использую assertions 
        await DropdownPage.open();
        await DropdownPage.clickDropdown.click();
        await expect(elem1).toBeSelected().true; 
        await DropdownPage.clickDropdown.click();
        await expect(elem2).toBeSelected().true; 
           
        
        
       
    });
};
