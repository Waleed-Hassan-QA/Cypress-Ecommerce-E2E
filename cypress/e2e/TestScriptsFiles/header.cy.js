/// <reference types="Cypress" />

import { header } from '../PageObjectFiles/header'
const menu = require('../../fixtures/header.json')

const headerObj = new header()


describe('Check the header of the website', () => {

    beforeEach(function () {
        cy.visit('/')
    })

    it('Check the menu links and their landing pages', () => {   
        headerObj.getMenu().contains("What's New").click()
        cy.url().should('contain', menu.WhatsNew)
        headerObj.getMenu().contains("Women").click()
        cy.url().should('contain', menu.women)
        headerObj.getMenu().contains("Men").click()
        cy.url().should('contain', menu.men)
        headerObj.getMenu().contains("Gear").click()
        cy.url().should('contain', menu.gear)
        headerObj.getMenu().contains("Training").click()
        cy.url().should('contain', menu.training)
        headerObj.getMenu().contains("Sale").click()
        cy.url().should('contain', menu.sale)
    })


    it('Check the items present on header', () => {
        headerObj.getLogo().should('be.visible')
        headerObj.getSigIn().should('be.visible').should('contain','Sign In')
        headerObj.getSignUp().should('be.visible').should('contain','Create an Account')
        headerObj.getSearchInput().should('be.visible')
    })

    it.skip('Check If there is broken links', () => {
       
        headerObj.findBrokenLink()
     
    })

})