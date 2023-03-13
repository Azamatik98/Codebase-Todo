import React from "react";
import { Draggable } from "react-beautiful-dnd";
import { Link } from "react-router-dom";
import GlobalSvgSelector from "../../assets/icons/GlobalSvgSelector";
import style from "./TaskList.module.scss";

interface ProjectListItemProps {
  id: string;
  title: string;
  deleteProject: (id: string) => void;
  index: number;
}

const ProjectListItem: React.FC<ProjectListItemProps> = ({
  id,
  title,
  deleteProject,
  index,
}) => {
  return (
    <Draggable draggableId={id} index={index}>
      {(provided) => (
        <div
          className={style.project}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <Link to={"/" + id} className={style.project_title}>
            {title}
          </Link>
          <button
            onClick={() => deleteProject(id)}
            className={style.project_delete}
          >
            <GlobalSvgSelector id="x" />
          </button>
        </div>
      )}
    </Draggable>
  );
};

export default ProjectListItem;
