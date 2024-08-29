import placeOrderElements from '../place-order/placeOrderElements';
class placeOrderMethods{

    static insertName(name){
        placeOrderElements.textBoxes.name.type(name);
    }

    static insertCountry(country){
        placeOrderElements.textBoxes.country.invoke('val', country);
    }

    static insertCity(city){
        placeOrderElements.textBoxes.city.invoke('val', city);
    }

    static insertCreditCard(creditCard){
        placeOrderElements.textBoxes.creditCard.invoke('val', creditCard);
    }

    static insertMonth(month){
        placeOrderElements.textBoxes.month.invoke('val', month);
    }

    static insertYear(year){
        placeOrderElements.textBoxes.year.invoke('val', year);
    }

    static clickOnPurcharseButton(){
        placeOrderElements.buttons.purcharse.click();
    }
    
    static clickOnClosedButton(){
        placeOrderElements.buttons.close.click();
    }

    static clickOnCloseIcon(){
        placeOrderElements.buttons.iconClose.click();
    }

    static clickOnOkButton(){
        cy.wait(1000);
        placeOrderElements.orderCreate.okButton.click();
    }

    static iconVerify(){
        placeOrderElements.orderCreate.icon.should('be.visible');
    }

    static insertOrderInformation(data){
        this.insertName(data.name);
        this.insertCountry(data.country);
        this.insertCity(data.city);
        this.insertCreditCard(data.creditCard);
        this.insertMonth(data.month);
        this.insertYear(data.year);
    }
}
export default placeOrderMethods;