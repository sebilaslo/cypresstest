
describe ('Execute tests on login page', () => { 
    beforeEach(() => {
        cy.visit('');

        cy.get('[data-test="username"]')
        .as('userName');

        cy.get('[data-test="password"]')
        .as('password');

        cy.get('[data-test="login-button"]')
        .as('loginButton');

});

it('verify login fields and button are visible',() => {
    
    cy.get('@userName')
        .should('be.visible');

     cy.get('@password')
        .should('be.visible');

     cy.get('@loginButton')
         .should('be.visible');
  
});

it('login - logout flow is successfull with correct credentials',() => {
    
       cy.get('@userName')
            .type('standard_user');

        cy.get('@password')
             .type('secret_sauce');

        cy.get('@loginButton')
             .click(); 

         cy.url().should('include', '/inventory'); 
         
         cy.get('[id="react-burger-menu-btn"]')
          .click();

         cy.get('[id="logout_sidebar_link"]')
          .click();         

});


it('verify login is denied when username is invalid',() => {
    
    cy.get('@userName')
         .type('wrongUserName');

     cy.get('@password')
          .type('secret_sauce');

     cy.get('@loginButton')
          .click(); 

     cy.get('[data-test="error"]')
          .should('be.visible');  
});

it('verify login is denied when password is invalid',() => {
    
    cy.get('@userName')
         .type('standard_user');

     cy.get('@password')
          .type('wrongPassword');

     cy.get('@loginButton')
          .click(); 

     cy.get('[data-test="error"]')
          .should('be.visible');  
});

})

