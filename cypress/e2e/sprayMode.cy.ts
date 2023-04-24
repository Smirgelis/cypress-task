Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});
describe("Dice on CSGORoll", () => {
    beforeEach(() => {
        cy.viewport(2000, 600)
        cy.visit("https://www.csgoroll.com/en/dice");
    });
    it("should increase bet amount with +1 button", () => {
        cy.get('[data-test="mode-batch"]').click()
        cy.get('#mat-input-3')
            .clear()
            .type('5')

        cy.contains('ROLL 5 TIMES')
            .should('have.text', ' ROLL 5 TIMES ')



    });

});

