describe('Screenshot', () => { 
    const timeout = 10000;
    let datosLogin;
    before("before", () => {
        cy.fixture('loginData').then(data => {
            datosLogin = data
        })
    });

     beforeEach("Actividad complementaria 7", () => {
        cy.visit('');
        cy.get("#registertoggle").dblclick();
        cy.get('#user').type(datosLogin.username);
        cy.get('#pass').type(datosLogin.password);
        cy.get('#submitForm').click();
        cy.get(`[id^='user_${datosLogin.username}']`).should('be.visible');
    })

  	it("Deberia sacar una foto del homePage", () =>{
         //cy.screenshot({capture:'fullpage'});
         cy.screenshot({capture:'runner'})
	})
  
    it("Deberia sacar una foto del usuario del navbar", () =>{
        cy.get(`[id^='user_${datosLogin.username}']`).screenshot("");
	})
 })