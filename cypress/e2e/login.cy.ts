import { LoginPage } from "./loginPage";
describe('Login', () => {
  it("test", ()=>{
    cy.visit('https://www.demoblaze.com/');
    LoginPage.linkLogin.click();
  });
  /*
  it.only('Login con credenciales de standar user', () => {
    cy.visit('https://www.saucedemo.com/v1/');
    cy.get("#user-name", {timeout: 10000}).type("standard_user");
    cy.get("#password").type("secret_sauce");
    cy.get("#login-button").click();
  });
  it('uso del closest', ()=>{
    cy.visit('https://www.saucedemo.com/v1/');
    cy.get('#user-name').closest('#login_button_container').then(parent =>{
      cy.log(parent.attr('class'));
    });
    cy.wait(5000);
  });*/
});