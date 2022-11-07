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
        cy.get('#wait').dblclick()
    })
    

})