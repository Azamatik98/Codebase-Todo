import React from "react";
import "./TaskItem.scss";

interface TaskItemProps {}

const TaskItem: React.FC<TaskItemProps> = () => {
  return <div className="item">Lorem ipsum, dolor sit.</div>;
};

export default TaskItem;
