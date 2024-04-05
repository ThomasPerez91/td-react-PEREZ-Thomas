import React from "react";
import "../../styles/task-item.css";
const TaskItem = ({ task, toggleTask }) => {
  const handle = () => {
    toggleTask(task.id);
  };

  return (
    <li
      data-cy="task-item"
      className="completed"
      style={{ textDecoration: "line-through" }}
      onClick={handle}
    >
      {task.textTask}
    </li>
  );
};

export default TaskItem;
