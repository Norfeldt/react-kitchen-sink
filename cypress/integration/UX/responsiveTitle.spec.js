/// <reference types="cypress" />
// ☝️ magic 🎩 ✨ https://youtu.be/lgurVvQsOTY?t=1225 ✨ - https://www.typescriptlang.org/docs/handbook/triple-slash-directives.html

context('Responsive title', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  // https://on.cypress.io/interacting-with-elements

  it('adjust dynamically to viewport', () => {
    const viewportName = (description) => {
      const dimensions = `${width}px x ${height}px`
      return description ? `${dimensions} - ${description}` : dimensions
    }

    const height = 480
    let width = 501
    cy.viewport(width, height)
      .get('h1')
      .contains(/search good old flickr/i)

    cy.findByTestId('verb').contains(/search/i)
    cy.findByTestId('adjectives').contains(/good old/i)
    cy.findByTestId('noun').contains(/flickr/i)

    cy.screenshot(viewportName())
    cy.screenshot(`${viewportName()} - blackout`, {
      blackout: ['h1'],
    })

    cy.get('h1').screenshot(viewportName('h1'))

    cy.findByTestId('verb').should('be.visible')
    cy.findByTestId('adjectives').should('be.visible')
    cy.findByTestId('noun').should('be.visible')

    width = 500
    cy.viewport(width, height)

    cy.findByTestId('verb').should('be.visible')
    cy.findByTestId('adjectives').should('not.be.visible')
    cy.findByTestId('noun').should('be.visible')

    cy.screenshot(viewportName())
    cy.get('h1').screenshot(viewportName('h1'))

    width = 200
    cy.viewport(width, height)

    cy.findByTestId('verb').should('not.be.visible')
    cy.findByTestId('adjectives').should('not.be.visible')
    cy.findByTestId('noun').should('be.visible')

    cy.screenshot(viewportName())
    cy.get('h1').screenshot(viewportName('h1'))
  })
})
