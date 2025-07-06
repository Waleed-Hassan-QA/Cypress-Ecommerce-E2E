import { registerPage } from "../PageObjectFiles/Auth/registerPage"
import registerData from "../../fixtures/registerData.json"

const registerObj = new registerPage()

describe('Registration flow', () => {

  function generateRandomEmail() {
    const randomString = Math.random().toString(36).substring(2, 8)
    const email = randomString + "@gmail.com"
    return email
  }

  registerData.user.email = generateRandomEmail()

  it('create a new user account', () => {
    registerObj.visitRegisterPage()
    registerObj.enterFirstName(registerData.user.fname)
    registerObj.enterLastName(registerData.user.lname)
    registerObj.enterEmail(registerData.user.email)
    registerObj.enterPassword(registerData.user.password)
    registerObj.enterConfirmPassword(registerData.user.confirmPassword)
    registerObj.CreateAccount()
    registerObj.getSuccessMessage().should('have.text', registerData.user.expectedSuccessMessage)
  })

  it('create an account with an existing email', () => {
    registerObj.visitRegisterPage()
    registerObj.enterFirstName(registerData.user.fname)
    registerObj.enterLastName(registerData.user.lname)
    registerObj.enterEmail(registerData.user.email)
    registerObj.enterPassword(registerData.user.password)
    registerObj.enterConfirmPassword(registerData.user.confirmPassword)
    registerObj.CreateAccount()
    registerObj.getErrorMessage().should('be.visible')
    registerObj.getErrorMessage().should('contain', registerData.user.errorMessage)
  })

  it('Verify Required Field Validations', () => {
    registerObj.visitRegisterPage()
    registerObj.CreateAccount()
    registerObj.getFirstnameError().should('be.visible').and('have.text', registerData.errors.requiredField)
    registerObj.getLastnameError().should('be.visible').and('have.text', registerData.errors.requiredField)
    registerObj.getEmailError().should('be.visible').and('have.text', registerData.errors.requiredField)
    registerObj.getPasswordError().should('be.visible').and('have.text', registerData.errors.requiredField)
    registerObj.getConfirmPasswordError().should('be.visible').and('have.text', registerData.errors.requiredField)
  })

  it('Verify Invalid Email Formats Validation', () => {

    registerObj.visitRegisterPage()
    cy.wrap(['a', 'a b', 'ab@a', 'ab@1', 'ab@a.', 'a.com', '.com']).each((ele, index, list) => {
      registerObj.enterEmail(ele)
      registerObj.CreateAccount()
      registerObj.getInvalidEmail_FormatError().should('be.visible').and('have.text', registerData.errors.invalidEmailFormat)

    })

  })

})