describe("Visit article page", () => {
  beforeEach(() => {
    cy.visit("articles");
  });

  it("articles display successfully from API", () => {
    cy.get("[data-testid=test-articles-list]").should("exist");
    cy.get("[data-testid=test-articles-list-item]").should(
      "have.length.greaterThan",
      3
    );
  });

  it("articles display successfully from fixtures", () => {
    cy.intercept("GET", "**/articles?*", { fixture: "articles.json" });
    cy.get("[data-testid=test-articles-list]").should("exist");
    cy.get("[data-testid=test-articles-list-item]").should(
      "have.length.greaterThan",
      3
    );
  });
});
