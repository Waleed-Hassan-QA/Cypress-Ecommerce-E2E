/// <reference types="Cypress" />

import { CartPage } from "../PageObjectFiles/CartPage"
import { AddToCartPage } from "../PageObjectFiles/AddToCartPage"

const cartPageObj = new CartPage()
const searchProduct = new AddToCartPage()

var user = require('../../fixtures/productData.json')
var product = require('../../fixtures/productData.json')

describe('Cart Page Automation', () => {

    before(function () {
        cy.clearAllCookies()
        cy.login(user.login.email, user.login.password)
        searchProduct.searchProduct(product.product.productName)
        searchProduct.addToCart();
        searchProduct.verifySuccessMessage().should('contain',product.message.successMessage)
                                       .and('contain',product.product.productName)

    })

    it('Check the product details in Cart', () => {
       cartPageObj.isCartlinkPresent().should('be.visible')
       cartPageObj.isCartlinkPresent().should('have.text','shopping cart')
       cartPageObj.isCartlinkPresent().click()
       cartPageObj.getProductImage().should('be.visible')
       cartPageObj.getProductName().should('have.text',product.product.productName)
       cartPageObj.getProductPrice().should('have.text',product.product.price)
       //cartPageObj.getProductQuantity().should('have.text',product.product.quantity)
    })

    it('Check product removal', () => {
       cy.visit('/')
       searchProduct.searchProduct(product.product.productName)
       searchProduct.addToCart();
       cartPageObj.isCartlinkPresent().click()
       cartPageObj.removeProductfromCart().should('have.text',product.removeProduct.successMessage)
    })


})