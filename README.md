# Task Management System

A simple program which manages a user's tasks.
Users are able to:

- See all tasks
- Create a task
- Edit a task
- Delete a task
- Filter tasks
- Search for a task

## Technologies

- React
- Node / Express
- PostgreSQL
- Bootstrap
- npm nodemon
- npm pg
- npm concurrently
- npm cors

### Why this stack?

- JavaScript serves as a ubiquitous language from front to back end development capable of handling high volumes of concurrent requests and events.
- React is a robust client side technology that allows flexibility in developing and scaling the front end from it's large support within strong communities, libraries, and tools.
- Fast and highly scalable server built upon Node.js which serves as a runtime environment - allowing JavaScript to run outside of the browser.
- PostgreSQL is an object relational database that leverages the power of relational SQL queries as well as flexible document storage using JSONB.

## Stack Flow

Implementation of how the entire full stack application should flow - connecting the front end, back end, and SQL database of the program.

![Stack Flow](/documentation/Stack_Flow.png)

## Application Flow

How the application should flow from the user's experience to business logic.

![Application Flow](/documentation/Application_Flow.png)

## Application Progression

The application is currently under development. Current application progression and features:

- See all tasks
- Create a task
- Edit a task
- Delete a task
- ~Filter tasks~
- ~Search for a task~
- ~Data Validation~
- ~Define data model to handle DB actions~
- ~Ensure full responsive design~

## Requirements and Setup

Below are requirements and how to setup to run this application locally.

### Requirements

- Node.js
- NPM
- PostgreSQL
  > Source: https://postgresapp.com/
  > Follow and install PostgreSQL according to the source instructions for Mac users. Here, we will be using PostgreSQL as an object relational database for this application.
  > Ensure that PostgreSQL is running locally. The application will be using Postgres default account.
- Use queries in `./config/database.sql` to seed database with mock data.

### Setup

- git clone `https://github.com/vpvnguyen/task-management.git`
- cd into `task-management`
- Install server dependencies by running in terminal: `npm install`
- Install React client dependencies by running in terminal: `npm run client-install`
  > These two commands should install all packages and dependencies for both the server and client.
- To start development server locally, run in terminal: `npm start`
  > React and Express client and server should both start when executing `npm start`.
- Navigate to `http://localhost:3000` for client server
- Navigate to `http://localhost:5000` for express api server
