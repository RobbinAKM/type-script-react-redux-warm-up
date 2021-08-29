import { combineReducers } from "redux";
import repositoriesReducers from "./repositoriesReducer";

var reducers = combineReducers({
  repositories: repositoriesReducers,
});

export default reducers;
