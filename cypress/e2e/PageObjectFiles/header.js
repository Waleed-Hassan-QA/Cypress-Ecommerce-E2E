export class header{

locators = {

    logo:"img[src='https://magento.softwaretestingboard.com/pub/static/version1695896754/frontend/Magento/luma/en_US/images/logo.svg']",
    signIn:"div[class='panel header'] li[data-label='or'] a",
    signUp:".panel > .header > :nth-child(3) > a",
    search:"#search",
    menuItems:'a[class="level-top ui-corner-all"]'

}


getLogo(){
    return cy.get(this.locators.logo)
}

getSigIn(){
    return cy.get(this.locators.signIn)
}

getSignUp(){
    return cy.get(this.locators.signUp)
}

getSearchInput(){
    return cy.get(this.locators.search)
}

getMenu(){
    return cy.get(this.locators.menuItems)
}






}