/// <reference types="Cypress" />
export class checkoutPage{

    locators = {    
        showCart: ".showcart",
        proceedToPayment: "#top-cart-btn-checkout",
        billingAddress:".action.action-show-popup",
        //Shipping Address Form
        companyName:"input[name='company']",
        streetName:"input[name='street[0]']",
        cityName:"input[name='city']",
        selectState:"select[name='region_id']",
        postCode:"input[name='postcode']",
        selectCountry:"select[name='country_id']",
        telephone:"input[name='telephone']",
        shipHereButton:".action.primary.action-save-address",
        // Other than form
        selectShippingMethod:"input[value='flatrate_flatrate']",
        nextButton:".button.action.continue.primary",
        placeOrder:"button[title='Place Order']",
        checkoutSuccessMessage:".base"

    }
    
   
getProceedToPayment(){
    cy.get(this.locators.showCart).click()
    return cy.get(this.locators.proceedToPayment)
 }

 goToCheckoutPage(){
    cy.get(this.locators.proceedToPayment).click()
 }

 addShippingDetails(){
    return cy.get(this.locators.billingAddress)
 }

enterShippingDetails(com_name,street,city,state,zipcode,country,phone){
  
   
   // cy.scrollTo(0,30)
   // cy.get(this.locators.selectState).select('Alabama')

   //  cy.get(this.locators.companyName).type(com_name)
   //  cy.get(this.locators.streetName).type(street)
   //  cy.get(this.locators.cityName).type(city)
   
   //cy.get('div[name="shippingAddress.region_id"] div[class="control"]').trigger("click")
   //  cy.get(this.locators.postCode).type(zipcode)
   //  cy.get(this.locators.selectCountry).select(country)
   //  cy.get(this.locators.telephone).type(phone)
   //  cy.get(this.locators.selectShippingMethod).check()

    cy.get(this.locators.nextButton).click()
 }

 proceedToPlaceOrder(){
   cy.get(this.locators.placeOrder).click()
 }

 getSuccessMessage(){
    return cy.get(this.locators.checkoutSuccessMessage)
 }


    }