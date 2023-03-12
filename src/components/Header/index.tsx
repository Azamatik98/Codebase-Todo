import React from "react";
import "./Header.scss";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <div className="header">
      <div className="header_title">{`Task List`}</div>
    </div>
  );
};

export default Header;
