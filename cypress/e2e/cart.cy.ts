import cartMethods from "../pages/cart/cartMethods";
import homeMethods from "../pages/home/homeMethods";
import loginMethods from "../pages/login/loginMethods";
import productDetailsMethods from "../pages/product-details/productDetailsMethods";

describe("Test Login", ()=>{
    it('Login', ()=>{
        cy.get('li > a#login2', {timeout: 1000}).click();
        loginMethods.login("pruebaQA1", "pruebaQA1");
        cy.get('#nameofuser').should('have.text', 'Welcome pruebaQA1');
        
        //Selección de producto
        homeMethods.clickOnProductLink('Nexus 6');
        productDetailsMethods.clickOnAddToCartButton();
        cy.contains('li', 'Home').click();

        homeMethods.clickOnProductLink('Samsung galaxy s6');
        productDetailsMethods.clickOnAddToCartButton();
        cy.contains('li', 'Cart').click();

        cartMethods.clickOnDeleteLink('Nexus 6');
        cy.wait(3000);
        cartMethods.clickOnDeleteLink('Samsung galaxy s6');

    });
});