import { beforeEach } from "mocha"
import homePage from "../page-objects/HomePage"
import signUpPage from "../page-objects/SignUpPage"
import signUpFactory from "../fixtures/SignupFactory"

describe('Cadastro', () => {

    it('Fill form for register', function() {

        var deliver = signUpFactory.deliver()
        
        let url = Cypress.config().baseUrl; //accesing baseUrl

        //Navigate to BugerEats Page
        homePage.go()
        homePage.registerToDeliverButton()
        
        //Fill form and submit
        const registerRequiredMesssage = "Cadastre-se para  fazer entregas"
        signUpPage.fillForm(registerRequiredMesssage, deliver)
        signUpPage.submit()

        //Check sucess message and close the modal
        const successMessage = "Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato."
        signUpPage.modalContent(successMessage)

        //Check if customer was sent to home
        cy.url().should('eq', url + "/")
    })
})