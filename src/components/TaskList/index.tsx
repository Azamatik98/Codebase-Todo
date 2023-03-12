import React from "react";
import "./TaskList.scss";
import TaskListItem from "./TaskListItem";
import TaskCreate from "./TaskCreate";

interface TaskListProps {}

export type TypeTask = {
  id: string;
  title: string;
};

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

  return (
    <div className="wrapper">
      {tasks.map((task, i) => (
        <TaskListItem key={task.id} {...task} />
      ))}

      <TaskCreate addTask={addTask} />
    </div>
  );
};

export default TaskList;
