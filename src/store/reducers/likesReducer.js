import {
  SET_LIKES,
  UPDATE_LIKES,
  SET_SINGLE_LIKE,
} from "../actions/likesTypes";

export default function likesReducer(state = {}, action) {
  switch (action.type) {
    case SET_LIKES:
      return { ...state, setLikes: action.payload };

    case UPDATE_LIKES:
      return { ...state, updateLikes: action.payload };

    case SET_SINGLE_LIKE:
      const singleLike = {
        ...state.likes,
        [action.payload]: 1,
      };
      return {
        ...state,
        likes: singleLike,
      };
    default:
      return state;
  }
}
