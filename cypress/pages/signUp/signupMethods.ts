import signupElements from "./signupElements";

class signupMethods {

    static insertUsername(username: string) {
        signupElements.textBoxes.username.type(username);
    }

    static insertPassword(password: string) {
        signupElements.textBoxes.password.type(password);
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
}
export default signupMethods;