import { SET_LIKES, UPDATE_LIKES } from "../actions/likesTypes";

export default function likesReducer(state = {}, action) {
  switch (action.type) {
    case SET_LIKES:
      return { ...state, setLikes: action.payload };

    case UPDATE_LIKES:
      return { ...state, updateLikes: action.payload };

    default:
      return state;
  }
}
