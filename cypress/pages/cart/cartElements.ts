class cartElements {

    static get buttons() {
        return {
            get placeOrder() {
                return cy.get('button.btn-success').contains('Place Order');
            }
        }
    }

    static get links() {
        return {
            delete(productName) {
                return cy.contains('td', productName).closest('tr').find('a');
            }
        }
    }
    static get tableDetails(){
        return{
            productName(productName){
                return cy.contains('.success > :nth-child(2)', productName).should('have.text', productName);
            }
        }
    }
}
export default cartElements;