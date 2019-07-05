import * as currentUserConstants from "../constants/actionConstants";
import { spotify } from "../utils/authUtil";

const fetchCurrentUserPlaylistsPending = () => {
  return {
    type: currentUserConstants.FETCH_CURRENT_USER_PLAYLISTS_PENDING
  };
};

const fetchCurrentUserPlaylistsFailure = err => {
  return {
    type: currentUserConstants.FETCH_CURRENT_USER_PLAYLISTS_FAILURE,
    payload: err
  };
};

const fetchCurrentUserPlaylistsSuccess = currentUserPlaylists => {
  return {
    type: currentUserConstants.FETCH_CURRENT_USER_PLAYLISTS_SUCCESS,
    payload: currentUserPlaylists
  };
};

export const fetchCurrentUserPlaylists = () => dispatch => {
  dispatch(fetchCurrentUserPlaylistsPending());
  return spotify()
    .get(process.env.REACT_APP_BASE_URL + "/me/playlists")
    .then(res => {
      dispatch(fetchCurrentUserPlaylistsSuccess(res.data));
    })
    .catch(err => {
      dispatch(fetchCurrentUserPlaylistsFailure(err));
    });
};
