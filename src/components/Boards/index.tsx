import React from "react";
import Board from "./Board";
import "./Board.scss";

interface BoardsProps {}

const boards = ["Queue", "Development", "Done"];

const Boards: React.FC<BoardsProps> = () => {
  return (
    <div className="boards">
      {boards.map((board, i) => (
        <Board key={i} title={board} />
      ))}
    </div>
  );
};

export default Boards;
