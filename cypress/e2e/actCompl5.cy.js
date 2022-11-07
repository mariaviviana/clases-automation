describe('Esperas', () => { 
    const timeout = 10000;
    
     beforeEach("Actividad complementaria 5", () => {
        cy.visit('');
        cy.get("#registertoggle").dblclick()
        cy.get('#user').type('pushingit')
        cy.get('#pass').type('123456!')
        cy.get('#submitForm').click()
        cy.xpath(`//h2[starts-with(@id,'user_pushingit')]`).should('exist')
        cy.get('#waitslink').click()
        cy.get('button#wait').dblclick()
    })

 	xit("Deberia validar que el boton 'Cargando' vuelva a decir 'Button'", () =>{
        cy.get('#wait',{timeout:timeout}).should('have.text','Button')
	})
  
    xit("Deberia validar que exista un elemento cuyo texto sea 'Wait 5 more seconds'", () =>{
        cy.get('#colorChangeMessage',{timeout:timeout}).should('have.text','Wait 5 more seconds')

	})
  
    it("Deberia validar que el segundo mensaje no sea igual al primer mensaje", () =>{
        cy.get('#message',{timeout:timeout}).should('have.text','You have waited for ten seconds, CONGRATULATIONS')
        cy.get('#message',{timeout:timeout}).should('have.text','You are a man of patience and have waited fifteen seconds')
        cy.get('#message',{timeout:timeout}).should('not.have.text','You have waited for ten seconds, CONGRATULATIONS')
    })
    
})
