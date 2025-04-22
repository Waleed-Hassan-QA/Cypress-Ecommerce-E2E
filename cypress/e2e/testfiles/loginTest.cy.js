/// <reference types="Cypress" />

import { loginPage } from "../pages/loginPage"
import { generalPage } from "../pages/generalPage"
import loginData from "../../fixtures/loginData.json"

const loginObj = new loginPage()
const generalObj = new generalPage()
//hello
describe('Login Page Automation',()=>{

beforeEach(function(){
  
    loginObj.visitLoginPage()

})

  it('Login with valid Credentials',()=>{
      
      loginObj.login_with_valid_credentials(loginData.login.email,loginData.login.password)
      loginObj.loginSuccessMessage().contains(loginData.login.expectedUsername)
      generalObj.signout()
      cy.url().should('include','logoutSuccess')

    })

  it('Invalid email & password',()=>{
      
      loginObj.invalid_username_and_password(loginData.invalidUsernamePassword.email,loginData.invalidUsernamePassword.password)
      loginObj.loginErrorMessage().should('contain',loginData.errors.ErrorMessage)

    })

  it('Valid email & invalid password',()=>{
      
      loginObj.valid_username_and_invalid_password(loginData.validUsername_InvalidPassword.email,loginData.validUsername_InvalidPassword.password)
      loginObj.loginErrorMessage().should('contain',loginData.errors.ErrorMessage)

    })

  it('Invalid email & valid password',()=>{
      
      loginObj.valid_username_and_invalid_password(loginData.invalidUsername_ValidPassword.email,loginData.invalidUsername_ValidPassword.password)
      loginObj.loginErrorMessage().should('contain',loginData.errors.ErrorMessage)

    })

  it('Empty email & password',()=>{
      
      loginObj.empty_username_password()
      loginObj.required_Email_Field_Error().should('contain',loginData.errors.ReqEmail)
      loginObj.required_Password_Field_Error().should('contain',loginData.errors.ReqPassword)

    })

})