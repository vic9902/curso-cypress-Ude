import commonData from "../pages/common/commonData";
import commonMethods from "../pages/common/commonMethods";
import signupMethods from "../pages/signUp/signupMethods";
import Logger from "../utils/logger";
const username = commonMethods.generateRandomString();
const password = commonMethods.generateRandomString(8);

describe(commonData.testSuites.registroYAutentication, () => {
    it('Registro de Usuario Válido', () => {
        Logger.stepNumber(1);
        Logger.step('Navegar a la página de inicio');
        commonMethods.navigateToDemoBlaze();

        Logger.stepNumber(2);
        Logger.step('Hacer click en "Sign Up" en la barra de navegación')
        commonMethods.clickOnSignInOption();

        Logger.stepNumber(3);
        Logger.step('Completar todos los campos obligatorios con información válida');
        signupMethods.insertUsername(username);
        signupMethods.insertPassword(password);

        Logger.stepNumber(4);
        Logger.step('Hacer clic en "sign up" para registrar el usuario');
        signupMethods.clickOnSignUpButton();
        Logger.verification('Verificar que se muestre el mensaje "Sign Up Successful"');
        signupMethods.VerifySignUpSuccessfulMessageDisplayed();
    });
});