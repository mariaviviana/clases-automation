//reference types = "cypress";
describe("Actividad complementaria", () => {
  const numero = Math.floor(Math.random() * 1000);
  it("Buscar elementos con selectores", () => {
    cy.visit("https://pushing-front.vercel.app");
    cy.get("label").siblings("#user").type(`Viviana${numero}`).should("exist"); //por metodo .siblings-> cy.get('label').siblings('#user')/Por atributo->[id="user"]/Por id-> cy.get('#user')
    cy.get('[class*="password"]').type("123qweasd@").should("exist"); //por className -> cy.get('input.password')
    cy.get("fieldset")
      .find('input[value="Female"]')
      .check({ force: true })
      .should("exist"); //metodo .find
    cy.get("#day").children('[value="13"]')/*.select('13')*/.should("exist"); //metodo .children
    cy.get('[value="6"]').parent('[id="month"]').select('July').should("exist"); //metodo .parent
    cy.get('[value="1975"]') .parent('[name="year"]').select('1975').should('exist')//metodo .parent/Por id-> ('#year').select('1975')
    cy.contains('Register',{matchCase:false}).click()//metodo .contains/Tambien por tagName-> ('button')/Por id -> ('#submitForm')/Por id y tagName-> ('button#submitForm')
    cy.wait(5000)

    cy.contains('to do list',{matchCase:false}).click()//metodo .contains  
    cy.get('[class*="chakra-input"]').type('Tarea 1').should('exist')//className + atributo
    cy.get('input').siblings('button').click().should('exist')//metodo .siblings
    cy.get('ul[role="list"]').find("p").click().should('exist')//metodo .find
  });
  
});
