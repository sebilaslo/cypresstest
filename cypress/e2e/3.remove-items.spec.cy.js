
describe ('User can remove items from shopping cart', () => { 
    beforeEach(() => {
        cy.visit('');

        cy.get('[data-test="username"]')
        .as('userName');

        cy.get('[data-test="password"]')
        .as('password');

        cy.get('[data-test="login-button"]')
        .as('loginButton');

        

});

it('User can remove items from shopping cart',() => {
    
       cy.get('@userName')
            .type('standard_user');

        cy.get('@password')
             .type('secret_sauce');

        cy.get('@loginButton')
             .click(); 

         cy.url().should('include', '/inventory'); 

         cy.get('[data-test="add-to-cart-sauce-labs-backpack"]')
               .click();

         cy.get('[data-test="remove-sauce-labs-backpack"]')
               .should('be.visible');   
               
         cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]')
               .click();

         cy.get('[data-test="remove-sauce-labs-bike-light"]')
               .should('be.visible');  


         cy.get('[id="shopping_cart_container"]')
               .click();      

         cy.url().should('include', '/cart'); 
               
         cy.get('[id="item_4_title_link"]')
               .invoke('text')
               .should('equal', 'Sauce Labs Backpack');  
         
         cy.get('[id="item_0_title_link"]')
               .invoke('text')
               .should('equal', 'Sauce Labs Bike Light');     
               
         cy.get('[data-test="remove-sauce-labs-backpack"]')     
               .click();          

        cy.get('[data-test="remove-sauce-labs-bike-light"]')
               .click(); 

        cy.get('[data-test="continue-shopping"]')
               .click(); 
     
        cy.url().should('include', '/inventory');  
               
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]')
              .should('be.visible');  
               
        cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]')
             .should('be.visible');     

        cy.get('[id="react-burger-menu-btn"]')
             .click();
     
       cy.get('[id="logout_sidebar_link"]')
             .click();         

});

})

