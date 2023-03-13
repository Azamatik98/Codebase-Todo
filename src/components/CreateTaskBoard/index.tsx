import React from "react";
import { useAppDispatch, useAppSelector } from "../../hook";
import { ProjectActionTypes, TProject, TTask } from "../../types/project";
import style from "./CreateTaskBoard.module.scss";

interface CreateTaskBoardProps {
  setOpen: (arg0: boolean) => void;
}

const CreateTaskBoard: React.FC<CreateTaskBoardProps> = ({ setOpen }) => {
  const dispatch = useAppDispatch();
  const { id }: TProject = useAppSelector((state) => state.project.project);
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [priority, setPriority] = React.useState("");

  const onSubmitForm = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const created = new Date().valueOf();
    const item: TTask = {
      id: created.toString(),
      project: id,
      title,
      description,
      status: "queue",
      priority,
      subtasks: [],
      attachments: [],
      comments: [],
      created,
      started: null,
      done: null,
    };

    dispatch({ type: ProjectActionTypes.ADD_TASK, payload: item });
    setTitle("");
    setDescription("");
    setPriority("");
    setOpen(false);
  };

  return (
    <div className={style.wrapper}>
      <div className={style.create_title}>Create Task</div>
      <form className={style.create_form} onSubmit={onSubmitForm}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          name="Description"
          id="Description"
          rows={5}
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        ></textarea>
        <select
          name="priority"
          id="priority"
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          required
        >
          <option value="">Select Priority</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
        <button>Create</button>
      </form>
    </div>
  );
};

export default CreateTaskBoard;
