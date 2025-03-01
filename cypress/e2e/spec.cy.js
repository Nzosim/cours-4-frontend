
describe('My First Test', () => {
  it('visits the app root url', () => {
    cy.visit('http://localhost:4173')
    cy.contains('h1', 'You did it!')
  })
})

describe('Page Test', () => {
  it('Visite la page et vérifie la présence de l\'élément #app', () => {
    cy.visit('http://localhost:4173')
    cy.get('#app').should('exist') 
  })
})

describe('Page Test', () => {
  it('Visite la page et vérifie la présence de l\'élément h3', () => {
    cy.visit('http://localhost:4173')
    cy.get(':nth-child(1) > .details > h3')
      .should('exist')
      .and('have.text', 'Create Vue project with Vite')
  })
})

describe('Page Test', () => {
  it('Visite la page et vérifie la présence de l\'élément Create Workflow', () => {
    cy.visit('http://localhost:4173')
    cy.get(':nth-child(4) > .details')
      .should('exist')
  })
})

describe('Page Test', () => {
  it('Visite la page et vérifie la présence de l\'élément #app', () => {
    cy.visit('http://localhost:4173/about')
    cy.get('.about > h1')
      .should('exist')
      .and('have.text', 'This is an about page')
  })
})

describe('Page Test', () => {
  it('Visite la page et vérifie la présence de l\'élément logo', () => {
    cy.visit('http://localhost:4173/about')
    cy.get('.logo')
      .should('exist')
     
  })
})


describe('Page Test', () => {
  it('Visite la page et vérifie la présence de l\'élément .green', () => {
    cy.visit('http://localhost:4173/about')
    cy.get('.green')
     .should('exist')
     .and('have.text', 'You did it!')
  })
})