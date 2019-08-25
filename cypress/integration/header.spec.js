describe('Header exists', () => {
  it('should display the header', () => {
    cy.visit('/');
    cy.get('h1').contains("David's Blog");
  });
});
