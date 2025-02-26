class LoginPage{

    get usernameTextbox(){
        return $('#username')
    }

    get passwordTextbox(){
        return $('#username')
    }

    get loginButton(){
        return $('button[type="submit"]')
    }
    get loginMessage(){
        return $('#flash')
    }

async login(username, password){
await this.usernameTextbox.setValue(username)
await this.usernameTextbox.setValue(password)
await this.loginButton.click()
}



async checkMessage(msg){
    await expect(this.loginMessage).toHaveTextContaining(msg)

}





}
module.exports = new LoginPage()