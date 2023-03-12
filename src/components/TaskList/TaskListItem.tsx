import React from "react";
import "./TaskList.scss";

interface TaskListItemProps {
  id: string;
  title: string;
}

const TaskListItem: React.FC<TaskListItemProps> = ({ id, title }) => {
  return (
    <div className="task">
      <div className="task_title">{title}</div>
      <button className="task_delete">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16">
          <rect width="100%" height="100%" fill="none" />
          <g className="currentLayer">
            <path
              fill="none"
              stroke="#000"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1.164 4.506 4.55 1.083 8.144 4.72l3.595-3.637 3.384 3.423-3.595 3.638 3.595 3.637-3.384 3.424-3.595-3.637-3.595 3.637-3.385-3.424L4.76 8.144 1.164 4.506z"
              color="#000"
            />
          </g>
        </svg>
      </button>
    </div>
  );
};

export default TaskListItem;
