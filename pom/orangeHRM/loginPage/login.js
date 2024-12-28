export default class loginPage {
    static textLogin(){
        return cy.get ('[class="oxd-text oxd-text--h5 orangehrm-login-title"]');
        
    }
    static textForgotLogin(){
        return cy.get ('[class="oxd-text oxd-text--h6 orangehrm-forgot-password-title"]');
    }
    static inputUsername (){
        return cy.get('[name="username"]');
    }

    static inputPassword (){
        return cy.get('[name="password"]');
    }
    static buttonLogin(){
        return cy.get ('[class="oxd-button oxd-button--medium oxd-button--main orangehrm-login-button"]')
    }
    //bisa juga mengisi error massage
    static kontenalert(){
        return cy.get('[class="oxd-text oxd-text--p oxd-alert-content-text"]');
        
    }
    static errorMassage(){
        return cy.get ('[class="oxd-text oxd-text--span oxd-input-field-error-message oxd-input-group__message"]');
    }
    
    static menuDashboard(){
        return cy.get ('[class="oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module"]')
    }
    staticLoginFailed(){
        return this.kontenalert.should('contain','Invalid credentials');
    }

}