import commonData from "./commonData";
import commonElements from "./commonElements";

class commonMethods {
    static navigateToDemoBlaze() {
        cy.clearAllCookies();
        cy.clearAllLocalStorage();
        cy.visit(commonData.url);
    }

    static clickOnhomeOption() {
        commonElements.topMenu.home.click();
    }
    static clickOnContactOption() {
        commonElements.topMenu.contact.click();
    }
    static clickOnAboutUsOption() {
        commonElements.topMenu.aboutUs.click();
    }
    static clickOnCartOption() {
        commonElements.topMenu.cart.click();
    }
    static clickOnLogInOption() {
        commonElements.topMenu.logIn.click();
    }
    static clickOnSignInOption() {
        commonElements.topMenu.signUp.click();
    }
    static verifyAlert(expectedMessage: string) {
        cy.on('window:alert', (str) => {
            expect(str).to.equal(expectedMessage);
        });
    }
    static generateRandomString(length = 10) {
        let result = "";
        const characters = "abcdefghijklmnopqrstuvwxyz0123456789";
        const charactersLength = characters.length;
        let counter = 0;
        while (counter < length) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
            counter += 1;
        }
        return result;
    }

    static verifySignedUser(username){
        commonElements.signedUser.should('have.text', `Welcome ${username}`);
    }
    static logOut(){
        cy.log('Inicio logOut')
        cy.get('body').then(($body) =>{
            if($body.find('#logout2').length > 0){
                cy.log("Entrando a la condición logout");
                commonElements.topMenu.logOut.click();
            }
        });
        cy.log('No entro en logOut')
    }
}
export default commonMethods;