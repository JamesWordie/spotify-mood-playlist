describe('Test the site', () => {
  beforeEach(function() {
    cy.exec('yarn start')
  })

  it('Visits the tunesense website.', () => {
    cy.visit('http://localhost:3000') //visit the site - set up the application state

    cy.contains('Sign In').click() // query and element and interact - take action

    cy.url().should('include', 'accounts.spotify.com') // assert about the element content

    cy.get('#login-username')
      .type('jamesw.testing@gmail.com')
      .should('have.value', 'jamesw.testing@gmail.com')

    cy.get('#login-password')
      .type('webdevtest')
      .should('have.value', 'webdevtest')

    // cy.contains('Log In').click()
  })
})

describe('Request login', () => {
  it('Attempts to make a get request to the site for authroization.', () => {
    cy.exec('yarn start')

    cy.request({
      url: "https://accounts.spotify.com/authorize",
      qs: `client_id=${Cypress.env('client_id')}&redirect_uri=${Cypress.env('redirect_url')}&scopes=${Cypress.env('auth_scope')}&${Cypress.env('auth_params')}`
    }).then(response => {
      expect(response.status).eq(200)
    })

    cy.get('#login-username')
      .should('have.value', 'jamesw.testing@gmail.com')

    cy.get('#login-password')
      .should('have.value', 'webdevtest')

    cy.contains('Log In').click()

  })
})

