# Task Management System

A simple program which manages a user's tasks.
Users are able to:

- See all tasks
- Create a task
- Edit a task
- Delete a task
- Filter tasks
- Search for a task

## Stack Flow

Implementation of how the entire full stack application should flow - connecting the front end, back end, and SQL database of the program.

![Stack Flow](/documentation/Stack_Flow.png)

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

- Great question. The following should provide insight regarding why this stack is used.

#### Client - React

- React is a very fast and robust client application that allows flexibility in developing and scaling the front end.
- Large support with strong communities, libraries, and tools.

#### Server - Node / Express

- Fast and highly scalable server built upon Node.js which is a runtime environment for JavaScript. Serves as a ubiquitous language from front to back end development.

#### Database - Postgres

- Reliable and robust SQL database that also supports document storage using JSONB.
- Developers can leverage the power of SQL queries as well as flexible document storage.

## Application Flow

How the application should flow from the user's experience to business logic.

![Application Flow](/documentation/Application_Flow.png)

## Application Status

The application is currently under development. Current application progression and features:

- See all tasks
- Create a task
- Edit a task
- Delete a task
- ~Filter tasks~
- ~Search for a task~
- ~Data Validation~

## Requirements and Setup

Below are requirements and how to setup to run this application locally.

### Requirements

- Node.js
- NPM
- PostgreSQL
  > Source: https://postgresapp.com/
  > Follow and install PostgreSQL according to the source instructions for Mac users. Here, we will be using PostgreSQL as an object relational database for this application.
  > Ensure that PostgreSQL is running locally. The application will be using Postgres default account.

### Setup

- git clone `https://github.com/vpvnguyen/task-management.git`
- cd into `task-management`
- Install server by running in terminal: `npm install`
- Install React client by running in terminal: `npm run client-install`
  > These two commands should install all packages and dependencies for both server and client.
- To start development server locally, run in terminal: `npm start`
  > React and Express client should start simaltaneously when executing `npm start`.
- Navigate to `http://localhost:3000` for client
- Navigate to `http://localhost:5000` for express api server
