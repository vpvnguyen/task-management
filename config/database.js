// using PostgresSQL as an object relational database
// create and define db instance

const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  port: 5432,
  database: "task_management_system",
});

module.exports = pool;
