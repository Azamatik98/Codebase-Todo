export type TypeTask = {
  id: string;
  title: string;
};

export type TTask = {
  id: string;
  task: string;
  title: string;
  description: string;
  status: "Queue" | "Development" | "Done";
};

export type TaskState = {
  task: TypeTask;
  tasks: [];
};

export enum TaskActionTypes {
  SET_TASK = "SET_TASK",
  SET_TASKS = "SET_TASKS",
}

interface SetTaskAction {
  type: TaskActionTypes.SET_TASK;
  payload: TypeTask;
}

interface SetTasksAction {
  type: TaskActionTypes.SET_TASKS;
  payload: TTask[];
}

export type TaskAction = SetTaskAction | SetTasksAction;
