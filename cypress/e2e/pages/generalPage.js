export class generalPage{

    locators = {    
     menu: ":nth-child(2) > .customer-welcome > .customer-name > .action",
     signout:"div[aria-hidden='false'] li[data-label='or'] a",
    }
    
    signout(){
    cy.get(this.locators.menu).click()
    cy.get(this.locators.signout).click()
    }

    signoutSuccessMessage(){
        return cy.get(this.locators.signoutSuccessUrl);
    }
    
    }