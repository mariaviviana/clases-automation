//reference types = "cypress";
describe('Xpath', () => {
    it('Actividad complementaria 3', () =>{
        cy.visit("https://pushing-front.vercel.app");
        //cy.xpath("//span[@id='registertoggle']").dblclick().should('exist') //xpath relative//cy.contains('Iniciá sesión').dblclick()
        //cy.xpath("//span[contains(@id,'registertoggle')]").dblclick().should('exist')//xpath contains
        //cy.xpath("//span[starts-with(@id,'register')]").dblclick().should('exist')//xpath starts-with
        cy.xpath("//span[text()='Iniciá sesión']").dblclick().should('exist')//xpath text
        //cy.xpath("//span[@id='registertoggle' and text()='Iniciá sesión']").dblclick().should('exist')//xpath and
        //cy.xpath("//span[@id='registertoggle' or text()='Iniciá sesión']").dblclick().should('exist')//xpath or
        //cy.xpath("//span[@id='registertoggle' and not (@class='register')]").dblclick().should('exist')//xpath and not
        //cy.xpath("//form//descendant::span[@id='registertoggle']").dblclick().should('exist')//xpath descendant
        //cy.xpath("//span[@id='registertoggle']//ancestor::form").dblclick().should('exist')//xpath ascentor
        //cy.xpath("//p[@class='chakra-text css-1ayfwcb']//child::span").dblclick().should('exist')//xpath child
        //cy.xpath("//span[@id='registertoggle']//parent::p").dblclick().should('exist')//xpath parent
        //cy.xpath("//div[@role='group']//following-sibling::p").dblclick().should('exist')//xpath following-sibling
        //cy.xpath("//p//preceding-sibling::div[@role='group']").dblclick().should('exist')//xpath preceding-sibling
        cy.xpath("//div[@role='group']/input[@id='user']").type(`pushingit`).should('exist')//xpath and css Selector//cy.get('#user').type(`pushingit`);
        //cy.xpath("//input[@id='user']").type(`pushingit`).should('exist')//xpath relative
        //cy.xpath("//input[contains(@id,'user')]").type(`pushingit`).should('exist')//xpath contains
        //cy.path("//input[@name='user' and @id='user']").type(`pushingit`).should('exist')//xpath and
        //cy.xpath("//input[starts-with(@class,'chakra')]").type(`pushingit`).should('exist')//xpath starts-with
        cy.xpath("//label[@for='pass']//following-sibling::input").type('123456!').should('exist')//xpath following-sibling//cy.get('#pass').type('123456!');
        //cy.xpath("//input[@name='pass' and @type='password']").type('123456!').should('exist')//xpath and
        //cy.xpath("//form//descendant::button[@id='submitForm']").click().should('exist')//xpath descendant//cy.get('#submitForm').click()
        cy.xpath("//button[@id='submitForm']").click().should('exist')//xpath id
        cy.xpath("//a[@id='todolistlink']").click().should('exist')//xpath and//cy.get('#todolistlink').click()
        //cy.xpath("//p//descendant::a[@id='todolistlink']").click().should('exist')//xpath descendant
        //cy.xpath("//button[@type='submit']//preceding-sibling::input").type("tarea 1").should('exist')//xpath preceding-sibling//cy.get("[id^='sen']").type("tarea 1")
        cy.xpath("//body//descendant::input[@id='task']").type("tarea 1").should('exist')//xpath descendant
        cy.xpath("//input[@type='text']//following-sibling::button").click().should('exist')//following-sibling//cy.get('#sendTask').click()
        //cy.xpath("//form//descendant::button").click().should('exist')//xpath descendant

    });
});