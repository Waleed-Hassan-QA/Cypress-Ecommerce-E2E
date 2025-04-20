import { loginPage } from "../pages/loginPage"
import loginData from "../../fixtures/loginData.json"

const loginObj = new loginPage()

describe('Login Page Automation',()=>{


before(function(){
  
    loginObj.visitLoginPage()

})

  it('login with valid Credentials',()=>{
      
      loginObj.login_With_Valid_Credentials(loginData.email,loginData.password)
      loginObj.verifyLogin().contains(loginData.expectedUsername)

    })

})