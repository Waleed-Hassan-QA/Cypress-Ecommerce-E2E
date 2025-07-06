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

  it('Create a new user account', () => {
    registerObj.visitRegisterPage()
    registerObj.enterFirstName(registerData.user.fname)
    registerObj.enterLastName(registerData.user.lname)
    registerObj.enterEmail(registerData.user.email)
    registerObj.enterPassword(registerData.user.password)
    registerObj.enterConfirmPassword(registerData.user.confirmPassword)
    registerObj.CreateAccount()
    registerObj.getSuccessMessage().should('have.text', registerData.user.expectedSuccessMessage)
  })

  it('Create an account with an existing email', () => {
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

  it('Required fields || Validation Check', () => {
    registerObj.visitRegisterPage()
    registerObj.CreateAccount()
    registerObj.required_Firstname_Field_Error().should('be.visible').and('have.text', registerData.errors.requiredField)
    registerObj.required_Lastname_Field_Error().should('be.visible').and('have.text', registerData.errors.requiredField)
    registerObj.required_Email_Field_Error().should('be.visible').and('have.text', registerData.errors.requiredField)
    registerObj.required_Password_Field_Error().should('be.visible').and('have.text', registerData.errors.requiredField)
    registerObj.required_ConfirmPassword_Field_Error().should('be.visible').and('have.text', registerData.errors.requiredField)
  })

  it('Invalid email formats || Validation Check', () => {

    registerObj.visitRegisterPage()
    cy.wrap(['a', 'a b', 'ab@a', 'ab@1', 'ab@a.', 'a.com', '.com']).each((ele, index, list) => {
      registerObj.enterEmail(ele)
      registerObj.CreateAccount()
      registerObj.check_InvalidEmail_Format_Error().should('be.visible')
      .and('have.text', registerData.errors.invalidEmailFormat)

    })

  })

})