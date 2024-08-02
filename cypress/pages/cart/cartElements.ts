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
}
export default cartElements;