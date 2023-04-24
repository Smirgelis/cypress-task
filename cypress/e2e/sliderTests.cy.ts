Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});
describe("Dice on CSGORoll", () => {
    beforeEach(() => {
        cy.viewport(2000, 600)
        cy.visit("https://www.csgoroll.com/en/dice");
    });
      it('Dragging slider updates values inside inputs', () => {
        cy.get('#mat-input-0')
            .should('have.value', '47.5');

        cy.get('.handle')
            .invoke('attr', 'style', 'right: 0.00%;')
            .click()

        cy.get('#mat-input-0')
            .eq(0)
            .should('have.value', '94');

        cy.get('[data-test="multiplier"]')
            .should('have.value', '1.0106');

        cy.get('#mat-input-2')
            .should('have.value', '94');
      });
});

