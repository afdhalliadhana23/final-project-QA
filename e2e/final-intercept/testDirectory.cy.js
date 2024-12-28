import DashboardDirectory from "./directory.cy";

describe('Search Directory Feature',()=>{
    beforeEach(()=>{
       DashboardDirectory.accessWebsite()
    });

    // Success Direct to menu Directory
    it('Success Direct to menu Directory', ()=>{
       DashboardDirectory.textLogin().should('have.text','Login');
       DashboardDirectory.inputUsername().type('Admin');
       DashboardDirectory.inputPassword().type('admin123')
       cy.intercept("GET","**/directory/employees?limit=14&offset=0").as('employees?limit=14&offset=0')
       DashboardDirectory.buttonLogin().click();
       DashboardDirectory.menuDirectory().click();
       cy.wait('@employees?limit=14&offset=0').then((intercept)=>{
        expect(intercept.response.statusCode).to.equal(200);});
       cy.get('[class="oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module"]').should('have.text','Directory');
    });

    //'Success search Employee with Complete Data'
    it('Success search Employee with Complete Data', ()=>{
      DashboardDirectory.textLogin().should('have.text','Login');
      DashboardDirectory.inputUsername().type('Admin');
      DashboardDirectory.inputPassword().type('admin123')
      DashboardDirectory.buttonLogin().click();
      DashboardDirectory.menuDirectory().click();
      DashboardDirectory.inputEmployeeName().type('Peter');
      cy.get('div[role=listbox]').should('not.be.empty').contains('Peter Mac Anderson').first().click();
      DashboardDirectory.clickJobTitle();
      DashboardDirectory.selectJobTitle();
      cy.contains('Chief Financial Officer')
      DashboardDirectory.clickLocation();
      DashboardDirectory.selectLocation();
      DashboardDirectory.clickSearch();
      DashboardDirectory.ProfileUser();
      });

   //'Success search data using Employee Name'
   it('Success search data using Employee Name', ()=>{
      DashboardDirectory.textLogin().should('have.text','Login');
      DashboardDirectory.inputUsername().type('Admin');
      DashboardDirectory.inputPassword().type('admin123');
      DashboardDirectory.buttonLogin().click();
      DashboardDirectory.menuDirectory().click();
      DashboardDirectory.inputEmployeeName().type('Peter');
      cy.get('div[role=listbox]').should('not.be.empty').contains('Peter Mac Anderson').click();
      DashboardDirectory.clickSearch();
      DashboardDirectory.ProfileUser();
});
});