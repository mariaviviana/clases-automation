//reference types = "cypress";
describe('Hooks',()=>{
    let usuario1, usuario2, password


    before('Before',()=>{
        usuario1="pushingit1"
        usuario2="pushingit2"
        password="123456!"
    })
    beforeEach("before each",()=>{
        cy.visit('https://pushing-front.vercel.app/')
        cy.get('#registertoggle').dblclick()
    })

    it('test1',()=>{
    cy.get('#user').type(usuario1)
    cy.get('#pass').type(password)
    cy.get('#submitForm').click()
    })
    
    it('test2',()=>{
    cy.get('#user').type(usuario2)
    cy.get('#pass').type(password)
    cy.get('#submitForm').click()
    })

    afterEach('AfterEach',()=>{
        cy.get('#logout').click()
    })

    after('After',()=>{
        cy.log('Enviando reportes')
    })
})