import React from "react";
import style from "./Header.module.scss";
import { useAppSelector } from "../../hook";
import { Link, useLocation } from "react-router-dom";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  let { title } = useAppSelector((state) => state.project.project);
  if (useLocation().pathname === "/") {
    title = `Task Todo's`;
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
