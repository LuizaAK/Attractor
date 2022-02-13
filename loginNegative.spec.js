const {clearInputValue} = require('../../methods/helper') // экспорт для второго it (не добавила здесь), чтобы стереть неверный username 

describe('LOGIN PAGE', fn: () => {  
     it('Should not login with any name except tomsmith', fn: async() => { // вводит неверный юзернейм, верный пароль, кликает, получает alert message
        await LoginPage.open();                                             
        await LoginPage.InputUsername.setValue('johndoe');                  
        await LoginPage.InputPassword.setValue('SuperSecretPassword!');
        await LoginPage.btnSubmit.click();
        
 const res = await.LoginPage.alertMsg.getText();
 await expect(res).toEqual( "Your username is invalid!");       
        
    });
