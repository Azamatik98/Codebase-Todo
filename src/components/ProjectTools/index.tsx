import React from "react";
import debounce from "lodash.debounce";
import Modal from "../Modal/Modal";
import CreateTaskBoard from "../CreateTaskBoard";
import { useAppDispatch } from "../../hook";
import { FilterActionTypes } from "../../types/filter";
import style from "./TaskTools.module.scss";

interface ProjectToolsProps {}

const ProjectTools: React.FC<ProjectToolsProps> = () => {
  const dispatch = useAppDispatch();
  const [open, setOpen] = React.useState<boolean>(false);
  const [value, setValue] = React.useState<string>("");

  const updateSearchValue = React.useCallback(
    debounce((str) => {
      dispatch({ type: FilterActionTypes.SET_SERCH, payload: str });
    }, 1000),
    []
  );

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    updateSearchValue(e.target.value);
  };

  return (
    <>
      <div className={style.tools}>
        <button onClick={() => setOpen(true)}>Create Task</button>
        <input
          type="text"
          placeholder="Поиск..."
          value={value}
          onChange={onChangeInput}
        />
      </div>
      <Modal setOpen={setOpen} isOpen={open}>
        <CreateTaskBoard setOpen={setOpen} />
      </Modal>
    </>
  );
};

export default ProjectTools;
