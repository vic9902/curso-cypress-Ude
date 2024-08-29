import Logger from "../../utils/logger";
import commonMethods from "../common/commonMethods";
import loginElements from "./loginElements";

class loginMethods {

    static insertUsername(username: string) {
        loginElements.textBoxes.username.invoke('val', username);
    }

    static insertPassword(password: string) {
        loginElements.textBoxes.password.invoke('val', password);
    }

    static clickOnLoginButton() {
        loginElements.buttons.login.click();
    }

    static login(username:string, password: string){
        Logger.subStep('Insert username');
        this.insertUsername(username);
        Logger.subStep('Insert passowrd');
        this.insertPassword(password);
        Logger.subStep('Click on Login')
        this.clickOnLoginButton();
    }

    static verifyWrongPasswordMessage(){
        commonMethods.verifyAlert('Wrong password.');
    }

    static verifyWrongUsernameMessage(){
        commonMethods.verifyAlert('User does not exist.')
    }
}
export default loginMethods;