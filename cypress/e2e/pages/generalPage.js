export class generalPage{


    pages = {
        login : Cypress.env('login_Url'),
        register: Cypress.env('register_Url'),
        cart: Cypress.env('cart_Url')
    }
    
    locators = {    
     menu: ":nth-child(2) > .customer-welcome > .customer-name > .action",
     signout:"div[aria-hidden='false'] li[data-label='or'] a",
    }
    

    static goToHomepage(){
      cy.visit('/')
    }

    static goToLoginPage(){
      cy.visit('/'+ pages.login )
    }

    static goToRegisterPage(){
      cy.visit('/'+ pages.register )
    }

    static goToCartPage(){
      cy.visit('/'+ pages.cart )
    }

    signout(){
    cy.get(this.locators.menu).click()
    cy.get(this.locators.signout).click()
    }

    signoutSuccessMessage(){
        return cy.get(this.locators.signoutSuccessUrl);
    }
    
    }