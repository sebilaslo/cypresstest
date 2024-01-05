For testing the website presented, I was thinking to the first top three important scenarios:

1. I've tested the login page with multiple scenarios:
    - I've checked that login fields for username and password and login button are visible on the login page;
    - e2e test for successfull login and logout of an user;
    - error message is displayed when user tries to login with an invalid username;
    - error message is displayed when user tries to login with an invalid password;

2. I've tested the flow for checking out a product with the following scenarios:
    - User is logged in the application, it add to the card a product, I've check that product is added to card, then he fill all mandatory fields, checkout is succesfull, user is going back to shopping list and then he is logged out from the application;

    - User is logged in the application, it add to the card a product, then, on the checkout page, he fill Last Name and Postal code but he is missing the First Name, i've checked that when this field is missed, the corresponding error message is displayed. After the user complete data for the missing field, finnally the checkout is successfull and then he is logged out from the application;

    - User is logged in the application, it add to the card a product, then, on the checkout page, he fill First Name and Postal code but he is missing the Last Name, i've checked that when this field is missed, the corresponding error message is displayed. After the user complete data for the missing field, finnally the checkout is successfull and then he is logged out from the application;  

    - User is logged in the application, it add to the card a product, then, on the checkout page, he fill First Name and Last Name but he is missing the Postcal Code, i've checked that when this field is missed, the corresponding error message is displayed. After the user complete data for the missing field, finnally the checkout is successfull and then he is logged out from the application; 

3. I've checked that user can remove items from the shopping card and after that, the removed products from the list are available again in product list:
    - User is logged in the application, he add 2 products in the shopping cart, than he access the shopping card; I've checked that the 2 items are added to the card; User remove the items from the card and after the user is back on the products page; There, I've check that items are available again ("Add to card" buttons are displayed for both items that were previously added to basket);
    
        