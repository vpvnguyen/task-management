-- drop database if exists, create database
DROP DATABASE task_management_system;

CREATE DATABASE task_management_system;

-- create a table called tasks
CREATE TABLE tasks(
    id SERIAL PRIMARY KEY,
    category VARCHAR(255) NOT NULL,
    description VARCHAR(255) NOT NULL
);

-- insert mock data and display
INSERT INTO tasks(category, description) 
VALUES
('Backlog', 'New item 1'),
('New', 'New item 2'),
('InProgress', 'New item 3'),
('Complete', 'New item 4');

SELECT * FROM tasks;


