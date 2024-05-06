describe("Routing", () => {
  it("Visit the home page", () => {
    cy.visit("/");
    cy.get("[data-testid=test-home-page]").should("exist");
  });
  it("Visit unexisted page", () => {
    cy.visit("/some-not-existed-page");
    cy.get("[data-testid=test-nomatch-page]").should("exist");
  });
});
