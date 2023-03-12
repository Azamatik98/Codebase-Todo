import React from "react";
import "./TaskList.scss";
import TaskListItem from "./TaskListItem";
import TaskCreate from "./TaskCreate";
import { TypeTask } from "../../types/task";

interface TaskListProps {}

const TaskList: React.FC<TaskListProps> = () => {
  const [tasks, setTasks] = React.useState<TypeTask[]>(
    JSON.parse(localStorage.getItem("tasks") || "null") || []
  );

  React.useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (item: TypeTask) => {
    setTasks((prevState) => [...prevState, item]);
  };

  const deleteTask = (id: string) => {
    if (window.confirm("Delete task?")) {
      setTasks((prevState) => prevState.filter((item) => item.id !== id));
    }
  };

  return (
    <div className="wrapper">
      {tasks.map((task, i) => (
        <TaskListItem key={task.id} deleteTask={deleteTask} {...task} />
      ))}

      <TaskCreate addTask={addTask} />
    </div>
  );
};

export default TaskList;
