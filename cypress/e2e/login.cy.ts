import commonMethods from "../pages/common/commonMethods";
import loginData from "../pages/login/loginData";
import loginMethods from "../pages/login/loginMethods";
import Logger from "../utils/logger";

describe("Test Login", ()=>{
    const data = loginData.validCredentials;

    it('Login', ()=>{
        Logger.stepNumber(1);
        Logger.step('Click on "Login"');
        commonMethods.clickOnLogInOption();

        Logger.stepNumber(2);
        Logger.step(`Login with this credentials "${data.username}/${data.password}"`)
        loginMethods.login(data.username, data.password);
        Logger.verification(`The Home should "Welcome ${data.username}"`)
        cy.get('#nameofuser').should('have.text', `Welcome ${data.username}`,);
    });
});