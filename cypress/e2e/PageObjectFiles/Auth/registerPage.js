export class registerPage{

locators = {    
    firstname: '#firstname',
    lastname: '#lastname',
    email: '#email_address',
    password: '#password',
    confirmPassword: '#password-confirmation',
    createButton: 'button[title="Create an Account"]',
    verifySuccessMessage: 'div[data-bind="html: $parent.prepareMessageForHtml(message.text)"]'
}

visitRegisterPage(){
    cy.visit('/' + Cypress.env('register_Url'))
}

enterFirstName(fname){
    cy.get(this.locators.firstname).type(fname)
}

enterLastName(lname){
    cy.get(this.locators.lastname).type(lname)
}

enterEmail(email){
    cy.get(this.locators.email).type(email)
}


enterPassword(password){
    cy.get(this.locators.password).type(password)
}

enterConfirmPassword(c_password){
    cy.get(this.locators.confirmPassword).type(c_password)
}

CreateAccount(){
    cy.get(this.locators.createButton).click()
}

getSuccessMessage(){
    return cy.get(this.locators.verifySuccessMessage)
}


}