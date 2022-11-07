describe('Actividad complementaria 8', () => {
    // Tipo de peticion post
    // URL https://pushing-it-backend.herokuapp.com/api/register
    // body {username, password, gender, year, month, day}
    // Agregar aserciones
        it('Deberia registrarse en PushingIT de forma satisfactoria', () => {
            const username = 'usuario' + Math.floor(Math.random() * 1000)
            const password = '123456!'
            const gender = "Male"
            const day = '10'
            const month = 'October'
            const year = "1980"
    
            cy.request({ //escribir el codigo correspondiente para registrarse en PushingIT
             url:'https://pushing-it-backend.herokuapp.com/api/register',
             method: 'POST', 
             body: {
                username: 'usuario' + Math.floor(Math.random() * 1000), 
                password: '123456!', 
                gender: 'Female',
                day: '13',
                month: 'July',
                year: '1975'
             }               
            }).then(respuesta)
            expect(respuesta.status).equal(201);
        });
    })