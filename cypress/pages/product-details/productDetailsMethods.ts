import commonMethods from "../common/commonMethods";
import productDetailsElements from "./productDetailsElements";

class productDetailsMethods{

    static clickOnAddToCartButton(){
        productDetailsElements.buttons.addToCart.click();
    }

    static verifyProductDetailsPageDisplayed(){
        productDetailsElements.buttons.addToCart.should('be.visible');
    }

    static verifyProductAddedMessage(){
        commonMethods.verifyAlert('Product added.');
    }
}
export default productDetailsMethods;