export const DELETE_CHARACTER = "DELETE_CHARACTER";

export function deleteCharacter(character) {
  return {
    type: DELETE_CHARACTER,
    payload: character,
  };
}
