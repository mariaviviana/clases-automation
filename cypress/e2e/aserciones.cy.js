/// <reference types="cypress" />

describe('Aserciones', () => {
    let datosLogin;
    before("before", () => {
        cy.fixture('loginData').then(data => {
            datosLogin = data
        })
    });

    beforeEach("beforeEach", () => {
        cy.visit('');
        cy.get("#registertoggle").dblclick()
        cy.get('#user').type(loginData.username)
        cy.get('#pass').type(loginData.password)
        cy.get('#submitForm').click()
        cy.xpath(`//h2[starts-with(@id,'user_${datosLogin.primerUsuario.username}')]`).should('exist')
        cy.get('#waitslink').click()
    })

    it("Deberia verificar que el titulo de la pagina sea Waits utilizando SHOULD", () => {
        cy.get('#title').should('have.text', "Waits")
    })

    it("Deberia verificar que el titulo de la pagina sea Waits utilizando EXPECT", () => {
        cy.get('#title').invoke('text').then(texto => {
            expect(texto).is.equal('Waits')
        })
    })

    it("Deberia verificar que el titulo de la pagina sea Waits utilizando ASSERT", () => {
        cy.get('#title').invoke('text').then(texto => {
            assert.equal(texto, "Waits")
        })
    })

    it("")
})