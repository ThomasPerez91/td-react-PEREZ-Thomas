import "../styles/app.css";

import React, { useState, useEffect } from "react";
import TaskList from "./TaskComponents/TaskList";

function App() {
  const textTask = "New Task";
  const newTask = [{ id: Date.now(), textTask, done: false }];

  const toggleTask = () => {};

  return (
    <div className="App">
      <TaskList data-cy="task-list" tasks={newTask} toggleTask={toggleTask} />
    </div>
  );
}

export default App;
