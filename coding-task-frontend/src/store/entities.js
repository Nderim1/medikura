import { combineReducers } from "redux";
import wordsReducer from "./words";

export default combineReducers({
  words: wordsReducer,
});
