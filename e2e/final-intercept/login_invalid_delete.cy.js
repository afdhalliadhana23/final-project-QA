/// <reference types="cypress"/>
import loginPage from "../../pom/orangeHRM/loginPage/login";
 
describe('Login Feature',() => {
    it('Pengguna login dengan username dan pasword yang sudah di hapus',() => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        loginPage.textLogin().should('have.text','Login'); 
        loginPage.inputUsername().type('toretto');
        loginPage.inputPassword().type('qwerty123456');
        cy.request({
            method : "get",
            url:'https://opensource-demo.orangehrmlive.com/web/index.php/core/i18n/messages',
            failonstatuscode: false

            
        }).then((response)=>{
            console.log('login Required. response code:',response.status);
            expect(response.status).to.not.equal(304);
        });

        
        loginPage.buttonLogin().click();
        loginPage.kontenalert().should('have.text','Invalid credentials');
        
    })
    
 
})