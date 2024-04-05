import "../styles/app.css";

import React, { useState, useEffect } from "react";

import TaskList from "./TaskComponents/TaskList";
import TaskForm from "./TaskComponents/TaskForm";
import TaskFilter from "./TaskComponents/TaskFilter";

function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleNewTask = (textTask) => {
    if (!textTask.trim()) return;
    const newTask = { id: Date.now(), textTask, done: false };
    setTasks([...tasks, newTask]);
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    );
  };

  const getFilteredTasks = () => {
    switch (filter) {
      case "done":
        return tasks.filter((task) => task.done);
      case "active":
        return tasks.filter((task) => !task.done);
      default:
        return tasks;
    }
  };

  return (
    <div className="App">
      <h1>Task List</h1>
      <TaskForm onNewTask={handleNewTask} />
      <div>
        <div className="btn-group">
          <TaskFilter
            label="Toutes"
            setFilter={setFilter}
            filter="all"
            dataCy="filter-btn-all"
          />
          <TaskFilter
            label="Non complétées"
            setFilter={setFilter}
            filter="active"
            dataCy="filter-btn-undone"
          />
          <TaskFilter
            label="Complétées"
            setFilter={setFilter}
            filter="done"
            dataCy="filter-btn-done"
          />
        </div>
      </div>
      <TaskList
        data-cy="task-list"
        tasks={getFilteredTasks()}
        toggleTask={toggleTask}
      />
    </div>
  );
}

export default App;
