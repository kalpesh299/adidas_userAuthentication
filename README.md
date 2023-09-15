# adidas_userAuthentication

* Created this project to learn the Authentication concept using API project work as an e-commerce website login portal where we can log in, register, forget password, and reset password.

# Features
# 1. User Registration
  - Collects user information (name, email, and password).
  - Sends the information to the server for registration.
  - Redirects to the main portal page upon successful registration.
# 2.User Login
  - Requires user email, password, and role (optional).
  - Authenticates user credentials with the server.
  - Stores a token in local storage upon successful login.
  - Redirect to the home page.
# 3.Password Reset
  - Allows users to request a password reset.
  - Sends an OTP (One Time Password) to the user's registered email.
  - Redirect to the reset password page.
  - Users enter OTP and set a new password.
  - Redirect to the home page after a successful password reset.
# 4. Logout
  - Allows users to log out we redirects to the main page.

# API Endpoints
  - User Registration: POST https://geek-store.onrender.com/user/register
  - User Login: POST https://geek-store.onrender.com/user/login
  - Forgot Password: POST https://geek-store.onrender.com/user/forgot-password
  - Reset Password: POST https://geek-store.onrender.com/user/reset-password

# GitHub Hosted Link
  - https://kalpesh299.github.io/adidas_userAuthentication/HomePage.html
# Event Handling and Asynchronous Programming

This repository contains code that demonstrates the following key functionalities in a web application:

## Event Handling

The application listens for user interactions, such as button clicks and form submissions, using the `addEventListener()` method. This ensures that user actions trigger the appropriate functions.

## Asynchronous Programming

Asynchronous operations, particularly API calls, are handled gracefully using `async` and `await`. This ensures that the application remains responsive and provides a smooth user experience even during potentially time-consuming tasks.

## HTTP Requests

The application communicates with a server using the Fetch API to send HTTP POST requests for user registration, login, and password reset. This allows users to interact securely with the server.

## JSON Handling

JavaScript objects are serialized into JSON format using `JSON.stringify()` before being sent in the request body. Similarly, JSON responses from the server are parsed using `JSON.parse()`. This ensures data integrity during communication with the server.

## Local Storage

To manage user authentication, the application stores the authentication token retrieved from the server using `localStorage.setItem()`. It also removes the token when the user logs out, ensuring a secure and persistent authentication mechanism.

## Conditional Statements

Conditional statements, such as `if` statements, are employed to selectively execute code based on the results of API calls. This allows the application to display appropriate success or error messages to the user.

## Page Redirection

The application uses `window.location` to redirect users to different pages within the application upon successful operations. This enhances user navigation and provides a seamless user experience.


# Screenshots.
- Home Page
  ![image](https://github.com/kalpesh299/adidas_userAuthentication/assets/72344646/3df60109-e8e1-4a8a-9aab-7d1f81d649ba)
- SignUp Page
  ![image](https://github.com/kalpesh299/adidas_userAuthentication/assets/72344646/f7949b88-0692-464f-b47a-c6807e376572)
- Login Page
  ![image](https://github.com/kalpesh299/adidas_userAuthentication/assets/72344646/d0b7fa3b-2bde-4616-9e11-49d65869474c)
- Forgot Password Page
  ![image](https://github.com/kalpesh299/adidas_userAuthentication/assets/72344646/56af49d9-37fc-4681-84b2-88734fcd24e0)




