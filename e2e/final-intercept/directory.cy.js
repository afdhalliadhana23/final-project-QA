export default class DashboardDirectory {

    static accessWebsite(){
        return cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    }
    
    static textLogin() {
        return cy.get('.oxd-text.oxd-text--h5.orangehrm-login-title');
    }

    static inputUsername (){
        return cy.get('[name="username"]');
    }  

    static inputPassword (){
        return cy.get('[name="password"]');
    }
    static buttonLogin(){
        return cy.get('.oxd-button.oxd-button--medium.oxd-button--main.orangehrm-login-button');
    }

    static menuDirectory(){
        return cy.contains('a',"Directory");
    }

    static inputEmployeeName(){
        return cy.get('[placeholder="Type for hints..."]');
    }

    static clickJobTitle(){
         return cy.get('[class="oxd-icon bi-caret-down-fill oxd-select-text--arrow"]').eq(0).click();
     }

     static selectJobTitle(){
         return cy.get('.oxd-select-dropdown').eq(0).click();
     }

    static clickLocation(){
        return cy.get('[class="oxd-icon bi-caret-down-fill oxd-select-text--arrow"]').eq(0).click();
    }

    static selectLocation(){
        it("select dropdown value",()=>{
            cy.contains("Directroy").click()
            
            cy.get(".oxd-select-text").click()
            cy.get('.oxd-select-dropdown').should('be.visible')
                .contains('New York Sales Office')
                .click();
        })
        
        //return cy.get('.oxd-select-dropdown').should('contains','New York Sales Office'); //.contains('New York Sales Office').click();
       //return cy.get('.oxd-select-dropdown').should('have.value','New York Sales Office').click();
    }

    static clickSearch(){
        return cy.get('[class="oxd-button oxd-button--medium oxd-button--secondary orangehrm-left-space"]').click();
    }
    static ProfileUser(){
        return cy.get('[class="oxd-sheet oxd-sheet--rounded oxd-sheet--white orangehrm-directory-card"]').should('exist').should('be.visible');
    }
}   