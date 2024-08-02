import commonData from "./commonData";
import commonElements from "./commonElements";

class commonMethods{
    static navigateToDemoBlaze(){
        cy.visit(commonData.url);
    }

    static clickOnhomeOption(){
        commonElements.topMenu.home.click();
    }
    static clickOnContactOption(){
        commonElements.topMenu.contact.click();
    }
    static clickOnAboutUsOption(){
        commonElements.topMenu.aboutUs.click();
    }
    static clickOnCartOption(){
        commonElements.topMenu.cart.click();
    }
    static clickOnLogInOption(){
        commonElements.topMenu.logIn.click();
    }
    static clickOnSignInOption(){
        commonElements.topMenu.signUp.click();
    }
}
export default commonMethods;