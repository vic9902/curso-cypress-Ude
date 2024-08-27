import cartElements from "./cartElements";

class cartMethods{

    static clickOnDeleteLink(productName){
        cartElements.links.delete(productName).click();
    }

    static verifyProductAdded(productName){
        cartElements.tableDetails.productName(productName)
    }
}
export default cartMethods;