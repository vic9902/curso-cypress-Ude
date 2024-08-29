class loginElements {

    static get textBoxes() {
        return {
            get username() {
                return cy.get("input#loginusername");
            },
            get password() {
                return cy.get("input#loginpassword");
            }

        }
    }

    static get buttons() {
        return {
            get close() {
                return cy.get("button.btn-secondary").contains('Close');
            },
            get login() {
                return cy.get("button.btn-primary").contains('Log in');
            }
        }
    }
}

export default loginElements;