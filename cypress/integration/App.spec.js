/* global cy */

describe('App', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('shows recipe titles from json', () => {
    cy.get('[data-test-id="Recipe-card"]').should('exist')
  })

  it('toggles recipe content on click', () => {
    cy.get('[data-test-id="Recipe-card-toggle"]')
      .should('exist')
      .click({ multiple: true })

    cy.get('[data-test-id="Recipe-card-toggled-content"]').should('exist')
  })

  it('hides content again on second click', () => {
    cy.get('[data-test-id="Recipe-card-toggle"]')
      .should('exist')
      .click({ multiple: true })

    cy.get('[data-test-id="Recipe-card-toggled-content"]').should('exist')

    cy.get('[data-test-id="Recipe-card-toggle"]')
      .should('exist')
      .click({ multiple: true })

    cy.get('[data-test-id="Recipe-card-toggled-content"]').should('not.exist')
  })

  it('toggles save when clicking on heart', () => {
    cy.get('[data-test-id="Recipe-card-toggle"]')
      .should('exist')
      .click({ multiple: true })

    cy.get('[data-test-id="Recipe-not-saved"]')
      .should('exist')
      .click({ multiple: true })
    cy.get('[data-test-id="Recipe-saved"]').should('exist')
  })
})

describe('single recipe page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
    cy.get('[data-test-id="Recipe-card"]')
      .contains('Rezept 1')
      .should('exist')
      .click()

    cy.url().should('eq', 'http://localhost:3000/recipe/17')
  })

  it('shows complete recipe from json', () => {
    cy.get('[data-test-id="Recipe-complete"]').should('exist')
  })

  it('toggles save when clicking on heart', () => {
    cy.get('[data-test-id="Recipe-not-saved"]')
      .should('exist')
      .click()
    cy.get('[data-test-id="Recipe-saved"]').should('exist')
  })

  it('removes like again on second click on heart', () => {
    cy.get('[data-test-id="Recipe-not-saved"]')
      .should('exist')
      .click()
    cy.get('[data-test-id="Recipe-saved"]')
      .should('exist')
      .click()
    cy.get('[data-test-id="Recipe-not-saved"]').should('exist')
  })
})
