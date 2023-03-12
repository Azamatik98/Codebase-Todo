import React from "react";
import "./Task.scss";
import Boards from "../../components/Boards";
import { useLocation, useNavigate } from "react-router-dom";
import { TypeTask } from "../../types/task";

interface TaskProps {}

const Task: React.FC<TaskProps> = () => {
  const navigate = useNavigate();
  const id = useLocation().pathname.slice(1);

  React.useEffect(() => {
    const task = JSON.parse(localStorage.getItem("tasks") || "null").find(
      (task: TypeTask) => task.id === id
    );
    if (!task) {
      navigate("/");
    }
    //
  });

  return (
    <>
      <Boards />
    </>
  );
};

export default Task;
