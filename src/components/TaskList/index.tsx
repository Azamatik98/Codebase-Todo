import React from "react";
import "./TaskList.scss";
import TaskListItem from "./TaskListItem";

interface TaskListProps {}

const tasks = ["BMW", "Tesla", "Porshe"];
const TaskList: React.FC<TaskListProps> = () => {
  return (
    <div className="wrapper">
      {tasks.map((title, i) => (
        <TaskListItem key={i + title} title={title} />
      ))}
    </div>
  );
};

export default TaskList;
