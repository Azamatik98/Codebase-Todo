export type FilterState = {
  searchValue: string;
};

export enum FilterActionTypes {
  SET_SERCH = "SET_SEARCH",
}

interface UpdateTaskAction {
  type: FilterActionTypes.SET_SERCH;
  payload: string;
}

export type FilterAction = UpdateTaskAction;
