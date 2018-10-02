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

  it('searches through recipes with input value, only renders whats needed', () => {
    cy.get('[data-test-id="Search-input"]')
      .should('exist')
      .type('Tomate')

    cy.get('[data-test-id="Recipe-card-toggle"]')
      .should('exist')
      .click({ multiple: true })

    cy.get('[data-test-id="Recipe-card-toggled-content"]').contains('Tomate')
  })

  it('only renders something when the input value is found', () => {
    cy.get('[data-test-id="Search-input"]')
      .should('exist')
      .type('bdfbd')

    cy.get('[data-test-id="Search-result"]').should('not.exist')
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

describe('fridge page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
    cy.get('[data-test-id="Link-to-fridge"]')
      .should('exist')
      .click()

    cy.url().should('eq', 'http://localhost:3000/fridge')
  })

  it('shows input field and no items yet', () => {
    cy.get('[data-test-id="Fridge-input"]').should('exist')
    cy.get('[data-test-id="Fridge-item"]').should('not.exist')
  })

  it('adds entered items to list', () => {
    cy.get('[data-test-id="Fridge-input"]')
      .should('exist')
      .type('Camembert{Enter}')
      .type('Gorgonzola{Enter}')
      .type('Gouda{Enter}')
      .type('Tilsiter{Enter}')
      .type('Amsterdamer{Enter}')
    cy.get('[data-test-id="Fridge-item"]').should('exist')
  })

  it('deletes entered item from list', () => {
    cy.get('[data-test-id="Fridge-input"]')
      .should('exist')
      .type('Camembert{Enter}')
    cy.get('[data-test-id="Fridge-item"]').should('exist')
    cy.get('[data-test-id="delete-item"]')
      .should('exist')
      .click()
    cy.get('[data-test-id="Fridge-item"]').should('not.exist')
  })

  it('edits entered item', () => {
    cy.get('[data-test-id="Fridge-input"]')
      .should('exist')
      .type('Camemb{Enter}')
    cy.get('[data-test-id="Fridge-item"]').should('exist')
    cy.get('[data-test-id="edit-item"]')
      .should('exist')
      .click()
    cy.get('[data-test-id="edit-item-input"]')
      .should('exist')
      .type('ert{Enter}')
    cy.get('[data-test-id="Fridge-item"]').should('contain', 'Camembert')
  })
})
