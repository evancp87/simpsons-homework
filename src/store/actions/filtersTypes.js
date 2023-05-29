export const SET_SIMPSONS_INPUT = "SET_SIMPSONS_INPUT";
export const SET_SIMPSONS_SORT = "SET_SIMPSONS_SORT";
// export const FILTER_CHARACTERS = "FILTER_CHARACTERS";
export const SORT_CHARACTERS = "SORT_CHARACTERS";
export const RESET_FILTERS = "RESET_FILTERS";
export const SET_SEARCH_INPUT = "SET_SEARCH_INPUT";

// action creators

export function setSimpsonsInput(e) {
  return {
    type: SET_SIMPSONS_INPUT,
    payload: e.target.value,
  };
}

export function setSimpsonsSort(e) {
  return {
    type: SET_SIMPSONS_SORT,
    payload: e.target.value,
  };
}

export function resetFiltersType() {
  return {
    type: RESET_FILTERS,
  };
}

// export function filteredSimpsons() {
//   return {
//     type: FILTER_CHARACTERS,
//     payload: data,
//   };
// }
