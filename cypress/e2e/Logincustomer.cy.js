export class LoginPage{
loginpax_textbox_email='#login-form > :nth-child(2) > .form-control'
loginpax_textbox_password=':nth-child(3) > .form-control'
loginpax_signin_button='#login-form > .btn'
dasbord_bell='.far'
markasread='#mark-all-as-read'

    
    enterEmail(username){
        cy.get(this.loginpax_textbox_email).type(username)
    }
    enterPassword(password){
        cy.get(this.loginpax_textbox_password).type(password)
    }
    clickSignin(){
        cy.get(this.loginpax_signin_button).click()
    }
    clickBell(){
        cy.get(this.dasbord_bell).click()
    }
    clickMarkasread(){
        cy.get(this.markasread).click()
    }
}




