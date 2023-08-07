# Instagram Clone Backend

Welcome to the Instagram Clone Backend repository! This project focuses on implementing backend functionality for an Instagram-like application. It includes features for user signup and login, using technologies like bcrypt for password hashing and JWT for authentication.

## Features

The backend project consists of the following features:

### Signup

- In the Signup feature, user data is validated, and the password is securely hashed using bcrypt before storing it in the database. Upon successful signup, a JWT token is generated and sent back to the client, which is stored in a cookie for subsequent authentication.

### Login

- The Login feature involves comparing the provided password with the hashed password stored in the database. If the user is valid, they are authenticated and granted access to the application.

## Project Setup

Follow these steps to set up and run the project locally:

1. Clone the repository to your local machine using Git:

```bash
git clone <repository_url>
```

2. Install all the required dependencies for the backend by running the following command inside the project directory:

```bash
npm install
```

3. To run the frontend part of the Instagram Clone, you can use a live server extension that supports HTML files. Ensure that you have a live server extension installed in your preferred code editor and open the frontend files using it.

4. To start the backend server, use the following command:

```bash
nodemon
```

The backend server will be up and running, allowing you to test the signup and login functionality using the frontend part.

## Contributing

Feel free to contribute to this project by submitting bug reports, feature requests, or pull requests. Your contributions are valuable and highly appreciated.

If you have any questions or need further assistance, don't hesitate to contact me.

Happy coding! 🚀
