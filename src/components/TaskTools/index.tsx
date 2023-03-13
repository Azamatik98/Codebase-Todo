import React from "react";
import Modal from "../Modal/Modal";
import CreateTaskBoard from "../CreateTaskBoard";
import "./TaskTools.scss";

interface TaskToolsProps {}

const TaskTools: React.FC<TaskToolsProps> = () => {
  const [open, setOpen] = React.useState<boolean>(false);

  return (
    <>
      <div className="tools">
        <button onClick={() => setOpen(true)}>Create Task</button>
        <input type="text" placeholder="Поиск..." />
      </div>
      <Modal setOpen={setOpen} isOpen={open}>
        <CreateTaskBoard />
      </Modal>
    </>
  );
};

export default TaskTools;
