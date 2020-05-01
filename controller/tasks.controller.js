const express = require("express");
const router = express.Router();

const tasksModel = require("../model/tasks.model");

router.get("/getAllTasks", (req, res) => {
  res.json("getAllTasks");
});

module.exports = router;
