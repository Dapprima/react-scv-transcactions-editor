import { combineReducers } from "redux";
import fileReducer from "./reducers/file";
import uiReducer from "./reducers/ui";

export default combineReducers({
  fileReducer,
  uiReducer,
});
