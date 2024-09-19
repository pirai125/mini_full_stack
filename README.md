Project demo : https://youtu.be/kiASdA1ErNQ?si=srw53JMFjl948kVV

Project Overview:
This project demonstrates the integration of the MVC architecture to separate concerns and improve the structure and maintainability of the code. The frontend is powered by React and styled with Tailwind CSS, while the backend uses Node.js and Express.js to handle API requests and database interactions. The data is stored and managed with MySQL.

MVC Architecture:
- Model: Manages the application’s data logic and handles interactions with the MySQL database (product and order data).
- View: The user interface, built with React, allows users to interact with the application, displaying the products, cart, and order details.
- Controller: Acts as an intermediary between the Model and the View, processing user inputs (e.g., adding to the cart or placing an order) and communicating with the Model to retrieve or modify data.

Features:
1. Frontend :
   - Built with React and styled using Tailwind CSS for a responsive and clean UI.
   - It includes three main pages:
     - Home: Displays a list of products fetched from the backend.
     - Cart: Shows the products added to the cart, allowing users to adjust quantities or remove items.
     - Order: Allows users to track their orders in real-time.
   
2. Backend (Model & Controller):
   - The backend follows the MVC architecture, ensuring clean separation of concerns. The controllers handle the API requests, routing them to the correct logic in the models, which interact with the MySQL database.
   - CRUD operations are implemented to manage products and orders.
   - REST APIs facilitate communication between the frontend and backend.
   
3. Database (Model):
   - The MySQL database is structured with two key tables:
     - Admin Table: Stores product information (name, description, price).
     - Client Table: Manages customer orders, including item details and order statuses.
   
4. API Integration:
   - Custom APIs have been created for seamless interaction between the frontend (View) and backend (Model & Controller). These APIs allow for adding products to the cart, placing orders, and tracking order statuses in real-time.

Key Functionality:
- Users can add products to their cart, modify quantities, and place orders.
- The order status is tracked in the backend and updated in real-time on the frontend.
- Admins can manage product details and orders efficiently using the CRUD operations.

This project was developed using the MVC architecture to ensure a clear and organized structure, making the application more maintainable and scalable. It also demonstrates how to build a full e-commerce system with real-time features.

LinkedIn 

 www.linkedin.com/in/piraisudan2003
