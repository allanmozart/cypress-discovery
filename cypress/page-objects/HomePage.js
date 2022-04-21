class HomePage {
    
    go(){
        cy.visit('/')
    }

    registerToDeliverButton() {
        cy.xpath('//*[@id="page-home"]/div/main/a').click()
    } 

}

export default new HomePage();