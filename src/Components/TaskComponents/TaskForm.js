import React, { useState } from "react";

import "../../styles/task-form.css";

const TaskForm = ({ onNewTask }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onNewTask(input);
    setInput("");
  };

  return (
    <form data-cy="task-form" onSubmit={handleSubmit}>
      <input
        data-cy="task-input"
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add new task..."
      />
      <button data-cy="add-task-btn" type="submit">
        Add Task
      </button>
    </form>
  );
};

export default TaskForm;
