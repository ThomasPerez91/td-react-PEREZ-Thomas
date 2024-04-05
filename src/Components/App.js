import "../styles/app.css";

import React, { useState, useEffect } from "react";
import TaskList from "./TaskComponents/TaskList";
import TaskForm from "./TaskComponents/TaskForm";

function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleNewTask = (textTask) => {
    if (!textTask.trim()) return;
    const newTask = { id: Date.now(), textTask, done: false };
    setTasks([...tasks, newTask]);
  };

  const toggleTask = () => {};

  return (
    <div className="App">
      <h1>Task List</h1>
      <TaskForm onNewTask={handleNewTask} />

      <TaskList data-cy="task-list" tasks={tasks} toggleTask={toggleTask} />
    </div>
  );
}

export default App;
