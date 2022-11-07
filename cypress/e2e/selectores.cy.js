//reference types = "cypress";
describe("Actividad complementaria",()=>{
    const numero = Math.floor(Math.random() * 1000)
    it("Buscar elementos con css-selector",()=>{
        cy.visit('https://pushing-front.vercel.app')
        cy.get('[id="user"]').should('exist')//por atributo. Por id seria -> cy.get('#user') 
        cy.get('[class*="password"]').should('exist')//por className -> cy.get('input.password')
        cy.get('[class*="chakra-input password"]').should('exist')//debe contener ese valor en cualquier lugar
        cy.get('[class^="chakra-input password"]').should('exist')//debe iniciar con ese valor
        cy.get('[class$="password css-1ekf6i8"]').should('exist')//debe terminar con ese valor
        cy.get('fieldset').find('input[value="Female"]').should('exist')
        cy.get('#day').children('[value="13"]').should('exist')
        cy.get('[value="July"]').parent('').should('exist')
        cy.get('#year').select('1975')
        cy.get('button').should('exist')//tagName. Por id -> cy.get('#submitForm'). Por id y tagName -> cy.get('button#submitForm')
        cy.wait(5000)
    })
    it("Buscar elementos aplicando metodos",()=>{
        cy.visit('https://pushing-front.vercel.app')
        cy.get('label').find('input[value="user"]').should('exist')//metodo find
        cy.get('label').siblings('#user').should('exist')//metodo siblings
        cy.get('#day').children('[value="13"]').should('exist')//metodo children
        cy.get('fieldset').find('input[value="Female"]').should('exist')//metodo find
        cy.get('[value="1975"]'.parent('#year').should('exist'))//metodo parent
        cy.contains('Tarea1', {matchCase:false})
})
})