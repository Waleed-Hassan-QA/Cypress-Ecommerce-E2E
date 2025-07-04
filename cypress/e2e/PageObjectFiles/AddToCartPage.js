/// <reference types="Cypress" />
export class AddToCartPage{

    Locators = {
        search_input:'#search',
        click_search:'button[title="Search"]',
        size: '.swatch-opt-318 > .size > .swatch-attribute-options > #option-label-size-143-item-166',
        color: '.swatch-opt-318 > .swatch-attribute.color > .swatch-attribute-options > #option-label-color-93-item-49',
        find_addtocart:'body > div:nth-child(5) > main:nth-child(4) > div:nth-child(4) > div:nth-child(1) > div:nth-child(5) > div:nth-child(3) > ol:nth-child(1) > li:nth-child(1) > div:nth-child(1)',
        addtocart: 'body > div:nth-child(5) > main:nth-child(4) > div:nth-child(4) > div:nth-child(1) > div:nth-child(5) > div:nth-child(3) > ol:nth-child(1) > li:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(5) > div:nth-child(1) > div:nth-child(1) > form:nth-child(1) > button:nth-child(4)',
        addtocartButtonViaContain :'Add to Cart',
        successMessage:'div[data-bind="html: $parent.prepareMessageForHtml(message.text)"]',
        noResultMessage:'div[class="message notice"] div',
        searchCart :'img[alt="Orion Two-Tone Fitted Jacket"]',
       
    }
    
  searchProduct(productName){
    cy.get(this.Locators.search_input).clear().type(productName) 
    cy.get(this.Locators.click_search).click()
  }

  addToCart(){
    cy.scrollTo(0, 50)
    cy.get(this.Locators.size).first().click()
    cy.get(this.Locators.color).first().click()
    cy.get(this.Locators.searchCart).realHover()
    cy.contains(this.Locators.addtocartButtonViaContain).click({force: true})
    }

    verifySuccessMessage(){
        return cy.get(this.Locators.successMessage);
    }

    searchProductFrom_AutoSuggestion(search){
      cy.get(this.Locators.search_input).type(search).then(($el)=>{
       cy.get('ul[role="listbox"]').each(($item,index,$list)=>{
        if($item.text().includes(search)){
          cy.wrap($item).click()
        }
       })
      })
  }

    getSearchProductFromGrid(ProductName){
      cy.get('#search').type('Orion Two-Tone Fitted Jacket')
      cy.get('button[title="Search"]').click()
      cy.scrollTo(0,70)
      cy.get('div[class="products wrapper grid products-grid"]')
      .find('div[class="product-item-info"]')
      .find('div[class="product details product-item-details"]')
      .find('a[class="product-item-link"]')
                .each(($ele,index,list)=>{
                  const txt = $ele.text().trim()
                  if(txt.includes('Orion Two-Tone Fitted Jacket')){
                    cy.log(index)
                  } 
       })

       
    // cy.get('li[class="item product product-item"]').eq(1).realHover()
    //cy.get('li[class="item product product-item"]').contains('Orion Two-Tone Fitted Jacket').click()

    }

    checkIfproductNotExist(){
        return cy.get(this.Locators.noResultMessage);
    }

}