import React from "react";
import style from "./Main.module.scss";
import ProjectList from "../../components/ProjectList";

interface MainProps {}

const Main: React.FC<MainProps> = () => {
  return (
    <div className={style.main}>
      <ProjectList />
    </div>
  );
};

export default Main;
