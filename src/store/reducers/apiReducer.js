import { SET_DATA } from "../actions/apiTypes";
import { DELETE_CHARACTER } from "../actions/deleteTypes";
import { SET_LIKES } from "../actions/likesTypes";
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
    case SET_LIKES:
      const indexOfLike = state.simpsons.findIndex((char) => {
        return char.id === action.payload;
      });

      const simpsonsCopy = [...state.simpsons];

      const updatedCharacter = {
        ...simpsonsCopy[indexOfLike],
        liked: !simpsonsCopy[indexOfLike].liked,
      };
      simpsonsCopy[indexOfLike] = updatedCharacter;

      return { ...state, simpsons: simpsonsCopy };

    default:
      return state;
  }
}
