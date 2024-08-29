class homeElements{

    static get categoriesMenu(){
        return{
            get phones(){
                return cy.contains('a', 'Phones');
            },
            get laptops(){
                return cy.contains('a', 'Laptops');
            },
            get monitors(){
                return cy.contains('a', 'Monitors');
            }
        }
    }

    static product(productName: string){
        return cy.get('div.card-block > h4.card-title > a.hrefch').contains(productName);
    }
}
export default homeElements;