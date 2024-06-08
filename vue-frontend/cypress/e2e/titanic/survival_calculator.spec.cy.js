describe('Survival Calculator', () => {
  beforeEach(() => {
    cy.visit('/calculator');
  });

  it('should have all the necessary input fields', () => {
    cy.get('select[name="pclass"]').should('exist');
    cy.get('select[name="sex"]').should('exist');
    cy.get('input[name="age"]').should('exist');
    cy.get('input[name="fare"]').should('exist');
    cy.get('select[name="embarked"]').should('exist');
  });

  it('should display prediction results', () => {
    cy.get('select[name="pclass"]').select('First');
    cy.get('select[name="sex"]').select('Male');
    cy.get('input[name="age"]').type('30');
    cy.get('input[name="fare"]').type('100');
    cy.get('select[name="embarked"]').select('Cherbourg');
    cy.get('button[type="submit"]').click();
    cy.contains('Survived').should('exist');
  });
});
