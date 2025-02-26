//page object model implementation by Gopi

const LoginPage = require('../pages/login.page')
describe('Demo Test', () => {

    it('Login Test', async () => {

        browser.url("https://the-internet.herokuapp.com/login")
        
        LoginPage.login('tosmith', 'SuperSecretPassword!')
        LoginPage.checkMessage('You logged into a secure area!')


        // //replacing with two functions
        // await $('#username').setValue('tosmith')
        // await $('#password').setValue('SuperSecretPassword!')
        // await $('button[type="submit"]').click()

        // await $('#flash').getText()
        // await expect($('#flash').toHaveTextContaining('You logged into a secure area!'))



    })

})
