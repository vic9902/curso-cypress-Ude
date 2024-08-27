import commonMethods from "../common/commonMethods";
import signupElements from "./signupElements";

class signupMethods {

    static insertUsername(username: string) {
        signupElements.textBoxes.username.invoke('val', username);
    }

    static insertPassword(password: string) {
        signupElements.textBoxes.password.invoke('val', password);
    }

    static clickOnSignUpButton(){
        signupElements.buttons.signUp.click();
    }

    static clickOnCloseButton(){
        signupElements.buttons.close.click();
    }

    static signUp(username: string, password: string){
        this.insertUsername(username);
        this.insertPassword(password);
        this.clickOnSignUpButton();
    }

    static VerifySignUpSuccessfulMessageDisplayed(){
        commonMethods.verifyAlert('Sign up successful.');
    }
    static verifyThatThisUserAlreadyExistMessageDisplayed(){
        commonMethods.verifyAlert('This user already exist.');
    }
}
export default signupMethods;