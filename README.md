# JWT Authentication and Custom API Errors Example

This project demonstrates how to implement JWT (JSON Web Token) authentication
and custom API error handling in a Node.js application using Express. The
application includes the following key features:

## Features

1. **JWT Authentication**:

   - Users can log in with a username and password to receive a JWT.
   - Protected routes require a valid JWT to access.

2. **Custom API Errors**:
   - Custom error classes for handling different types of errors (e.g.,
     BadRequestError, UnauthenticatedError).
   - Centralized error handling middleware to manage and format error
     responses.

## Project Structure

- **Controllers**:

  - `main.js`: Contains the logic for user login and accessing the dashboard.

- **Database Connector**:

  - `connector.js`: Manages the connection to the MongoDB database.

- **Error Handling**:

  - `custom-error.js`: Base class for custom API errors.
  - `bad-request.js`: Custom error class for handling bad requests.
  - `unauthenticated.js`: Custom error class for handling unauthenticated
    access.
  - `index.js`: Exports all custom error classes.

- **Middlewares**:

  - `auth.js`: Middleware to protect routes by verifying JWTs.
  - `error-handler.js`: Middleware to handle errors and send appropriate
    responses.
  - `route-not-found.js`: Middleware to handle 404 errors for undefined routes.

- **Routes**:
  - `main.js`: Defines the routes for login and accessing the dashboard.

## Usage

- **Login**:

  - Endpoint: `/api/v1/login`
  - Method: `POST`
  - Body: `{ "username": "your_username", "password": "your_password" }`
  - Response: `{ "message": "user created", "token": "your_jwt_token" }`

- **Dashboard**:
  - Endpoint: `/api/v1/dashboard`
  - Method: `GET`
  - Headers: `Authorization: Bearer your_jwt_token`
  - Response: `{ "message": "Hello, Username", "secret": "Your lucky number is X" }`

This project serves as a basic example to help you understand how to integrate
JWT authentication and custom error handling in your own applications.
