/// <reference types="cypress"/>
import loginPage from "../../pom/orangeHRM/loginPage/login";
 
describe('Login Feature',() => {
    it('Pengguna Login dengan username salah dan password benar',() => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        loginPage.textLogin().should('have.text','Login'); 
        loginPage.inputUsername().type('admin');
        loginPage.inputPassword().type('admin123');
        cy.intercept("Get","**/employees/action-summary").as("actionsummary");
        loginPage.buttonLogin().click();
        loginPage.menuDashboard().should('have.text','Dashboard')
        cy.wait("@actionsummary").then((intercept) => {
            expect(intercept.response.statusCode).to.equal(200);
        });
    })
    
 
})