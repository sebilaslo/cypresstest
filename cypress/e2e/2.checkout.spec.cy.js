
describe ('Execute tests for checkout for a product', () => { 
    beforeEach(() => {
        cy.visit('');

        cy.get('[data-test="username"]')
        .as('userName');

        cy.get('[data-test="password"]')
        .as('password');

        cy.get('[data-test="login-button"]')
        .as('loginButton');

        

});

it('Checkout is successfull for a product',() => {
    
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
               
         cy.get('[id="shopping_cart_container"]')
               .click();      

         cy.url().should('include', '/cart'); 
               
         cy.get('[id="item_4_title_link"]')
               .invoke('text')
               .should('equal', 'Sauce Labs Backpack');  
         
         cy.get('[data-test="checkout"]')
               .click(); 

         cy.url().should('include', '/checkout-step-one');  
               
         cy.get('[data-test="firstName"]')
            .type('Sebastian');    
            
         cy.get('[data-test="lastName"]')
            .type('Laslo');   

         cy.get('[data-test="postalCode"]') 
            .type('123456');   

         cy.get('[data-test="continue"]')
            .click(); 

         cy.url().should('include', '/checkout-step-two');   

         cy.get('[data-test="finish"]')
            .click();    
          
         cy.url().should('include', '/checkout-complete');    

         cy.get('[data-test="back-to-products"]')
               .click();     

          cy.url().should('include', '/inventory');  
          
          cy.get('[id="react-burger-menu-btn"]')
          .click();

         cy.get('[id="logout_sidebar_link"]')
          .click(); 

});

it ('Error message is displayed when client First name is not filled',() => {
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
             
       cy.get('[id="shopping_cart_container"]')
             .click();      

       cy.url().should('include', '/cart'); 
             
       cy.get('[id="item_4_title_link"]')
             .invoke('text')
             .should('equal', 'Sauce Labs Backpack');  
       
       cy.get('[data-test="checkout"]')
             .click(); 

       cy.url().should('include', '/checkout-step-one');  

       cy.get('[data-test="lastName"]')
          .type('Laslo');   

       cy.get('[data-test="postalCode"]') 
          .type('123456');   

       cy.get('[data-test="continue"]')
          .click(); 

       cy.get('[data-test="error"]')
          .invoke('text')
          .should('equal', 'Error: First Name is required');

        cy.get('[data-test="firstName"]')
          .type('Sebastian')
          
          cy.get('[data-test="continue"]')
          .click(); 

       cy.url().should('include', '/checkout-step-two');   

       cy.get('[data-test="finish"]')
          .click();    
        
       cy.url().should('include', '/checkout-complete');    

       cy.get('[data-test="back-to-products"]')
             .click();     

        cy.url().should('include', '/inventory');  
        
        cy.get('[id="react-burger-menu-btn"]')
        .click();

       cy.get('[id="logout_sidebar_link"]')
        .click(); 
    
});

it ('Error message is displayed when client Last name is not filled',() => {
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
             
       cy.get('[id="shopping_cart_container"]')
             .click();      

       cy.url().should('include', '/cart'); 
             
       cy.get('[id="item_4_title_link"]')
             .invoke('text')
             .should('equal', 'Sauce Labs Backpack');  
       
       cy.get('[data-test="checkout"]')
             .click(); 

       cy.url().should('include', '/checkout-step-one');  
             
           cy.get('[data-test="firstName"]')
         .type('Sebastian');    
          
       cy.get('[data-test="postalCode"]') 
          .type('123456');   

       cy.get('[data-test="continue"]')
          .click(); 

       cy.get('[data-test="error"]')
          .invoke('text')
          .should('equal', 'Error: Last Name is required');
          
          cy.get('[data-test="lastName"]')
          .type('Laslo')
          
          cy.get('[data-test="continue"]')
          .click(); 

       cy.url().should('include', '/checkout-step-two');   

       cy.get('[data-test="finish"]')
          .click();    
        
       cy.url().should('include', '/checkout-complete');    

       cy.get('[data-test="back-to-products"]')
             .click();     

        cy.url().should('include', '/inventory');  
        
        cy.get('[id="react-burger-menu-btn"]')
        .click();

       cy.get('[id="logout_sidebar_link"]')
        .click();   
    
});

it ('Error message is displayed when client Postal Code is not filled',() => {
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
             
       cy.get('[id="shopping_cart_container"]')
             .click();      

       cy.url().should('include', '/cart'); 
             
       cy.get('[id="item_4_title_link"]')
             .invoke('text')
             .should('equal', 'Sauce Labs Backpack');  
       
       cy.get('[data-test="checkout"]')
             .click(); 

       cy.url().should('include', '/checkout-step-one');  
             
           cy.get('[data-test="firstName"]')
         .type('Sebastian');    
     
         cy.get('[data-test="lastName"]')
         .type('Laslo')
  
       cy.get('[data-test="continue"]')
          .click(); 

       cy.get('[data-test="error"]')
          .invoke('text')
          .should('equal', 'Error: Postal Code is required');
          
          cy.get('[data-test="postalCode"]')
          .type('123456')
          
          cy.get('[data-test="continue"]')
          .click(); 

       cy.url().should('include', '/checkout-step-two');   

       cy.get('[data-test="finish"]')
          .click();    
        
       cy.url().should('include', '/checkout-complete');    

       cy.get('[data-test="back-to-products"]')
             .click();     

        cy.url().should('include', '/inventory');  
        
        cy.get('[id="react-burger-menu-btn"]')
        .click();

       cy.get('[id="logout_sidebar_link"]')
        .click();   
    
});

})

