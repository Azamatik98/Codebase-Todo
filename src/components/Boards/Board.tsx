import React from "react";
import "./Board.scss";

interface BoardProps {
  title: string;
}

const Board: React.FC<BoardProps> = ({ title }) => {
  return (
    <div className="board">
      <div className="board_title">{title}</div>
    </div>
  );
};

export default Board;
