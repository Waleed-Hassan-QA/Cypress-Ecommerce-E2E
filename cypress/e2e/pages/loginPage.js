export class loginPage{

    locators = {
        email:'#email',
        password:'#pass',
        loginBtn:'#send2',
        isLoginDone:'div[class="panel header"] span[class="logged-in"]',
        myAccountTxt:'.base',
        // Error locators
        login_error:'div[data-bind="html: $parent.prepareMessageForHtml(message.text)"]',
        required_username:"#email-error",
        required_password:"#pass-error"
    }

visitLoginPage(){
    cy.visit('/' + Cypress.env('login_Url'))
}

login_with_valid_credentials(email,password){
    cy.get(this.locators.email).clear().type(email)
    cy.get(this.locators.password).clear().type(password)
    cy.get(this.locators.loginBtn).click()
}

invalid_username_and_password(email,password){
    cy.get(this.locators.email).clear().type(email)
    cy.get(this.locators.password).clear().type(password)
    cy.get(this.locators.loginBtn).click()
}

valid_username_and_invalid_password(email,password){
    cy.get(this.locators.email).clear().type(email)
    cy.get(this.locators.password).clear().type(password)
    cy.get(this.locators.loginBtn).click()
}

invalid_username_and_valid_password(email,password){
    cy.get(this.locators.email).clear().type(email)
    cy.get(this.locators.password).clear().type(password)
    cy.get(this.locators.loginBtn).click()
}

empty_username_password(){
    cy.get(this.locators.email).clear()
    cy.get(this.locators.password).clear()
    cy.get(this.locators.loginBtn).click()
}

// Success Messages Functions
loginSuccessMessage(){
   return cy.get(this.locators.isLoginDone)
}

// Error Messages Functions
loginErrorMessage(){
    return cy.get(this.locators.login_error);
 }

 required_Email_Field_Error(){
    return cy.get(this.locators.required_username)
 }

 required_Password_Field_Error(){
    return cy.get(this.locators.required_password)
 }


}