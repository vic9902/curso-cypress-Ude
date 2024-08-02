import loginMethods from "../pages/login/loginMethods";

describe("Test Login", ()=>{
    it('Login', ()=>{
        cy.visit('https://www.demoblaze.com/');
        cy.get('li > a#login2', {timeout: 1000}).click();
        loginMethods.login("pruebaQA1", "pruebaQA1");
        cy.get('#nameofuser').should('have.text', 'Welcome pruebaQA1');
    });
});