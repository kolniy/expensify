# Expensify App

This project mimics an expenses tracker utility app, that helps to keep track of user expenses.

## Project dependencies and framework

This project uses the following libraries/dependencies:

### `Reactstrap`

Reactstrap is a compoent library for reactjs.
Its provides inbuilt Bootstrap components that make easy to create UI, used to add basic styling to the expensify app.

### `graphql apollo client`

Used to fetch Data using from our mock graphql server using graphql on the client side

### `json graphql server`

Used to create a Mock graphql server. with dataset from ./src/db.js
The schema used is define this way:
{
id,
name,
description,
status,
createdAt,
cost
}

## starting the APP in localhost

You can run the App in the following simple steps

1. Using Terminal CD into the project directory after downloading or cloning from github.

2. Run "npm install" to download all the dependencies and libraries.

3. Run "npm run start-server" to start the mock server on localhost:5000 using the /src/db.js as the dataset.

4. Run "npm start" to start the client server and open the app localhost:3000.

## How it Looks

![alt text](https://res.cloudinary.com/thawebguy/image/upload/v1657659318/expensify_ff38zt.gif)

### How to use

Upon mounting the App displays the filter component and the list of queried expenses.
Where the user can, filter expenses either by typing the name, description or status of the expenses in the search box Or by using the status dropdown and price range select dropdown to filter expenses that match status or the price range
