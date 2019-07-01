import { combineReducers } from "redux";
import user from "../reducers/userReducer";
import player from "../reducers/playerReducer";
import browse from "../reducers/browseReducer";
export default combineReducers({
  user,
  player,
  browse
});
