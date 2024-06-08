describe('Landing Page', () => {
  it('should display the landing page with correct elements', () => {
    cy.visit('/');
    cy.contains('h1', 'Titanic Survivor Prediction');
    cy.get('a[href="/calculator"]').should('exist');
  });
});
