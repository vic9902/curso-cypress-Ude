describe('pruebas click, check, type', ()=>{
    it('Prueba click', ()=>{
        cy.visit('https://cpstest.click/es#google_vignette');
        const numeroClick = 180;
        cy.wait(1000);
        for(let i = 0; i < numeroClick; i++){
            cy.get('button[id="start"]').click({force:true});
        }
    });
    it('prueba check', ()=>{
        
        cy.visit('https://the-internet.herokuapp.com/checkboxes');
        cy.get('#checkboxes input[type="checkbox"]');
        cy.get('input[type="checkbox"]').eq(0).should('not.be.checked').check();
        cy.get('input[type="checkbox"]').eq(1).should('be.checked').uncheck();
    });
});