import {ToDoListPage} from '../support/pages/todoListPage';
import {LoginPage} from '../support/pages/loginPage';

describe('Actividad complementaria 6', () => { 
    let datosLogin;
    const todoListPage = new ToDoListPage();
    const loginPage = new LoginPage()

    before("Asociando archivo Json",()=>{
        cy.fixture('loginData').then(data => {
            datosLogin = data
        })
    })

    beforeEach("Actividad complementaria 6", () => {
       cy.visit('');
       cy.get("#registertoggle").dblclick();
       loginPage.ingresarUsuario(datosLogin.username);
       loginPage.ingresarPassword(datosLogin.password);
       loginPage.botonIngresar();
       cy.get('#todolistlink').click()
   })

     it("Deberia verificar que existen los botones", () =>{
       //loginPage.retornarUsuario(datosLogin.username).should('exist');
       todoListPage.verificarBotonAll().should('exist');
       todoListPage.verificarBotonCompleted().should('exist');
       todoListPage.verificarBotonActive().should('exist');
       todoListPage.verificarBotonRemoveAll().should('exist');
   })
})
