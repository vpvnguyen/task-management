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
  > Follow and install postgresql according to the source instructions. Here, we will be using PostgreSQL as an object relational database for this application.
  > Ensure that PostgreSQL is running locally. The application will be using Postgres default account.

### Setup

- git clone `https://github.com/vpvnguyen/task-management.git`
- cd into `task-management`
- run in terminal: `npm install`
- run in terminal: `npm start`
  > This should install all packages and dependencies. With npm concurrently setup within the `package.json`, the React and Express client should start simaltaneously when executing `npm start`.

## Technologies

- React
- Node / Express
- PostgreSQL
- Bootstrap
- npm nodemon
- npm pg
- npm concurrently
- npm cors
