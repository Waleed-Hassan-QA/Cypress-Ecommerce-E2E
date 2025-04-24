import { AddToCartPage } from "../PageObjectFiles/AddToCartPage"
import loginData from "../../fixtures/loginData.json"
import productData from "../../fixtures/productData.json"

const addTocartObj = new AddToCartPage()
const data = {}
//hello
describe('Search & Add Product',()=>{

before(function(){
  
   cy.login(productData.login.email,productData.login.password)
   cy.url().should('include','softwaretestingboard')
   cy.title().should('eq',productData.title.pageTitle)

})

  it('add to cart',()=>{    
    addTocartObj.searchProduct(productData.product.productName)
    addTocartObj.addToCart()
    addTocartObj.verifySuccessMessage().should('contain',productData.message.successMessage)
                                       .and('contain',productData.product.productName)
    })



})