describe("Actividad complementaria 8", () => {
    // Tipo de peticion post
    // URL https://pushing-it-backend.herokuapp.com/api/register
    // body {username, password, gender, year, month, day}
    // Agregar aserciones
    it("Deberia registrarse en PushingIT de forma satisfactoria", () => {
        const numero = Math.floor(Math.random() * 1000);

        cy.request({  //escribir el codigo correspondiente para registrarse en PushingIT
            url:"https://pushing-it-backend.herokuapp.com/api/register",
            method: "POST", 
            body: {
                username: "usuario"+numero, 
                password: "123456!", 
                gender: "Male",
                day: "10",
                month: "October",
                year: "1980"
             }               
            }).then(respuesta => {  //Agregar aserciones para verificar status y body
                expect(respuesta.status).equal(200);
                expect(respuesta.body.newUser.username).equal("usuario"+numero);
                expect(respuesta.body.newUser.password).equal("b7dfe9134c7a717a3b6eaf37bdc1ef7b");
                expect(respuesta.body.newUser.gender).equal("Male");
                expect(respuesta.body.newUser.day).equal("10");
                expect(respuesta.body.newUser.month).equal("October");
                expect(respuesta.body.newUser.year).equal("1980")
            }).then(respuesta =>{
                cy.request({ 
                url: "http://localhost:3000/posts"/ + respuesta.body.id, //saco el id aleatorio de respuesta
                method: "PUT",
                body: {
                    username: "usuarioEdit"+ numero, 
                    password: "123456!", 
                    gender: "Female",
                    day: "13",
                    month: "July",
                    year: "1975"
                 }              
            })
            }).then(respuesta =>{
                expect(respuesta.status).equal(200);
                expect(respuesta.body.newUser.username).equal("usuarioEditado"+numero);
                expect(respuesta.body.newUser.gender).equal("Female");
                expect(respuesta.body.newUser.day).equal("13");
                expect(respuesta.body.newUser.year).equal("1975");
            })
        })

        })
