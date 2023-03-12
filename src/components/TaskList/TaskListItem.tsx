import React from "react";
import { Link } from "react-router-dom";
import GlobalSvgSelector from "../../assets/icons/GlobalSvgSelector";
import "./TaskList.scss";

interface TaskListItemProps {
  id: string;
  title: string;
}

const TaskListItem: React.FC<TaskListItemProps> = ({ id, title }) => {
  return (
    <div className="task">
      <Link to={"/" + id} className="task_title">
        {title}
      </Link>
      <button className="task_delete">
        <GlobalSvgSelector id="x" />
      </button>
    </div>
  );
};

export default TaskListItem;
