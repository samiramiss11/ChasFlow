describe('template spec', () => {
  it("the h1 contains the correct text", () => {
    // Use .contains() directly to match text
       cy.visit("http://localhost:5173")
    cy.contains("[data-testid='hero-heading']", "Vänligen logga in för att kunna admistrera");
  });
});
