import {
  FilterAction,
  FilterActionTypes,
  FilterState,
} from "../../types/filter";

const initialState: FilterState = {
  searchValue: "",
};

export const filterReducer = (
  state = initialState,
  action: FilterAction
): FilterState => {
  switch (action.type) {
    case FilterActionTypes.SET_SERCH:
      return { ...state, searchValue: action.payload };
    default:
      return state;
  }
};
