import React from "react";
import "./App.css";
import ListTasks from "./components/ListTasks";
import InputTask from "./components/InputTask";

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <InputTask />
        <ListTasks />
      </div>
    </React.Fragment>
  );
}

export default App;
