import { combineReducers } from "redux";
import apiReducer from "./apiReducer";
import filtersReducer from "./filtersReducer";
import likesReducer from "./likesReducer";
import deleteReducer from "./deleteReducer";

export default combineReducers({
  apiReducer,
  filtersReducer,
  likesReducer,
  deleteReducer,
});
