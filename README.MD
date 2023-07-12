# Rubiks App

Rubiks App is a web application inspired by a user control dashboard.

## Features

- **Back-End**: The back-end of the application is built with NestJS and deployed on DigitalOcean. You can interact with the back-end services at the following URL: [https://octopus-app-ugekr.ondigitalocean.app/api](https://octopus-app-ugekr.ondigitalocean.app/api)

  - To access the services, you need to log in to the auth module and then copy and paste the general authorization token or use a specific token for each service.

    ```
    Login credentials
    User: rylee.moore40@yahoo.com
    Password: 8hrvuD*AaYmIFIan
    ```

  - Back-End Repository: [https://github.com/xklbr/rubiks-api](https://github.com/xklbr/rubiks-api)
  - The database is built with PostgreSQL and managed through TypeORM in NestJS. It is deployed on a separate server called render.com.

- **Front-End**: The front-end of the application is developed in ReactJS, and the state management is handled through Redux Sagas. You can interact with the application at the following URL using the same credentials mentioned above: [https://rubiks-app.vercel.app/](https://rubiks-app.vercel.app/)
  - Front-End Repository: [https://github.com/xklbr/rubiks-app](https://github.com/xklbr/rubiks-app)

## Local Setup

To run the application in your local environment, follow these steps:

1. Clone the back-end repository:

```bash
git clone https://github.com/xklbr/rubiks-api.git


Install the back-end dependencies:

cd rubiks-api
yarn install

Set up the PostgreSQL database and update the connection configuration in the .env file.

Start the back-end server:
yarn start:dev
```

Clone the front-end repository:

```
git clone https://github.com/xklbr/rubiks-app.git

Install the front-end dependencies:

cd rubiks-app
yarn install


Update the API configuration in the .env file.

Start the front-end application:
yarn start
```
