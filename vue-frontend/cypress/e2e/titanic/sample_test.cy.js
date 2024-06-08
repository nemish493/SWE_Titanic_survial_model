describe('Sample Test', () => {
    it('should visit the app', () => {
      cy.visit('/');
      cy.contains('h1', 'Titanic Survivor Prediction'); // Adjust the selector and text to match your app
    });
  });
  