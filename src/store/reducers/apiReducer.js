import { SET_DATA } from "../actions/apiTypes";
import { DELETE_CHARACTER } from "../actions/deleteTypes";
const initialState = {
  simpsons: null,
};

export default function apiReducer(state = initialState, action) {
  switch (action.type) {
    case SET_DATA:
      return { ...state, simpsons: action.payload };
    case DELETE_CHARACTER:
      const indexOf = state.simpsons.findIndex(
        (item) => item.character === action.payload
      );
      const simpsons = [...state.simpsons];
      simpsons.splice(indexOf, 1);
      return { ...state, simpsons };
    default:
      return state;
  }
}
