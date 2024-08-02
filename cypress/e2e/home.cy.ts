import homeMethods from "../pages/home/homeMethods";

describe ("Test Home Page", ()=>{
    it('Products Phone', ()=>{
        cy.visit('https://www.demoblaze.com/');
        homeMethods.clickOnProductLink('hola');
    });
});