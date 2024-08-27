import homeElements from "./homeElements";

class homeMethods{

    static clickOnPhonesOption(){
        homeElements.categoriesMenu.phones.click();
    }

    static clickOnLaptopsOption(){
        homeElements.categoriesMenu.laptops.click();
    }

    static clickOnMonitorsOption(){
        homeElements.categoriesMenu.monitors.click();
    }

    static clickOnProductLink(productName){
        homeElements.product(productName).click();
    }

    static verifyProductDisplayed(productName){
        homeElements.product(productName).should('be.visible');
    }
}
export default homeMethods;