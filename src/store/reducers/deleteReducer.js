import { DELETE_CHARACTER } from "../actions/deleteTypes";

export default function deleteReducer(state = [], action) {
  switch (action.type) {
    case DELETE_CHARACTER:
      return { ...state, delete: action.payload };
    default:
      return state;
  }
}
