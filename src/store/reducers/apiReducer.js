import { SET_DATA } from "../actions/apiTypes";

const initialState = {
  simpsons: null,
};

export default function apiReducer(state = initialState, action) {
  switch (action.type) {
    case SET_DATA:
      return { ...state, simpsons: action.payload };
    default:
      return state;
  }
}
