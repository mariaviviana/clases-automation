/// <reference types="cypress" />
describe('Actividad complementaria 4', () => {
let loginData
    before("Set de datos", () => {
   cy.fixture("loginError").then(datos => {
       loginData=datos
   })
   });
   
    beforeEach("beforeEach", () => {
      cy.visit('')
      cy.get("#registertoggle").dblclick();
     });
   
    it("Debería mostrar un error al no encontrar el usuario", () => {
      cy.get('#user').type(loginData.userName);
      cy.get('#pass').type(loginData.pass);
      cy.get('#submitForm').click();
      cy.get('p').first().should('have.text', loginData.errorMessage);
    });
   
   });
   