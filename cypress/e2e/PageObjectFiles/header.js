/// <reference types="Cypress" />
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



findBrokenLink(){
    let totalLinks = 0
    let brokenLink = 0
    let activeLink = 0

cy.get('a').each(($link,index)=>{

    const href = $link.attr('href')
    
    if (href) {
        cy.request({url: href}).then((response)=>{

            totalLinks++
            
            if(response.status >= 400){
                cy.log(index + 1 +' = Link is Broken ** ' + href)
                brokenLink++
            }
            else{
                cy.log(index + 1 +' = Link is Fine ** ' + href)
                activeLink++
            }
        })

    }

}).then(($links)=>{
       
  //  totalLinks = $links.length
    
    cy.log('Total Links = ' + totalLinks)
    cy.log('Active Links = ' + activeLink)
    cy.log('Broken Links = ' + brokenLink)

})


}




}