const express = require("express");
const router = express.Router();
const pool = require("../config/database");

// get all tasks
router.get("/getAllTasks", async (req, res) => {
  try {
    const allTasks = await pool.query("SELECT * FROM tasks");
    res.json(allTasks.rows);
  } catch (err) {
    console.error(err.message);
    res.sendStatus(500);
  }
});

// create a task
router.post("/createTask", async (req, res) => {
  try {
    console.log(req.body);
    const { description, category } = req.body;
    const newTask = await pool.query(
      "INSERT INTO tasks (description, category) VALUES($1, $2) RETURNING *",
      [description, category]
    );
    res.json(newTask.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.sendStatus(500);
  }
});

// edit a task by ID
router.put("/editTask/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { description } = req.body;
    const editTask = await pool.query(
      "UPDATE tasks SET description = $1 WHERE id = $2",
      [description, id]
    );
    res.json("Task was updated");
  } catch (err) {
    console.error(err.message);
    res.sendStatus(500);
  }
});

// delete a task by ID
router.delete("/deleteTask/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteTask = await pool.query("DELETE FROM tasks WHERE id = $1", [
      id,
    ]);
    res.json(`tasks id: ${id} has been deleted!`);
  } catch (err) {
    console.error(err.message);
    res.sendSTatus(500);
  }
});

module.exports = router;
