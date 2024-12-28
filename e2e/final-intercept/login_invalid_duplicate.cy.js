/// <reference types="cypress"/>

import loginPage from "../../pom/orangeHRM/loginPage/login";


 
describe('Login Feature',() => {
    it('Pengguna Login dengan username dan password duplicate',() => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        loginPage.textLogin().should('have.text','Login'); 
        loginPage.inputUsername().type('admin');
        loginPage.inputPassword().type('admin');
        cy.intercept("Get","https://opensource-demo.orangehrmlive.com/web/index.php/core/i18n/messages").as("loginRequest");
        
        loginPage.buttonLogin().click();
        loginPage.kontenalert().should('have.text','Invalid credentials');
        cy.wait("@loginRequest").then((intercept) => {
            console.log('status code:', intercept.response.statusCode);
            expect(intercept.response.statusCode).to.equal(304);
        });
    })
    
 
})