import { combineReducers } from "redux";
import user from "../reducers/userReducer";
import player from "../reducers/playerReducer";
import browse from "../reducers/browseReducer";
import playlist from "../reducers/playlistReducer";
import currentUser from "../reducers/currentUserReducer";
export default combineReducers({
  user,
  player,
  browse,
  playlist,
  currentUser
});
