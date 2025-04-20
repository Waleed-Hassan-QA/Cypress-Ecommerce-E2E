import { registerPage } from "../pages/registerPage"
import registerData from "../../fixtures/registerData.json"

const registerObj = new registerPage()

describe('Registration flow',()=>{

  
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



})