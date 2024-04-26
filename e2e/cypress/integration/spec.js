it('detects angry sentiment', () => {
  cy.visit('http://localhost:3000/')
  cy.get('h2').should('contain', 'Welcome')
})