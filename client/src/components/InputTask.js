import React, { useState } from "react";

const AddTask = () => {
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");

  const addNewTask = async (e) => {
    e.preventDefault();
    console.log(e.target.data);
    try {
      const body = { description, category };
      const response = await fetch("http://localhost:5000/createTask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      console.log(response);
      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <React.Fragment>
      <h1 className="text-center mt-5">Task Management System</h1>
      <form className="d-flex mt-5" onSubmit={addNewTask}>
        <input
          type="text"
          className="form-control"
          placeholder="Task Description"
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="text"
          className="form-control"
          placeholder="Category"
          onChange={(e) => setCategory(e.target.value)}
        />
        <button className="btn btn-success">Add</button>
      </form>
    </React.Fragment>
  );
};

export default AddTask;
