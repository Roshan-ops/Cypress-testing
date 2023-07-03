it('BOOKING DEMO',()=>{
    cy.visit('https://partner.mydriver.au/customer/dashboard')
    cy.get('#login-form > :nth-child(2) > .form-control').type('sydwebpaxpersonalwithsinglevalidcard@mailinator.com')
    cy.get(':nth-child(3) > .form-control').type('Passw0rd1#')
    cy.get('#login-form > .btn').click()
    // cy.get('.left_part').click()
    cy.get(' .toggle').click()
    cy.get('.toggle').should('be.visible').click('BOOKING',{force: true})
})