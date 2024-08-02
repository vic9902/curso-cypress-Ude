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
        this.insertUsername(username);
        this.insertPassword(password);
        this.clickOnLoginButton();
    }
}
export default loginMethods;