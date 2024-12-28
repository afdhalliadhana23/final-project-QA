export default class loginForgotPassword {
    
    static textForgotLogin(){
        return cy.get ('[class="oxd-text oxd-text--h6 orangehrm-forgot-password-title"]');
    }
    static inputUsername(){
        return cy.get ('input[class="oxd-input oxd-input--active"]');
    }
    static buttonCancel(){
        return cy.get ('[class="oxd-button oxd-button--large oxd-button--ghost orangehrm-forgot-password-button orangehrm-forgot-password-button--cancel"]');
    }
    static buttonResetpPassword(){
        return cy.get ('[class="oxd-button oxd-button--large oxd-button--secondary orangehrm-forgot-password-button orangehrm-forgot-password-button--reset"]');
    }
}