import { combineReducers } from "redux";
import user from "../reducers/userReducer";
import player from "../reducers/playerReducer";
export default combineReducers({
  user,
  player
});
