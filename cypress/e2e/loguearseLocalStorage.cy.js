describe('Actividad clase 8 loguearse desde el backend',()=>{
    it('Deberia ingresar a PushingIt utilizando request',()=>{
        cy.request({
            method:"POST",
            url:"https://pushing-it-backend.herokuapp.com/api/login",
            body:{
                username:"pushingit",
                password:"123456!"
            }
        }).then(respuesta =>{
            window.localStorage.setItem('token', respuesta.body.token)
            window.localStorage.setItem('user', respuesta.body.user.username)
        })
        cy.visit('');
    });
})