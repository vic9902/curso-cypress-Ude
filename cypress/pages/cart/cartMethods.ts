import cartElements from "./cartElements";

class cartMethods{

    static clickOnDeleteLink(productName){
        cartElements.links.delete(productName).click();
    }
}
export default cartMethods;