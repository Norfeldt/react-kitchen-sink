/// <reference types="cypress" />
// ☝️ magic 🎩 ✨ https://youtu.be/lgurVvQsOTY?t=1225 ✨ - https://www.typescriptlang.org/docs/handbook/triple-slash-directives.html
import { photosResponse as photosResponseFake } from '@fixtures/fakeResponses'

describe('Main page search results', () => {
  beforeEach(() => {
    cy.intercept(
      {
        method: 'GET',
        url: 'https://api.flickr.com/services/rest/?method=flickr.photos.search',
      },
      {
        headers: {
          'content-type': 'application/json',
        },
        body: {
          ...photosResponseFake(),
        },
        stat: 'ok',
      }
    )

    cy.intercept(
      {
        method: 'GET',
        url: 'https://farm*.staticflickr.com/**/*',
      },
      { fixture: '1080x608.jpg' }
    ).as('getPhotos')

    cy.visit('http://localhost:3000')
    cy.get('input').type('cats{enter}')

    // Make sure all requests are completed before proceeding
    //https://docs.cypress.io/guides/guides/network-requests.html#Waiting
    cy.wait([...new Array(9)].map((e) => '@getPhotos')) // https://github.com/cypress-io/cypress/issues/4389
  })

  describe('Smoke test', () => {
    it('contains a grid of search result photos', () => {
      cy.findAllByTestId('flickr-grid-photo').should('have.length', 9)
    })
  })

  describe('different visual testing techniques', () => {
    beforeEach(() => {
      const fixtures = [
        '420x654.jpg',
        '600x315.jpg',
        '600x600.jpg',
        '600x750.jpg',
        '1080x608.jpg',
        '1080x1080.jpg',
        '1080x1350.jpg',
        '1080x1920.jpg',
      ]

      cy.findAllByTestId('flickr-grid-photo').should('have.length', 9)

      cy.get('img').each((element, index) => {
        cy.fixture(fixtures[index % fixtures.length]).then((fixture) => {
          cy.wrap(element).invoke('attr', 'src', `data:image/png;base64, ${fixture}`)
        })
      })
    })

    it('Percy', () => {
      cy.percySnapshot()
    })
  })
})
