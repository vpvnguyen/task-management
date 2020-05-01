const express = require("express");
const router = express.Router();

// get all tasks
router.get("/getAllTasks", (req, res) => {
  console.log("getAllTasks");
  res.send(200);
});

// create a task
router.post("/createTask", (req, res) => {
  console.log("createTask");
  res.send(200);
});

// edit a task by ID
router.put("/editTask/:id", (req, res) => {
  console.log("editTask");
  console.log(req.params.id);
  res.send(200);
});

// delete a task by ID
router.delete("/deleteTask/:id", (req, res) => {
  console.log("deleteTask");
  console.log(req.params.id);
  res.send(200);
});

module.exports = router;
