const express = require("express");
const app = express();
const tasksController = "./controller/tasks.controller";
const PORT = 5000;

// middleware
app.use(express.json()); // parse json from incoming requests

// routes
app.get("/", (req, res) => {
  res.json({ message: "Welcome to the Task Management Server!" });
});

// controllers
app.use(tasksController);

app.app.listen(PORT, () => console.log(`Server is running on PORT: ${PORT}`));
