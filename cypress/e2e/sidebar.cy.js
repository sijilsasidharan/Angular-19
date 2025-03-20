describe("Sidebar", () => {
  it("should display the sidebar", () => {
    // cy.visit('http://localhost:4200/');

    cy.visit("http://localhost:4200/");
    cy.get("app-sidenav").should("be.visible");
    cy.get("app-sidenav").should("contain", "My App");
    cy.get("app-sidenav").and("have.descendants", "mat-icon").contains("menu");
    cy.get("app-sidenav")
      .and("have.descendants", "mat-icon")
      .contains("favorite");
    cy.get("app-sidenav").and("have.descendants", "mat-icon").contains("share");
  });
});
