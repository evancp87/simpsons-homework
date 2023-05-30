export const SET_LIKES = "SET_LIKES";

export function setLikes(id) {
  return {
    type: SET_LIKES,
    payload: id,
  };
}
