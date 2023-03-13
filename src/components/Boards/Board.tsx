import React from "react";
import { Droppable } from "react-beautiful-dnd";

import { useAppDispatch } from "../../hook";
import { ProjectActionTypes, TTask } from "../../types/project";
import TaskItem from "../TaskItem";
import style from "./Board.module.scss";

interface BoardProps {
  id: "queue" | "development" | "done";
  title: string;
  tasks: TTask[];
}

const Board: React.FC<BoardProps> = ({ id, title, tasks }) => {
  const dispatch = useAppDispatch();
  const deleteTask = (taskId: string, taskTitle: string) => {
    if (window.confirm(`Delete task ${taskTitle}`)) {
      dispatch({ type: ProjectActionTypes.DELETE_TASK, payload: taskId });
    }
  };

  return (
    <div className={style.board}>
      <div className={style.board_content}>
        <div className={style.board_title}>{title}</div>
        <Droppable droppableId={id}>
          {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              {tasks.map((task, i) => (
                <TaskItem
                  key={task.id}
                  index={i}
                  task={task}
                  deleteTask={deleteTask}
                />
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </div>
    </div>
  );
};

export default Board;
