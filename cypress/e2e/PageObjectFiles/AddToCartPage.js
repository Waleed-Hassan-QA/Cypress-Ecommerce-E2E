/// <reference types="Cypress" />
export class AddToCartPage{

    Locators = {
        search_input:'#search',
        click_search:'button[title="Search"]',
        size: '.swatch-opt-318 > .size > .swatch-attribute-options > #option-label-size-143-item-166',
        color: '.swatch-opt-318 > .swatch-attribute.color > .swatch-attribute-options > #option-label-color-93-item-49',
        find_addtocart:'body > div:nth-child(5) > main:nth-child(4) > div:nth-child(4) > div:nth-child(1) > div:nth-child(5) > div:nth-child(3) > ol:nth-child(1) > li:nth-child(1) > div:nth-child(1)',
        addtocart: 'body > div:nth-child(5) > main:nth-child(4) > div:nth-child(4) > div:nth-child(1) > div:nth-child(5) > div:nth-child(3) > ol:nth-child(1) > li:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(5) > div:nth-child(1) > div:nth-child(1) > form:nth-child(1) > button:nth-child(4)',
        successMessage:'div[data-bind="html: $parent.prepareMessageForHtml(message.text)"]'
    }
    
  searchProduct(productName){
    cy.get(this.Locators.search_input).type(productName) 
    cy.get(this.Locators.click_search).click()
  }

  addToCart(){
    cy.scrollTo(0, 50)
    cy.get(this.Locators.size).first().click()
    cy.get(this.Locators.color).first().click()
    cy.get(this.Locators.find_addtocart).realHover()
    cy.get(this.Locators.addtocart).click({force: true})
    }

    verifySuccessMessage(){
        return cy.get(this.Locators.successMessage);
    }
}