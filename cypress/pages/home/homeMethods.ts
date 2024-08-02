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
}
export default homeMethods;