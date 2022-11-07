//reference types = "cypress";
describe("Xpath",()=>{
    const numero = Math.floor(Math.random() * 1000)
    it("Localizando elementos con Xpath",()=>{
        cy.visit('https://pushing-front.vercel.app')
        cy.xpath('//input[@id="user"]')//cy.get('#user').type(`Viviana${numero}`)
        cy.xpath("//input[contains(@id,'pass')]").type("123qweasd@").should('exist')//cy.get('#pass').type("123qweasd@")
        cy.xpath("//fieldset//descendant::input[@value='Female']").check({force:true})//cy.get("[value='Female']").check({force:true})
        //cy.get('#day').select('13')
        //cy.get('#month').select('July')
        //cy.get('#year').select('1975')
        //cy.get('#submitForm').click()
        //cy.wait(5000)
    })
})