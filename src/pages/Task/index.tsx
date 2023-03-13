import React from "react";
import "./Task.scss";
import Boards from "../../components/Boards";
import { useLocation, useNavigate } from "react-router-dom";
import { TaskActionTypes, TypeTask } from "../../types/task";
import TaskTools from "../../components/TaskTools";
import { useAppDispatch } from "../../hook";

interface TaskProps {}

const Task: React.FC<TaskProps> = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const id = useLocation().pathname.slice(1);

  React.useEffect(() => {
    const task = JSON.parse(localStorage.getItem("tasks") || "null").find(
      (task: TypeTask) => task.id === id
    );
    if (!task) {
      navigate("/");
    }
    dispatch({ type: TaskActionTypes.SET_TASK, payload: task });
  });

  return (
    <div className="task">
      <TaskTools />
      <Boards />
    </div>
  );
};

export default Task;
