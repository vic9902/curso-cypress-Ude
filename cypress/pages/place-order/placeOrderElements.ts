class placeOrderElements{

    static get textBoxes(){
        return {
            get name(){
                return cy.get('input#name');
            },
            get country(){
                return cy.get('input#country');
            },
            get city(){
                return cy.get('input#city');
            },
            get creditCard(){
                return cy.get('input#card');
            },
            get month(){
                return cy.get('input#month');
            },
            get year(){
                return cy.get('input#year');
            }
        }
    }

    static get buttons(){
        return {
            get close(){
                return cy.get('button.btn-secondary').contains('Closed');
            },
            get iconClose(){
                return cy.get('button.close').contains('×');
            },
            get purcharse(){
                return cy.get('button.btn-primary').contains('Purchase');
            }
        }
    }

    static get orderCreate(){
        return{
            get icon(){
                return cy.get('.sa-success');
            },
            get title(){
                return cy.get('h2').contains('Thank you for your purcharse!');
            },
            get okButton(){
                return cy.get('button.confirm.btn-primary').contains('OK');
            }
        }
    }

}

export default placeOrderElements;