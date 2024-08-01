export class LoginPage{
    static obtenerTituloPagina(){
        return 'Login in';
    }

    static get linkLogin(){
        return cy.get('#login2');
    }
}