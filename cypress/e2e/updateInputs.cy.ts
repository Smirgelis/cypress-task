Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});
describe("Dice on CSGORoll", () => {
    beforeEach(() => {
        cy.viewport(2000, 600)
        cy.visit("https://www.csgoroll.com/en/dice");
    });
      it('Updating inputs makes other inputs update', () => {

        cy.get('#mat-input-0')
            .clear()
            .type('5.99')

        cy.get('[data-test="multiplier"]')
            .should('have.value', '15.8597');

        cy.get('#mat-input-2')
            .should('have.value', '5.99');
      });
      it('Updating inputs makes other inputs update', () => {
        cy.get('[data-test="multiplier"]')
            .clear()
            .type('3')

        cy.get('#mat-input-0')
            .click()
            .should('have.value', '31.6666');

        cy.get('#mat-input-2')
            .should('have.value', '31.6666');
      });
    it('Updating inputs makes other inputs update', () => {
        cy.get('#mat-input-2')
            .clear()
            .type('60')

        cy.get('[data-test="multiplier"]')
            .should('have.value', '1.5833');

        cy.get('#mat-input-0')
            .click()
            .should('have.value', '60');


    });
});

