import React from "react";
import "./Main.scss";
import TaskList from "../../components/TaskList";

interface MainProps {}

const Main: React.FC<MainProps> = () => {
  return (
    <div className="main">
      <TaskList />
    </div>
  );
};

export default Main;
