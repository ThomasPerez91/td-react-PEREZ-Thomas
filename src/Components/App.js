import "../styles/app.css";

import React, { useState, useEffect } from "react";
import TaskItem from "./TaskComponents/TaskItem";

function App() {
  const textTask = "New Task";
  const newTask = { id: Date.now(), textTask, done: false };

  const toggleTask = () => {};

  return (
    <div className="App">
      <TaskItem data-cy="task-Items" task={newTask} toggleTask={toggleTask} />
    </div>
  );
}

export default App;
