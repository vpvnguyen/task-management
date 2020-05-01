// define all actions for tasks

const tasksModel = {
  getAllTasks: () => {
    return console.log("get all tasks");
  },
  createTask: () => {
    return console.log("task has been created");
  },
  editTaskByID: () => {
    return console.log("edit a task by id");
  },
  deleteTaskByID: () => {
    return console.log("delete task by id");
  },
};

module.exports = tasksModel;
