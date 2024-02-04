// https://on.cypress.io/api

describe('My First Test', () => {
  it('visits the app root url', () => {
    cy.visit('/')
    cy.contains('h1', 'You did it!')
  })
})

describe('Mon premier test', () => {
  it('Visite la page d\'accueil', () => {
    cy.visit('http://localhost:3000') // changez ceci à l'URL de votre application
  })
})

describe('Page Test', () => {
  it('Visite la page et vérifie la présence de l\'élément #app', () => {
    cy.visit('http://localhost:3000')
    cy.get('#app').should('exist') 
  })
})


