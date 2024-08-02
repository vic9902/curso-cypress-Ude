class signupElements{
    static get textBoxes(){
        return{
            get username(){
                return cy.get('input#sign-username');
            },
            get password(){
                return cy.get('input#sign-password');
            }
        }
    }

    static get buttons(){
        return {
            get close(){
                return cy.get('button.btn-secondary').contains('Close');
            },
            get signUp(){
                return cy.get('button.btn-primary').contains('Sign up');
            }
        }
    }
}
export default signupElements;