export class ToDoListPage{

    constructor(){
    this.botonAll="#all";
    this.botonCompleted="#completed";
    this.botonActive="#active";
    this.botonRemoveAll="#removeAll";

    }

    verificarBotonAll(){
        return cy.get(this.botonAll)
    }

    verificarBotonCompleted(){
        return cy.get(this.botonCompleted)
    }

    verificarBotonActive(){
        return cy.get(this.botonActive)
    }

    verificarBotonRemoveAll(){
        return cy.get(this.botonRemoveAll)
    }

}