import { registerPage } from "../PageObjectFiles/Auth/registerPage"
import registerData from "../../fixtures/registerData.json"

const registerObj = new registerPage()

describe('Registration flow',()=>{

 function generateRandomEmail() {
        const randomString = Math.random().toString(36).substring(2, 8)
        const email = randomString + "@gmail.com"
        return email
    }

    registerData.email = generateRandomEmail()

  it('create a new user account',()=>{
      registerObj.visitRegisterPage()
      registerObj.enterFirstName(registerData.fname)
      registerObj.enterLastName(registerData.lname)
      registerObj.enterEmail(registerData.email)
      registerObj.enterPassword(registerData.password)
      registerObj.enterConfirmPassword(registerData.confirmPassword)
      registerObj.CreateAccount()
      registerObj.getSuccessMessage().should('have.text',registerData.expectedSuccessMessage)
    })

    it('create an account with an existing email',()=>{
      registerObj.visitRegisterPage()
      registerObj.enterFirstName(registerData.fname)
      registerObj.enterLastName(registerData.lname)
      registerObj.enterEmail(registerData.email)
      registerObj.enterPassword(registerData.password)
      registerObj.enterConfirmPassword(registerData.confirmPassword)
      registerObj.CreateAccount()
      registerObj.getErrorMessage().should('be.visible')
      registerObj.getErrorMessage().should('contain',registerData.errorMessage)
    })

})