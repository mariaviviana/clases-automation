describe('Ejemplo clase 8', () => {
    it('Deberia crear, modificar, eliminar y verificar que el post no existe mas',()=>{
        let id;

        //POST
        cy.request({ 
            url: "http://localhost:3000/posts",
            method: "POST",
            body:{
                id: Math.ceil(Math.ramdon() *1000),
                title: "Ejercicio Clase 8",
                author:"PushingIT",
            }
        }).then(respuesta =>{
            expect(respuesta.status).equal(201);
            expect(respuesta.title).equal("Ejercicio Clase 8");
            expect(respuesta.author).equal("PushingIt")

        }).then(respuesta =>{ //concateno el PUT xq tengo el id aleatorio
            cy.request({ 
                url: "http://localhost:3000/posts"/ + respuesta.body.id, //saco el id aleatorio de respuesta
                method: "PUT",
                body:{
                    id: respuesta.body.id,
                    title: "Ejercicio Practica Clase 8, editado",
                    author:"PushingIT, editado"
                }
            }).then(respuesta =>{
                expect(respuesta.status).equal(200);
                expect(respuesta.id).equal(respuesta.body.id);
                expect(respuesta.title).equal("Ejercicio Clase 8,editado");
                expect(respuesta.author).equal("PushingIt, editado")

            }).then(respuesta =>{ //concateno el DELETE
                id = respuesta.body.id;
                cy.request({ 
                    url: "http://localhost:3000/posts"/ + respuesta.body.id, //saco el id aleatorio de respuesta
                    method: "DELETE",
                }).then(respuesta =>{
                    expect(respuesta.status).equal(200);
                }).then(() =>{
                    cy.request({ 
                        url: "http://localhost:3000/posts"/ + respuesta.body.id, //saco el id aleatorio de respuesta
                        method: "GET",
                    }).then(respuesta =>{
                        expect(respuesta.status).equal(404);
                    })

                })
            })

        })
        
    })
})
   
        
    
            