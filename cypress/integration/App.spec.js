/* global cy */

describe('App', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('shows recipe titles from json', () => {
    cy.get('[data-test-id="Recipe-card"]').should('exist')
  })
})

describe('single recipe page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
    cy.get('[data-test-id="Recipe-card"]')
      .contains('Rezept 1')
      .should('exist')
      .click()

    cy.url().should('eq', 'http://localhost:3000/recipe/27')
  })

  it('shows complete recipe from json', () => {
    cy.get('[data-test-id="Recipe-complete"]').should('exist')
  })
})
