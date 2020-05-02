import React, { useState } from "react";

const EditTask = ({ task }) => {
  const [description, setDescription] = useState(task.description);
  const [category, setCategory] = useState(task.category);

  // edit description
  const editTaskForm = async (e) => {
    e.preventDefault();

    try {
      const body = { description, category };
      const response = await fetch(
        `http://localhost:5000/editTask/${task.id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        }
      );
      console.log(response);
      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };
  return (
    <React.Fragment>
      <button
        type="button"
        className="btn btn-outline-warning"
        data-toggle="modal"
        data-target={`#id-${task.id}`} // modal will target by id; fixes getting same first id
      >
        Edit
      </button>

      {/* id = id-task.id */}
      <div
        className="modal"
        id={`id-${task.id}`}
        onClick={() => setDescription(task.description)}
      >
        {/* resets back to original desc when user clicks outside of the modal */}
        {/* fix modal getting first id / desc */}
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Edit Task</h4>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                onClick={() => setDescription(task.description)}
              >
                {/* onClick will set it back to its original description */}
              </button>
            </div>

            <div className="modal-body">
              {/* modal body */}
              <div className="mb-3">
                <label for="description">Task Description</label>
                <input
                  id="description"
                  type="text"
                  className="form-control"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
              <div>
                <label for="category">Category</label>
                <input
                  id="Category"
                  type="text"
                  className="form-control"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                />
              </div>
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-warning"
                data-dismiss="modal"
                onClick={(e) => editTaskForm(e)}
              >
                Edit
              </button>
              <button
                type="button"
                className="btn btn-outline-danger"
                data-dismiss="modal"
                onClick={() => setDescription(task.description)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default EditTask;
