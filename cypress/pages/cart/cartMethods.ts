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
}
export default cartMethods;