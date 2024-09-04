import commonData from "../pages/common/commonData";
import commonMethods from "../pages/common/commonMethods";
import loginData from "../pages/login/loginData";
import loginMethods from "../pages/login/loginMethods";
import Logger from "../utils/logger";


describe(commonData.testSuites.registroYAutentication, () => {

    const validData = loginData.validCredentials;
    const invalidData = loginData.invalidCredentials;

    it.only('Inicio de sesion valido', () => {

        Logger.stepNumber(1);
        Logger.step('Navegar a la página de inicio');


        Logger.stepNumber(2);
        Logger.step("Hacer clic en 'log in' en la barra de navegación");
        commonMethods.clickOnLogInOption();

        Logger.stepNumber(3);
        Logger.step("Ingresar un nombre de usuario y contraseña válidos");
        loginMethods.insertUsername(validData.username);
        loginMethods.insertPassword(validData.password);

        Logger.stepNumber(4);
        Logger.step("Hacer clic en 'log in' para iniciar sesión");
        loginMethods.clickOnLoginButton();
        Logger.verification("Verificar que se redirige al usuario a la página de inicio");
        commonMethods.verifySignedUser(validData.username);
        Logger.postCondition("Hacer log Out");
        commonMethods.logOut();

    });

    it('Inicio de sesion con contraseña invalida', () => {

        Logger.stepNumber(1);
        Logger.step('Navegar a la página de inicio');

        Logger.stepNumber(2);
        Logger.step("Hacer clic en 'log in' en la barra de navegación");
        commonMethods.clickOnLogInOption();

        Logger.stepNumber(3);
        Logger.step("Ingresar una contraseña invalida");
        loginMethods.insertUsername(validData.username);
        loginMethods.insertPassword(invalidData.password);

        Logger.stepNumber(4);
        Logger.step("Hacer clic en 'log in' para iniciar sesión");
        loginMethods.clickOnLoginButton();
        Logger.verification("Verificar que se redirige al usuario a la página de inicio");
        loginMethods.verifyWrongPasswordMessage();
    });

    it('Inicio de sesion con username invalido', () => {

        Logger.stepNumber(1);
        Logger.step('Navegar a la página de inicio');


        Logger.stepNumber(2);
        Logger.step("Hacer clic en 'log in' en la barra de navegación");
        commonMethods.clickOnLogInOption();

        Logger.stepNumber(3);
        Logger.step("Ingresar un nombre de usuario invalido");
        loginMethods.insertUsername(invalidData.username);
        loginMethods.insertPassword(validData.password);

        Logger.stepNumber(4);
        Logger.step("Hacer clic en 'log in' para iniciar sesión");
        loginMethods.clickOnLoginButton();
        Logger.verification("Verificar que se redirige al usuario a la página de inicio");
        loginMethods.verifyWrongPasswordMessage();
    });
});