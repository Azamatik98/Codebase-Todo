import React from "react";

import TaskItem from "../TaskItem";
import "./Board.scss";

interface BoardProps {
  title: string;
}

const Board: React.FC<BoardProps> = ({ title }) => {
  return (
    <div className="board">
      <div className="board_title">{title}</div>
      <TaskItem />
    </div>
  );
};

export default Board;
