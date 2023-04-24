Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});
describe("Dice on CSGORoll", () => {
  beforeEach(() => {
    cy.viewport(2000, 600)
    cy.visit("https://www.csgoroll.com/en/dice");
  });
  it("should increase bet amount with +1 button", () => {
    const initialBetAmount = 1;


    cy.get('#mat-input-4')
        .should('have.value', initialBetAmount)

    cy.get('[data-test="plus-1"]')
        .click();

    cy.get('#mat-input-4')
        .should('have.value', (initialBetAmount + 1).toString());
  });

  it("should decrease bet amount with 10 button", () => {
    const initialBetAmount = 1;
    cy.get('#mat-input-4')
        .should('have.value', initialBetAmount)

    cy.get('[data-test="plus-10"]')
        .click();

    cy.get('#mat-input-4')
        .should('have.value', (initialBetAmount + 10).toString());
  });

  it("should double bet amount with 1/2 button", () => {
    const initialBetAmount = 1;

    cy.get('#mat-input-4')
        .should('have.value', initialBetAmount)

    cy.get('[data-test="1-div-2"]')
        .click();

    cy.get('#mat-input-4')
        .should('have.value', (initialBetAmount / 2).toString());
  });
  it("should double bet amount with *2 button", () => {
    const initialBetAmount = 1;

    cy.get('#mat-input-4')
        .should('have.value', initialBetAmount)

    cy.get('[data-test="x2"]')
        .click();

    cy.get('#mat-input-4')
        .should('have.value', (initialBetAmount * 2).toString());
  });

  it("should switch between Roll Under and Roll Over", () => {
    cy.get('[data-test="choice-label"]')
        .should('have.text', ' Roll Under')
        .click();

    cy.get('[data-test="choice-label"]')
        .should('have.text', ' Roll Over');

    cy.get('[data-test="choice-label"]')
        .click();

    cy.get('[data-test="choice-label"]')
        .should('have.text', ' Roll Under');
  });
});

