import React from "react";
import style from "./TaskItem.module.scss";
import { TTask } from "../../types/project";
import { Draggable } from "react-beautiful-dnd";
import Modal from "../Modal/Modal";
import EditTask from "../EditTask";
import GlobalSvgSelector from "../../assets/icons/GlobalSvgSelector";

interface TaskItemProps {
  index: number;
  task: TTask;
  deleteTask: (taskId: string, taskTitle: string) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, index, deleteTask }) => {
  const [isOpen, setOpen] = React.useState<boolean>(false);
  return (
    <>
      <Draggable draggableId={task.id} index={index}>
        {(provided) => (
          <div
            className={`${style.item} ${
              task.priority === "high"
                ? style.high
                : task.priority === "medium" && style.medium
            }`}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
          >
            <div className={style.item_title} onClick={() => setOpen(true)}>
              {task.title}
            </div>
            <button
              className={style.item_delete}
              onClick={() => deleteTask(task.id, task.title)}
            >
              <GlobalSvgSelector id="x" />
            </button>
          </div>
        )}
      </Draggable>
      {isOpen && (
        <Modal setOpen={setOpen} isOpen={isOpen}>
          <EditTask task={task} />
        </Modal>
      )}
    </>
  );
};

export default TaskItem;
