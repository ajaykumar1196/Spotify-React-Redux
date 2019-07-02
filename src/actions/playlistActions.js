import * as playlistConstants from "../constants/actionConstants";
import { spotify } from "../utils/authUtil";

const fetchPlaylistTracksPending = () => {
  return {
    type: playlistConstants.FETCH_PLAYLIST_TRACKS_PENDING
  };
};

const fetchPlaylistTracksFailure = err => {
  return {
    type: playlistConstants.FETCH_PLAYLIST_TRACKS_FAILURE,
    payload: err
  };
};

const fetchPlaylistTracksSuccess = (playlistTracks, playlistID) => {
  return {
    type: playlistConstants.FETCH_PLAYLIST_TRACKS_SUCCESS,
    payload: {
      playlistTracks,
      playlistID
    }
  };
};

export const fetchPlaylistTracks = playlistID => dispatch => {
  dispatch(fetchPlaylistTracksPending());
  return spotify()
    .get(process.env.REACT_APP_BASE_URL + `/playlists/${playlistID}/tracks`)
    .then(res => {
      dispatch(fetchPlaylistTracksSuccess(res.data, playlistID));
    })
    .catch(err => {
      dispatch(fetchPlaylistTracksFailure(err));
    });
};
