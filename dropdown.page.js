const Page = require('./page');

class DropdownPage extends Page {
   
    get clickDropdown () {
        return $('#dropdown');
    }
    get selectOption1() {
        return $('#Option 1');
    }

    get selectOption2() {
        return $('#Option 2');
    }
    
  
    async dropdown (option1, option2) {
        await DropdownPage.open();
        await DropdownPage.clickDropdown.click();
        await expect($Option1).isSelected();
        await DropdownPage.clickDropdown.click();
        await expect($Option2).isSelected();
        
    }

    
    open() {
        return super.open('dropdown');
    }
}

module.exports = new DropdownPage();
