export class loginPage{
    
    locators = {

        email:'#email',
        password:'#pass',
        loginBtn:'#send2',
        isLoginDone:'div[class="panel header"] span[class="logged-in"]'
    }

visitLoginPage(){
    cy.visit(Cypress.env('LoginURL'))
}

login_With_Valid_Credentials(email,password){
    cy.get(this.locators.email).clear().type(email)
    cy.get(this.locators.password).clear().type(password)
    cy.get(this.locators.loginBtn).click()
}

verifyLogin(){
   return cy.get(this.locators.isLoginDone)
}

}