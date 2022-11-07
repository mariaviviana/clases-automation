//reference types = "cypress";
describe.skip('Hooks',()=>{
    let loginDatos

    before('Before',()=>{

        cy.fixture("loginData").then(datos => {
            loginDatos=datos
        })
    })
    beforeEach("before each",()=>{
        cy.visit('https://pushing-front.vercel.app/')
        cy.get('#registertoggle').dblclick()
    })

    it('test1',()=>{
    cy.get('#user').type(loginDatos.username)
    cy.get('#pass').type(loginDatos.password)
    cy.get('#submitForm').click()
    })
    
    it('test2',()=>{
    cy.get('#user').type(loginDatos.usernameDos)
    cy.get('#pass').type(loginDatos.password)
    cy.get('#submitForm').click()
    })

afterEach('AfterEach',()=>{
        cy.get('#logout').click()
  })

    after('After',()=>{
        cy.log('Enviando reportes')
    })
});


describe('Registro Fixture', () => {
    let registerDatos, numeroRandom

    before('Creamos set de datos',()=>{
        cy.fixture("registerData").then(datos => {
        registerDatos=datos
        numeroRandom = Math.floor(Math.random() * 1000);
        })
    })
    
    beforeEach('Visitar la pagina',()=>{
        cy.visit('https://pushing-front.vercel.app/')
    })

    it('Deberia registrarse correctamente',()=>{
        cy.get('#user').type(`${registerDatos.segundoRegistro.username}${numeroRandom}`)
        cy.get('#pass').type(registerDatos.primerRegistro.password)
        cy.get(`[value='${registerDatos.primerRegistro.genre}']`).check({force:true})
        cy.get('#day').select(registerDatos.primerRegistro.day)
        cy.get('#month').select(registerDatos.primerRegistro.month)
        cy.get('#year').select(registerDatos.primerRegistro.year)
        cy.get('#submitForm').click()
        cy.xpath(`//h2[starts-with(@id,'user_${registerDatos.primerRegistro.username}${numeroRandom}_')]`).should('exist');
    })

    it('Deberia registrarse correctamente',()=>{
        cy.get('#user').type(`${registerDatos.segundoRegistro.username}${numeroRandom}`)
        cy.get('#pass').type(registerDatos.segundoRegistro.password)
        cy.get(`[value='${registerDatos.segundoRegistro.genre}']`).check({force:true})
        cy.get('#day').select(registerDatos.segundoRegistro.day)
        cy.get('#month').select(registerDatos.segundoRegistro.month)
        cy.get('#year').select(registerDatos.segundoRegistro.year)
        cy.get('#submitForm').click()
        cy.xpath(`//h2[starts-with(@id,'user_${registerDatos.segundoRegistro.username}${numeroRandom}_')]`).should('exist');
    })
    afterEach("Deberia modificar el numero random",()=>{
        numeroRandom = Math.floor(Math.random() * 1000);
    })
})