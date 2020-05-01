// using PostgresSQL as an object relational database
// create and define db instance

const Pool = require("pg").Pool;
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  port: 5432,
  database: "task-management-system",
});

module.exports = pool;
