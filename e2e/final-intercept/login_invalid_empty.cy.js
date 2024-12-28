/// <reference types="cypress"/>
import loginPage from "../../pom/orangeHRM/loginPage/login";
 
describe('Login Feature',() => {
    it('Pengguna Login dengan username kosong dan password kosong',() => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        loginPage.textLogin().should('have.text','Login'); 
        loginPage.inputUsername().type(' ');
        loginPage.inputPassword().type(' ');
        
        loginPage.buttonLogin().click();
        loginPage.errorMassage().should('have.text','RequiredRequired');
        cy.request({
            method : "get",
            url:'https://opensource-demo.orangehrmlive.com/web/index.php/core/i18n/messages',
            failonstatuscode: false

            
        }).then((response)=>{
            console.log('login Required. response code:',response.status);
            expect(response.status).to.not.equal(304);
        });
    }) 
})