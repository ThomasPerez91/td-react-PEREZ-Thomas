import React from "react";
import TaskItem from "./TaskItem";

import "../../styles/task-list.css";

const TaskList = ({ tasks, toggleTask }) => {
  return (
    <ul data-cy="task-list">
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} toggleTask={toggleTask} />
      ))}
    </ul>
  );
};

export default TaskList;
