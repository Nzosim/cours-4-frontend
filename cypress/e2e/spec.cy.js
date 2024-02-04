
describe('My First Test', () => {
  it('visits the app root url', () => {
    cy.visit('http://192.168.56.1:3000')
    cy.contains('h1', 'You did it!')
  })
})

describe('Page Test', () => {
  it('Visite la page et vérifie la présence de l\'élément #app', () => {
    cy.visit('http://192.168.56.1:3000')
    cy.get('#app').should('exist') 
  })
})

describe('Page Test', () => {
  it('Visite la page et vérifie la présence de l\'élément h3', () => {
    cy.visit('http://192.168.56.1:3000')
    cy.get(':nth-child(1) > .details > h3')
      .should('exist')
      .and('have.text', 'Create Vue project with Vite')
  })
})

describe('Page Test', () => {
  it('Visite la page et vérifie la présence de l\'élément Create Workflow', () => {
    cy.visit('http://192.168.56.1:3000')
    cy.get(':nth-child(4) > .details')
      .should('exist')
  })
})

describe('Page Test', () => {
  it('Visite la page et vérifie la présence de l\'élément #app', () => {
    cy.visit('http://192.168.56.1:3000/about')
    cy.get('.about > h1')
      .should('exist')
      .and('have.text', 'This is an about page')
  })
})

describe('Page Test', () => {
  it('Visite la page et vérifie la présence de l\'élément logo', () => {
    cy.visit('http://192.168.56.1:3000/about')
    cy.get('.logo')
      .should('exist')
     
  })
})


describe('Page Test', () => {
  it('Visite la page et vérifie la présence de l\'élément .green', () => {
    cy.visit('http://192.168.56.1:3000/about')
    cy.get('.green')
     .should('exist')
     .and('have.text', 'You did it!')
  })
})