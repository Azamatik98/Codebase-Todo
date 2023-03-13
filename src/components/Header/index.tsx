import React from "react";
import style from "./Header.module.scss";
import { Link, useLocation } from "react-router-dom";
import { useAppSelector } from "../../hook";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  let { title } = useAppSelector((state) => state.project.project);

  if (useLocation().pathname === "/") {
    title = `ToDo Tasks`;
  }
  document.title = title;

  return (
    <div className={style.header}>
      <Link to="/" className={style.header_title}>
        {title}
      </Link>
    </div>
  );
};

export default Header;
