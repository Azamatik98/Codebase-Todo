import React from "react";
import { v4 as uuidv4 } from "uuid";
import { TProject } from "../../types/project";
import GlobalSvgSelector from "../../assets/icons/GlobalSvgSelector";

import style from "./TaskList.module.scss";

interface ProjectCreateProps {
  addProject: (item: TProject) => void;
}

const ProjectCreate: React.FC<ProjectCreateProps> = ({ addProject }) => {
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
      alert("Enter project name");
      return;
    }

    const item = { id: uuidv4(), title: value };
    addProject(item);
    setValue("");
    setOpen(false);
  };

  return (
    <div ref={createRef} className={style.project_create}>
      {open ? (
        <form onSubmit={onSubmit}>
          <input type="text" value={value} onChange={onChangeValue} autoFocus />
          <button>
            <GlobalSvgSelector id="check" />
          </button>
        </form>
      ) : (
        <button className={style.button} onClick={() => setOpen(true)}>
          Добавить задачу
        </button>
      )}
    </div>
  );
};

export default ProjectCreate;
