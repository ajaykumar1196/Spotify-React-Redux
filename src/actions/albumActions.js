import * as albumConstants from "../constants/actionConstants";
import { spotify } from "../utils/authUtil";

const fetchAlbumTracksPending = () => {
  return {
    type: albumConstants.FETCH_ALBUM_TRACKS_PENDING
  };
};

const fetchAlbumTracksFailure = err => {
  return {
    type: albumConstants.FETCH_ALBUM_TRACKS_FAILURE,
    payload: err
  };
};

const fetchAlbumTracksSuccess = (albumTracks, albumID) => {
  return {
    type: albumConstants.FETCH_ALBUM_TRACKS_SUCCESS,
    payload: {
      albumTracks,
      albumID
    }
  };
};

export const fetchAlbumTracks = albumID => dispatch => {
  dispatch(fetchAlbumTracksPending());
  return spotify()
    .get(process.env.REACT_APP_BASE_URL + `/albums/${albumID}`)
    .then(res => {
      dispatch(fetchAlbumTracksSuccess(res.data, albumID));
    })
    .catch(err => {
      dispatch(fetchAlbumTracksFailure(err));
    });
};
