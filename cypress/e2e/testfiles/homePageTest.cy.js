import { homePage } from "../pages/homePage"
import loginData from "../../fixtures/loginData.json"
import productData from "../../fixtures/productData.json"

const homePageObj = new homePage()

//hello
describe('Home Page Automation',()=>{

before(function(){
  
   cy.login(productData.login.email,productData.login.password)
   cy.url().should('include','softwaretestingboard')
   cy.title().should('eq',productData.title.pageTitle)

})

  it('search & add product into cart',()=>{
      
    homePageObj.searchProduct(productData.product.productName)
    homePageObj.addToCart()
    homePageObj.verifySuccessMessage().should('contain',productData.message.successMessage)
                                       .and('contain',productData.product.productName)

    })

})