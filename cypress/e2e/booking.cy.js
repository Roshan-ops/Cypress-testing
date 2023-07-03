it('BOOKING DEMO',()=>{
    cy.visit('https://partner.mydriver.au/customer/dashboard')
    cy.get('#login-form > :nth-child(2) > .form-control').type('sydwebhotelpaxpersonalwithmultiplevalidcard@mailinator.com')
    cy.get(':nth-child(3) > .form-control').type('Passw0rd1#')
    cy.get('#login-form > .btn').click()
    cy.get('.img-fluid').click()
    cy.get('#point-start').type('Concord Hospital Emergency Department, Hospital Road, Concord NSW, Australia').wait(2000).type("{enter}").wait(500);
    // .wait(500).type('{enter}')
    // type('Sydney Airport (SYD), Mascot NSW, Australia').type('{enter}')
    // cy.type('Sydney Airport (SYD), Mascot NSW, Australia').click('{enter}')
    cy.get('#point-end').type('Sydney Airport (SYD), Mascot NSW, Australia').wait(2000).type("{enter}").wait(500);
    cy.get('#pickup-date').should('be.visible').click()
    cy.get('.ui-datepicker-next > .ui-icon').click()
    cy.get(':nth-child(4) > :nth-child(1) > .ui-state-default').click()
    cy.get('#pickup-time').click()
    cy.get('.ui-timepicker-list > :nth-child(26)').click()
    cy.wait(1000)
    cy.get('.submit_btn > .btn').click().wait(10000)


    cy.get(':nth-child(3) > form > .row > .col-lg-4 > .card_info > .btn').click().wait(5000)

    cy.get('.form-group > .btn').click()

    cy.get(':nth-child(2) > .form-group > .col-sm-3 > .input-group > .input-group-append > .btn').click().click()
    cy.get(':nth-child(3) > .form-group > .col-sm-3 > .input-group > .input-group-append > .btn').click()
    cy.get(':nth-child(6) > :nth-child(1) > .form-group > .form-control').type('{upArrow}').type('{upArrow}').type('{upArrow}').click()
    cy.get(':nth-child(2) > .form-group > .form-control').type('{upArrow}').type('{upArrow}').click()
    cy.get('#flight-number-input').type("BA 15").click()
    cy.get('#verify-button').click().wait(5000)
    cy.get('.col-md-6 > .form-group > .form-control').type('hello kanchi how are you doing ').click()
    cy.get('.col-md-12 > .form-group > .form-control').type('The problem is with your selector. If you have n number of buttonsinstead of option of select. Anne sanchi ho ki k cha br ma cho taxi chadna aateko ho haiii.').wait(5000)
    cy.get('#btn-submit').click()
    cy.get('#card-select').type('{downArrow}').type('{downArrow}').type('{enter}')
    cy.get('.checkmark').click()
    cy.get('#payment-form-button').click()
    cy.get('.dropdown > a').click().wait(3000)

    cy.get('.left_part').click()
    




    // cy.get('#point-start').type('Sydney Airport (SYD), Mascot NSW, Australia').click()
    // cy.get('#point-end').type('Concord Hospital Emergency Department, Hospital Road, Concord NSW, Australia').click()
    // cy.get('#pickup-date').should('be.visible')

})