/* global cy */

describe('App', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('shows recipes from json', () => {
    cy.get('[data-test-id="Recipe-card"]').should('exist')
  })
})
