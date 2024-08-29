class productDetailsElements{

    static get buttons(){
        return{
            get addToCart(){
                return cy.get('a.btn-success').contains('Add to cart');
            }
        }
    }
}
export default productDetailsElements;