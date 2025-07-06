export class registerPage{

locators = {    
    firstname: '#firstname',
    lastname: '#lastname',
    email: '#email_address',
    password: '#password',
    confirmPassword: '#password-confirmation',
    createButton: 'button[title="Create an Account"]',
    verifySuccessMessage: 'div[data-bind="html: $parent.prepareMessageForHtml(message.text)"]',
    error:"div[data-bind='html: $parent.prepareMessageForHtml(message.text)']"
}

validationErrors = {

    firstNameRequired: '#firstname-error',
    lastNameRequired: '#lastname-error',
    emailRequired: '#email_address-error', // Same is being used for required and invalid format of email
    passwordRequired: '#password-error',
    confirmPasswordRequired: '#password-confirmation-error',
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
    cy.get(this.locators.email).clear().type(email)
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

getErrorMessage(){
    return cy.get(this.locators.error)
}


// ----- Handing Validation Errors


required_Firstname_Field_Error(){
   return cy.get(this.validationErrors.firstNameRequired)
}
required_Lastname_Field_Error(){
   return  cy.get(this.validationErrors.lastNameRequired)
}
required_Email_Field_Error(){
   return cy.get(this.validationErrors.emailRequired)
}
required_Password_Field_Error(){
    return cy.get(this.validationErrors.passwordRequired)
}
required_ConfirmPassword_Field_Error(){
    return cy.get(this.validationErrors.confirmPasswordRequired)
}
check_InvalidEmail_Format_Error(){
    return cy.get(this.validationErrors.emailRequired)
}



}