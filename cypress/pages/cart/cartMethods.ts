import commonMethods from "../common/commonMethods";
import loginMethods from "../login/loginMethods";
import cartElements from "./cartElements";

class cartMethods{

    static clickOnDeleteLink(productName){
        cartElements.links.delete(productName).click();
    }

    static clickOnPlaceOrderButton(){
        cartElements.buttons.placeOrder.click();
    }

    static verifyProductAdded(productName){
        cartElements.tableDetails.productName(productName)
    }

    static verifyCartPageIsShow(){
        cy.url().should('include', 'cart.html');
    }

    static deleteProducts(){
        cy.intercept('POST', 'https://api.demoblaze.com/deleteitem').as('deleteItem');
        cy.get('a').filter((index, element)=>{
            return element.getAttribute('onclick')?.includes('deleteItem');
        }).each($link =>{
            cy.wrap($link).click();
            cy.wait('@deleteItem'); //Dado que arriba se intercepta el método de la API, aquí espera por la respuesta de la misma.
        });
        cy.log('Producto Eliminado con éxito');
    }

    static emptyCart(username, password){
        commonMethods.navigateToDemoBlaze();
        commonMethods.logOut();
        commonMethods.clickOnLogInOption();
        loginMethods.login(username, password);
        commonMethods.clickOnCartOption();
        //(this.deleteProducts();
    }
}
export default cartMethods;