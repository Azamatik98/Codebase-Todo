import React from "react";
import "./Header.scss";
import { Link, useLocation } from "react-router-dom";
import { useAppSelector } from "../../hook";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  // let { title } = useAppSelector((state) => state.task.task);

  // if (useLocation().pathname === "/") {
  //   title = `ToDoTasks`;
  // }
  // document.title = title;

  return (
    <div className="header">
      <Link to="/" className="header_title">{`Task List`}</Link>
    </div>
  );
};

export default Header;
