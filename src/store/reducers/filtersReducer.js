import {
  SET_SIMPSONS_INPUT,
  SET_SIMPSONS_SORT,
  RESET_FILTERS,
} from "../actions/filtersTypes";

const initialState = {
  searchInput: "",
  sortInput: "",
};

export default function filtersReducer(state = initialState, action) {
  switch (action.type) {
    case SET_SIMPSONS_INPUT:
      return { ...state, searchInput: action.payload };

    case SET_SIMPSONS_SORT:
      return { ...state, sortInput: action.payload };

    case RESET_FILTERS:
      return initialState;
    default:
      return state;
  }
}
