import { combineReducers } from "redux";
import user from "./userReducer";
import player from "./playerReducer";
import browse from "./browseReducer";
import playlist from "./playlistReducer";
import currentUser from "./currentUserReducer";
import album from "./albumReducer";
import artist from "./artistReducer";

export default combineReducers({
  user,
  player,
  browse,
  playlist,
  album,
  artist,
  currentUser
});
