const express = require("express");
const app = express();
const cors = require("cors");
const tasksController = require("./controller/tasks.controller");

const pool = require("./config/database");

const PORT = 5000;

// middleware
app.use(cors());
app.use(express.json()); // parses json from incoming requests

// routes
app.get("/", (req, res) => {
  res.json({ message: "Welcome to the Task Management Server!" });
});

app.use(tasksController);

app.listen(PORT, () => console.log(`Server is running on PORT: ${PORT}`));
