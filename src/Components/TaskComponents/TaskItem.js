import React from "react";
import "../../styles/task-item.css";
const TaskItem = ({ task, toggleTask }) => {
  const handleComplete = () => {
    toggleTask(task.id);
  };

  return (
    <li
      data-cy="task-item"
      className={task.done ? "completed" : ""}
      style={{ textDecoration: task.done ? "line-through" : "none" }}
      onClick={handleComplete}
    >
      {task.text}
    </li>
  );
};

export default TaskItem;
