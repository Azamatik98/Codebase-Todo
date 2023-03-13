import React from "react";
import "./CreateTaskBoard.scss";

interface CreateTaskBoardProps {}

const CreateTaskBoard: React.FC<CreateTaskBoardProps> = ({}) => {
  return (
    <div className="wrapper">
      <div className="create_title">Create Task</div>
      <form className="create_form">
        <input type="text" placeholder="Title" required />
        <textarea
          name="Description"
          id="Description"
          rows={5}
          placeholder="Description"
          required
        ></textarea>
        <select name="priority" id="priority" required>
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
