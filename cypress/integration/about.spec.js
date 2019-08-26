describe('Navigate to about route', () => {
  it('should navigate to about route', () => {
    cy.visit('/');
    cy.get('[data-a8n="sidebar-item__title-about"]')
      .should('have.length', 1)
      .click();
    cy.url().should('include', '/about');
  });
});
