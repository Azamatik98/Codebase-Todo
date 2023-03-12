import React from "react";
import "./Task.scss";
import Boards from "../../components/Boards";

interface TaskProps {}

const Task: React.FC<TaskProps> = () => {
  return (
    <>
      <Boards />
    </>
  );
};

export default Task;
