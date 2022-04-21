class SignUpPage {

    fillForm(registerRequiredMesssage, deliver) {
        //Check register page message
        //this.registerMessage = 
        cy.xpath('//*[@id="page-deliver"]/form/h1').should('have.text', registerRequiredMesssage)

        //Start filling form data
        cy.xpath('//*[@name="name"]').type(deliver.name)
        cy.xpath('//*[@name="cpf"]').type(deliver.cpf)
        cy.xpath('//*[@name="email"]').type(deliver.email)
        cy.xpath('//*[@name="whatsapp"]').type(deliver.whatsapp)
        cy.xpath('//*[@name="postalcode"]').type(deliver.address.postalcode)
        cy.xpath('//*[@value="Buscar CEP"]').click()
        cy.xpath('//*[@name="address"]').should('have.value', deliver.address.street)
        cy.xpath('//*[@name="address-number"]').type(deliver.address.number)
        cy.xpath('//*[@name="address-details"]').type(deliver.address.details)
        cy.xpath('//*[@name="district"]').should('have.value', deliver.address.district)
        cy.xpath('//*[@name="city-uf"]').should('have.value', deliver.address.city_state)

        //select delivery method
        cy.xpath('(//*[@class="delivery-method"]/li/span[text()="Moto"])').click()
        cy.xpath('//*[@class="dropzone"]/input').attachFile('/images/' + deliver.cnh)
        
    }

    submit() {
        //Click on submit form button
        cy.xpath('//*[@class="button-success"]').click()
    }

    modalContent(successMessage) {
        //Click on submit form button
        cy.xpath('//*[@id="swal2-html-container"]').should("have.text", successMessage)
        cy.xpath('//*[@class="swal2-confirm swal2-styled"]').click()
    }
    


}

export default new SignUpPage();