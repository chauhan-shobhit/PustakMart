# PustakMart


PustakMart is an eCommerce website for books. Functionalities provided by the site include: 
1. Browse across the site. Landing page has carousel listing top 5 featured products. Landing page also list cards of various products offered on the site. 
2. Selecting any product card will take the user to Product Details screen. 
3. Search for products using search bar.
4. Create a user profile within PustakMart
5. Sign In using email address and password.
6. SignInAndCheckout / AddToCart buttons available on Product Details screen. 
7. (Work In Progress) Users can purchase products using paypal and check the status of their orders. 

**Tech Stack:** 

Languages  : Java, Javascript

Frameworks : Springboot, ReactJS

DataStores : MongoDB, Elastic Search 

Current State: 
Backend : 

======================================================

**Backend**
-----------
Backend is built of 3 microservices : 

**Search Services :**
----------------------
Langauge / Framework : Java / Springboot
Datastore : Elastic Search

Search Services provides Search functionalities for products available on PutakMart. Product data is stored in Elastic Search. 
Following APIs are provided :

**GET :**

Get All Products

Get Product by Id

Get Top Featured Products

**POST:**

Create Product

**PUT:**

Update Products By Id

**Delete: **


Delete Product by Id

Delate All products

Screenshot of Swagger-ui in screenshots listed after description


**Auth Services     :** 
---------------------------


Langauge / Framework : Java / Springboot

Database : MongoDB 

Auth Services provides following functionalities: 
1. Register a user in Pustak Mart
2. Login a user in PustakMart. When user logs in the first time a JWT token is returned in response. The JWT token is then used for subsequent calls. BCrypt Encoder is used for encoding the password.
Cart and Checkout calls (GetOrders, GetOrdersById are accessible only on validation of JWT token)




**Cart and Checkout** (Work In Progress): 
---------------
Langauge / Framework : Java / Springboot
Database : MongoDB 

Currently, it provides following fucntionalities:
Get Orders
Get Orders By Id

Both APIs are accessible on successful validation of JWT token.

ToDo : Create payment APIs for purchase using paypal or visa (using sandbox environment)


**Frontend**: (Work In Progress)
------------------

Language : Javascript

Framework: ReactJS

Landing page has : 
1. Search Bar
2. Product Carousel with 5 product entries
3. Cards of Products with details (Product Name, Image, Price, Discounted price, Ratings, Number of reviews)

Login Screen:

Screen has form with 2 fields - Email Address and Password

Register / SignUp Screen:

Sign Up screen has a form with fields - Email Address, Password, Confirm Password, Name. Register user save the user in MongoDB.

Product Details Screen:

Screen consists of :
1. Left pane - larger image of Product
2. Right pane - Product Details - Name, Author Name, Price, Discounted Price, % Savings, Type (Paperback,Hardcover etc.) , Status (In Stock, Out of stock )
3. Buttons for AddToCart and SignIn and Checkout
 
ToDo:
Create pages for AddToCart, Payment Screen and order Confirmation.
Tie the pages together with transactions and with corresponsing backend calls. 



![Screenshot](https://github.com/chauhan-shobhit/PustakMart/blob/main/frontend/public/images/Screen1.png)

![name-of-you-image](https://github.com/chauhan-shobhit/PustakMart/blob/main/frontend/public/images/Screen2.png)

![name-of-you-image](https://github.com/chauhan-shobhit/PustakMart/blob/main/frontend/public/images/Screen3.png)

![name-of-you-image](https://github.com/chauhan-shobhit/PustakMart/blob/main/frontend/public/images/Screen4.png)

![name-of-you-image](https://github.com/chauhan-shobhit/PustakMart/blob/main/frontend/public/images/Screen5.png)

![name-of-you-image](https://github.com/chauhan-shobhit/PustakMart/blob/main/frontend/public/images/Screen6.png)


![name-of-you-image](https://github.com/chauhan-shobhit/PustakMart/blob/main/frontend/public/images/Swagger_PustakMart_SearchServices.png)
