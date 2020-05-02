-- drop database if exists, create database
DROP DATABASE task_management_system;

CREATE DATABASE task_management_system;

-- create a table called tasks
CREATE TABLE tasks(
    id SERIAL PRIMARY KEY,
    description VARCHAR(255) NOT NULL,
    category VARCHAR(255) NOT NULL
);

-- insert mock data and display
INSERT INTO tasks(description, category) 
VALUES
('Create technical documentation', 'Documentation'),
('Create GitHub Repo', 'Code'),
('Build a simple app', 'Code');

SELECT * FROM tasks;


