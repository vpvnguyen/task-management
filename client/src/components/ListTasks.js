import React, { useState, useEffect } from "react";

const ListTasks = () => {
  const [tasks, setTasks] = useState([]);

  const getTasks = async () => {
    try {
      const response = await fetch("http://localhost:5000/getAllTasks");
      const getAllTasks = await response.json();
      setTasks(getAllTasks);
      console.log(getAllTasks);
    } catch (err) {
      console.error(err.message);
    }
  };

  //   delete todo
  const deleteTaskByID = async (id) => {
    try {
      const deleteTaskByID = await fetch(
        `http://localhost:5000/deleteTask/${id}`,
        {
          method: "DELETE",
        }
      );
      console.log(deleteTaskByID);
      setTasks(tasks.filter((task) => task.id !== id));
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <React.Fragment>
      <table className="table mt-5 text-center">
        <thead>
          <tr>
            <th>Description</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, index) => (
            <tr key={index}>
              <td>{task.description}</td>
              <td>{task.category}</td>
              <td>
                <button>edit</button>
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteTaskByID(task.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </React.Fragment>
  );
};

export default ListTasks;
