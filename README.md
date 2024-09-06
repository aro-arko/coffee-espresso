# Coffee Espresso

## Overview

Coffee Espresso is a simple web application for managing coffee data. It features a front-end built with React, a back-end using Node.js and Express.js, and a MongoDB database. The application supports basic CRUD operations for coffee items, allowing users to add, update, delete, and view coffee data.

## Features

- **Add Coffee**: Allows users to add new coffee items to the database.
- **Update Coffee**: Enables users to modify existing coffee items.
- **Delete Coffee**: Provides functionality to remove coffee items from the database.
- **View Coffee**: Displays a list of all coffee items with details.

## Technologies Used

- **Front-End**: React
- **Back-End**: Node.js, Express.js
- **Database**: MongoDB

## Installation

### Prerequisites

- Node.js
- npm
- MongoDB

### Getting Started

1. **Clone the Repository**

   ```bash
   git clone https://github.com/aro-arko/coffee-espresso.git
   cd coffee-espresso

2. **Install Front-End Dependencies**
    ```bash
    cd client
    npm install

3. **Install Back-End Dependencies**

    ```bash
    cd server
    npm install

4. **Set Up MongoDB**

    Ensure MongoDB is running on your local machine or use a cloud MongoDB service. 
    Update the MongoDB connection string in the server/config/db.js file if needed.
   
- **Local MongoDB: If running MongoDB locally, make sure it is started. You can start it with:**
    ```bash
    mongod

5.  **Run the Application**
- **Start the Back-End Application**
Open another terminal, navigate to the server directory, and start the server:

    cd server
    npm start

- **Start the Front-End Application**
Open another terminal, navigate to the client directory, and start the React application:

    cd client
    npm start

## Usage

- Front-End: Access the application in your browser at http://localhost:3000.

- Back-End: The API is available at https://coffee-espresso-store.onrender.com/.

## API Endpoints
- GET /api/coffee
Retrieve a list of coffee items.

- POST /api/coffee
Add a new coffee item. Requires a request body with coffee details.

- PUT /api/updateCoffee/:id
Update an existing coffee item by ID. Requires a request body with updated coffee details.

- DELETE /api/coffee/:id
Delete a coffee item by ID.
    

## Contributing
Feel free to contribute to this project by submitting issues or pull requests.

## Contact
For any questions or inquiries, please contact aroarko.sd@gmail.com.
