describe('Test the site', () => {
  it('Visits the tunesense website.', () => {
    cy.visit('https://tunesense.herokuapp.com') //visit the site - set up the application state

    cy.contains('Sign In').click() // query and element and interact - take action

    cy.url().should('include', 'accounts.spotify.com') // assert about the element content

    cy.get('#login-username')
      .type('jamesw.testing@gmail.com')
      .should('have.value', 'jamesw.testing@gmail.com')

    cy.get('#login-password')
      .type('webdevtest')
      .should('have.value', 'webdevtest')

    cy.contains('Log In').click()
  })
})
