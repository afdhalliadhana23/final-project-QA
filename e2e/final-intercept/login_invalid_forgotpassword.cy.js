/// <reference types="cypress"/>
import loginForgotPassword from "../../pom/orangeHRM/loginPage/forgot-password";

describe('Login Feature',() => {
    it('Pengguna login dengan username dan pasword yang sudah lupa password',() => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/requestPasswordResetCode')
        cy.intercept("Get","https://opensource-demo.orangehrmlive.com/web/index.php/core/i18n/messages").as("reqForgotpassword");
        loginForgotPassword.textForgotLogin(); 
        loginForgotPassword.inputUsername().type('fredybaby');
        

        
       
        loginForgotPassword.buttonResetpPassword().click();
       // loginPage.kontenalert().should('have.text','Invalid credentials');
      
      cy.wait("@reqForgotpassword").then((intercept) => {
        console.log('status code:', intercept.response.statusCode);
        expect(intercept.response.statusCode) .equal(304);
      });
    })
    
 
})