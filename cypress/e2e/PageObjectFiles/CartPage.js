/// <reference types="Cypress" />
export class CartPage{

    locators = {    

     cartLink:"div[data-bind='html: $parent.prepareMessageForHtml(message.text)'] a",

     // Product locators
     productImage:".product-image-photo[src='https://magento.softwaretestingboard.com/pub/media/catalog/product/cache/b45fda5d42e04db84d57ecfd089c603c/m/j/mj07-red_main_1.jpg']",
     productName:"td[class='col item'] div[class='product-item-details'] a",
     price:"td[class='col price'] span[class='price']",
     Quantity: "#cart-733927-qty",

     // Product Remove locators
     removeIcon:".action.action-delete",
     removeProductSuccessMessage:"div[class='page-wrapper'] p:nth-child(1)",
     continueShopping:"div[class='cart-empty'] p a"

    }
    
goToCartPagefromUrl(){
    cy.visit('/'+ Cypress.env('cart_Url'))
}
   
isCartlinkPresent(){
    return cy.get(this.locators.cartLink)
}
 
getProductImage(){
    return cy.get(this.locators.productImage)
}

getProductName(){
    return cy.get(this.locators.productName)
}

getProductPrice(){
    return cy.get(this.locators.price)
}

getProductQuantity(){
    return cy.get(this.locators.Quantity)
}

removeProductfromCart(){
    cy.get(this.locators.removeIcon).click()
    return cy.get(this.locators.removeProductSuccessMessage)
}

continueShopping(){
    cy.get(this.locators.continueShopping).click()
}

    }