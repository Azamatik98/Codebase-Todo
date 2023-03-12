import React from "react";
import { v4 as uuidv4 } from "uuid";
import { TypeTask } from "../../types/task";
import GlobalSvgSelector from "../../assets/icons/GlobalSvgSelector";

import "./TaskList.scss";

interface TaskCreateProps {
  addTask: (item: TypeTask) => void;
}

const TaskCreate: React.FC<TaskCreateProps> = ({ addTask }) => {
  const [value, setValue] = React.useState("");
  const [open, setOpen] = React.useState<boolean>(false);
  const createRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleClickOutside = (e: any) => {
      if (!e.path.includes(createRef.current)) {
        setOpen(false);
      }
    };
    document.body.addEventListener("click", handleClickOutside);
    return () => document.body.removeEventListener("click", handleClickOutside);
  }, []);

  const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const onSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (value.length === 0 || !value.trim()) {
      alert("Enter task name");
      return;
    }

    const item = { id: uuidv4(), title: value };
    addTask(item);
    setValue("");
    setOpen(false);
  };

  return (
    <div ref={createRef} className="task_create">
      {open ? (
        <form onSubmit={onSubmit}>
          <input type="text" value={value} onChange={onChangeValue} autoFocus />
          <button>
            <GlobalSvgSelector id="check" />
          </button>
        </form>
      ) : (
        <button className="button" onClick={() => setOpen(true)}>
          Добавить задачу
        </button>
      )}
    </div>
  );
};

export default TaskCreate;
