const LoginPage = require('../pageobjects/Login.page'); //url is in wdio.conf.js file


describe('1 Lg-P My Login page', () => {                              //async function using mocha
    it('should login with valid credentials', async () => {
        await LoginPage.open();

        await LoginPage.login('tomsmith', 'SuperSecretPassword!'); //allowed hardcoding to myself  due to lack of time
       
    });
});
