class Logger{
    static stepNumber(number){
        const text = `Step # ${number}`;
        cy.log(text);
        cy.allure().step(text);
    }
    static step(descripcion){
        const text = `Step # ${descripcion}`;
        cy.log(text);
        cy.allure().step(text);
    }

    static verification(descripcion){
        const text = `Verification # ${descripcion}`;
        cy.log(text);
        cy.allure().step(text);
    }
    static subStep(descripcion){
        const text = `SubStep # ${descripcion}`;
        cy.log(text);
        cy.allure().step(text);
    }
    static subVerification(descripcion){
        const text = `Subverification # ${descripcion}`;
        cy.log(text);
        cy.allure().step(text);
    }
    static postCondition(descripcion){
        const text = `postCondition # ${descripcion}`;
        cy.log(text);
        cy.allure().step(text);
    }
}
export default Logger