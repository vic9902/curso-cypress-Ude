class homeElements{

    static get categoriesMenu(){
        return{
            get phones(){
                return cy.get('div.list-group > a#itemc').should('have.text', 'Phones');
            },
            get laptops(){
                return cy.get('div.list-group > a#itemc').should('have.text', 'Laptops');
            },
            get monitors(){
                return cy.get('div.list-group > a#itemc').should('have.text', 'Monitors');
            }
        }
    }

    static product(productName: string){
        return cy.get('div.card-block > h4.card-title > a.hrefch').contains(productName);
    }
}
export default homeElements;