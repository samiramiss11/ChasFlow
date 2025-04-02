/// <reference types="cypress" />
describe('template spec', () => {
  it("the h1 contains the correct text", function () {
    // Use .contains() directly to match text
    cy.visit("http://localhost:5173");
    cy.get("[data-testid=hero-heading]").should("have.text", "Vänligen logga in för att kunna admistrera");
  });
});

