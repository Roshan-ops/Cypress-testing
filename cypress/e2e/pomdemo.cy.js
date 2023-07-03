import {  LoginPage } from "./Logincustomer.cy"
const loginPage= new LoginPage()
describe('template spec', () => {
    beforeEach(function(){
        cy.visit('https://partner.mydriver.au/customer/login')
    })
    it('Login Page 1',()=>{
        
        loginPage.enterEmail('sydwebhotelpaxpersonalwithmultiplevalidcard@mailinator.com')
        loginPage.enterPassword('Passw0rd1#')
        loginPage.clickSignin()
        loginPage.clickBell()
        loginPage.clickMarkasread()
    })
    it('Login Page 2',()=>{

        loginPage.enterEmail('sydwebhotelpaxpersonalwithmultiplevalidcard@mailinator.com')
        loginPage.enterPassword('Passw0rd1#')
        loginPage.clickSignin()
        loginPage.clickBell()
        loginPage.clickMarkasread()
    })

})





    // cy.get('.text-right > p > a').click()
    // cy.get(':nth-child(1) > .form-group > .form-control').type('Hello kaka')
    // cy.get(':nth-child(2) > .form-group > .form-control').type('hello@mailinator.com')
    // cy.get('#mobile').type('491512396 ')
    // cy.get('#business_name').type("trvel agent")
    // cy.get(':nth-child(6) > .form-group > .form-control').should('be.visible').select('Hotel',{force: true})

    // cy.get('#full_address').type('Itahari')
    // cy.get('#password').type('Passw0rd1#')
    // cy.get('#password-confirm').type('Passw0rd1#')
    // cy.get('.control-label > input').click()
    // cy.get('#register-button').click()


