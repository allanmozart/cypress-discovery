import { beforeEach } from "mocha"
import homePage from "../page-objects/HomePage"
import signUpPage from "../page-objects/SignUpPage"

describe('Cadastro', () => {

    beforeEach( ()=> {
        cy.fixture('deliver').then(function (d) {
            this.deliver = d
        })
    })

    it('Fill form for register', function() {
        let url = Cypress.config().baseUrl; //accesing baseUrl

        //Navigate to BugerEats Page
        homePage.go()
        homePage.registerToDeliverButton()
        
        //Fill form and submit
        const registerRequiredMesssage = "Cadastre-se para  fazer entregas"
        signUpPage.fillForm(registerRequiredMesssage, this.deliver.signup)
        signUpPage.submit()

        //Check sucess message and close the modal
        const successMessage = "Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato."
        signUpPage.modalContent(successMessage)

        //Check if customer was sent to home
        cy.url().should('eq', url + "/")
    })
})