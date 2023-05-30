import { combineReducers } from "redux";
import apiReducer from "./apiReducer";
import filtersReducer from "./filtersReducer";
import deleteReducer from "./deleteReducer";

// combining reducers into one
export default combineReducers({
  apiReducer,
  filtersReducer,
  deleteReducer,
});
