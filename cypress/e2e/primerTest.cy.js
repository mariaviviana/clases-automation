//reference types = "cypress";
describe("Actividad complementaria",()=>{
    const numero = Math.floor(Math.random() * 1000)
    it("Actividad complementaria 1",()=>{
        cy.visit('https://pushing-front.vercel.app')
        cy.get('#user').type(`Viviana${numero}`)
        cy.get('#user').clear()
        cy.get('#user').type(`Viviana${numero}`)
        cy.get('#pass').type("123qweasd@")
        cy.get("[value='Female']").check({force:true})
        cy.get('#day').select('13')
        cy.get('#month').select('July')
        cy.get('#year').select('1975')
        cy.get('#submitForm').click()
        cy.wait(5000)
    })
})