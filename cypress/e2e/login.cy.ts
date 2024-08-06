import commonMethods from "../pages/common/commonMethods";
import loginMethods from "../pages/login/loginMethods";
import Logger from "../utils/logger";

describe("Test Login", ()=>{
    it('Login', ()=>{

        const username = 'pruebaQA1';
        const password = 'pruebaQA1';

        Logger.stepNumber(1);
        Logger.step('Navigate to DemoBlaze page')
        commonMethods.navigateToDemoBlaze();

        Logger.stepNumber(2);
        Logger.step('Click on "Login"');
        commonMethods.clickOnLogInOption();

        Logger.stepNumber(3);
        Logger.step(`Login with this credentials "${username}/${password}"`)
        loginMethods.login(username, password);
        Logger.verification(`The Home should "Welcome ${username}"`)
        cy.get('#nameofuser').should('have.text', `Welcome ${username}`,);
    });
});