/// <reference types="Cypress" />

import { checkoutPage } from "../pages/checkoutPage"
import { homePage } from "../pages/homePage"

const checkoutPageObj = new checkoutPage()
const searchProduct = new homePage()

var user = require('../../fixtures/productData.json')
var product = require('../../fixtures/productData.json')
var shipDetails = require('../../fixtures/shipmentData.json')

describe('Checkout Page Automation', () => {


    before(function () {
        cy.clearAllCookies()
        cy.clearAllSessionStorage()
        cy.login(user.login.email, user.login.password)
        searchProduct.searchProduct(product.product.productName)
        searchProduct.addToCart();
        cy.wait(8000)
        searchProduct.verifySuccessMessage().should('contain',product.message.successMessage)
                                       .and('contain',product.product.productName)
    })

    it('Proceed to checkout', () => {
        
        checkoutPageObj.getProceedToPayment().should('be.visible')
        checkoutPageObj.goToCheckoutPage()
        cy.wait(4000)
        cy.url().should('include','shipping')
       //checkoutPageObj.addShippingDetails().should('be.visible').click()
       checkoutPageObj.enterShippingDetails(shipDetails.companyName,shipDetails.streetAddsress,
                                             shipDetails.city,shipDetails.state,shipDetails.zipcode,
                                            shipDetails.country,shipDetails.phone)
        checkoutPageObj.proceedToPlaceOrder()
        checkoutPageObj.getSuccessMessage().should('have.text','Thank you for your purchase!')

        cy.get('.checkout-success').then(($ele)=>{

            cy.log($ele.text())
        })

      
    })

    


})