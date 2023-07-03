/// <reference types="cypress"/>

it('Google Search',()=>{
    cy.visit('https://google.com')

  cy.get('#APjFqb').type('Automation Tool')

    //cy.contains('Google search').click()
    cy.get('.FPdoLc > center > .gNO89b').click()
    cy.get('.MUFPAc > :nth-child(3) > a').click()
})