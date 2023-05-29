export const UPDATE_LIKES = "UPDATE_LIKES";
export const SET_LIKES = "SET_LIKES";

export function updateLikes(character) {
  return {
    type: UPDATE_LIKES,
    payload: character,
  };
}

export function setLikes(character) {
  return {
    type: SET_LIKES,
    payload: character,
  };
}
