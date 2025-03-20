describe('Sidebar', () => {
  it('should display the sidebar', () => {
    // cy.visit('http://localhost:4200/');

    cy.visit('http://localhost:4200/');
    cy.get('[data-cy=sidebar]').should('be.visible');
  });
});
