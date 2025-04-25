import { AddToCartPage } from "../PageObjectFiles/AddToCartPage"
import loginData from "../../fixtures/loginData.json"
import productData from "../../fixtures/productData.json"

const addTocartObj = new AddToCartPage()
const data = {}
//hello
describe('Search & Add Product',()=>{

beforeEach(function(){
  
   cy.login(productData.login.email,productData.login.password)
   cy.url().should('include','softwaretestingboard')
   cy.title().should('eq',productData.title.pageTitle)

})

  it('Search & Add Product Into Cart',()=>{    
  // addTocartObj.searchProductFrom_AutoSuggestion(productData.product.productName)
    addTocartObj.searchProduct(productData.product.productName)
    addTocartObj.addToCart()
    addTocartObj.verifySuccessMessage().should('contain',productData.message.successMessage)
                                       .and('contain',productData.product.productName)
    })

  it('Search product that does not exist',()=>{    
    addTocartObj.searchProduct(productData.invalidSearch.productName)
    addTocartObj.checkIfproductNotExist().should('be.visible')
    addTocartObj.checkIfproductNotExist().should('contain',productData.invalidSearch.noResult)
    })



})