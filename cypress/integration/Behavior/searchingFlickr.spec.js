/// <reference types="cypress" />
// ☝️ magic 🎩 ✨ https://youtu.be/lgurVvQsOTY?t=1225 ✨ - https://www.typescriptlang.org/docs/handbook/triple-slash-directives.html
import { photosResponse as photosResponseFake } from '@fixtures/fakeResponses'

const url = 'https://api.flickr.com/services/rest/?method=flickr.photos.search'

describe('Main page search results', () => {
  beforeEach(() => {
    // initial fetching of "planning" photos
    cy.intercept(
      {
        method: 'GET',
        url: /^https:\/\/api\.flickr\.com\/services\/.*text=planning/,
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
    // searching for "cats"
    cy.intercept(
      {
        method: 'GET',
        url: /^https:\/\/api\.flickr\.com\/services\/.*text=cats/,
      },
      {
        headers: {
          'content-type': 'application/json',
        },
        body: {
          ...photosResponseFake(3),
        },
        stat: 'ok',
      }
    )
    // searching for "failure"
    cy.intercept('GET', /^https:\/\/api\.flickr\.com\/services\/.*text=failure/, {
      forceNetworkError: true,
    }).as('err')

    cy.intercept(
      {
        method: 'GET',
        url: 'https://farm*.staticflickr.com/**/*',
      },
      { fixture: '1080x608.jpg' }
    ).as('getPhotos')

    cy.visit('http://localhost:3000')

    // Make sure all requests are completed before proceeding
    //https://docs.cypress.io/guides/guides/network-requests.html#Waiting
    cy.wait([...new Array(9)].map((e) => '@getPhotos')) // https://github.com/cypress-io/cypress/issues/4389
    cy.findAllByTestId('flickr-grid-photo').should('have.length', 9)
  })

  describe('Success', () => {
    it('contains a grid of search result photos', () => {
      cy.get('input').type('cats{enter}')

      cy.wait([...new Array(3)].map((e) => '@getPhotos'))

      cy.findAllByTestId('flickr-grid-photo').should('have.length', 3)

      cy.findByText('Oops! Something went wrong..').should('be.hidden')
    })
  })

  describe('Failure - response throws an error', () => {
    it('displays an error dialog', () => {
      cy.get('input').type('failure{enter}')

      // assert that this request happened, and that it ended in an error
      cy.wait('@err').should('have.property', 'error')

      // Still showing the intial "planning" photos
      cy.findAllByTestId('flickr-grid-photo').should('have.length', 9)
      cy.findByText('Oops! Something went wrong..').should('be.visible')
    })
  })
})
