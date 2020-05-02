import React from "react";
import "./App.css";

import ListTasks from "./components/ListTasks";

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <ListTasks />
      </div>
    </React.Fragment>
  );
}

export default App;
